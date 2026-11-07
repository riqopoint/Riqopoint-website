import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Quietly accept honeypot submissions without sending email.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 100);
    const organisation = clean(body.organisation, 150);
    const email = clean(body.email, 254);
    const industry = clean(body.industry, 120);
    const topic = clean(body.topic, 150);
    const message = clean(body.message, 6000);

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email and challenge description." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.RIQOPOINT_TO_EMAIL || "friendsclubyr@gmail.com";
    const sender = process.env.RIQOPOINT_FROM_EMAIL;

    if (!apiKey || !sender) {
      console.error("Enquiry email is not configured: RESEND_API_KEY or RIQOPOINT_FROM_EMAIL is missing.");
      return NextResponse.json({ error: "The enquiry service is not configured yet." }, { status: 503 });
    }

    const emailText = [
      "A new project enquiry was submitted through the RIQOPOINT website.",
      "",
      `Name: ${name}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Email: ${email}`,
      `Industry: ${industry || "Not specified"}`,
      `Area of interest: ${topic || "Not specified"}`,
      "",
      "Challenge:",
      message
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `RIQOPOINT website enquiry — ${name}`,
        text: emailText
      })
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      console.error("Resend API error:", detail);
      return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry endpoint error:", error);
    return NextResponse.json({ error: "Unable to process enquiry." }, { status: 500 });
  }
}

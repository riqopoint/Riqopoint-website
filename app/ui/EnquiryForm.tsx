"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Enquiry submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="formHead"><b>PROJECT ENQUIRY</b><span>LET'S TALK ↗</span></div>
      <label>Your name<input name="name" required maxLength={100} placeholder="Full name" /></label>
      <div className="formRow">
        <label>Organisation<input name="organisation" maxLength={150} placeholder="Company / organisation" /></label>
        <label>Work email<input name="email" type="email" required maxLength={254} placeholder="name@company.com" /></label>
      </div>
      <label>Industry
        <select name="industry" defaultValue="">
          <option value="">Select an industry (optional)</option>
          <option>Metals, steel & manufacturing</option>
          <option>Automotive & engineering</option>
          <option>Energy & battery technologies</option>
          <option>Chemicals & process industries</option>
          <option>Construction & infrastructure</option>
          <option>Other industry</option>
        </select>
      </label>
      <label>Area of interest
        <select name="topic" defaultValue="">
          <option value="">Select a service area (optional)</option>
          <option>Failure analysis & root-cause investigation</option>
          <option>Materials research & characterisation</option>
          <option>Product & process development</option>
          <option>Energy & electrochemical systems</option>
          <option>Engineering analytics & modelling</option>
          <option>Custom industrial R&D</option>
          <option>Other / not sure yet</option>
        </select>
      </label>
      <label>Tell us about the challenge
        <textarea name="message" rows={4} required maxLength={6000} placeholder="What is happening, what have you tried, and what would you like to understand or improve?" />
      </label>
      {/* Honeypot field to deter basic automated spam. Keep it hidden from real visitors. */}
      <div className="hpField" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting..." : "Submit enquiry"} <span>↗</span>
      </button>
      {status === "success" && (
        <p className="success" role="status">Enquiry submitted. A RIQOPOINT associate will get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="error" role="alert">We couldn't submit your enquiry. Please try again in a moment or contact us by email.</p>
      )}
      <small className="note">Your enquiry will be sent securely to the RIQOPOINT team. Please do not include confidential or sensitive information in this form.</small>
    </form>
  );
}

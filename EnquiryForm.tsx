"use client";
import { FormEvent, useState } from "react";
export default function EnquiryForm() {
 const [submitted,setSubmitted]=useState(false);
 function submit(e:FormEvent<HTMLFormElement>) {
  e.preventDefault(); const d=new FormData(e.currentTarget);
  const to=process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@riqopoint.com";
  const subject=encodeURIComponent("RIQOPOINT project enquiry: "+(d.get("topic")||"Industrial challenge"));
  const body=encodeURIComponent(`Name: ${d.get("name")}\nOrganisation: ${d.get("organisation")}\nEmail: ${d.get("email")}\nArea: ${d.get("topic")}\n\nChallenge:\n${d.get("message")}`);
  window.location.href=`mailto:${to}?subject=${subject}&body=${body}`; setSubmitted(true);
 }
 return <form className="form" onSubmit={submit}><div className="formHead"><b>PROJECT ENQUIRY</b><span>LET'S TALK ↗</span></div>
 <label>Your name<input name="name" required placeholder="Full name"/></label>
 <div className="formRow"><label>Organisation<input name="organisation" placeholder="Company / organisation"/></label><label>Work email<input name="email" type="email" required placeholder="name@company.com"/></label></div>
 <label>Area of interest<select name="topic" defaultValue=""><option value="" disabled>Select a service area</option><option>Failure analysis & root-cause investigation</option><option>Materials research & characterisation</option><option>Product & process development</option><option>Energy & electrochemical systems</option><option>Engineering analytics & modelling</option><option>Custom industrial R&D</option><option>Other / not sure yet</option></select></label>
 <label>Tell us about the challenge<textarea name="message" rows={4} required placeholder="What is happening, what have you tried, and what would you like to understand or improve?"/></label>
 <button type="submit">Prepare enquiry <span>↗</span></button><small className="note">This form opens your email application with the enquiry pre-filled. It does not store submissions on this website.</small>{submitted&&<small className="success">Your email application should open. If it does not, email us directly.</small>}</form>
}

"use client";
import {useEffect,useState} from "react";
import {INDUSTRIES} from "@/lib/content";
type S="idle"|"sending"|"ok"|"err";
export default function Enquiry(){
const[s,setS]=useState<S>("idle");const[msg,setMsg]=useState("");const[capability,setCapability]=useState("");
useEffect(()=>{const p=new URLSearchParams(window.location.search);const c=p.get("capability");if(c){setCapability(c);}},[]);
async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setS("sending");setMsg("");
const f=e.currentTarget;const fd=new FormData(f);
try{const r=await fetch("/api/enquiry",{method:"POST",body:fd});const j=await r.json();
if(r.ok){setS("ok");f.reset()}else{setS("err");setMsg(j.error||"Something went wrong.")}}
catch{setS("err");setMsg("Network error. Please try again.")}}
if(s==="ok")return <div className="ok" role="status"><h3>Enquiry submitted.</h3><p>A RIQOPOINT associate will get back to you shortly.</p></div>;
return(<form onSubmit={submit} className="form">
<input type="hidden" name="capability" value={capability}/>
<input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true"/>
{capability&&<p className="selected-capability wide"><span>Enquiring about</span><strong>{capability}</strong></p>}
<label>Name<input name="name" required maxLength={100} autoComplete="name"/></label>
<label>Organisation<input name="org" required maxLength={150} autoComplete="organization"/></label>
<label>Work email<input name="email" type="email" required maxLength={150} autoComplete="email"/></label>
<label>Industry<select name="industry" required defaultValue=""><option value="" disabled>Select</option>{INDUSTRIES.map(x=><option key={x}>{x}</option>)}</select></label>
<label>Type of challenge<select name="type" required defaultValue=""><option value="" disabled>Select</option><option>Failure or degradation</option><option>Material question</option><option>Process or product</option><option>Battery or electrochemical</option><option>Data and modelling</option><option>Not sure yet</option></select></label>
<label className="wide">Describe the problem<textarea name="message" required minLength={20} maxLength={4000} rows={5} placeholder="What is happening, what has been tried, what outcome do you need?"/></label>
<p className="note wide">Not sure which service you need? That is normal. Describe the problem and we will work out the rest. Please do not send confidential files yet; we will agree a secure route after first contact.</p>
<button className="btn" disabled={s==="sending"}>{s==="sending"?"Submitting…":"Submit enquiry"}</button>
{s==="err"&&<p role="alert" className="err wide">{msg}</p>}
<p className="note wide">Your details are used only to respond to this enquiry.</p>
</form>)}

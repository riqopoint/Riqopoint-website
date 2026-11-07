import EnquiryForm from "./ui/EnquiryForm";

const services = [
["01","Failure analysis & root-cause investigation","Investigate why components, materials and systems fail through structured testing, evidence and technical interpretation.","Fracture & fatigue","Corrosion & wear"],
["02","Materials research & characterisation","Understand composition, microstructure, phases and properties to support sound engineering decisions.","SEM / EDS","XRD & spectroscopy"],
["03","Product & process development","Improve product performance, troubleshoot manufacturing processes and evaluate material or design alternatives.","Process improvement","Material selection"],
["04","Energy & electrochemical systems","Support technical evaluation of batteries, electrodes, electrochemical materials and energy-storage systems.","Electrode development","Degradation studies"],
["05","Engineering analytics & modelling","Turn experimental and operational data into actionable insight through analysis, modelling and optimisation.","Data analysis","Technical modelling"],
["06","Custom industrial R&D","Define unfamiliar technical challenges, build an investigation plan and bring together the expertise needed to address them.","Feasibility studies","Specialist collaboration"]
];
const steps = [
["01","Understand","We learn the operating context, symptoms, constraints and decision you need to make."],
["02","Define","We agree the scope, investigation plan, resources, deliverables, cost and timeline."],
["03","Investigate","We coordinate appropriate testing, analysis, experiments or modelling."],
["04","Interpret","We connect the evidence to the underlying mechanism and separate findings from assumptions."],
["05","Recommend","You receive clear conclusions, practical recommendations and next steps."]
];
const industries = ["Metals, steel & manufacturing","Automotive & engineering","Energy & battery technologies","Chemicals & process industries","Infrastructure & construction","Other technology-led industries"];

export default function Home() {
 return <main>
  <header className="header"><a className="brand" href="#home"><span className="mark">R<span>·</span>P</span><span>RIQO<span className="light">POINT</span></span></a><nav><a href="#about">About</a><a href="#services">Capabilities</a><a href="#approach">Our approach</a><a className="navbutton" href="#contact">Discuss a challenge ↗</a></nav></header>
  <section className="hero" id="home"><div className="grid"></div><div className="heroText"><div className="eyebrow">INDEPENDENT INDUSTRIAL R&D & ENGINEERING</div><h1>Complex challenges.<br/><em>Clear direction.</em></h1><p>We investigate technical problems, bring the right expertise together and develop evidence-led solutions that move industry forward.</p><div className="actions"><a className="button" href="#contact">Discuss your challenge ↗</a><a className="plainlink" href="#services">Explore our capabilities ↓</a></div></div><div className="orbit"><div className="ring"></div><div className="core">R <small>→</small> Q</div><span className="top">RESEARCH</span><span className="right">INNOVATION</span><span className="bottom">QUALITY</span><span className="left">OPTIMISATION</span></div><div className="heroFoot"><span>RESEARCH · INNOVATION · QUALITY · OPTIMISATION</span><span>SCROLL TO EXPLORE ↓</span></div></section>
  <section className="section intro" id="about"><div className="kicker">01 / WHO WE ARE</div><div className="twoCol"><h2>We exist to <em>solve what matters.</em></h2><div><p>RIQOPOINT is an independent industrial R&D and engineering consultancy founded by IIT graduates, focused on solving real technical challenges. We combine research-led thinking, practical engineering and specialist collaboration to help organisations make better decisions.</p><p>From understanding a material failure to evaluating a new process or investigating an unfamiliar technical problem, we build each engagement around the question that needs answering.</p></div></div><div className="pillars">{[["R","Research","Understand the evidence."],["I","Innovation","Explore better approaches."],["Q","Quality","Work with technical rigour."],["O","Optimisation","Improve real outcomes."]].map(x=><div key={x[0]}><b>{x[0]}</b><strong>{x[1]}</strong><small>{x[2]}</small></div>)}</div></section>
  <section className="services" id="services"><div className="section"><div className="kicker">02 / WHAT WE DO</div><div className="heading"><h2>Technical depth.<br/><em>Practical outcomes.</em></h2><p>We take on defined technical projects and assemble the right capabilities around each challenge. Our work is grounded in evidence, not assumptions.</p></div><div className="serviceGrid">{services.map(s=><article className="service" key={s[0]}><div className="serviceNo">{s[0]} <span>↗</span></div><h3>{s[1]}</h3><p>{s[2]}</p><div className="tags"><span>{s[3]}</span><span>{s[4]}</span></div></article>)}</div></div></section>
  <section className="section industries"><div className="kicker">03 / WHERE WE WORK</div><div className="twoCol"><h2>Different industries.<br/><em>One problem-solving mindset.</em></h2><div><p>Our approach is sector-agnostic. We begin with the technical challenge, then identify the methods, facilities and expertise required to investigate it responsibly.</p><div className="industryList">{industries.map((x,i)=><div key={x}><small>0{i+1}</small>{x}<b>↗</b></div>)}</div></div></div></section>
  <section className="section experience" id="experience">
    <div className="kicker">04 / EXPERIENCE THAT SHAPES SOLUTIONS</div>
    <div className="twoCol">
      <h2>Industry experience.<br/><em>Research-led thinking.</em></h2>
      <div>
        <p>RIQOPOINT's approach is informed by the founding team's previous professional experience across industrial manufacturing, applied technology and engineering environments. The examples below describe prior individual experience, not projects undertaken by RIQOPOINT.</p>
      </div>
    </div>
    <div className="serviceGrid experienceGrid">
      <article className="service">
        <div className="serviceNo">SELECTED EXPERIENCE <span>↗</span></div>
        <h3>Jindal Saw</h3>
        <p><strong>Industrial pipe failure investigation.</strong> Previous consulting experience involving material characterisation and scientific analysis to investigate a pipe failure and its underlying technical cause.</p>
        <div className="tags"><span>Failure investigation</span><span>Materials analysis</span></div>
      </article>
      <article className="service">
        <div className="serviceNo">FOUNDING TEAM EXPERIENCE <span>↗</span></div>
        <h3>Chakra Innovation</h3>
        <p>Previous professional experience associated with applied research and technology development. Further project details can be added when approved for publication.</p>
        <div className="tags"><span>Applied research</span><span>Technology experience</span></div>
      </article>
      <article className="service">
        <div className="serviceNo">FOUNDING TEAM EXPERIENCE <span>↗</span></div>
        <h3>HBL</h3>
        <p>Previous professional experience associated with industrial engineering and technical development. Further project details can be added when approved for publication.</p>
        <div className="tags"><span>Engineering</span><span>Industrial experience</span></div>
      </article>
    </div>
    <p className="note">These are examples of prior experience of individual team members. The organisations named are not represented as RIQOPOINT clients, partners or endorsers.</p>
  </section>

  <section className="approach" id="approach"><div className="section"><div className="kicker">04 / HOW WE WORK</div><div className="heading"><h2>A clear path from<br/><em>question to answer.</em></h2><p>Every project is scoped to its technical requirements. You know what will be investigated, how it will be approached and what you will receive.</p></div><div className="steps">{steps.map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div><b>+</b></div>)}</div></div></section>
  <section className="section model"><div className="modelBox"><div className="kicker">05 / A FLEXIBLE PROJECT MODEL</div><div className="twoCol"><h2>The right expertise.<br/><em>For the right problem.</em></h2><div><p>RIQOPOINT is designed to stay agile. Our core team leads client engagement, technical direction and quality assurance, while specialist researchers, engineers and qualified testing facilities can be brought in when a project requires them.</p><p>This lets us build a project team around the challenge instead of carrying unnecessary fixed overheads.</p><a className="darklink" href="#contact">Tell us what you are working on ↗</a></div></div><div className="modelFoot"><span>01 / DEFINE THE NEED</span><span>02 / ASSEMBLE EXPERTISE</span><span>03 / DELIVER THE FINDINGS</span></div></div></section>
  <section className="contact" id="contact"><div className="section contactGrid"><div><div className="kicker">06 / START A CONVERSATION</div><h2>What needs<br/><em>solving?</em></h2><p>Tell us about the technical challenge, the decision you are facing or the outcome you need. We will review the brief and discuss whether we are the right team to help.</p><div className="promise">↗ &nbsp; A focused conversation. A clear next step.</div></div><EnquiryForm/></div></section>
  <footer><div className="footerTop"><a className="brand footBrand" href="#home"><span className="mark">R<span>·</span>P</span><span>RIQO<span className="light">POINT</span></span></a><div className="tagline">Solve What Matters.</div><a href="#contact">Start a conversation ↗</a></div><div className="footerBottom"><span>© {new Date().getFullYear()} RIQOPOINT. All rights reserved.</span><span>RESEARCH · INNOVATION · QUALITY · OPTIMISATION</span></div></footer>
 </main>
}

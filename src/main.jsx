import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  Factory,
  Settings,
  Boxes,
  HardHat,
  Leaf,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Activity,
  Briefcase,
  FileCheck2,
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Settings,
    title: "Engineering & Technical Services",
    text: "Engineering, fabrication, instrumentation, maintenance and technical support for industrial operations.",
  },
  {
    icon: Factory,
    title: "Oil & Gas Operations",
    text: "Field support, production support, pipeline services, inspection and operational maintenance.",
  },
  {
    icon: Boxes,
    title: "Procurement & Supply",
    text: "Industrial equipment, spare parts, safety equipment and technical materials for project delivery.",
  },
  {
    icon: Activity,
    title: "Energy Infrastructure",
    text: "Reliable infrastructure and power solutions designed around industrial and commercial requirements.",
  },
];
const projects = [
  {
    title: "Offshore Production Support",
    tag: "DEMO PROJECT",
    loc: "Lagos, Nigeria",
    text: "Integrated technical and maintenance support for an offshore production operation.",
  },
  {
    title: "Gas Processing Facility",
    tag: "DEMO PROJECT",
    loc: "Delta State, Nigeria",
    text: "Engineering and equipment-support concept for a modular gas processing facility.",
  },
  {
    title: "Pipeline Integrity Programme",
    tag: "DEMO PROJECT",
    loc: "Rivers State, Nigeria",
    text: "Inspection, maintenance and integrity-management programme for critical pipeline assets.",
  },
];
const stats = [
  ["12+", "Years of combined capability"],
  ["38", "Demo projects supported"],
  ["24/7", "Operational support"],
  ["100%", "Safety-first approach"],
];

function App() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <div className="app">
      <div className="demoBar">
        DEMONSTRATION WEBSITE · NEXORA ENERGY & RESOURCES LTD. · ALL COMPANY
        INFORMATION IS FICTIONAL
      </div>
      <nav>
        <a className="brand" href="#home">
          <span>NEXORA</span>
          <small>ENERGY & RESOURCES</small>
        </a>
        <div className={open ? "links open" : "links"}>
          {[
            "About",
            "Services",
            "Operations",
            "Projects",
            "Sustainability",
            "Careers",
          ].map((x) => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {x}
            </a>
          ))}
          <button onClick={() => setModal(true)} className="navCta">
            Talk to our team <ArrowUpRight size={16} />
          </button>
        </div>
        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <main>
        <section id="home" className="hero">
          <div className="heroBg" />
          <div className="heroGrid" />
          <div className="heroContent">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow"
            >
              INTEGRATED ENERGY · ENGINEERING · INDUSTRIAL SERVICES
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              Powering energy.
              <br />
              <em>Engineering progress.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lead"
            >
              A modern energy company concept built around engineering
              discipline, operational reliability and responsible delivery
              across the energy value chain.
            </motion.p>
            <div className="heroActions">
              <button
                onClick={() =>
                  document
                    .querySelector("#services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore capabilities <ArrowUpRight size={18} />
              </button>
              <button className="ghost" onClick={() => setModal(true)}>
                Talk to our team
              </button>
            </div>
          </div>
          <div className="heroBadge">
            <ShieldCheck size={18} />
            <div>
              <b>SAFETY FIRST</b>
              <span>Built around responsible operations</span>
            </div>
          </div>
        </section>
        <section className="intro" id="about">
          <div className="sectionLabel">01 / COMPANY</div>
          <div className="introText">
            <p className="kicker">NEXORA ENERGY & RESOURCES</p>
            <h2>
              Technical capability with a <span>commercial mindset.</span>
            </h2>
            <p>
              We help industrial and energy clients move projects forward
              through integrated engineering, procurement, maintenance and
              field-support capabilities.
            </p>
            <p className="muted">
              This demonstration shows how a serious Nigerian energy business
              could present its capabilities online to clients, partners,
              procurement teams and prospective employees.
            </p>
          </div>
        </section>
        <section className="stats">
          {stats.map(([n, t], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <strong>{n}</strong>
              <span>{t}</span>
            </motion.div>
          ))}
        </section>
        <section id="services" className="services section">
          <div className="sectionLabel">02 / CAPABILITIES</div>
          <div className="sectionHead">
            <div>
              <p className="kicker">WHAT WE DO</p>
              <h2>
                Built for complex <span>operations.</span>
              </h2>
            </div>
            <p>
              From technical support to procurement and infrastructure, the
              service structure is designed to make a company’s capability easy
              to understand.
            </p>
          </div>
          <div className="serviceGrid">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="icon">
                  <s.icon />
                </div>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#contact">
                  Explore capability <ChevronRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>
        <section id="operations" className="operations">
          <div className="sectionLabel">03 / OPERATIONS</div>
          <div className="operationIntro">
            <p className="kicker">THE ENERGY VALUE CHAIN</p>
            <h2>
              One platform. <span>Multiple capabilities.</span>
            </h2>
          </div>
          <div className="chain">
            <div>
              <small>UPSTREAM</small>
              <h3>Field Support</h3>
              <p>Production support, inspection and technical services.</p>
            </div>
            <div className="arrow">→</div>
            <div>
              <small>MIDSTREAM</small>
              <h3>Infrastructure</h3>
              <p>Pipeline, processing and equipment support.</p>
            </div>
            <div className="arrow">→</div>
            <div>
              <small>DOWNSTREAM</small>
              <h3>Industrial Solutions</h3>
              <p>Supply, maintenance and energy infrastructure.</p>
            </div>
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="sectionLabel">04 / PROJECTS</div>
          <div className="sectionHead">
            <div>
              <p className="kicker">SELECTED WORK</p>
              <h2>
                Project thinking, <span>made visible.</span>
              </h2>
            </div>
            <p>
              Demonstration projects only — a real client site would replace
              these with verified project history and approved imagery.
            </p>
          </div>
          <div className="projectGrid">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={"projectImage p" + i}>
                  <span>{p.tag}</span>
                </div>
                <small>{p.loc}</small>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#contact">
                  View project <ArrowUpRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>
        <section className="safety" id="sustainability">
          <div className="safetyVisual">
            <div className="ring r1" />
            <div className="ring r2" />
            <HardHat size={58} />
          </div>
          <div>
            <p className="kicker">05 / HSE & SUSTAINABILITY</p>
            <h2>
              Responsible operations are <span>non-negotiable.</span>
            </h2>
            <p>
              Safety, environmental responsibility and disciplined project
              execution should be visible parts of an energy company's digital
              identity — not buried in a PDF.
            </p>
            <div className="pillRow">
              <span>
                <ShieldCheck /> HSE
              </span>
              <span>
                <Leaf /> Environment
              </span>
              <span>
                <FileCheck2 /> Compliance
              </span>
            </div>
          </div>
        </section>
        <section id="careers" className="careers section">
          <div className="sectionLabel">06 / CAREERS</div>
          <div>
            <p className="kicker">BUILD WITH US</p>
            <h2>
              People power <span>performance.</span>
            </h2>
            <p>
              Showcase engineering, technical, commercial and graduate
              opportunities through a clear recruitment channel.
            </p>
            <button onClick={() => setModal(true)}>
              Submit your CV <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="careerCard">
            <Briefcase />
            <b>OPEN OPPORTUNITIES</b>
            <span>Engineering · Operations · Technical · Commercial</span>
          </div>
        </section>
        <section id="contact" className="contact">
          <div>
            <p className="kicker">07 / CONTACT</p>
            <h2>
              Let's discuss the <span>next project.</span>
            </h2>
            <p>
              Use this demonstration enquiry flow to show how prospective
              clients can request a conversation.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setModal(true);
            }}
          >
            <input placeholder="Full name" />
            <input placeholder="Company" />
            <input placeholder="Email address" type="email" />
            <select defaultValue="">
              <option value="" disabled>
                Enquiry type
              </option>
              <option>Engineering Services</option>
              <option>Procurement</option>
              <option>Project Enquiry</option>
              <option>Partnership</option>
              <option>Careers</option>
            </select>
            <textarea placeholder="Tell us briefly about your enquiry" />
            <button>
              Send enquiry <ArrowUpRight size={18} />
            </button>
          </form>
        </section>
      </main>
      <footer>
        <div className="brand">
          <span>NEXORA</span>
          <small>ENERGY & RESOURCES</small>
        </div>
        <p>© 2026 Nexora Energy & Resources Ltd. · Demonstration project</p>
        <div className="footerLinks">
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      {modal && (
        <div className="modal" onClick={() => setModal(false)}>
          <div className="modalCard" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setModal(false)}>
              <X />
            </button>
            <Mail size={24} />
            <h3>Start a conversation</h3>
            <p>
              This is a frontend demonstration. In the real build, this form can
              connect to email, WhatsApp, CRM or a backend enquiry system.
            </p>
            <button onClick={() => setModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);

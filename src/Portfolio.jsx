import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, MapPin, ChevronUp, Download, Moon, Sun,
  ExternalLink, GraduationCap, Briefcase, Award, FileText, Sparkles, Cpu,
  Shield, Bot, Globe, BarChart4, Smartphone, GitBranch
} from "lucide-react";

const NAME = "Mohammed Farhan S M";
const TITLE_LINES = [
  "M.Tech (AI & Data Science)",
  "Cybersecurity • NLP • XAI",
  "Android • Power BI • IoT",
];

const CONTACTS = {
  email: "faheemproject20@gmail.com",
  phone: "+91 9962825738",
  location: "Chennai, India",
  github: "https://github.com/Faheemsm16",
  linkedin: "https://www.linkedin.com/in/farhan-sm/",
  resume: "/Resume.pdf",
};

const SKILLS = [
  "Python (Beginner)","Machine Learning","Neural Networks","NLP","Explainable AI (SHAP)",
  "Cryptography","Android (Java/Kotlin)","Android Studio","Firebase (Auth, RTDB)",
  "Power BI","Data Mining & Analysis","Arduino / Embedded","LoRa / IoT","Git / GitHub",
];

const PROJECTS = [
  {
    title: "Zero-Day Attack Detection with Deep Neural Optimization & XAI",
    date: "Apr 2025",
    summary:
      "Hybrid IDS combining Fuzzy C-Means and optimized DANN with SHAP-based explanations. Trained on UNSW-NB15; focuses on accuracy and reduced FPR.",
    links: [
      {
        label: "Repo",
        href: "https://github.com/Faheemsm16/Soft-Computing-Based-Zero-Day-Attack-Detection-with-Deep-Neural-Optimization-and-XAI",
      },
    ],
    tags: ["Cybersecurity", "DANN", "FCM", "XAI", "UNSW-NB15"],
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Decoding Emotions in Literature (DistilBERT + Sliding Window)",
    date: "Apr 2025",
    summary:
      "Fine-grained, multi-label emotion detection with DistilBERT and overlapping windowing; heatmaps and evolution graphs for interpretability.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/Decoding-Emotions-in-Literature-NLP-and-Deep-Learning-Approaches" }],
    tags: ["NLP", "DistilBERT", "Visualization"],
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "WebPage Chatbot (URL QA)",
    date: "Feb 2025",
    summary:
      "QA system with NLTK, TF-IDF + cosine similarity over scraped article text; interactive, multi-turn UI.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/Webpage-Chatbot" }],
    tags: ["Python", "NLTK", "TF-IDF", "BeautifulSoup"],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "CryptoCom Secure Communication (SecureEnhanced AES)",
    date: "May 2024",
    summary:
      "Android E2EE messenger with whitening & SPN-enhanced AES, Firebase OTP auth + realtime DB.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/CryptoCom-Secure-Communication-Application-with-SecureEnhanced-AES-Encryption" }],
    tags: ["Android", "Firebase", "AES", "Security"],
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Walmart Sales Analysis (Power BI)",
    date: "Mar 2023",
    summary:
      "Interactive BI dashboard from open API; trends, seasonality, and category performance for actionable insights.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/Walmart-Sales-Analysis-using-Power-BI" }],
    tags: ["Power BI", "Analytics", "Storytelling"],
    icon: <BarChart4 className="w-5 h-5" />,
  },
  {
    title: "LoRaWAN Temperature & Humidity Sensor Network",
    date: "Apr 2023",
    summary:
      "Low-power, long-range environmental monitoring using HTCC AB01 + DHT11; serial visualizations and reliability metrics.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/LoRaWAN-Enabled-Temperature-and-Humidity-Sensor-Network" }],
    tags: ["IoT", "LoRaWAN", "Sensors"],
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "LoRa-Based Balloon Satellite (ESP32 + GPS + SD)",
    date: "Jun 2023",
    summary:
      "Wireless telemetry with ESP32, NEO-6M, DS18B20; LoRa packets with RSSI, on-device logging for high-altitude missions.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/LoRa-Based-Balloon-Satellite-for-Environmental-Data-Logging" }],
    tags: ["IoT", "ESP32", "Telemetry"],
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    title: "Air Quality Monitor (Raspberry Pi)",
    date: "Dec 2021",
    summary:
      "Raspberry Pi with temp/humidity/gas sensors; real-time display on LCD; accuracy-focused testing.",
    links: [{ label: "Repo", href: "https://github.com/Faheemsm16/Air-Quality-Monitor-using-Raspberry-Pi" }],
    tags: ["Raspberry Pi", "Sensors", "Embedded"],
    icon: <Smartphone className="w-5 h-5" />,
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "Excelerate (Remote)",
    period: "Aug 2023 – Sep 2023",
    points: [
      "Visualization-first analytics with human perception principles",
      "Audience-appropriate dashboards & presentations",
      "Information literacy, critical thinking, and data storytelling",
    ],
  },
];

const EDUCATION = [
  {
    program: "M.Tech, AI & Data Science (95%)",
    institute: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
    period: "Expected Jul 2026",
  },
  {
    program: "B.Tech, Information Technology (84%)",
    institute: "Mohamed Sathak AJ College of Engineering",
    period: "Jul 2024",
  },
  {
    program: "Senior Secondary (XII), ISC (72%)",
    institute: "Primrose Schools, Chennai",
    period: "Jul 2020",
  },
  {
    program: "Secondary (X), ICSE (69%)",
    institute: "Primrose Schools, Chennai",
    period: "May 2018",
  },
];

const CERTS = [
  { name: "Introduction to Modern AI", org: "CISCO", when: "Apr 2025" },
  { name: "Introduction to Data Science", org: "CISCO", when: "Apr 2025" },
  { name: "Python 3.4.3 Training", org: "Spoken Tutorial", when: "Apr 2025" },
  { name: "Full Stack with Python Programming", org: "HCL GUVI", when: "Sep 2023" },
  { name: "Python (Basic)", org: "HackerRank", when: "Mar 2023" },
  { name: "Machine Learning Onramp", org: "MathWorks", when: "Sep 2022" },
];

// -----------------------------
// Utility hooks
// -----------------------------
function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, setDark };
}

function useTyped(strings, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = strings[index % strings.length];
    const step = () => {
      setText((t) => {
        if (!deleting) {
          const next = current.slice(0, t.length + 1);
          if (next === current) setTimeout(() => setDeleting(true), pause);
          return next;
        } else {
          const next = current.slice(0, t.length - 1);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % strings.length);
          }
          return next;
        }
      });
    };
    const id = setTimeout(step, deleting ? speed / 1.6 : speed);
    return () => clearTimeout(id);
  }, [index, strings, deleting, speed, pause]);
  return text;
}

// -----------------------------
// Components
// -----------------------------
function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold flex items-center gap-2 mb-10"
      >
        {icon}
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 shadow-sm border border-zinc-200/20 dark:border-zinc-700/20 backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
}

function SkillBadge({ skill }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm"
    >
      {skill}
    </motion.span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />
  );
}

// -----------------------------
// Main Portfolio Component
// -----------------------------
export default function Portfolio() {
  const { dark, setDark } = useTheme();
  const typed = useTyped(TITLE_LINES);

  return (
    <main id="top" className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <ScrollProgress />

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">{NAME}</h1>
        <p className="text-lg md:text-2xl mt-4 h-8">{typed}</p>
        <div className="flex gap-4 mt-6">
          <a href={CONTACTS.github} target="_blank" rel="noreferrer"><Github /></a>
          <a href={CONTACTS.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href={`mailto:${CONTACTS.email}`}><Mail /></a>
        </div>
        <a
          href={CONTACTS.resume}
          download
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Download className="w-4 h-4" /> Resume
        </a>
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800"
        >
          {dark ? <Sun /> : <Moon />}
        </button>
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<Sparkles />}>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s) => <SkillBadge key={s} skill={s} />)}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={<Cpu />}>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-center gap-2 mb-2 font-semibold">{p.icon}{p.title}</div>
              <p className="text-sm text-zinc-500">{p.date}</p>
              <p className="mt-2 text-sm">{p.summary}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 mt-2">
                  {l.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Briefcase />}>
        {EXPERIENCE.map((e) => (
          <Card key={e.role}>
            <h3 className="font-semibold">{e.role}</h3>
            <p className="text-sm">{e.org} • {e.period}</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </Card>
        ))}
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={<GraduationCap />}>
        {EDUCATION.map((ed) => (
          <Card key={ed.program}>
            <h3 className="font-semibold">{ed.program}</h3>
            <p className="text-sm">{ed.institute} • {ed.period}</p>
          </Card>
        ))}
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" icon={<Award />}>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <Card key={c.name}>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm">{c.org} • {c.when}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<FileText />}>
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2"><Mail /> {CONTACTS.email}</p>
          <p className="flex items-center gap-2"><Phone /> {CONTACTS.phone}</p>
          <p className="flex items-center gap-2"><MapPin /> {CONTACTS.location}</p>
        </div>
      </Section>

      {/* Back to top */}
      <a href="#top" className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg">
        <ChevronUp />
      </a>
    </main>
  );
      }      {
        label: "Repo",
        href: "https://github.com/Faheemsm16/Decoding-Emotions-in-Literature-NLP-and-Deep-Learning-Approaches",
      },
    ],
    tags: ["NLP", "DistilBERT", "Visualization"],
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "WebPage Chatbot (URL QA)",
    date: "Feb 2025",
    summary:
      "QA system with NLTK, TF-IDF + cosine similarity over scraped article text.",
    links: [
      {
        label: "Repo",
        href: "https://github.com/Faheemsm16/Webpage-Chatbot",
      },
    ],
    tags: ["Python", "NLTK", "TF-IDF"],
    icon: <Globe className="w-5 h-5" />,
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "Excelerate (Remote)",
    period: "Aug 2023 – Sep 2023",
    points: [
      "Visualization-first analytics",
      "Audience-appropriate dashboards & presentations",
      "Information literacy and storytelling",
    ],
  },
];

const EDUCATION = [
  {
    program: "M.Tech, AI & Data Science (95%)",
    institute: "B.S. Abdur Rahman Crescent Institute",
    period: "Expected Jul 2026",
  },
  {
    program: "B.Tech, Information Technology (84%)",
    institute: "Mohamed Sathak AJ College of Engineering",
    period: "Jul 2024",
  },
];

const CERTS = [
  { name: "Introduction to Modern AI", org: "CISCO", when: "Apr 2025" },
  { name: "Introduction to Data Science", org: "CISCO", when: "Apr 2025" },
  { name: "Python 3.4.3 Training", org: "Spoken Tutorial", when: "Apr 2025" },
  { name: "Full Stack with Python Programming", org: "HCL GUVI", when: "Sep 2023" },
];

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, setDark };
}

function useTyped(strings, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = strings[index % strings.length];
    const step = () => {
      setText((t) => {
        if (!deleting) {
          const next = current.slice(0, t.length + 1);
          if (next === current) setTimeout(() => setDeleting(true), pause);
          return next;
        } else {
          const next = current.slice(0, t.length - 1);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % strings.length);
          }
          return next;
        }
      });
    };
    const id = setTimeout(step, deleting ? speed / 1.6 : speed);
    return () => clearTimeout(id);
  }, [index, strings, deleting, speed, pause]);
  return text;
}

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8"
      >
        <span className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900">
          {icon}
        </span>
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Card = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm p-6"
  >
    {children}
  </motion.div>
);

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 z-50"
    />
  );
};

function Portfolio() {
  const { dark, setDark } = useTheme();
  const typed = useTyped(TITLE_LINES);
  const toTopRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <main id="top" className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <ScrollProgress />

      {/* Hero */}
      <header className="pt-28 pb-16 text-center">
        <h1 className="text-4xl font-bold">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            {NAME}
          </span>
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{typed}</p>
      </header>

      <Section id="skills" title="Skills" icon={<Cpu className="w-5 h-5" />}>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" icon={<GitBranch className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <div className="flex items-center gap-2">
                {p.icon}
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm mt-2">{p.summary}</p>
              <div className="mt-2 flex gap-2">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" className="text-sm underline">
                    {l.label}
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default Portfolio;

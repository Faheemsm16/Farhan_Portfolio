import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  Download,
  Moon,
  Sun,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  FileText,
  Sparkles,
  Cpu,
  Shield,
  Bot,
  Globe,
  BarChart4,
  Smartphone,
  GitBranch,
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
  "Python (Beginner)",
  "Machine Learning",
  "Neural Networks",
  "NLP",
  "Explainable AI (SHAP)",
  "Cryptography",
  "Android (Java/Kotlin)",
  "Android Studio",
  "Firebase (Auth, RTDB)",
  "Power BI",
  "Data Mining & Analysis",
  "Arduino / Embedded",
  "LoRa / IoT",
  "Git / GitHub",
];

const PROJECTS = [
  {
    title: "Zero-Day Attack Detection with Deep Neural Optimization & XAI",
    date: "Apr 2025",
    summary:
      "Hybrid IDS combining Fuzzy C-Means and optimized DANN with SHAP-based explanations.",
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
    title: "Decoding Emotions in Literature (DistilBERT)",
    date: "Apr 2025",
    summary:
      "Fine-grained, multi-label emotion detection with DistilBERT and overlapping windowing.",
    links: [
      {
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

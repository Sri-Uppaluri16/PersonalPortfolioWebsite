import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  MapPin,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Load Guard AI",
    category: "AI / IoT Application",
    year: "2024",
    description:
      "AI-powered road safety system detecting vehicle overloading, illegal cargo, and passenger overcrowding using computer vision, IoT sensors, and blockchain logging for tamper-proof transport monitoring.",
    tech: ["Python", "YOLOv8", "React", "MongoDB", "Blockchain"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&auto=format",
    url: "https://github.com/Sri-Uppaluri16/Load-Guard-AI",
  },
  {
    id: 2,
    title: "Traffic Management System",
    category: "Systems Programming",
    year: "2024",
    description:
      "Traffic signal simulator in C using dual-queue architecture with priority handling — emergency vehicles like ambulances and firetrucks are processed ahead of regular traffic in real time.",
    tech: ["C", "Data Structures", "Queue", "FIFO"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&h=600&fit=crop&auto=format",
    url: "https://github.com/Sri-Uppaluri16/Traffic-Management-System",
  },
  {
    id: 3,
    title: "SRMS Project",
    category: "Database Application",
    year: "2023",
    description:
      "Student Record Management System with role-based access control for Admin, User, and Guest tiers. Built in C with file-based persistence, authentication, and a full console interface.",
    tech: ["C", "File I/O", "RBAC", "Data Structures"],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=600&fit=crop&auto=format",
    url: "https://github.com/Sri-Uppaluri16/SRMS_PROJECT",
  },
];

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "File I/O"],
  },
  {
    category: "AI / Tools",
    items: ["YOLOv8", "OpenCV", "WebSocket", "Git", "Docker"],
  },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const scrollY = useScrollY();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navOpaque = scrollY > 60;

  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Floating project image follower */}
      {hoveredProject !== null && (
        <div
          className="fixed z-50 w-72 h-48 pointer-events-none overflow-hidden shadow-xl"
          style={{
            left: mousePos.x + 24,
            top: mousePos.y - 80,
          }}
        >
          <img
            src={projects.find((p) => p.id === hoveredProject)?.image ?? ""}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: navOpaque
            ? "rgba(253,248,255,0.92)"
            : "transparent",
          backdropFilter: navOpaque ? "blur(12px)" : "none",
          borderBottom: navOpaque ? "1px solid var(--border)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-xs tracking-[0.2em] uppercase text-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Spoorthi Sri
          </a>
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Work", href: "#work" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:spoorthichowdary16@gmail.com"
              className="text-xs tracking-[0.2em] uppercase border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Pastel two-tone split */}
        <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
          <div style={{ backgroundColor: "#fdf8ff" }} />
          <div style={{ backgroundColor: "#f3ecff" }} />
        </div>

        {/* Soft diagonal accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(110deg, transparent 48%, rgba(139,98,212,0.06) 48%)",
          }}
        />

        {/* Decorative soft circle */}
        <div
          className="absolute top-24 right-16 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(196,127,184,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-32 left-8 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139,98,212,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-20 pt-36">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-11">
              <div
                className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <MapPin size={12} />
                Vijayawada, Andhra Pradesh, India
              </div>

              <h1
                className="leading-[0.88] tracking-tight mb-12"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.6rem, 8.5vw, 8rem)",
                  fontWeight: 300,
                  color: "var(--foreground)",
                }}
              >
                Uppaluri Disowja
                <br />
                <span
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  Spoorthi Sri.
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 md:justify-between">
                <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
                  A CS engineer passionate about AI, systems programming, and
                  full-stack development — building projects that solve real
                  problems with clean, purposeful code.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#work"
                    className="group flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide text-accent-foreground transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    View Work
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                  <a
                    href="#contact"
                    className="px-7 py-3.5 text-sm tracking-wide border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-20 pt-6 border-t border-border">
            <span
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Scroll
            </span>
            <ChevronDown size={13} className="text-muted-foreground" />
            <div className="flex-1" />
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Sri-Uppaluri16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/disowja-spoorthi-sri-uppaluri-93b403379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:spoorthichowdary16@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-8 py-28 lg:py-36 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-14 pb-4 border-b border-border">
            <h2
              className="text-4xl font-light text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Selected Work
            </h2>
            <span
              className="text-xs text-muted-foreground tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              2023–2024
            </span>
          </div>

          <div>
            {projects.map((project, i) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-border"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="py-7 flex items-center gap-8 -mx-3 px-3 hover:bg-muted/50 transition-colors duration-300 rounded">
                  <span
                    className="text-xs text-muted-foreground w-8 flex-shrink-0"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center min-w-0">
                    <div>
                      <h3
                        className="text-2xl font-light group-hover:text-accent transition-colors duration-300"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs text-muted-foreground mt-1 tracking-wide"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.category}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed hidden md:block">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 text-accent"
                            style={{
                              fontFamily: "var(--font-mono)",
                              backgroundColor: "rgba(139,98,212,0.1)",
                              border: "1px solid rgba(139,98,212,0.2)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4"
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-28 lg:py-36 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

            {/* Left — decorative block instead of photo */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <p
                  className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  About
                </p>

                {/* Abstract identity card */}
                <div
                  className="relative overflow-hidden p-8 flex flex-col justify-between"
                  style={{
                    aspectRatio: "4/5",
                    background:
                      "linear-gradient(135deg, #e8dcf8 0%, #f8d6ee 50%, #d6e8fb 100%)",
                  }}
                >
                  <div>
                    <p
                      className="text-xs tracking-[0.3em] uppercase mb-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(30,20,40,0.5)",
                      }}
                    >
                      CS Engineer
                    </p>
                    <div
                      className="text-5xl font-light leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--accent)",
                      }}
                    >
                      U.D.
                      <br />
                      S.S.
                    </div>
                  </div>

                  {/* Decorative rings */}
                  <div
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-2"
                    style={{ borderColor: "rgba(139,98,212,0.25)" }}
                  />
                  <div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-2"
                    style={{ borderColor: "rgba(196,127,184,0.35)" }}
                  />

                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(30,20,40,0.55)",
                      }}
                    >
                      Vijayawada, AP, India
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(30,20,40,0.55)",
                      }}
                    >
                      AI · Systems · Web
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — bio */}
            <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
              <h2
                className="text-5xl lg:text-6xl font-light leading-tight mb-10 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Builder by nature.
                <br />
                <span className="italic" style={{ color: "var(--accent)" }}>
                  Engineer by choice.
                </span>
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm Spoorthi Sri, a Computer Science engineer from Vijayawada,
                  Andhra Pradesh. I have a strong foundation in systems
                  programming, AI applications, and full-stack web development,
                  and I enjoy building end-to-end solutions — from low-level C
                  programs to intelligent, computer-vision-powered systems.
                </p>
                <p>
                  My projects span embedded IoT, machine learning pipelines, and
                  web applications. I'm drawn to problems where engineering and
                  real-world impact intersect — whether that's detecting illegal
                  cargo on highways or managing student records reliably at
                  scale.
                </p>
                <p>
                  I'm currently looking for opportunities where I can contribute
                  meaningfully, grow fast, and work alongside engineers who care
                  about building things the right way.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-border">
                {[
                  { value: "3+", label: "Projects shipped" },
                  { value: "5+", label: "Languages used" },
                  { value: "AI", label: "Primary focus area" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-4xl font-light"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--accent)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs text-muted-foreground tracking-wide mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-10">
                <a
                  href="https://github.com/Sri-Uppaluri16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={13} />
                  Sri-Uppaluri16
                </a>
                <span className="text-border">—</span>
                <a
                  href="https://www.linkedin.com/in/disowja-spoorthi-sri-uppaluri-93b403379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={13} />
                  LinkedIn Profile
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-28 lg:py-36 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-14 pb-4 border-b border-border">
            <h2
              className="text-4xl font-light text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Skills & Stack
            </h2>
            <span
              className="text-xs text-muted-foreground tracking-[0.25em] uppercase hidden md:block"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Technical Expertise
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="p-8 rounded"
                style={{ backgroundColor: "var(--muted)" }}
              >
                <h3
                  className="text-xs tracking-[0.3em] uppercase mb-7"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                  }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-3.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-border">
            {[
              { label: "Systems & C", level: 85 },
              { label: "AI / ML", level: 78 },
              { label: "Full-Stack Web", level: 80 },
            ].map(({ label, level }) => (
              <div key={label}>
                <div className="flex justify-between text-xs mb-3">
                  <span
                    className="text-muted-foreground tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {level}%
                  </span>
                </div>
                <div
                  className="h-1.5 w-full rounded-full"
                  style={{ backgroundColor: "var(--muted)" }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${level}%`,
                      background:
                        "linear-gradient(90deg, var(--accent), #c47fb8)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-28 lg:py-36 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-4">
              <p
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Contact
              </p>
              <h2
                className="text-5xl lg:text-6xl font-light leading-tight mb-8 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's build
                <br />
                something
                <br />
                <span className="italic" style={{ color: "var(--accent)" }}>
                  great.
                </span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xs">
                Open to full-time roles, internships, and collaborative
                projects. I respond to all genuine enquiries within 24 hours.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "spoorthichowdary16@gmail.com",
                    href: "mailto:spoorthichowdary16@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn Profile",
                    href: "https://www.linkedin.com/in/disowja-spoorthi-sri-uppaluri-93b403379",
                  },
                  {
                    icon: Github,
                    label: "github.com/Sri-Uppaluri16",
                    href: "https://github.com/Sri-Uppaluri16",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Icon size={14} className="flex-shrink-0 text-accent" />
                    <span className="break-all">{label}</span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              {submitted ? (
                <div className="h-full min-h-64 flex flex-col items-start justify-center">
                  <div
                    className="text-7xl font-light mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--accent)",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-2xl font-light mb-2 text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message received
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        key: "name",
                        label: "Name",
                        type: "text",
                        placeholder: "Your name",
                      },
                      {
                        key: "email",
                        label: "Email",
                        type: "email",
                        placeholder: "your@email.com",
                      },
                    ].map(({ key, label, type, placeholder }) => (
                      <div key={key}>
                        <label
                          className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {label}
                        </label>
                        <input
                          type={type}
                          required
                          value={form[key as keyof typeof form]}
                          onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                          }
                          placeholder={placeholder}
                          className="w-full bg-transparent border-b pb-3 text-sm focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                          style={{ borderColor: "var(--border)" }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--accent)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell me about your project or opportunity…"
                      className="w-full bg-transparent border-b pb-3 text-sm focus:outline-none resize-none placeholder:text-muted-foreground/40 transition-colors"
                      style={{ borderColor: "var(--border)" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "var(--border)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-3 px-8 py-4 text-sm tracking-wide text-accent-foreground hover:opacity-90 transition-opacity duration-300"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Send Message
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-8 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2024 Uppaluri Disowja Spoorthi Sri
          </span>
          <span
            className="text-xs text-muted-foreground flex items-center gap-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <MapPin size={11} />
            Vijayawada, Andhra Pradesh, India
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Sri-Uppaluri16"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/disowja-spoorthi-sri-uppaluri-93b403379"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:spoorthichowdary16@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

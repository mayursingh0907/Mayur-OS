"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Laptop,
  Camera,
  Music,
  Code2,
  GraduationCap,
  FileText,
  Settings,
  X,
  Wifi,
  Battery,
  Radio,
  ArrowUpRight,
  Download,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

/* ========================================================= */
/* APPS */
/* ========================================================= */

const apps = [
  { name: "About", icon: User },
  { name: "Projects", icon: Laptop },
  { name: "Social", icon: Camera },
  { name: "Music", icon: Music },
  { name: "GitHub", icon: Code2 },
  { name: "Education", icon: GraduationCap },
  { name: "Resume", icon: FileText },
  { name: "Settings", icon: Settings },
];

/* ========================================================= */
/* SOCIALS */
/* ========================================================= */

const socials = [
  {
    name: "GitHub",
    icon: Code2,
    url: "https://github.com/mayursingh0907",
  },
  {
    name: "Instagram",
    icon: Camera,
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: User,
    url: "#",
  },
];

/* ========================================================= */
/* PROJECTS */
/* ========================================================= */

const projects = [
  {
    name: "Mayur OS",
    icon: "💻",

    // IMPORTANT:
    // Image should be inside:
    // public/projects/mayur-os.png
    image: "/projects/mayur-os.png",

    description:
      "My personal iPad-style digital portfolio and personal operating system built with modern web technologies.",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "iPad-style interface",
      "Animated app icons",
      "Glassmorphism UI",
      "Project showcase",
      "Responsive design",
    ],

    github: "https://github.com/mayursingh0907/Mayur-OS",

    live: "#",
  },
];

/* ========================================================= */
/* APP ICON COMPONENT */
/* ========================================================= */

function AppIcon({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20px] border border-white/30 bg-white/[0.14] shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:h-20 sm:w-20 sm:rounded-[22px]"
        whileHover={{
          scale: 1.08,
          rotate: 1,
          boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
      >
        {/* Glass shine */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />

        <Icon
          size={34}
          strokeWidth={1.7}
          className="relative z-10 text-white sm:h-10 sm:w-10"
        />
      </motion.div>

      <span className="text-xs font-medium tracking-wide text-white/90 drop-shadow-md sm:text-sm">
        {name}
      </span>
    </div>
  );
}

/* ========================================================= */
/* MAIN PAGE */
/* ========================================================= */

export default function Home() {
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const [currentTime, setCurrentTime] = useState("");

  const [selectedProject, setSelectedProject] =
    useState<any>(null);

  /* ======================================================= */
  /* LIVE CLOCK */
  /* ======================================================= */

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  /* ======================================================= */
  /* RETURN */
  /* ======================================================= */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080812] text-white">
      {/* =================================================== */}
      {/* DYNAMIC IPAD WALLPAPER */}
      {/* =================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Purple glow */}

        <motion.div
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[100px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue glow */}

        <motion.div
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/25 blur-[100px]"
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pink glow */}

        <motion.div
          className="absolute bottom-[-200px] left-1/3 h-[550px] w-[550px] rounded-full bg-pink-500/20 blur-[120px]"
          animate={{
            x: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =================================================== */}
      {/* STATUS BAR */}
      {/* =================================================== */}

      <div className="relative z-10 flex items-center justify-between px-6 py-4 text-sm font-semibold">
        {/* Time */}

        <span>{currentTime}</span>

        {/* Status Icons */}

        <div className="flex items-center gap-3">
          <Wifi size={16} />

          <Radio size={16} />

          <Battery size={18} />
        </div>
      </div>

      {/* =================================================== */}
      {/* MAIN CONTENT */}
      {/* =================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col rounded-[40px] px-6 pb-8">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-10 mt-6">
          <p className="text-sm text-white/70">
            Welcome to
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Mayur OS
          </h1>

          <p className="mt-2 text-white/70">
            My personal digital world.
          </p>
        </div>

        {/* ================================================= */}
        {/* APP GRID */}
        {/* ================================================= */}

        <motion.div
          className="grid grid-cols-4 gap-x-3 gap-y-8 px-2 sm:gap-x-8 md:gap-x-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {apps.map((app) => (
            <motion.button
              key={app.name}
              onClick={() => setActiveApp(app.name)}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.5,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                },
              }}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
              }}
              className="flex justify-center focus:outline-none"
            >
              <AppIcon
                name={app.name}
                icon={app.icon}
              />
            </motion.button>
          ))}
        </motion.div>

        <div className="flex-1" />

        {/* ================================================= */}
        {/* DOCK */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-12 flex w-fit items-center gap-3 rounded-[28px] border border-white/20 bg-white/15 px-4 py-3 shadow-2xl backdrop-blur-2xl"
        >
          {apps.slice(0, 5).map((app) => {
            const Icon = app.icon;

            return (
              <motion.button
                key={app.name}
                onClick={() =>
                  setActiveApp(app.name)
                }
                whileHover={{
                  scale: 1.2,
                  y: -8,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-xl"
              >
                <Icon
                  size={24}
                  strokeWidth={1.8}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* =================================================== */}
      {/* APP WINDOW */}
      {/* =================================================== */}

      <AnimatePresence>
        {activeApp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => setActiveApp(null)}
          >
            <motion.div
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[30px] border border-white/20 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-2xl"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              {/* ================================================= */}
              {/* APP HEADER */}
              {/* ================================================= */}

              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {activeApp}
                </h2>

                <button
                  onClick={() =>
                    setActiveApp(null)
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ================================================= */}
              {/* ABOUT */}
              {/* ================================================= */}

              {activeApp === "About" && (
                <div className="space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                    <User size={40} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    Hi, I'm Mayur
                  </h3>

                  <p className="leading-7 text-white/70">
                    Welcome to my personal digital
                    space. This website works like my
                    own personal operating system.
                  </p>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-white/60">
                      Developer
                    </p>

                    <p className="mt-1 font-semibold">
                      Computer Science & AI
                    </p>
                  </div>
                </div>
              )}

              {/* ================================================= */}
              {/* PROJECTS */}
              {/* ================================================= */}

              {activeApp === "Projects" && (
                <div className="space-y-5">
                  {projects.map((project) => (
                    <motion.div
                      key={project.name}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="group rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-xl backdrop-blur-xl"
                    >
                      {/* PROJECT HEADER */}

                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                          {project.icon}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl font-bold">
                            {project.name}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-white/60">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* TECHNOLOGIES */}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>

                      {/* BUTTONS */}

                      <div className="mt-6 flex flex-wrap gap-3">
                        {/* GitHub */}

                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                          >
                            <Code2 size={16} />

                            GitHub

                            <ArrowUpRight
                              size={15}
                            />
                          </a>
                        )}

                        {/* Live */}

                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                          >
                            Live Demo

                            <ArrowUpRight
                              size={15}
                            />
                          </a>
                        )}

                        {/* View Project */}

                        <button
                          onClick={() =>
                            setSelectedProject(
                              project
                            )
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                        >
                          View Project

                          <ExternalLink
                            size={15}
                          />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ================================================= */}
              {/* SOCIAL */}
              {/* ================================================= */}

              {activeApp === "Social" && (
                <div className="space-y-4">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20"
                      >
                        <Icon size={28} />

                        <span className="font-semibold">
                          {social.name}
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="ml-auto"
                        />
                      </a>
                    );
                  })}
                </div>
              )}

              {/* ================================================= */}
              {/* MUSIC */}
              {/* ================================================= */}

              {activeApp === "Music" && (
                <div className="space-y-5 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10">
                    <Music size={48} />
                  </div>

                  <h3 className="text-2xl font-bold">
                    Music
                  </h3>

                  <p className="text-white/60">
                    My music section is coming soon.
                  </p>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-white/50">
                      Currently building...
                    </p>

                    <p className="mt-2 font-semibold">
                      Personal Music Player
                    </p>
                  </div>
                </div>
              )}

              {/* ================================================= */}
              {/* GITHUB */}
              {/* ================================================= */}

              {activeApp === "GitHub" && (
                <div className="space-y-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                    <Code2 size={44} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    GitHub
                  </h3>

                  <p className="text-white/60">
                    Explore my coding projects and
                    repositories.
                  </p>

                  <a
                    href="https://github.com/mayursingh0907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    Open GitHub

                    <ArrowUpRight size={18} />
                  </a>
                </div>
              )}

              {/* ================================================= */}
              {/* EDUCATION */}
              {/* ================================================= */}

              {activeApp === "Education" && (
                <div className="space-y-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                    <GraduationCap size={44} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    Education
                  </h3>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-white/50">
                      Degree
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      B.Tech Computer Science
                    </p>

                    <p className="text-white/60">
                      Artificial Intelligence
                    </p>
                  </div>
                </div>
              )}

              {/* ================================================= */}
              {/* RESUME */}
              {/* ================================================= */}

              {activeApp === "Resume" && (
                <div className="space-y-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                    <FileText size={44} />
                  </div>

                  <h3 className="text-3xl font-bold">
                    Resume
                  </h3>

                  <p className="text-white/60">
                    My professional resume will be
                    available here.
                  </p>

                  <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105">
                    <Download size={18} />

                    Download Resume
                  </button>
                </div>
              )}

              {/* ================================================= */}
              {/* SETTINGS */}
              {/* ================================================= */}

              {activeApp === "Settings" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
                    <Settings size={28} />

                    <div>
                      <p className="text-sm text-white/50">
                        Appearance
                      </p>

                      <p className="mt-1 font-semibold">
                        Dark Mode
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-white/50">
                      Version
                    </p>

                    <p className="mt-1 font-semibold">
                      Mayur OS v1.0
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-white/50">
                      Developer
                    </p>

                    <p className="mt-1 font-semibold">
                      Mayur Singh Jadon
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================== */}
      {/* PROJECT DETAIL WINDOW */}
      {/* ===================================================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedProject(null)
            }
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/20 bg-slate-950/90 shadow-2xl backdrop-blur-2xl"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 40,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              {/* ================================================= */}
              {/* PROJECT HERO IMAGE */}
              {/* ================================================= */}

              <div className="relative h-56 overflow-hidden sm:h-72">
                {/* Actual Project Screenshot */}

                <img
                  src="/projects/mayur-os.png"
                  alt="Mayur OS"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Close Button */}

                <button
                  onClick={() =>
                    setSelectedProject(null)
                  }
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition hover:bg-black/60"
                >
                  <X size={20} />
                </button>

                {/* Project Name */}

                <div className="absolute bottom-5 left-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                    Project
                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-white sm:text-4xl">
                    {selectedProject.name}
                  </h2>
                </div>
              </div>

              {/* ================================================= */}
              {/* PROJECT CONTENT */}
              {/* ================================================= */}

              <div className="p-6 sm:p-8">
                {/* DESCRIPTION */}

                <p className="leading-7 text-white/60">
                  {selectedProject.description}
                </p>

                {/* ================================================= */}
                {/* TECHNOLOGIES */}
                {/* ================================================= */}

                <div className="mt-8">
                  <h3 className="text-lg font-semibold">
                    Technologies
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech: string) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white/80"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* ================================================= */}
                {/* FEATURES */}
                {/* ================================================= */}

                <div className="mt-8">
                  <h3 className="text-lg font-semibold">
                    Key Features
                  </h3>

                  <div className="mt-4 space-y-3">
                    {selectedProject.features.map(
                      (feature: string) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.06] p-3"
                        >
                          <CheckCircle2
                            size={19}
                            className="shrink-0 text-green-400"
                          />

                          <span className="text-sm text-white/75">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* ================================================= */}
                {/* ACTION BUTTONS */}
                {/* ================================================= */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {/* GitHub */}

                  {selectedProject.github !==
                    "#" && (
                    <a
                      href={
                        selectedProject.github
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      <Code2 size={18} />

                      GitHub

                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {/* Live Demo */}

                  {selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
                    >
                      Live Demo

                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
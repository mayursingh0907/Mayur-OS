"use client";

import { useEffect, useState, type ElementType } from "react";

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

type Project = {

  name: string;

  icon: string;

  image: string;

  description: string;

  technologies: string[];

  features: string[];

  github: string;

  live: string;

};

const projects: Project[] = [

  {

    name: "Mayur OS",

    icon: "💻",

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

const apps = [

  {

    name: "About",

    icon: User,

  },

  {

    name: "Projects",

    icon: Laptop,

  },

  {

    name: "Social",

    icon: Camera,

  },

  {

    name: "Music",

    icon: Music,

  },

  {

    name: "GitHub",

    icon: Code2,

  },

  {

    name: "Education",

    icon: GraduationCap,

  },

  {

    name: "Resume",

    icon: FileText,

  },

  {

    name: "Settings",

    icon: Settings,

  },

];

function AppIcon({

  name,

  icon: Icon,

}: {

  name: string;

  icon: ElementType;

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

        whileTap={{

          scale: 0.94,

        }}

        transition={{

          type: "spring",

          stiffness: 400,

          damping: 18,

        }}

      >

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

export default function Home() {

  const [activeApp, setActiveApp] = useState<string | null>(null);

  const [currentTime, setCurrentTime] = useState("");

  const [selectedProject, setSelectedProject] =

    useState<Project | null>(null);

  useEffect(() => {

    const updateTime = () => {

      const now = new Date();

      setCurrentTime(

        now.toLocaleTimeString([], {

          hour: "2-digit",

          minute: "2-digit",

        })

      );

    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);

  }, []);

  const closeApp = () => {

    setActiveApp(null);

  };

  return (

    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div

          className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl"

          animate={{

            x: [0, 80, 0],

            y: [0, 50, 0],

          }}

          transition={{

            duration: 12,

            repeat: Infinity,

            ease: "easeInOut",

          }}

        />

        <motion.div

          className="absolute right-[-100px] top-[20%] h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"

          animate={{

            x: [0, -70, 0],

            y: [0, 80, 0],

          }}

          transition={{

            duration: 14,

            repeat: Infinity,

            ease: "easeInOut",

          }}

        />

        <motion.div

          className="absolute bottom-[-100px] left-[30%] h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"

          animate={{

            x: [0, 80, 0],

            y: [0, -50, 0],

          }}

          transition={{

            duration: 16,

            repeat: Infinity,

            ease: "easeInOut",

          }}

        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      </div>

      {/* ================= STATUS BAR ================= */}

      <div className="relative z-20 flex items-center justify-between px-5 py-4 text-xs font-medium text-white/80 sm:px-8">

        <div>{currentTime}</div>

        <div className="flex items-center gap-3">

          <Radio size={15} />

          <Wifi size={16} />

          <Battery size={17} />

        </div>

      </div>

      {/* ================= MAIN SCREEN ================= */}

      <section className="relative z-10 flex min-h-[calc(100vh-64px)] flex-col items-center px-5 pb-32 pt-8 sm:px-10 sm:pt-12">

        {/* Greeting */}

        <motion.div

          initial={{ opacity: 0, y: -15 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          className="mb-10 text-center"

        >

          <p className="mb-2 text-sm font-medium tracking-[0.3em] text-white/50">

            WELCOME TO

          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">

            Mayur OS

          </h1>

          <p className="mt-3 text-sm text-white/50 sm:text-base">

            My personal digital space.

          </p>

        </motion.div>

        {/* ================= APP GRID ================= */}

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{

            duration: 0.7,

            delay: 0.15,

          }}

          className="grid grid-cols-4 gap-x-5 gap-y-8 sm:gap-x-10 sm:gap-y-10"

        >

          {apps.map((app, index) => (

            <motion.button

              key={app.name}

              onClick={() => setActiveApp(app.name)}

              initial={{

                opacity: 0,

                y: 20,

              }}

              animate={{

                opacity: 1,

                y: 0,

              }}

              transition={{

                delay: 0.15 + index * 0.05,

              }}

              className="cursor-pointer outline-none"

            >

              <AppIcon name={app.name} icon={app.icon} />

            </motion.button>

          ))}

        </motion.div>

      </section>

      {/* ================= DOCK ================= */}

      <motion.div

        initial={{ opacity: 0, y: 40 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{

          duration: 0.6,

          delay: 0.5,

        }}

        className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-[28px] border border-white/20 bg-white/[0.12] px-4 py-3 shadow-2xl backdrop-blur-2xl sm:bottom-7 sm:gap-4 sm:px-5"

      >

        {apps.slice(0, 5).map((app) => {

          const Icon = app.icon;

          return (

            <motion.button

              key={app.name}

              onClick={() => setActiveApp(app.name)}

              whileHover={{

                scale: 1.15,

                y: -5,

              }}

              whileTap={{

                scale: 0.9,

              }}

              className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/20 bg-white/10 text-white backdrop-blur-xl sm:h-12 sm:w-12"

            >

              <Icon size={23} strokeWidth={1.7} />

            </motion.button>

          );

        })}

      </motion.div>

      {/* ================= APP WINDOW ================= */}

      <AnimatePresence>

        {activeApp && (

          <motion.div

            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-8"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            onClick={closeApp}

          >

            <motion.div

              initial={{

                opacity: 0,

                scale: 0.88,

                y: 30,

              }}

              animate={{

                opacity: 1,

                scale: 1,

                y: 0,

              }}

              exit={{

                opacity: 0,

                scale: 0.88,

                y: 30,

              }}

              transition={{

                type: "spring",

                stiffness: 280,

                damping: 25,

              }}

              onClick={(e) => e.stopPropagation()}

              className="relative max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-2xl"

            >

              {/* Window Header */}

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">

                <div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">

                    Application

                  </p>

                  <h2 className="mt-1 text-xl font-semibold">

                    {activeApp}

                  </h2>

                </div>

                <button

                  onClick={closeApp}

                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"

                >

                  <X size={20} />

                </button>

              </div>

              {/* Window Content */}

              <div className="max-h-[calc(85vh-85px)] overflow-y-auto p-5 sm:p-7">

                {/* ================= ABOUT ================= */}

                {activeApp === "About" && (

                  <div className="space-y-6">

                    <div>

                      <p className="text-sm leading-7 text-white/60">

                        Hey! I'm Mayur, a Computer Science student

                        interested in modern web development,

                        artificial intelligence and building creative

                        digital experiences.

                      </p>

                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">

                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">

                        <p className="text-xs uppercase tracking-widest text-white/40">

                          Focus

                        </p>

                        <p className="mt-2 font-semibold">

                          Web Development

                        </p>

                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">

                        <p className="text-xs uppercase tracking-widest text-white/40">

                          Interest

                        </p>

                        <p className="mt-2 font-semibold">

                          AI & Technology

                        </p>

                      </div>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5">

                      <p className="text-sm leading-7 text-white/60">

                        Mayur OS is my attempt to turn a personal

                        portfolio into something that feels more like

                        an operating system than a traditional website.

                      </p>

                    </div>

                  </div>

                )}

                {/* ================= PROJECTS ================= */}

                {activeApp === "Projects" && (

                  <div className="space-y-6">

                    {projects.map((project) => (

                      <motion.div

                        key={project.name}

                        initial={{

                          opacity: 0,

                          y: 25,

                        }}

                        animate={{

                          opacity: 1,

                          y: 0,

                        }}

                        transition={{

                          duration: 0.4,

                        }}

                        whileHover={{

                          y: -6,

                        }}

                        className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.08] shadow-2xl backdrop-blur-xl"

                      >

                        {/* Project Image */}

                        <div className="relative h-52 overflow-hidden sm:h-64">

                          <motion.img

                            src={project.image}

                            alt={project.name}

                            className="h-full w-full object-cover"

                            whileHover={{

                              scale: 1.06,

                            }}

                            transition={{

                              duration: 0.5,

                            }}

                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          <div className="absolute bottom-4 left-5">

                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">

                              Featured Project

                            </p>

                            <h3 className="mt-1 text-2xl font-bold text-white">

                              {project.name}

                            </h3>

                          </div>

                        </div>

                        {/* Project Info */}

                        <div className="p-5">

                          <p className="text-sm leading-6 text-white/60">

                            {project.description}

                          </p>

                          {/* Technologies */}

                          <div className="mt-5 flex flex-wrap gap-2">

                            {project.technologies.map((tech) => (

                              <span

                                key={tech}

                                className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/75"

                              >

                                {tech}

                              </span>

                            ))}

                          </div>

                          {/* Buttons */}

                          <div className="mt-6 flex flex-wrap gap-3">

                            <a

                              href={project.github}

                              target="_blank"

                              rel="noopener noreferrer"

                              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:scale-105"

                            >

                              <Code2 size={16} />

                              GitHub

                              <ArrowUpRight size={15} />

                            </a>

                            <button

                              onClick={() =>

                                setSelectedProject(project)

                              }

                              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"

                            >

                              View Project

                              <ExternalLink size={15} />

                            </button>

                          </div>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                )}

                {/* ================= SOCIAL ================= */}

                {activeApp === "Social" && (

                  <div className="grid gap-4 sm:grid-cols-2">

                    <a

                      href="#"

                      className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"

                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-widest text-white/40">

                            Social

                          </p>

                          <h3 className="mt-2 text-lg font-semibold">

                            Instagram

                          </h3>

                        </div>

                        <ArrowUpRight

                          size={20}

                          className="text-white/40 transition group-hover:text-white"

                        />

                      </div>

                    </a>

                    <a

                      href="#"

                      className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"

                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-widest text-white/40">

                            Professional

                          </p>

                          <h3 className="mt-2 text-lg font-semibold">

                            LinkedIn

                          </h3>

                        </div>

                        <ArrowUpRight

                          size={20}

                          className="text-white/40 transition group-hover:text-white"

                        />

                      </div>

                    </a>

                    <a

                      href="https://github.com/mayursingh0907"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"

                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-widest text-white/40">

                            Code

                          </p>

                          <h3 className="mt-2 text-lg font-semibold">

                            GitHub

                          </h3>

                        </div>

                        <ArrowUpRight

                          size={20}

                          className="text-white/40 transition group-hover:text-white"

                        />

                      </div>

                    </a>

                  </div>

                )}

                {/* ================= MUSIC ================= */}

                {activeApp === "Music" && (

                  <div className="space-y-5">

                    <div className="rounded-[25px] border border-white/10 bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-6">

                      <p className="text-xs uppercase tracking-[0.25em] text-white/40">

                        Now Playing

                      </p>

                      <h3 className="mt-3 text-2xl font-bold">

                        My Music Space

                      </h3>

                      <p className="mt-2 text-sm text-white/50">

                        A future space for playlists, favorite songs

                        and music recommendations.

                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">

                      <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

                          <Music size={25} />

                        </div>

                        <div>

                          <p className="font-semibold">

                            Personal Playlist

                          </p>

                          <p className="text-sm text-white/40">

                            Coming soon

                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

                {/* ================= GITHUB ================= */}

                {activeApp === "GitHub" && (

                  <div className="space-y-5">

                    <div className="rounded-[25px] border border-white/10 bg-white/[0.06] p-6">

                      <div className="flex items-center gap-4">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">

                          <Code2 size={32} />

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-widest text-white/40">

                            Developer

                          </p>

                          <h3 className="mt-1 text-2xl font-bold">

                            mayursingh0907

                          </h3>

                        </div>

                      </div>

                      <p className="mt-5 text-sm leading-6 text-white/50">

                        Explore my projects, experiments and code on

                        GitHub.

                      </p>

                      <a

                        href="https://github.com/mayursingh0907"

                        target="_blank"

                        rel="noopener noreferrer"

                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"

                      >

                        Open GitHub

                        <ArrowUpRight size={16} />

                      </a>

                    </div>

                  </div>

                )}

                {/* ================= EDUCATION ================= */}

                {activeApp === "Education" && (

                  <div className="space-y-5">

                    <div className="rounded-[25px] border border-white/10 bg-white/[0.06] p-6">

                      <div className="flex items-start gap-4">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">

                          <GraduationCap size={28} />

                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-widest text-white/40">

                            Degree

                          </p>

                          <h3 className="mt-2 text-xl font-bold">

                            B.Tech Computer Science

                          </h3>

                          <p className="mt-1 text-sm text-white/50">

                            Artificial Intelligence

                          </p>

                        </div>

                      </div>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">

                      <p className="text-sm leading-7 text-white/50">

                        Currently developing my skills in programming,

                        web development, artificial intelligence and

                        modern software technologies.

                      </p>

                    </div>

                  </div>

                )}

                {/* ================= RESUME ================= */}

                {activeApp === "Resume" && (

                  <div className="flex flex-col items-center justify-center py-10 text-center">

                    <div className="flex h-20 w-20 items-center justify-center rounded-[25px] border border-white/10 bg-white/[0.08]">

                      <FileText size={38} />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold">

                      My Resume

                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-white/50">

                      My complete resume will be available here soon.

                    </p>

                    <button

                      disabled

                      className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white/40"

                    >

                      <Download size={17} />

                      Resume Coming Soon

                    </button>

                  </div>

                )}

                {/* ================= SETTINGS ================= */}

                {activeApp === "Settings" && (

                  <div className="space-y-4">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="font-semibold">

                            Interface

                          </p>

                          <p className="mt-1 text-sm text-white/40">

                            Mayur OS experience

                          </p>

                        </div>

                        <div className="rounded-full bg-green-400/15 px-3 py-1 text-xs text-green-300">

                          Active

                        </div>

                      </div>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">

                      <div className="flex items-center gap-3">

                        <CheckCircle2

                          size={20}

                          className="text-green-300"

                        />

                        <div>

                          <p className="font-semibold">

                            System Status

                          </p>

                          <p className="text-sm text-white/40">

                            All systems operational

                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                )}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ================= PROJECT DETAIL MODAL ================= */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div

            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-lg sm:p-8"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            onClick={() => setSelectedProject(null)}

          >

            <motion.div

              initial={{

                opacity: 0,

                scale: 0.9,

                y: 30,

              }}

              animate={{

                opacity: 1,

                scale: 1,

                y: 0,

              }}

              exit={{

                opacity: 0,

                scale: 0.9,

                y: 30,

              }}

              transition={{

                type: "spring",

                stiffness: 280,

                damping: 25,

              }}

              onClick={(e) => e.stopPropagation()}

              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/15 bg-slate-950 shadow-2xl"

            >

              {/* Hero */}

              <div className="relative h-56 overflow-hidden sm:h-72">

                <img

                  src={selectedProject.image}

                  alt={selectedProject.name}

                  className="absolute inset-0 h-full w-full object-cover"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <button

                  onClick={() => setSelectedProject(null)}

                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition hover:bg-white/20"

                >

                  <X size={20} />

                </button>

                <div className="absolute bottom-5 left-6">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">

                    Project

                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-white sm:text-4xl">

                    {selectedProject.name}

                  </h2>

                </div>

              </div>

              {/* Details */}

              <div className="max-h-[calc(90vh-288px)] overflow-y-auto p-6 sm:p-8">

                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

                  {/* Left */}

                  <div>

                    <p className="text-sm leading-7 text-white/60">

                      {selectedProject.description}

                    </p>

                    <h3 className="mt-8 text-lg font-semibold">

                      Key Features

                    </h3>

                    <div className="mt-4 space-y-3">

                      {selectedProject.features.map((feature) => (

                        <div

                          key={feature}

                          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"

                        >

                          <CheckCircle2

                            size={17}

                            className="shrink-0 text-green-300"

                          />

                          <span className="text-sm text-white/70">

                            {feature}

                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Right */}

                  <div>

                    <h3 className="text-lg font-semibold">

                      Technologies

                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {selectedProject.technologies.map((tech) => (

                        <span

                          key={tech}

                          className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs text-white/70"

                        >

                          {tech}

                        </span>

                      ))}

                    </div>

                    <div className="mt-8 space-y-3">

                      <a

                        href={selectedProject.github}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"

                      >

                        <Code2 size={17} />

                        View on GitHub

                        <ArrowUpRight size={16} />

                      </a>

                      <button

                        disabled={selectedProject.live === "#"}

                        className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/40"

                      >

                        <ExternalLink size={17} />

                        Live Website

                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  );

}
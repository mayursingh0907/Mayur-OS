"use client";

import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Sparkles,
  ChevronRight,
  Battery,
  Search,
  Mail,
  X,
  Code2,
  ArrowUpRight,
  Download,
  ExternalLink,
  CheckCircle2,
  Check,
} from "lucide-react";

/* ============================== DATA ============================== */

type Project = {
  name: string;
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
    image: "/projects/mayur-os.png",
    description:
      "My personal iPad-style digital portfolio and personal operating system built with modern web technologies.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "iPad-style interface",
      "Realistic app icons",
      "Glassmorphism UI",
      "Spotlight search (⌘K)",
      "Switchable wallpapers",
      "Responsive design",
    ],
    github: "https://github.com/mayursingh0907/Mayur-OS",
    live: "#",
  },
];

/* iPhone 18 Pro "Vitra"-inspired wallpapers: flowing glass ribbons in the four Pro finishes + iOS 27 */
type Wall = { kind?: "sur"; name: string; base: [string, string]; a: string; b: string; c: string; glow: string };

const wallpapers: Wall[] = [
  { kind: "sur", name: "iPadOS", base: ["#e5673f", "#b9519a"], a: "#fff", b: "#fff", c: "#fff", glow: "#fff" },
  { name: "Burgundy", base: ["#4a0d24", "#12030a"], a: "#ff6b8a", b: "#b3123f", c: "#ffa88a", glow: "#ff6b8a" },
  { name: "Glacier", base: ["#0e3358", "#041225"], a: "#8fdcff", b: "#2f7bff", c: "#d2f1ff", glow: "#7fd6ff" },
  { name: "Black", base: ["#1d1d23", "#000000"], a: "#8f8fa3", b: "#34343c", c: "#dcdce8", glow: "#7a7a90" },
  { name: "Silver", base: ["#d5d9e2", "#7b8294"], a: "#ffffff", b: "#a9b1c4", c: "#f1f4fb", glow: "#ffffff" },
  { name: "iOS 27", base: ["#1f4283", "#0a1330"], a: "#ffd36b", b: "#7fa8ff", c: "#eef1f8", glow: "#ffd36b" },
];

/** iPadOS 14 style wallpaper: orange to pink, pale curve top-right, deep blue swoosh */
/** true on landscape screens (desktop, iPad landscape, phone landscape) */
function useLandscape() {
  const [land, setLand] = useState(true);
  useEffect(() => {
    const m = window.matchMedia("(orientation: landscape)");
    const f = () => setLand(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return land;
}

/** iPad-landscape canvas: scales to fit any screen, so the layout always matches the iPad design */
function useStage() {
  const [d, setD] = useState({ w: 1366, h: 768 });
  useEffect(() => {
    const f = () => setD({ w: window.innerWidth, h: window.innerHeight });
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  const k = Math.min(d.h / 900, d.w / 1100);
  return { k, w: d.w / k, h: d.h / k };
}

function Sur({ thumb = false }: { thumb?: boolean }) {
  const id = useId().replace(/:/g, "");
  const land = useLandscape() && !thumb;
  return (
    <svg viewBox={land ? "0 0 1200 800" : "0 0 800 1200"} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2={land ? "0.15" : "0.3"} y2="1">
          <stop offset="0" stopColor="#eba43d" />
          <stop offset="0.3" stopColor="#e5673f" />
          <stop offset="0.6" stopColor="#dc4a50" />
          <stop offset="1" stopColor="#b9519a" />
        </linearGradient>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d3d8e4" />
          <stop offset="1" stopColor="#93a0bf" />
        </linearGradient>
        <linearGradient id={`${id}u`} x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#0b3f7e" />
          <stop offset="0.5" stopColor="#1d5c9e" />
          <stop offset="0.78" stopColor="#5348a8" />
          <stop offset="1" stopColor="#984ba4" />
        </linearGradient>
        <filter id={`${id}f`}><feGaussianBlur stdDeviation="1.5" /></filter>
      </defs>
      {land ? (
        <>
          <rect width="1200" height="800" fill={`url(#${id}b)`} />
          <path d="M830 0H1200V540C1060 440 950 240 830 0Z" fill={`url(#${id}g)`} filter={`url(#${id}f)`} />
          <path d="M0 540C110 630 190 720 270 800H0Z" fill={`url(#${id}g)`} opacity="0.9" />
          <path d="M560 800C535 710 590 625 700 565C830 495 1010 445 1200 470V800Z" fill={`url(#${id}u)`} filter={`url(#${id}f)`} />
        </>
      ) : (
        <>
          <rect width="800" height="1200" fill={`url(#${id}b)`} />
          <path d="M470 0H800V640C690 520 560 260 470 0Z" fill={`url(#${id}g)`} filter={`url(#${id}f)`} />
          <path d="M0 800C90 900 160 1040 210 1200H0Z" fill={`url(#${id}g)`} opacity="0.9" />
          <path d="M250 1200C240 1060 320 940 450 860C570 785 700 750 800 770V1200Z" fill={`url(#${id}u)`} filter={`url(#${id}f)`} />
        </>
      )}
    </svg>
  );
}

function Wallpaper({ w, animate = true, thumb = false }: { w: Wall; animate?: boolean; thumb?: boolean }) {
  return w.kind === "sur" ? <Sur thumb={thumb} /> : <Vitra w={w} animate={animate} thumb={thumb} />;
}

function Vitra({ w, animate = true, thumb = false }: { w: Wall; animate?: boolean; thumb?: boolean }) {
  const id = useId().replace(/:/g, "");
  const land = useLandscape() && !thumb;
  const ribbons = [
    { d: "M-80 180C80 60 200 300 480 170L480 390C260 530 120 300 -80 450Z", edge: "M-80 180C80 60 200 300 480 170", from: w.a, to: w.b, dy: 18, t: 16 },
    { d: "M-80 500C100 390 240 640 480 500L480 720C250 840 100 610 -80 780Z", edge: "M-80 500C100 390 240 640 480 500", from: w.c, to: w.b, dy: -22, t: 20 },
    { d: "M-80 720C120 630 300 880 480 750L480 980L-80 980Z", edge: "M-80 720C120 630 300 880 480 750", from: w.b, to: w.base[1], dy: 14, t: 24 },
  ];
  return (
    <svg viewBox={land ? "0 0 860 400" : "0 0 400 860"} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor={w.base[0]} />
          <stop offset="1" stopColor={w.base[1]} />
        </linearGradient>
        <radialGradient id={`${id}glow`}>
          <stop offset="0" stopColor={w.glow} stopOpacity="0.75" />
          <stop offset="1" stopColor={w.glow} stopOpacity="0" />
        </radialGradient>
        {ribbons.map((r, i) => (
          <linearGradient key={i} id={`${id}r${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={r.from} stopOpacity="0.95" />
            <stop offset="0.55" stopColor={r.to} stopOpacity="0.75" />
            <stop offset="1" stopColor={r.to} stopOpacity="0.15" />
          </linearGradient>
        ))}
        <filter id={`${id}soft`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9" /></filter>
        <filter id={`${id}edge`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.6" /></filter>
      </defs>
      <g transform={land ? "translate(0 400) rotate(-90)" : undefined}>
      <rect width="400" height="860" fill={`url(#${id}bg)`} />
      <ellipse cx="300" cy="150" rx="230" ry="200" fill={`url(#${id}glow)`} />
      {ribbons.map((r, i) => (
        <motion.g
          key={i}
          animate={animate ? { y: [0, r.dy, 0] } : undefined}
          transition={{ duration: r.t, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={r.d} fill={`url(#${id}r${i})`} filter={`url(#${id}soft)`} />
          <path d={r.d} fill={`url(#${id}r${i})`} opacity="0.55" />
          <path d={r.edge} fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="2.2" filter={`url(#${id}edge)`} />
        </motion.g>
      ))}
    </g>
    </svg>
  );
}

type AppDef = { name: string; grad: [string, string]; art: ReactNode; badge?: number };

const petals = ["#ff9f0a", "#ffd60a", "#a4e03f", "#30d158", "#64d2ff", "#0a84ff", "#bf5af2", "#ff375f"];

const apps: AppDef[] = [
  { // Contacts
    name: "About",
    grad: ["#ffffff", "#d4d4d8"],
    art: (
      <>
        <circle cx="50" cy="38" r="15" fill="#9b9ba3" />
        <path d="M22 84c0-18 12-28 28-28s28 10 28 28z" fill="#9b9ba3" />
        {[18, 38, 58].map((y, i) => (
          <rect key={y} x="92" y={y} width="8" height="14" rx="3" fill={["#ff9f0a", "#30d158", "#0a84ff"][i]} />
        ))}
      </>
    ),
  },
  { // Finder
    name: "Projects",
    grad: ["#7dd3fc", "#3b82f6"],
    badge: 1,
    art: (
      <>
        <rect width="50" height="100" fill="#8fd6ff" />
        <rect x="50" width="50" height="100" fill="#2a7bff" />
        <g stroke="#0b2a6b" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M33 27v15M67 27v15M52 30q7 20-4 28M27 67q23 20 46 0" />
        </g>
      </>
    ),
  },
  { // Activity
    name: "Skills",
    grad: ["#27272a", "#000000"],
    art: (
      <g fill="none" strokeLinecap="round" strokeWidth="10" transform="rotate(-90 50 50)">
        {[
          { r: 38, c: "#ff2d55", f: 0.8 },
          { r: 26, c: "#a4f700", f: 0.65 },
          { r: 14, c: "#00e0ff", f: 0.5 },
        ].map((x) => (
          <g key={x.r}>
            <circle cx="50" cy="50" r={x.r} stroke={x.c} opacity="0.25" />
            <circle cx="50" cy="50" r={x.r} stroke={x.c} strokeDasharray={`${2 * Math.PI * x.r * x.f} 999`} />
          </g>
        ))}
      </g>
    ),
  },
  { // Photos
    name: "Social",
    grad: ["#ffffff", "#f4f4f5"],
    art: (
      <g style={{ isolation: "isolate" }}>
        {petals.map((c, i) => (
          <ellipse
            key={c}
            cx="50"
            cy="31"
            rx="13"
            ry="20"
            fill={c}
            opacity="0.9"
            transform={`rotate(${i * 45} 50 50)`}
            style={{ mixBlendMode: "multiply" }}
          />
        ))}
      </g>
    ),
  },
  { // Music
    name: "Music",
    grad: ["#ff6a7d", "#fa233b"],
    art: (
      <g fill="#fff">
        <path d="M39 70V31l34-7v39" fill="none" stroke="#fff" strokeWidth="7" strokeLinejoin="round" />
        <circle cx="31" cy="71" r="10" />
        <circle cx="65" cy="64" r="10" />
      </g>
    ),
  },
  { // Terminal
    name: "GitHub",
    grad: ["#3f3f46", "#000000"],
    art: (
      <>
        <rect x="6" y="6" width="88" height="88" rx="16" fill="#111" stroke="#9a9aa0" strokeWidth="2" />
        <rect x="6" y="6" width="88" height="14" rx="8" fill="#3a3a3f" />
        <path d="M24 40l18 14-18 14M50 72h26" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  { // Books
    name: "Education",
    grad: ["#fdba74", "#ea580c"],
    art: (
      <>
        <path d="M50 30Q34 22 16 28v46q18-6 34 3z" fill="#fff" />
        <path d="M50 30q16-8 34-2v46q-18-6-34 3z" fill="#ffe9d1" />
        <path d="M50 30v47" stroke="#f97316" strokeWidth="2" opacity="0.5" />
      </>
    ),
  },
  { // Notes
    name: "Resume",
    grad: ["#ffffff", "#f4f4f5"],
    art: (
      <>
        <rect width="100" height="26" fill="#ffd60a" />
        {[46, 60, 74].map((y) => (
          <path key={y} d={`M18 ${y}H82`} stroke="#d1d1d6" strokeWidth="2.5" />
        ))}
        <path d="M18 34h40" stroke="#1c1c1e" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  },
  { // Mail
    name: "Contact",
    grad: ["#7dd3fc", "#2563eb"],
    art: (
      <>
        <rect x="16" y="28" width="68" height="46" rx="7" fill="#fff" />
        <path d="M16 36l34 22 34-22" stroke="#3b82f6" strokeWidth="4" fill="none" strokeLinejoin="round" />
      </>
    ),
  },
  { // System Settings
    name: "Settings",
    grad: ["#b4b4bb", "#6b6b73"],
    art: (
      <>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="43" y="12" width="14" height="22" rx="4" fill="#e9e9ee" transform={`rotate(${i * 45} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="27" fill="#e9e9ee" />
        <circle cx="50" cy="50" r="12" fill="#7d7d85" />
      </>
    ),
  },
];

const skills = [
  { name: "Next.js / React", level: 85 },
  { name: "TypeScript", level: 78 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Framer Motion", level: 75 },
  { name: "AI / Machine Learning", level: 55 },
];

/* ============================== UI PIECES ============================== */

/** macOS Big Sur / iOS style icon: squircle, app-specific artwork, soft shadow */
function AppIcon({
  def,
  size = 76,
  showBadge = true,
}: {
  def: AppDef;
  size?: number | string;
  showBadge?: boolean;
}) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 overflow-hidden border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        style={{ borderRadius: "22.5%", background: `linear-gradient(180deg, ${def.grad[0]}, ${def.grad[1]})` }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block" }}>
          {def.art}
        </svg>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
      {showBadge && def.badge && (
        <span className="absolute -right-1.5 -top-1.5 z-20 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff3b30] px-1.5 text-[12px] font-semibold text-white shadow-md">
          {def.badge}
        </span>
      )}
    </div>
  );
}

/** Home-screen icon: original zoom / rotate / shadow behaviour */
function HomeIcon({ def, stage = false }: { def: AppDef; stage?: boolean }) {
  const size = stage ? "88px" : "clamp(60px, 14vw, 84px)";
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0 overflow-hidden border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        style={{ borderRadius: "22.5%", background: `linear-gradient(180deg, ${def.grad[0]}, ${def.grad[1]})` }}
        whileHover={{ scale: 1.08, rotate: 1, boxShadow: "0 15px 40px rgba(0,0,0,0.35)" }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block" }}>
          {def.art}
        </svg>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
      </motion.div>
      {def.badge && (
        <span className="absolute -right-1.5 -top-1.5 z-20 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff3b30] px-1.5 text-[12px] font-semibold text-white shadow-md">
          {def.badge}
        </span>
      )}
    </div>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.06] p-5 ${className}`}>
      {children}
    </div>
  );
}

/* ============================== PAGE ============================== */

export default function Home() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [wallIndex, setWallIndex] = useState(0);
  const [spotlight, setSpotlight] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  /* ⌘K / Ctrl+K opens Spotlight, Esc closes everything */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlight((v) => !v);
      }
      if (e.key === "Escape") {
        setSpotlight(false);
        setSelectedProject(null);
        setActiveApp(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (spotlight) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [spotlight]);

  const openApp = (name: string) => {
    setSpotlight(false);
    setActiveApp(name);
  };

  const h12 = now ? now.getHours() % 12 || 12 : 9;
  const clockTime = now ? `${h12}:${String(now.getMinutes()).padStart(2, "0")}` : "9:41";
  const longDate = now?.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" }) ?? "";
  const barDate = now?.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" }) ?? "";
  const barTime = now?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) ?? "";
  const weekday = now?.toLocaleDateString([], { weekday: "long" }) ?? "";

  const results = useMemo(
    () => apps.filter((a) => a.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const land = useLandscape();
  const st = useStage();

  const clock = (stage: boolean) => (
    <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className={`${stage ? "text-[88px]" : "text-6xl sm:text-7xl"} font-extrabold leading-none tracking-tight drop-shadow-sm`}>{clockTime}</h1>
      <p className={`mt-3 font-semibold text-white/95 drop-shadow-sm ${stage ? "text-[22px]" : "text-lg sm:text-xl"}`}>{longDate}</p>
    </motion.div>
  );

  const appOf = (n: string) => apps.find((a) => a.name === n)!;

  const widgetsTop = (
    <div className="mt-6 grid grid-cols-2 gap-4 text-black">
      {/* Calendar (sample entries, edit freely) */}
      <div className="rounded-[24px] bg-white/95 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <p className="text-xs font-bold uppercase tracking-wide text-[#ff3b30]">{weekday}</p>
        <p className="mt-1 text-[36px] font-medium leading-none">{now?.getDate()}</p>
        <div className="mt-4 space-y-3">
          <div className="border-l-[3px] border-sky-500 pl-2.5">
            <p className="text-[13px] font-bold leading-tight">Build Mayur OS</p>
            <p className="mt-0.5 text-xs font-semibold text-black/55">All day</p>
          </div>
          <div className="border-l-[3px] border-green-500 pl-2.5">
            <p className="text-[13px] font-bold leading-tight">Study session</p>
            <p className="mt-0.5 text-xs font-semibold text-black/55">B.Tech, AI</p>
          </div>
        </div>
      </div>
      {/* Availability */}
      <button
        onClick={() => openApp("Contact")}
        className="flex flex-col justify-between gap-4 rounded-[24px] bg-gradient-to-b from-[#2a8fd8] to-[#62b8ee] p-5 text-left text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
      >
        <p className="text-[13px] font-bold">Availability</p>
        <div>
          <p className="text-[40px] font-medium leading-none">Open</p>
          <p className="mt-2 text-[13px] font-semibold leading-snug text-white/95">for internships and collaborations</p>
        </div>
        <span className="flex items-center gap-2 text-xs font-bold">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Tap to get in touch
        </span>
      </button>
    </div>
  );

  const widgetsLower = (
    <>
      {/* Highlights */}
      <div className="rounded-[24px] bg-white/95 p-5 text-black shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-base font-bold text-[#ff3b30]">Highlights</p>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-b from-[#ff5f6d] to-[#ff2d55] text-white shadow-sm">
            <Sparkles size={15} />
          </span>
        </div>
        {[
          { app: "Projects", tag: "Project", title: "Mayur OS is now live" },
          { app: "Skills", tag: "Skills", title: "Learning Next.js, AI and ML" },
        ].map((h, i) => (
          <div key={h.app}>
            {i > 0 && <div className="h-px bg-black/10" />}
            <button
              onClick={() => openApp(h.app)}
              className="-mx-2 flex w-[calc(100%+16px)] items-center gap-3.5 rounded-xl px-2 py-2.5 text-left transition hover:bg-black/5"
            >
              <AppIcon def={appOf(h.app)} size={44} showBadge={false} />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold text-black/50">{h.tag}</span>
                <span className="mt-0.5 block truncate text-[14px] font-bold leading-tight">{h.title}</span>
              </span>
              <ChevronRight size={18} className="shrink-0 text-black/30" />
            </button>
          </div>
        ))}
      </div>

      {/* Music */}
      <button onClick={() => openApp("Music")} className="block w-full rounded-[24px] bg-white/95 p-5 text-left text-black shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-3.5">
          <AppIcon def={appOf("Music")} size={48} showBadge={false} />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-black/50">Now playing</p>
            <p className="mt-0.5 truncate text-[15px] font-bold leading-tight">My Music Space</p>
            <p className="mt-0.5 text-[13px] font-semibold text-[#ff2d55]">Playlists coming soon</p>
          </div>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/10">
          <div className="h-full w-1/3 rounded-full bg-[#ff2d55]" />
        </div>
      </button>
    </>
  );

  const appGrid = (stage: boolean) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className={stage ? "mx-auto grid max-w-[760px] grid-cols-4 justify-items-center gap-x-6 gap-y-14" : "mx-auto grid max-w-lg grid-cols-4 justify-items-center gap-x-3 gap-y-8"}
    >
      {apps.map((app, index) => (
        <motion.button
          key={app.name}
          onClick={() => openApp(app.name)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + index * 0.05 }}
          className="cursor-pointer outline-none"
        >
          <div className="flex flex-col items-center gap-2.5">
            <HomeIcon def={app} stage={stage} />
            <span className={`font-semibold tracking-wide text-white drop-shadow-md ${stage ? "text-[15px]" : "text-xs"}`}>{app.name}</span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );

  const dots = (stage: boolean) => (
    <div className={`${stage ? "absolute bottom-[128px]" : "fixed bottom-[max(6.5rem,calc(env(safe-area-inset-bottom)+5.75rem))] sm:bottom-[7.25rem]"} inset-x-0 z-20 mx-auto flex w-fit gap-2`}>
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
    </div>
  );

  const dock = (stage: boolean) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`${stage ? "absolute bottom-7 gap-4 px-5 py-3.5" : "fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] max-w-[96vw] gap-2.5 px-3 py-3 sm:bottom-7 sm:gap-3 sm:px-4"} inset-x-0 z-30 mx-auto flex w-fit items-center rounded-[30px] border border-white/25 bg-white/[0.22] shadow-2xl backdrop-blur-3xl`}
    >
      {[...apps.slice(0, 5), null, ...apps.slice(7, 10)].map((app, i) => {
        const extra = !stage && i >= 5;
        return app ? (
          <motion.button
            key={app.name}
            onClick={() => openApp(app.name)}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={app.name}
            className={`${stage ? "h-16 w-16" : "h-12 w-12 sm:h-[52px] sm:w-[52px] md:h-14 md:w-14"} ${extra ? "hidden sm:block" : ""}`}
          >
            <AppIcon def={app} size="100%" showBadge={false} />
          </motion.button>
        ) : (
          <div key={`sep${i}`} className={`h-11 w-px bg-white/35 ${stage ? "" : "hidden sm:block"}`} />
        );
      })}
    </motion.div>
  );

  return (
    <main className="relative min-h-screen select-none overflow-x-hidden bg-black text-white [font-family:'Plus_Jakarta_Sans',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}</style>

      {/* ============ iPHONE 18 PRO STYLE WALLPAPER ============ */}
      <AnimatePresence mode="sync">
        <motion.div
          key={wallpapers[wallIndex].name}
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Wallpaper w={wallpapers[wallIndex]} />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

      {/* ============ TOP BAR ============ */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[calc(2.5rem+env(safe-area-inset-top))] items-center justify-between border-b border-white/10 bg-black/20 px-4 pt-[env(safe-area-inset-top)] backdrop-blur-2xl sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-b from-sky-300 to-blue-600 text-[13px] font-extrabold text-white shadow-md ring-1 ring-white/30">
            M
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-white">Mayur OS</span>
          {activeApp && (
            <>
              <ChevronRight size={14} className="shrink-0 text-white/50" />
              <span className="truncate text-sm font-semibold text-white/85">{activeApp}</span>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3 text-[13px] font-semibold text-white sm:gap-4">
          <button onClick={() => setSpotlight(true)} aria-label="Search" className="flex items-center gap-1.5 text-white/85 transition hover:text-white">
            <Search size={15} />
            <kbd className="hidden rounded bg-white/15 px-1.5 text-[11px] font-semibold sm:block">⌘K</kbd>
          </button>
          <Wifi size={16} />
          <span className="hidden items-center gap-1 sm:flex">
            100% <Battery size={21} strokeWidth={1.6} />
          </span>
          <span className="tabular-nums">
            {barDate}
            <span className="ml-2.5">{barTime}</span>
          </span>
        </div>
      </div>

      {/* ============ HOME SCREEN ============ */}
      {land ? (
        /* LANDSCAPE: exact iPad home screen, scaled to fit any screen */
        <div className="fixed inset-0 z-10 overflow-hidden">
          <div className="absolute left-0 top-0 origin-top-left" style={{ width: st.w, height: st.h, transform: `scale(${st.k})` }}>
            <div className="mx-auto flex h-full max-w-[1500px] gap-14 px-14 pt-[76px]">
              <div className="flex w-[360px] shrink-0 flex-col gap-4">
                {clock(true)}
                {widgetsTop}
                {widgetsLower}
              </div>
              <div className="flex-1 pt-8">{appGrid(true)}</div>
            </div>
            {dots(true)}
            {dock(true)}
          </div>
        </div>
      ) : (
        /* PORTRAIT: phones and tablets held upright */
        <>
          <section className="relative z-10 mx-auto flex max-w-3xl flex-col gap-8 px-5 pb-48 pt-16 sm:px-10">
            {clock(false)}
            {appGrid(false)}
            <div className="max-w-md">{widgetsTop}</div>
            <div className="grid gap-4 md:grid-cols-2">{widgetsLower}</div>
          </section>
          {dots(false)}
          {dock(false)}
        </>
      )}

      {/* ============ SPOTLIGHT ============ */}
      <AnimatePresence>
        {spotlight && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/40 px-4 pt-[14vh] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSpotlight(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900/70 shadow-2xl backdrop-blur-3xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search size={18} className="text-white/50" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && results[0] && openApp(results[0].name)}
                  placeholder="Search apps"
                  className="w-full select-text bg-transparent text-lg outline-none placeholder:text-white/35"
                />
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {results.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-white/40">No apps match "{query}".</p>
                )}
                {results.map((app) => (
                  <button
                    key={app.name}
                    onClick={() => openApp(app.name)}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition hover:bg-white/10"
                  >
                    <AppIcon def={app} size={38} showBadge={false} />
                    <span className="font-medium">{app.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ APP WINDOW (iPadOS windowing) ============ */}
      <AnimatePresence>
        {activeApp && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveApp(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88dvh] w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-2xl"
            >
              {/* window bar */}
              <div className="relative flex items-center border-b border-black/40 bg-white/[0.04] px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveApp(null)}
                    aria-label="Close"
                    className="h-3.5 w-3.5 rounded-full bg-[#ff5f57] ring-1 ring-black/20 transition hover:brightness-110"
                  />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e] ring-1 ring-black/20" />
                  <span className="h-3.5 w-3.5 rounded-full bg-[#28c840] ring-1 ring-black/20" />
                </div>
                <h2 className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80">
                  {activeApp}
                </h2>
              </div>

              <div className="max-h-[calc(88dvh-52px)] select-text overflow-y-auto p-5 sm:p-7">
                {/* ABOUT */}
                {activeApp === "About" && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <AppIcon def={apps[0]} size={64} showBadge={false} />
                      <div>
                        <h3 className="text-2xl font-bold">Mayur</h3>
                        <p className="text-sm text-white/50">Computer Science student</p>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-white/65">
                      Hey! I&apos;m Mayur, a Computer Science student interested in modern web
                      development, artificial intelligence and building creative digital experiences.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Panel>
                        <p className="text-xs text-white/40">Focus</p>
                        <p className="mt-2 font-semibold">Web Development</p>
                      </Panel>
                      <Panel>
                        <p className="text-xs text-white/40">Interest</p>
                        <p className="mt-2 font-semibold">AI &amp; Technology</p>
                      </Panel>
                    </div>
                    <Panel className="bg-gradient-to-br from-white/[0.08] to-transparent">
                      <p className="text-sm leading-7 text-white/60">
                        Mayur OS is my attempt to turn a personal portfolio into something that feels
                        more like an operating system than a traditional website.
                      </p>
                    </Panel>
                  </div>
                )}

                {/* PROJECTS */}
                {activeApp === "Projects" && (
                  <div className="space-y-6">
                    {projects.map((project) => (
                      <div
                        key={project.name}
                        className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] shadow-xl"
                      >
                        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 sm:h-64">
                          <motion.img
                            src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                          <div className="absolute bottom-4 left-5">
                            <p className="text-xs font-medium text-white/60">Featured project</p>
                            <h3 className="mt-1 text-2xl font-bold">{project.name}</h3>
                          </div>
                        </div>
                        <div className="p-5">
                          <p className="text-sm leading-6 text-white/60">{project.description}</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((t) => (
                              <span key={t} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white/75">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
                            >
                              <Code2 size={16} /> GitHub <ArrowUpRight size={15} />
                            </a>
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/20"
                            >
                              View project <ExternalLink size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SKILLS */}
                {activeApp === "Skills" && (
                  <div className="space-y-4">
                    {skills.map((s, i) => (
                      <Panel key={s.name} className="py-4">
                        <div className="mb-2.5 flex justify-between text-sm">
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-white/40">{s.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-teal-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${s.level}%` }}
                            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </Panel>
                    ))}
                  </div>
                )}

                {/* SOCIAL */}
                {activeApp === "Social" && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Instagram", sub: "Social", href: "#" },
                      { label: "LinkedIn", sub: "Professional", href: "#" },
                      { label: "GitHub", sub: "Code", href: "https://github.com/mayursingh0907" },
                    ].map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.href === "#" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.12]"
                      >
                        <div>
                          <p className="text-xs text-white/40">{l.sub}</p>
                          <h3 className="mt-1.5 text-lg font-semibold">{l.label}</h3>
                        </div>
                        <ArrowUpRight size={20} className="text-white/40 transition group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                )}

                {/* MUSIC */}
                {activeApp === "Music" && (
                  <div className="space-y-5">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-rose-500/30 to-purple-500/20 p-6">
                      <p className="text-xs text-white/50">Now playing</p>
                      <h3 className="mt-3 text-2xl font-bold">My Music Space</h3>
                      <p className="mt-2 text-sm text-white/55">
                        A future space for playlists, favorite songs and music recommendations.
                      </p>
                      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/15">
                        <motion.div
                          className="h-full rounded-full bg-white"
                          animate={{ width: ["0%", "100%"] }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                    <Panel>
                      <div className="flex items-center gap-4">
                        <AppIcon def={apps[4]} size={52} showBadge={false} />
                        <div>
                          <p className="font-semibold">Personal playlist</p>
                          <p className="text-sm text-white/40">Coming soon</p>
                        </div>
                      </div>
                    </Panel>
                  </div>
                )}

                {/* GITHUB */}
                {activeApp === "GitHub" && (
                  <Panel className="p-6">
                    <div className="flex items-center gap-4">
                      <AppIcon def={apps[5]} size={64} showBadge={false} />
                      <div>
                        <p className="text-xs text-white/40">Developer</p>
                        <h3 className="mt-1 text-2xl font-bold">mayursingh0907</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-6 text-white/55">
                      Explore my projects, experiments and code on GitHub.
                    </p>
                    <a
                      href="https://github.com/mayursingh0907"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
                    >
                      Open GitHub <ArrowUpRight size={16} />
                    </a>
                  </Panel>
                )}

                {/* EDUCATION */}
                {activeApp === "Education" && (
                  <div className="space-y-5">
                    <Panel className="p-6">
                      <div className="flex items-start gap-4">
                        <AppIcon def={apps[6]} size={56} showBadge={false} />
                        <div>
                          <p className="text-xs text-white/40">Degree</p>
                          <h3 className="mt-1.5 text-xl font-bold">B.Tech Computer Science</h3>
                          <p className="mt-1 text-sm text-white/50">Artificial Intelligence</p>
                        </div>
                      </div>
                    </Panel>
                    <p className="text-sm leading-7 text-white/50">
                      Currently developing my skills in programming, web development, artificial
                      intelligence and modern software technologies.
                    </p>
                  </div>
                )}

                {/* RESUME */}
                {activeApp === "Resume" && (
                  <div className="flex flex-col items-center py-10 text-center">
                    <AppIcon def={apps[7]} size={84} showBadge={false} />
                    <h3 className="mt-6 text-2xl font-bold">My Resume</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                      My complete resume will be available here soon.
                    </p>
                    <button
                      disabled
                      className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white/40"
                    >
                      <Download size={17} /> Resume coming soon
                    </button>
                  </div>
                )}

                {/* CONTACT */}
                {activeApp === "Contact" && (
                  <div className="space-y-4">
                    <Panel className="p-6">
                      <h3 className="text-xl font-bold">Let&apos;s build something</h3>
                      <p className="mt-2 text-sm leading-6 text-white/55">
                        Open to internships, freelance work and collaborations.
                      </p>
                      {/* replace with your real email */}
                      <a
                        href="mailto:you@example.com"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold transition hover:bg-blue-400"
                      >
                        <Mail size={16} /> Send an email
                      </a>
                    </Panel>
                  </div>
                )}

                {/* SETTINGS */}
                {activeApp === "Settings" && (
                  <div className="space-y-5">
                    <div>
                      <p className="mb-3 text-sm font-semibold">Wallpaper</p>
                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {wallpapers.map((w, i) => (
                          <button
                            key={w.name}
                            onClick={() => setWallIndex(i)}
                            className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 transition ${
                              wallIndex === i ? "border-white" : "border-white/10 hover:border-white/40"
                            }`}
                            >
                            <Wallpaper w={w} animate={false} thumb />
                            <span className="absolute inset-x-0 bottom-0 bg-black/40 py-1.5 text-xs font-medium backdrop-blur-sm">
                              {w.name}
                            </span>
                            {wallIndex === i && (
                              <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                                <Check size={13} />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                    <Panel>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-green-300" />
                        <div>
                          <p className="font-semibold">System status</p>
                          <p className="text-sm text-white/40">All systems operational</p>
                        </div>
                      </div>
                    </Panel>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ PROJECT DETAIL MODAL ============ */}
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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90dvh] w-full max-w-4xl select-text overflow-hidden rounded-[30px] border border-white/15 bg-slate-950 shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 sm:h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-xl transition hover:bg-white/20"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-5 left-6">
                  <p className="text-xs font-semibold text-white/60">Project</p>
                  <h2 className="mt-1 text-3xl font-bold sm:text-4xl">{selectedProject.name}</h2>
                </div>
              </div>

              <div className="max-h-[calc(90dvh-288px)] overflow-y-auto p-6 sm:p-8">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-sm leading-7 text-white/60">{selectedProject.description}</p>
                    <h3 className="mt-8 text-lg font-semibold">Key features</h3>
                    <div className="mt-4 space-y-3">
                      {selectedProject.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                          <CheckCircle2 size={17} className="shrink-0 text-green-300" />
                          <span className="text-sm text-white/70">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Technologies</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-xs text-white/70">
                          {t}
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
                        <Code2 size={17} /> View on GitHub <ArrowUpRight size={16} />
                      </a>
                      <button
                        disabled={selectedProject.live === "#"}
                        className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/40"
                      >
                        <ExternalLink size={17} /> Live website
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
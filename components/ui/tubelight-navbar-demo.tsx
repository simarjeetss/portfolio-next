"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Briefcase, Camera, FileText, Home } from "lucide-react"

import { BlurFadeTextDemo } from "@/components/ui/body/blud-fade-demo"
import { BlurFade } from "@/components/ui/body/blur-fade"
import { NavBar, type TubelightNavItem } from "@/components/ui/tubelight-navbar"

type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: "flavorblend",
    description:
      "ai powered recipe generator that crafts personalized meal ideas based on your dietary preferences and available ingredients.",
    tech: ["fastapi", "nextjs", "langchain", "genai", "supabase", "chromadb"],
    link: "https://flavorblend.simarjeet.dev",
  },
  {
    title: "spotify analysis",
    description:
      "personal spotify data analysis - found some cool stuff about myself",
    tech: ["R", "network-science", "igraph"],
    link: "https://spotify.simarjeet.dev",
  },
  {
    title: "phishing detection ml pipeline",
    description:
      "End-to-end machine learning pipeline for detecting phishing websites using computer vision and natural language processing.",
    tech: ["sklearn", "python", "fastapi", "aws"],
    link: "https://github.com/simarjeetss/network-security-pipeline"
  },
  {
    title: "MonoMorph",
    description:
      "Neural style-transfer playground blending X-ray imagery with cinematic LUTs for rapid mood-boarding in healthcare campaigns.",
    tech: ["Python", "Diffusers", "CUDA", "Redis Streams"],
    link: "https://github.com/simarjeetss529/monomorph",
  },
]

interface NavBarDemoProps {
  activeItem?: string
  onSectionChange?: (section: string) => void
}

export function NavBarDemo({ activeItem: controlledActiveItem, onSectionChange }: NavBarDemoProps = {}) {
  const navItems: TubelightNavItem[] = useMemo(
    () => [
      { name: "home", url: "#home", icon: Home },
      { name: "projects", url: "#projects", icon: Briefcase },
      { name: "resume", url: "#resume", icon: FileText },
      { name: "pics", url: "#pics", icon: Camera },
    ],
    [],
  )

  const [internalActiveItem, setInternalActiveItem] = useState<string>(navItems[0]?.name ?? "home")
  const activeItem = controlledActiveItem ?? internalActiveItem

  const activeIndex = Math.max(0, navItems.findIndex((item) => item.name === activeItem))

  const handleSectionChange = (item: TubelightNavItem) => {
    if (controlledActiveItem === undefined) {
      setInternalActiveItem(item.name)
    }
    onSectionChange?.(item.name)
  }

  return (
    <div className="flex w-full flex-col items-center gap-12">
      <div className="flex w-full justify-center">
        <NavBar
          items={navItems}
          initialActiveIndex={activeIndex}
          onItemSelect={(item) => handleSectionChange(item)}
        />
      </div>

      <section className="flex w-full flex-col items-center gap-16">
        {activeItem === "home" ? <HomeShowcase /> : null}
        {activeItem === "projects" ? <ProjectsShowcase /> : null}
        {activeItem === "resume" ? <PlaceholderSection label="resume" /> : null}
        {activeItem === "pics" ? <PlaceholderSection label="pics" /> : null}
      </section>
    </div>
  )
}

function HomeShowcase() {
  return (
    <div className="flex w-full flex-col items-center">
      <BlurFadeTextDemo />
    </div>
  )
}

export function ProjectsShowcase() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.10)] backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_60px_rgba(15,23,42,0.45)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-100/40 via-transparent to-white/30 dark:from-white/5 dark:to-white/0" />

      <div className="relative space-y-6">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-300">
            <Briefcase className="h-4 w-4" /> featured projects
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h2 id="projects-heading" className="text-left text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            shipping ideas that stick
          </h2>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <BlurFade key={project.title} delay={0.25 + index * 0.12}>
              <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200/60 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_40px_rgba(15,23,42,0.35)] dark:hover:shadow-[0_28px_70px_rgba(15,23,42,0.55)]">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-zinc-800 transition-colors hover:text-black dark:text-zinc-200 dark:hover:text-white"
                  >
                    view project <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlaceholderSection({ label }: { label: string }) {
  return (
    <section className="w-full max-w-3xl rounded-3xl border border-dashed border-zinc-200/70 bg-white/60 p-16 text-center shadow-[0_16px_40px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_16px_40px_rgba(15,23,42,0.35)]">
      <BlurFade delay={0.15}>
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-300">{label} section</p>
      </BlurFade>
      <BlurFade delay={0.3}>
        <h3 className="mt-6 text-2xl font-semibold text-zinc-900 dark:text-white">Coming soon</h3>
      </BlurFade>
      <BlurFade delay={0.45}>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
          I&apos;m polishing this page right now. Check back shortly for a fresh drop.
        </p>
      </BlurFade>
    </section>
  )
}

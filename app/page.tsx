import { DockDemo } from "@/components/ui/footer/dock-demo"
import { NavBarDemo } from "@/components/ui/tubelight-navbar-demo"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start gap-12 bg-zinc-50 px-6 py-12 text-center font-sans dark:bg-black overflow-hidden">
      <NavBarDemo />
      <DockDemo />
    </main>
  )
}

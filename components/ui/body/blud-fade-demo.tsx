import { BlurFade } from "@/components/ui/body/blur-fade"

export function BlurFadeTextDemo() {
  return (
    <section id="header" className="space-y-4">
      <BlurFade delay={0.25} inView>
        <h2 className="-mt-8 sm:-mt-5 text-3xl mb-10 font-bold tracking-tight sm:text-5xl xl:text-6xl">
          hi, i’m simarjeet 👋
        </h2>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <span className="block text-xl tracking-tight text-muted-foreground sm:text-3xl xl:text-4xl">
          nice to meet you
        </span>
      </BlurFade>

      <BlurFade delay={0.75} inView>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I’m a recent MSCS graduate from Washington State University, where I 
          specialized in AI/ML. I’m currently working at a healthcare + AI startup.
        </p>
      </BlurFade>

      <BlurFade delay={1.0} inView>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Dreaming up ideas and building them into real products is where I feel 
          most alive. I love creating tools that help people be more productive 
          and enjoy the process of making things. You can explore my work here.
        </p>
      </BlurFade>

      <BlurFade delay={1.25} inView>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Outside of programming, I’m into music production: experimenting with 
          genres, crafting beats, and playing with sounds.
        </p>
      </BlurFade>

      <BlurFade delay={1.5} inView>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I’m currently based in Seattle, Washington. If you’re nearby, feel free 
          to reach out—I’d love to grab coffee or co-work sometime.
        </p>
      </BlurFade>
    </section>
  )
}

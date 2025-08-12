// app/page.tsx
import { experience, projects, skills } from "@/config/experience";
import { Link } from "@heroui/link";


// --- Page ------------------------------------------------------------
export default function Home() {
  return (
    <section className="flex flex-col gap-6 pb-12 md:pb-16">
      {/* Hero */}
      <div className="py-4 text-center max-w-3xl mx-auto">
        <p className="text-sm text-default-500">Paris, France — Open to EU roles (remote/hybrid)</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight">
          Michael Diego — Senior Frontend / Full Stack Engineer
        </h1>
        <p className="mt-4 text-default-600 leading-relaxed">
          13+ years building scalable, user-focused web applications. Specialized in <strong>React, Next.js, TypeScript</strong> with full-stack expertise in <strong>Node.js, GraphQL</strong> and relational databases. Pragmatic, product-driven, and focused on maintainability, performance, and end-user impact.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            download
            href="/itsmichaeldiego-resumee.pdf"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Download CV
          </Link>
          <Link
            isExternal
            href="https://github.com/itsmichaeldiego"
            className="px-4 py-2 rounded-xl border hover:bg-content2 transition"
          >
            GitHub
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/itsmichaeldiego"
            className="px-4 py-2 rounded-xl border hover:bg-content2 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:itsmichaeldiego@gmail.com"
            className="px-4 py-2 rounded-xl border hover:bg-content2 transition"
          >
            Email me
          </Link>
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="py-4 max-w-5xl mx-auto w-full">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="text-sm px-3 py-1 rounded-full border bg-background">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="py-4 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link href="#experience" className="text-sm underline underline-offset-4">
            Jump to experience
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border p-5 bg-content1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-xs text-default-500">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-default-600">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md border bg-background">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link isExternal href={p.link} className="underline underline-offset-4 text-sm">
                  Visit project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="py-4 max-w-5xl mx-auto w-full">
        <h2 className="text-xl font-semibold mb-4">Selected Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((e) => (
            <div key={`${e.company}-${e.period}`} className="rounded-2xl border p-5 bg-content1">
              <h3 className="font-semibold">{e.role}</h3>
              <div className="text-sm text-default-600">{e.company}</div>
              <div className="text-xs text-default-500">{e.period}</div>
              <ul className="mt-3 space-y-2 text-sm text-default-700 list-disc list-inside">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* About / Details */}
      <div id="about" className="py-4 max-w-5xl mx-auto w-full grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-5 bg-content1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-default-700">
            I build modern, maintainable products with a pragmatic mindset—balancing clean code, performance, and business impact. I’ve led architecture in fast-moving teams, delivered end-to-end features, and mentored developers. Strengths: UI architecture, reusable components/design systems, SSR/SEO, data-fetching patterns, and incremental modernization.
          </p>
        </div>
        <div className="rounded-2xl border p-5 bg-content1">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <ul className="text-sm text-default-700 space-y-2">
            <li>Location: Paris (EU work-eligible)</li>
            <li>Languages: Spanish (native), English (professional), Italian (advanced), French (basic)</li>
            <li>Open to: Senior Frontend / Full Stack</li>
            <li>Education: Universidad ORT Uruguay (2011–2016)</li>
          </ul>
        </div>
      </div>

      {/* Contact CTA */}
      <div id="contact" className="py-4 max-w-5xl mx-auto w-full">
        <div className="rounded-2xl border p-6 md:p-8 bg-content1 text-center">
          <h2 className="text-2xl font-bold">Let’s build something great</h2>
          <p className="mt-3 text-default-600">
            Want a quick intro call or to see more code? I can share deeper case studies, repos,
            and implementation details on request.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              isExternal
              href="https://www.linkedin.com/in/itsmichaeldiego"
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Connect on LinkedIn
            </Link>
            <Link
              href="mailto:itsmichaeldiego@gmail.com"
              className="px-4 py-2 rounded-xl border hover:bg-content2 transition"
            >
              Email me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

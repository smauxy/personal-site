
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, DownloadCloud } from 'lucide-react'
import SectionTitle from './components/SectionTitle'
import Card from './components/Card'
import Badge from './components/Badge'

const Container: React.FC<React.PropsWithChildren<{id?: string}>> = ({ id, children }) => (
  <section id={id} className="mx-auto w-full container px-6 py-20 md:py-28">{children}</section>
)

const BG = () => (
  <div className="bg-orbs">
    <span className="orb-a" />
    <span className="orb-b" />
    <span className="orb-c" />
  </div>
)

function Hero() {
  return (
    <div className="relative mx-auto flex min-h-[78vh] w-full container flex-col items-center justify-center px-6 text-center">
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="mb-6 text-6xl font-extrabold leading-tight text-cyan-400 md:text-7xl">
        Eric Zou
      </motion.h1>
      <p className="mb-6 text-xl text-white/80 md:text-2xl">Junior Software Developer & Mathematics Student</p>
      <p className="mx-auto mb-8 max-w-3xl text-white/70">
        University of Waterloo Mathematics student seeking internship opportunities. Passionate about full‑stack development with experience in React, Node.js, and modern web technologies.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="/EricZResume-2025.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 px-5 py-3 font-semibold text-cyan-300 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/30">
          <DownloadCloud className="h-5 w-5" /> Download Resume
        </a>
        <div className="flex gap-3 text-white/70">
          <a aria-label="Email" href="mailto:ezou@uwaterloo.ca" className="rounded-lg p-2 ring-1 ring-white/10 transition hover:bg-white/10"><Mail className="h-5 w-5"/></a>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <Container id="about">
      <SectionTitle>About Me</SectionTitle>
      <p className="mx-auto mb-10 max-w-3xl text-center text-white/70">
        Mathematics student at University of Waterloo with hands‑on experience in software development. Specialized in full‑stack web development with expertise in modern frameworks and collaborative development tools.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Clean Code", text: "Writing maintainable, scalable, and efficient code that stands the test of time." },
          { title: "Design Focus", text: "Creating beautiful, intuitive interfaces that provide exceptional user experiences." },
          { title: "Performance", text: "Optimizing applications for speed, accessibility, and seamless functionality." },
          { title: "Innovation", text: "Staying ahead of trends and implementing cutting‑edge technologies." },
        ].map((c) => (
          <Card key={c.title}>
            <h3 className="mb-2 text-lg font-semibold text-white">{c.title}</h3>
            <p className="text-sm text-white/70">{c.text}</p>
          </Card>
        ))}
      </div>

      <h3 className="mt-14 mb-4 text-center text-2xl font-bold text-white">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {[
          "Java","JavaScript","React","CSS","Node.js","LUA","TypeScript","C++","Next.js","ASP.NET Core","Postman","MySQL","Git","BitBucket","GitLab","Jira","Photoshop","Media Encoder","After Effects","Premiere Pro","Power BI","Excel","Word","PowerPoint",
        ].map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
    </Container>
  )
}

function EduExperience() {
  return (
    <Container id="experience">
      <SectionTitle>Education & Experience</SectionTitle>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-xl bg-cyan-500/20 px-3 py-2 text-sm font-semibold text-cyan-300">University of Waterloo</div>
          </div>
          <p className="mt-3 text-white/80">Bachelor of Mathematics</p>
          <p className="mt-1 text-sm text-white/60">2022 – 2027</p>
          <p className="mt-3 text-sm text-white/70">Co‑Captain, UW R6 Team. Organized competitive events and developed leadership/teamwork skills (2023‑2024).</p>
        </Card>

        <Card>
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-xl bg-cyan-500/20 px-3 py-2 text-sm font-semibold text-cyan-300">Career Objective</div>
          </div>
          <p className="mt-3 text-white/80">Seeking Internship</p>
          <p className="mt-1 text-sm text-white/60">Available: January 2026</p>
          <p className="mt-3 text-sm text-white/70">Seeking a 4‑month internship position starting January 2026 to apply my software development skills in a professional environment.</p>
        </Card>
      </div>

      <div className="mt-10 space-y-6">
        <Card>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">Junior Software Developer (CO‑OP)</h3>
            <p className="text-sm text-white/60">2024/09 – 2024/12</p>
          </div>
          <a className="mt-1 inline-block text-cyan-300" href="#">Young IT Solutions</a>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
            <li>Created an AI crawler service using Node.js to automatically extract WordPress articles, reducing manual content scraping.</li>
            <li>Developed and deployed an API integrating OpenAI to rewrite and paraphrase articles.</li>
            <li>Automated data storage using an SQL database that eliminates the need for manual inputs; version control via GitLab.</li>
            <li>Provided QA and exceptional customer service (including Disney clients) improving issue resolution efficiency.</li>
            <li>Used Asana and Slack for reporting and team communication.</li>
          </ul>
        </Card>

        <Card>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">Junior Software Developer (CO‑OP)</h3>
            <p className="text-sm text-white/60">2023/05 – 2023/08</p>
          </div>
          <a className="mt-1 inline-block text-cyan-300" href="#">RIFO Holding Group</a>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
            <li>Designed and implemented C#/.NET APIs for real estate data calculations to eliminate manual steps.</li>
            <li>Developed a back‑end API and React front‑end for real‑time data display, improving access for over 100 agents.</li>
            <li>Updated Jira tasks, managed BitBucket version control, and tested using Postman.</li>
          </ul>
        </Card>
      </div>

      <h3 className="mt-12 mb-4 text-center text-2xl font-bold text-white">Certifications & Achievements</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Google Cloud", text: "Machine Learning Crash Course (2025)" },
          { title: "Mathematics Contest", text: "Top 5% – Euclid Mathematics Contest (2022)" },
          { title: "AMC Competition", text: "Top 5% – American Mathematics Competition (2022)" },
        ].map((c) => (
          <Card key={c.title}>
            <p className="text-lg font-semibold text-white">{c.title}</p>
            <p className="mt-1 text-sm text-white/70">{c.text}</p>
          </Card>
        ))}
      </div>
    </Container>
  )
}

function ProjectCard({
  title,
  desc,
  tags,
  image,
}: {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
}) {
  return (
    <Card className="overflow-hidden p-0">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="h-48 w-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,.25),transparent_60%)]" />
      )}

      <div className="space-y-3 p-6">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-white/70">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}


function Projects() {
  return (
    <Container id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <p className="mx-auto mb-8 max-w-3xl text-center text-white/70">
        A showcase of my recent work, demonstrating expertise across different technologies and domains.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
        title="AI Crawler Service" 
        desc="Created an AI crawler service using Node.js to automatically extract WordPress articles, reducing manual content scraping and enhancing workflows." 
        tags={["Node.js","AI","WordPress","Web Scraping"]} 
        />
        <ProjectCard 
        title="OpenAI Integration API" 
        desc="Developed and deployed an API integrating OpenAI to rewrite and paraphrase articles, enhancing content quality and automation." 
        tags={["OpenAI","API","React","Node.js"]} 
        />
        <ProjectCard 
        title="Real Estate Data APIs" 
        desc="Designed and implemented C#/.NET APIs for real estate data calculations, eliminating manual operations and improving data access." 
        tags={["C#",".NET","BitBucket","Postman"]} 
        />
        <ProjectCard 
        title="2D Shooter Game" 
        desc="Built a 2D shooter game in Java demonstrating OOP principles and game development fundamentals." 
        tags={["Java","Game Development","OOP"]} 
        />
        <ProjectCard 
        title="Poker AI System" 
        desc="Led a team of 3 to create an advanced Poker AI in Python with machine learning algorithms for strategic decision making." 
        tags={["Python","AI","Machine Learning","Team Lead"]} 
        />
      </div>
    </Container>
  )
}

function Contact() {
  return (
    <Container id="contact">
      <SectionTitle>Let's Work Together</SectionTitle>
      <p className="mx-auto mb-8 max-w-3xl text-center text-white/70">
        Have a project in mind? I'd love to hear about it. Let's create something amazing together.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="space-y-4">
            <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /><div><p className="text-sm text-white/60">Email</p><a href="mailto:ezou@uwaterloo.ca" className="text-white/80">ezou@uwaterloo.ca</a></div></div>
            <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-300" /><div><p className="text-sm text-white/60">Phone</p><p className="text-white/80">647-287-3430</p></div></div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-cyan-300" /><div><p className="text-sm text-white/60">Location</p><p className="text-white/80">Richmond Hill, ON</p></div></div>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default function App() {
  return (
    <>
      <BG />
      <Hero />
      <About />
      <EduExperience />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Eric Zou</footer>
    </>
  )
}

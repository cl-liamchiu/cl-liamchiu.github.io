export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="text-xl font-semibold mb-4">Background</h2>
        <p className="mb-4">
          {`I'm Liam, a software engineer with a passion for creating meaningful digital experiences. 
          My journey into programming started with curiosity and has evolved into a career where I get 
          to solve challenging problems every day.`}
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">What I Do</h2>
        <p className="mb-4">
          {`I specialize in full-stack development, with a focus on building scalable web applications. 
          My tech stack includes TypeScript, React, Node.js, and various modern frameworks. I'm particularly 
          interested in developer experience, performance optimization, and clean architecture.`}
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">
          Development Philosophy
        </h2>
        <p className="mb-4">
          {`I'm a strong believer in writing code that's not just functional, but maintainable and readable. 
          I'm a Vim enthusiast who appreciates the efficiency of keyboard-driven workflows, and I advocate 
          for static typing because it catches errors early and makes codebases more robust.`}
        </p>
        <p className="mb-4">
          {`I prefer tabs for indentation (giving everyone control over their viewing experience) and dark mode 
          for those long coding sessions. These might seem like small preferences, but they reflect my broader 
          philosophy: optimize for the long term, respect different workflows, and prioritize developer ergonomics.`}
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">Beyond Code</h2>
        <p className="mb-4">
          {`When I'm not at my keyboard, I enjoy staying curious about new technologies, contributing to open source 
          projects, and sharing knowledge with the developer community. I believe in continuous learning and the 
          importance of giving back to the community that has taught me so much.`}
        </p>

        <h2 className="text-xl font-semibold mb-4 mt-8">Let's Connect</h2>
        <p className="mb-4">
          {`I'm always interested in collaborating on interesting projects or discussing technology. 
          Feel free to reach out through any of the links in the footer, or check out my blog where 
          I share technical insights and lessons learned along the way.`}
        </p>
      </div>
    </section>
  );
}

import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Liam 👋
      </h1>
      <p className="mb-4">
        {`I'm a software engineer passionate about building elegant solutions to complex problems. 
        When I'm not coding, you can find me exploring new technologies, contributing to open source, 
        or sharing what I've learned through writing.`}
      </p>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <p className="mb-4">
        {`Currently, I'm focused on full-stack development with TypeScript, React, and Node.js. 
        I believe in writing clean, maintainable code and creating delightful user experiences. 
        I'm always excited to collaborate on interesting projects and learn from the community.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

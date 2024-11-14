// app/about/page.tsx

import Link from "next/link";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "ChakraUI",
  "Node.js",
  "Git",
  "GitHub",
];

const AboutPage = () => {
  return (
    <div className="container mx-auto space-y-16">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        About Me.
      </h1>

      {/* Bio */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Who I Am
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Hi, I&apos;m Giulio Granata, a passionate Front-End Developer
          dedicated to building seamless digital experiences.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          With 10 years of experience in front-end and full-stack development, I
          specialize in creating user-friendly, high-performance web
          applications using technologies like Next.js, React, and more.
        </p>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 rounded bg-gray-100 dark:bg-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          My Values
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          I believe in creating user-centric designs, writing clean and
          efficient code, and continuously learning to improve my skills.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Want to collaborate or learn more?
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 px-6 py-2 text-white font-semibold rounded-lg  bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;

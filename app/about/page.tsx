// app/about/page.tsx

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-12 space-y-16">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        About Me.
      </h1>

      {/* Brief Bio */}
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

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            React
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            Next.js
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            TypeScript
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            Tailwind CSS
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            Node.js
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-800 dark:text-gray-100">
            Git
          </div>
          {/* Aggiungi altre skill o strumenti */}
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

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Want to collaborate or learn more?
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default AboutPage;

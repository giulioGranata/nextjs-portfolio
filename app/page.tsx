const Page: React.FC = () => {
  return (
    <div className="flex flex-col justify-start pt-24">
      <div className="max-w-3xl pl-20">
        <div className="relative text-5xl font-semibold mb-7 uppercase">
          <h1 className="text-green-600 absolute left-1.5 top-1 opacity-50">
            I&apos;m Giulio Granata
          </h1>
          <h1 className="text-green-700">I’m Giulio Granata</h1>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to my interactive portfolio. I&apos;m a developer passionate
          about technology and design, specializing in web development with{" "}
          <strong>React</strong> and <strong>Next.js</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Explore the site to learn more about me, my experiences, and how I can
          help bring unique and performant digital projects to life.
        </p>
        <p className="text-lg leading-relaxed">
          Feel free to reach out for collaborations or any questions!
        </p>
      </div>
    </div>
  );
};

export default Page;

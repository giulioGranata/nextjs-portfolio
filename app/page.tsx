const Page = () => {
  return (
    <div className="flex flex-col justify-start pt-6 lg:pt-24">
      <div className="max-w-3xl px-4 lg:pl-20">
        <h1
          className="text-4xl font-semibold uppercase glitch mb-7"
          data-glitch="I'm Giulio Granata"
        >
          I&apos;m Giulio Granata
        </h1>
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

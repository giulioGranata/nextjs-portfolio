import "@/app/styles/glitch.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-start pt-6 lg:pt-24">
      <div className="max-w-3xl px-4 lg:pl-20">
        <h1
          className="text-4xl font-bold uppercase glitch mb-7"
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
        <p className="text-lg leading-relaxed mb-6">
          Feel free to reach out for collaborations or any questions!
        </p>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;

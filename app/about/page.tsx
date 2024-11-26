import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  "RESTful APIs",
  "GraphQL",
  "Responsive Design",
  "Performance Optimization",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold">About Me.</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bio */}
        <Card>
          <CardHeader>
            <CardTitle>Who I Am</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Ciao! I&apos;m Giulio Granata, a passionate Senior Front-End
              Developer with 10 years of experience in crafting seamless digital
              experiences.
            </p>
            <p>
              I specialize in building user-friendly, high-performance web
              applications using cutting-edge technologies like Next.js, React,
              and more. My goal is to create intuitive interfaces that not only
              look great but also provide exceptional user experiences.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              With a decade of experience in both front-end and full-stack
              development, I&apos;ve had the privilege of working on diverse
              projects across various industries.
            </p>
            <p>
              From startups to enterprise-level applications, I&apos;ve honed my
              skills in creating scalable, maintainable, and efficient code. My
              experience has taught me the importance of staying adaptable and
              continuously learning in this ever-evolving field.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Values & Philosophy */}
      <Card>
        <CardHeader>
          <CardTitle>My Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            I believe in creating user-centric designs, writing clean and
            efficient code, and continuously learning to improve my skills.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              User-Centric Design: Prioritizing intuitive and accessible
              interfaces.
            </li>
            <li>
              Clean Code: Writing maintainable and efficient code for long-term
              success.
            </li>
            <li>
              Continuous Learning: Staying updated with the latest technologies
              and best practices.
            </li>
            <li>
              Collaboration: Working effectively in cross-functional teams to
              achieve common goals.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg mb-4">
          Interested in collaborating or want to learn more about my work?
        </p>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}

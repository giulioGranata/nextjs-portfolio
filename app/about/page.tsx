import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Git",
  "CI/CD",
  "Responsive Design",
  "Performance Optimization",
  "Accessibility",
  "State Management (Redux, Zustand)",
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        About me.
      </h1>
      <Card className="text-lg leading-8">
        <CardHeader>
          <CardTitle className="font-bold">Who am I?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Ciao! I&apos;m Giulio Granata, a passionate Senior Frontend
            Developer with 10 years of experience in crafting seamless digital
            experiences. I specialize in building user-friendly,
            high-performance web applications using cutting-edge technologies.
          </p>
          <p>
            My journey in web development has led me through various challenges
            and exciting projects, from startups to enterprise-level
            applications. I&apos;m dedicated to creating intuitive interfaces
            that not only look great but also provide exceptional user
            experiences.
          </p>
        </CardContent>
      </Card>

      <Card className="text-lg leading-8">
        <CardHeader>
          <CardTitle className="font-bold">Skills & Expertise</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="text-lg leading-8">
        <CardHeader>
          <CardTitle className="font-bold">My Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            As a developer, I&apos;m guided by a set of core values that shape
            my approach to work and collaboration:
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
            <li>
              Problem Solving: Approaching challenges with creativity and
              persistence.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button asChild size="lg" className="text-lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}

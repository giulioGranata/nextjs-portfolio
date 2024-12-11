"use client";

import { Timeline, TimelineEntry } from "@/components/ui/timeline";

const experiences = [
  {
    id: 1,
    role: "Senior Front-End Developer",
    company: "Tailoor",
    location: "Milan, Italy",
    startDate: "Jun 2023",
    endDate: "Present",
    responsibilities: [
      "Design solutions",
      "Frontend evolutive and corrective maintenance",
    ],
  },
  {
    id: 2,
    role: "Front-End Developer",
    company: "Tuotempo",
    location: "Bologna, Italy",
    startDate: "Dec 2021",
    endDate: "Jun 2023",
    responsibilities: [
      "Frontend evolutive and corrective maintenance",
      "Writing technical documentation",
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Gruppo Mutui Online",
    location: "Milan, Italy",
    startDate: "Aug 2019",
    endDate: "Dec 2021",
    responsibilities: [
      "Design solutions",
      "Frontend/Backend evolutive and corrective maintenance",
      "Writing technical and testing documentation",
    ],
  },
  {
    id: 4,
    role: "Microsoft Dynamics CRM - Senior Analyst",
    company: "Avanade",
    location: "Milan, Italy",
    startDate: "Oct 2015",
    endDate: "Aug 2019",
    responsibilities: [
      "Microsoft Dynamics CRM 2015 evolutive and corrective maintenance",
      "Integration with external systems",
    ],
  },
];

const ExperiencePage = () => {
  const timelineData: TimelineEntry[] = experiences.map((exp) => ({
    title: (
      <div className="flex flex-col">
        <span>{exp.startDate}</span>
        <span>{exp.endDate}</span>
      </div>
    ),
    content: (
      <div className="space-y-4 text-md leading-relaxed">
        <h3 className="text-lg font-semibold">{exp.role}</h3>
        <p className="text-muted-foreground">
          {exp.company}, {exp.location}
        </p>
        <h4 className="font-medium ">Responsibilities:</h4>
        <ul className="list-disc ml-6 space-y-2">
          {exp.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        Experience.
      </h1>
      <Timeline data={timelineData} />
    </div>
  );
};

export default ExperiencePage;

const experiences = [
  {
    id: 1,
    role: "Senior Front-End Developer",
    company: "Tailoor",
    location: "Milan, Italy",
    startDate: "June 2023",
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
    startDate: "December 2021",
    endDate: "June 2023",
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
    startDate: "August 2019",
    endDate: "December 2021",
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
    startDate: "October 2015",
    endDate: "August 2019",
    responsibilities: [
      "Microsoft Dynamics CRM 2015 evolutive and corrective maintenance",
      "Integration with external systems",
    ],
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="container mx-auto space-y-16">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        Experience.
      </h1>
      <div className="relative">
        <div
          className="border-r-4 border-black dark:border-white absolute h-full top-0"
          style={{ left: "9px" }}
        ></div>
        <ul className="list-none m-0 p-0">
          {experiences.map(
            ({
              id,
              company,
              endDate,
              location,
              responsibilities,
              role,
              startDate,
            }) => (
              <li key={id} className="mb-5">
                <div className="flex items-center">
                  <div className="bg-gray-100 dark:bg-gray-800 z-10 rounded-full border-4 border-black dark:border-white h-5 w-5"></div>
                  <div className="flex-1 ml-4 z-10 font-medium">
                    <div className="order-1 space-y-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition ease-in-out duration-300 lg:w-7/12 px-6 py-4 group group-hover:bg-gray-700 dark:group-hover:bg-gray-600">
                      <h3 className="mb-4 font-bold text-gray-800 dark:text-gray-100 text-4xl">
                        {company}
                      </h3>
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {role}
                      </p>
                      <p className="text-sm text-gray-800 dark:text-gray-100">
                        {`${location} (${startDate} - ${endDate})`}
                      </p>

                      <div className="max-h-0 mt-4 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                        <hr className="my-6 border-gray-600 dark:border-gray-500" />
                        <ul className="text-sm font-medium leading-snug tracking-widetext-gray-800 dark:text-gray-100 text-opacity-100 list-disc pl-5">
                          {responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExperiencePage;

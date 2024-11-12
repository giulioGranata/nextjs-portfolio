// app/components/SocialLinks.tsx

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <div className="flex justify-center space-x-6 mt-4 text-gray-600 dark:text-gray-300">
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 dark:hover:text-green-400"
        >
          <FaLinkedin size={24} />
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 dark:hover:text-green-400"
        >
          <FaGithub size={24} />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="hover:text-green-500 dark:hover:text-green-400"
        >
          <FaEnvelope size={24} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;

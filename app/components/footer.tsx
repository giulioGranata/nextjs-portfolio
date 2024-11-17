import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
const email = process.env.NEXT_PUBLIC_EMAIL;

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-4 text-base-content">
      {linkedinUrl && (
        <a
          href={linkedinUrl}
          aria-label="LinkedIn"
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
          aria-label="GitHub"
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
          aria-label="Email"
          className="hover:text-green-500 dark:hover:text-green-400"
        >
          <FaEnvelope size={24} />
        </a>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-6 bg-base-100 text-base-content dark:bg-base-800">
      <p className="mb-4">Connect with me on:</p>
      <SocialLinks />
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} Giulio Granata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

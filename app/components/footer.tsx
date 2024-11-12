import SocialLinks from "./social-links";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-6 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <p className="mb-4">Connect with me on:</p>
      <SocialLinks />
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} Giulio Granata. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import SocialLinks from "./social-links";

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

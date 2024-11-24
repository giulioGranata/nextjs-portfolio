import { Separator } from "@/components/ui/separator";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm text-muted-foreground">Connect with me on:</p>
        <SocialLinks />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Giulio Granata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

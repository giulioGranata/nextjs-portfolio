import { Button } from "@/components/ui/button";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
const email = process.env.NEXT_PUBLIC_EMAIL;

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      {linkedinUrl && (
        <Button variant="ghost" size="icon" asChild>
          <a
            href={linkedinUrl}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </Button>
      )}
      {githubUrl && (
        <Button variant="ghost" size="icon" asChild>
          <a
            href={githubUrl}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </Button>
      )}
      {email && (
        <Button variant="ghost" size="icon" asChild>
          <a href={`mailto:${email}`} aria-label="Email">
            <FaEnvelope className="h-5 w-5" />
          </a>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;

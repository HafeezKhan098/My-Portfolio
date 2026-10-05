import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>{profile.name}</strong><span>AI &amp; Web Developer · Pakistan</span></div>
        <div className="footer-right">
          <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={15} /> GitHub</a>
          <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </footer>
  );
}

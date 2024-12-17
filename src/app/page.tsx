import { AboutMe } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Project } from "@/components/project";
import { SkillMe } from "@/components/skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <SkillMe />
      <Project />
      <Contact />
    </div>
  );
}

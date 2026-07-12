import { Sparkle } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="rounded-2xl glass-card p-6 h-full flex flex-col relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
          <Sparkle className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-foreground">
          About Me
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed text-[15px] flex-grow text-justify">
        Hi! 👋 I'm Aldrin, a Mobile and Web Developer with a passion for UI/UX
        design. Currently, I work as a UI/UX Developer, where I design intuitive
        user experiences and translate them into functional, user-friendly
        interfaces through code. I enjoy bridging the gap between design and
        development, ensuring that every product is both visually appealing and
        technically well-crafted. My experience spans UI/UX design, front-end
        web development, and mobile application development.
      </p>
    </div>
  );
};

export default AboutMe;

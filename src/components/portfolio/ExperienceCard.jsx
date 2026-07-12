import { useState } from "react";
import { BriefcaseBusiness, ExternalLink, X, FolderOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = () => {
  const [hoveredExp, setHoveredExp] = useState(0);
  const [selectedExp, setSelectedExp] = useState(null);

  const experienceList = [
    {
      id: 1,
      role: "UI/UX Developer",
      company: "Vintazk Outsourcing under Nexzys Intelligence",
      type: "Full-time",
      year: "July 2026 - Present",
      fullDesc:
        "Working as a UI/UX Developer responsible for both interface design and frontend development, translating design ideas into functional and polished user experiences while collaborating closely with the team.",
      tags: ["UI/UX", "Frontend", "Development"],
      projects: [
        {
          name: "Product Interface and Frontend Work",
          desc: "Designing and coding user interfaces, refining the experience, and implementing frontend features for active projects.",
        },
      ],
    },
    {
      id: 2,
      role: "Intern Developer & UI/UX Designer",
      company: "Vintazk Outsourcing under Nexzys Intelligence",
      type: "OJT / Internship",
      year: "February 2026 - May 2026",
      fullDesc:
        "Serving as both a developer and UI/UX designer for the assigned project, contributing to interface design, frontend implementation, and collaborative development tasks with the team.",
      tags: ["Frontend", "UI/UX", "Development"],
      projects: [
        {
          name: "Assigned Team Project",
          desc: "Handled both development and UI/UX responsibilities, including designing interfaces and contributing to the frontend implementation of the project.",
        },
      ],
    },
    {
      id: 3,
      role: "Freelance Web Developer & Social Media Manager",
      company: "RPS Real Estate",
      type: "Freelance / Part-time",
      year: "January 2026",
      fullDesc:
        "Worked as a freelance developer and social media manager for RPS Real Estate, a real estate company based in Zamboanga City. Designed and developed their public-facing landing page and an admin panel that allows the client to manage and control property listings on their website. Also handled their Facebook page by creating and managing posts, maintaining their online presence, and serving as their Social Media Manager.",
      tags: ["Web Development", "Admin Panel", "Social Media", "Freelance"],
      projects: [
        {
          name: "RPS Real Estate Landing Page",
          desc: "Designed and developed the public-facing landing page showcasing the company's property listings and contact information.",
        },
        {
          name: "RPS Admin Panel",
          desc: "Built a custom admin page allowing the client to add, edit, and remove real estate listings displayed on their website.",
        },
        {
          name: "Facebook Social Media Management",
          desc: "Managed and created Facebook posts for RPS Real Estate, growing their online presence and engaging with potential clients.",
        },
      ],
    },
  ];

  return (
    <>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl glass-card p-6 flex flex-col"
        style={{ height: "540px" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
            <BriefcaseBusiness className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-heading font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar pr-1">
          <div
            className="relative space-y-0 ml-3 border-l-2 border-border/50"
            onMouseLeave={() => setHoveredExp(null)}
          >
            {experienceList.map((exp, index) => (
              <motion.div
                key={exp.id}
                onMouseEnter={() => setHoveredExp(index)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative pl-4 py-2 cursor-default"
              >
                <div className="absolute -left-[5px] top-3.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/20 ring-4 ring-card z-10">
                  {hoveredExp === index && (
                    <motion.div
                      layoutId="exp-dot"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </div>

                <button
                  onClick={() => setSelectedExp(exp)}
                  className={`group w-full text-left rounded-xl p-3 transition-all duration-300 border ${
                    hoveredExp === index
                      ? "bg-secondary/10 border-border"
                      : "bg-transparent border-transparent opacity-80"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-sm text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span
                          className={`text-[10px] inline-block px-2 py-0.5 rounded-full font-medium border transition-colors duration-300 ${
                            hoveredExp === index
                              ? "bg-primary/10 text-primary border-primary/20"
                              : "bg-muted/50 text-muted-foreground border-border"
                          }`}
                        >
                          {exp.year}
                        </span>
                        <span className="text-[10px] inline-block px-2 py-0.5 rounded-full font-medium border bg-muted/50 text-muted-foreground border-border">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-30 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1 ml-2" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl p-6 cursor-default overflow-y-auto max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
                  <BriefcaseBusiness className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    {selectedExp.role}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedExp.company}
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium border bg-primary/10 text-primary border-primary/20">
                  {selectedExp.year}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium border bg-muted/50 text-muted-foreground border-border">
                  {selectedExp.type}
                </span>
              </div>

              {/* Full Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {selectedExp.fullDesc}
              </p>

              {/* Projects */}
              {selectedExp.projects && selectedExp.projects.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FolderOpen className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-bold text-foreground">
                      Projects / Contributions
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {selectedExp.projects.map((proj, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-secondary/20 border border-border/50"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {proj.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {proj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {selectedExp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 rounded-full bg-secondary/30 text-muted-foreground border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;

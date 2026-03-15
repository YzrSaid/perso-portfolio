import { useState, useRef } from "react";
import {
  Folder,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Github,
  Globe,
  ExternalLink,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// WMSU Palaro images
import WMSUPalaro_1 from "../../assets/wmsu_palaro/1.webp";
import WMSUPalaro_2 from "../../assets/wmsu_palaro/2.webp";
import WMSUPalaro_3 from "../../assets/wmsu_palaro/3.webp";
import WMSUPalaro_4 from "../../assets/wmsu_palaro/4.webp";
import WMSUPalaro_5 from "../../assets/wmsu_palaro/4.webp";

// M.A. Yazar images
import MAYazar_logo from "../../assets/ma_yazar/ma_yazar_logo.webp";
import MAYazar_1 from "../../assets/ma_yazar/ma_yazar_1.webp";
import MAYazar_2 from "../../assets/ma_yazar/ma_yazar_2.webp";
import MAYazar_3 from "../../assets/ma_yazar/ma_yazar_3.webp";
import MAYazar_4 from "../../assets/ma_yazar/ma_yazar_4.webp";
import MAYazar_5 from "../../assets/ma_yazar/ma_yazar_5.webp";
import MAYazar_6 from "../../assets/ma_yazar/ma_yazar_6.webp";
import MAYazar_7 from "../../assets/ma_yazar/ma_yazar_7.webp";

// byteSpace images
import ByteSpace_1 from "../../assets/byteSpace/byteSpace_1.webp";
import ByteSpace_2 from "../../assets/byteSpace/byteSpace_2.webp";

// Perso images
import Perso_1 from "../../assets/perso/perso_layout_1.webp";
import Perso_2 from "../../assets/perso/perso_layout_2.webp";
import Perso_3 from "../../assets/perso/perso_layout_3.webp";

// Crimson Map v2 images
import CrimsonMap_v2_1 from "../../assets/crimson_v2/crimson_v2_business_card.webp";
import CrimsonMap_v2_2 from "../../assets/crimson_v2/crimson_v2_letterhead.webp";
import CrimsonMap_v2_3 from "../../assets/crimson_v2/crimson_v2_merch.webp";

// Crimson Map images
import CrimsonMapLogo_1 from "../../assets/crimson_map/crimson_map_logo.webp";
import CrimsonMapLogo_2 from "../../assets/crimson_map/crimson_map_long.webp";
import CrimsonMapOS_1 from "../../assets/crimson_map/crimson_os_1.webp";
import CrimsonMapOS_2 from "../../assets/crimson_map/crimson_os_2.webp";
import CrimsonMapOS_3 from "../../assets/crimson_map/crimson_os_3.webp";
import CrimsonMapSS_1 from "../../assets/crimson_map/crimson_ss_1.webp";
import CrimsonMapSS_2 from "../../assets/crimson_map/crimson_ss_2.webp";
import CrimsonMapSS_3 from "../../assets/crimson_map/crimson_ss_3.webp";
import CrimsonMapSS_4 from "../../assets/crimson_map/crimson_ss_4.webp";
import CrimsonMapLanding from "../../assets/crimson_map/crimson_landing.webp";
import CrimsonMapWholePage from "../../assets/crimson_map/crimson_web_whole_page.webp";
import CrimsonMapAdmin_1 from "../../assets/crimson_map/crimson_admin_1.webp";
import CrimsonMapAdmin_2 from "../../assets/crimson_map/crimson_admin_2.webp";

// Libris images
import LibrisLogo1 from "../../assets/libris/libris_logo.webp";
import LibrisLogo2 from "../../assets/libris/libris_long.webp";

// Studya images
import StudyaLogo from "../../assets/studya/studya_io_logo.webp";
import StudyaSS_1 from "../../assets/studya/studya_ss_1.webp";
import StudyaSS_2 from "../../assets/studya/studya_ss_2.webp";
import StudyaSS_3 from "../../assets/studya/studya_ss_3.webp";
import StudyaSS_4 from "../../assets/studya/studya_ss_4.webp";
import StudyaWholePage from "../../assets/studya/studya_whole_page.webp";
import StudyaLanding from "../../assets/studya/studya_landing_1.webp";

const devProjects = [
  {
    title: "Crimson Map",
    desc: "An Augmented Reality (AR) campus navigation system for WMSU, developed as our Capstone Project.",
    tags: ["Unity", "Augmented Reality", "Mapbox", "Mobile App"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    fullDesc:
      "Crimson Map is an Augmented Reality (AR) campus navigation system developed as our Capstone Project for Western Mindanao State University (WMSU). It combines GPS-based outdoor navigation with QR code-based indoor positioning, helping students and visitors navigate the campus with ease. I was responsible for the core Unity development, AR Foundation integration, Mapbox 3D mapping, Firebase data storage, and the overall mobile app architecture.",
    role: "Lead Developer & UI/UX Designer",
    techStack: [
      "Unity",
      "C#",
      "AR Foundation",
      "Mapbox",
      "Firebase",
      "Mobile App",
    ],
    github: "https://github.com/YzrSaid/2025_CP-Crimson-Map",
    website: "https://wmsucrimsonmapadmin.vercel.app/",
  },
  {
    title: "studya.io",
    desc: "Study Aid App with Pomodoro Technique & Flashcards",
    tags: ["Mobile App", "Flutter"],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    fullDesc:
      "studya.io is a mobile study aid application built with Flutter, designed to help students improve their productivity and study habits. It features a Pomodoro timer for focused study sessions and a flashcard system for active recall practice. I handled the full development of the app from UI design to implementation.",
    role: "Solo Developer & Designer",
    techStack: ["Flutter", "Dart", "Mobile App"],
    github: "https://github.com/YzrSaid/studya.io",
    website: "https://yzrsaid.github.io/studya.io.com/",
  },
  {
    title: "Al-Furqan Islamic Institute Enrollment & Management System",
    desc: "Madrasa Enrollment and Academic Management System",
    tags: ["Web App", "Vanilla HTML, JS, CSS"],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    fullDesc:
      "A web-based enrollment and academic management system developed for Al-Furqan Islamic Institute, a madrasa school. The system handles student enrollment, academic records, and administrative management. Built using vanilla HTML, JavaScript, and CSS without any frameworks, focusing on simplicity and performance for the client's needs.",
    role: "Solo Developer",
    techStack: ["HTML", "JavaScript", "CSS", "Web App"],
    github:
      "https://github.com/YzrSaid/Al-Furqan-Islamic-Institute-Enrollment-and-Academic-Management-System",
    website: null,
  },
  {
    title: "RPS Real Estate Website",
    desc: "Public-facing landing page for RPS Real Estate showcasing property listings.",
    tags: ["Web App", "Freelance", "Real Estate"],
    color: "text-green-500",
    bg: "bg-green-500/10",
    fullDesc:
      "Designed and developed the public-facing landing page for RPS Real Estate, a real estate company based in Zamboanga City. The website showcases their property listings, company information, and contact details. The design focuses on clean, professional aesthetics to attract potential buyers and renters in the local market.",
    role: "Freelance Web Developer & Designer",
    techStack: ["HTML", "JavaScript", "CSS", "Web Design"],
    github: null,
    website: "https://rps-res.vercel.app/",
  },
  {
    title: "RPS Real Estate Admin Panel",
    desc: "Custom admin panel for managing and controlling real estate listings.",
    tags: ["Web App", "Freelance", "Admin Panel"],
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    fullDesc:
      "Built a custom admin panel for RPS Real Estate that allows the client to independently manage their property listings without needing technical knowledge. The admin panel supports adding, editing, and removing listings that are reflected live on the public website. This gave the client full control over their content without relying on a developer for updates.",
    role: "Freelance Web Developer",
    techStack: ["HTML", "JavaScript", "CSS", "Admin Panel"],
    github: null,
    website: "https://rps-res-admin.vercel.app/",
  },
];

const designProjects = [
  {
    title: "Crimson Map Official",
    desc: "Logo, Web, and Mobile App Design of Crimson Map, an Augmented Reality (AR) Campus Navigation System for Western Mindanao State University.",
    tags: ["Logo", "Web", "Mobile"],
    images: [
      CrimsonMapLogo_1,
      CrimsonMapLogo_2,
      CrimsonMapOS_1,
      CrimsonMapOS_2,
      CrimsonMapOS_3,
      CrimsonMapSS_1,
      CrimsonMapSS_2,
      CrimsonMapSS_3,
      CrimsonMapSS_3,
      CrimsonMapSS_4,
      CrimsonMapLanding,
      CrimsonMapWholePage,
      CrimsonMapAdmin_1,
      CrimsonMapAdmin_2,
    ],
  },
  {
    title: "Libris",
    desc: "Logo Design for a Bookstore/Library Company.",
    tags: ["Logo"],
    images: [LibrisLogo1, LibrisLogo2],
  },
  {
    title: "byteSpace",
    desc: "Logo and branding design for ByteSpace, a cybersecurity tools website showcasing secure coding practices like cookie handling, salted password hashing, and session management.",
    tags: ["Logo"],
    images: [ByteSpace_1, ByteSpace_2],
  },
  {
    title: "studya.io",
    desc: "Logo, Mobile, and Web App Design of studya.io, a Study Aid App with Pomodoro Technique & Flashcards.",
    tags: ["Logo", "Web", "Mobile"],
    images: [
      StudyaLogo,
      StudyaSS_1,
      StudyaSS_2,
      StudyaSS_3,
      StudyaSS_4,
      StudyaLanding,
      StudyaWholePage,
    ],
  },
  {
    title: "Personal Layouts",
    desc: "These are my personal layouts during our Elective 4 Course Subject.",
    tags: ["Layout", "Photoshop"],
    images: [Perso_1, Perso_2, Perso_3],
  },
  {
    title: "Crimson Map v2",
    desc: "These are my personal layouts for our proposed company, Crimson Map, during our Elective 4 Course Subject.",
    tags: ["Branding/Layout", "Photoshop", "Merch"],
    images: [CrimsonMap_v2_1, CrimsonMap_v2_2, CrimsonMap_v2_3],
  },
  {
    title: "WMSU Palaro 2025",
    desc: "These are personal pictures I took during WMSU Palaro 2025 highlighting 8 different Photography Techniques: Rule of Thirds, Breathing Space, Golden Triangle, Rule of Odds, Simplification, Framing, Perspective/Viewpoint, and Action.",
    tags: ["Photography"],
    images: [
      WMSUPalaro_1,
      WMSUPalaro_2,
      WMSUPalaro_3,
      WMSUPalaro_4,
      WMSUPalaro_5,
    ],
  },
  {
    title: "M.A. Yazar",
    desc: "These are book covers I personally designed for my original stories published on Wattpad under my pen name, M.A. Yazar, including my account/writer logo.",
    tags: ["Layout", "Book Covers", "Wattpad"],
    images: [
      MAYazar_logo,
      MAYazar_1,
      MAYazar_2,
      MAYazar_3,
      MAYazar_4,
      MAYazar_5,
      MAYazar_6,
      MAYazar_7,
    ],
  },
];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const nextLightbox = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);
  const prevLightbox = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="relative mt-3">
        <div className="rounded-lg overflow-hidden bg-secondary/20">
          <div className="flex gap-2 p-2">
            {images.slice(currentIndex, currentIndex + 4).map((img, i) => {
              const actualIndex = (currentIndex + i) % images.length;
              return (
                <div
                  key={i}
                  className="flex-1 aspect-square w-full max-w-[120px] cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(actualIndex)}
                >
                  <img
                    src={img}
                    alt={`Preview ${actualIndex + 1}`}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {images.length > 4 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 bg-black hover:bg-black/80 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 bg-black hover:bg-black/80 p-3 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 bg-black hover:bg-black/80 p-3 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="flex items-center justify-center w-full h-full max-w-[90vw] max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={`Full view ${lightboxIndex + 1}`}
              className="max-w-[85vw] max-h-[75vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

const ProjectsCard = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [selectedProject, setSelectedProject] = useState(null);
  const contentRef = useRef(null);

  return (
    <>
      <div
        className="rounded-2xl bg-card shadow-lg p-6 border border-border flex flex-col"
        style={{ height: "450px" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Folder className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">Recent Projects</h2>
        </div>

        <div className="flex gap-1 mb-6 border-b border-border/50">
          <button
            onClick={() => setActiveTab("development")}
            className={`relative px-4 py-3 text-sm font-medium transition-all group ${activeTab === "development" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Development
            {activeTab === "development" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
            )}
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 rounded-t-full transition-transform duration-300 ${activeTab === "development" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            ></span>
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`relative px-4 py-3 text-sm font-medium transition-all group ${activeTab === "design" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            Design
            {activeTab === "design" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"></span>
            )}
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 rounded-t-full transition-transform duration-300 ${activeTab === "design" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
            ></span>
          </button>
        </div>

        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0"
        >
          <div className="space-y-4 pb-2">
            {activeTab === "development"
              ? devProjects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className="group w-full text-left block p-4 rounded-xl bg-secondary/5 border border-transparent hover:border-border hover:bg-secondary/10 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 p-2 rounded-md ${project.bg} ${project.color}`}
                        >
                          <Folder size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {project.desc}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 flex-none text-muted-foreground opacity-30 group-hover:opacity-100 transition-all mt-1 ml-2" />
                    </div>
                  </button>
                ))
              : designProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-secondary/5 border border-border hover:bg-secondary/10 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="font-semibold text-foreground text-l">
                        {project.title}
                      </h3>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.desc}
                    </p>
                    <ImageCarousel images={project.images} />
                  </div>
                ))}
          </div>
        </div>

        <div className="mt-2 text-xs text-center text-muted-foreground">
          Scroll to see more
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl p-6 cursor-default overflow-y-auto max-h-[85vh]"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-md ${selectedProject.bg} ${selectedProject.color}`}
                >
                  <Folder className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedProject.role}
                  </p>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {selectedProject.fullDesc}
              </p>

              {/* Tech Stack */}
              <div className="mb-5">
                <h4 className="text-sm font-bold text-foreground mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 rounded-full bg-secondary/30 text-muted-foreground border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.github || selectedProject.website) && (
                <div className="flex gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/20 hover:bg-secondary/40 border border-border text-sm font-medium text-foreground transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.website && (
                    <a
                      href={selectedProject.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 text-sm font-medium text-primary transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Live Site
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsCard;

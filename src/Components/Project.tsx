import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight03Icon, CloseIcon, GithubIconFill } from "./icons";
import { Variants } from "framer-motion";

// Define the project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technology: string[];
  github?: string;
  url?: string;
}

// Updated project data with your new additions
const projects: Project[] = [
  {
    id: "0",
    title: "VerifyMe – MERN Document Verification",
    description:
      "A secure full-stack application for document verification. Features encrypted uploads, real-time status tracking, and an admin dashboard. Built to solve trust issues in digital document exchange using the MERN stack.",
    image: "/verifyme.png",
    technology: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
    github: "https://github.com/premkumarthouda/VerifyMe", 
  },
  {
    id: "1",
    title: "Real-Time Sign Language Recognition",
    description:
      "A Computer Vision system that translates hand gestures into text instantly. Utilizing Deep Learning to recognize complex ASL patterns, bridging the gap for the speech and hearing impaired.",
    image: "/sign.jpg", 
    technology: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "Keras"],
    github: "https://github.com/PremKumar/Sign-Language-Translator",
  },
  {
    id: "2",
    title: "Gemini Clone – AI Chatbot",
    description:
      "Developed a responsive AI Chatbot replicating the Gemini interface. Integrates Google's Generative AI API to handle complex queries with a seamless conversational UI.",
    image: "/project1.png",
    technology: ["React.js", "Google Gemini API", "Tailwind CSS", "Vite"],
    github: "https://github.com/PremKumar/Gemini-Clone",
  },
  {
    id: "3",
    title: "Wikipedia Search Application",
    description:
      "A curated search engine using the Wikipedia API. Implemented custom debouncing for search optimization and a responsive design using Bootstrap and Flexbox.",
    image: "/project2.jpg",
    technology: ["JavaScript", "REST API", "Bootstrap", "HTML/CSS"],
    github: "https://github.com/PremKumar/Wikipedia-Search-App",
  },
];

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.9,
    y: 20
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

export default function Project() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative isolate overflow-hidden py-20">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-[-1] h-full w-full object-cover opacity-10"
      >
        <source src="public\Animated_Video_for_Portfolio_Background.mp4" type="video/mp4" />
      </video>

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="heading relative mb-20 text-center text-4xl font-bold lg:text-5xl">
          My Projects
        </h2>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.button
              variants={cardVariants}
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-primary/50"
            >
              <motion.img
                src={project.image}
                loading="lazy"
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-left">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-primary">View Details →</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="relative h-max w-full max-w-2xl overflow-hidden rounded-3xl bg-card border border-border shadow-2xl"
                layoutId={selectedId}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={projects[parseInt(selectedId)].image}
                  className="h-auto w-full"
                />
                
                <motion.div className="p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {projects[parseInt(selectedId)].technology.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {projects[parseInt(selectedId)].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[parseInt(selectedId)].description}
                  </p>

                  <div className="mt-8 flex gap-4">
                    {projects[parseInt(selectedId)].github && (
                      <a
                        href={projects[parseInt(selectedId)].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
                      >
                        <GithubIconFill className="size-5" />
                        Code
                      </a>
                    )}
                    {projects[parseInt(selectedId)].url && (
                      <a
                        href={projects[parseInt(selectedId)].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
                      >
                        <ArrowUpRight03Icon className="size-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Close Button Inside the Modal */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-transform hover:scale-110"
                >
                  <CloseIcon className="size-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
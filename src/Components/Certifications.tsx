import { motion } from "framer-motion";
import { ArrowUpRight03Icon } from "./icons";

interface Certificate {
    title: string;
    issuer: string;
    issued: string;
    skills?: string[];
    credentialId?: string;
    logo?: string; // Optional logo path if you have them
    link?: string;
}

const certifications: Certificate[] = [
    {
        title: "Career Essentials in Software Development",
        issuer: "Microsoft and LinkedIn",
        issued: "May 2025",
        skills: ["Programming", "Software Development"],
        link:"https://www.linkedin.com/learning/certificates/f0f1f23c5d0d80194416cd810923f0288cc4c4adb6f230b3b3bde135cc46fa42",
    },
    {
        title: "Introduction to Career Skills in Software Development",
        issuer: "LinkedIn",
        issued: "Apr 2025",
        skills: ["Software Development", "Career Management"],
        link:"https://www.linkedin.com/learning/certificates/0926c8a50daf0f26def611a9585e2f8af0020f6ebf55184f92e7674b098e7305",
    },
    {
        title: "Programming Foundations: Fundamentals",
        issuer: "LinkedIn",
        issued: "May 2025",
        skills: ["Programming"],
        link:"https://www.linkedin.com/learning/certificates/d457f05901ac46038854b698d9c5e03c273e5769b4859aecc83644db2a085f99",
    },
    {
        title: "Get Started with Cloud Storage Skill Badge",
        issuer: "Google",
        issued: "Apr 2025",
        skills: ["Data Management"],
        link:"https://www.credly.com/badges/44a7a8c0-d30c-447b-abc7-a04601a48745/linked_in_profile",
    },
    {
        title: "Use AI for Everyday Tasks",
        issuer: "edX",
        issued: "Apr 2025",
        credentialId: "a0156db1e88b4c8096377b349bc9e220",
        skills: ["AI used for Everyday Tasks"],
        link:"https://courses.edx.org/certificates/a0156db1e88b4c8096377b349bc9e220",
    },
    {
        title: "Python Practice: Operations",
        issuer: "LinkedIn",
        issued: "Mar 2025",
        skills: ["Python (Programming Language)"],
        link:"https://www.linkedin.com/learning/certificates/a1f44774758332fc65db51be895ff3466828cead259cd331e911795d4642c499?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPDAsk7cWSamMV4gLut%2BUFQ%3D%3D",
    },
    {
        title: "Software Development Fundamentals",
        issuer: "Bright Network Technology Academy",
        issued: "Aug 2024",
        credentialId: "3vnfjlgnm74oap",
        link:"https://www.brightnetwork.co.uk/certificates/couch-to-coder-2024_3vnfjlgnm74oap/",
    },
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.8,
        },
    },
};

export default function Certifications() {
    return (
        <section id="certifications" className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="heading relative mb-16 text-center text-4xl font-bold lg:text-5xl">
                Certifications
            </h2>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-white/10"
                    >
                        <div>
                            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400">
                                {cert.title}
                            </h3>
                            <p className="mb-4 text-sm font-medium text-slate-400">
                                {cert.issuer} • {cert.issued}
                            </p>

                            {cert.skills && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                            
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline"
                                >
                                    Show credential <ArrowUpRight03Icon className="size-4" />
                                </a>
                            )}
                        </div>

                        {cert.credentialId && (
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-xs text-slate-500 break-all">
                                    ID: {cert.credentialId}
                                </p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

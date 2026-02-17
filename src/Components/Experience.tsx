export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="relative mx-auto max-w-7xl px-4 py-24"
      >
        <h2 className="mb-20 text-4xl font-bold lg:text-5xl">Experience</h2>

        <div className="relative px-2 md:px-12">
          <div className="border-l-4 border-blue-600 py-10">
            
            {/* TAP Academy - Software Intern */}
            <div className="node relative pl-8 md:pl-12">
              <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Software Intern at{" "}
                <span className="text-blue-500">TAP Academy</span>
              </h2>
              <p className="mt-2 text-xl font-medium text-slate-300 md:text-2xl">
                January 2026 - Present
              </p>
            </div>
            <div className="max-w-4xl pl-8 pt-4 pb-12 text-lg leading-relaxed text-slate-400 md:pl-12">
               Developing scalable web applications as a Java Full Stack Developer by leveraging modern frameworks and industry-standard practices. Contributing to high-impact, hands-on software projects within a professional cooperative learning environment in Bengaluru.
            </div>

            {/* Skill Dzire - Data Scientist Internship */}
            <div className="node relative pl-8 md:pl-12 mt-10">
              <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Data Scientist Intern at{" "}
                <span className="text-blue-500">Skill Dzire</span>
              </h2>
              <p className="mt-2 text-xl font-medium text-slate-300 md:text-2xl">
                May 2025 - June 2025
              </p>
            </div>
            <div className="max-w-4xl pl-8 pt-4 pb-12 text-lg leading-relaxed text-slate-400 md:pl-12">
            Python-based data manipulation and analysis using NumPy and Pandas to perform extensive data wrangling and exploration.Engineered solutions for complex data challenges through hands-on problem-solving and the implementation of advanced algorithmic logic.
            </div>

            {/* NxtWave - Full Stack Specialization */}
            <div className="node relative pl-8 md:pl-12 mt-10">
              <div className="absolute -left-[10px] top-2 h-4 w-4 rounded-full bg-blue-600"></div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Full Stack Trainee at{" "}
                <span className="text-blue-500">NxtWave (CCBP 4.0)</span>
              </h2>
              <p className="mt-2 text-xl font-medium text-slate-300 md:text-2xl">
                August 2022 - Present
              </p>
            </div>
            <div className="max-w-4xl pl-8 pt-4 text-lg leading-relaxed text-slate-400 md:pl-12">
              Engaged in intensive training for Full Stack(MERN) development and programming problem-solving. 
              Specializing in 4.0 technologies and building foundation-to-advanced projects.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
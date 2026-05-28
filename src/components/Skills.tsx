// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { skills } from "@/data/portfolio";

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="skills" ref={sectionRef} className="py-10">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
//             Technical <span className="text-gradient-gold">Skills</span>
//           </h2>

//           <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {Object.entries(skills).map(([category, items], categoryIndex) => (
//               <motion.div
//                 key={category}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
//                 className="relative glass rounded-xl p-6 transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] overflow-hidden"
//               >
//                 {/* Subtle glowing border/backlight */}
//                 <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none bg-gradient-to-r from-yellow-400/20 via-amber-500/10 to-yellow-400/20 blur-xl"></div>

//                 <h3 className="text-xl font-heading font-bold text-accent mb-4 relative z-10">
//                   {category}
//                 </h3>

//                 {/* Fix: make skills wrap properly inside card */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 relative z-10 overflow-hidden">
//                   {items.map((skill, index) => (
//                     <motion.div
//                       key={skill}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//                       transition={{
//                         delay: categoryIndex * 0.1 + index * 0.05,
//                         duration: 0.3,
//                       }}
//                       className="px-4 py-2 bg-secondary rounded-lg text-center text-sm font-medium transition-all duration-500 ease-in-out hover:bg-accent hover:text-accent-foreground hover:scale-[1.05] break-words"
//                     >
//                       {skill}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import { FaCode, FaServer, FaPaintBrush, FaCloud, FaMobileAlt, FaChartBar } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  "Programming & Query Languages": <FaCode className="text-green-400 text-4xl mb-4" />,
  "Cloud & Data Platforms": <FaCloud className="text-blue-400 text-4xl mb-4" />,
  "Big Data & Streaming": <FaServer className="text-purple-400 text-4xl mb-4" />,
  "ETL, ELT & Orchestration": <FaServer className="text-yellow-400 text-4xl mb-4" />,
  "Data Warehousing & Modeling": <FaChartBar className="text-indigo-400 text-4xl mb-4" />,
  "Databases & Data Quality": <FaServer className="text-red-400 text-4xl mb-4" />,
  "DataOps, DevOps & Governance": <FaCloud className="text-green-400 text-4xl mb-4" />,
  "BI & Analytics": <FaChartBar className="text-blue-400 text-4xl mb-4" />,
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-4">
            My <span className="text-gradient-gold">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tools and technologies I've mastered through hands-on projects and internships
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl glass hover-glow shadow-lg transition-transform duration-500 hover:scale-[1.03]"
            >
              {/* Icon */}
              <div className="mb-4">{iconMap[category] || <FaCode className="text-accent text-4xl mb-4" />}</div>

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-4">{category}</h3>

              {/* Optional description */}
              <p className="text-gray-400 mb-6">
                Core expertise and tools I use for {category.toLowerCase()} tasks.
              </p>

              {/* Skills List */}
              <div className="space-y-3">
                {items.map((skill: string, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between items-center">
                      <span>{skill}</span>
                      <span className="text-green-400">
                        {80 + Math.floor(Math.random() * 15)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-700"
                        style={{
                          width: `${80 + Math.floor(Math.random() * 15)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


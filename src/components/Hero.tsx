// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";
// import { personalInfo } from "@/data/portfolio";
// import heroBg from "@/assets/hero-bg.jpg";
// import profileImg from "@/assets/profile.jpg";
// import { Download, ArrowRight, Star, Award, Zap } from "lucide-react";

// const Hero = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const fullText = personalInfo.name;

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 80);

//     return () => clearInterval(interval);
//   }, []);

//   const scrollToProjects = () => {
//     const element = document.querySelector("#projects");
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Floating badges data
//   const floatingBadges = [
//     // {
//     //   icon: <Award className="h-4 w-4" />,
//     //   text: "4+ Years Exp",
//     //   position: "top-4 -right-6",
//     //   delay: 0.2,
//     //   color: "from-green-500 to-emerald-600"
//     // },
//     {
//       icon: <Zap className="h-4 w-4" />,
//       text: "AI/ML",
//       position: "top-1/3 -left-6",
//       delay: 0.4,
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       icon: <Award className="h-4 w-4" />,
//       text: "4+ Years Exp",
//       position: "bottom-20 -right-8",
//       delay: 0.6,
//       color: "from-amber-500 to-orange-600"
//     }
//   ];

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden py-20"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
//           {/* Profile Image for Small Screens */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="flex justify-center mb-8 md:hidden relative"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
//               <img
//                 src={profileImg}
//                 alt={personalInfo.name}
//                 className="relative w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-accent/50 shadow-2xl hover-lift"
//               />
              
//               {/* Floating Badges for Mobile */}
//               {floatingBadges.map((badge, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{
//                     delay: 1 + badge.delay,
//                     duration: 0.6,
//                     type: "spring",
//                     stiffness: 200
//                   }}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   className={`absolute ${badge.position} bg-gradient-to-r ${badge.color} text-white px-3 py-2 rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center gap-2 z-20 whitespace-nowrap text-xs font-semibold`}
//                 >
//                   {badge.icon}
//                   {badge.text}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6"
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               <span className="text-accent text-2xl md:text-4xl block mb-2">Hi, I'm</span>
//               <span className="text-gradient-luxury">
//                 {displayedText}
//                 <motion.span
//                   animate={{ opacity: [1, 0] }}
//                   transition={{ duration: 0.8, repeat: Infinity }}
//                   className="inline-block w-1 h-12 bg-accent ml-2"
//                 />
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-xl md:text-2xl mb-8 font-medium"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               {personalInfo.title}
//             </motion.p>

//             {/* Tech Stack Tags */}
//             <motion.div
//               className="flex flex-wrap gap-3 mb-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.8 }}
//             >
//               {["Python", "TensorFlow", "PyTorch", "AWS", "Spark", "SQL"].map(
//                 (tech, index) => (
//                   <motion.span
//                     key={tech}
//                     className="px-4 py-2 glass rounded-full text-sm font-medium border border-accent/20"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1.2 + index * 0.1 }}
//                   >
//                     {tech}
//                   </motion.span>
//                 )
//               )}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               className="flex flex-wrap gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.5, duration: 0.8 }}
//             >
//               <Button
//                 size="lg"
//                 onClick={scrollToProjects}
//                 className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 hover-glow group"
//               >
//                 View Projects
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 asChild
//                 className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 hover-lift"
//               >
//                 <a href={personalInfo.resume} download>
//                   <Download className="mr-2 h-5 w-5" />
//                   Download Resume
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Profile Image for Medium+ Screens */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="hidden md:flex justify-center relative"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
//               <img
//                 src={profileImg}
//                 alt={personalInfo.name}
//                 className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-accent/50 shadow-2xl hover-lift"
//               />
              
//               {/* Floating Badges for Desktop */}
//               {floatingBadges.map((badge, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0, y: 20 }}
//                   animate={{ 
//                     opacity: 1, 
//                     scale: 1, 
//                     y: [0, -10, 0],
//                   }}
//                   transition={{
//                     delay: 1 + badge.delay,
//                     duration: 0.8,
//                     type: "spring",
//                     stiffness: 200,
//                     y: {
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     }
//                   }}
//                   whileHover={{ 
//                     scale: 1.15, 
//                     rotate: [0, -5, 5, 0],
//                     transition: { duration: 0.3 }
//                   }}
//                   className={`absolute ${badge.position} bg-gradient-to-r ${badge.color} text-white px-4 py-3 rounded-2xl shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center gap-2 z-20 whitespace-nowrap text-sm font-bold hover:shadow-3xl transition-all duration-300`}
//                 >
//                   {badge.icon}
//                   {badge.text}
                  
//                   {/* Subtle glow effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-2xl blur-sm opacity-50 -z-10`} />
//                 </motion.div>
//               ))}
              
//               {/* Additional floating elements */}
//               {/* <motion.div
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1.8, duration: 0.6 }}
//                 className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-md border border-accent/30 rounded-2xl px-4 py-2 shadow-lg"
//               >
//                 {/* <span className="text-xs font-semibold text-accent whitespace-nowrap">
//                   Available for Projects
//                 </span> */}
//               {/* </motion.div>  */}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, ArrowRight, Zap, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = personalInfo.name;

  // ✨ Typewriter effect
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i <= fullText.length) {
        setDisplayedText(fullText.slice(0, i));
        i++;
        setTimeout(typeWriter, 80);
      }
    };
    setTimeout(typeWriter, 500);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight"
            >
              <span className="text-gray-200 block mb-4">Hi, I'm</span>
              <span className="gradient-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-10 lg:h-14 bg-green-400 ml-2 align-middle"
              />
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl lg:text-4xl text-gray-300 mb-8 font-medium"
            >
              {personalInfo.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg lg:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl"
            >
             I’m a Data Engineer building reliable data pipelines, cloud data platforms, and analytics-ready datasets for banking, fraud monitoring, and business reporting environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-6 text-lg rounded-xl font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                View My Work
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-gray-600 text-red-500 px-8 py-6 text-lg rounded-xl font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                <a href={personalInfo.resume} download className="flex items-center">
                  <Download className="mr-2 h-6 w-6" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;


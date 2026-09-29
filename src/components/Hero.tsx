"use client";

import { FiArrowDown, FiMail, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { personalInfo, roles, highlights } from "@/lib/data";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ExperienceBadge from "@/components/ExperienceBadge";
import AnimatedUnderline from "@/components/AnimatedUnderline";


function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentFullText.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentFullText.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayText, isDeleting, textIndex, texts, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // const ref = useRef(null);

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
      className="relative min-h-screen flex items-center justify-center section-padding overflow-visible -mt-3"
    >

      {/* Background decoration */}
      <div className="relative z-10 max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-3 text-center lg:text-left lg:pl-20 -mt-2">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-accent-glow border border-accent/20 text-accent text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 -mt-4">
              Hi, I&apos;m <span className="gradient-text">Raj Mohan</span>
            </h1>

            <p className="text-xl text-muted font-medium mb-6 h-8">
              {typedText}
              <span className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 animate-pulse" />
            </p>

            <div className="inline-block mb-2">
              <p className="text-lg md:text-xl font-medium tracking-wide text-yellow-400 -mt-9">
                Building scalable backend systems
              </p>
              <AnimatedUnderline width="w-80" />
            </div>

            <p className="text-muted w-full mb-8 leading-relaxed ">
              {personalInfo.summary}
            </p>

            {/*Botton*/}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-7 justify-center lg:justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                <FiMail size={18} />
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1uxgtDzIAsZF1YXDm1hiAZ_7VQAdafLRk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-accent/40 hover:border-accent text-accent font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-0.5"
              >
                <FiDownload size={18} />
                Resume
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-card-border hover:border-accent/50 text-foreground font-medium rounded-xl transition-all hover:-translate-y-0.5"
              >
                <FaLinkedinIn size={18} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-card-border hover:border-accent/50 text-foreground font-medium rounded-xl transition-all hover:-translate-y-0.5"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="lg:col-span-2 flex justify-end">
              {/*Profile Image */}
              <div className="translate-x-[-20px] sm:translate-x-0 lg:translate-x-20"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-72 h-84 flex items-center justify-center overflow-visible">
                  {/* <GlowRing size={650} /> */}

                  <motion.div
                    style={{
                      rotateX,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                      scale: 1.09,
                    }}
                    transition={{
                      duration: .3,
                    }}
                  >

                    <motion.div
                      className="relative z-20"
                      style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                    >

                      <div className="rounded-[40px] overflow-hidden border-[1.5px] border-yellow-400 shadow-[0_0_70px_rgba(251,191,36,.35)]">

                        <Image
                          src="/Profile.png"
                          alt="Raj Mohan - Full Stack Java Developer"
                          width={1024}
                          height={1375}
                          quality={90}
                          priority
                          fetchPriority="high"
                          // className="relative z-20 w-[280px] h-[360px] object-cover"
                          className="relative z-20
                                        w-[230px] h-[300px]
                                        sm:w-[250px] sm:h-[320px]
                                        md:w-[270px] md:h-[350px]
                                        lg:w-[280px] lg:h-[360px]
                                        object-cover"
                        />

                      </div>
                    </motion.div>
                  </motion.div>

                  {/* ExperienceBadge*/}

                  <ExperienceBadge />


                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights*/}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-9"
        >
          <div className="gradient-border-card bg-card rounded-3xl border border-card-border overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-center gap-4 p-5 py-5 ${index !== highlights.length - 1
                      ? "lg:border-r border-white/10"
                      : ""
                      }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Scroll Down*/}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-2 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group"
          >
            <span className="text-xs text-gray-400 group-hover:text-amber-400 transition-colors">
              Scroll Down
            </span>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl" />

              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-400 bg-black/20 backdrop-blur-sm shadow-[0_0_8px_rgba(251,191,36,0.45)] -mt-1">
                <FiArrowDown className="text-amber-400" size={12} />
              </div>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

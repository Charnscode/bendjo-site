import React from "react";
import { motion } from "framer-motion";
import SigOrnament from "./SigOrnament";

export default function PageBanner({ eyebrow, title, subtitle, bgImage }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 sm:px-10 bg-forest">
      {bgImage && (
        <>
          <img src={bgImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover photo-grade" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(100deg, rgba(22,35,28,0.92) 0%, rgba(22,35,28,0.75) 55%, rgba(22,35,28,0.5) 100%)" }}
          />
        </>
      )}
      <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
        {eyebrow && (
          <motion.div variants={item}>
            <SigOrnament className="justify-start" />
            <p className="font-script text-2xl mb-2 text-amber">{eyebrow}</p>
          </motion.div>
        )}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl tracking-tight font-display text-ivory mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={item} className="text-sm sm:text-base max-w-xl" style={{ color: "#B9C2AE" }}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

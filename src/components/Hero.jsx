import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Soft parallax on scroll
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleExplore = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" ref={containerRef} className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[70vh] grid lg:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 dark:border-blue-800/60 bg-white/70 dark:bg-slate-900/60 px-3 py-1 text-xs text-blue-700 dark:text-blue-300 backdrop-blur">
            Welcome
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I’m <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Rifky Tirta Zakaria</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Mahasiswa Informatika yang tertarik pada <span className="font-semibold text-slate-900 dark:text-white">Blockchain</span> & <span className="font-semibold text-slate-900 dark:text-white">Web Development</span>.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={handleExplore}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
            </button>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="rounded-lg px-5 py-3 font-medium text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 hover:bg-blue-50/60 dark:hover:bg-blue-900/20 transition"
            >
              About Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-[380px] sm:h-[460px] lg:h-[520px]"
          style={{ transform: `translateY(${offset * 0.15}px)` }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-indigo-500/10 blur-2xl pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

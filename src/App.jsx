import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize from prefers-color-scheme
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  // Apply to document root for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900/60 dark:selection:text-blue-100">
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="relative py-20 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent dark:via-blue-900/10 pointer-events-none" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Ada pertanyaan atau ingin kolaborasi? Kirim pesan melalui form berikut.</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan Anda sudah terkirim.'); e.currentTarget.reset(); }}
                  className="mt-6 grid grid-cols-1 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Nama</label>
                    <input type="text" required className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-950/40 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-950/40 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Pesan</label>
                    <textarea rows="4" required className="mt-1 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-950/40 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400" />
                  </div>
                  <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-transform hover:-translate-y-0.5">
                    Kirim Pesan
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Let's Connect</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Ikuti saya di platform berikut untuk update proyek terbaru.</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <Instagram size={18} /> Instagram
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">© 2025 Rifky Tirta Zakaria</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

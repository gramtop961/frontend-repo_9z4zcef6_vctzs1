import { motion } from 'framer-motion';
import { Code2, Atom, Globe2, Boxes, Cpu } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Globe2 },
  { name: 'CSS', icon: Boxes },
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Atom },
  { name: 'Web3', icon: Cpu },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-blue-900/10 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=560&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Saya adalah mahasiswa Informatika yang antusias mengeksplorasi dunia teknologi, khususnya Blockchain dan pengembangan Web modern. Saya menyukai tantangan untuk membangun produk digital yang fungsional, estetis, dan bermanfaat.
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Keahlian</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur px-3 py-2 shadow-sm">
                    <s.icon size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

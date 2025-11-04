import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Blockchain Wallet Dashboard',
    desc: 'Dasbor web untuk memantau transaksi dan saldo multi-chain dengan UI modern.',
    img: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'DeFi Analytics',
    desc: 'Analitik protokol DeFi dengan visualisasi interaktif dan grafik on-chain.',
    img: 'https://images.unsplash.com/photo-1551281044-8b89c2c73a6e?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'React Component Library',
    desc: 'Koleksi komponen UI reusable berbasis Tailwind & Radix untuk proyek cepat.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Portfolio V3',
    desc: 'Website portfolio generasi ketiga dengan animasi halus dan performa tinggi.',
    img: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'NFT Minting DApp',
    desc: 'Aplikasi minting NFT sederhana terintegrasi kontrak pintar ERC-721.',
    img: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Task Manager',
    desc: 'Manajemen tugas dengan drag-and-drop dan notifikasi real-time.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/50 to-transparent dark:via-cyan-900/10 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Projects</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm font-medium text-blue-700 dark:text-blue-300 inline-flex items-center gap-2">
                    Lihat Detail <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaGooglePlay, FaApple } from 'react-icons/fa';
import { projects, Project } from '../data/projects';

type Category = 'all' | 'mobile' | 'web' | 'fullstack';

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  mobile: { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-400' },
  web: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-400' },
  fullstack: { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-400' },
};

function CardImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  // Gradient placeholder with app icon feel
  return (
    <div className={`w-full h-full bg-gradient-to-br ${project.imagePlaceholder ?? 'from-gray-400 to-gray-600'} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
      <div className="text-center">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-2 border border-white/30">
          <span className="text-white text-2xl font-bold font-EB-Garamond">
            {project.title.charAt(0)}
          </span>
        </div>
        <span className="text-white/70 text-[10px] font-medium tracking-wide uppercase">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function AppCard({ project, index }: { project: Project; index: number }) {
  const cat = categoryColors[project.category] ?? categoryColors.web;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(236,72,153,0.12)] transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Screenshot / Placeholder */}
      <div className="relative overflow-hidden" style={{ height: 148 }}>
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
          {project.featured && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-sm">
              Featured
            </span>
          )}
          {project.badge && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] bg-white/90 backdrop-blur-sm text-gray-700 rounded-full shadow-sm border border-white/60 flex items-center gap-1">
              {project.badge}
            </span>
          )}
        </div>

        <CardImage project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2.5 flex-1">
        {/* Category pill */}
        <span
          className={`inline-flex items-center gap-1.5 w-fit px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${cat.bg} ${cat.text}`}
        >
          <span className={`w-1 h-1 rounded-full ${cat.dot}`} />
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-[15px] leading-snug">
          {project.title.split('—')[0].trim()}
        </h3>

        {/* Store / action buttons */}
        <div className="flex flex-wrap gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[11px] font-bold text-gray-700 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 flex items-center gap-1"
            >
              <FaGithub size={10} />
              GET
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[11px] font-bold text-green-700 border border-green-200 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 flex items-center gap-1"
            >
              <FaGooglePlay size={10} />
              Play
            </a>
          )}
          {project.iosUrl && (
            <a
              href={project.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[11px] font-bold text-gray-800 border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 flex items-center gap-1"
            >
              <FaApple size={10} />
              iOS
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && !project.iosUrl && (
            <span className="px-3 py-1 text-[11px] text-gray-400 border border-gray-100 rounded-full">
              Private
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags — first 3 only */}
        <div className="flex flex-wrap gap-1 mt-auto pt-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded-full bg-gray-50 text-gray-500 border border-gray-100 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-gray-50 text-gray-400 border border-gray-100">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>

    </motion.div>
  );
}

const filterLabels: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
  { key: 'fullstack', label: 'Full Stack' },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Category>('all');

  const filtered = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <p className="font-Jost text-gray-400 text-xs tracking-[0.22em] uppercase">
            Selected Work
          </p>
          <h2 className="font-EB-Garamond text-4xl md:text-5xl font-bold text-gray-900">
            Featured{' '}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Real-world applications built across mobile and web platforms.
          </p>
        </motion.div>

        {/* Filter — segmented control */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-0.5">
            {filterLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`relative px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                  filter === key ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {filter === key && (
                  <motion.span
                    layoutId="filterBg"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <AppCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 py-12 text-sm"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

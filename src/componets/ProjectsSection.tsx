import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projects, Project } from '../data/projects';

type Category = 'all' | 'mobile' | 'web' | 'fullstack';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

function TechTags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {stack.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex gap-4 pt-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
        >
          <FaGithub size={16} /> View Code
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
        >
          <FiExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 lg:h-auto overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
      </div>
      <div className="p-6 md:p-8 bg-white flex flex-col justify-center space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.longDescription}</p>
        <TechTags stack={project.techStack} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

function SecondaryCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
        <TechTags stack={project.techStack} />
        <ProjectLinks project={project} />
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
  const featured = filtered.filter((p) => p.featured);
  const secondary = filtered.filter((p) => !p.featured);

  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A selection of real-world applications I've built — from mobile apps to full-stack platforms.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {filterLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Featured Cards */}
        {featured.length > 0 && (
          <div className="space-y-8">
            {featured.map((project, i) => (
              <FeaturedCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Secondary Cards */}
        {secondary.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondary.map((project, i) => (
              <SecondaryCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}

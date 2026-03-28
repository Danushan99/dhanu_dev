import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats, Stat } from '../data/stats';

function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

function StatCard({ stat, inView, index }: { stat: Stat; inView: boolean; index: number }) {
  const count = useCountUp(stat.value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-4"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent font-EB-Garamond">
        {count}{stat.suffix}
      </div>
      <div className="text-sm font-semibold text-gray-800 mt-2">{stat.label}</div>
      <div className="text-xs text-gray-400 mt-1">{stat.description}</div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-r from-pink-50/60 to-purple-50/60 border-y border-pink-100/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

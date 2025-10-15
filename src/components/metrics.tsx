'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '23+', label: 'Years in VFX & Animation' },
  { value: '50+', label: 'Government & Enterprise Projects' },
  { value: '100%', label: 'Film/XR/AI Under One Roof' },
];

export function Metrics() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#FF3FD1] bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

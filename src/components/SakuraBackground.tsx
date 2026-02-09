import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  fontSize: number;
}

const SakuraBackground = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = (): Petal => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      fontSize: Math.random() * 20 + 10,
    });

    const initialPetals = Array.from({ length: 30 }).map(createPetal);
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.animationDuration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear"
          }}
          className="absolute text-pink-300 transform"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.fontSize}px`
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraBackground;

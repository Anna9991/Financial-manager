'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Движение текста вниз при прокрутке
  // const textY = useTransform(scrollYProgress, [0, 0.9, 1], [0, 300, 300]);
  const textY = useTransform(scrollYProgress, [0, 0.9, 1], [0, 200, 200]);

  // Начальное расстояние между карточками в гриде
  const initialSpacing = [0, 230, 450];

  // Движение карточек вниз и стопка
  // const y1 = useTransform(scrollYProgress, [0, 0.9, 1], [initialSpacing[0], 300, 300]);
  // const y2 = useTransform(scrollYProgress, [0.2, 0.9, 1], [initialSpacing[1], 300, 300]);
  // const y3 = useTransform(scrollYProgress, [0, 0.9, 1], [initialSpacing[2], 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.6, 1], [initialSpacing[0], 200, 200]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.7, 1], [initialSpacing[1], 200, 200]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.8, 1], [initialSpacing[2], 200, 200]);

  const cardTransforms = [y1, y2, y3];

  // Z-индексы для наложения в стопку
  const zIndexValues = [1, 2, 3];

  // Фиксированные углы поворота
  const rotateVal = ['-5deg', '3deg', '-3deg'];

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      
      <div ref={containerRef} className="relative h-[150vh] bg-gray-100 flex items-start justify-center pt-15 pb-5">
      <div className="sticky top-10 flex w-full max-w-4xl px-6 justify-between items-start">
        <motion.div style={{ y: textY }}  className="w-1/3 pt-5">
          <h1 className="text-3xl font-bold text-gray-900">Financial Lifehacks</h1>
        </motion.div>
        <div className="relative w-[320px] h-[600px] flex flex-col gap-10">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              style={{ rotate: rotateVal[index], y: cardTransforms[index] }}
              className={`absolute left-0 w-[320px] h-[200px] bg-white shadow-xl rounded-lg flex items-center justify-center transition-all duration-300 z-[${zIndexValues[index]}]`}
            >
              <span className="text-gray-600">Card {index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <div className='w-full h-3 bg-accent'></div>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam qui deleniti consectetur ex nam repellendus assumenda laudantium in omnis odit accusantium distinctio molestias aperiam molestiae, vero dicta placeat totam.
      </div>
  );
}

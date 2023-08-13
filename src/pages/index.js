"use client";
import Image from "next/image";
import { Inter } from "next/font/google"
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "../useDimension"

const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const container = useRef(null);
  const { height } = useDimension()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <div className={`h-[100vh] ${inter.className}`}>
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
              Start Scrolling
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 text-gray-400">For best experience, visit on your computer</h2>
          </div>
      </div>
      <div
        ref={container}
        className="h-[175vh] bg-[rgba(45,45,45)] flex gap-4 p-4 box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} offsetClass="top-[-45%]"/>
        <Column images={[images[3], images[4], images[5]]} y={y2} offsetClass="top-[-95%]"/>
        <Column images={[images[6], images[7], images[8]]} y={y3} offsetClass="top-[-95%]"/>
        <Column images={[images[9], images[10], images[11]]} y={y4} offsetClass="top-[-75%]"/>
      </div>
      <div className="h-[100vh]"></div>
    </main>
  );
}

const Column = ({ images, y = 0, offsetClass }) => {
  return (
    <motion.div
      style={{ y }}
      className="relative w-[25%] h-full flex flex-col gap-2 min-w-[250px]"
    >
      {images.map((src, index) => {
        return (
          <div
            key={index}
            className={`w-full h-full relative rounded-xl overflow-hidden ${offsetClass}`}
          >
            <Image
              src={`/${src}`}
              fill
              alt="image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

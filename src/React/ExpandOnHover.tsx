"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ExpandOnHoverProps {
  images: { src: string; alt: string; title: string }[];
  className?: string;
}

const ExpandOnHover = ({ images, className }: ExpandOnHoverProps) => {
  return (
    <div className="flex items-center justify-center">
      <HoverExpand_001 className={className} images={images} />
    </div>
  );
};

export { ExpandOnHover };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; title: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      // Prevent zooming on mobile
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
      document.head.appendChild(meta);
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "auto";
        document.head.removeChild(meta);
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        className={cn("relative w-full max-w-6xl px-5", className)}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="flex w-full items-center justify-center gap-1">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                  width: activeImage === index ? "24rem" : "5rem",
                  height: activeImage === index ? "24rem" : "24rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => setSelectedIndex(index)}
                onHoverStart={() => setActiveImage(index)}
              >
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeImage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute flex h-full w-full flex-col items-end justify-end p-4 z-20 pointer-events-none"
                    >
                      <p className="text-left text-xs text-white/50">
                        {image.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.img
                  layoutId={`image-${image.src}`}
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 touch-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <motion.img
              key={selectedIndex}
              layoutId={`image-${images[selectedIndex].src}`}
              src={images[selectedIndex].src}
              className="max-h-[70vh] max-w-[70vw] object-contain rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
              alt={images[selectedIndex].alt}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50 || velocity.x < -500) {
                  handleNext();
                } else if (swipe > 50 || velocity.x > 500) {
                  handlePrev();
                }
              }}
              onClick={(e) => e.stopPropagation()}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{images[selectedIndex].title}</h3>
              <p className="text-white/60 text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { HoverExpand_001 };
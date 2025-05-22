import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Maysoori = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // Create array with different heights for masonry effect
  const images = Array(10).fill('/showcase/emarks1.png').map((img, i) => ({
    src: img,
    height: ((i % 3) + 2) * 100 // Creates heights of 200px, 300px, 400px
  }));

  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="h-[500px] overflow-y-auto">
      <div className="columns-2 md:columns-3 gap-4 p-4 space-y-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSelectedImage(image.src)}
            className="cursor-pointer break-inside-avoid mb-4"
          >
            <img 
              src={image.src} 
              alt={`Maysoori ${index + 1}`} 
              className="w-full rounded-lg "
              style={{ height: `${image.height}px` }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 backdrop-blur-md bg-white/05 flex items-center justify-center z-50"
          >
            <motion.img
              src={selectedImage}
              alt="Selected image"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              layoutId={selectedImage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Maysoori;

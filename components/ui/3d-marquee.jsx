"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export const ThreeDMarquee = ({
  images = [],
  className
}) => {
  // Distribute images round-robin into 4 columns
  const columns = Array.from({ length: 4 }, () => []);
  images.forEach((img, idx) => {
    columns[idx % 4].push(img);
  });
  // Duplicate each column's images for seamless looping
  const chunks = columns.map(col => [...col, ...col]);

  return (
    <div
      className={cn(
        "mx-auto block h-[800px] w-full overflow-hidden rounded-2xl max-sm:h-100",
        className
      )}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[2000px] shrink-0 scale-[0.6] sm:scale-[0.8] lg:scale-100">
          <div
            style={{
              transform: "rotateX(45deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-80 right-[40%] grid size-full origin-top-left grid-cols-4 gap-4 transform-3d">
            {chunks.map((subarray, colIndex) => (
              <motion.div
                initial={{ y: 0 }}
                animate={{ 
                  y: [
                    0, 
                    colIndex % 2 === 0 ? -1200 : 1200,
                    0
                  ]
                }}
                transition={{
                  duration: 50,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8">
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      key={imageIndex + image}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[4/3] w-full h-full  rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                       />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

const GridLineVertical = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "150px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

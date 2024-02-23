import { motion } from "framer-motion";

function Background() {
  const variants = [
    { bg: "bg-blue-300", x: "58%", y: "58%" },
    { bg: "bg-purple-500", x: "58%", y: "42%" },
    { bg: "bg-yellow-300", x: "42%", y: "50%" },
  ];

  return (
    <div className="absolute h-full w-full blur-[100px]">
      {variants.map((variant, index) => (
        <motion.div
          key={index}
          animate={{
            // scale: [1, 1.2, 1],
            height: ["30%", "26%", "30%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 1,
          }}
          style={{
            left: variant.x,
            top: variant.y,
          }}
          className={`h-[30%] aspect-square rounded-full absolute -translate-x-[50%] -translate-y-[50%] ${variant.bg}`}
        />
      ))}
    </div>
  );
}

export default Background;

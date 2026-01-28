import { motion, AnimatePresence } from "framer-motion";

const FormWrapper = ({ children, step }) => {
  const framerMotionAnimate = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={framerMotionAnimate}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FormWrapper;

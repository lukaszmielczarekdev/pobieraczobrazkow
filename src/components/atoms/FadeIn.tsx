import { motion } from "framer-motion";
import { FadeInProps } from "../../utils/interfaces";

const FadeIn = ({ children, duration }: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.5, scale: 0.7 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

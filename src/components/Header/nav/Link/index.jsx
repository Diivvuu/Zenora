import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../animation";

export default function Index({ data, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link className="text-text-black" href={href}>
        {title}
      </Link>
    </motion.div>
  );
}

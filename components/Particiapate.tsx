"use client";

import { slideInFromLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Register() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 z-[20]"
    >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div className="container mt-1">
            <Link href={"/event"}
            className="text-center rounded-2xl md:justify-center md:items-center mt-7 p-5 border border-black bg-gradient-to-r from-teal-400 to-violet-500 hover:from-blue-500 hover:to-violet-700">
                More Events
            </Link>
          </div>
        </motion.div>
    </motion.div>
  );
}

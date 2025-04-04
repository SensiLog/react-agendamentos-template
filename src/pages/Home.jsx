import React from "react";
import { motion } from "framer-motion";
import Main from "../components/home/main/Main";
import Servicos from "../components/home/servicos/Servicos";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Main />
      <Servicos />
    </motion.div>
  );
}

export default Home;
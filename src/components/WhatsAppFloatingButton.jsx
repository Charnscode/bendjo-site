import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppContactLink } from "../lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={buildWhatsAppContactLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter avec BenDjo sur WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: "#25D366", color: "#fff" }}
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  job?: any;
  onClose: () => void;
};

export default function JobBusinessModal({ job, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-2xl rounded-3xl bg-[#111118] border border-white/10 shadow-2xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <div>
              <h2 className="text-white text-xl font-black">
                {job?.title || "Business Strategy"}
              </h2>
              <p className="text-white/50 text-sm">
                Side hustle blueprint & monetizare
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <h3 className="text-white font-bold mb-2">
                🚀 Side Hustle Recommendation
              </h3>
              <p className="text-white/70 text-sm leading-6">
                Transformă skill-ul actual într-un serviciu, produs digital,
                automatizare AI, content funnel sau micro SaaS.
              </p>
            </div>

            <a
              href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-2xl font-black text-white text-center"
              style={{
                background:
                  "linear-gradient(90deg,#6366f1,#8b5cf6,#a855f7)",
              }}
            >
              🚀 Activează Buddy Personal — $9/lună
            </a>

            <p className="text-center text-white/40 text-xs">
              Testează gratuit 30 mesaje · Fără contract · Cancel oricând
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

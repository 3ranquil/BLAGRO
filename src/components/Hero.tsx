"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950 text-white overflow-hidden py-16 sm:py-24"
    >
      {/* Background Radial Dots */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Vibrant Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-emerald-500/25 rounded-full blur-[120px] pointer-events-none animate_pulse_glow"></div>
      <div className="absolute -bottom-32 right-0 w-[30rem] h-[30rem] bg-teal-500/20 rounded-full blur-[140px] pointer-events-none animate_pulse_glow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Text, Value Propositions & CTA (lg: 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-emerald-500/15 border border-emerald-500/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-300 mx-auto lg:mx-0 w-fit mb-6 shadow-inner shadow-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              Global Commodity Trading &amp; Minerals
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none mb-6"
            >
              Connecting Local Resources to <br className="hidden sm:inline" />
              <span className="text_gradient_emerald">Global Markets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-zinc-300 text-base sm:text-lg lg:text-xl font-light mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Exporting certified Nigerian agricultural cash crops and solid
              industrial minerals to international processors with verified
              quality benchmarks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              <strong className="text-emerald-400 font-semibold">
                BL AGRO INTEGRATED LTD
              </strong>{" "}
              provides direct farm-gate aggregation and mineral excavation. From
              high-grade ginger, cashew, and cocoa to spodumene lithium ore and
              tantalite, our operations guarantee consistent, high-purity
              shipments tailored to industrial demands.
            </motion.p>

            {/* Action Buttons with Interactive Hover Lift */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link
                href="#products"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 hover:-translate-y-1 hover:shadow-emerald-600/40 active:translate-y-0 transition-all duration-300 text-sm tracking-wide text-center"
              >
                Explore Inventory
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto bg-zinc-800/80 hover:bg-zinc-700 text-white font-bold px-8 py-3.5 rounded-xl border border-zinc-700/80 backdrop-blur-sm hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-sm tracking-wide text-center"
              >
                Request Quotation
              </Link>
              {/* <Link
                href="/invoice"
                className="w-full sm:w-auto bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 font-bold px-6 py-3.5 rounded-xl border border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 text-sm flex items-center justify-center gap-2"
              >
                <i className="fas fa-file-invoice text-emerald-400"></i> Invoice Portal
              </Link> */}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Flier Poster with Floating Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full animate_float">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border border-zinc-700/60 shadow-2xl bg-zinc-900">
                <Image
                  src="/assets/branding/flier.jpg"
                  alt="BL AGRO AFFAIRS INTEGRATED LTD Brochure"
                  width={600}
                  height={850}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

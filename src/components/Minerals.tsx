import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function Minerals() {
  return (
    <section id="minerals" className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3">
            Heavy Industry Supply
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Solid Minerals Division
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mt-4 mx-auto rounded-full"></div>
          <p className="text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Extracting and delivering high-grade raw mineral reserves optimized for battery energy storage, metallurgy, aerospace, and heavy manufacturing.
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          
          {/* 1. Coal & Minerals Video Analysis */}
          <AnimateOnScroll delayMs={0} className="card_interactive bg-white dark:bg-zinc-800/90 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-700 shadow-sm flex flex-col justify-between hover:shadow-xl">
            <div>
              <div className="relative overflow-hidden h-48 bg-zinc-950">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-95"
                >
                  <source src="/assets/minerals/Minerals.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
              <div className="p-6">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Site Video Analysis
                </span>
                <h3 className="font-black text-xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                  Coal Exploration
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  High-calorific fossil energy reserves and minerals sourced cleanly for heavy manufacturing processing factories and smelting plants.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="#contact"
                className="w-full text-center block bg-zinc-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition duration-200"
              >
                Inquire Bulk Logistics
              </Link>
            </div>
          </AnimateOnScroll>

          {/* 2. Lithium Ore */}
          <AnimateOnScroll delayMs={100} className="card_interactive bg-white dark:bg-zinc-800/90 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-700 shadow-sm flex flex-col justify-between hover:shadow-xl">
            <div>
              <div className="relative overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-950 group">
                <Image
                  src="/assets/minerals/Lithium 3.jpg"
                  alt="High Purity Lithium Ore"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Battery Cell Grade
                </span>
                <h3 className="font-black text-xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                  Lithium Ore
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  High-density spodumene reserves offering superior concentration parameters ideal for global electric vehicle cells and energy storage systems.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="#contact"
                className="w-full text-center block bg-zinc-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition duration-200"
              >
                Request Analysis Data
              </Link>
            </div>
          </AnimateOnScroll>

          {/* 3. Tantalite */}
          <AnimateOnScroll delayMs={200} className="card_interactive bg-white dark:bg-zinc-800/90 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-700 shadow-sm flex flex-col justify-between hover:shadow-xl">
            <div>
              <div className="relative overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-950 group">
                <Image
                  src="/assets/minerals/Tantalite.jpg"
                  alt="High Grade Tantalite Ore"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Coltan Derivative
                </span>
                <h3 className="font-black text-xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                  Tantalite Ore
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  High Ta2O5 concentration ore matching strict international baselines for capacitors, micro-electronics, and aerospace manufacturing.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="#contact"
                className="w-full text-center block bg-zinc-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition duration-200"
              >
                Get Pricing Quote
              </Link>
            </div>
          </AnimateOnScroll>

          {/* 4. Industrial Charcoal */}
          <AnimateOnScroll delayMs={300} className="card_interactive bg-white dark:bg-zinc-800/90 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-700 shadow-sm flex flex-col justify-between hover:shadow-xl">
            <div>
              <div className="relative overflow-hidden h-48 bg-zinc-100 dark:bg-zinc-950 group">
                <Image
                  src="/assets/minerals/industrial-charcoal.jpg"
                  alt="Industrial Carbon Charcoal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  High Carbon Output
                </span>
                <h3 className="font-black text-xl text-zinc-900 dark:text-white mb-2 tracking-tight">
                  Industrial Charcoal
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  Controlled thermal decomposed carbon black, specifically suited for heavy rubber vulcanization, metallurgical smelting, and ink synthesis.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                href="#contact"
                className="w-full text-center block bg-zinc-50 dark:bg-zinc-700/60 border border-zinc-200 dark:border-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition duration-200"
              >
                Request Specs
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Minerals from '../components/Minerals';
import Management from '../components/Management';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { AnimateOnScroll } from '../components/AnimateOnScroll';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-x-clip w-full">
      <Navbar />
      <Hero />

      {/* MISSION & OVERVIEW SECTION */}
      <section className="py-20 sm:py-28 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimateOnScroll className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-2">
              Our Value Proposition
            </span>
            <p className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-200 leading-relaxed font-light">
              We specialize in the strategic export of certified{' '}
              <strong className="font-bold text-zinc-950 dark:text-white">Solid Minerals</strong> (Gemstones, Tantalite, Lithium, Coal) and{' '}
              <strong className="font-bold text-emerald-800 dark:text-emerald-400">Premium Agro Commodities</strong> (Ginger, Soybeans, Cashew Nuts, Dried Hibiscus).
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            
            {/* Mission Statement Box */}
            <AnimateOnScroll direction="right" className="bg-gradient-to-br from-zinc-50 to-emerald-50/40 dark:from-zinc-800/80 dark:to-zinc-800/40 p-8 sm:p-10 rounded-[2.5rem] shadow-xl border-l-[10px] border-emerald-600 border border-zinc-200/80 dark:border-zinc-700">
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-800 dark:text-emerald-400 block mb-2">
                Operational Directive
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">
                &ldquo;Our Mission&rdquo;
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal text-sm sm:text-base">
                To deliver <span className="text-emerald-700 dark:text-emerald-400 font-bold">trusted export logistics</span>, offer competitive farm-gate pricing, and guarantee hygienic, standardized packaging for global partners across Europe, Asia, and the Americas.
              </p>
              <div className="mt-6 p-4 bg-white/90 dark:bg-zinc-900/90 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-xs text-emerald-950 dark:text-emerald-300 font-bold uppercase tracking-wider">Quality Verified &amp; Certified</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Bridging the gap between Nigerian resource origin and international demand.</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Strategic Pillars */}
            <div className="space-y-6">
              <AnimateOnScroll direction="left" delayMs={100} className="p-6 bg-white dark:bg-zinc-800/90 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="bg-emerald-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md shadow-emerald-200 dark:shadow-emerald-950">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Direct Agro Sourcing</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Farm-gate aggregation, hygienic cleaning, and containerized export of Ginger, Hibiscus, Soybeans, Bitter Kola, Cocoa, and Sesame Seeds.
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll direction="left" delayMs={200} className="p-6 bg-white dark:bg-zinc-800/90 rounded-3xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="bg-emerald-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md shadow-emerald-200 dark:shadow-emerald-950">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">International Compliance</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Laboratory batch testing, chemical purity verification, moisture parameter controls, and European phytosanitary regulatory alignment.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      <Products />
      <Minerals />
      <Management />
      <Contact />
      <Footer />
    </main>
  );
}

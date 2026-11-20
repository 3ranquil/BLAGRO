import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const commodities = [
  {
    title: 'Dried Ginger',
    tag: 'Premium Grade A',
    tagColor: 'text-orange-700 bg-orange-50 dark:bg-orange-950/40 dark:text-orange-300 border-orange-200 dark:border-orange-800/60',
    description: 'Expertly sun-dried and split ginger roots with high concentration of essential oils for industrial use.',
    image: '/assets/commodities/ginger.jpg',
  },
  {
    title: 'Hibiscus Flowers',
    tag: 'Pure Organic Origin',
    tagColor: 'text-rose-700 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    description: 'Deep red Zobo leaves processed under strict hygiene for food, beverage, and pharmaceutical exports.',
    image: '/assets/commodities/hibiscus.jpg',
  },
  {
    title: 'Bitter Kola',
    tag: 'Export Grade A++',
    tagColor: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    description: 'Premium quality Garcinia Kola, sourced for medicinal, industrial, and traditional purposes with high potency.',
    image: '/assets/commodities/bitter-kola.jpg',
  },
  {
    title: 'Premium Cashew Nuts',
    tag: 'Export Graded',
    tagColor: 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
    description: 'High-yield raw cashew nuts carefully dried, graded, and optimized for international processing baselines.',
    image: '/assets/commodities/Cashew.jpg',
  },
  {
    title: 'Main Crop Cocoa',
    tag: 'Premium Cocoa Beans',
    tagColor: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    description: 'Main crop cocoa beans thoroughly fermented and dried to meet strict premium chocolate manufacturing standards.',
    image: '/assets/commodities/Cocoa.jpg',
  },
  {
    title: 'Natural Sesame Seeds',
    tag: 'High Oil Content',
    tagColor: 'text-yellow-800 bg-yellow-50 dark:bg-yellow-950/40 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/60',
    description: 'High-protein, machine-cleaned white and yellow sesame seeds ideal for global oil extraction and confectionery use.',
    image: '/assets/commodities/Sesame.jpg',
  },
  {
    title: 'Soybeans',
    tag: 'Clean Grade Yellow',
    tagColor: 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
    description: 'High-protein, machine-cleaned yellow soybeans ideal for global oil extraction and animal feed production.',
    image: '/assets/commodities/soybeans.jpg',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3">
            Export Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Our Core Commodities
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mt-4 mx-auto rounded-full"></div>
          <p className="text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Strictly adhering to international moisture and purity baselines, we aggregate and ship essential agricultural cash crops for industrial processors worldwide.
          </p>
        </AnimateOnScroll>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
          {commodities.map((item, idx) => (
            <AnimateOnScroll
              key={idx}
              delayMs={idx * 80}
              className={`card_interactive bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:shadow-xl ${
                idx === 6 ? 'sm:col-span-2 lg:col-span-3 lg:max-w-md mx-auto w-full' : ''
              }`}
            >
              <div>
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-6 shadow-sm border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-black text-xl sm:text-2xl text-zinc-900 dark:text-white mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Specialized Small-Scale Export Banner */}
        <AnimateOnScroll className="bg-white dark:bg-zinc-900 p-6 sm:p-10 lg:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">
                Value-Added Packaging
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
                Specialized Small-Scale &amp; Packaged Export
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                In addition to bulk cargo container shipments, we facilitate specialized packaged exports of high-demand Nigerian dietary commodities including{' '}
                <strong>oven-dried catfish, palm oil, crayfish, dried snails, unripe plantain flour, beans flour, rice flour, stone-free garri, and native spices</strong>.
              </p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-5 sm:p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800 flex-shrink-0 flex items-center justify-center gap-3.5 font-bold text-xs sm:text-sm w-full md:w-auto shadow-sm">
              <i className="fas fa-box-open text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 flex-shrink-0"></i>
              <span className="leading-snug text-left sm:text-center">Custom Hygienic Packaging Available</span>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}

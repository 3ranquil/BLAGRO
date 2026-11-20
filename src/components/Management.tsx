import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const team = [
  {
    name: 'Mr. Bismarck Emereole',
    role: 'Operations Manager',
    bio: 'As the operational anchor of BL Agro Affairs, Mr. Emereole brings extensive expertise in supply chain optimization. He spearheads end-to-end facility operations, oversees direct farm-gate aggregation, and ensures the seamless execution of bulk export fulfillment to international markets.',
    image: '/assets/team/bismarck.jpg',
    objectPosition: 'object-top',
  },
  {
    name: 'Mrs. Laura B. Emereole',
    role: 'Quality Control Lead',
    bio: 'Laura meticulously directs the company’s quality assurance frameworks. She oversees comprehensive testing protocols, batch auditing, and strict compliance with European phytosanitary regulations, guaranteeing every shipment meets precise moisture parameters and premium grading.',
    image: '/assets/team/laura.jpg',
    objectPosition: 'object-top',
  },
  {
    name: 'Mr. Imoh Ussenudoh',
    role: 'Business Developer & UK Liaison',
    bio: 'Stationed at the forefront of our global expansion, Imoh serves as the vital commercial bridge to the European market. He manages key B2B relationships, aligns operations with UK import standards, and guarantees a transparent, reliable cross-border partnership.',
    image: '/assets/team/imoh.jpg',
    objectPosition: 'object-center',
  },
  {
    name: 'Mr. Godwin',
    role: 'Procurement Lead',
    bio: 'Driving our grassroots sourcing strategy, Mr. Godwin manages critical relationships with local agricultural cooperatives. He is responsible for sustainable supply chain intake, ensuring fair-trade practices, and securing high-yield raw materials directly from the farm-gate.',
    image: '/assets/team/godwin.jpg',
    objectPosition: 'object-center',
  },
];

export default function Management() {
  return (
    <section id="management" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3">
            Corporate Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Operations &amp; Management Team
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 mt-4 mx-auto rounded-full"></div>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A seasoned leadership group anchoring farm-gate aggregation, quality certifications, and direct overseas distribution.
          </p>
        </AnimateOnScroll>
        
        {/* Leadership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {team.map((member, idx) => (
            <AnimateOnScroll
              key={idx}
              delayMs={idx * 100}
              className="card_interactive bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center h-full hover:shadow-xl"
            >
              {/* Centered Circular Portrait Frame with Soft Animated Glimmer Border */}
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36">
                <div className="glimmer_border_wrapper w-full h-full shadow-lg shadow-emerald-500/10 dark:shadow-emerald-950/40">
                  <div className="glimmer_border_content relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.objectPosition}`}
                      sizes="(max-width: 640px) 128px, 144px"
                    />
                  </div>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                <h3 className="font-black text-xl sm:text-2xl text-zinc-900 dark:text-white tracking-tight">
                  {member.name}
                </h3>
                <p className="text-emerald-700 dark:text-emerald-400 font-bold uppercase text-[11px] tracking-wider mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}

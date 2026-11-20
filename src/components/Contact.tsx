'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900 text-white relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Office Contact Info Column */}
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                Whether you need a quick quote on shipping container metrics, analysis papers on
                chemical purity parameters, or long-term logistics processing setups, our dedicated
                terminal team is standing by.
              </p>
              
              <div className="space-y-6">
                {/* Head Office Box */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-emerald-400 mr-4 border border-zinc-700/50 flex-shrink-0">
                    <i className="fas fa-building text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-300 uppercase tracking-wider">
                      Corporate Head Office
                    </h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Plot+23+Road+15+FHA+Gonin+Gora+Kaduna+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span>Plot 23, Road 15, FHA Gonin Gora<br />Kaduna, Nigeria</span>
                        <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-70 group-hover:opacity-100 transition-opacity"></i>
                      </a>
                    </p>
                  </div>
                </div>

                {/* Operational Office Box */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-emerald-400 mr-4 border border-zinc-700/50 flex-shrink-0">
                    <i className="fas fa-cogs text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-300 uppercase tracking-wider">
                      Operational Office
                    </h4>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=3B+Wukari+Street+Off+Katsina+Road+Kaduna+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        <span>3B Wukari Street, Off Katsina Road<br />Kaduna, Nigeria</span>
                        <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-70 group-hover:opacity-100 transition-opacity"></i>
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-emerald-400 mr-4 border border-zinc-700/50 flex-shrink-0">
                    <i className="fas fa-phone-alt text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-300 uppercase tracking-wider">
                      Call
                    </h4>
                    <p className="text-zinc-400 text-sm mt-1 flex flex-wrap gap-x-2 gap-y-1">
                      <a
                        href="tel:+2348023445713"
                        className="text-zinc-300 hover:text-emerald-400 font-medium transition-colors"
                      >
                        +234 802 3445 713
                      </a>
                      <span className="text-zinc-600">|</span>
                      <a
                        href="tel:+2348031751435"
                        className="text-zinc-300 hover:text-emerald-400 font-medium transition-colors"
                      >
                        +234 803 1751 435
                      </a>
                    </p>
                    <h4 className="font-bold text-sm text-zinc-300 uppercase tracking-wider mt-3">
                      WhatsApp
                    </h4>
                    <p className="mt-1">
                      <a
                        href="https://wa.me/2349071472161"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-medium transition duration-200 inline-flex items-center gap-1.5"
                      >
                        +234 907 1472 161 <i className="fab fa-whatsapp text-xs"></i>
                      </a>
                    </p>
                  </div>     
                </div>

                {/* Email Box */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-emerald-400 mr-4 border border-zinc-700/50 flex-shrink-0">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-300 uppercase tracking-wider">
                      Email Channels
                    </h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      <a
                        href="mailto:info@blagrointegrated.com"
                        className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1.5"
                      >
                        info@blagrointegrated.com <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form Box */}
          <div className="bg-zinc-800/80 border border-zinc-700/60 p-6 sm:p-8 md:p-10 rounded-[2.5rem] backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-black mb-2 tracking-tight">Send an Inquiry</h3>
            <p className="text-zinc-400 text-xs mb-6">
              Fill out the fields below and our logistics desk will follow up promptly.
            </p>
            
            <form
              action="https://formspree.io/f/mgaengdk"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="johndoe@global.com"
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Message / Procurement Order Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Specify cargo tonnage requirement or chemical spec data rules..."
                  className="w-full bg-zinc-900 border border-zinc-700/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm transition shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Inquiry <i className="fas fa-paper-plane ml-2 text-xs"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

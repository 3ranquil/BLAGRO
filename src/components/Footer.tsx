import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-10 border-t border-zinc-800/40">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} BL AGRO INTEGRATED GLOBAL LTD. All
            Rights Reserved.
          </p>
          <p className="text-[11px] text-zinc-600 mt-1">
            RC / BN: 3705650 &bull; Agricultural Commodities & Solid Minerals
            Export
          </p>
        </div>
        <div className="flex items-center space-x-6 text-xs text-zinc-400">
          <Link href="#home" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="#products" className="hover:text-emerald-400 transition">
            Commodities
          </Link>
          <Link href="#minerals" className="hover:text-emerald-400 transition">
            Minerals
          </Link>
          {/* <Link href="/invoice" className="hover:text-emerald-400 font-semibold transition">Invoice Portal</Link> */}
          <Link href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

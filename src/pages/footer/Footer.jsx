export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-bg-dark-brown backdrop-blue-md">
      <div className="relative max-w-7xl mx-auto flex md:flex-row items-center gap-6" >
        <div className="text-xl font-bold tracking-tighter mr-8">
          BC <span className="text-bg-brown">.</span>
        </div>

        {/* <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies</a>
        </div> */}

        <div className="absolute left-1/2 -translate-x-1/2 text-[12px] uppercase tracking-[0.2em] font-bold text-white/80">
          &copy; {currentYear} - Designed & Built by Yu-Yang Chen
        </div>
      </div>
    </footer>
  );
}
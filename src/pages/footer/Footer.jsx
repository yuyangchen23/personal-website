export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-bg-dark backdrop-blue-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6" >
        <div className="text-xl font-bold tracking-tighter mr-8">
          BC <span className="text-accent">.</span>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies</a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">
          &copy; {currentYear} - Designed & Built by Bryan Chen
        </div>
      </div>
    </footer>
  );
}
export function SocialLink({ href, label }) {
  return (
    <a
      href={href}
      className="px-6 py-4 glass rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-colors border-white/10 hover:scale-105">
      {label}
    </a>
  );
}
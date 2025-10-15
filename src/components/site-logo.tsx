import Image from 'next/image';

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Spectralysium Logo"
        width={40}
        height={40}
        className="object-contain dark:invert-0 invert dark:brightness-100 brightness-0 transition-all duration-200"
        priority
      />
      <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 bg-clip-text text-transparent">
        Spectralysium
      </span>
    </div>
  );
}

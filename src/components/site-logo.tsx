import Image from 'next/image';

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="Spectralysium Logo"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent">
        Spectralysium
      </span>
    </div>
  );
}

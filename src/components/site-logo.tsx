export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00E5FF] via-[#FF3FD1] to-[#FFB800] opacity-80 blur-sm absolute" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00E5FF] via-[#FF3FD1] to-[#FFB800] relative" />
      </div>
      <span className="font-bold text-xl tracking-tight">Spectralysium</span>
    </div>
  );
}

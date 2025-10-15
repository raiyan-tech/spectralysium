'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function SiteLogo({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use mono logo for light mode, main logo for dark mode
  const logoSrc = mounted && theme === 'light' ? '/logo-mono.png' : '/logo.png';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={logoSrc}
        alt="Spectralysium Logo"
        width={40}
        height={40}
        className="object-contain transition-all duration-200"
        priority
      />
      <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 dark:from-slate-200 dark:via-slate-400 dark:to-slate-200 bg-clip-text text-transparent">
        Spectralysium
      </span>
    </div>
  );
}

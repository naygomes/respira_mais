'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components';
import { logotipo } from '@/assets';

export default function Header() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };
  return (
    <div className="fixed w-screen z-1 bg-background shadow-xl flex flex-row items-center justify-between px-4 md:px-12 lg:px-16 box-border py-4 gap-[1vw] md:gap-[4vw]">
      <Image
        className="w-25 sm:w-30 md:w-40 cursor-pointer"
        src={logotipo}
        alt="logo do site"
        onClick={(e) => handleNavigation('/')}
      />
      <div className="flex flex-row items-center md:gap-[8vw]">
        <Button
          type="text"
          onClick={(e) => handleNavigation('/interactive-map')}
        >
          Mapa Interativo
        </Button>
        <Button type="text" onClick={(e) => handleNavigation('/recents')}>
          Mais recentes
        </Button>
      </div>
    </div>
  );
}

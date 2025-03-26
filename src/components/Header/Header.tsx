import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { logotipo } from '@/assets';

export default function Header() {
  return (
    <div className="fixed w-screen z-1 bg-background shadow-xl flex flex-row items-center justify-between px-16 box-border py-4 gap-[4vw]">
      <Image className="w-40" src={logotipo} alt="logo do site" />
      <div className="flex flex-row items-center gap-[8vw]">
        <Button type="text">Mapa Interativo</Button>
        <Button type="text">Mais recentes</Button>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { logo } from '@/assets';

export default function Header() {
  return (
    <div className="bg-light flex flex-row items-center justify-between px-16 py-8  gap-[4vw]">
      <Image className="w-75" src={logo} alt="logo do site" />
      <div className="flex flex-row items-center gap-[8vw]">
        <Button type="text">Mapa Interativo</Button>
        <Button type="text">Mais recentes</Button>
      </div>
    </div>
  );
}

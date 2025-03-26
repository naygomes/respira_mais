import React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { logotipo } from '@/assets';

export default function Header() {
  return (
    <div className="w-screen bg-light flex flex-row items-center justify-between px-16 box-border py-4 gap-[4vw]">
      Desenvolvido por Nayara Gomes.
    </div>
  );
}

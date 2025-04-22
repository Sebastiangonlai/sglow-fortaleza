import React from "react";
import { FloatingDock } from "../../lib/floating-dock";
import { SiWhatsapp } from "react-icons/si";
import ChatAuto from '@/components/chat-auto/ChatAuto';
// import Link from "next/link";

import Link from "../Link";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Whatsapp",
      icon: (
        <Link href="{import.meta.env.VITE_API_WHATSAPP}"
          className="text-base text-primary-800 hover:text-primary-600">
          <SiWhatsapp className="h-[24px] w-[22px] -mt-1 -mx-0.5 text-neutral-500 dark:text-neutral-300" />
        </Link>
      ),
      href: "${import.meta.env.VITE_API_WHATSAPP}",
    }, {
      title: "ChatAuto",
      icon: (
        <ChatAuto className="h-[24px] w-[22px] -mt-1 -mx-0.5 text-neutral-500 dark:text-neutral-300" />
        // <ChatAuto className="h-full w-full text-[#111928]-2 dark:text-neutral-300" />
      ),
      href: ``,
    },
  ];
  return (
    <div className=" ">
      <FloatingDock
        // only for demo, remove for production
        // mobileClassName=" fixed flex-col  left-5 bottom-4 w-full"
        mobileClassName='z-[10] right-5 bottom-20 fixed flex-col  '
        items={links} />
    </div>
  );
}

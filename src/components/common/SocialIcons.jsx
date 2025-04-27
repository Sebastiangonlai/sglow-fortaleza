import Mail from "@/components/social-icons/mail.svg?react";
import Whatsapp from "@/components/social-icons/whatsapp.svg?react";
import Instagram from "@/components/social-icons/instagram.svg?react";
import Facebook from "@/components/social-icons/facebook.svg?react";

const SocialIcons = () => {
  const icons = [
    { href: import.meta.env.VITE_INSTAGRAM, label: "Instagram", Icon: Instagram },
    { href: "mailto:info@academiafortaleza.com.uy", label: "Email", Icon: Mail },
    { href: import.meta.env.VITE_FACEBOOK, label: "Facebook", Icon: Facebook },
    { href: import.meta.env.VITE_API_WHATSAPP, label: "WhatsApp", Icon: Whatsapp },
  ];

  return (
    <div className=" text-center lg:text-left text-base font-semibold px-1">
      Seguinos &ensp;&ensp;
      <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-center">
        <ul className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
          {icons.map(({ href, label, Icon }, index) => (
            <li key={index}>
              <a
                aria-label={label}
                className="overflow-visible flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-[#111928] hover:border-primary hover:bg-blue-600/10 dark:border-[#1F2A37] dark:text-white dark:hover:border-blue-400/40 text-sm transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={href}>
                <Icon className="fill-current text-gray-800 dark:text-gray-100 h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialIcons;

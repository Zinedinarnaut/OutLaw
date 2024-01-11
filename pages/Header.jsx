import React from 'react'
import { FaSlackHash } from 'react-icons/fa'
import Link from 'next/link'
import ColorModeToggle from '/components/ColorModeToggle'
import NavlinkDropMenu from '../components/NavlinkDropMenu'
import { NavLinks } from '/components/data/Navlinks'
import { useRouter } from 'next/router'
import Image from "next/image";

const Header = () => {
    const router = useRouter()
  return (
    <header className="fixed w-full pq2 z-50 dark:bg-[rgba(17, 17, 17,0.29)] bg-[#171717] backdrop-blur-lg header">
      <div className="mx-auto max-w-4xl">
        <nav className="flex items-center gap-2 text-base m-3">
          <div className="w-[40px] sm:w-[30px] relative">
            <Image
                quality={100}
                src={`/valorant.png`}
                alt="pfp"
                width={40}
                height={10}
                className="w-auto rounded-full"
            />
          </div>
          <Link href="/" className="group">
            <h2 className=" font-bold text-xl flex tracking-tighter items-center notranslate">
              OutLaw
            </h2>
          </Link>
          <div className="headernav ml-1 text-lg hidden md:inline-flex">
            {NavLinks.map((links) => (
              <Link
                key={links.link}
                aria-label={links.title}
                className={`${
                  links.title === "" ? "hidden" : ""
                } px-2 hover:underline underline-offset-[8px] ${
                  router.pathname === links.link
                    ? "font-extrabold text-[#FF0000]"
                    : "font-normal"
                }`}
                href={links.link}
              >
                {links.title}
              </Link>
            ))}
          </div>
          <div className="flex-1"></div>
          <div className="w-[40px] sm:w-[30px] relative">
            <Image
                quality={100}
                src={`https://avatar.vercel.sh/1`}
                alt="pfp"
                width={40}
                height={10}
                className="w-auto rounded-full"
            />
          </div>
          <div className="items-center">
            <ColorModeToggle />
          </div>
          <div className="">
            <NavlinkDropMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header

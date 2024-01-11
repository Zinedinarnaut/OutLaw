import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="mb-[20px] mt-[60px] block minxs:flex max-w-full">
        <p className="text-md notranslate">
          &copy; {new Date().getFullYear()}&thinsp;OutLaw
          rights reserved. We are not affiliated with or endorsed by
        </p>
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
          Riot Games
          <div className="flex-1"></div></div>
    </footer>
  );
}

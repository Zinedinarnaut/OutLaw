import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <div className="mb-[20px] mt-[60px] block minxs:flex max-w-full">
        <p className="text-md notranslate">
          &copy; {new Date().getFullYear()}&thinsp;OutLaw
          rights reserved. We are not affiliated with or endorsed by Riot Games
        </p>
      </div>
    </footer>
  );
}

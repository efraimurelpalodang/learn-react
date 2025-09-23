import Link from "next/link"

export default function Navbar() {
  return (
    <div className="bg-fuchsia-900 flex justify-between items-center px-30 py-2">
      <h1 className="text-3xl capitalize font-bold"><Link href='/'>navbar</Link></h1>
      <ul className="flex gap-7 text-lg">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/me">Me</Link></li>
      </ul>
    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './components/Client/ModeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/users"} >Users</Link>
    </main>
  )
}

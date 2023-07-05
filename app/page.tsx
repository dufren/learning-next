import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/zgr" className="hover:bg-slate-400">
        go to Zgr
      </Link>
    </main>
  )
}

import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      {' '}
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      {' '}
      <Link href="/cv">
        <a>CV</a>
      </Link>
    </>
  )
}
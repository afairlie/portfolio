import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav></Nav>
      </main>

      <footer className={styles.footer}>
        a project by Ariane Fairlie
      </footer>
    </div>
  )
}

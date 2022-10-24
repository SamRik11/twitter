import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SideBar } from './SideBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex min-h-screen max-w-7xl mx-auto bg-slate-100'>
      {/* SideBar */}
      <SideBar/>
      {/* Feed */}
      {/* widgets */}
      </main>
    </div>
  )
}

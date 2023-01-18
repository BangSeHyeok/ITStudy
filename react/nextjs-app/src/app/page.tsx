import Image from 'next/image'
import { Inter } from '@next/font/google'
import homeStyles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
   <div>
      <Head>
          <title>
              Create
          </title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[John Ahn Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>

        </ul>
      </section>
   </div>
  )
}

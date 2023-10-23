import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BaseDrawer } from '../components/BaseDrawer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseDrawer>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
          <div className={`${styles.height100} red-bg`} id="area-1">
            aaa
          </div>
          <div className={`${styles.height100} green-bg`} id="area-2">
            aaa
          </div>
        </main>

        <footer className={styles.footer}>© 2022 ki0i0ro0</footer>
        <style jsx>{`
          .red-bg {
            background: red;
            width: 100%;
          }
          .green-bg {
            background: green;
            width: 100%;
          }
        `}</style>
      </BaseDrawer>
    </div>
  )
}

export default Home
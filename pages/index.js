import Head from 'next/head'
// import Navbar from './Navbar'
import Image from 'next/image'
// import Dummy from '../components/Dummy'
import styles from '../styles/Home.module.css'
import Blog from './blog'


export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
          .myspan{
            color:red;
          }
        `}
      </style>
      <Head>
        <title>Hunting Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <script src="/scrpt.js" strategy="lazyOnloading" > </script> */}
      <main className={styles.main}>
        {/* <Dummy/> */}
        {/* <span className="myspan dummy">hello</span> */}

        <h1 className={styles.title}>
          Hunting App by Coder
        </h1>
        <div className={styles.imgWrap}>
          {/* <img className={styles.myImg} width={500} height={200} src="/img.jpg" alt="" /> */}
          <Image className={styles.myImg} width={500} height={200} src="/img.jpg" alt="" />
        </div>
        <p className={styles.description}>
          Blog Post
        </p>
        {/* <Blog /> */}
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <h1>How to learn JavaScript in 2022</h1>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h1>How to learn JavaScript in 2022</h1>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h1>How to learn JavaScript in 2022</h1>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>

        {/* <div className={styles.grid}>
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
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

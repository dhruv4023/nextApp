// import  { useEffect } from 'react'
import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { flushSync } from 'react-dom/cjs/react-dom.production.min';
import * as fs from 'fs'
// import  from 'react/cjs/react.production.min'

// step 1 :  COllect All the files from blogData directory
// step 2:  Iterate them and Display them

export default function Blog(props) {
  // console.log(props);
  const [blog, setBlog] = useState(props.allBlogs)
  const [count, setCount] = useState(2);
  // useEffect(() => {
  //   // console.log("Use Effect is running")
  //   fetch("http://localhost:3000/api/blogs").then(a => {
  //     return a.json();
  //   }).then(parsed => {
  //     console.log(parsed);
  //     setBlog(parsed)
  //   })
  // }, [])
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
    setCount(count+2);
    let data = await d.json();
    setBlog(data);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* infinite scroll */}
        <InfiniteScroll
          dataLength={blog.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blog.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        // below props only if you need pull down functionality
        >
          {blog.map((blogitem) => {
            return <div key={blogitem.title}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h1>{blogitem.title}</h1>
                {/* <h1>How to learn JavaScript in 2022</h1> */}
              </Link>
              {/* <p>JavaScript is the language used to design logic for the web</p> */}
              <p className={styles.paraSize}>{blogitem.metadesc.substr(0, 100)}...</p>
            </div>
          })}
        </InfiniteScroll>
        {/* infinite scroll */}

        {/* <div className={styles.blogs}> */}
        <div className={styles.blogItem}>
          {/* {blog.map((blogitem) => {
            return <div key={blogitem.title}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h1>{blogitem.title}</h1>
              </Link>
              <p className={styles.paraSize}>{blogitem.metadesc.substr(0, 100)}...</p>
            </div>
          })} */}
          {/* <h1>How to learn JavaScript in 2022</h1> */}
          {/* <p>JavaScript is the language used to design logic for the web</p> */}
        </div>
        {/* </div> */}
      </main>
    </div>
  )
}

//--------------------- ClientSide Props----------------

export async function getStaticProps(context) {
  // let data = await fetch("http://localhost:3000/api/blogs");
  let data = await fs.promises.readdir("BlogData");
  let allCount = data.length;
  let mysfile;
  let allBlogs = [];
  // let allBlogs = await data.json()
  for (let i = 0; i < 2; i++) {
    let item = data[i];
    mysfile = await fs.promises.readFile(("BlogData/" + item), 'utf-8')
    allBlogs.push(JSON.parse(mysfile))
  }
  return {
    props: { allBlogs, allCount }, // will be passed to the page component as props
  }
}

//--------------------- ServerSide Props----------------
// export async function getServerSideProps(context) {
//   let data =await fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await data.json()

//   return {
//     props: { allBlogs }, // will be passed to the page component as props
//   }
// }
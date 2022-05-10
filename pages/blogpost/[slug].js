// import { useRouter,useEffect } from 'next/router'
import React from 'react'
import { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

// step 1: Find THe file corresponding to the slug
// step 2: populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.blogData)
  // const router = useRouter()
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const { slug } = router.query;
  //   // console.log("Use Effect is running")
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(a => {
  //     return a.json();
  //   }).then(parsed => {
  //     console.log(parsed);
  //     setBlog(parsed)
  //   })
  // }, [router.isReady])

  return <div className={styles.main}>
    <h2>{blog && blog.title}  </h2>
    <p>
      {/* {blog && blog.content} */}
      {blog &&  <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </p>
  </div>;
}
//--------------------- ClientSide Props----------------
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'cpp' } }, // See the "paths" section below
      { params: { slug: 'javaScript' } }, // See the "paths" section below
      { params: { slug: 'Python' } } // See the "paths" section below
    ],
    fallback: true //, false or "blocking" // See the "fallback" section below
  };
}

export async function getStaticProps(context) {

  const { slug } = context.params;

  // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let blogData = await data.json()

  let blogData = await fs.promises.readFile(`BlogData/${slug}.json`, 'utf-8');

  return {
    props: { blogData: JSON.parse(blogData) }, // will be passed to the page component as props
  }
}

//--------------------- Serverside Props----------------
// export async function getServerSideProps(context) {

//   const { slug } = context.query;
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let blogData = await data.json()

//   return {
//     props: { blogData }, // will be passed to the page component as props
//   }
// }

export default Slug
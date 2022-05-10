// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'


export default async function handler(req, res) {
  let data = await fs.promises.readdir(`BlogData`)
  let allBlogs=[]
  for (let item of data){
      console.log(item)
      let myfile= await fs.promises.readFile('BlogData/'+item)
      console.log(myfile)
      allBlogs.push(JSON.parse(myfile))
  } 
  res.status(200).json(allBlogs)
// export default function handler(req, res) {
//   fs.readdir("BlogData",(err,data)=>{
//     console.log(data)
//     res.status(200).json(data)
//   })
}

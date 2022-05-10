// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
//   fs.readdir("BlogData",(err,data)=>{
//     console.log(data)
//     res.status(200).json(data)
//   })

    // fs.readdir(`BlogData`, (err, data) => {
    //     if (err) {
    //         res.status(500).json({ error: "No such Blog Found" })
    //     }
    //     console.log("")
    //     data.forEach(item=>{
    //         console.log(item)
    //         fs.readFile(('BlogData/'+ item),()=>{

    //         })
    //     })
    //     res.status(200).json((data))
    // })

    fs.readFile(`BlogData/${req.query.slug}.JSON`, "UTF-8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "No such Blog Found" })
        }
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
    })
}

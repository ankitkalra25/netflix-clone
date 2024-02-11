import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb"
import serverAuth from "@/lib/serverAuth";

export default async function handler (req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'GET'){
        return res.status(405).end()
    }
    try{
        await serverAuth(req);
        const {moviesId} = req.query;
        console.log('m',req.query)
        if(typeof moviesId != 'string'){
            throw new Error('Invalid ID')
        }
        if(!moviesId){
            throw new Error('Invalid ID')
        }
        const movie = await prismadb.movie.findUnique({
            where :{
                id: moviesId
            }
        })
        if(!movie){
            throw new Error('Invalid ID')
        }
        
        return res.status(200).json(movie)
       
    }catch(err){
        console.log(err)
        return res.status(400).end()
    }
}
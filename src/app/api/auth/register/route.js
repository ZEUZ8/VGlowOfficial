import { NextResponse } from "next/server"

export  async function POST(req,res) {
    if(req.method === 'POST'){
        const body = await req.json();
        console.log(body,' the body in the console')
        try{
            return NextResponse.json({msg:"success"})
        }catch(err){
            console.log(err,' error in the console')
            return NextResponse.json({msg:"not able to find the body"})
        }
    }else{
        return NextResponse.json({msg:"request must be post"})
    }
    
}
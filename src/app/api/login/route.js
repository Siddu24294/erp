import {connectMongo} from "@/libs/connectMongo";
import User from "@/models/User";
import jwt from "jsonwebtoken";


export async function POST(request){
  const req=request.json()
  const connection=await connectMongo()
  const credentials=User.find({email: req.email})
  const c=jwt.sign()
}
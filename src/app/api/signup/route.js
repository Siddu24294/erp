import {connectMongo} from "@/libs/connectMongo";
import User from "@/models/User";
export async function POST(request){
  const req=await request.json()
  const {email,password}=req
  console.log(email,  password)
  console.log("connecting to mongo")
  await connectMongo()
  console.log("connected to mongo")

  console.log("Creating document")
  const user=await User.create({email:email,password:password})
  await user.save()
  console.log("document created")
  console.log(user)
  return Response.json({user})

}
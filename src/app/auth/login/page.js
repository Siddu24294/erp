import {useForm} from "react-hook-form";

export default function Login(){
  const {register,handleSubmit,formState:{errors}}=useForm()
  async function onSubmit(data){
    const req=await fetch("/api/login",{method:"POST",body:JSON.stringify(data)})

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type={"text"} id={"email"} placeholder={"EMAIL"} {...register("email",{required:true,maxLength:80})}/>
      <input type="text" id={"password"} placeholder={"PASSWORD"} {...register("password",{required:true,maxLength:80})}/>
      <input type={"submit"} value={"login"}/>
    </form>
  )
}
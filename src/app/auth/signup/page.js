"use client"
import {useForm} from "react-hook-form";

export default function Signup(){
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data){
    if(data.password==data.confirmPassword) {
      const res=await fetch("/api/signup",{method:"POST",body:JSON.stringify(data)})
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={"email"}>Email:</label>
      <input type={"text"} id={"email"} placeholder={"email"} {...register("email", {required: true, maxLength: 80})}/>
      <label htmlFor={"password"}>Password</label>
      <input type={"text"} id={"password"} placeholder={"password"} {...register("password", {required: true, maxLength: 80})}/>
      <label htmlFor={"confPass"}>Confirm Password</label>
      <input type={"text"} id={"confPass"} placeholder={"Confirm password"} {...register("confirmPassword", {required: true, maxLength: 80})}/>
      <input type={"submit"}/>
    </form>
  )
}

/*
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}

 */
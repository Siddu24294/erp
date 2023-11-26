import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>this is homepage</p>
      <Link href={"/auth/signup"}>
        <button>SIGNUP</button>
      </Link>
      <Link href={"/auth/login"}>
        <button>LOGIN</button>
      </Link>
    </>
  )
}

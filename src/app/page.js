import Link from "next/link"


export default function Home  () {
  return (
    <>
    <div>Welcome Home</div>
    <Link href={"/blog"}>blog</Link>
    <Link href={"/products"}>products</Link>
    </>
  )
}


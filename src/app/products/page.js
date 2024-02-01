import Link from 'next/link'
import React from 'react'

function ProuctList() {
  return (
    <>
    <h1>Product List</h1>
    <h2>Prouct 1</h2>
    <h2><Link href={"products/2"}>Prouct 2</Link></h2>
    <h2>Prouct 3</h2>
    <Link href={"/"}>Home</Link>
    </>
  )
}

export default ProuctList
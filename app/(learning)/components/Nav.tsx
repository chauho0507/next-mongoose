'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isUserLogin = true

  return (
    <nav>
      <Link href="/">
        <Image
          src="../../../public/next.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </Link>
      <p>Promptopia</p>
      <div className="sm:flex hidden">
        {isUserLogin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="">
              Create post
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Nav

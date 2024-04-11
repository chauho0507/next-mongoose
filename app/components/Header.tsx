'use client'

import React from 'react'
import { Avatar } from '@nextui-org/avatar'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'

import Link from 'next/link'
import { EHeaderActions } from '@admin/enums/common'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()

  const dropdownClickHandler = (key: EHeaderActions) => {
    switch (key) {
      case EHeaderActions.Profile:
        router.push('/admin/profile')
        break
      case EHeaderActions.Logout:
        console.log('logout logic')
        break

      default:
        break
    }
  }

  return (
    <div className="flex justify-between items-center h-20 bg-gradient-to-tr from-purple-100 to-purple-300 bg-purple-100 border-b border-purple-300 px-4 shadow-indigo-500/40">
      <Link href="/">
        <Avatar
          src="https://logopond.com/logos/e1f48388e2d959d7ffa09d80fcad7da2.png"
          alt="logo"
          name="logo"
          size="lg"
          showFallback
          isBordered
        />
      </Link>
      <h1 className="text-xl font-bold italic">Nothing is impossible</h1>
      <Dropdown>
        <DropdownTrigger>
          <div className="flex justify-end items-center gap-2 w-fit max-w-60 hover:opacity-90 cursor-pointer shadow-indigo-500/40">
            <Avatar
              className="min-w-10"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              alt="avatar"
              name="avatar"
              showFallback
            />
            <p className="text-white font-bold text-ellipsis overflow-hidden">
              name
            </p>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dynamic Actions"
          onAction={dropdownClickHandler}
        >
          <DropdownItem key={EHeaderActions.Profile}>My profile</DropdownItem>
          <DropdownItem
            key={EHeaderActions.Logout}
            className="text-danger"
            color="danger"
          >
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Header

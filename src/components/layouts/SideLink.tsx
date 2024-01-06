'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type LinkType = {
    link: {
        title: string;
        url: string;
        icon: React.ReactNode
    }
}

export default function SideLink({link}: LinkType) {
    const path = usePathname()
  return (
    <li key={link.title}>
        <Link href={link.url} className={ path === link.url ? "active" : ''}>
            {link.icon}
            {link.title}
        </Link>
    </li>
  )
}

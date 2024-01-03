'use client'
import React from 'react'

export default function ButtonIcon({Icon, title, action} : {Icon: any, title?: string, action?: () => void}) {
  return (
    <button onClick={action}>
        <Icon className="btn btn-sm btn-circle bg-none p-0.5 text-base-content/80 bg-base-100 hover:ring-2 ring-primary" title={title} />
    </button>
  )
}

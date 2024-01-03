import React from 'react'

function Button({children, className}: {children: React.ReactNode|string, className?: string}) {
  return (
    <button className={`${className} btn btn-sm md:btn-md`}>{children}</button>
  )
}

export default Button
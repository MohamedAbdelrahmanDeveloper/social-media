import React from 'react'

export default function HeaderApp() {
    return (
        <div className="navbar container-app">
            <div className="flex-1 zz">
                <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <div className='me-4'>
                    <a className="btn btn-ghost text-xl -ms-4">Social</a>
                </div>
                <div className="form-control d -ms-4 md:-ms-0">
                    <input type="text" placeholder="Search" className="input input-bordered input-primary input-sm p-4 rounded-box  w-24 md:w-auto" />
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { IoCallSharp, IoMail } from "react-icons/io5";

const NavbarHeader = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#BED62F', color: '#343795' }} className="py-1">
                <div className="grid grid-cols-2 gap-2 md:gap-10 max-w-7xl mx-auto p-2">
                    <div className="flex gap-2 items-center">
                        <IoCallSharp className='h-6 w-6' />
                        <p className='font-bold'>+8801726065822</p>
                    </div>

                    <div className="flex gap-2 items-center ml-auto">
                        <IoMail className='h-6 w-6' />
                        <p className='font-bold'>demo@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavbarHeader
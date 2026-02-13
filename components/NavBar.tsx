'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/signup", label: "Sign Up" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function NavBar() {
    const pathname = usePathname();
    return (
        <header className="fixed top-[30px] right-0 left-0 flex items-center top-[30px] z-50 ml-[30px]">
            <Link href="/">
                <Image
                    src="/runwayIcon.png"
                    alt="runway icon"
                    width={129}
                    height={116}
                />
            </Link>
            <nav className="flex px-[16px] py-[10px] rounded-[32px] w-fit bg-[#D9D9D9]/40 backdrop-blur-lg mr-[30px] ml-auto">
                <div
                    className="flex text-lg text-black"
                    style={{ textShadow: '0 3px 4px rgba(0,0,0,0.30)' }}
                >
                    <div className="flex items-center ">
                        {links.map((link, i) => (
                            <div key={link.href} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className={`px-2 ${
                                        pathname === link.href
                                            ? 'underline underline-offset-4 font-medium'
                                            : 'hover:underline underline-offset-4'
                                    }`}
                                >
                                    {link.label}
                                </Link>

                                {i !== links.length - 1 && (
                                    <span className="h-4 w-px bg-black opacity-60" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}

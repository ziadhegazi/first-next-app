import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/ZH style 2 WIP3pdf.jpg"
                    width={70}
                    height={70}
                    alt="logo"
                />
                {/* <h1>Hegazi</h1> */}
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/people">
                <a>List of People</a>
            </Link>
        </nav>
    );
};

export default Navbar;

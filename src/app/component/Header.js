"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../data/links/header_links"
import "../css/header.css";
export default function Header() {
    return (
        <>
            <header
                className="navbar-section"
            >
                <nav className="nav-section">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white-500 sm:gap-5">
                        {
                            links.map((data) => {

                                return (
                                    <li className="li-name" ><Link href={data.hash}>{data.name}</Link></li>
                                )
                            })}
                    </ul>
                </nav>

            </header>
        </>
    );
}

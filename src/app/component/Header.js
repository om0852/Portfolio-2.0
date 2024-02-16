"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../data/links/header_links"
import "../css/header.css";
import { useRouter } from "next/router";
export default function Header() {
    return (
        <>
            <header
                className="navbar-section"
            >
                <nav className="nav-section">
                    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white-500 sm:gap-5">
                        {
                            links.map((data, index) => {

                                return (
                                    <li key={index} className="li-name" ><a href={data.hash}>{data.name}</a></li>
                                )
                            })}
                    </ul>
                </nav>

            </header>
        </>
    );
}

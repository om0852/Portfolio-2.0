"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "../data/links/header_links"
import "../css/header.css";
export default function Header() {
    return (
        <>
            <header className=" z-[999] relative">
                <motion.div

                    className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray border-opacity-40  bg-opacity-80 shadow-lg shadow-gray/[0.03]  backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-white/40 dark:bg-opacity-75 navbar-section "
                // initial={{ y: -100, x: "-50%", opacity: 0 }}
                // animate={{ y: 0, x: "-50%", opacity: 1 }}
                >
                    <nav className="flex fixed">
                        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white-500 sm:gap-5">
                            {
                                links.map((data) => {

                                    return (
                                        <li className="h-3/4 flex hover:text-antiquewhite-950 transition items-center justify-center"><Link className="flex w-full items-center justify-center px-3 py-3" href={data.hash}>{data.name}</Link></li>
                                    )
                                })}
                        </ul>
                    </nav>

                </motion.div>
            </header>
        </>
    );
}

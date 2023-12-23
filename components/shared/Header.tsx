'use client'

import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {NavItems} from "@/components/shared/NavItems";
import {MobileNav} from "@/components/shared/MobileNav";

import "@cortex-js/compute-engine";
import {MathfieldElement} from "mathlive";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}

export const Header = () => {
    const ce = MathfieldElement.computeEngine;
    return (
        <header className={"w-full border-b"}>
            <div className={"wrapper flex items-center justify-between"}>
                <Link href={"/"} className={"w-36"}>
                    <Image src={"/assets/icons/logo.svg"} width={38} height={38} alt={"Logo"}/>
                </Link>
                <math-field></math-field>

                <SignedIn>
                    <nav className={"md:flex-between hidden w-full max-w-xs"}>
                        <NavItems />
                    </nav>
                </SignedIn>

                <div className={"flex w-32 justify-end gap-3"}>
                    <SignedIn>
                        <UserButton afterSignOutUrl={"/"} />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild={true} className={"rounded-full"} size={"lg"}>
                            <Link href={"/sign-in"}>Login</Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

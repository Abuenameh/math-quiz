import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {NavItems} from "@/components/shared/NavItems";

export const MobileNav = () => {
    return (
        <nav className={"md:hidden"}>
            <Sheet>
                <SheetTrigger className={"align-middle"}>
                    <Image src={"https://raw.githubusercontent.com/adrianhajdin/event_platform/main/public/assets/icons/menu.svg"} alt={"menu"} width={24} height={24} className={"cursor-pointer"}/>
                </SheetTrigger>
                <SheetContent className={"flex flex-col gap-6 bg-white md:hidden"}>
                    <Image src={"https://raw.githubusercontent.com/gilbarbara/logos/main/logos/nextjs-icon.svg"} alt={"logo"} width={38} height={38} />
                    <Separator className={"border border-gray-50"} />
<NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    );
};

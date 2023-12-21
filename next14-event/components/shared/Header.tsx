import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
// import NavItems from "./NavItems"
// import MobileNav from "./MobileNav"

export const Header = () => {
  return (
    <header className="w-full border-b">
      <nav
        className="wrapper flex items-center justify-between"
        aria-label="Global"
      >
        <Link href={"/"} className="w-36">
          <Image
            src="../../public/vercel.svg"
            width={128}
            height={38}
            alt="LOGO"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            {/* <MobileNav /> */}
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
        <div>Login</div>
      </nav>
    </header>
  );
};

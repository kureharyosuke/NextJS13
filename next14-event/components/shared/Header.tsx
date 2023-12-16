import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image
            src="../../public/vercel.svg"
            width={128}
            height={38}
            alt="LOGO"
          />
        </Link>
        <div>Login</div>
      </div>
    </header>
  );
};

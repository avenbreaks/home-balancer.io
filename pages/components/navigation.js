import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex pt-6 p-6 bg-gray-100 w-screen justify-center sticky top-0 z-50">
            <div className="flex space-x-12 text-xl items-center		  ">
                <Link href="">
                    <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
                        Wallet
                    </a>
                </Link>

                <Link href="https://discord.gg/V7j9MEuK8h">
                    <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
                        Discord
                    </a>
                </Link>
                <div>
                    <Image src="/Balance.svg" alt="balance" width="60" height="60" className="" />
                </div>
                <Link href="">
                    <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
                        Developers
                    </a>
                </Link>

                <Link href="">
                    <a className="link link-underline link-underline-black text-black hover:text-slate-700 duration-300" target="_blank">
                        Store
                    </a>
                </Link>
            </div>
        </div>
    );
}
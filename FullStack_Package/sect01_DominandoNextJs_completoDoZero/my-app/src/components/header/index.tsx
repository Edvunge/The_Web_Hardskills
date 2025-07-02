import Link from "next/link";

export function Header() {
    return (
        <header>
            <div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/posts">
                                Posts
                            </Link>
                        </li>

                        <li>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
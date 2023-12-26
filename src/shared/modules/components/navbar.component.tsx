import Link from 'next/link';

export function Navbar() {
  return (
    <header className="h-16 bg-zinc-950 px-4 py-1">
      <div className="navbar-content-grid mx-auto grid h-full w-full max-w-5xl items-center gap-2">
        <div className="navbar-logo h-full">
          <Link
            href="/"
            className="inline-flex h-full items-center rounded-sm p-1 outline-1 transition-colors hover:outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span className="text-2xl font-black tracking-tight text-green-400">
              Storesy
            </span>
          </Link>
        </div>
        <div className="navbar-search">
          <form className="">
            <input type="text" placeholder="Search" className="w-full" />
          </form>
        </div>
        <nav className="navbar-nav bg-blue-200">
          <Link href="/signin">Sign in</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

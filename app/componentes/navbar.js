import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-preto py-4 w-full flex justify-around">
      <div className="text-lg">
        <Link href="/">Jónatas Roque</Link>
      </div>
      <div className="flex justify-between">
        <div className="mx-4">
          <Link href="/ex1">Ex1</Link>
        </div>
        <div className="mx-4"><Link href="/ex2">Ex2</Link></div>
        <div className="mx-4"><Link href="/ex3">Ex3</Link></div>
        <div className="mx-4"><Link href="/ex4?page=1">Ex4</Link></div>
      </div>
    </nav>
  );
};
export default Navbar;
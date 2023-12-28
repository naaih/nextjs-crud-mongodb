import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-swhite px-8 py-3">
      <Link className="text-black font-bold" href={"/"}>
        CRUD
      </Link>
      <Link className="text-black border p-2" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}

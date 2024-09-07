import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full z-[3000]">
      <div className="container mx-auto flex items-center justify-between gap-4 relative">
        <div className="absolute z-[3000] left-0 top-0 w-full flex items-center justify-center gap-4 text-white p-3 ">
          <Link
            href="/"
            className="p-3 hover:bg-slate-400 rounded-md hover:text-black transition-all duration-300"
          >
            Characters List
          </Link>
          <Link
            href="/location"
            className="p-3 hover:bg-slate-400 rounded-md hover:text-black transition-all duration-300"
          >
            Character By Location
          </Link>
          <Link
            href="/all_character"
            className="p-3 hover:bg-slate-400 rounded-md hover:text-black transition-all duration-300"
          >
            All Character
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

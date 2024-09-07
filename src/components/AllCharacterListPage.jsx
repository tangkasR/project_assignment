import React from "react";
import Image from "next/image";
import Link from "next/link";
const AllCharacterListPage = (props) => {
  const { results } = props;
  return (
    <div className="pt-20 pb-6 px-6 bg-slate-800">
      <h1 className="mb-6 text-white text-[20px] font-bold">All Character</h1>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
        {results.length > 0 ? (
          results.map((data) => (
            <Link href={`/${data.id}`} className="relative group" key={data.id}>
              <Image
                src={`${data.image}`}
                width={1000}
                height={1000}
                alt="foto"
                className="rounded-md"
              ></Image>
              <div className="text-center px-6  w-full h-fit absolute bottom-0 transition-all duration-300 group-hover:bottom-2 left-0  opacity-0 group-hover:opacity-100">
                <h1 className="text-sm md:text-lg text-white group-hover:bg-slate-700 px-6 py-2 rounded-full transition-all duration-300">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default AllCharacterListPage;

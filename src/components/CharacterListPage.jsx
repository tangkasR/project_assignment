import React from "react";
import Link from "next/link";
import Image from "next/image";
const CharacterListPage = (props) => {
  const { results } = props;
  const { allResults } = props;
  return (
    <div className="relative overflow-hidden max-h-screen ">
      <div className="absolute top-28 text-center w-full z-50">
        <h1 className="text-[30px] z-50 font-bold text-white">
          List of Characters
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {results.length > 0 &&
          results.map((data, index) => (
            <Link
              href={`/${data.id}`}
              key={data.id}
              className={`${
                index % 2 == 0 ? "justify-end" : "justify-start"
              }  group flex items-start mt-[90px] min-h-[70vh]  md:min-h-[65vh] `}
            >
              <div
                className={`${
                  index % 2 == 0 ? "justify-end" : "justify-start"
                } z-50 flex items-start mt-[90px]  w-fit h-fit group-hover:w-full group-hover:h-full cursor-pointer `}
              >
                <div
                  className={`z-50 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-md bg-cover bg-center group-hover:w-[120px] group-hover:h-[120px] md:group-hover:w-[250px] md:group-hover:h-[250px] transition-all duration-300`}
                  style={{ backgroundImage: `url('${data.image}')` }}
                ></div>
              </div>
              <div
                className={`${
                  index % 2 === 0
                    ? "group-hover:bg-red-900"
                    : "group-hover:bg-blue-900"
                } -z-[300] top-0 left-0 absolute w-full h-screen transition-all duration-300 bg-red-900`}
              ></div>
            </Link>
          ))}
      </div>
      <div
        className="relative group transition-all duration-300"
        style={{ zIndex: 2000 }}
      >
        <div className="w-full h-full text-center group-hover:absolute bottom-0 group-hover:z-50 bg-transparent group-hover:bg-[#000000b7] cursor-pointer transition-all duration-300">
          {/* <div className="w-full h-full flex items-start justify-center py-10">
          </div> */}
          <Link
            href={"/all_character"}
            className="transition-all duration-300 w-full text-center opacity-0 group-hover:opacity-100 text-white font-semibold text-[20px]"
          >
            <p className="mt-10">Selengkapnya</p>
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-4 p-6 transition-all duration-300">
          {allResults &&
            allResults.map((data) => {
              return (
                <div className="" key={data.id}>
                  <Image
                    src={`${data.image}`}
                    width={1000}
                    height={1000}
                    alt="foto"
                    className="rounded-md"
                  ></Image>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CharacterListPage;

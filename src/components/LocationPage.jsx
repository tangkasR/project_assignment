import { useRecoilValue } from "recoil";
import { locationState } from "../recoil/LocationAtom";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const LocationPage = () => {
  const locations = useRecoilValue(locationState);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return <div className="bg-slate-900"></div>;
  }
  const handleLocationClick = (locationName) => {
    setSelectedLocation(locationName);
  };
  return (
    <div className="bg-slate-900 text-white min-h-screen p-6 text-center pt-28">
      <h2 className="text-[30px]">Character by Location</h2>
      {Object.keys(locations).length === 0 ? (
        <p>No Location</p>
      ) : (
        <div className="mt-6">
          <div className="flex justify-center items-center gap-4">
            {Object.keys(locations).map((locationName) => (
              <button
                className="capitalize px-8 text-sm py-2 rounded-full bg-slate-600 hover:bg-slate-700 text-white font-semibold"
                key={locationName}
                onClick={() => handleLocationClick(locationName)}
              >
                {locationName}
              </button>
            ))}
          </div>
          {selectedLocation && (
            <div className="grid md:grid-cols-6 grid-cols-2 md:gap-4 gap-2 mt-6">
              {locations[selectedLocation].map((data) => (
                <Link
                  href={`/${data.id}`}
                  className="relative group"
                  key={data.id}
                >
                  <Image
                    src={`${data.image}`}
                    width={1000}
                    height={1000}
                    alt="foto"
                    className="rounded-md"
                  ></Image>
                  <div className="text-center px-6  w-full h-fit absolute bottom-0 transition-all duration-300 group-hover:bottom-2 left-0  opacity-0 group-hover:opacity-100">
                    <h1 className="text-sm md:text-lg group-hover:bg-slate-700 px-6 py-2 rounded-full transition-all duration-300">
                      {data.name}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationPage;

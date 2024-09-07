import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  locationState,
  assignCharacterToLocation,
} from "../recoil/LocationAtom";

const DetailPage = (props) => {
  const { id } = props.id;
  const [data, setData] = useState({});
  const [locations, setLocations] = useRecoilState(locationState);
  const [newLocation, setNewLocation] = useState("");

  const handleAssignLocation = () => {
    if (newLocation) {
      assignCharacterToLocation(locations, setLocations, data, newLocation);
      setNewLocation("");
      window.location.reload();
    }
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div className="bg-slate-900  text-white md:p-0 p-6 md:pt-0 pt-28">
      <div className="flex items-center justify-center gap-4 min-h-screen md:flex-row flex-col">
        <div className="flex-1 flex items-center justify-end">
          <Image
            width={400}
            height={400}
            alt="Image"
            src={data.image || "/default-img.png"}
            priority
            className="rounded-md"
          ></Image>
        </div>
        <div className="flex-1">
          <h1 className="text-[40px] mb-6"> {data.name}</h1>
          <h1 className="mb-3">
            Status:{" "}
            <span className="px-3 py-1 rounded-full bg-green-800">
              {data.status}
            </span>
          </h1>
          <h1 className="mb-3">
            Species:{" "}
            <span className="px-3 py-1 rounded-full bg-slate-600">
              {data.species}
            </span>
          </h1>
          <h1 className="mb-3">Type: {data.type == "" ? "N/A" : data.type}</h1>
          <h1 className="mb-3">Gender: {data.gender}</h1>
          {data.origin && <h1 className="mb-3">Origin: {data.origin.name}</h1>}
          <div className="mb-3">
            <h3>
              Assigned Locations:
              {Object.keys(locations).map((location) =>
                locations[location].some((char) => char.id === data.id) ? (
                  <span key={location}> {location}</span>
                ) : null
              )}
            </h3>
          </div>
          {data.episode && (
            <h1 className="mb-3">Episodes: {data.episode.length} episode</h1>
          )}
          <div>
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              placeholder="Masukkan nama lokasi"
              className="text-white px-3 py-1 bg-slate-900 rounded-md border border-slate-600"
            />
            <button
              className="ms-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-md"
              onClick={handleAssignLocation}
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

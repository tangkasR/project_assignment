import { atom } from "recoil";

const loadLocations = () => {
  if (typeof window !== "undefined") {
    const savedLocations = localStorage.getItem("locations");
    return savedLocations ? JSON.parse(savedLocations) : {};
  }
  return {};
};

export const locationState = atom({
  key: "locationState",
  default: loadLocations(),
  effects_UNSTABLE: [
    ({ onSet }) => {
      if (typeof window !== "undefined") {
        onSet((newLocations) => {
          localStorage.setItem("locations", JSON.stringify(newLocations));
        });
      }
    },
  ],
});

export const assignCharacterToLocation = (
  locations,
  setLocations,
  character,
  newLocation
) => {
  const updatedLocations = { ...locations };

  Object.keys(updatedLocations).forEach((location) => {
    updatedLocations[location] = updatedLocations[location].filter(
      (char) => char.id !== character.id
    );
    if (updatedLocations[location].length === 0) {
      delete updatedLocations[location];
    }
  });

  if (!updatedLocations[newLocation]) {
    updatedLocations[newLocation] = [];
  }

  updatedLocations[newLocation].push(character);
  setLocations(updatedLocations);
};

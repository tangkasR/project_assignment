import CharacterListPage from "@/components/CharacterListPage";
async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "force-cache",
    next: {
      revalidate: 3600,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Home() {
  const datas = await getData();
  const targetNames = ["Rick Sanchez", "Morty Smith"];
  const results = datas.results.filter((data) =>
    targetNames.includes(data.name)
  );
  const allResults = datas.results.filter((data, index) => index < 6);
  return (
    <>
      <CharacterListPage results={results} allResults={allResults} />
    </>
  );
}

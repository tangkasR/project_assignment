import AllCharacterListPage from "@/components/AllCharacterListPage";
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
export default async function page() {
  const datas = await getData();
  const results = datas.results;
  return (
    <>
      <AllCharacterListPage results={results} />
    </>
  );
}

import { useSearchParams } from "react-router"

export default function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchValue(shortValue: string) {
    // mengganti search params `short` menjadi `price-asc`
    searchParams.set('short',shortValue);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>short : {searchParams.get('short')}</li>
        <li>name : {searchParams.get('name')}</li>
      </ul>
      <div style={{display: "flex", flexDirection: "row", gap: "15px"}}>
      <button onClick={() => handleSearchValue('price-desc')}>Short Price desc</button>
      <button onClick={() => handleSearchValue('price-asc')}>Short Price asc</button>
      <button onClick={() => handleSearchValue('popular')}>Short most popular</button>
      </div>
    </div>
  )
}
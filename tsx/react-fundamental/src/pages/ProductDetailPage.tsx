import { useParams } from "react-router"

export default function ProductDetailPage() {
  const params = useParams<{slug: string}>();

  return (
    <div>
      <h1>Product Detail Page</h1>
      {/* untuk mengambil nilai dari path nya */}
      <h3>{params.slug}</h3>
    </div>
  )
}
import { areas } from "./src/data/areas";
import { AreaCard } from "./src/components/AreaCard";

export default function Page() {
  return (
    <main>
      <h1>エリア一覧</h1>
      <div className="area-list">
        {areas.map((area) => (
          <AreaCard key={area.id} area={area} />
        ))}
      </div>
    </main>
  )
}
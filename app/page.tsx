import { areas } from "./src/data/areas";

export default function Page() {
  return (
    <main>
      <h1>エリア一覧</h1>
      <div className="area-list">
        {areas.map((area) => (

          <div key={area.id} className="area-card">

            <h2 className="are-name">{area.name}</h2>

            <div className="area-rent">
              <p>家賃: {area.rentMin} ~ {area.rentMax}</p>
            </div>

            <p className="area-comment">{area.comment}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
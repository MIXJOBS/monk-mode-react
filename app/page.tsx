import { areas } from "./src/data/areas";

export default function Page() {
  return (
    <main>
      <h1>エリア一覧</h1>
      <ul>
        {areas.map(area => (
          <li key={area.id}>
            <h2>{area.name}</h2>
            <p>家賃上限: {area.rentMax}</p>
            <p>家賃下限: {area.rentMin}</p>
            <p>{area.comment}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
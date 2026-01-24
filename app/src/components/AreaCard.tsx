import { Area } from "../types/area"

type Props = {
  area: Area;
}

export const AreaCard = ({ area }: Props) => {
  return (
    <div className="area-card">
      <h2 className="area-name">{area.name}</h2>

      <div className="area-rent">
        <p>家賃: {area.rentMin} ~ {area.rentMax}</p>
      </div>

      <p className="area-comment">{area.comment}</p>
    </div>
  )
}
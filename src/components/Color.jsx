import StarRating from "./StarRating";
import { useColors } from "../hooks/useColors";

function Color({id, name, hex, rating}) {

  const  { rateColor, removeColor } = useColors();

  return (
    <div className="color">
      <h4 className="py-2 font-semibold">{name}</h4>
      <div className="color-box" style={{backgroundColor: hex, width: "128px", height: "128px"}} onClick={() => removeColor(id)}></div>
      <StarRating selectedStars={rating} onRate={rating => rateColor(id, rating)} />
    </div>
  );
}

export default Color;

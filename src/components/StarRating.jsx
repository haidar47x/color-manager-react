import Star from "./Star.jsx";

const createStars = (len) => [...Array(len)];

function StarRating({ selectedStars = 0, totalStars = 5, onRate= f => f}) {

  return (
    <section className="star-rating">
      <div className="star-container flex pt-2">
        {createStars(totalStars).map((n, i) => {
          return (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => onRate(i + 1)}
            />
          );
        })}
      </div>
      <p>
        {selectedStars} out of {totalStars}
      </p>
    </section>
  );
}

export default StarRating;

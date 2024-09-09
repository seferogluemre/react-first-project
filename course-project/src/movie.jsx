import "./css/movie.css";

function movie({ movie }) {
  console.log(movie);
  const { title, description, imageSource, price } = movie;

  return (
    <>
      <div className="card">
        <img src={imageSource}></img>
        <div className="card-body">
          <h4>{title}</h4>
          <h6>{description}</h6>
          <h3>
            Ürün Fiyatı: <span className="priceText">{price}Tl₺</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default movie;

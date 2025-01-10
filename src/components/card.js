import "../App.css";
const Card = ({ info, onHover, onOut }) => {
  const hoverHandler = (bg) => {
    if (onHover) {
      onHover(bg);
    }
  };
  const outHandler = () => {
    if (onOut) {
      onOut();
    }
  };
  return (
    <>
      {info?.map((data, index) => {
        const addMargin = data.id >= 5 && data.id <= 8 ? "my-5" : "";
        return (
          <div className={`col-3 ${addMargin}`}>
            <div
              className="card card2 "
              onMouseOver={() => hoverHandler(data.bg)}
              onMouseOut={outHandler}
              key={index}
            >
              <div className="card-wrap">
                <img
                  src={data.img}
                  className="card-img-top card-img2"
                  alt={data.title}
                  height="450"
                  width="330"
                />
                <div className="hover-content">
                  <div className="hover-text">
                    <p>
                      Journey into an enchanted world of Arendelle with the
                      frozen Surprise Gift Bag{" "}
                    </p>
                    <button className="btn hover-button border border-2">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="overlay"></div>
              </div>
              <div className="card-body px-0 pt-1 text-start">
                <h3 className="card-text card-text2">{data.title}</h3>
                <div className="card-price">₹{data.price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;

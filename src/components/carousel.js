import prev from "../images/prev.png";
import next from "../images/next.png";
const Carousel = ({ image, text }) => {
  return (
    <>
      <div
        id="carouselExampleControls1"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {image.map((data, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div
                className="carousel-outer text-light row"
                style={{
                  background: `linear-gradient(to top right, rgba(255, 255, 255, 0.9), transparent), url(${data.img1})`,
                }}
              >
                <div className="carousel-body my-auto col-6">
                  <span className="carousel-span">Introduction</span>
                  <h1 className="carousel-head">{data.heading}</h1>
                  <p className="carousel-content">{data.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev carousel-control-prev1"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}
          <span className="prev-icon fw-bold">
            <img className="prev1" src={prev} alt="prev" />
          </span>
        </button>
        <button
          className="carousel-control-next carousel-control-next1"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="next"
        >
          {/* <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          <span className="next-icon">
            <img className="prev1" src={next} alt="next" />
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

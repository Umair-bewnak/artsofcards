import "../App.css";
// import img1 from "../images/sgb1 1.png";

const Categories = ({image,title,content,alt}) => {
  return (
    <>
      <div className="card card1" >
        <img src={image} className="card-img-top card-img1" height="460" width="460" alt={alt} />
        <div className="card-body">
          <h3 className="card-title card-title1"> {title}</h3>
          <p className="card-text card-text1">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Categories;

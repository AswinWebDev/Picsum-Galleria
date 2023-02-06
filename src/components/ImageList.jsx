import "./ImageList.css";
const ImageList = ({ jsonData }) => {
  const renderedItem = jsonData.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.download_url} alt="Image picture"></img>
      </div>
    );
  });
  return <div className="image-list mx-2 mt-5">{renderedItem}</div>;
};

export default ImageList;

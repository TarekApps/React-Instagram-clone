import { useState, useEffect } from "react";

const Pictures = () => {
  const [displayImage, setDisplayImage] = useState([]);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setDisplayImage(data);
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <div>
      {displayImage.map((item) => {
        return (
          <div>
            <h2>{item.author}</h2>
            <img src={item.download_url} />
          </div>
        );
      })}
    </div>
  );
};

export default Pictures;

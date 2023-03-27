import React from "react";
// css at home.css
function WorksCard({image,name,comment}) {
  return (
    <div className="works-card">
      <div className="works-card-thumb">
        <img src={image} alt=""  />
      </div>
      <div className="work-card-bottom">

      <div className="works-card-title">
        <h4>{name}</h4>
      </div>
      <div className="works-card-info">
        <p>
          Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna
          dictum porta. Donec rutrum congue leo eget malesuada. Nulla quis lorem
          ut libero malesuada feugiat. Vivamus suscipit tortor eget felis
          porttitor volutpat.
          dictum porta. Donec rutrum congue leo eget malesuada. Nulla quis lorem
          ut libero malesuada feugiat. Vivamus suscipit tortor eget felis
          porttitor volutpat.
          
        </p>
      </div>
      </div>
    </div>
  );
}

export default WorksCard;

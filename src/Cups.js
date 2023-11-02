import React from "react";

function Cups(props) {
  return (
    <div className="Cups">
      {props.CupsItems.map((CupsItem, index) => (
        <div key={index}>
          <img className="cups" src={CupsItem.cup} alt="" />

          {CupsItem.leaf ? (
            <img className="leaf1" src={CupsItem.leaf} alt="" />
          ) : (
            <img className="leaf2" src={CupsItem.leaf2} alt="" />
          )}
          <img className="lanS" src={CupsItem.lan} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Cups;

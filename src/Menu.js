import React from "react";

function Menu(props) {
  return (
    <div className="Containers">
      {props.menuItems.map((menuItem, index) => (
        <div key={index}>
          <div className="Containers_a" style={props.githubStyle}>
            <a href={menuItem.github}>
              <i className="fab fa-github"></i>
            </a>
          </div>
          <img
            className="imgStyle"
            style={menuItem.imgStyle}
            src={menuItem.img}
            alt=""
          />
          <img className="Cards" src={menuItem.card} alt="" />
          <p
            className="par"
            style={menuItem.textStyles}
            dangerouslySetInnerHTML={{ __html: menuItem.text }}
          ></p>
        </div>
      ))}
    </div>
  );
}

export default Menu;

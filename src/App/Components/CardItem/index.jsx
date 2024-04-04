import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="py-16 bg-white">
        <Link className="text-center" to={props.path}>
          <figure
            className="flex flex-col w-full shadow-lg filter drop-shadow-lg rounded overflow-hidden no-underline"
            data-category={props.label}
          >
            <img
              className="absolute top-0 right-0 bottom-0 left-0 block w-full max-w-full h-full max-h-full object-cover transition-all duration-200 hover:scale-110"
              alt="Travel Image"
              src={props.src}
            />
            <div className="content__blog__container">
              <h5 className="px-8 py-12 text-blue-900 text-lg leading-6">
                {props.text}
              </h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

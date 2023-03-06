import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";

function Cards(props) {
  return (
    <>
      {props.type === "primary" ? (
        <Primary header={props.header} body={props.body}/>
      ) : (
        <Secondary header={props.header} body={props.body}/>
      )}
    </>
  );
}

export default Cards;

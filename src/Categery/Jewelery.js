import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Appbar from "../Navbar";
function Jewelery() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div>
        {" "}
        <Appbar />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "50px",
        }}
      >
        {content.map((arr) => {
          return (
            <div>
              <Card style={{ width: "20rem", height: "85%" }}>
                <Card.Img
                  variant="top"
                  src={arr.image}
                  style={{ width: "100%", height: "78%" }}
                />
                <Card.Body>
                  <h6>{arr.title}</h6>
                  <Card.Text>
                    <h4> {arr.price}$ </h4>
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Jewelery;

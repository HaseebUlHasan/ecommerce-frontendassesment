import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Appbar from "./Navbar";

function Product() {
  const [content, setContent] = useState([]);
  const [searchItem, setsearchItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=asc")
      .then((res) => res.json())
      .then((res) => {
        setContent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/?&query=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "serach");
        setTimeout(() => {
          setContent(data);
        }, 1000);

        return () => {     
          clearTimeout();
        };
      });
  }, [searchItem]);

  return (
    <div>
      <div>
        {" "}
        <Appbar searchItem={searchItem} setsearchItem={setsearchItem} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "50px",
        }}
      >
        <>
          {content &&
            content.length > 0 &&
            content
              .filter((arr) => {
                if (searchItem === "") {
                  return arr;
                } else if (
                  arr.title
                    .toString()
                    .toLowerCase()
                    .includes(searchItem.toString().toLowerCase())
                ) {
                  return arr;
                }
              })
              .map((arr) => {
                return (
                  <div key={arr.id}>
                    <Card style={{ width: "20rem", height: "80%" }}>
                      <Card.Img
                        variant="top"
                        src={arr.image}
                        style={{ width: "100%", height: "70%" }}
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
        </>
      </div>
    </div>
  );
}

export default Product;

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import { FormControl } from "react-bootstrap";

function Appbar({ searchItem, setsearchItem }) {
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/"> Frontend Assessment </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/"> All Products </Nav.Link>
                <Nav.Link href="/jewelery"> Jewelery </Nav.Link>
                <Nav.Link href="/men"> Men's Clothing </Nav.Link>
                <Nav.Link href="/woman"> Women's Clothing </Nav.Link>
                <Nav.Link href="/electronics"> Electronics </Nav.Link>
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchItem}
                  onChange={(e) => setsearchItem(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  );
}

export default Appbar;

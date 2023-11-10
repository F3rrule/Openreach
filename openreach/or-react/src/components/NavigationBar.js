import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from '../images/OR_logo.jpg'

function NavigationBar() {
  return (
    <div>
      <Navbar
        bg="navbarColour"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Container>
        <Navbar.Brand href="/home">
            <img
              alt=""
              src={logo}
              width="50px"
              height="50px"
            className="d-inline-block align-middle"
          />{" "}
          <b>PON Management Software</b>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="dependency">Dependency</Nav.Link>
            <Nav.Link href="dfe">DFE</Nav.Link>
            <Nav.Link href="pon_manager">Pon Manager</Nav.Link>
            <Nav.Link href="glide">Glide</Nav.Link>
            <Nav.Link href="poles_civils">Pole & Civils</Nav.Link>
            <Nav.Link href="estimate_search">Estimate Search</Nav.Link>
            <Nav.Link href="miss_estimates">Missing Estimates</Nav.Link>
            <NavDropdown title="Useful Links">
              <NavDropdown.Item href="https://openreach.office1.bt.com/sites/CESouthWales/Shared%20Documents/Forms/AllItems.aspx"target="_blank">
                CE South Wales Repository{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://orwfmt.nat.bt.com:8890/ngwfmt/NGA2"target="_blank">
                WFMT{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://openreach.office1.bt.com/sites/RuralBuild/SitePages/Home.aspx"target="_blank">
                Rural Planning Portal{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.formwize.openreach.co.uk/run/survey3.cfm?idx=505d04080b0f0a0f"target="_blank">
                Commissioning Portal{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://btgroupcloud-my.sharepoint.com/personal/rajesh_or-ops-bot4_openreach_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frajesh%5For%2Dops%2Dbot4%5Fopenreach%5Fco%5Fuk%2FDocuments%2FCE%20Commissioning&OR=Teams%2DHL&CT=1669985735177&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D"target="_blank">
                Commissioning OneDrive{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="h_S">Health & saftey</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

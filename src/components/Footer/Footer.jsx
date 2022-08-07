import React from "react";
import { RiPantoneLine } from "react-icons/ri";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BsFacebook,BsInstagram,BsLinkedin,BsTwitter } from "react-icons/bs";
import "./Footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
            <RiPantoneLine color='teal'/> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <BsFacebook color='teal'/>
                </a>
              </span>

              <span>
                {" "}
                <a href="instagram.com">
                <BsInstagram color='teal'/>
                </a>
              </span>

              <span>
                {" "}
                <a href="linkedin.com">
                <BsLinkedin color='teal'/>
                </a>
              </span>

              <span>
                {" "}
                <a href="twitter.com">
                <BsTwitter color='teal'/>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Feni, Bangladesh</p>
            <p> Phone: +88 01878586303 </p>
            <p>Email: mujahidul548@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

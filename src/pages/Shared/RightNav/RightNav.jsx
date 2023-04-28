import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>{" "}
      <Button variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>{" "}
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img className="img-fluid" src={bg} alt="" />
        <div  className="position-absolute top-0 p-4 text-white text-center">
        <h2>Create an Amazing Newspaper</h2>
        <p className="my-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button className="btn-danger">Learn More</Button>
        </div>
       
      </div>
    </div>
  );
};

export default RightNav;

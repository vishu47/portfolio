import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vishnu Maurya</span>{" "}
            from <span className="purple">Noida, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Sr.Software Developer</span> at{" "}
            <span className="purple">Tech Mahindra</span>.
            <br />I hold an Bachelor of Technology(B.Tech) in{" "}
            <span className="purple">Electronics and Communication Engineering</span> from{" "}
            <span className="purple">Galgotias University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishnu Maurya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

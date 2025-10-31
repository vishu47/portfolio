import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import doctorji from "../../Assets/Projects/doctorji.png";
import biot from "../../Assets/Projects/biot.png";
import visiboo from "../../Assets/Projects/visiboo.png";
import agentapp from "../../Assets/Projects/agentapp.png";
import rateus from "../../Assets/Projects/rateus.png";
import rateus_seller from "../../Assets/Projects/rateus_seller.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctorji}
              isBlog={false}
              title="Biot Dashboard"
              description="Personal vertual Therapist only for you that hat Talk, reflect, and grow with a caring digital companion that remembers you and supports your mental well-being."
              ghLink=""
              demoLink="https://doctorji.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              mobile={true}
              imgPath={biot}
              isBlog={false}
              title="BIOT-CareLab"
              description="Personal AI Therapist — a chatbot application where you can share your thoughts and concerns related to psychological therapy, and receive personalized, supportive responses."
            demoLink="https://play.google.com/store/apps/details?id=com.biot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visiboo}
              isBlog={false}
              title="Visiboo Agent Dashboard"
              description="Visiboo Agent Dashboard — a platform that allows agents to register, create unique IDs or referral codes, onboard customers, and earn loyalty points and rewards that can be redeemed for exclusive benefits."
            // ghLink=""
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              mobile={true}
              imgPath={agentapp}
              isBlog={false}
              title="Visiboo Agent App"
              description="Visiboo Agent Dashboard — a platform that allows agents to register, create unique IDs or referral codes, onboard customers, and earn loyalty points and rewards that can be redeemed for exclusive benefits."
            // ghLink=""
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              mobile={true}
              imgPath={rateus}
              isBlog={false}
              title="Visiboo Customer"
              description="A Mobile app which will deal with loyalty points for customer and seller. Scan UPI QR code and based on the service provided you can provide feedback and in return you will get Loayualty rewards points for your next visit."
            // ghLink=""
            // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              mobile={true}
              imgPath={rateus_seller}
              isBlog={false}
              title="Visiboo Seller"
              description="A Mobile app which will deal with loyalty points for customer and seller. Scan UPI QR code and based on the service provided you can provide feedback and in return you will get Loayualty rewards points for your next visit."
            // ghLink=""
            // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

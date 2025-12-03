import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elt from "../../Assets/Projects/etl_pipeline.png";
import rag from "../../Assets/Projects/rag.jpg";
import telecom from "../../Assets/Projects/telecom_analysis.png";
import signal from "../../Assets/Projects/signal.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#854825ff" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elt}
              isBlog={false}
              title="data pipline of customer reviews of bank agencies"
              description="Developed a full-stack data pipeline to analyze Google Maps reviews using a modern data stack.
Scraped location-based reviews with Places API; enriched data using Hugging Face pretrained NLP models for sentiment and topic extraction.
Built a star schema using DBT and stored data in PostgreSQL.
Connected the data warehouse to Looker Studio for interactive dashboarding and branch performance analysis.
Orchestrated the entire ETL process using Apache Airflow for automation and reliability."
              ghLink="https://github.com/IzeriaAbdellatif/Customer-Reviews-of-Bank-Agencies-in-Morocco"
              demoLink="https://lookerstudio.google.com/reporting/a391b1ac-d8ac-4d24-8773-7ec4c162b78a"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telecom}
              isBlog={false}
              title="machine learning model for telecom churn prediction"
              description="develop a classification model capable of predicting whether a customer is likely to cancel their subscription, based on their past behavior and characteristics."
              ghLink="https://github.com/IzeriaAbdellatif/Telecom-Churn-prediction-using-machine-Learning"
              demoLink="https://drive.google.com/file/d/1qUgWgNV--pCF3iwoNt8Md3ba8wHqktrH/view?usp=sharing"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="AI Chatbot for Civil Engineering Data Retrieval"
              description="an intelligent chatbot capable of automatically answering questions related to data specific to the field of civil engineering. The system is connected to a database or a set of technical documents (plans, reports, standards, etc.) and allows users (engineers, technicians, students, etc.) to quickly access relevant information via an intuitive conversational interface"
              demoLink="https://drive.google.com/file/d/1-PV4zDaxNQK4ieXdgvrpIZ3eh1ks3y8X/view?usp=sharing"
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signal}
              isBlog={false}
              title="Signal processing model for audio anonymisation"
              description="build a solution for audio anonymisation and tone of voice masking, utilising advanced signal processing techniques such as time stretching, pitch shifting, noise addition, and frequency filtering. This method aims to preserve audio information while effectively concealing the identity of the audio owner. The efficacy of the proposed solution is evaluated by calculating the EEC and WEC coefficients, providing a quantitative assessment of the quality of the anonymisation. "
              demoLink="https://drive.google.com/drive/folders/1l9E0HcPcmB7dW5mzP0q13sgWEOy7YcfV?usp=sharing"
              ghLink="https://github.com/IzeriaAbdellatif/VPC25"
              />
          </Col>
          
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

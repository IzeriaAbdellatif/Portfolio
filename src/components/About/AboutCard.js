import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: "bold", color: "#974620ff" }}>Salam alaykum</span>, I'm{" "}
            <span className="purple" style={{ fontWeight: "bold" }}>Abdellatif</span>, Moroccan <span style={{ fontWeight: "bold" }}>data science student</span>.<br />
            I love <span style={{ fontWeight: "bold" }}>authenticity</span> (<span style={{ color: "#984620ff" }}>religion, family, local food</span>) and <span style={{ fontWeight: "bold" }}>modernity</span> (<span style={{ color: "#C75D2C" }}>digitalisation, cars, advanced technological solutions</span>).
            <br /><br />
            I'm currently an <span style={{ fontWeight: "bold" }}>engineering student</span>, seeking new opportunities like <span style={{ fontWeight: "bold" }}>internships</span> and <span style={{ fontWeight: "bold" }}>freelance projects</span>.
            <br /><br />
            <span style={{ fontWeight: "bold" }}>Professional skills:</span>
            <ul>
              <li className="about-activity"><ImPointRight /> Building dashboards</li>
              <li className="about-activity"><ImPointRight /> Creating pipelines</li>
              <li className="about-activity"><ImPointRight /> Constructing machine learning models</li>
              <li className="about-activity"><ImPointRight /> building AI agents</li>
              <li className="about-activity"><ImPointRight /> General knowledge of computer science</li>
            </ul>
            <br />
            I am, from time to time, an <span style={{ fontWeight: "bold" }}>active member on GitHub</span>, interested in fields like <span style={{ color: "#C75D2C" }}>physics</span> and <span style={{ color: "#C75D2C" }}>sport</span>.
          </p>
          
          <p style={{ color: "#C75D2C" }}>
            "إنَّ اللهَ تعالى يُحِبُّ إذا عمِلَ أحدُكمْ عملًا أنْ يُتقِنَهُ"
            <br />
            <span style={{ fontSize: "0.9em" }}>
              <strong>خلاصة حكم المحدث:</strong> حسن<br />
              <strong>الراوي:</strong> عائشة أم المؤمنين | <strong>المحدث:</strong> الألباني | <strong>المصدر:</strong> صحيح الجامع<br />
              <strong>الصفحة أو الرقم:</strong> 1880
            </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-5 font-weight-normal line-height-1_4">
                Aqui na{" "}
                <span className="text-danger font-weight-medium">
                  Saturno Informática
                </span>{" "}
                você encontra tudo que precisa pro seu computador ou escritório
              </h1>

              <ul className="text-muted mb-5 pb-2">
                <li>💻Notebooks, PCs, Periféricos</li>
                <li>👩‍💻Assistência Técnica</li>
                <li>🪑Móveis p/ escritório</li>
              </ul>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image
                src="/images/hero.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
                height={400}
                width={600}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;

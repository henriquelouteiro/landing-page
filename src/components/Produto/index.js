import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Image from "next/image";

const FeatureBox = (props) => {
  return (
    <Row className="produto-box">
      {props.features.map((feature, key) => (
        <Card key={key}>
          <CardBody>
            <CardTitle tag="h5">{feature.title}</CardTitle>
          </CardBody>
          <Image
            alt="Card image"
            src={feature.img}
            width={210}
            height={132}
            quality={100}
          />
        </Card>
      ))}
    </Row>
  );
};

const Feature = () => {
  const features = [
    {
      id: 1,
      img: "/images/produtos/hardware.png",
      title: "Hardware",
    },
    {
      id: 2,
      img: "/images/produtos/computadores.png",
      title: "Computadores",
    },
    {
      id: 3,
      img: "/images/produtos/gamer.png",
      title: "Gamer",
    },
    {
      id: 4,
      img: "/images/produtos/celular.png",
      title: "Celular & Smartphone",
    },
    {
      id: 5,
      img: "/images/produtos/perifericos.png",
      title: "Perifericos",
    },
    {
      id: 6,
      img: "/images/produtos/tablets.png",
      title: "Tablets",
    },
    {
      id: 7,
      img: "/images/produtos/tv.png",
      title: "TV",
    },
    {
      id: 8,
      img: "/images/produtos/escritorio.png",
      title: "Escritorio",
    },
  ];

  return (
    <section className="section" id="produtos">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-danger">Produtos</span>
              </h3>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};

export default Feature;

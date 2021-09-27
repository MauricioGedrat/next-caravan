import React from "react";
import Image from "next/image";
import GaleryImg1 from "../../assets/img/local/foto-1.jpg";
import GaleryImg2 from "../../assets/img/local/foto-2.jpg";
import GaleryImg3 from "../../assets/img/local/foto-3.jpg";
import GaleryImg4 from "../../assets/img/local/foto-4.jpg";
import GaleryImg5 from "../../assets/img/local/foto-5.jpg";
import GaleryImg6 from "../../assets/img/local/foto-6.jpg";
import GaleryImg7 from "../../assets/img/local/foto-7.jpg";
import Galery1Modal from "./Galery1Modal";

const Galery = () => {
  return (
    <div className="container">
      <div className="my-5 text-center">
        <span className="h6 d-block">O MELHOR DESTINO DA SUA VIAGEM</span>
        <h2 className="display-4 text-primary">Descubra Dublin</h2>
      </div>
      <div className="row text-center">
        <div className="col">
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg1} />

          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg2} />
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg3} />
        </div>
        <div className="col">
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg4} />
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg5} />
        </div>
        <div className="col">
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg6} />
          <Image className="img-fluid mb-4 GaleryImage" src={GaleryImg7} />
        </div>
      </div>
    </div>
  );
};

export default Galery;

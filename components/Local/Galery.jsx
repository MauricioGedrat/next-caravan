import React, { useState } from 'react'
import Image from 'next/image'
import GaleryImg1 from '../../assets/img/local/foto-1.jpg'
import GaleryImg2 from '../../assets/img/local/foto-2.jpg'
import GaleryImg3 from '../../assets/img/local/foto-3.jpg'
import GaleryImg4 from '../../assets/img/local/foto-4.jpg'
import GaleryImg5 from '../../assets/img/local/foto-5.jpg'
import GaleryImg6 from '../../assets/img/local/foto-6.jpg'
import GaleryImg7 from '../../assets/img/local/foto-7.jpg'
import ModalImages from '../Common/ModalImages'

const Galery = () => {
  const [show, setShow] = useState(false)
  const [imagemModal, setimagemModal] = useState()
  const onHide = () => {
    setShow(!show)
  }
  const openModal = (e) => {
    setimagemModal(e)
    setShow(true)
  }

  return (
    <div className="container">
      <div className="my-5 text-center">
        <span className="h6 d-block">O MELHOR DESTINO DA SUA VIAGEM</span>
        <h2 className="display-4 text-primary">Descubra Dublin</h2>
      </div>
      <div className="row text-center">
        <div className="col-md">
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg1}
            onClick={(e) => openModal(<Image src={GaleryImg1} alt="galery" />)}
          />

          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg2}
            onClick={(e) => openModal(<Image src={GaleryImg2} alt="galery" />)}
          />
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg3}
            onClick={(e) => openModal(<Image src={GaleryImg3} alt="galery" />)}
          />
        </div>
        <div className="col-md">
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg4}
            onClick={(e) => openModal(<Image src={GaleryImg4} alt="galery" />)}
          />
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg5}
            onClick={(e) => openModal(<Image src={GaleryImg5} alt="galery" />)}
          />
        </div>
        <div className="col-md">
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg6}
            onClick={(e) => openModal(<Image src={GaleryImg6} alt="galery" />)}
          />
          <Image
            alt="galery"
            className="img-fluid mb-4 GaleryImage"
            src={GaleryImg7}
            onClick={(e) => openModal(<Image src={GaleryImg7} alt="galery" />)}
          />
        </div>
      </div>

      <ModalImages show={show} onHide={onHide} Image={imagemModal} />
    </div>
  )
}

export default Galery

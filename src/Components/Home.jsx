import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Home.css'
// import { Link } from 'react-router-dom';

export default function Home() {

  const onButtonClick = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vijay's Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="home">
        <main>
          <div className="container1">
            <div className="row1 ">
              <Col className='mainTxt'>
                <p className='fs-1 slide-bottom'>Hi, My name is <br />
                  <span className='nameTxt slide-right-name'>Vijay Prajapati</span> <br />
                  <span className='slide-bottom'> I build things for web </span> <br />
                  <button className="btn btn-primary shake-horizontal" onClick={onButtonClick}>Download CV</button>
                </p>
              </Col>
              <Col className='slide-right my-auto mainImage' xs={6} md={4}>
                <Image className='mainIMG' src="./MainIMG.png" width={350} height={350} />
              </Col>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

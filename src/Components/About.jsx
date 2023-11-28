import React from 'react';
import { Image } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <main>
        <div className="row fs-1 swing-in-top-fwd">
          <div className="col text-center my-5">
            My Tech Stack
          </div>
        </div>
        <div className="row fs-2 swing-in-top-fwd">
          <div className="col text-center">
            Technologies I've been working with recently
          </div>
        </div>
        <div className="row my-5 d-flex align-items-center text-center tracking-in-contract">
          <div className="col "><Image width={50} src="./icons/html.png" /> <br /> HTML</div>
          <div className="col "><Image width={50} src="./icons/css.png" /> <br /> CSS</div>
          <div className="col "><Image width={50} src="./icons/javaScript.png" /> <br /> JAVASCRIPT </div>
          <div className="col "><Image width={50} src="./icons/bootstrap.png" /> <br /> BOOTSTRAP </div>
          </div>

        <div className="row my-5 d-flex align-items-center text-center tracking-in-contract">
          <div className="col "><Image width={50} src="./icons/react.png" /> <br /> REACT-JS </div>
          <div className="col "><Image width={50} src="./icons/git.png" /> <br /> GIT </div>
          <div className="col "><Image width={50} src="./icons/github.png" /> <br /> GITHUB </div>
          <div className="col "><Image width={50} src="./icons/vscode.png" /> <br /> VS-CODE </div>
        </div>
      </main>
    </>
  );
}

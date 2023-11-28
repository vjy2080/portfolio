import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
    const HTML = 95;
    const CSS = 90;
    const JavaScript = 85;
    const jQuery = 70;
    const Bootstrap = 80;
    const ReactJS = 75;
    return (
        <>
            <main>
                <div className="pt-5 d-flex justify-content-center">
                    <div className=" w-50 ">
                        <p className="text-center">HTML</p>
                        <ProgressBar variant="success" now={HTML} label={`${HTML}%`} /> <br />
                        <p className="text-center">CSS</p>
                        <ProgressBar variant="success" now={CSS} label={`${CSS}%`} /> <br />
                        <p className="text-center">JavaScript</p>
                        <ProgressBar variant="info" now={JavaScript} label={`${JavaScript}%`} /> <br />
                        <p className="text-center">jQuery</p>
                        <ProgressBar variant="warning" now={jQuery} label={`${jQuery}%`} /> <br />
                        <p className="text-center">Bootstrap</p>
                        <ProgressBar variant="info" now={Bootstrap} label={`${Bootstrap}%`} /> <br />
                        <p className="text-center">ReactJS</p>
                        <ProgressBar variant="warning" now={ReactJS} label={`${ReactJS}%`} /> <br />
                    </div>
                </div>
            </main>
        </>
    )
}

export default WithLabelExample;
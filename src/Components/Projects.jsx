import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardLink, Image } from 'react-bootstrap';
import './Home.css';

function Projects() {


    const projects = [
        {
            title: "Homepage-Design",
            imageSrc: "./Images/Home_page_design(CSS).png",
            gitHubLink: "https://github.com/vjy2080/Assignment/tree/master/02_CSS_and_CSS_3/Example2",
            technologies: 'HTML, CSS',
            previewLink: "https://raw.githack.com/vjy2080/Assignment/master/02_CSS_and_CSS_3/Example2/index.html",
        },
        {
            title: "Marksheet",
            imageSrc: "./Images/Marksheet.png",
            gitHubLink: "https://github.com/vjy2080/Assignment/blob/master/03_JAVASCRIPT_BASIC_%26_DOM/Module-6/Example_3_Marksheet.html",
            technologies: 'HTML, CSS, JavaSript',
            previewLink: "https://raw.githack.com/vjy2080/Assignment/master/03_JAVASCRIPT_BASIC_&_DOM/Module-6/Example_3_Marksheet.html",
        },
        {
            title: "Product Price Calculator",
            imageSrc: "./Images/Product_Price_Calculator.png",
            gitHubLink: "https://github.com/vjy2080/Assignment/blob/master/04_JavaScript_Essentials_And_Advanced/05_JavaScript_Essentials/01_Question_No_1.html",
            technologies: 'HTML, CSS, JavaSript',
            previewLink: "https://raw.githack.com/vjy2080/Assignment/master/04_JavaScript_Essentials_And_Advanced/05_JavaScript_Essentials/01_Question_No_1.html",
        },
        {
            title: "Visa Service",
            imageSrc: "./Images/Visa_Service.png",
            gitHubLink: "https://github.com/vjy2080/Bootstrap/tree/master/Practical1",
            technologies: 'HTML, CSS, Bootstrap',
            previewLink: "https://raw.githack.com/vjy2080/Bootstrap/master/Practical1/index.html",
        },
        {
            title: "Vijay's_Blog",
            imageSrc: "./Images/Vijay's_Blog.png",
            gitHubLink: "https://github.com/vjy2080/WD-Project/tree/master/Project%20files/Project-1",
            technologies: 'HTML, CSS',
            previewLink: "https://raw.githack.com/vjy2080/WD-Project/master/Project%20files/Project-1/index.html",
        },
        {
            title: "PSD_Convert",
            imageSrc: "./Images/PSD_Convert.png",
            gitHubLink: "https://github.com/vjy2080/CSS/tree/master/23_PSDtoHTML/PSD1",
            technologies: 'HTML, CSS, JavaSript',
            previewLink: "https://raw.githack.com/vjy2080/CSS/master/23_PSDtoHTML/PSD1/index.html",
        },
        {
            title: "Gyansutra",
            imageSrc: "./Images/Gyansutra.png",
            gitHubLink: "https://github.com/vjy2080/ReactJS/tree/master/gyansutra-institute",
            technologies: 'HTML, CSS, JavaSript, Bootstrap, ReactJS, JSON server',
            previewLink: "https://codesandbox.io/p/sandbox/github/vjy2080/Gyansutra/tree/main",
        },
        {
            title: "News App",
            imageSrc: "./Images/NewsApp.png",
            gitHubLink: "https://github.com/vjy2080/ReactJS/tree/master/newsapp",
            technologies: 'HTML, CSS, JavaSript, Bootstrap, ReactJS, API',
            previewLink: "https://codesandbox.io/p/sandbox/github/vjy2080/ReactJS/tree/master/newsapp",
        },
        {
            title: "Swift-Shop",
            imageSrc: "./Images/Swift-Shop.png",
            gitHubLink: "https://github.com/vjy2080/ReactJS/tree/master/swift-shop",
            technologies: 'HTML, CSS, JavaSript, Bootstrap, ReactJS, API, Redux',
            previewLink: "https://codesandbox.io/p/sandbox/github/vjy2080/swift-shop/tree/main/",
        },
        {
            title: "WeatherApp",
            imageSrc: "./Images/WeatherApp.png",
            gitHubLink: "https://github.com/vjy2080/ReactJS/tree/master/weather",
            technologies: 'HTML, CSS',
            previewLink: "https://vjy2080.github.io/weather/",
        },
        {
            title: "BikeVista",
            imageSrc: "./Images/BikeVista.png",
            gitHubLink: "https://github.com/vjy2080/Assignment/tree/master/09_React-Router/assignment_09",
            technologies: 'HTML, CSS',
            previewLink: "https://codesandbox.io/p/sandbox/github/vjy2080/bike-vista/tree/main/",
        },
    ];


    const ProjectCard = ({ project }) => (
        <div className="col my-5 bounce-in-left">
            <Card style={{ width: '18rem' }} className='mx-auto'>
                <Card.Img variant="top" src={project.imageSrc} />
                <div className="cardBody">
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                            Usage Technology: {project.technologies}
                        </Card.Text>
                        <CardLink href={project.gitHubLink} target='blank' className='text-dark bg-warning p-2 rounded'>
                            View on Git<Image className='px-2 my-3' src="./icons/github.png" height={20} />
                        </CardLink>
                        <br />
                        <CardLink href={project.previewLink} target='blank' className='text-dark bg-warning p-2 rounded'>
                            Preview
                        </CardLink>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );

    return (
        <main>
            <div className="row fs-1 swing-in-top-fwd">
                <div className="col text-center my-2">
                    Projects
                </div>
            </div>
            <div className="row fs-2 swing-in-top-fwd">
                <div className="col text-center">
                    Things I've built so far
                </div>
            </div>

            <div className="row text-center mt-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </main>
    );
};

export default Projects;
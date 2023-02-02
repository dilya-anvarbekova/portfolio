import python from "../assets/img/python-5.svg";
import java from "../assets/img/java-icon.svg";
import cpp from "../assets/img/c.svg";
import javascript from "../assets/img/logo-javascript.svg";
import git from "../assets/img/Git-Icon-White.svg";
import asm from "../assets/img/asm.png";
import embedded from "../assets/img/embedded.png";
import hardware from "../assets/img/circuit-board.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have experiece working with large codebases, can develop software in multiple languages, have a strong foundation in data structures and algorithms, and developing low level software to run on microcontrollers.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript/TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git/Version Control</h5>
                            </div>
                            <div className="item">
                                <img src={asm} alt="Image" />
                                <h5>ARM Assembly</h5>
                            </div>
                            <div className="item">
                                <img src={embedded} alt="Image" />
                                <h5>Embedded Systems</h5>
                            </div>
                            <div className="item">
                                <img src={hardware} alt="Image" />
                                <h5>Hardware Debugging</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

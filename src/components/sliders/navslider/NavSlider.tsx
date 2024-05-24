import { useState } from "react";
import "./styles.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { espLanding as glosary } from "../../../content/landing";

export const NavSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const projects = glosary.navbar.portfolio.projects;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else setCurrentIndex(projects.length - 3);
  };

  const handleNext = () => {
    if (currentIndex <= projects.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev-button" onClick={handlePrev}>
        <IoIosArrowBack />
      </button>
      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index+'slider'} className="slide text-black">
              <div className="image-container group">
                <h2>{project.name}</h2>
                <div className="image-wrapper">
                  <img src={project.img1} alt="Imagen de la página web" className={`${project.img2}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next-button" onClick={handleNext}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

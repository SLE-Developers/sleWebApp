import { espLanding as glosary } from "../../../content/landing";
import "./styles.css";

export const ServicesLanding = () => {
  return (
    <div className="services container">
      <div className="services">
        <h3>{glosary.services.subtittle}</h3>
        <ul>
          {glosary.services.services.map((service: any, index: number) => (
            <li key={index}>
              <h2>
                <button>{service.tittle}</button>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

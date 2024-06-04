"use client";
import { espLanding as glosary } from "../../content/landing";
import { IoMenu, IoClose } from "react-icons/io5";
import "./styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { LogoLetras } from "@/components/svgs/LogoLetras";
import { Logo } from "@/components/svgs/Logo";
import { NavSlider } from "../sliders/navslider/NavSlider";
import { useStore } from "@/store/store";

export const NavBar = () => {

  const { setActiveService, setAlreadySelected } = useStore();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [itemServices, setItemServices] = useState("");

  const handlerServiceRedirection = (tittle: any) => {
    setActiveService(tittle)
    setAlreadySelected(true)
    setActiveLink("");
    setTimeout(() => {
      setActiveService(tittle)
      setAlreadySelected(true)
      setTimeout(() => {
        setAlreadySelected(false)
      }, 1500)
    }, 1500)
  }

  const toggleActive = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleLink = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Array de IDs de elementos específicos que deseas excluir
      const excludedElements = [
        "link1",
        "link2",
        "link3",
        "icon1",
        "icon2",
        "icon3",
        "container1",
        "container2",
        "container3",
        "unfolded",
        "prueba",
      ];

      // Verifica si el clic fue en uno de los elementos excluidos o sus descendientes
      if (
        !excludedElements.some((id) => {
          const excludedElement = document.getElementById(id);
          return excludedElement && excludedElement.contains(event.target);
        })
      ) {
        // Si el clic no fue dentro de ninguno de los elementos excluidos,
        // ejecuta la acción que deseas desencadenar
        setActiveLink("");
      }
    };

    // Agrega el event listener al documento
    document.addEventListener("click", handleClickOutside);

    // Remueve el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // No es necesario incluir dependencias aquí

  return (
    <nav className={`nav-bar`}>
      <Link href={"/"} className="logo-compuesto">
        <Logo className="custom-logo" />
        <LogoLetras className="letras" />
        {/* <Image
          src="/logo.svg"
          alt="Icono SLE"
          className="custom-logo"
          width={50}
          height={24}
          priority
        />
        <Image
          src="/logo_letras.svg"
          alt="SLE"
          className="dark:invert letras"
          width={100}
          height={24}
          priority
        /> */}
      </Link>
      <div className={`contenedor-mobile ${toggleMenu && "active"}`}>
        <button onClick={toggleActive} className={`burguer-btn`}>
          {toggleMenu ? <IoClose /> : <IoMenu />}
        </button>
        <div className="mobile-links-container">
          <ul>
            <li>
              <Link href={"/"}>{glosary.navbar.services.link}</Link>
            </li>
            <li>
              <Link href={"/"}>{glosary.navbar.portfolio.link}</Link>
            </li>
            <li>
              <Link href={"/"}>{glosary.navbar.information.link}</Link>
            </li>
            <li>
              <Link href={"/"}>{glosary.navbar.content}</Link>
            </li>
            <li>
              <Link href={"/"}>{glosary.navbar.pricing}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="desktop-container">
        <div className="desktop-links-container">
          <ul>
            <li>
              <div className="services" id="container1">
                <button
                  className={`link ${
                    activeLink == "services" && "active-link"
                  }`}
                  onClick={() => toggleLink(activeLink === "services" ? "" : "services")}
                >
                  <p id="link1" className="link-text">
                    {glosary.navbar.services.link}
                  </p>
                  <IoIosArrowForward id="icon1" />
                </button>
                <div className="services-content"></div>
              </div>
            </li>
            <li>
              <div className="portfolio" id="container2">
                <button
                  className={`link ${
                    activeLink == "portfolio" && "active-link"
                  }`}
                  onClick={() => toggleLink(activeLink === "portfolio" ? "" : "portfolio")}
                >
                  <p id="link2" className="link-text">
                    {glosary.navbar.portfolio.link}
                  </p>
                  <IoIosArrowForward id="icon2" />
                </button>
                <div className="portfolio-content"></div>
              </div>
            </li>
            <li>
              <div className="information" id="container3">
                <div className="information-content">
                  <button
                    className={`link ${
                      activeLink == "information" && "active-link"
                    }`}
                    onClick={() => toggleLink(activeLink === "information" ? "" : "information")}
                  >
                    <p id="link3" className="link-text">
                      {glosary.navbar.information.link}
                    </p>
                    <IoIosArrowForward id="icon3" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <Link href={"/"} className="link">
                <p className="link-text">{glosary.navbar.content}</p>
              </Link>
            </li>
            <li>
              <Link href={"/"} className="link">
                <p className="link-text">{glosary.navbar.pricing}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="unfolded"
        className={`unfolded-container ${activeLink != "" && "unfolded"}`}
      >
        <div
          className={`folded-card ${
            activeLink == "services" && "unfolded-card"
          }`}
        >
          <div className="nav-card-content">
            <div className="cta">
              <span>{glosary.navbar.services.slogan}</span>
              <Link href={"/#services-landing"}>
                {glosary.navbar.services.cta}
                <IoIosArrowForward />
              </Link>
            </div>
            <div className="principal">
              <ol>
                {
                  glosary.navbar.services.list.map((item: string, index: number) => (
                    <li key={index + "servicesList"}>
                      <Link href={"/#services-landing"} onClick={() => handlerServiceRedirection(item)}>
                        <div className="icon-container">
                          <span>{item}</span>
                          <IoIosArrowForward />
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ol>
            </div>
            <div className="principal">
              <Image
                src="/desarrollo-web.jpg"
                alt="Icono SLE"
                className="nav-image"
                width={300}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
        <div
          className={`folded-card ${
            activeLink == "portfolio" && "unfolded-card"
          }`}
        >
          <div className="nav-card-content">
            <NavSlider />
            <div className="cta">
              <span>{glosary.navbar.portfolio.slogan}</span>
              <Link href={"/"}>
                {glosary.navbar.portfolio.cta}
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`folded-card ${
            activeLink == "information" && "unfolded-card"
          }`}
        >
          <div className="nav-card-content">hola</div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 p-20 bg-orange-500" id="prueba">
        <p>prueba1</p>
        <div className="p-4 bg-yellow-700">prueba2</div>
      </div> */}
    </nav>
  );
};

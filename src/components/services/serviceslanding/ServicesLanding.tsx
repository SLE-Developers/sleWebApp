'use client'
import { espLanding as glosary } from "../../../content/landing";
import { LogoServices } from "@/components/svgs/LogoServices";
import "./styles.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServicesLandingProps {
  handlerLeave: () => void;
  handlerHide: (title: any) => void;
  handlerActive: (title: any) => void;
  setHideIcon: (title: any) => void;
  hideIcon: string;
  activeService: string;
}

export const ServicesLanding: React.FC<ServicesLandingProps> = ({
  handlerLeave,
  handlerHide,
  handlerActive,
  setHideIcon,
  hideIcon,
  activeService
}) => {

  return (
    <div className="services-container" onMouseLeave={() => handlerLeave()} id="services-landing">
      <div className="services-content">
        <h3 onMouseEnter={() => handlerLeave()}>{glosary.services.subtittle}</h3>
        <ul>
          {glosary.services.services.map((service: any, index: number) => (
            <li key={index}>
              <h2>
                <button
                  onMouseEnter={() => handlerHide(service.tittle)}
                  onMouseLeave={() => setHideIcon('')}
                  onClick={() => handlerActive(service.tittle)}
                >
                  {service.tittle}
                </button>
              </h2>
            </li>
          ))}
        </ul>
      </div>
      <div className="descriptions-container">
        <LogoServices className={`icon-services ${hideIcon !== '' || activeService !== '' ? 'oculto' : ''}`} />
        {
          glosary.services.services.map((service: any, index: number) => (
            <div
              className={`service-card ${activeService === service.tittle ? '' : hideIcon === service.tittle && activeService === service.tittle ? '' : 'oculto'} `} key={index + 'descripcionServicio'}
            >
              <Image
                src={service.image}
                alt="imagen"
                className=""
                width={350}
                height={200}
                priority
              />
              <h2>{service.tittle}</h2>
              <p>{service.text}.</p>
              <Link href='/'>{service.cta}</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

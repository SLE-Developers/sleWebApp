'use client'
import { espLanding as glosary } from "../../../content/landing";
import { LogoServices } from "@/components/svgs/LogoServices";
import "./styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/store";

export const ServicesLanding = () => {
  const { setAlreadySelected, hideIcon, activeService, setHideIcon, setActiveService } = useStore();
  const alreadySelected = useStore((state) => state.alreadySelected);

  const handlerHide = (tittle: string) => {
    if (!alreadySelected) {
      setHideIcon(tittle);
      setActiveService(tittle);
    }
  };

  const handlerActive = (tittle: string) => {
    setActiveService(tittle);
    setAlreadySelected(true);
    setTimeout(() => {
      setAlreadySelected(false);
    }, 1500);
  };

  const handlerLeave = () => {
    if (!alreadySelected) {
      setActiveService('');
      setHideIcon('');
    }
  };

  useEffect(() => {
    console.log(activeService)
  }, [activeService]);

  useEffect(() => {
    console.log(alreadySelected)
  }, [alreadySelected])

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

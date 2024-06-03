'use client'
import { HeroBanner } from "@/components/herobanner/HeroBanner";
import { NavBar } from "@/components/navbar/NavBar";
import { ServicesLanding } from "@/components/services/serviceslanding/ServicesLanding";
import { useState } from "react";

export default function Home() {
  const [hideIcon, setHideIcon] = useState('');
  const [activeService, setActiveService] = useState('');
  const [alreadySelected, setAlreadySelected] = useState(false);

  const handlerHide = (tittle: any) => {
    if(!alreadySelected) {
      setHideIcon(tittle)
      setActiveService(tittle)
    }
  }

  const handlerActive = async (tittle: any) => {
    setActiveService(tittle)
    setAlreadySelected(true)
    setTimeout(() => {
      setAlreadySelected(false)
    }, 1500)
  }

  const handlerLeave = () => {
    setActiveService('')
    setHideIcon('')
  }

  return (
    <main className="">
      <HeroBanner setActiveService={setActiveService} setAlreadySelected={setAlreadySelected} />
      <ServicesLanding activeService={activeService} handlerActive={handlerActive} handlerHide={handlerHide} handlerLeave={handlerLeave} setHideIcon={setHideIcon} hideIcon={hideIcon} />
    </main>
  );
}

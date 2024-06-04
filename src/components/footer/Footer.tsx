import Link from "next/link";
import { espLanding as glosary } from "../../content/landing";
import "./styles.css";
import { Logo } from "../svgs/Logo";
import { LogoLetras } from "../svgs/LogoLetras";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { BsTwitterX, BsGithub } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-media">
                <Link href={"/"} className="logo-compuesto">
                    <Logo className="custom-logo" />
                    <LogoLetras className="letras" />
                </Link>
                <div className="media">
                    <Link href={glosary.footer.media.fb} target="_blank">
                        <IoLogoFacebook />
                    </Link>
                    <Link href={glosary.footer.media.ig} target="_blank">
                        <IoLogoInstagram />
                    </Link>
                    <Link href={glosary.footer.media.x} target="_blank">
                        <BsTwitterX />
                    </Link>
                    <Link href={glosary.footer.media.git} target="_blank">
                        <BsGithub />
                    </Link>
                    <Link href={glosary.footer.media.yt} target="_blank">
                        <IoLogoYoutube />
                    </Link>
                </div>
            </div>
            {
                glosary.footer.columns.map((column: any, index: number) => (
                    <div className="footer-column" key={index+"footerColumn"}>
                        <h3>
                            {column.tittle}
                        </h3>
                        <ul>
                            {
                                column.items.map((item:any, index:number) => (
                                    <li key={index+column.tittle+'linkFooter'}>
                                        <Link href={item.link}>{item.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            <div className="subscription">
                <h3>{glosary.footer.subcribe}</h3>
                <form action="">
                    <div className="subscription-field-container">
                        <input type="email" placeholder="jhondoe@email.com" />
                        <button type="submit">{glosary.footer.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
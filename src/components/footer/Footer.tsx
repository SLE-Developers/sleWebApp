import Link from "next/link";
import { espLanding as glosary } from "../../content/landing";
import "./styles.css";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-media">
                logo
            </div>
            {
                glosary.footer.columns.map((column: any, index: number) => (
                    <div key={index+"footerColumn"}>
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
                suscripcion
            </div>
        </div>
    )
}
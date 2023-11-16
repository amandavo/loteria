import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface MenuProps {}

export default function Menu({}: MenuProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

    return(
        <div className="menu">
            <Link to="/megasena" id="mega"
                style={{
                    color: activeLink === "mega" ? "#aaa" : "#209869",
                    pointerEvents: activeLink === "mega" ? "none" : "auto",
                }}
                onClick={() => handleLinkClick("mega")}
            >Mega-sena</Link>

            <Link to="/lotofacil" id="loto"
                style={{
                    color: activeLink === "loto" ? "#aaa" : "#930089",
                    pointerEvents: activeLink === "loto" ? "none" : "auto",
                }}
                onClick={() => handleLinkClick("loto")}
            >Lotofácil</Link>

            <Link to="/quina" id="quina"
                style={{
                    color: activeLink === "quina" ? "#aaa" : "#260085",
                    pointerEvents: activeLink === "quina" ? "none" : "auto",
                }}
                onClick={() => handleLinkClick("quina")}
            >Quina</Link>
        </div>
    )
}
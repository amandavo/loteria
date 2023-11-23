import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useContexto } from "../../hooks";
import { mega, quina, timemania } from "../../styles/theme";

interface MenuProps {}

export default function Menu({}: MenuProps) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  const {setTema} = useContexto();

    return(
        <div className="menu">
            <Link to="/megasena" id="mega"
                style={{
                    color: activeLink === "mega" ? "#aaa" : "#209869",
                    pointerEvents: activeLink === "mega" ? "none" : "auto",
                }}
                onClick={() => {
                    handleLinkClick("mega")
                    setTema(mega)
                }}
            >Mega-sena</Link>

            <Link to="/timemania" id="time"
                style={{
                    color: activeLink === "time" ? "#aaa" : "#00ff48",
                    pointerEvents: activeLink === "time" ? "none" : "auto",
                }}
                onClick={() => {
                    handleLinkClick("time")
                    setTema(timemania)
                }}
            >Timemania</Link>

            <Link to="/quina" id="quina"
                style={{
                    color: activeLink === "quina" ? "#aaa" : "#260085",
                    pointerEvents: activeLink === "quina" ? "none" : "auto",
                }}
                onClick={() => {
                    handleLinkClick("quina")
                    setTema(quina)
                }}
            >Quina</Link>
        </div>
    )
}
import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import "./index.css";

export default function Principal() {
    const { megasena } = useContext(Contexto);
    return (
        <>
        { megasena.dataApuracao ? (
            <div id="principal-bloco">
                <Megasena/>
                <Lotofacil/>
            </div>
        ) : (
            <div id="bloco-carregando">
                <h3>Carregando...</h3>
            </div>
        )}
        </>
    )
}
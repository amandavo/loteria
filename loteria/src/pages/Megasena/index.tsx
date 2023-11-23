import trevo from "../../assets/trevo-megasena.png";
import Carregando from "../../components/Carregando";
import Principal from "../../components/Principal";
import { useContexto } from "../../hooks";

export default function Megasena() {
    const { megasena } = useContexto();

    return (
        <> 
            {megasena.dataApuracao ? (
                <Principal logoSrc={trevo} nomeTexto={"MEGA-SENA"} loteria={megasena} />
            ) : (
                <Carregando/>
            )}
        </>
    )
}
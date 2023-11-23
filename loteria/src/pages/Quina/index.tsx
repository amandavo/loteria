import trevo from "../../assets/trevo-quina.png";
import Carregando from "../../components/Carregando";
import Principal from "../../components/Principal";
import { useContexto } from "../../hooks";

export default function Quina() {
    const { quina } = useContexto();

    return (
        <> 
            {quina.dataApuracao ? (
                <Principal logoSrc={trevo} nomeTexto={"QUINA"} loteria={quina} />
            ) : (
                <Carregando/>
            )}
        </>
    )
}
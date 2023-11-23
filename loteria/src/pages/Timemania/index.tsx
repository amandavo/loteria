import trevo from "../../assets/trevo-timemania.png";
import Carregando from "../../components/Carregando";
import Principal from "../../components/Principal";
import { useContexto } from "../../hooks";

export default function Timemania() {
    const { timemania } = useContexto();

    return (
        <> 
            {timemania.dataApuracao ? (
                <Principal logoSrc={trevo} nomeTexto={"TIMEMANIA"} loteria={timemania} />
            ) : (
                <Carregando/>
            )}
        </>
    )
}
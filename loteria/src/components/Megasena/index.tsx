import trevo from "../../assets/trevo-megasena.png";
import { useContexto } from "../../hooks";
import "./index.css";

function Megasena() {
    const { megasena } = useContexto();

    return (
        <div id="mega-bloco-principal">
            <div>

                <div id="mega-bloco-loteria">
                    <img src={trevo} alt="trevo da megasena" />
                    <span id="mega-nome-loteria">MEGA-SENA</span>
                </div>

                <div id="mega-bloco-estimativa">
                    <div id="mega-texto-estimativa">
                        Estimativa de prêmio do próximo concurso.
                        Sorteio em{" "}
                        {megasena.dataProximoConcurso} :
                    </div>

                    <div id="mega-valor-estimativa">
                        {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        })
                        }
                    </div>
                </div>
            </div>

            <div>
                <div id="mega-bloco-direita">
                    <div id="mega-linha-bola">
                        {megasena.dezenas.map((item) => (
                            <div className="mega-bola">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div id="mega-texto-acumulou">
                        {megasena.quantidadeGanhadores === 0 ? "ACUMULOU!"
                        : `${megasena.quantidadeGanhadores} GANHADORES`}
                    </div>
                    <div id="mega-data-concurso">
                        Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Megasena;
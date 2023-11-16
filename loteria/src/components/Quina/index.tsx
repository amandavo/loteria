import trevo from "../../assets/trevo-quina.png";
import { useContexto } from "../../hooks";
import "./index.css";

function Quina() {
    const { quina } = useContexto();

    return (
        <>
            {quina.dataApuracao ? (
                <div id="quiina-bloco-principal">
                    <div>
                        <div id="quiina-bloco-loteria">
                            <img src={trevo} alt="trevo da quina" />
                            <span id="quiina-nome-loteria">QUINA</span>
                        </div>

                        <div id="quiina-bloco-estimativa">
                            <div id="quiina-texto-estimativa">
                                Estimativa de prêmio do próximo concurso.
                                Sorteio em{" "}
                                {quina.dataProximoConcurso} :
                            </div>

                            <div id="quiina-valor-estimativa">
                                {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                })
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <div id="quiina-bloco-direita">
                            <div id="quiina-linha-bola">
                                {quina.dezenas.map((item) => (
                                    <div className="quiina-bola">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div id="quiina-texto-acumulou">
                                {quina.quantidadeGanhadores === 0 ? "ACUMULOU!"
                                    : `${quina.quantidadeGanhadores} GANHADORES`}
                            </div>
                            <div id="quiina-data-concurso">
                                Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="bloco-carregando">
                    <h3>Carregando...</h3>
                </div>
            )
            }</>
    )
}

export default Quina;
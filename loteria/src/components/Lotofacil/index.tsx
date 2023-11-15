import trevo from "../../assets/trevo-lotofacil.png";
import { useContexto } from "../../hooks";
import "./index.css";
// {JSON.stringify(lotofacil)}
function Lotofacil(){
    const { lotofacil } = useContexto();

    return(
        <div id="loto-bloco-principal">
            <div>
                <div id="loto-bloco-loteria">
                    <img src={trevo} alt="trevo da lotofacil" />
                    <span id="loto-nome-loteria">LOTOFÁCIL</span>
                </div>

                <div id="loto-bloco-estimativa">
                    <div id="loto-texto-estimativa">
                        Estimativa de prêmio do próximo concurso.
                        Sorteio em{" "}
                        {lotofacil.dataProximoConcurso} :
                    </div>

                    <div id="loto-valor-estimativa">
                        {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        })
                        }
                    </div>
                </div>
            </div>

            <div>
                <div id="loto-bloco-direita">
                    <div id="loto-linha-bola">
                        {lotofacil.dezenas.map((item, index) => (
                            <>
                                {index < 10 ?
                                    <div className="loto-linha" >
                                        {item}
                                    </div> :
                                    <div id="loto-sem-linha" >
                                        {item}
                                    </div>
                                }
                            </>
                        ))}
                    </div>
                    <div id="loto-texto-acumulou">
                        {lotofacil.quantidadeGanhadores === 0 ? "ACUMULOU!"
                        : `${lotofacil.quantidadeGanhadores} GANHADORES`}
                    </div>
                    <div id="loto-data-concurso">
                        Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lotofacil;
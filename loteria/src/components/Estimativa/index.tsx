import { FC } from 'react';
import styled from 'styled-components';

interface EstimativaProps {
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
    };
}

const Estimativa: FC<EstimativaProps> = ({ loteria }) => (
    <BlocoEstimativa>
        <TextoEstimativa>
            Estimativa de prêmio do próximo concurso.
            Sorteio em {loteria.dataProximoConcurso}:
        </TextoEstimativa>

        <ValorEstimativa>
            R$ {((parseFloat(loteria.valorEstimadoProximoConcurso)
                .toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, '.'))).toString()}
        </ValorEstimativa>
    </BlocoEstimativa>
);
  
const BlocoEstimativa = styled.div`
    width: 15rem;
    margin-left: 45px;
    margin-top: 20px;
`;

const TextoEstimativa = styled.div`
    font-size: 0.9rem;
    color: #4c556c;  
`;

const ValorEstimativa = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 15px;
    color: ${props => props.theme.estimativa};
`;

export default Estimativa;
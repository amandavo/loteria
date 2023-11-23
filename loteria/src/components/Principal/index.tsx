import { FC } from 'react';
import styled from 'styled-components';
import Esquerda from '../Esquerda';
import Direita from '../Direita';

interface PrincipalProps {
    logoSrc: string,
    nomeTexto: string,
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
        quantidadeGanhadores: number;
        dezenas: String[];
        numeroDoConcurso: number;
        dataPorExtenso: string;  
    }
}

const Principal: FC<PrincipalProps> = ({ logoSrc, nomeTexto, loteria}) => (
    <BlocoPrincipal>
        <Esquerda logoSrc={logoSrc} nomeTexto={nomeTexto} loteria={loteria}/>
        <Direita loteria={loteria}/>
    </BlocoPrincipal>
);
  
const BlocoPrincipal = styled.div`
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
    font-family: Roboto;
`;

export default Principal;
import { FC } from 'react';
import styled from 'styled-components';
import NomeLoteria from '../NomeLoteria';
import Estimativa from '../Estimativa';

interface EsquerdaProps {
    logoSrc: string;
    nomeTexto: string;
    loteria: {
        dataProximoConcurso: string;
        valorEstimadoProximoConcurso: string;
    };
}

const Esquerda: FC<EsquerdaProps> = ({ logoSrc, nomeTexto, loteria}) => (
    <BlocoEsquerda>
        <NomeLoteria logoSrc={logoSrc} nomeTexto={nomeTexto}/>
        <Estimativa loteria={loteria} /> 
    </BlocoEsquerda>
);
  
const BlocoEsquerda = styled.div`
`;

export default Esquerda;
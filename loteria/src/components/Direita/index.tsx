import { FC } from 'react';
import styled from 'styled-components';
import NomeLoteria from '../NomeLoteria';
import Estimativa from '../Estimativa';
import Resultado from '../Resultado';
import Acumulou from '../Acumulou';
import Data from '../Data';

interface DireitaProps {
    loteria: {
        quantidadeGanhadores: number;
        dezenas: String[];
        numeroDoConcurso: number;
        dataPorExtenso: string;  
    };
}

const Direita: FC<DireitaProps> = ({ loteria }) => (
    <BlocoDireita>
        <Resultado loteria={loteria}/>
        <Acumulou loteria={loteria}/>
        <Data loteria={loteria} />            
    </BlocoDireita>
);
  
const BlocoDireita = styled.div`
    margin-left: 50px;
`;

export default Direita;
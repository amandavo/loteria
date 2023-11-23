import { FC } from 'react';
import styled from 'styled-components';

interface DataProps {
    loteria: {
        numeroDoConcurso: number;
        dataPorExtenso: string;     
    }
}

const Data: FC<DataProps> = ({ loteria }) => (
    <Concurso>
       Concurso {loteria.numeroDoConcurso} - {loteria.dataPorExtenso}
    </Concurso>

);
  
const Concurso = styled.div`
    padding-left: 10px;
    margin-top: 15px;
    font-size: 0.9rem;
    color: #4c556c;  
`;

export default Data;
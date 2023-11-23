import { FC } from 'react';
import styled from 'styled-components';

interface AcumulouProps {
    loteria: {
        quantidadeGanhadores: number;
    }
}

const Acumulou: FC<AcumulouProps> = ({ loteria }) => (
    <BlocoAcumulou>
       {loteria.quantidadeGanhadores === 0
        ? "ACUMULOU!"
        : loteria.quantidadeGanhadores === 1
        ? "1 GANHADOR"
        : `${loteria.quantidadeGanhadores} GANHADORES`}
    </BlocoAcumulou>

);
  
const BlocoAcumulou = styled.div`
    padding-left: 10px;
    margin-top: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: #0066b3;
`;

export default Acumulou;
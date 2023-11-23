import { FC } from 'react';
import styled from 'styled-components';

interface ResultadoProps {
    loteria: {
        dezenas: String[];
    }, 
}

const Resultado: FC<ResultadoProps> = ({ loteria }) => (
    <BlocoResultado>
        {loteria.dezenas.map((item) => (
            <Bola>
                {item}
            </Bola>
        ))}
    </BlocoResultado>
);

const BlocoResultado = styled.div`
    display: flex;
`;

const Bola = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0px 10px;
    padding: 10px;
    border-radius: 1.2rem;
    color:${props => props.theme.bolafonte};
    background-color: ${props => props.theme.bola};
`;

export default Resultado;
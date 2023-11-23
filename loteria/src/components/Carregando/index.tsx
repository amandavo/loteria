import React, { FC } from 'react';
import styled from 'styled-components';

interface CarregandoProps {
}

const Carregando: FC<CarregandoProps> = () => (
    <Carregar>
        <h3>Carregando...</h3>
    </Carregar>

);

const Carregar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 90vw;
    font-family: Roboto;
`;

export default Carregando;
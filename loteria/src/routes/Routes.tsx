import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "../components/Menu";
import Megasena from "../pages/Megasena";
import Timemania from '../pages/Timemania';
import Quina from "../pages/Quina";
import styled, { ThemeProvider } from 'styled-components';
import { useContexto } from '../hooks';

export default function Rotas() {
    const { tema } = useContexto();
    return (
        <ThemeProvider theme={tema}>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="*" element={<Error/>} />
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/megasena" element={<Megasena />} />
                    <Route path="/timemania" element={<Timemania />} />
                    <Route path="/quina" element={<Quina />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

function Dashboard() {
    return <></>;
}

function Error() {
    return (
    <Erro>
        <h3>Erro 404</h3>
        <h3>Página não encontrada</h3>
    </Erro>
    )
}

const Erro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 88vh;
    width: 99vw;
    font-family: Roboto;
`;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "../components/Menu";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";
import './index.css';

function Error() {
    return (
    <div id='erro'>
        <h3>Erro 404</h3>
        <h3>Página não encontrada</h3>
    </div>
    )
}

function Dashboard() {
    return <></>;
}

export default function Rotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="*" element={<Error/>} />
                <Route path="/" element={<Dashboard/>} />
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/lotofacil" element={<Lotofacil />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}
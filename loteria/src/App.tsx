import { Provider } from "./contexts/Contexto";
import Rotas from "./routes/Routes";

export default function App() {
  
  return (
    <Provider>
      <Rotas/>
    </Provider> 
  );
}

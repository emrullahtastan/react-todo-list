import './assets/styles/main.scss';
import {Header} from "./components/header";
import {Content} from "./components/content";
import PromptConfig from "./contexts/PromptConfig.js"
import './index.css';
import {
    BrowserRouter
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <PromptConfig>
                    <Header/>
                    <Content/>
                </PromptConfig>
            </div>
        </BrowserRouter>

    );
}

export default App;

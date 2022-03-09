import './assets/styles/main.scss';
import {Header} from "./components/header";
import {Content} from "./components/content";
import PromptConfig from "./contexts/PromptConfig.js"
import './index.css';

function App() {
    return (
        <div className="App">
            <PromptConfig>
                <Header/>
                <Content/>
            </PromptConfig>
        </div>

    );
}

export default App;

import './assets/styles/main.scss';
import {Header} from "./components/header";
import {Content} from "./components/content";
import {PromptContext} from "./contexts/prompt";
import Prompt from './components/Prompt'
import promptDefaultValue from "./contexts/promptDefaultValue";
function App() {
    const data=promptDefaultValue;
    return (
        <PromptContext.Provider value={data}>
            <div className="App">
                <Prompt/>
                <Header/>
                <Content/>
            </div>
        </PromptContext.Provider>
    );
}

export default App;

import './assets/styles/main.scss';
import {Header} from "./components/header";
import {Content} from "./components/content";
import {PromptContext} from "./contexts/prompt";
import Prompt from './components/Prompt'

function App() {
    const data={
        title:'Test'
    }
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

import {PromptContext} from './PromptContext.js'
import Prompt from "../tools/prompt/Prompt";
import {useState} from "react";
import PromptDefaultValues from "./PromptDefaultValues";

function PromptConfig(props) {
    let obj=JSON.parse(JSON.stringify(PromptDefaultValues))
    const [prompt, setPrompt] = useState(obj)

    const data = {
        prompt, setPrompt
    };

    return (
        <PromptContext.Provider value={data}>
            <Prompt/>
            <div style={{height: 'inherit'}}>{props.children}</div>
        </PromptContext.Provider>
    );

}

export default PromptConfig;

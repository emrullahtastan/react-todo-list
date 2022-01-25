import {PromptContext, useContext} from '../contexts/prompt';

function Prompt() {

    const {title}= useContext(PromptContext);

    return (
        <div>{title}</div>
    );
}

export default Prompt;

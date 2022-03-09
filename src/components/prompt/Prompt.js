import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {PromptContext, useContext} from "../../contexts/PromptContext";
import PromptDefaultValues from "../../contexts/PromptDefaultValues";

function Prompt() {

    const {
        prompt,
        setPrompt
    } = useContext(PromptContext);

    let InPrompt = null;
    if (typeof prompt.body !== 'undefined' && typeof prompt.body.component !== 'undefined' && prompt.body.component !== null) {
        InPrompt = React.lazy(() => import(`./items/${prompt.body.component}`));
    }
    const closePrompt = () => {
        setPrompt({...PromptDefaultValues});
    }

    return (
        <div>
            <div className={`prompt-mask ${prompt.visible === false ? 'hide' : ''}`}>
                <div className="prompt-mask__wrapper">
                    <div className="prompt-mask__wrapper__container width-default">
                        <div className="prompt-mask__wrapper__container__header">
                            <div className={`prompt-mask__wrapper__container__header__title`}>
                                <div className={`${prompt.header.visible === false ? 'hide' : ''}`}>
                                    {prompt.header.title}
                                </div>
                            </div>
                            <div className="prompt-mask__wrapper__container__header__close-icon" onClick={closePrompt}>
                                <FontAwesomeIcon icon={"times"}/>
                            </div>
                        </div>
                        <div className="prompt-mask__wrapper__container__body">
                            {InPrompt !== null ?
                                <React.Suspense fallback={<>...</>}>
                                    <InPrompt/>
                                </React.Suspense>
                                :
                                null
                            }
                        </div>
                        <div className={`prompt-mask__wrapper__container__footer ${prompt.footer.visible === false ? 'hide' : ''}`}>
                            <div className={"prompt-mask__wrapper__container__footer__button"}>
                                <button className={"btn"}>Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prompt;


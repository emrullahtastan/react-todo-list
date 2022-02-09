import {PromptContext, useContext} from '../contexts/prompt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
function Prompt() {

    const {footer, header} = useContext(PromptContext);
    const ShareInPrompt = React.lazy(() => import('./ShareInPrompt'));

    return (
        <div>
            <div className="prompt-mask">
                <div className="prompt-mask__wrapper">
                    <div className="prompt-mask__wrapper__container width-default">
                        <div className="prompt-mask__wrapper__container__header">
                            <div className={`prompt-mask__wrapper__container__header__title`}>
                                <div className={`${header.visible === false ? 'hide' : ''}`}>
                                    {header.title}
                                </div>
                            </div>
                            <div className="prompt-mask__wrapper__container__header__close-icon">
                                <FontAwesomeIcon icon={"times"}/>
                            </div>
                        </div>
                        <div className="prompt-mask__wrapper__container__body">
                            <React.Suspense fallback={<>...</>}>
                                <ShareInPrompt/>
                            </React.Suspense>
                        </div>
                        <div className={`prompt-mask__wrapper__container__footer ${footer.visible === false ? 'hide' : ''}`}>
                            footer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prompt;


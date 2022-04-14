import {useState} from "react";

function PrintInPrompt() {

    const [printStepValue, setPrintStepValue] = useState(false)
    const [printNotesValue, setPrintNotesValue] = useState(false)

    return (
        <div className={"print-in-prompt"}>
            <div className={"print-in-prompt__row"}>
                <div className={"print-in-print__row__text"}>Print steps</div>
                <div>
                    <label htmlFor="toggle-example" className="flex items-center cursor-pointer relative mb-4">
                        <input type="checkbox" id="toggle-example" className="sr-only" onChange={(e) => {
                            setPrintStepValue(e.target.checked)
                        }}/>
                        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                        <span className="ml-3 text-gray-900 text-sm font-medium">{printStepValue ? 'On' : 'Off'}</span>
                    </label>
                </div>
            </div>
            <div className={"print-in-prompt__row"}>
                <div className={"print-in-print__row__text"}>Print notes</div>
                <div>
                    <label htmlFor="toggle-example2" className="flex items-center cursor-pointer relative mb-4">
                        <input type="checkbox" id="toggle-example2" className="sr-only" onChange={(e) => {
                            setPrintNotesValue(e.target.checked);
                        }}/>
                        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                        <span className="ml-3 text-gray-900 text-sm font-medium">{printNotesValue ? 'On' : 'Off'}</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default PrintInPrompt;

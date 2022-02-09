import letter from '../assets/img/letter_icon.png'

function ShareInPrompt() {

    return (
        <div className={"share-in-prompt"}>
            <div className={"share-in-prompt__letter"}>
                <img src={letter}/>
            </div>
            <div className={"share-in-prompt__letter-sub-text"}>
                Invite some people. After they join, you'll see them here.
            </div>
            <div className={"share-in-prompt__letter-button"}>
                <button className={"btn w-100"}>Create invitation link</button>
            </div>
            <div className={"share-in-prompt__text"}>
                Anyone with this link and a Microsoft account can join and edit this list.
            </div>
        </div>
    )
}

export default ShareInPrompt;

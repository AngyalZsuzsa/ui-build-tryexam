const inputElement = (type, name, label, placeholder) => {
    return `
        <div>
            <input type="${type}" name="${name}" placeholder="${placeholder}">
            <label>${label}</label>
        </div>
    `
}


const formElement = `
    <form id="form">
        <h1>Jelentkezés</h1>
        ${ inputElement("text", "firstname", "", "Név") }
        ${ inputElement("email", "personalEmail", "", "Email cím")}
        ${ inputElement("checkbox", "terms", "Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót</span>.", "") }
        <button>Elküld</button>
        </form>
`;


function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);

}

window.addEventListener("load", loadEvent);
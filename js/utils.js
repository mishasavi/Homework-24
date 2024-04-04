function createButtonDelete(callBack) {
    const buttonDel = createInfoElement('X', 'button');
    buttonDel.onclick = ({currentTarget}) => {
        currentTarget.parentElement.remove();
        if (typeof callBack === 'function') {
            callBack();
        }
    };
    return buttonDel;
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}
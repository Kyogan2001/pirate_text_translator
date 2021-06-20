'use script';

const input = document.getElementById('input');
const btnTranslate = document.getElementById('btn_translate');
const output = document.getElementById('output');
const url = "https://api.funtranslations.com/translate/pirate.json";


const translateText = function(text){
    return `${url}?text=${text}`;
};

const translate = async function(text){
    const data = await fetch(translateText(text));
    const result = await data.json();
    output.innerText=result.contents.translated;
}



btnTranslate.addEventListener('click',() => {
    const userText = input.value;
    translate(userText);
});








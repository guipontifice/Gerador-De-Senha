const rand = (max, min) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); 
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = '<>,.:;^~{}[]|/!@#$%¨&*()-_+=§?';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
    let senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i <= qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numero && senhaArray.push(geraNumeros());
        simbolo && senhaArray.push(geraSimbolos())
    }
    return senhaArray.join('').slice(0, qtd);
}
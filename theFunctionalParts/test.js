// Escreva uma função chamada "getLongestWordOfMixedElements".

// Dada uma matriz de tipos mistos, "getLongestWordOfMixedElements" retorna a string mais longa na matriz especificada.

// Notas:
// * Se o array estiver vazio, ele retornará uma string vazia (""). - ok
// * Se a matriz não contiver cadeias; deve retornar uma string vazia.

// var output = getLongestWordOfMixedElements ([3, 4, 'word', 7, 'up', 1]);
// console.log (saída); // -> 'palavra'

const getLongestWordOfMixedElements = (e)=>{

    if(e.length !==0){
        let result = 'sem palavra'
        let number = 0;
        e.forEach(elem =>{
            console.log(elem)
            if(typeof elem == 'string' && elem.length > number){
                result = elem
                number = elem.length
            }
        })
        return result;
    }else{
        return "moro num pais tropical"
    }
}
console.log(getLongestWordOfMixedElements([2,3,4,5,6,8,9,'up',5,4]))
let message = [];

function writeCards(myArray, myEvent){
    for(let i = 0; i < myArray.length; i++){
        message.push(`Thank you, ${myArray[i]}, for the wonderful ${myEvent} gift!`);
    };
    return message;
}

function countDown(myNum){
    for(let i = myNum; i >= 0; i--){
        console.log(i);
    }
}
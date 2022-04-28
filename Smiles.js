let word = ":)";
let result = "";
for (let i = 1; i<=5; i++) {
    result+=word
    console.log (result)
}

function printSmile(stroka, numberOfRows) {
     let result2 = "";
     for(let i = 1;i<=numberOfRows; i++) {
         result2+=stroka
         console.log(result2)
     }
}
printSmile(":)", 5)

function writeCards(names,value){
 let a= []   
 for(let i=0;i<names.length;i++){
   a.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);}
   return a;

}
writeCards(["Guadalupe", "ollie", "Ali"],"surprise")

function countDown(a){
    while(a>=0){
        console.log(a--);
    }
}
countDown(11);
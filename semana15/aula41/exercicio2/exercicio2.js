const operation=(n1,operation,n2)=>{
    let result 
   switch(operation){
       case '+' :result = n1+n2
       break
       case '-':result=n1-n2
       break
       case'x':result=n1*n2
       break
       case 'div':result=n1/n2
   }
   return result
}
const resultado =operation(Number(process.argv[2]),process.argv[3],Number(process.argv[4]))

console.log('o resultado é',resultado) 

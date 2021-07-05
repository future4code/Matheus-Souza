```
function calculaNota(ex, p1, p2) {
let totalDeProvas  = (ex + (p1+p1) + (p2+p2+p2))
let media = totalDeProvas/6
let conceito
 if(media >= 9 ){
   conceito = "A"
   return conceito
 }else if (media <9 && media>=7.5){
   return conceito = "B"
 }else if (media < 7.5 && media>=6){
   return conceito = "C"
 }else if(media <6){
   return conceito = "D"
 }

 return conceito
}
```
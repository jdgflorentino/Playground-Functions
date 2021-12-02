 let count = 0;
 valores = [0, 4, 4, 4, 9, 2, 1];
 for (let i = 0; i < valores.length; i += 1) {
     for (let j = 0; j < valores.length; i += 1) {
         if (valores[i] == valores[j]) {
             count++;
         }
     }

 }
 return count;
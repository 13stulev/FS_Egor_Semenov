alert("Начать игру?");do{let r=Math.floor(1e3*Math.random()+1),e,t=0;for(;e=prompt(" Введите значение "),e=Number(e),e<r?alert("Искомое число больше!"):e>r&&alert("Искомое число меньше!"),t++,r!==e;);alert("Вы угадали! Количество попыток: "+t+". Начать заново?")}while(confirm("Продолжить?"));
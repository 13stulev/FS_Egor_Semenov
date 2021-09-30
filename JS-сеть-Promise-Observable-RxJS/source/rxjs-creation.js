import {from, fromEvent, interval, Observable, of, scan, merge} from 'rxjs';

export function sample1() {
    let answer = "";
    let promise = new Promise(function (resolve) {
        let isPrime = function (num) {
            for (let i = num - 1; i >= 2; i--) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
        for (let i = 1; i < 100; i++) {
            if (isPrime(i)) {
                answer += i + " ";
            }
        }
        resolve();
    })
    promise.then(() => {
        alert(answer)
    })
}

export function sample2() {
    const observable = new Observable(subscriber => {
        subscriber.next(5);
        subscriber.next(4);
        subscriber.next(3);
        subscriber.next(2);
        subscriber.next(1);
        subscriber.error();
    });
    console.log('start');
    observable.subscribe({
        next: function (num) {
            alert(num)
        },
        error: () => console.log('done'),
    });
    console.log('stop');


    //subscription.unsubscribe();
}


export function sample3() {
    //создание трех кнопок
    document.body.append(document.createElement('button'));
    document.body.append(document.createElement('button'));
    document.body.append(document.createElement('button'));
    document.getElementsByTagName('button')[0].textContent = "first button";
    document.getElementsByTagName('button')[1].textContent = "second button";
    document.getElementsByTagName('button')[2].textContent = "third button";

    const source_1 = fromEvent(document.getElementsByTagName('button')[0], 'click');
    const source_2 = fromEvent(document.getElementsByTagName('button')[1], 'click');
    const source_3 = fromEvent(document.getElementsByTagName('button')[2], 'click');

    const stream = merge(source_1.pipe(), source_2.pipe(), source_3.pipe());
    const subscribe = stream.subscribe(() => {
        let color = "#";
        for (let i = 0; i < 3; i++) {
            color += Math.floor(Math.random() * 99).toString();
        }
        document.body.setAttribute("bgcolor", color);
    });


}

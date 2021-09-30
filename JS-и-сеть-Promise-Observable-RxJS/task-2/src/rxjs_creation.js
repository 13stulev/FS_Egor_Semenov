import {Observable} from "rxjs";


export function sample1()
{
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
    const observable = new Observable((subscriber) => {
        for (let i = 1; i <= 5; i++) {
            subscriber.next(i);
        }
        subscriber.error();
    });
    console.log('start');
    observable.subscribe({
        next: function (num) {console.log(num)},
        error: () => console.log('done'),
    });
    console.log('stop');

}
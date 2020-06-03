import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';

import './events-cold-hot';
const random = Math.random();


//cold
//as data is produced inside observable
//unicasting
// const observable = Observable.create((observer) => {
//   observer.next(Math.random());
// })


//hot as data is produced outside observable
//hot observable is able to share data between multiple subscriber
//multicasting
const observable = Observable.create((observer) => {
  observer.next(random);
})


observable.subscribe(data => console.log(data));

observable.subscribe((data) => console.log(data));
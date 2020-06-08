import { Subject, from, interval } from "rxjs";
import { multicast } from "rxjs/operators";

// Subject
// multicasting
// observable or observer

//replaySubject(# records)
// behavioralSubject(latest)
// AsyncSubject(last)
//Subject (latet)

// const subject = new Subject<number>();

// subject.subscribe({
//   next : (v) => console.log(`observer A : ${v}`)
// })

// subject.subscribe({
//   next : (v) => console.log(`observer B : ${v}`)
// })

// subject.next(1)
// subject.next(2)

// const subject = new Subject<number>();

// subject.subscribe({
//   next : (v) => console.log(`observer A : ${v}`)
// })

// subject.subscribe({
//   next : (v) => console.log(`observer B : ${v}`)
// })

// const observable = from([1,2,3]);
// observable.subscribe(subject);
//we converted unicast observable to multicast

//Multicasted Observables
// const source = from([1,2,3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));

// multicasted.subscribe({
//   next : (v) => console.log(`Observer A: ${v}`)
// })

// multicasted.subscribe({
//   next : (v) => console.log(`Observer B : ${v}`)
// })

// multicasted.connect();
//Under the hood source.subscribe(subject)

//To achieve that with explicit calls to connect(), we write the following code:
const source = interval(500);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
let subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
  next : (v) => console.log(`observer A : ${v}`)
})

subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next : (v) => console.log(`observer B : ${v}`)
  })
},600);

setTimeout(() => {
  subscription1.unsubscribe();
},1200);

setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe(); 
}, 2000);



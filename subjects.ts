import { Subject, from, interval, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";
import { multicast, refCount } from "rxjs/operators";

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
// const source = interval(500);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));
// let subscription1, subscription2, subscriptionConnect;

// subscription1 = multicasted.subscribe({
//   next : (v) => console.log(`observer A : ${v}`)
// })

// subscriptionConnect = multicasted.connect();

// setTimeout(() => {
//   subscription2 = multicasted.subscribe({
//     next : (v) => console.log(`observer B : ${v}`)
//   })
// },600);

// setTimeout(() => {
//   subscription1.unsubscribe();
// },1200);

// setTimeout(() => {
//   subscription2.unsubscribe();
//   subscriptionConnect.unsubscribe(); 
// }, 2000);


//refCount
// const source = interval(500);
// const subject = new Subject();
// const refCounted = source.pipe(multicast(subject), refCount());
// let subscription1, subscription2;

// console.log('observerA subscribed');
// subscription1 = refCounted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// setTimeout(() => {
//   console.log('observerB subscribed');
//   subscription2 = refCounted.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 600);

// setTimeout(() => {
//   console.log('observerA unsubscribed');
//   subscription1.unsubscribe();
// }, 1200);

// setTimeout(() => {
//   console.log('observerB unsubscribed');
//   subscription2.unsubscribe();
// }, 2000);

// BehaviorSubject
// const subject = new BehaviorSubject(0); 

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// subject.next(3);

// ReplaySubject
// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });

// subject.next(5);

// const subject = new ReplaySubject(100, 500 /* windowTime */);

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });

// let i = 1;
// setInterval(() => subject.next(i++), 200);

// setTimeout(() => {
//   subject.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 1000);

// AsyncSubject
const subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(5);
subject.complete();

// The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value.




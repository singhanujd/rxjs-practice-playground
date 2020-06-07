// import { Observable,fromEvent } from "rxjs";

// const coldObservable = Observable.create((observer) => {
//   observer.next(Math.random());
// })

// coldObservable.subscribe(data => console.log("cold " + data));
// coldObservable.subscribe(data => console.log("cold " + data));



// const randomValue = Math.random();

// const hotObservable = Observable.create((observer) => {
//   observer.next(randomValue);
// })


// hotObservable.subscribe(data => console.log("hot " + data));
// hotObservable.subscribe(data => console.log("hot " + data));

// //When source of data is inside observable => cold
// //Outside observable => hot

// //as we can see cold can emit differen value
// //which is unicasting

// //where as hot will emit same value to all
// //which is multicasting

// //Practical use case would be listening to mouse clicks

// const mouseClicks = fromEvent(document,'click');

// mouseClicks.subscribe(data => console.log("click X " + data['clientX']));
// mouseClicks.subscribe(data => console.log("click Y " + data['clientY']));


// //as source of data is outside observable it keeps on emiting value when we subscribe we get otherwise it is lost so this is hot observable
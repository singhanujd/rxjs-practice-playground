import { fromEvent, interval } from 'rxjs';
import { switchMap, concatMap, mergeMap, take, exhaustMap, tap, throttleTime, debounceTime } from 'rxjs/operators';


const clicks = fromEvent(document,'click');

//mergeMap
// clicks
// .pipe(
//   mergeMap(ev => interval(1000).pipe(take(5)))
// ).subscribe(data => console.log(data))

//switchMap
// clicks
// .pipe(
//   switchMap(ev => interval(1000).pipe(take(5)))
// ).subscribe(data => console.log(data))

//concatMap
// clicks
// .pipe(
//   concatMap(ev => interval(1000).pipe(take(5)))
// ).subscribe(data => console.log(data))

//throttleTime
// Lets a value pass, then ignores source values for the next duration milliseconds.
// clicks
// .pipe(
//   throttleTime(2000)
// ).subscribe(data => console.log(data.clientX));

//debounceTime
// clicks
// .pipe(
//   debounceTime(2000)
// )
// .subscribe(data => console.log(data.clientX));
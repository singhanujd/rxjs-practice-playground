import { fromEvent, interval } from 'rxjs';
import { switchMap, concatMap, mergeMap, take, exhaustMap, tap, throttleTime, debounceTime } from 'rxjs/operators';


const clicks = fromEvent(document,'click');

clicks
.pipe(
  debounceTime(5000)
).subscribe(data => console.log(data.clientX))


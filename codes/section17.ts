import { of, filter, map, tap } from "rxjs";


const numbers$ = of(1, 7, 3, 6, 2, 9);


numbers$.pipe(

    filter(value => value > 5),
    map(value => value * 2),
    tap({
        next: value => console.log('Spy1: ', value),
        error: err => console.log(err),
        complete: () => console.log('complete')
    }),

).subscribe(value => console.log('Output1: ', value));


numbers$.pipe(

    map(value => value * 2),
    filter(value => value > 5),
    tap({
        next: value => console.log('Spy2: ', value)
    }),

).subscribe(value => console.log('Output2: ', value));
import { Observable, of, from, fromEvent, timer, interval, throwError, forkJoin, combineLatest } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
    name$,
    storeDataOnServer,
    storeDataOnServerError
} from './external';

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

// sources A and B
const temperatureInputEvent$: Observable<Event> = fromEvent<Event>(temperatureInput, 'input');
const conversionInputEvent$: Observable<Event> = fromEvent<Event>(conversionDropdown, 'input');

// combineLatest()
const combineLatest$: Observable<[Event, Event]> = combineLatest([temperatureInputEvent$, conversionInputEvent$]);

// subscription
const subscription = combineLatest$.subscribe(([temperatureInputEvent, conversionInputEvent]: Event[]) => {
    console.log('temperature: ', temperatureInputEvent);
    console.log('temperature: ', temperatureInputEvent.target);
    console.log('temperature: ', (temperatureInputEvent.target as HTMLInputElement)['value']);
    console.log('dropdown: ', conversionInputEvent);
    console.log('dropdown: ', conversionInputEvent.target);
    console.log('dropdown: ', (conversionInputEvent.target as HTMLInputElement)['value']);
});

const subscription2 = combineLatest$.subscribe({
    next([temperatureInputEvent, conversionInputEvent]: Event[]) {

        const temperature = Number((temperatureInputEvent.target as HTMLInputElement).value);
        const conversion = (conversionInputEvent.target as HTMLInputElement).value;

        let result: number;
        if (conversion === 'f-to-c')
        {
            result = (temperature - 32) * 5/9;
        }
        else if (conversion === 'c-to-f')
        {
            result = temperature * 9/5 + 32;
        }
        resultText.innerText = String(result);
    },
});
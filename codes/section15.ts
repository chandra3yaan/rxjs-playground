import { Observable, fromEvent, combineLatest } from "rxjs";

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

/**
 * Let's implement an interactive temperature converter.
 * We'll type in the temperature into the input and select the conversion direction from the dropdown.
 * After we do so, we'll make the text below present the result.
 */

/**
 * The plan is to create an Observable which will react to the temperature input and the conversion direction changes.
 * To do so, we'll use the 'combineLatest' creation function.
 * But first, we need to define our source Observables.
 * So, let's start with defining the first const for the first source.
 */

// sources A and B
const temperatureInputEvent$: Observable<InputEvent> = fromEvent<InputEvent>(temperatureInput, 'input');
const conversionInputEvent$: Observable<InputEvent> = fromEvent<InputEvent>(conversionDropdown, 'input');

// combineLatest()
const combineLatest$: Observable<[InputEvent, InputEvent]> = combineLatest([temperatureInputEvent$, conversionInputEvent$]);

// subscription
const subscription = combineLatest$.subscribe({
    next([temperatureInputEvent, conversionInputEvent]: InputEvent[]) {

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
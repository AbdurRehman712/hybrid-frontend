import { of} from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, flatMap } from 'rxjs/operators';
// import { fromPromise } from 'rxjs/Observable/fromPromise'

export const temp = fromFetch('https://services.mobile.de/refdata/classes/Car/makes', {headers:{'Content-Type':'application/json'}}).pipe(
    switchMap(response => {
        console.log('Response :: ' + JSON.stringify(response))
    if (response) {
        // OK return data
        return response.json();
    } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response}` });
    }
    }),
    catchError(err => {
    // Network or other error, handle appropriately
    console.error('Hain> ' + err);
    return of({ error: true, message: err.message })
    })
);  


// export const getMakes1 =  fromPromise(fetch('https://services.mobile.de/refdata/classes/Car/makes').then(response => response.json()).then(data => {return data}).catch(err => {return err}));
    // result.subscribe(x => console.log('result :: ' + x), e => console.error('Error :: ' + e));

export const getMakes =  of("https://services.mobile.de/refdata/classes/Car/makes")
      .pipe(
        flatMap(url =>
          fetch(url,{headers:{'Accept':'application/json'}}).then(r=>r.json())
        )
      )
    //   .subscribe(val => console.log(val));
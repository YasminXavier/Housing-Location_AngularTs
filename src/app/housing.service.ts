import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
/*  */

export class HousingService {
    // Get base url from wherever you like, or provision ApiHttpClient in your AppComponent or some other high level
    // component and set the baseUrl there.
  
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
      /* The code now uses asynchronous code to make a GET request 
      over HTTP.*/
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  /* this functions return either a specific HousingLocation by id 
  or the entire list. */
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
    /* your app's service that receives the form data to send to the data's destination. In this example, 
    the method writes the data from the form to the browser's console log.*/
  }
}

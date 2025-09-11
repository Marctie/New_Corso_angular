import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '',
  styles: ''
})
export class App {
  protected readonly title = signal('New_Corso_Angular');


}

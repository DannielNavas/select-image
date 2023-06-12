import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'select-image';
  dropdownOptions = [
    {
      name: 'Option 1',
      value: 'option1',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 2',
      value: 'option2',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 3',
      value: 'option3',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 4',
      value: 'option4',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 5',
      value: 'option5',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 6',
      value: 'option6',
      img: 'https://picsum.photos/50/50',
    },
    {
      name: 'Option 7',
      value: 'option7',
      img: 'https://picsum.photos/50/50',
    },
  ];

  dropdownValueChanged(event: Event) {
    console.log(event);
  }
}

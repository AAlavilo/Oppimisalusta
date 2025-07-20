import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface that matches user in database. This is obviously only for demonstration.
interface User {
  firstName: string;
  lastName: string;
  email: string;
  profilePic?: string;
  commenting: boolean;
  isTeacher: boolean;
  darkTheme: boolean;
}

@Component({
  selector: 'app-user-screen',
  imports: [CommonModule],
  templateUrl: './user-screen.component.html',
  styleUrl: './user-screen.component.scss'
})

export class UserScreenComponent {
  // Hardcoded users for demonstratiuon purposes
  users: User[] = [
    {
      firstName: 'Tera',
      lastName: 'Testi',
      email: 'tera.testi@testaaja.com',
      profilePic: 'esimerkki_kuva.png',
      commenting: true,
      isTeacher: false,
      darkTheme: true
    },
    {
      firstName: 'Ella',
      lastName: 'Esimerkki',
      email: 'ella.esi@merkiksi.com',
      profilePic: 'esimerkki_kuva.png',
      commenting: false,
      isTeacher: true,
      darkTheme: false
    },
  ];
}

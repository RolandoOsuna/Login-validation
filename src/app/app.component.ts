import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-validation';

  constructor() {

  }

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDgtZCedCjaIl8KKQCUvbGnTxo1A5T-F-4",
      authDomain: "mis-clientes-57f34.firebaseapp.com",
      // databaseURL: "https://mis-clientes-57f34-default-rtdb.firebaseio.com",
      // projectId: "mis-clientes-57f34",
      // storageBucket: "mis-clientes-57f34.appspot.com",
      // messagingSenderId: "787661764830",
      // appId: "1:787661764830:web:e9e6d087d29ff4921baa4f",
      // measurementId: "G-5JBBBDJFQN"
    };
  }

}

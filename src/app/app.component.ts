import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'relatecProj';
  constructor(private _snackBar: MatSnackBar) {}


  likeClick(event: Event){
    let snackBarRef = this._snackBar.open('you like', 'close',)
  }
}

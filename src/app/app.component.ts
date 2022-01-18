import {Component} from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pcrpggenarator';

  constructor(private appService: AppService) {
  }

  onSave(){
    this.appService.save_sheet()
  }
}

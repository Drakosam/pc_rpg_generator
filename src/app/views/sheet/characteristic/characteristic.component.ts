import {Component, OnDestroy} from '@angular/core';
import {Sheet} from "../classes/sheet";
import {Subscription} from "rxjs";
import {SheetService} from "../../../services/sheet.service";

@Component({
  selector: 'app-characteristic',
  templateUrl: './characteristic.component.html',
  styleUrls: ['./characteristic.component.scss']
})
export class CharacteristicComponent implements OnDestroy {

  public char_sheet: Sheet = new Sheet()
  public sub: Subscription

  constructor(private sheetService: SheetService) {
    this.sub = this.sheetService.character_sheet.subscribe( _new_sheet =>{
      this.char_sheet = _new_sheet
    })
  }

  ngOnDestroy() {
  }

  updateChar(){
  }
}

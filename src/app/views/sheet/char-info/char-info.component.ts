import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sheet} from "../classes/sheet";
import {SheetService} from "../../../services/sheet.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnDestroy {

  public char_sheet: Sheet = new Sheet()
  public sub: Subscription

  constructor(private sheetService:SheetService) {
    this.sub = sheetService.character_sheet.subscribe( _new_sheet=>{
      this.char_sheet = _new_sheet
    })
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe()
    }
  }
}

import {Injectable} from '@angular/core';
import {SaveSheet} from "../views/sheet/classes/save_sheet";
import {SheetService} from "./sheet.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private sheetService: SheetService) {
  }

  save_sheet() {
    const new_save = new SaveSheet()
    new_save.main_sheet = this.sheetService.get_sheet()
    console.log(JSON.stringify(new_save))

    let a = document.createElement('a')
    a.href = window.URL.createObjectURL(new Blob([JSON.stringify(new_save)], {type: "text/plain"}))
    a.download = "sheet.json"
    a.click()
    a.remove()
  }
}

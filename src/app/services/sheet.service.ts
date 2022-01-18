import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Characteristic, Sheet} from "../views/sheet/classes/sheet";

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private sheet = new Sheet()
  private _character_sheet: BehaviorSubject<Sheet> = new BehaviorSubject<Sheet>(this.sheet)
  public character_sheet = this._character_sheet.asObservable()

  constructor() {
    this.init_sheet()
    this._character_sheet.next(this.sheet)
  }

  public update_sheet(new_sheet: Sheet) {
    this.sheet = new_sheet
  }

  public get_sheet(): Sheet {
    return this.sheet
  }

  private init_sheet() {
    this.sheet.characteristics.push(
      new Characteristic('Weapon Skill', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Ballistics Skill', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Strength', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Toughness', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Agility', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Perception', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Intelligence', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Willpower', 25)
    )
    this.sheet.characteristics.push(
      new Characteristic('Fellowship', 25)
    )
  }

}

export class Sheet {
  name = 'player'
  char_class = 'player'
  level = '0'
  characteristics: Characteristic[] = []
  skills: Skills[] = []
  traits: Traits[] = []
}

export class Characteristic {
  name = ''
  value = 0

  constructor(_name: string, _value: number) {
    this.name = _name
    this.value = _value
  }
}

export class Skills {
  name = ''
  value = 0
  expert_lvl = 0
}

export class Traits {
  name = ''
  desc = ''
  type = ''
}

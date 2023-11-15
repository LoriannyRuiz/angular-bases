import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //asi inyectamos el servicio
  constructor(private dbzService: DbzService){}

  get Characters(): Character[]{
    return [...this.dbzService.Characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }
}

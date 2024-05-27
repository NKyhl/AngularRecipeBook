import { Component, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() addListItem = new EventEmitter<Ingredient>();

  onClickAdd(name: string, amount: number) {
    if (name && amount) {
      this.addListItem.emit(new Ingredient(name, amount))
    }
  }
}

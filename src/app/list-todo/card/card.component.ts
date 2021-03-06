import { Component, OnInit, Input } from '@angular/core';

import { NewTask } from '../new-task';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  @Input() todo;
  openCard: boolean = false;
  showTrash: boolean = false;
  colors = ['#61bd4f','#eb5a46','#f2d600','#c377e0'];

  checkBorder(border) {
    switch (border) {
      case 'value1':
        return this.colors[0]
        break;
      case 'value2':
        return this.colors[1]
        break;
      case 'value3':
        return this.colors[2]
        break;
      case 'value4':
        return this.colors[3]
        break;
      default:
        return this.colors[3]
        break;
    }
  }

  open() {
    this.showTrash = !this.showTrash;
    if(this.todo.text.length > 20) this.openCard = !this.openCard;
  }

  verifyLength(value) {
    return value.length > 20;
  }

  ngOnInit() {}
}

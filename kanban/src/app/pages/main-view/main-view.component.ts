import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Some random idea',
      'This is another random idea',
      'Build an idea application',
    ]),
    new Column('Research', [
      'Some random Research',
      'This is another random Research',
      'Build an Research application',
    ]),
    new Column('Todo', [
      'Some random Todo',
      'This is another random Todo',
      'Build an Todo application',
    ]),
    new Column('Done', [
      'Some random Done',
      'This is another random Done',
      'Build an Done application',
    ]),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

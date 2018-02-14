import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(
      [{
        path: '',
        component: TodoComponent
      }]
    )
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }

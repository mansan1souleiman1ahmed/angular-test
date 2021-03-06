import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { splitClasses } from "@angular/compiler";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit() {}
  //Set classes
  setClasses() {
    let classes = { todo: true, "is-complete": this.todo.completed };
    return classes;
  }
  //Toggle
  onToggle(todo) {
    todo.completed = !todo.completed;
  }
  //Delete
  onDelete(todo) {
    console.log("delete");
  }
}

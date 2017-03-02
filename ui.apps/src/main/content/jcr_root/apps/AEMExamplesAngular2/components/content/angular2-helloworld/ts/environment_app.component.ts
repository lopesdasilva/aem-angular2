
import {Component, View} from "angular2/core";

@Component({
    selector: 'my-app',
    template: `
        <div mdl class="todos">

            <div>
                <form (submit)="addTodo($event)">
                    <input [(ngModel)]="newTodo" (keyup.enter)="newTodo=''" class="textfield" name="newTodo"/>
                </form>
            </div>

            <div [hidden]="newTodo">
                Type in a new todo...
            </div>

            <div [hidden]="!newTodo">
                <!-- Another two-way binding example -->
                Typing: {{ newTodo }}
            </div>
        
                <div *ngFor="#todo of todos; # i=index" >
                    <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                        <input type="checkbox" [(ngModel)]="todo.completed" class="mdl-checkbox__input">
                        <span [ngClass]="{'checked': todo.completed}" class="mdl-checkbox__label">{{ todo.newTodo }}</span>
                        <span (click)="deleteTodo(i)" class="delete-icon">[X]</span>
                    </label>
                </div>

            <div class="mtop20">
                <button (click)="deleteSelectedTodos()">Delete Selected</button>
            </div>
            
        </div>
    `
})


export class AppComponent {
    newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
        this.newTodo = '';
        this.todos = [];
    }

    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        }
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
        //need ES5 to reverse loop in order to splice by index
        for(var i=(this.todos.length -1); i > -1; i--) {
            if(this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    }

}
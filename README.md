# angular-test

# Install dependencies
npm install

# Serve on localhost:4200
ng serve

# Build for production
ng build

# Index.html

## app-root

## How to import Bootstra two ways.
=> Json
=> Html

# App.folder

## There is a file called App.module.ts.

It is the entry point of Angular.

This file is where all components are imported.

When you create a component throught the Angular CLI you won't need to worry about this because Angular edit for you.

Angular is comprised of different modules.

Declaration is where the components are added (once created with A CLI) including the main App component.

The http modules are import to the file and added in the 'imports'.

The services are added in the providers.

And the main app component is boostraped <|:b (I know)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

# The components


In Angular all components come with a name.component.html file, a name.component.css file, 

a name.component.ts file(

We import the component from Angular core.

It contains something called the declarator,this means that includes meta data for the components like the selector (

the selector is the info used to direct the component into the html. It automatically added when you create the component with CLI. The templateUrl points to the html component and the styleUrls points to the style sheet of the component)
  
  ),
  
  name.component.spec.ts file (It has to with testing).



## App.component.spec.ts

The App componenent is the main component that contains all the components created. 
























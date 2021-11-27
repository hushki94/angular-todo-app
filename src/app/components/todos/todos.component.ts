import { Component, OnInit } from '@angular/core';
import {Todo } from './../../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[] = []
  content:string = ''
  completed:boolean = false
  input:string = ''
  updateInput:string = ''
  constructor() {}

  ngOnInit(): void {
    // this.todos = [{content:'sleep' , completed:false}]
  }
  delete(id:number){
    console.log(id)
    this.todos = this.todos.filter((elm ,i )=>{
      return i !== id
    })
  }
  add(){
    console.log('added')
    if(this.input){
      this.todos.push({
        content:this.input,
        completed:false
      })
    }
    this.input=''
  }
  update(id:number){
     let result= this.todos.find((elm,i)=>{
       return i===id
     })
     if(result){
      result.content=this.updateInput
     }
     this.updateInput=''
     
  }

}

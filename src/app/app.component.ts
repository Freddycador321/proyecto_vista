import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private http:HttpClient) { }
  usuarios:Usuario [] = []
  ngOnInit(): void {
    console.log("Ingrese hasta aqui")
    this.ver().subscribe((data:any)=>{
      this.usuarios = data
      console.log (data)
    })
  }
  title = 'vista';
  ver() {
    return this.http.get('http://127.0.0.1:8000/api/usuario');
  }
}

import { Component, OnInit } from "@angular/core";
import { Router }  from '@angular/router';



@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})
export class loginComponent implements OnInit {
    constructor(private router : Router){  }

    

    goToSingUp (){

this.router.navigate (['singup']);

    }

    ngOnInit(): void {
       
}
}
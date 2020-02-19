import { Component } from '@angular/core';
import { BackendHook } from '../services/api.backendhook';
import { Router } from '@angular/router';

@Component({
    selector: "LoginPage",
    templateUrl:"./user.loginTemplate.html"
})
export class LoginPage {
    constructor(private API: BackendHook, private router: Router){
    }

    loginUser(user){
        this.API.loginUser(user).subscribe((res)=>{
            if(res === null) {
                window.alert("incorrect username and password");
            } else {
                sessionStorage.setItem('username', res['username']);
                this.router.navigateByUrl('/home');
            }
        })
    }
}
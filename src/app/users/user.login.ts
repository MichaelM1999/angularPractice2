import { Component } from '@angular/core';
import { BackendHook } from '../services/api.backendhook';

@Component({
    selector: "LoginPage",
    templateUrl:"./user.loginTemplate.html"
})
export class LoginPage {
    constructor(private API: BackendHook){
    }

    loginUser(user){
        this.API.loginUser(user).subscribe((res)=>{
            if(res === null) {
                window.alert("incorrect username and password");
            } else {
                sessionStorage.setItem('username', res['username']);
                window.location.href = '/src/home';
            }
        })
    }
}
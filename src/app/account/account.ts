import { Component } from '@angular/core'
import { BackendHook } from '../services/api.backendhook'
import { error } from 'util'

@Component({
    selector: "AccountPage",
    templateUrl:"./account.html"
})
export class AccountPage {
    constructor(private API: BackendHook){
    }
    createUser(user){
        this.API.createUser(user).subscribe((res) =>{
            if(res['err']) {
                window.alert("user already exhists use a better username or password")
            } else {
                sessionStorage.setItem('username', res['username']);
                // window.location.href = '/src/home'
            }
        })
    }
}
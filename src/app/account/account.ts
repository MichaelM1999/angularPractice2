import { Component } from '@angular/core'
import { BackendHook } from '../services/api.backendhook'

@Component({
    selector: "AccountPage",
    templateUrl:"./account.html"
})
export class AccountPage {
    constructor(private API: BackendHook){
    }
    createUser(user){
        this.API.loginUser(user).subscribe((res) =>{
            console.log(res)
        })
    }
}
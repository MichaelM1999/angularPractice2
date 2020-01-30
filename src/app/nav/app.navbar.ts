import { Component, OnInit } from '@angular/core'

@Component ({
    selector: "Navbar",
    templateUrl: './app.navbar.html'
})
export class Navbar implements OnInit {
    public loggedUser:any

    ngOnInit(){
        this.loggedUser = sessionStorage.getItem('username')
    }
    logout(){
        this.loggedUser = null
        sessionStorage.clear();
        window.location.href = '/src/login';
        sessionStorage.getItem('username');
    }
}
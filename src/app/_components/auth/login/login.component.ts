import {Component, OnInit} from '@angular/core';
import {User} from "~/app/_models/user";
import {Page} from "tns-core-modules/ui/page";

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id,
})
export class LoginComponent implements OnInit {
    public user: User;

    constructor(
        private page: Page
    ) {
        this.page.actionBarHidden = true;
        this.user = new User();
    }

    ngOnInit() {}
}

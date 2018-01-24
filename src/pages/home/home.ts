import { Component, ChangeDetectionStrategy } from "@angular/core";  
import { ModalController, NavController } from 'ionic-angular';  

import { DetailsPage } from '../details/details';  
import { BirthdayStore } from "../../shared/stores/birthday.store";
import { Birthday } from "../../shared/models/birthday";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {  
    public today = new Date();

    constructor(
        public nav: NavController,
        public modalCtrl: ModalController,
        public store: BirthdayStore) {
    }

    showDetail(birthday: Birthday) {  
        let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday });
        modal.present();
    }
}
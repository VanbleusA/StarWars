import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private contact : FormGroup;

  private validFormMessage: string;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.contact = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      mail: ["", Validators.required],
      message: ["", Validators.required]
    });
    this.validFormMessage = "";
  }

  contactAssociation() {
    console.log("Association contacted", this.contact.value);
    this.validFormMessage = "Message envoyé !";
    setTimeout(() => {
      this.validFormMessage = "";
    }, 2000);
  }
}

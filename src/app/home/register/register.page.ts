import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  name: string = '';
  appaterno: string = '';
  apmaterno: string = '';
  user: string = '';
  email: string = '';
  telephone: string = '';
  address: string = '';
  password: string = '';
  passworddupe: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  register(form: NgForm){
    console.log('form: ', form);
    console.log(form.value);
    console.log(form.valid);
    console.log(form.invalid);

    if (form.valid) {
      if (this.password === this.passworddupe) {
        this.navController.navigateBack('/login');
      } else {
        this.passwordToast();
      }      
    }
  }

  async passwordToast() {
    const toast = await this.toastController.create({
      message: 'Las contraseñas no coinciden',
      duration: 3000,
      position: 'bottom',
      color: 'warning',
    });

    await toast.present();
  }
}

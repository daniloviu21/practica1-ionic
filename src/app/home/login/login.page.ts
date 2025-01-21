import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  user: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private navController: NavController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if (form.valid) {
      if (this.user === 'admin' && this.password === 'admin123') {
        this.navController.navigateBack('/inicio');
      } else {
        this.passwordToast();
      }
    }
  }

  async passwordToast() {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas',
      duration: 3000,
      position: 'bottom',
      color: 'warning',
    });

    await toast.present();
  }

}

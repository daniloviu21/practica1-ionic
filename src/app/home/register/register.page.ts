import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  name: string = '';
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

  register(){
    if (this.name == '' || this.user == '' || this.email == '' || this.telephone == '' || this.address == '' || this.password == '' || this.passworddupe == '') {    
      this.presentToast();
    }
    else if (this.password != this.passworddupe) {
      this.passwordToast();
    }
    else {
      this.navController.navigateForward('/inicio');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Datos incompletos',
      duration: 3000,
      position: 'bottom',
      color: 'warning',
    });

    await toast.present();
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

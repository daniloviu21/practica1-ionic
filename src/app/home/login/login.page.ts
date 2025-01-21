import { Component, OnInit } from '@angular/core';
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

  login(){
    if (this.user === "daniel" && this.email === "utcv@edu.com" && this.password === "utcv2025") {
      this.navController.navigateRoot('/inicio');
    }
    else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Las credenciales de acceso son incorrectas',
      duration: 3000,
      position: 'bottom',
      color: 'warning',
    });

    await toast.present();
  }

}

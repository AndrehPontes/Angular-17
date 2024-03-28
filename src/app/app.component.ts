import { Component } from '@angular/core';
import { MenuComponent } from "./navegacao/menu/menu.component";
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServicosComponent } from './institucional/servicos/servicos.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [MenuComponent, FooterComponent, HomeComponent, ServicosComponent, RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'MyProject';
}

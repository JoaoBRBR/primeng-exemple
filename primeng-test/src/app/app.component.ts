import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,ToolbarModule, AvatarModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'primeng-test';
}

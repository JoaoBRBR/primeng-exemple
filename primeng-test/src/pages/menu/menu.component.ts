import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    AutoCompleteModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DividerModule,
    ChipsModule,
    InputMaskModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public suggestions: any[]
  public chips: string[]
  constructor(){
    this.suggestions = ["joao", "marcos", "Guilherme", "otavio", "Pavel"];
    this.chips = []
  }
  selectedItem: any;

  public search(e:any){
    this.suggestions = ["joao", "marcos", "Guilherme", "otavio", "Pavel"];
  }
}

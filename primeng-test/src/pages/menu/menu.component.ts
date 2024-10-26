import { Component, OnInit } from '@angular/core';
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
import { SpeedDialModule } from 'primeng/speeddial';
import { MessagesModule } from 'primeng/messages';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DragDropModule } from 'primeng/dragdrop';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
}

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
    InputMaskModule,
    SpeedDialModule,
    MessagesModule,
    ToastModule,
    DragDropModule,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public suggestions: any[];
  public chips: string[];
  public items: MenuItem[];
  selectedItem: any;

  // parte do drag and drop
  availableProducts: Product[] | undefined;

  selectedProducts: Product[] | undefined;

  draggedProduct: Product | undefined | null;

  constructor(private messageService: MessageService) {
    this.suggestions = ['joao', 'marcos', 'Guilherme', 'otavio', 'Pavel'];
    this.chips = [];
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added',
          });
          console.log('AA');
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated',
          });
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted',
          });
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io',
      },
    ];
    this.selectedProducts = [];
    this.availableProducts = [
      { id: '1', name: 'Joao' },
      { id: '2', name: 'Tiago' },
      { id: '3', name: 'Mateus' },
      { id: '4', name: 'Pedro' },
      { id: '5', name: 'Pedro' },
    ];
  }
  public search(e: any) {
    this.suggestions = ['joao', 'marcos', 'Guilherme', 'otavio', 'Pavel'];
  }

  dragStart(product: Product) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [
        ...(this.selectedProducts as Product[]),
        this.draggedProduct,
      ];
      this.availableProducts = this.availableProducts?.filter(
        (val, i) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
      if (product.id === (this.availableProducts as Product[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }

  salvo(){
    this.messageService.add({
      severity: 'success',
      summary: 'Salvo',
      detail: 'Salvo com sucesso',
    });
  }
}

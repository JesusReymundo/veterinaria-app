import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasRoutingModule } from './citas-routing.module';

// 👇 importa directamente los componentes standalone
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { CitasAgendaComponent } from './components/citas-agenda/citas-agenda.component';

@NgModule({
  // 👇 elimina "declarations"
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CitasRoutingModule,
    CitaFormComponent,      // se importan, no se declaran
    CitasAgendaComponent    // se importan, no se declaran
  ]
})
export class CitasModule { }

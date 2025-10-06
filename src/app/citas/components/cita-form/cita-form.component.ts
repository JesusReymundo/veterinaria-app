import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 👈 esto habilita los formularios
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent {
  citaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.citaForm = this.fb.group({
      nombreMascota: ['', Validators.required],
      dueno: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.citaForm.valid) {
      console.log('Datos de la cita:', this.citaForm.value);
      alert('Cita registrada correctamente');
      this.citaForm.reset();
    } else {
      alert('Completa todos los campos antes de registrar la cita');
    }
  }
}

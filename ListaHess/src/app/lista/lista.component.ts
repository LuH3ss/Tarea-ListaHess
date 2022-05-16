import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  estudiantes=[
    {
      nombre:'Sofia Castro',
      edad:28,
      curso:'Introducción a UX/UI',
      estado:'Inscripto',
      observaciones:'Ninguna',
    },
    {
      nombre:'Isaia',
      edad:34,
      curso:'Maquetación con CSS Grid',
      estado:'Inscripto',
      observaciones:'Ninguna',
    },
    {
      nombre:'Salome',
      edad:20,
      curso:'EcmaScript 6+',
      estado:'Pendiente',
      observaciones:'Pagar matricula. Nada más',
    },
    {
      nombre:'Federico',
      edad:22,
      curso:'Manipulación del DOM',
      estado:'Rechazado',
      observaciones:'No tuvo una nota por bajo del promedio en el examen de ingreso',
    },
    {
      nombre:'Augusto',
      edad:30,
      curso:'Ingles orientado al Marketing',
      estado:'Inscripto',
      observaciones:'Ninguna',
    },
    {
      nombre:'Romina',
      edad:28,
      curso:'Diseño para Desarrolladores',
      estado:'Rechazado',
      observaciones:'No presentó la documentación básica para comenzar con la inscripción',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

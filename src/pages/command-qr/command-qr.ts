import { Command } from './../interface/command.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { QRCodeComponent } from 'angularx-qrcode';
import { COMMANDS } from '../interface/command.data';

@Component({
  selector: 'app-command-qr',
  imports: [ MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    QRCodeComponent,
    CommonModule
    ],
  templateUrl: './command-qr.html',
  styleUrl: './command-qr.css',
})
export class CommandQr {
  commands = COMMANDS;
}

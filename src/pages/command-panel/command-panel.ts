import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrinterService } from '../../services/printer.service';
import { COMMANDS } from '../interface/command.data';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions, MatCardSubtitle, MatCardHeader } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/input";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Command } from '../interface/command.interface';

@Component({
  selector: 'app-command-panel',
  imports: [MatIconModule, FormsModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './command-panel.html',
  styleUrl: './command-panel.css',
})
export class CommandPanel {
   loading = false;
  successMsg = '';
  errorMsg = '';
currentJobId!: number;

    commands: Command[] = [];

  ngOnInit() {
    this.commands = COMMANDS.map(cmd => ({
      ...cmd   // ✅ deep copy each object
    }));
  }
trackByLabel(index: number, item: Command) {
  return item.label;
}
// commands = COMMANDS;

  constructor(private printer: PrinterService) {}
  // send(cmd: string) {
  //     this.loading = true;
  //   this.successMsg = '';
  //   this.errorMsg = '';

  //     this.printer.sendCommand(cmd).subscribe({
  //     next: res => {
  //       this.loading = false;
  //       this.successMsg = res.message || 'Command sent successfully';
  //     },
  //     error: err => {
  //       this.loading = false;
  //       this.errorMsg = err;
  //     }
  //   });
  // }
  send(cmd: string) {
  this.loading = true;
  this.successMsg = '';
  this.errorMsg = '';

  this.printer.sendCommand(cmd).subscribe({
    next: res => {
      this.currentJobId = res.job.id;
      this.watchStatus();   // 👈 important
    },
    error: err => {
      this.loading = false;
      this.errorMsg = '❌ Server error';
    }
  });
}
watchStatus() {
  const interval = setInterval(() => {
    this.printer.getJobStatus(this.currentJobId).subscribe(status => {

      if (status === 'PRINTED') {
        this.loading = false;
        this.successMsg = '✅ Printed successfully';
        clearInterval(interval);
      }

      if (status === 'PRINTER_ERROR') {
        this.loading = false;
        this.errorMsg = '🖨 Printer not responding';
        clearInterval(interval);
      }

    });
  }, 1000);
}
}

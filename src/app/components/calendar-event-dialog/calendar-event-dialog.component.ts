import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from '../../../model/calendarevent.model';

@Component({
  selector: 'app-calendar-event-dialog',
  templateUrl: './calendar-event-dialog.component.html',
  styleUrl: './calendar-event-dialog.component.scss',
})
export class CalendarEventDialogComponent {
  formattedDate: string;
  editMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CalendarEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public eventData: CalendarEvent
  ) {
    const date = new Date(eventData.date);
    this.formattedDate = `${      date.getMonth() + 1    }/${date.getDate()}/${date.getFullYear()}`;
        console.log('Data: ', eventData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  enableEdit(): void {
    this.editMode = true;
  }

  saveChanges(): void {
    this.editMode = false;
  }
}

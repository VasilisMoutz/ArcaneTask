// calendar-scheduler.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarScheduleComponent } from './calendar-schedule.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [CalendarScheduleComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule, FullCalendarModule],
  exports: [CalendarScheduleComponent],
})
export class CalendarSchedulerModule {}

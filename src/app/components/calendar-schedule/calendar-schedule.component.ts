import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AbstractBaseComponent } from '../AbstractBaseComponent';
import { EventDef, Identity } from '@fullcalendar/core/internal';
import { CalendarEvent } from '../../../model/calendarevent.model';

@Component({
  selector: 'app-calendar-schedule',
  templateUrl: './calendar-schedule.component.html',
  styleUrls: ['./calendar-schedule.component.scss'],
})
export class CalendarScheduleComponent
  extends AbstractBaseComponent
  implements OnInit
{
  userEvents: CalendarEvent[] = [
    { title: 'Event 1', date: '2023-12-06', backgroundColor: 'red' ,textColor:'black'},
    { title: 'Event 2', date: '2023-12-12', backgroundColor: 'green' },
  ];

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.userEvents,
    themeSystem: 'bootstrap5',
    locale: 'de',
    eventClick: (info) => {
      console.log('Event ', info.event.title, ' wurde angeklickt');
      this.openDialog(info);
    },
    dateClick: (info) => {
      console.log('Datum wurde angeklickt', info.date);
    },
    eventMouseEnter: (info) => {
      info.event.setProp('backgroundColor', 'blue'); // Überschreiben der Hintergrundfarbe
    },
    eventMouseLeave: (info) => {
      info.event.setProp('backgroundColor', 'red'); // Überschreiben der Hintergrundfarbe
    }
  };

  openDialog(info: any) {
    console.log('openDialog');
    console.log(info);
  }
}

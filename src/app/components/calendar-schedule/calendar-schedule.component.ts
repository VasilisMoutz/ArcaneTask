import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { CalendarEvent } from '../../../model/calendarevent.model';
import { AbstractBaseComponent } from '../AbstractBaseComponent';
import { CalendarEventDialogComponent } from '../calendar-event-dialog/calendar-event-dialog.component';
import { EventImpl } from '@fullcalendar/core/internal';

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
    {
      title: 'Event 1',
      date: '2023-12-06',
      backgroundColor: 'red',
      textColor: 'black',
    },
    {
      title: 'Event 2',
      date: '2023-12-12',
      backgroundColor: 'green',
      extendedProps: {
        tags: new Map<string, string>([
          ['playing_cards', 'OP TCG Spielen'],
          ['event', 'Spielraum'],
        ]),
      },
    },
  ];

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridWeek,dayGridDay', // user can switch between the two
    },
    weekends: true,
    events: this.userEvents,
    themeSystem: 'bootstrap5',
    locale: 'de',
    eventClick: (info) => {
      console.log('Event ', info, ' wurde angeklickt');
      this.openDialog(
        this.convertToCalendarEvent(info.event),
        CalendarEventDialogComponent
      );
    },
    dateClick: (info) => {
      console.log('Datum wurde angeklickt', info.date);
    },
    eventMouseEnter: (info) => {
      info.event.setProp('backgroundColor', 'blue'); // Überschreiben der Hintergrundfarbe
    },
    eventMouseLeave: (info) => {
      info.event.setProp('backgroundColor', 'red'); // Überschreiben der Hintergrundfarbe
    },
  };

  openDialog(eventData: CalendarEvent, component: any) {
    this.dialog.open(component, {
      data: eventData,
      autoFocus: false,
    });
  }

  private convertToCalendarEvent(event: EventImpl): CalendarEvent {
    var eventDetails = event._def;
    var startDate: Date = event.start!;
    var calendarEvent: CalendarEvent = {
      title: eventDetails.title,
      date: startDate.toISOString(),
      backgroundColor: event.backgroundColor,
      textColor: 'black',
    };
    return calendarEvent;
  }
}

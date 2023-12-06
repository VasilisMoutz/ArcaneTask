import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarSchedulerModule } from '../../components/calendar-schedule/calendar-schedule.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CalendarSchedulerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
}

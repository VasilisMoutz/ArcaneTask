import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarSchedulerModule } from '../../components/calendar-schedule/calendar-schedule.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarSchedulerModule, MatGridListModule, MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

}

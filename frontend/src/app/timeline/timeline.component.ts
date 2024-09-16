import { Component, OnInit } from '@angular/core';
import { TimelineDataService } from '../timeline-data.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  periods: any[] = [];  // Tableau pour stocker toutes les périodes

  constructor(private timelineDataService: TimelineDataService) { }

  ngOnInit(): void {
    this.timelineDataService.getTimelineData().subscribe(data => {
      this.periods = data.historiqueMusulman;  // Récupère toutes les périodes
    });
  }
}

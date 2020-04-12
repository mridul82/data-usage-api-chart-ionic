import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../../services/usage.service';

@Component({
  selector: 'app-overall-usage',
  templateUrl: './overall-usage.component.html',
  styleUrls: ['./overall-usage.component.scss'],
})
export class OverallUsageComponent implements OnInit {
  data: any;

  constructor(private usage: UsageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getData ();
    }, 5000);
  }

  async getData() {
    await this.usage.getUsage().subscribe(
      res => {
      console.log(res);
      this.data = res;
      }
    );
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { UsageService } from '../../../services/usage.service';

import { Data } from '../../../interfaces/Usage';

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.scss'],
})
export class UsageChartComponent implements OnInit {
  

  @ViewChild('barChart', {static: true}) barChart: ElementRef;

  bars: any;
  colorArray: any;

  data: Data[] = [];
  vol = [];
  down = [];
  upload = [];

constructor(private usage: UsageService) { }

  ngOnInit() {
    this.usage.getTotallUsage().subscribe((result: Data[]) => {
      console.log(result);
      for (const x of result) {
        // console.log(x);
        this.vol.push(x.total_usage_vol);
        this.down.push(x.total_download_vol);
        this.upload.push(x.total_upload_vol);
        // console.log(this.vol);
      }
      // result.forEach((x) => {
      //   this.vol.push(x.total_usage_vol);
      //   this.vol = this.vol;
      // });
      console.log(this.vol);
      this.createBarChart(this.vol, this.down, this.upload);
    });
    
    
  }

  // ionViewDidEnter() {
  //   this.createBarChart();
  // }

  createBarChart(vol, down, up) {
    // console.log(vol);
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['March', 'April'],
        datasets: [{
          label: 'Usage(GB)',
          data: vol,
          backgroundColor: 'rgb(38, 194, 129)', 
          // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',
          // array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Download(GB)',
          data: down,
          backgroundColor: 'rgb	(38,255,0)', 
          // array should have same number of elements as number of dataset
          borderColor: 'rgb	(38,255,0)',
          // array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Upload(GB)',
          data: up,
          backgroundColor: '#FF0000', 
          // array should have same number of elements as number of dataset
          borderColor: '#FF0000',
          // array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          labels: {
            padding: 0,

          }
        }
      }
    });
  }

}

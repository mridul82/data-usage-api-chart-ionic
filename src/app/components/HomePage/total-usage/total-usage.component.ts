import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../../services/usage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-usage',
  templateUrl: './total-usage.component.html',
  styleUrls: ['./total-usage.component.scss'],
})
export class TotalUsageComponent implements OnInit {
  data: any;
  slideOpts = {
    spaceBetween: -20,
    slidesPerView: 1.1,
    initialSlide: 0,
   
  };
  constructor(private usage: UsageService, private router: Router) { }

  ngOnInit() {

    this.totalUsage();
  }

  async totalUsage() {
    await this.usage.getTotallUsage().subscribe(
      res => {
        console.log(res);
        this.data = res;
      }
    );
  }

  navigateToUsage() {
    this.router.navigateByUrl('/tabs/tab2');
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Chart, ChartData, ChartOptions } from 'chart.js'; // Import necessary types from Chart.js
import Chart from 'chart.js/auto';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-costumepie',
  templateUrl: './costumepie.component.html',
  styleUrls: ['./costumepie.component.scss']
})
export class CostumepieComponent {
  public CostumeArray: any[] = [];
  
  constructor(private db: DbserviceService) { }
  
  public chart!:any;

  @ViewChild('myChart') myChart!: ElementRef;

  ngAfterViewInit(): void {
    this.db.costumepie().then((data: any) => {
      this.CostumeArray = data;
      this.createChart();
    });
  }

  createChart() {
    const chartData = {
    labels: this.CostumeArray.map(item => item.costumename),
    datasets: [{
    // data: this.categorydataarray.map(item => item.someNumericProperty), 
    // replace with actual numeric property
    data: this.CostumeArray.map(item => item.total_bookings),
    backgroundColor: [
    'rgba(255, 99, 132, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 206, 86, 0.7)',
   ' rgba(75, 192, 192, 0.7)' ,
'rgba(153, 102, 255, 0.7)' ,
'rgba(255, 159, 64, 0.7)' ,

    ],
    }],
    };
    this.chart = new Chart(this.myChart.nativeElement, {
    type: 'pie',
    data: chartData,
    options: { aspectRatio: 2.5 }
    });
    }
  }
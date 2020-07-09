import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { isArray } from 'util';
@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  data: any = [];
  selected = {};
  addedElement;
  addedElementsArr = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../../assets/week.json').subscribe(res => {
      this.data = res;
    })
  }

  OnSelect($event) {
    // console.log($event)
    this.selected = this.data.filter(d => {
      return d.patientId == $event.value
    })
    let patients = document.getElementsByClassName('patient');
    for (let i = 0; i < patients.length; i++) {
      patients[i].innerHTML = '';
    }
    this.addedElementsArr = [];
    this.selected[0].treatment.map(p => {
      if (isArray(p)) {
        let weekInArray = p[0].week;
        console.log(p)
        p.map(subp => {
          switch (subp.name) {
            case 'clinic':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img style="width:100%" src='../../assets/icons/clinic/clinic@3x.png'>`);
              break;
            case 'labs':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/labs/labs@3x.png'>`);
              break;
            case 'radiology':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/radiology/radiology@3x.png'>`);
              break;
            case 'pathology':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/pathology/pathology@3x.png'>`);
              break;
            case 'endoscopy':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/endoscopy/endoscopy@3x.png'>`);
              break;
            case 'ecare':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/ecare/ecare@3x.png'>`);
              break;
            case 'my-coach':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/my-coach/my-coach@3x.png'>`);
              break;
            case 'surgery':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/surgery/surgery@3x.png'>`);
              break;
            case 'post-sugnery-self-assessment':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/post-sugnery-self-assessment/post-sugnery-self-assessment@3x.png'>`);
              break;
            case 'my-menu':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img src='../../assets/icons/my-menu/my-menu@3x.png'>`);
              break;
          }
        })
        console.log(this.addedElementsArr)
        this.addedElementsArr.forEach(e => {
          document.getElementById(weekInArray).innerHTML += e;
        })
      }
      else {
        switch (p.name) {
          case 'clinic':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/clinic/clinic@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'labs':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/labs/labs@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'radiology':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/radiology/radiology@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'pathology':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/pathology/pathology@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'endoscopy':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/endoscopy/endoscopy@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'ecare':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/line.png'><img src='../../assets/icons/ecare/ecare@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'my-coach':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/my-coach/my-coach@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'surgery':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/surgery/surgery@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'post-sugnery-self-assessment':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/post-sugnery-self-assessment/post-sugnery-self-assessment@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
          case 'my-menu':
            this.addedElement = `<img src='../../assets/icons/line.png'><img src='../../assets/icons/my-menu/my-menu@3x.png'>`;
            document.getElementById(p.week).innerHTML += this.addedElement;
            break;
        }
      }
    })
  }
}

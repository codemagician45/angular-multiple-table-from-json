import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { isArray } from 'util';
@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  year = 2020;
  currentMonth = '';
  data: any = [];
  currentData: any = [];
  selected = {};
  addedElement;
  addedElementsArr = [];
  icons: any = '';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../../assets/month.json').subscribe(res => {
      this.data = res['care_pathway_activities'];
      this.iconAction();
    })
  }
  previousYear() {
    this.year = this.year - 1;
    this.iconAction();
  }

  nextYear() {
    this.year = this.year + 1;
    this.iconAction();
  }

  iconAction() {
    let month;
    let temp;
    let patientsDiv = document.getElementsByClassName('patient');
    for (let i = 0; i < patientsDiv.length; i++) {
      patientsDiv[i].innerHTML = ''
    }

    this.data.map(tmp => {
      if (tmp.date.indexOf(this.year) != -1) {
        temp = tmp;
        month = parseInt(tmp.date.substring(5, 7));
      }
    })

    this.currentMonth = this.months[month - 1];
    if (this.currentMonth) {
      if (isArray(temp.treatment)) {
        this.addedElementsArr = [];
        temp.treatment.map(t => {
          switch (t.type) {
            case 'clinic':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/clinic/clinic@3x.png'>`);
              break;
            case 'labs':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/labs/labs@3x.png'>`);
              break;
            case 'radiology':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/radiology/radiology@3x.png'>`);
              break;
            case 'pathology':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/pathology/pathology@3x.png'>`);
              break;
            case 'endoscopy':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/endoscopy/endoscopy@3x.png'>`);
              break;
            case 'ecare':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/ecare/ecare@3x.png'>`);
              break;
            case 'my-coach':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/my-coach/my-coach@3x.png'>`);
              break;
            case 'surgery':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/surgery/surgery@3x.png'>`);
              break;
            case 'post-sugnery-self-assessment':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/post-sugnery-self-assessment/post-sugnery-self-assessment@3x.png'>`);
              break;
            case 'my-menu':
              this.addedElementsArr.push(`<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/my-menu/my-menu@3x.png'>`);
              break;
          }
          document.getElementById(this.currentMonth).innerHTML = '';

          this.addedElementsArr.forEach(e => {
            document.getElementById(this.currentMonth).innerHTML += e;
          })
        })
        document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
      }
      else {
        switch (temp.treatment.type) {
          case 'clinic':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/clinic/clinic@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'labs':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/labs/labs@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'radiology':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/radiology/radiology@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'pathology':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/pathology/pathology@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'endoscopy':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/endoscopy/endoscopy@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'ecare':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/line.png'><img src='../../assets/icons/ecare/ecare@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'my-coach':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/my-coach/my-coach@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'surgery':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/surgery/surgery@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'post-sugnery-self-assessment':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/post-sugnery-self-assessment/post-sugnery-self-assessment@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
          case 'my-menu':
            this.addedElement = `<img src='../../assets/icons/line.png'><img class="icon" style="cursor: pointer" src='../../assets/icons/my-menu/my-menu@3x.png'>`;
            document.getElementById(this.currentMonth).innerHTML += this.addedElement;
            document.getElementById(`mark_${this.currentMonth}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
            break;
        }
      }
    }

    let icons = document.getElementsByClassName('icon');
    for (let i = 0; i < icons.length; i++) {
      icons[i].addEventListener('click', function () {
        console.log('aaaaaa')
      })
    }
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jspdf from 'jspdf';

@Component({
  selector: 'app-add-details-for-resume',
  templateUrl: './add-details-for-resume.component.html',
  styleUrls: ['./add-details-for-resume.component.css']
})
export class AddDetailsForResumeComponent implements OnInit {
  option: string;

  @ViewChild('content') content: ElementRef;
  experienced: boolean = false;
  countryList1 = [{ "id": 1, "name": "India" }, { "id": 2, "name": "Japan" }, { "id": 3, "name": "Australia" }, { "id": 4, "name": "USA" }, { "id": 5, "name": "New Zealand" }, { "id": 6, "name": "Ukrain" }, { "id": 7, "name": "Malaysia" }];
  countryList: { id, name }[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.option = this.route.snapshot.paramMap.get('option');
    if (this.option == '1') {
      this.experienced = true;
    } else {
      this.experienced = false;
    }
    this.countryList = JSON.parse(JSON.stringify(this.countryList1));
  }

  onSubmit(event: any) {
    console.log("submit");
    let content = this.content.nativeElement;
    let doc = new jspdf();
    let _elementHandlers =
    {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    doc.html(content.innerHTML);

    doc.save('test.pdf');

  }

}

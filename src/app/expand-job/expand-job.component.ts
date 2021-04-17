import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-expand-job",
  templateUrl: "./expand-job.component.html",
  styles: [":host >>> a { color: white; } "],
})
export class ExpandJobComponent implements OnInit {
  routing_data: any = [];
  link_to_apply: any = [];

  constructor(private router: Router, private location: Location) {
    this.routing_data = this.router.getCurrentNavigation().extras.state;
  }
  ngOnInit(): void {
    console.log(this.routing_data);
  }
  companySite(companySite) {
    window.open(companySite, "_blank");
  }

  GoBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}

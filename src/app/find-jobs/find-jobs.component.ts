import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../Service/api.service";

@Component({
  selector: "app-find-jobs",
  templateUrl: "./find-jobs.component.html",
  styleUrls: ["./find-jobs.component.css"],
})
export class FindJobsComponent implements OnInit {
  data: any = [];
  data1: any;

  constructor(private _apiService: ApiService, private router: Router) {
    this._apiService.getData().subscribe((res) => (this.data = res));
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  expandJobs(data) {
    this.router.navigate(["./expand-job"], {
      state: { disc: data },
    });
  }
}

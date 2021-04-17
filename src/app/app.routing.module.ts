import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpandJobComponent } from "./expand-job/expand-job.component";
import { FindJobsComponent } from "./find-jobs/find-jobs.component";


const routes: Routes = [
  { path: "", redirectTo: "/find-jobs", pathMatch: "full" },
  { path: "find-jobs", component: FindJobsComponent },  
  { path: "expand-job", component: ExpandJobComponent },  
  { path: "*", component: FindJobsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

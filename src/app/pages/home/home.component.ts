import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, ICourse } from '../../models/master.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  masterSrv = inject(MasterService);
  courseList = signal<ICourse[]>([]);

  ngOnInit(): void {
    // Initialization logic here
  }

  loadCourses() {
    this.masterSrv.getAllCourses().subscribe((res:IApiResponse)=>{
      this.courseList.set(res.data)
    }, (error) => {
      
    });
  }
}

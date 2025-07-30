import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, ICourse } from '../../models/master.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  masterSrv = inject(MasterService);
  courseList = signal<ICourse[]>([]);

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.masterSrv.getAllCourses().subscribe((res:IApiResponse)=>{
      this.courseList.set(res.data)
    }, (error) => {

    });
  }
}

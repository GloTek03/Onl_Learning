import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { MyCourseComponent } from './pages/my-course/my-course.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courseDetail',
        component: CourseDetailComponent
    },
    {
        path: 'myCourse',
        component: MyCourseComponent
    }
];

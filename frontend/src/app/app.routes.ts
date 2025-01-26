import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MinistriesComponent } from './components/ministries/ministries.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommunityComponent } from './components/community/community.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConstructionComponent } from './components/construction/construction.component'
import { ChildrenHomeComponent } from './components/children-home/children-home.component';
import { MenconferenceComponent } from './components/menconference/menconference.component';
import { MenfeedingComponent } from './components/menfeeding/menfeeding.component';
import { YouthseminarComponent } from './components/youthseminar/youthseminar.component';
import { YouthfeedingComponent } from './components/youthfeeding/youthfeeding.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'ministry', component: MinistriesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'navbar', component: NavbarComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'construction', component: ConstructionComponent},
    { path: 'children', component: ChildrenHomeComponent},
    { path:  'men', component: MenconferenceComponent},
    { path:  'menfeed', component: MenfeedingComponent},
    { path:  'youth', component: YouthseminarComponent},
    { path:  'youthfeed', component: YouthfeedingComponent},
    
  ];


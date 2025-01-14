import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { WhyusComponent } from './components/pages/whyus/whyus.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamdetailComponent } from './components/pages/teamdetail/teamdetail.component';
import { PortfoliogridComponent } from './components/pages/portfoliogrid/portfoliogrid.component';
import { PortfoliomasonaryComponent } from './components/pages/portfoliomasonary/portfoliomasonary.component';
import { PortfoliosliderComponent } from './components/pages/portfolioslider/portfolioslider.component';
import { PortfoliodetailComponent } from './components/pages/portfoliodetail/portfoliodetail.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { BlogclassicComponent } from './components/pages/blogclassic/blogclassic.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BlogdetailComponent } from './components/pages/blogdetail/blogdetail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'homepage-2',
    component: Homepage2Component,
  },
  {
    path: 'homepage-3',
    component: Homepage3Component,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'service-detail',
    component: ServicedetailComponent,
  },
  {
    path: 'why-choose-us',
    component: WhyusComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'team-detail',
    component: TeamdetailComponent,
  },
  {
    path: 'portfolio-grid',
    component: PortfoliogridComponent,
  },
  {
    path: 'portfolio-masonary',
    component: PortfoliomasonaryComponent,
  },
  {
    path: 'portfolio-slider',
    component: PortfoliosliderComponent,
  },
  {
    path: 'portfolio-detail',
    component: PortfoliodetailComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'blog',
    component: BlogclassicComponent,
  },
  {
    path: 'blog-grid',
    component: BloggridComponent,
  },
  {
    path: 'blog-detail',
    component: BlogdetailComponent,
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Header3Component } from './components/layouts/header3/header3.component';
import { ServicesidebarComponent } from './components/layouts/servicesidebar/servicesidebar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogclassicComponent } from './components/pages/blogclassic/blogclassic.component';
import { BlogdetailComponent } from './components/pages/blogdetail/blogdetail.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { HomeComponent } from './components/pages/home/home.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { PortfoliodetailComponent } from './components/pages/portfoliodetail/portfoliodetail.component';
import { PortfoliogridComponent } from './components/pages/portfoliogrid/portfoliogrid.component';
import { PortfoliomasonaryComponent } from './components/pages/portfoliomasonary/portfoliomasonary.component';
import { PortfoliosliderComponent } from './components/pages/portfolioslider/portfolioslider.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamdetailComponent } from './components/pages/teamdetail/teamdetail.component';
import { WhyusComponent } from './components/pages/whyus/whyus.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BlogsidebarComponent,
    FooterComponent,
    Footer2Component,
    Footer3Component,
    HeaderComponent,
    Header2Component,
    Header3Component,
    ServicesidebarComponent,
    AboutComponent,
    BlogclassicComponent,
    BlogdetailComponent,
    BloggridComponent,
    FaqsComponent,
    ContactusComponent,
    HomeComponent,
    Homepage2Component,
    Homepage3Component,
    PortfoliodetailComponent,
    PortfoliogridComponent,
    PortfoliomasonaryComponent,
    PortfoliosliderComponent,
    ServicedetailComponent,
    ServicesComponent,
    TeamComponent,
    TeamdetailComponent,
    WhyusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

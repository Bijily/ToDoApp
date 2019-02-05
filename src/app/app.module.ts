import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    declarations: [AppComponent, HeroComponent, FooterComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}

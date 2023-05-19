import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero.module';

// Components
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule, HeroModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

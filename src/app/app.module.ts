import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipePipe } from './content-filter-pipe.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CreateComponentComponent } from './create-component/create-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { SnackbarComponentComponent } from './snackbar-component/snackbar-component.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
    AddContentDialogComponent,
    SnackbarComponentComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  entryComponents: [AddContentDialogComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSnackBarModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false, delay: 0
      }),
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: 'content/:id', component: ContentDetailComponent},
      {path: 'content', component: ContentListComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

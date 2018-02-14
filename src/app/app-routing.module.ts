import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './post/posts/posts.component';

const routes: Routes = [
      {
        path: 'todo',
        loadChildren: 'app/todo/todo.module#TodoModule'
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
      {
        path: 'armando',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


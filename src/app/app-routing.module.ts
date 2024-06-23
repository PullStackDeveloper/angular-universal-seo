import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "../modules/page-not-found/page-not-found.component";
import {blogPostResolver} from "../modules/blog-post/resolvers/blog-post/blog-post.resolver";

const routes: Routes = [
  {
    path: 'blog-post/:id',
    loadChildren: () => import('../modules/blog-post/blog-post.module').then(m => m.BlogPostModule),
    resolve: {
      data: blogPostResolver // Add the resolver here
    }
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent} // Add a wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

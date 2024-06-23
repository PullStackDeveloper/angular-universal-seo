import {NgModule} from "@angular/core";
import {BlogPostComponent} from "./blog-post.component";
import {CommonModule} from "@angular/common";
import {BlogPostRoutingModule} from "./blog-post.routing";

@NgModule({
  declarations: [BlogPostComponent],
  exports: [BlogPostComponent],
  imports: [CommonModule,BlogPostRoutingModule],
  providers: []
})
export class BlogPostModule {

}

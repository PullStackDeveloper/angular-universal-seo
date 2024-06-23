import { ResolveFn, Router } from '@angular/router';
import {inject} from "@angular/core";
import {BlogPostService} from "../../services/blog-post/blog-post.service";
import {SeoService} from "../../services/seo/seo.service";
import {map} from "rxjs";

export const blogPostResolver: ResolveFn<any> = (route, state) => {
  const postService = inject(BlogPostService);
  const seoService = inject(SeoService);
  const router = inject(Router);
  const id = route.paramMap.get('id');
  if (id) {
    return postService.getBlogPost( id).pipe(map((data: any) => {
      if (!data) {
        router.navigate(['/404']).then(() => false);
        return null;
      }
      seoService.updateMetaTags({
        keyWords:  data.keyWords,
        title: data.title,
        description: data.description,
        image:  data.image,
        url: data.url
      });
      return data
    }))
  }
  return null;
};

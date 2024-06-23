import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'; // Import this line
import {MetaTagInterface} from "../../models/meta-tag.interface"; // Import this line
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }

  updateMetaTags(config: MetaTagInterface): void {

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.description });

    // Facebook Linkedin Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: config.url });

    //Twitter Cards
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}

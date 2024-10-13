import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
import { Button } from "../../shared/components/button/button";
import { Icon } from "../../shared/components/icon/icon";
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch, Button, Icon],
  standalone: true
})
export class AboutPage{
profile() {
throw new Error('Method not implemented.');
}
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
fileIcon: any;
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }

  public contactInfo = [
    {
      title: 'Address',
      desc: `Luanda, Luanda, Angola`,
      link: 'https://maps.app.goo.gl/dT2aE2RxeQTEA7ne7'
    },
    {
      title: 'Mobile Number',
      desc: '+244930333042',
      link: 'tel:+244930333042'
    },
    {
      title: 'Email',
      desc: 'isaacisvaldobunga300@gmail.com',
      link: 'mailto:isaacisvaldobunga300@gmail.com'
    }
  ]
}

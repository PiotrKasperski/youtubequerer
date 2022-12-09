import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './model/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  title = 'youtubequerer';

  videoList: Video[]=[
    {
      title: 'Given Up [Official Music Video] - Linkin Park',
      link: 'https://www.youtube.com/watch?v=3UGH35xyN40'
    },
    {
      title: 'R.E.M. - Drive',
      link: 'https://www.youtube.com/watch?v=DvMe9lYdr3Y'
    }
  ];

  currentVideoId:string= '';


  ngOnInit(): void {
    this.selectVideo(this.videoList[0]);
  }

  onVideoEnd($event: YT.OnStateChangeEvent) {
      this.selectVideo(this.videoList[1]);
  }
  selectVideo(video:Video){
    const params= new URL(video.link).searchParams;
    this.currentVideoId = params.get('v')!;
  }

}

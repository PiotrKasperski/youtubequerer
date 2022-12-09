import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  private apiLoaded = false;
    @Input() videoId:string='';
    @Output() onVideoEnd = new EventEmitter<YT.OnStateChangeEvent>
  constructor(){

  }
 ngOnInit(): void {
    if(!this.apiLoaded){
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded =true;
    }
  }
onStateChange(event: YT.OnStateChangeEvent) {
  if(event.data===0)
  this.onVideoEnd.emit(event);
}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-presentation',
  templateUrl: './image-presentation.component.html',
  styleUrls: ['./image-presentation.component.css']
})
export class ImagePresentationComponent implements OnInit {
  @Input() index: number;
  imageList =[
    ['https://live.staticflickr.com/2/3038523_c3c16960cd_b.jpg', "https://api.creativecommons.engineering/v1/thumbs/603da40d-9622-491f-bf63-d0bccb879123","You have 2 of them on your face"],
    ["https://api.creativecommons.engineering/v1/thumbs/73e672b8-6cf5-47b4-a77f-6065947619fa","https://pixy.org/download/4463580/","Its a small pretty flying bug"],
    ["https://live.staticflickr.com/51/142520422_6ad756ddf6_b.jpg", "https://live.staticflickr.com/5218/5483846837_cb3973cb07.jpg","A dog sleeps in one outside"],
    ["https://api.creativecommons.engineering/v1/thumbs/7e44be50-e587-49d5-8f96-c2e462023bbb","https://live.staticflickr.com/3067/2760578911_7f682250c3_b.jpg","You can eat one at a party"],
    ["../assets/honey.png","../assets/bee.png","They make honey"],
    ['../assets/star-pic.png',"https://api.creativecommons.engineering/v1/thumbs/ed2305f0-9a9f-47e1-8607-e2848e676136","Sea creature that look like a star"],
    ["https://api.creativecommons.engineering/v1/thumbs/b9bbd2be-a68e-4d2c-ad85-f43000cb8d55","https://api.creativecommons.engineering/v1/thumbs/33ef99cc-64a1-4112-aa6d-2584ca748d3a", 'A type of fish that look like a cat'],
    ["https://cdn.pixabay.com/photo/2013/07/12/17/12/sun-151763_960_720.png","https://cdn.pixabay.com/photo/2013/07/13/10/08/flower-156608_960_720.png","Type of flower that looks like the sun"],
    ["https://cdn.pixabay.com/photo/2016/03/08/21/50/watercolor-1244885_960_720.jpg","https://api.creativecommons.engineering/v1/thumbs/068c0384-c985-41c5-8e56-a8e03e8b2469","What has lots of colors and appear after it rains"],
    ["../assets/corn.png","../assets/dog.png","Think of hotdogs wrap in pancake"],
    ['../assets/foot-pic.png',"https://api.creativecommons.engineering/v1/thumbs/d3a26ed2-1b0b-4ad3-90bc-8eb3e1a581e1","Eveyone loves to catch this type of sports ball"]
  ];


  constructor() { }

  ngOnInit(): void {
    
  }

}

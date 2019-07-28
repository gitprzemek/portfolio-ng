import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
declare let $: any;
import 'chance';
declare var Chance: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  hidden:any;
  giveZIndex: number;
  chance: any;
  status: boolean;

  constructor() {
  }

  toggleHeader(data) {
    setTimeout(() => { 
      this.status = data; 
    }, 3500);
  }
  ngOnInit() {
    
      var imageDataArray = [];
      var canvasCount = 35;
      var chance = new Chance();
  // Instantiate Chance so it can be used
      $("#header-cont").click(function(){
        html2canvas($(".header__image")[0], {backgroundColor: 'transparent'}).then(canvas => {
          //capture all div data as image
          var ctx = canvas.getContext("2d");
          var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          var pixelArr = imageData.data;
          createBlankImageData(imageData);
          //put pixel info to imageDataArray (Weighted Distributed)
          for (let i = 0; i < pixelArr.length; i+=4) {
            //find the highest probability canvas the pixel should be in
            let p = Math.floor((i/pixelArr.length) *canvasCount);
            let a = imageDataArray[weightedRandomDistrib(p)];
            a[i] = pixelArr[i];
            a[i+1] = pixelArr[i+1];
            a[i+2] = pixelArr[i+2];
            a[i+3] = pixelArr[i+3]; 
          }
  
          //create canvas for each imageData and append to target element
          for (let i = 0; i < canvasCount; i++) {
            let c = newCanvasFromImageData(imageDataArray[i], canvas.width, canvas.height);
            c.classList.add("dust");
            $(".content").append(c);
          }
          //clear all children except the canvas
          $(".content").children().not(".dust").fadeOut(3500);
          //apply animation
          $(".dust").each( function(index){
            $(this).css({position: "absolute", marginLeft: "-8.5px"});
            animateBlur($(this),0.8,800);
            setTimeout(() => {
              animateTransform($(this),100,-100,chance.integer({ min: -15, max: 15 }),800+(110*index));
            }, 70*index); 
            //remove the canvas from DOM tree when faded
            $(this).delay(70*index).fadeOut((110*index)+800,"easeInQuint",()=> {$( this ).remove();
            });
          });
        });
      });
      function weightedRandomDistrib(peak) {
        
        var prob = [], seq = [];
        for(let i=0;i<canvasCount;i++) {
          prob.push(Math.pow(canvasCount-Math.abs(peak-i),3));
          seq.push(i);
        }
        return chance.weighted(seq, prob);
      }
      function animateBlur(elem,radius,duration) {
        var r = 0;
        $({rad:0}).animate({rad:radius}, {
            duration: duration,
            easing: "easeOutQuad",
            step: function(now) {
              elem.css({
                    filter: 'blur(' + now + 'px)'
                });
            }
        });
      }
      function animateTransform(elem,sx,sy,angle,duration) {
        var td = 0;
        var tx = 0;
        var ty = 0;
        $({x: 0, y:0, deg:0}).animate({x: sx, y:sy, deg:angle}, {
            duration: duration,
            easing: "easeInQuad",
            step: function(now= 0, fx) {
              if (fx.prop == "x") 
                tx = now;
              else if (fx.prop == "y") 
                ty = now;
              else if (fx.prop == "deg") 
                td = now;
              elem.css({
                    transform: 'rotate(' + td + 'deg)' + 'translate(' + tx + 'px,'+ ty +'px)'
                });
            }
        });
      }
      function createBlankImageData(imageData) {
        for(let i=0;i<canvasCount;i++)
        {
          let arr = new Uint8ClampedArray(imageData.data);
          console.log(arr);
          for (let j = 0; j < arr.length; j++) {
              arr[j] = 0;
          }
          imageDataArray.push(arr);
          console.log(imageDataArray);
        }
      }
      function newCanvasFromImageData(imageDataArray ,w , h) {
        var canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            var tempCtx = canvas.getContext("2d");
            tempCtx.putImageData(new ImageData(imageDataArray, w , h), 0, 0);
            console.log(canvas);
        return canvas;
      }
    
  }
}

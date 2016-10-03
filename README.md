# stream

## Resources used

* [createJS] (http://createjs.com/)
* [animate.css] (https://daneden.github.io/animate.css/)
* [WowJS] (http://mynameismatthieu.com/WOW/)
* [Slick] (http://kenwheeler.github.io/slick/)
* [Bootstrap] (http://getbootstrap.com/)


## Tech

* `HTML5`
* `CSS3`
* `Javascript`
* `Bootstrap`
* `GitHub`

## Development
### Part 1

[View page] (http://webdeveloperpete.com/stream_1/)

Static version of the page built with Bootstrap framework.

### Part 2

[View page] (http://webdeveloperpete.com/stream_2/)

#### createJS banner

1. Configuration JavaScript (`script.js`) created
2. `function init()` implemented:
* Variables declared
* Stage instance created
* Objects created and positioned inside the canvas
* Objects animated

Leaderboard banner available in the following sizes:
* 728x90
* 468x60
* 300x100

EXAMPLE
```sh
		// Assign truck
		truck = new createjs.Bitmap("assets/images/renaultTruck.png");
		truck.x = 10;
		truck.y = 10;
		stage.addChild(truck);

		// Animate truck
		createjs.Tween.get(truck, { loop: false })
		  	.to({ alpha: 0, y: 10, x: -110 }, 0)
		  	.to({ alpha: 1, y: 10, x: 10 }, 1500, createjs.Ease.getPowInOut(10))
		  	.to({ alpha: 0, y: 10, x: -110 }, 1500, createjs.Ease.getPowInOut(10))
```

#### Keyframe animations

Keyframe animations added to a number of content blocks. On scroll animations are triggered by `WowJS`.

#### Slick slider

Bottom offer vouchers moved from static content blocks into responsive `Slick slider` with autoplay function.

## License
MIT

## Version
0.0.1

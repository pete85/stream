// Scripts - Stream banner test

// JavaScript Document

// EaselJS
function initialise() {

	// Define variables
	var stage,
		truck,
		van,
		logo;

	if (document.documentElement.clientWidth < 768) {
		
		stage = new createjs.Stage("banner300x100");

		// Assign truck
		truck = new createjs.Bitmap("assets/images/renaultTruck.png");
		truck.x = 10;
		truck.y = 10;
		stage.addChild(truck);

		// Assign van
		van = new createjs.Bitmap("assets/images/renaultVan.png");
		van.x = 154;
		van.y = 10;
		stage.addChild(van);

		// Assign logo
		logo = new createjs.Bitmap("assets/images/logoBannerL.png");
		logo.x = 9;
		logo.y = 25;
		stage.addChild(logo);

		// Animate truck
		createjs.Tween.get(truck, { loop: false })
		  	.to({ alpha: 0, y: 10, x: -110 }, 0)
		  	.to({ alpha: 1, y: 10, x: 10 }, 1500, createjs.Ease.getPowInOut(10))
		  	.to({ alpha: 0, y: 10, x: -110 }, 1500, createjs.Ease.getPowInOut(10))

		// Animate van
		createjs.Tween.get(van, { loop: false })
		  	.to({ alpha: 0, y: 10, x: 254 }, 0)
		  	.to({ alpha: 0, y: 10, x: 254 }, 500)
		  	.to({ alpha: 1, y: 10, x: 154 }, 1500, createjs.Ease.getPowInOut(10))
		  	.to({ alpha: 0, y: 10, x: 254 }, 1500, createjs.Ease.getPowInOut(10))

		// Animate logo
		createjs.Tween.get(logo, { loop: false })
		  	.to({ alpha: 0, y: -100 }, 0)
		  	.to({ alpha: 1, y: 25 }, 5500, createjs.Ease.getPowInOut(5))

		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", stage);
	
	} else if (document.documentElement.clientWidth > 768 && document.documentElement.clientWidth < 992) {

			stage = new createjs.Stage("banner468x60");

			// Assign truck
			truck = new createjs.Bitmap("assets/images/renaultTruckM.png");
			truck.x = 20;
			truck.y = 5;
			stage.addChild(truck);

			// Assign van
			van = new createjs.Bitmap("assets/images/renaultVanM.png");
			van.x = 360;
			van.y = 5;
			stage.addChild(van);

			// Assign logo
			logo = new createjs.Bitmap("assets/images/logoBannerM.png");
			logo.x = 150;
			logo.y = 15;
			stage.addChild(logo);

			// Animate truck
			createjs.Tween.get(truck, { loop: false })
			  	.to({ alpha: 0, y: 5, x: -200 }, 0)
			  	.to({ alpha: 1, y: 5, x: 20 }, 1500, createjs.Ease.getPowInOut(10))

			// Animate van
			createjs.Tween.get(van, { loop: false })
			  	.to({ alpha: 0, y: 5, x: 580 }, 0)
			  	.to({ alpha: 1, y: 5, x: 360 }, 1500, createjs.Ease.getPowInOut(10))

			// Animate logo
			createjs.Tween.get(logo, { loop: false })
			  	.to({ alpha: 0, y: -100 }, 0)
			  	.to({ alpha: 1, y: 15 }, 2000, createjs.Ease.getPowInOut(5))

			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick", stage);

	} else {

			stage = new createjs.Stage("banner728x90");

			// Assign truck
			truck = new createjs.Bitmap("assets/images/renaultTruck.png");
			truck.x = 20;
			truck.y = 5;
			stage.addChild(truck);

			// Assign van
			van = new createjs.Bitmap("assets/images/renaultVan.png");
			van.x = 570;
			van.y = 5;
			stage.addChild(van);

			// Assign logo
			logo = new createjs.Bitmap("assets/images/logoBannerL.png");
			logo.x = 223;
			logo.y = 20;
			stage.addChild(logo);

			// Animate truck
			createjs.Tween.get(truck, { loop: false })
			  	.to({ alpha: 0, y: 5, x: -200 }, 0)
			  	.to({ alpha: 1, y: 5, x: 20 }, 1500, createjs.Ease.getPowInOut(10))

			// Animate van
			createjs.Tween.get(van, { loop: false })
			  	.to({ alpha: 0, y: 5, x: 790 }, 0)
			  	.to({ alpha: 1, y: 5, x: 570 }, 1500, createjs.Ease.getPowInOut(10))

			// Animate logo
			createjs.Tween.get(logo, { loop: false })
			  	.to({ alpha: 0, y: -100 }, 0)
			  	.to({ alpha: 1, y: 20 }, 2000, createjs.Ease.getPowInOut(5))

			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick", stage);

	}
};
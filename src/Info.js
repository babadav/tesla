 
export let Info  = {
	'Model S':{
		name:'Model S',
		home: {
			thumb: '../img/assets/model-s/thumb.png',
			tagline: 'Model S',
			image:'../img/assets/model-s/slider/red-profile.jpg' 
		},
		page: {
			tagline: 'text for specific car',
			summary: `Model S is designed from the ground up to be the safest, most exhilarating sedan on the road. With unparalleled performance delivered through Tesla's unique, all-electric powertrain, Model S accelerates from 0 to 60 mph in as little as 2.5 seconds. Model S comes with Autopilot capabilities designed to make your highway driving not only safer, but stress free.`,
			hero: '../img/assets/model-s/red-profile.jpg',
			threeD: '../img/rotate/s/',
			modules: [
				{	
					id:0,
					headline: 'Perfomance',
					image: '../img/assets/model-s/slider/red-bay.jpg',
					text: 'Model S comes standard with Dual Motor All-Wheel Drive, P100D Model S pairs a high performance rear motor with a high efficiency front motor to achieve Ludicrous acceleration, from zero to 60 miles per hour in 2.5 seconds.',
				},
				{	
					id:1,
					headline: 'Built around the driver',
					image: '../img/assets/model-s/slider/interior-details.jpg',
					text: `Model S is a driver's car. The cabin combines meticulous noise engineering with Tesla's uniquely quiet powertrain to obtain the sound dynamics of a recording studio. The gem of the interior is the 17 inch touchscreen, which is angled toward the driver and includes both day and night modes for better visibility without distraction. It puts rich content at your fingertips and provides mobile connectivity so you can easily find your destination, favorite song or a new restaurant.`,
				},
				{	
					id:2,
					headline: 'Safety',
					image: '../img/assets/model-s/slider/blue-sunset.jpg',
					text: `Model S is designed from the ground up to be the safest car 		on the road. Much of its safety is owed to the unique 			electric drivetrain that sits beneath the car's aluminum 		occupant cell in its own subframe. This unique positioning 		lowers the car's center of gravity, which improves handling 	and minimizes rollover risk, and replaces the heavy engine 		block with impact absorbing boron steel rails.`,
				},
			],
			specs: {
				specsHero: 'img link',
				performance: {
					maxSpeed: '225 km/h (140 mph)',
					zero100:'5.8s',
					zero200:'',
					maxPwr:'382 hp @ 6,850 rpm (285 kW)',
					maxTor:'325 lb·ft (441 N·m)',
				},
				engine: {
					engineCapacity:'',
					type:'Electric',
					tech:'',
				},
				braking: {
					twoTo0: '133m (436FT)',
					oneTo0:'33M (108FT)'
				},
				efficiency: {
					co2: '',
					pwrToWeight:''
				},
				weight: {
					dinWeight:'2,027 kg (4,469 lb)',
					weightDistribution:'(F/R) 42%/58%',
					dryWeight: '1,400KG (1,350KG)'
				}
			},


		}
	},
	'Model X':{
		name:'Model X',
		home: {
			thumb: 'img/assets/model-x/thumb.png',
			tagline: 'Model X',
			image:'../img/assets/model-x/main-slideshow/city.jpg'
		},
		page: {
			tagline: '',
			summary: `Model X is the safest, quickest, and most capable sport utility vehicle in history. Designed as a family car without compromise, Model X comes standard with all-wheel drive, ample seating for up to seven adults, standard active safety features, and up to 295 miles of range on a single charge. And it's the quickest SUV in production, capable of accelerating from zero to 60 miles per hour in 2.9 seconds.`,
			hero: 'img/assets/model-x/main-slideshow/city.jpg',
			threeD: '../img/rotate/x/',
			modules: [
				{	
					id:0,
					headline: 'Falcon Wing Doors',
					image: '../img/assets/model-x/exterior-primary.jpg',
					text: `Falcon Wing doors enhance accessibility to the second and third rows, and are capable of opening in even the tightest parking spaces. Each door is equipped with sensors to monitor the proximity of surroundings and smoothly open, up and out of the way – providing wide openings for parents to comfortably buckle children in, without straining or bumping their child's head on the roof.`,
				},
				{	
					id:1,
					headline: 'The Safest SUV Ever',
					image: '../img/assets/model-x/saftey.jpg',
					text: `Model X is the safest SUV ever, with standard active safety features and hardware built to provide visibility that a driver cannot access alone. Eight surround cameras allow for 360-degree vision, while twelve ultrasonic sensors provide detection of surrounding objects. Forward-facing radar see through heavy rain, fog, dust, and beyond the vehicle ahead—helping to prevent accidents by providing simultaneous visibility in every direction. Model X is the first SUV ever to achieve a 5-star safety rating in every category and sub-category, the lowest probability of occupant injury, and a rollover risk half that of any SUV on the road.`,
				},
				{	
					id:2,
					headline: 'Seating and Storage',
					image: '../img/assets/model-x/main-slideshow/indoor-dark.jpg',
					text: 'Model X has the most storage room of any sport utility vehicle in its class, and seating for up to seven adults. Designed to maximize passenger comfort, the second and third row in the seven-seat option are capable of folding flat and flush, creating extra cargo space. Available in three custom seating configurations, Model X can be optimized to suit the specific needs of you and your family.',
				},
				{	
					id:3,
					headline: 'Longest Range',
					image: '../img/assets/model-x/main-slideshow/rear-view.jpg',
					text: `Capable of traveling up to 295 miles on a single charge, with unlimited access to Tesla's global charging network, you can get anywhere in Model X.`,
				},
			],
			specs: {
				specsHero: 'img/assets/model-x/main-slideshow/white-cruise.jpg',
				performance: {
					maxSpeed: '130 mph (210 km/h)',
					zero100:' 6.2s',
					zero200:'',
					maxPwr:'259 hp (193 kW)',
					maxTor:'387 to 485 lb-ft',
				},
				engine: {
					engineCapacity:'',
					type:'Electric',
					tech:'',
				},
				braking: {
					twoTo0: '133m (436FT)',
					oneTo0:'33M (108FT)'
				},
				efficiency: {
					co2: '0',
					pwrToWeight:'5,000 pounds (2,300 kg)'
				},
				weight: {
					dinWeight:'5,267 to 5,377 lbs',
					weightDistribution:'100D - Front 50%, Rear 50%',
					dryWeight: ''
				}
			},


		}
	},
	'Model 3':{
		name:'Model 3',
		home: {
			thumb: '../img/assets/model-3/thumb.png',
			tagline: '',
			image:'../img/assets/model-3/blue-sunset.jpg'
		},
		page: {
			tagline: '',
			summary: `Model S is our flagship, premium sedan with more range, acceleration, displays and customization options. It’s the safest car in its class with unlimited Supercharging for the duration of ownership when referred by an owner.Model 3 is a smaller, simpler, more affordable electric car. Although it is our newest vehicle, Model 3 is not “Version 3” or the most advanced Tesla. Like Model S, it is designed to be the safest car in its class.`,
			hero: '../img/assets/model-3/hero.jpg',
			threeD: '../img/rotate/3/',
			modules: [
				{	
					id:0,
					headline: 'Affordable',
					image: '../img/assets/model-3/red-bay.jpg',
					text: `After much anticipation, the Tesla Model 3 has finally been shown in production form. The "affordable" Tesla sedan, as it's often called, has a starting price of $35,000 before incentives. The base model has an estimated range of 220 miles and will go from 0 to 60 mph in 5.6 seconds, according to Tesla. An optional battery pack is available for $9,000 that increases range to 310 miles and drops the 0-60-mph time to 5.1 seconds.`,
				},
				{	
					id:1,
					headline: 'Interior',
					image: '../img/assets/model-3/interior-head-unit.jpg',
					text: `The interior is dominated by the standard 15-inch touchscreen display mounted in the center of the dash. There is no traditional instrument cluster, so all functions are controlled and monitored through the center screen. Dual-zone climate control, Wi-Fi and navigation all come standard along with all the hardware necessary for semiautonomous driving capabilities. A separate Autopilot options package ($5,000) is required to unlock most of those features, including adaptive cruise control, lane keeping assist and remote parking. Tesla says that another package can be added on top of that for $3,000 to bring full autonomous capabilities, although the actual implementation of it has yet to be finalized.`,
				},
				{
					id:2,
					headline: 'Features',
					image: '../img/assets/model-3/interior.jpg',
					text: 'The car doesn’t have a key, or a key fob. Instead it syncs to your phone through a bluetooth connection and will automatically unlock as you approach. The backup in case your phone dies or you need to hand it off to a valet is a thin key card that you can keep in your wallet. Swipe it on the car’s B pillar to unlock it, and place it on the center console to turn the car on. Unlike early versions of the Model S and X, the Model 3 is built to be a daily driver, with plenty of cupholders, door pockets, and console storage. The materials of the arm rests and doors feel ready for abuse. And the stitched synthetic material used for the premium seats is different than leather, but not inferior.  ',
				},
			],
			specs: {
				specsHero: 'img/assets/model-3/red-city.jpg',
				performance: {
					maxSpeed: '140 mph (225 km/h)',
					zero100:'5.6s',
					zero200:'',
					maxPwr:'258 hp (192 kW)',
					maxTor:'713 lb/ft ',
				},
				engine: {
					engineCapacity:'75 kWh',
					type:'Electric',
					tech:'',
				},
				braking: {
					twoTo0: '133m (436FT)',
					oneTo0:'33M (108FT)'
				},
				efficiency: {
					co2: '0',
					pwrToWeight:'379  bhp per ton'
				},
				weight: {
					dinWeight:'2039KG (4495 lbs)',
					weightDistribution:'(F/R) 47%/53%',
					dryWeight: ''
				}
			},


		}
	},
	'Roadster':{
		name:'Roadster',
		home: {
			thumb: 'img/assets/roadster/thumb.jpg',
			tagline: '',
			image:'../img/assets/roadster/hero.jpg'
		},
		page: {
			tagline: '',
			summary: `Tesla Roadster2019 Tesla Roadster shownCar and DriverCar Buying ServiceLocal dealer pricing not available for this vehicle.The original Tesla Roadster put the all-electric automaker on the map, even if most Model S and Model X buyers don’t remember it. Touted to make its return to the lineup in 2020, the new Roadster picks up where the old model left off, and then some. Tesla claims a zero-to-60-mph time of 1.9 seconds and a top speed of more than 250 mph; all-wheel drive will be standard and a 200-kWh battery is said to provide 620 miles of range. `,
			hero: 'img/assets/roadster/hero.jpg',
			threeD: '../img/rotate/roadster/',
			modules: [
				{
					id:0,
					headline: 'Glass Roof',
					image: '../img/assets/roadster/top-open.jpg',
					text: 'A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.',
				},
				{
					id:1,
					headline: 'Interior',
					image: '../img/assets/roadster/interior.jpg',
					text: `The first supercar to set every performance record and still fit seating for four.`,
				},
				{
					id:2,
					headline: `Designed for Performance and Aero Efficiency`,
					image: '../img/assets/roadster/rear.jpg',
					text: 'text for module',
				},
				{
					id:3,
					headline: '',
					image: '../img/assets/roadster/rear.jpg',
					text: 'text for module',
				},
			],
			specs: {
				specsHero: 'img/assets/roadster/rear.jpg',
				performance: {
					maxSpeed: 'Over 250 mph',
					zero100:'3.4s',
					zero200:'',
					maxPwr:'',
					maxTor:'10,000 Nm',
				},
				engine: {
					engineCapacity:'3,799CC',
					type:'Electric',
					tech:'',
				},
				braking: {
					twoTo0: '133m (436FT)',
					oneTo0:'33M (108FT)'
				},
				efficiency: {
					co2: '249G/KM',
					pwrToWeight:'434PS (428 BHP)'
				},
				weight: {
					dinWeight:'1,495KG (3,296LB)',
					weightDistribution:'(F/R) 42%/58%',
					dryWeight: '1,400KG (1,350KG)'
				}
			},


		}
	},
	'Home': 
	{
		video:'https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808',
		modules:[
			{
				id:0,
				headline: 'Glass Roof',
				image: '../img/assets/model-x/birds-eye.jpg',
				text: 'A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.',
			},
			{
				id:1,
				headline: 'Interior',
				image: '../img/assets/roadster/interior.jpg',
				text: `The first supercar to set every performance record and still fit seating for four.`,
			},
			{
				id:2,
				headline: `Designed for Performance and Aero Efficiency`,
				image: '../img/assets/roadster/rear.jpg',
				text: 'text for module',
			},
			{
				id:3,
				headline: '',
				image: '../img/assets/roadster/rear.jpg',
				text: 'text for module',
			},
		]
	}
	
}

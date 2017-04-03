var mongoose = require("mongoose");
var Product = require("../models/product");
var data = [{
  name: "Spitfire Surfboard by Firewire",
  image: "https://imgau3.surfstitch.com/product_images/FWSPITFIRETT-FIREWIRE-1.JPG",
  description: "Firewire Marketing Director, Chuy Reyna, was looking for all the benefits of the Dominator but even more performance. The SPITFIRE combines a Diamond tail and STEP-DOWN tail rail, giving the SPITFIRE the tail bite of a thinner board, without losing the Dominator's speed and flotation. The SPITFIRE offers the same 5/4/3 fin options and a low entry rocker for easy paddling.",
  price: 1000
},
{
  name: "Hypto Krypto Surfboard by Haydenshapes",
  image: "http://dss811fva2fot.cloudfront.net/wp-content/uploads/2013/08/Utopiaw2013_0008_HyptoKrypto.jpg",
  description: "The Hypto Krypto is the ultimate in versatility and all round surfing performance. With a wider shape giving you quicker zip through the wave and a rounded pin tail that lets you rip turns in the pocket, the Haydenshapes Hypto Krypto is a board that really helps you let loose.",
  price: 900
},
{
  name: "Revolving Door Surfboard by Rusty",
  image: "http://cdn2.boardcave.com.au/wp-content/uploads/2015/12/revolving-door-rusty-surfboards.jpg",
  description: "The Revolving Door is a new take on the most popular Rusty model the Magic Door. With a wider outline, pulled in nose to give a little more forward volume to meet today's market, this board is great for summer waves. The fuler rolled deck, curvier outline and the swallow tail gives you plenty of rail to work with for drive and hold in summer waves.",
  price: 1200
},
{
  name: "Clearwater Surfboard by Malibu",
  image: "http://cdn3.boardcave.com.au/wp-content/uploads/2012/10/Malibu.png",
  description: "Designed as an all round malibu, great for peeling point breaks and those smaller days. This board has no barriers and can be surfed to its full potential or simply used as a beginner board, one that would be kept for extra fun on those smaller days.",
  price: 800
},
{
  name: "The Short Round by Lost Surfboards",
  image: "http://www.lostsurfboards.net/wp-content/uploads/2015/04/shortround-surfboards-2015.png",
  description: "The Nano is a user friendly, high performance all-rounder that enables fluid, effortless changes of direction on any part of the wave. A forward of centre wide point coupled with the wide chopped tail gives the Nano exceptional speed and glide. It's a surprisingly versatile weapon, offering good edge control in juicy waves.",
  price: 900
},
{
  name: "Burger Fish by Fourth Surfboards",
  image: "https://asset1.surfcdn.com/fourth-surfboards-surfboards-fourth-surfboards-burger-fish-fcsii-5-fin-blue-black-switch-rail.jpg?w=1200&h=1200&r=4&q=80&o=9$tRfmiegqsEEfX0Xgzx2l0erfEj&V=aaJI",
  description: "The Chilli Bean is built for any surfer who understands that if you’re not afraid of slightly more foam you can go shorter than you’d imagined possible. More waves and more control will make anyone a better surfer.",
  price: 700
},
{
  name: "Flying Frog by Malaku",
  image: "http://malukusurf.com/wp-content/uploads/2016/03/maluku-shortboards-maluku-flying-frog-eco-5-fin-green-white-2.jpg",
  description: "It's every surfers dilemma, particularly when the waves are small or weak: You want to get in the water, you want to catch waves, you need the board to help you generate speed BUT you still want to be able to lay it on a rail and throw a little spray.The trend for super fat shortboards has created a lot of fun shapes for surfers of all levels, but unless you're a WCT contender their fat tails can be hard to control properly rail to rail once you do get the board moving. The Maluku Flying Frog solves this problem by creating something of cut and shut; The front end is similar to a traditional egg or even minimal, but the tail is all rounded pin shortboard. You paddle in early and easy on that reassuring front end foam, pump through on your front foot on that wide, stable middle section and when you're ready weight the back foot and put the board on rail exactly as you would with a shortboard - the rounded pin tail gives control through the turn in gutless waves or hold AND control in larger surf.",
  price: 800
},
{
  name: "Super Fish 3 Carbon Vector by 7s",
  image: "https://asset2.surfcdn.com/7s-surfboards-7s-super-fish-3-carbon-vector-surfboard-white.jpg?w=1200&h=1200&r=4&q=80&o=UjHW5RvIEVW8tM634H98YQ0MUe4j&V=3CSJ",
  description: "Introducing the new Superfish 3 (SF3) by 7S. This highly functional board has been completely overhauled to make it faster, more forgiving and ultra responsive. While different from its predecessors in design, the new SF3 still catches waves like a dream and offers the perfect balance of stability, speed and performance so you can get the most out of your surfing.",
  price: 700
},
{
  name: "Blackbird Surfboard by Modern",
  image: "https://asset3.surfcdn.com/modern-surfboards-modern-blackbird-surfboard-red-grey.jpg?w=1200&h=1200&r=4&q=80&o=nVdxp892O96PtAppdVsqDvgHXvwj&V=hnf8",
  description: "The Modern Blackbird offers a free and flowing ride for the savviest of surfer and it'll also satisfy the purist who appreciates the aesthetic beauty of traditional cut-lap resin tints. Classified as fun shapes, these boards feature a very balanced outline and a generous sweet spot through the middle of the board. The rounded nose and full rails add to the usability of this model, which means regardless of your skill level, the Blackbird will paddle well, feel stable under foot, and accelerate with minimal effort.",
  price: 600
},
{
  name: "6FT Regular Leash by FCS",
  image: "https://imgau1.surfstitch.com/product_images/2001-TEL-06FTEAL1-FCS-1.JPG",
  description: "Durable Polyurethane cord provides strength, stretch and elasticity. Detachable rail saver and cuff Machine stainless steel swivels. Padded Neoprene ankle strap Extra strong rip and grip velcro at cuff and saver",
  price: 40
},
{
  name: "6FT Jordy Smith Comp Leash by Channel Islands ",
  image: "https://imgau1.surfstitch.com/product_images/13129100610FRED-CHANNELISLANDS-1.JPG",
  description: "Quick dry Neoprene. Silicon gel padding. High strength PU cord",
  price: 50
},
{
  name: "Far King Tropical Water Wax",
  image: "https://imgau3.surfstitch.com/product_images/1013YLW-FARKING-1.JPG",
  description: "Extra sticky, tropical water surfboard wax.",
  price: 5
}];

function seedDB (){
    // remove all products
    Product.remove({}, function(err){
        if (err){
            console.log(err);
        } else {
            console.log("Removed products!");
            // add a few products
            data.forEach(function(seed){
                Product.create(seed, function(err, product){
                    if(err){
                        console.log(err);
                    }
                });
            });
            console.log("Done seeding...");
        }
    });
}

module.exports = seedDB;

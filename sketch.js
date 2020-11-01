//Create variables here
var doglmgimg 
var doglmgimg1
function preload()
{
  //load images here
  dogimg =loadImage("images/dogImg.png")
Milk=loadImage("images/Milk.png")
  dogimg1 =loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
bottle=createSprite(94,275);
bottle.addImage(Milk);
bottle.scale=0.05

bottle1=createSprite(120,275);
bottle1.addImage(Milk);
bottle1.scale=0.05

bottle2=createSprite(146,275);
bottle2.addImage(Milk);
bottle2.scale=0.05

bottle3=createSprite(172,275);
bottle3.addImage(Milk);
bottle3.scale=0.05

bottle=createSprite(94,320);
bottle.addImage(Milk);
bottle.scale=0.05

bottle=createSprite(120,320);
bottle.addImage(Milk);
bottle.scale=0.05

bottle=createSprite(146,320);
bottle.addImage(Milk);
bottle.scale=0.05

bottle=createSprite(172,320);
bottle.addImage(Milk);
bottle.scale=0.05



dog=createSprite(350,275,450,550);
dog.addImage(dogimg1);
dog.scale=0.12;

textSize(20);
}


function draw() {  
background(0)
  drawSprites();
  //add styles here
//fedTime=database.ref('FeedTime');
//fedtime.on("value",function(data){
  //lastFed=data.val();
//});
feed=createButton("Feed the dog")
feed.position(700,95);
//feed.mousePressed(feedDog);

//addFoodcreateButton("Add Food");
//addFood.position(800,95);
//addFood.mousePressed(AddFoods);





fill(255,255,254);
//text("food remaining:"+food,170,200);
textSize(13);
text("Note:press up_ arrow Key to feed Drago Milk!",130,10,300,20);

}
function readStock(data){
food=data.val();
}
function writeStock(x){
if(x<=0){
x=0
}
else{
  x=x-1;
}
database.ref('/').update({
food:x
})
}


//if(KeyWentDown(UP_ARROW)){
  //writesteock(food);
  //dog.addImage(dogHappy)
  //}


  function feedDdog () {
  dog.addImage(happydog);
foodobj.updateFoodStock(foodobj.getFoodStock()-1);
database.ref('/').update({
Food:foodobj.getFoodStock(),
FeedTime:hour()

})
}
function addFoods (){
foodS++;
database.ref('/').update({
Food:foodS
})
}

function time (){
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "images/dogImg.png";
  }
  else{
      bg = "images/dogImg1.png";
  }

}

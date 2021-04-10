//Create variables here
var dog,happyDog,database,foodS,FoodStock;
var FeedDogBtn,AddFoodBtn;
var lastFedTime;
function preload()
{
	//load images here
  dog.loadImage("images/Dog.png");
  happyDog.loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  FoodStock=database.ref('Food');
  FoodStock.on('value',readStock);
  dog=createSprite(10,10,250,250);
  FeedDogBtn=createButton("feed dog");
  FeedDogBtn=position(700,95);
  FeedDogBtn.mousePressed(feedDog);
  AddFoodBtn=createButton("add food");
  AddFoodBtn=position(800,95);
  AddFoodBtn=mousePressed(addFoods)
database.ref("FeedTime")
 lastFedTime=data.val()  
}


function draw() {  
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
Text("Press UP_ARROW to feed this dog!",15,15);
fill("black")
textSize=15
text("you have"+FoodStock +"packets of food remaining",450,10);
  drawSprites();
  //add styles here
  if(lastFedTime>=12){
    text("last feed:"+ lastFedTime%12 + "PM",350,30)
  }else if(lastFedTime==0){
    text("last feed : 12 AM")
  }else{
    text("last feed:"+lastFedTime + "am",350,30)
  }

}
function readStock(data){
  foodS=data.val();


}
function writeStock(x){
  if (x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
   Food:x
  })
}



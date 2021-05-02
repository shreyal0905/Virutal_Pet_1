//Create variables here
var dog,happyDog,database,foods,foodStock

function preload()
{
	//load images here
  dog = loadImage("sprites/dogImg.png");
  happyDog = loadImage("sprites/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(500, 500);
  
  dog = createSprite(100,100,100,100);
  dog.addImage("dog",dog);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  backGround(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  

  drawSprites();
  //add styles here

  var title = createElement('h2');
  title.html("Note: Press UP_ARROW To Feed Soufie Milk!!:)");
  title.position(130,0);
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


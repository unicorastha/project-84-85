canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

random_number=Math.floor(Math.random() * 4);
console.log(random_number);

pink_car_width = 100;
 pink_car_height = 90;

 blue_car_width = 100;
 blue_car_height = 90;


background_image = "racing car.jpg";

pink_car_image = "pink car.png";

blue_car_image = "blue car.png";

pink_car_x = 10;
pink_car_y = 10;

blue_car_x = 10;
blue_car_y = 10;


function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;   

      blue_car_imgTag = new Image(); 
    blue_car_imgTag.onload = uploadblue_car; 
    blue_car_imgTag.src = blue_car_image;  
    
    {
        background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;   

    pink_car_imgTag = new Image(); 
    pink_car_imgTag.onload = uploadpink_car; 
    pink_car_imgTag.src = pink_car_image;   
}
    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadpink_car() {
    ctx.drawImage(pink_car_imgTag, pink_car_x, pink_car_y, pink_car_width, pink_car_height);
    ctx.drawImage(blue_car_imgTag, blue_car_x, blue_car_y, blue_car_width, blue_car_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}
function up()
{
    if(pink_car_y>=0)
    {

        pink_car-=10;
        console.log("when up arrow is pressed =" +"-" +pink_car_y)
        uploadBackground();
        uploadwater();
        uploadrover();

    }
    if(blue_car_y>=0)
    {

        blue_car-=10;
        console.log("when up arrow is pressed =" +"-" +blue_car)
        uploadBackground();
        uploadwater();
        uploadrover();

    }
}


function down()
{
    if(pink_car_y<=500)
    {
        pink_car+=10;
        console.log("when down arrow is pressed =" +"-"+pink_car);
        uploadBackground();
        uploadwater();
        uploadrover();

    }
    if( blue_car_y<=500)
    {
        blue_car+=10;
        console.log("when down arrow is pressed =" +"-"+ blue_car);
        uploadBackground();
        uploadwater();
        uploadrover();

    }
}

function left()
{
    if(pink_car_y>=0)
    {
        pink_car_y-=10;
        console.log("when down arrow is pressed ,x ="+"| y="+pink_car);
        uploadBackground();
        uploadwater();
        uploadrover();

    }
    if(blue_car_y>=0)
    {
        blue_car_y-=10;
        console.log("when down arrow is pressed ,x ="+"| y="+blue_car);
        uploadBackground();
        uploadwater();
        uploadrover();

    }
}


function right()
{
    if( pink_car<=700)
    {
        pink_car+=10;
        console.log("when down arrow is pressed ,x ="+"| y="+ pink_car);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
    if(blue_car<=700)
    {
        blue_car+=10;
        console.log("when down arrow is pressed ,x ="+"| y="+blue_car);
        uploadBackground();
        uploadwater();
        uploadrover();
    }
}


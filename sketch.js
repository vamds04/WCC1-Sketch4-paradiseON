/*
Title: paradise ON! 
Date: 2nd Dec 2024
Author: Liangwei Huang

Instructions:
Click the mouse to randomly display image files 
and text files in different positions in the canvas.

Blurb:
Collage is a commonly used method for creating image works. 
Based on this idea, I plan to use my own photos to collage new pieces randomly. 
When the mouse is clicked, the text and image objects will move randomly.

Code Description:
photocol.json stores information about the image files. 
textcol.json stores text information. 
The code for the Photo class is stored in the photo.js file. 
The code for the Text class is stored in the text.js file. 
The image and font files are stored in the asset folder. 
Then modify the index.html file to call the Photo class and Text class.


*/

//  The code is shown below

let photos = [];
let texts = [];
let photoData, textData;

function preload() {
  photoData = loadJSON('photocol.json'); //load the JSON that stores the photo.
  textData = loadJSON('textcol.json');   //load the JSON that stores the text.
  additionalfont = loadFont('asset/Lacquer-Regular.ttf');  //load font file
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create Photo object
  for (let i = 0; i < photoData.photocol.length; i++) {
    let pt = new Photo(photoData.photocol[i].file, photoData.photocol[i].title);
    photos.push(pt);
  }

  // create Text object
  for (let i = 0; i < textData.textcol.length; i++) {
    let tx = new Text(textData.textcol[i].text);
    texts.push(tx);
  }
}

function draw() {
  background(0, 1);

  // Show all photos at the beginning of the run
  for (let i = 0; i < photos.length; i++) {
    photos[i].display();
  }

  // Show all text at the beginning of the run
  for (let i = 0; i < texts.length; i++) {
    texts[i].display();
  }
}

function mousePressed() {
  /*Randomly change the position of all photos and text 
    when clicking anywhere on the canvas  */

  for (let i = 0; i < photos.length; i++) {
    photos[i].randomize(); 
  }

  for (let i = 0; i < texts.length; i++) {
    texts[i].randomize(); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
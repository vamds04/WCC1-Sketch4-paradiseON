class Text {
  constructor(text) {
    this.text = text;

    // Position where the text randomly appears when run the code
    this.x = random(width);
    this.y = random(height);

    // text style
    this.textSize = random(14, 24); 
    this.textColor = color(0, 0, 0); 
    this.bgColor = color(255, 255, 255); 
    this.textstyle = textFont(additionalfont);
  }

  display() {
    
    textSize(this.textSize);
    fill(this.textColor);
    textAlign(LEFT, TOP);

    /* I want to generate a filled rectangle behind the text 
    to make the text more visible. In this section, I asked 
    chatGPT how to calculate the width and height of this area. */

    // calculates the text width and height and draw the text and the rect.
    let textWidthCalc = textWidth(this.text);
    let textHeightCalc = this.textSize;

    fill(this.bgColor);
    noStroke();
    rect(this.x, this.y, textWidthCalc + 10, textHeightCalc + 10);

    fill(this.textColor);
    text(this.text, this.x + 5, this.y + 5);
  }

  randomize() {
    /* This section is used to re-randomise 
    where the text appear when the mouse is clicked */

    this.x = random(width);
    this.y = random(height);
    this.textSize = random(20, 38); 
    this.textColor = color(0, 0, 0); 
    this.bgColor = color(255, 255, 255); 
  }
}
"use strict";

/**
 * Hexagon
 *
 * @link  {string} external link for element
 * @bg    {string} background image url
 * @title {string} content title
 * @desc  {string} detail about the content
 */
class Hexagon {
  constructor(link, bg, title, desc) {
    this.link = link;
    this.bg = bg && bg.getAttribute('src');
    this.title = title;
    this.desc = desc;
  }

  toString(element) {
    if (this[element] instanceof Element) {
      this[element] = this[element].innerHTML;
    }
    else if (this[element] === undefined) {
      return "";
    }
    return this[element];
  }
}

var fillHexagon = function(data) {
  let svg = SVG('svg' + data.toString("title"));
  const pattern = svg.pattern(300, 300, function(add) {
    add.rect(300,300);
    console.log(data.toString("bg"));
    add.fill(add.image(data.toString("bg"), 300, 300));
    add.stroke({color: '#000', width: 3});
  });
  svg.attr({fill: pattern});
};

var positionHexagon = function(element, index, length) {
  let TOP;
  if (index % 2 == 0) {
    TOP = 150;
  }
  else {
    TOP = 280;
  }
  const PAD = -75;

  if (index > 0) {
    element.style.left = "calc(-112.5px + " + (index * PAD -
      (length / 2 * PAD)).toString() + "px)";
  }
  element.style.top = TOP.toString() + "px";
}

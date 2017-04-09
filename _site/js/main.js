/**
 * Hexagon
 * 
 * @link  {string} external link for element
 * @bg    {string} background image url
 * @title {string} content title
 * @desc  {string} detail about the content
 */

function Hexagon(link, bg, title, desc) {
  this.link = link;
  this.bg = bg;
  this.title = title;
  this.desc = desc;
}

var fillHexagon = function(data, element) {
  let svg = SVG('svg' + data.title.innerHTML);
  let pattern = svg.pattern(300, 300, function(add) {
    add.rect(300,300);
    add.fill(add.image(data.bg.getAttribute('src'), 300, 300));
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

  element.style.left = "calc(-75px + " + (index * PAD - (length / 2 * PAD)).toString() + "px)";
  element.style.top = TOP.toString() + "px";
}

var fillWorkHexagon = function() {
  let hexagon = new Hexagon();
  let baseLeft = "50%";

  let works = document.querySelectorAll("#work .hexag");
  if (works) {
   let index = 0;
    for (work of works) {
      let content = work.children[1];

      hexagon.link = content.children[1];
      hexagon.title = content.children[0];
      hexagon.desc = content.children[2];
      hexagon.bg = content.children[3];
      fillHexagon(hexagon);
      positionHexagon(work, index, works.length);
      index++;
    }
  }
};

var fillBlogHexagon = function() {
  let hexagon = new Hexagon();
  let post = document.querySelector("#blog .hexag");
  if (post) {
    post = post.children[1];

    hexagon.title = post.children[0];
    hexagon.desc = "";
    hexagon.link = post.children[1];
    hexagon.bg = post.children[2];
    console.log(hexagon.bg);

    fillHexagon(hexagon);
  }
}

var fillHeaderCurrentArticle = function() {
  let hexagon = new Hexagon();
  let post = document.querySelector("#trending_article .hexag");
  if (post) {
    post = post.children[1];

    hexagon.title = post.children[0];
    hexagon.desc = "";
    hexagon.link = "";
    hexagon.bg = post.children[1];
    fillHexagon(hexagon);
  }

  post = document.querySelector("#header_article .hexag");
  if (post) {
    post = post.children[1];

    hexagon.title = post.children[0];
    hexagon.desc = "";
    hexagon.link = "";
    hexagon.bg = post.children[1];
    fillHexagon(hexagon);
  }
}

fillHeaderCurrentArticle();
fillWorkHexagon();
fillBlogHexagon();


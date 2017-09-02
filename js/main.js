"use strict";


var fillWorkHexagon = function() {
  const baseLeft = "50%";

  const works = document.querySelectorAll("#work .hexag");
  if (works) {
   let index = 0;
    for (work of works) {
      const content = work.children[1].children;
      let hexagon = new Hexagon(content[1], content[3], content[0], content[2]);
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

    fillHexagon(hexagon);
  }
};

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
};

var fillBrand = function() {
  let hp = document.querySelector("#brand .hexag");
  if (hp) {
    let hexagon = new Hexagon("", hp.children[1].children[0], "brand", "");
    fillHexagon(hexagon);
  }
};

fillHeaderCurrentArticle();
fillWorkHexagon();
fillBlogHexagon();
fillBrand();


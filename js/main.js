"use strict";
/**
 * Hexagon
 *
 * @link  {string} external link for element
 * @bg    {string} background image url
 * @title {string} content title
 * @desc  {string} detail about the content
 */

$(window).on("load", () => {
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
      console.log(index * PAD - (length / 2 * PAD));
      element.style.left = "calc(-112.5px + " + (index * PAD - (length / 2 * PAD)).toString() + "px)";
    }
    element.style.top = TOP.toString() + "px";
  }

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

  var fillBrand = function() {
    let hp = document.querySelector("#brand .hexag");
    if (hp) {
      let hexagon = new Hexagon("", hp.children[1].children[0], "brand", "");
      fillHexagon(hexagon);
    }
  }

  fillHeaderCurrentArticle();
  fillWorkHexagon();
  fillBlogHexagon();
  fillBrand();

});


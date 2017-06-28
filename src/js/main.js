var htmlTemplate = require("./_articles.html");
var Tabletop = require("tabletop");
var dot = require("./lib/dot");
var template = dot.compile(htmlTemplate);
var $ = require("./lib/qsa");

var articleContainer = $.one(".articles");

var ready = function(sheet, table){
  var shown = sheet.filter(d => d.Share.trim());

  shown = shown.reverse().slice(0, 20);
  var html = template({rows:shown});
  articleContainer.innerHTML = html;
}

var sheetID = "1TxCIhCYx1XGiPAZZfysHDCUeQetez3hJq0M5dlh5oas";
Tabletop.init({key: sheetID, callback: ready, simpleSheet: true, wanted:["projects"]});

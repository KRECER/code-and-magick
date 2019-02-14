'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GIST_WIDTH = 40;
var GIST_MAX_HEIGHT = 140;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxNumber = function(numbers) {
  var numberMax = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if ( numbers[i] > numberMax) {
      numberMax = numbers[i];
    } 
  }
  return numberMax;
};

var printGist = function(ctx, x, y, height) {
  ctx.fillRect(x, y, GIST_WIDTH, height);
};

var printNames = function(ctx, playerName, x, y) {
  ctx.fillStyle = '#000000';
  ctx.fillText(playerName, x, y);
};

var printScore = function() {
    
};

var getHeightGist = function(score, maxScore) {
  return (GIST_MAX_HEIGHT * Math.floor(score)) / maxScore;
};

var showWinners = function(ctx, players, time) {
  var GIST_X = CLOUD_X + 40;
  var GIST_Y = CLOUD_Y + CLOUD_HEIGHT - 40;
  var GIST_POS = CLOUD_Y + CLOUD_HEIGHT - 30;
  var topScore = getMaxNumber(time);

  for (var i = 0; i < players.length; i++) {
    var heightGistPlayer = getHeightGist(time[i], topScore);

    players[i] == 'Вы' ? ctx.fillStyle = 'red' : ctx.fillStyle = 'rgba(0, 0, 255, 0.' + i+7 + ')';

    printGist(ctx, GIST_X, GIST_Y - heightGistPlayer, heightGistPlayer);
    printNames(ctx, players[i], GIST_X, GIST_POS);
    GIST_X += 100;
  }

};


window.renderStatistics = function(ctx, players, time) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 42);

  showWinners(ctx, players, time);
};
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var tableX = CLOUD_X + BAR_WIDTH;
var tableY = CLOUD_HEIGHT - GAP * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff'
  );

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + GAP, 48);


  for (var i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        tableX + (BAR_WIDTH + TEXT_WIDTH) * i,
        tableY
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
    };

    ctx.fillRect(
        tableX + (BAR_WIDTH + TEXT_WIDTH) * i,
        tableY - GAP,
        BAR_WIDTH,
        -(((BAR_HEIGHT * times[i]) / maxTime) - FONT_GAP - GAP)
    );

    ctx.fillStyle = 'black';

    ctx.fillText(
        Math.round(times[i]),
        tableX + (BAR_WIDTH + TEXT_WIDTH) * i,
        tableY - GAP * 2 - FONT_GAP - (((BAR_HEIGHT * times[i]) / maxTime) - FONT_GAP - GAP)
    );
  }
};

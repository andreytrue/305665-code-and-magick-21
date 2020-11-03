'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
const CLOUD_COLOR = '#fff';
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const tableX = CLOUD_X + BAR_WIDTH;
const tableY = CLOUD_HEIGHT - GAP * 3;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const colorPlayer = function (ctx, name) {
  if (name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240,' + Math.random() * 100 + '%, 50%)';
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      CLOUD_SHADOW
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      CLOUD_COLOR
  );

  ctx.fillStyle = '#000';

  const maxTime = getMaxElement(times);

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

    colorPlayer(ctx, names[i]);

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

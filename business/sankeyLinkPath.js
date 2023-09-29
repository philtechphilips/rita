const sankeyLinkPath = (link) => {
  let sx = link.source.x;
  let tx = link.target.x;
  let sy0 = link.source.y0;
  let sy1 = link.source.y1;
  let ty0 = link.target.y0;
  let ty1 = link.target.y1;

  let halfx = (tx - sx) / 2;

  const offset = 0;
  let path = d3.path();
  path.moveTo(sx, sy0);

  let cpx1 = sx + halfx;
  let cpy1 = sy0 + offset;
  let cpx2 = sx + halfx;
  let cpy2 = ty0 - offset;
  path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, tx, ty0);
  path.lineTo(tx, ty1);

  cpx1 = sx + halfx;
  cpy1 = ty1 - offset;
  cpx2 = sx + halfx;
  cpy2 = sy1 + offset;
  path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, sx, sy1);
  path.lineTo(sx, sy0);

  return path.toString();
};

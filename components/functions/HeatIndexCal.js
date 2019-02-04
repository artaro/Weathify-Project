export const heatindexcal = (t,h) => {
  //t=temp(in fahrenheit),h=humidity(in percentage)
  let tf = t * (9 / 5) + 32; //celsius to fahrenheit

  let c1 = -42.329;
  let c2 = 2.04901523;
  let c3 = 10.14333127;
  let c4 = -0.2247541;
  let c5 = -0.00683783;
  let c6 = -0.05481717;
  let c7 = 0.00122874;
  let c8 = 0.00085282;
  let c9 = -0.00000199;

  let hi =
    (c1 +
      c2 * tf +
      c3 * h +
      c4 * tf * h +
      c5 * tf * tf +
      c6 * h * h +
      c7 * tf * tf * h +
      c8 * tf * h * h +
      c9 * h * h * tf * tf -
      32) /
    1.8;

  return hi.toFixed(2);
};

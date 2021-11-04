export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const extractCurrency = (object, val) => {
  for (const key in object[0]) {
    if (key === val) {
      return object[0][key];
    }
  }
};

export const extractLanguages = (object) => {
  return object.map((ele) => `${ele.name}, `);
};

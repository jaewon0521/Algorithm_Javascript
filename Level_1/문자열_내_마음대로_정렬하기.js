function solution(strings, n) {
  strings.sort((x, y) => {
    if (x[n] === y[n]) {
      return (x > y) - (x < y);
    } else {
      return (x[n] > y[n]) - (x[n] < y[n]);
    }
  });

  return strings;
}

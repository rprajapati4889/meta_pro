const seededRandom = function (seed: number) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date: { getDate: () => number }) {
  let result: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  } = { morning: [], afternoon: [], evening: [] };
  let random = seededRandom(date.getDate());

  // ((parseInt(i) % 12) || 12) convert time to 12hr format

  // Morning Timings
  for (let i = 9; i < 12; i++) {
    if (random() < 0.5) {
      result.morning.push((i % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.morning.push((i % 12 || 12) + ":30");
    }
  }

  // Afternoon Timings
  for (let i = 12; i < 16; i++) {
    if (random() < 0.5) {
      result.afternoon.push((i % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.afternoon.push((i % 12 || 12) + ":30");
    }
  }

  // Evening Timings
  for (let i = 16; i < 21; i++) {
    if (random() < 0.5) {
      result.evening.push((i % 12 || 12) + ":00");
    }
    if (random() < 0.5) {
      result.evening.push((i % 12 || 12) + ":30");
    }
  }

  return result;
};

const submitAPI = function (formData: any) {
  return true;
};

export { fetchAPI, submitAPI };

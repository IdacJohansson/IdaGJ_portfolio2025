export const sortYearDesc = (data) => {
  return data.sort((a, b) => {
    const endA = parseInt(a.period.split("-")[1], 10);
    const endB = parseInt(b.period.split("-")[1], 10);
    return endB - endA;
  });
};
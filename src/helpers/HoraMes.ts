import moment from "moment";

export const HoraMes = (date: Date) => {
  const hoyMes = moment(date);
  return hoyMes.format("HH:mm a | MMMM Do");
};

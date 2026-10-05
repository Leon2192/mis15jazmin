const startsAt = "2026-11-06T21:00:00-03:00";
const endsAt = "2026-11-07T05:00:00-03:00";
const venue = "Círculo Olivos";
const address = "San Lorenzo 60, La Lucila, provincia de Buenos Aires";

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "numeric", month: "long", year: "numeric",
  timeZone: "America/Argentina/Buenos_Aires",
});
const timeFormatter = new Intl.DateTimeFormat("es-AR", {
  hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  timeZone: "America/Argentina/Buenos_Aires",
});

export const invitation = {
  name: "Jazmin",
  startsAt,
  endsAt,
  dateLabel: dateFormatter.format(new Date(startsAt)),
  endDateLabel: dateFormatter.format(new Date(endsAt)),
  timeLabel: "De " + timeFormatter.format(new Date(startsAt)) + " hs a " + timeFormatter.format(new Date(endsAt)) + " hs",
  venue,
  address,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(venue + ", " + address + ", Argentina"),
  cover: "/assets/portada.jpeg",
};

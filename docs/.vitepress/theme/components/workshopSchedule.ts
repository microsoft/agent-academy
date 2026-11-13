export interface Workshop {
  date: string;
  name: string;
  url: string;
  location: string;
  facilitators: string;
  soldOut?: boolean;
}

export const workshops: Workshop[] = [
  {
    date: "2026-04-15",
    name: "Color Cloud Workshop",
    url: "https://colorcloud.rocks/",
    location: "Hamburg, Germany",
    facilitators: "Nick Doelman & Ulrikke Akerbæk",
  },
  {
    date: "2026-06-29",
    name: "European Power Platform Conference",
    url: "https://espc.tech/conference/eppc-2026/",
    location: "Copenhagen, Denmark",
    facilitators: "Nick Doelman & Ulrikke Akerbæk",
  },
  {
    date: "2026-10-02",
    name: "Scottish Summit",
    url: "https://scottishsummit.com/",
    location: "Edinburgh, Scotland",
    facilitators: "April Dunnam, Mats Necker & Daniel Laskewitz",
  },
  {
    date: "2026-10-30",
    name: "Power Platform Community Conference",
    url: "https://powerplatformconf.com/#!/",
    location: "Las Vegas, NV",
    facilitators: "Scott Durow & Sheila Shahpari",
  },
  {
    date: "2026-11-16",
    name: "Microsoft Ignite pre-day lab",
    url: "https://ignite.microsoft.com/",
    location: "To be announced",
    facilitators: "April Dunnam & Daniel Laskewitz",
    soldOut: true,
  },
];

export function groupWorkshops(events: Workshop[], today: string) {
  return {
    upcoming: events.filter((event) => event.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date)),
    past: events.filter((event) => event.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)),
  };
}

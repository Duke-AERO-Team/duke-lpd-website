import type { Member } from "./team";

// The three subteams, shared by the homepage (one short section each, at
// `/#${slug}`) and /team (one roster row each). Only what both read lives
// here: each section's own headline, copy, and imagery are inline in
// AboutSection.astro, since nothing else renders them.

export interface Subteam {
  /** Doubles as the homepage section's id, so /team can link to `/#${slug}`. */
  slug: string;
  index: string;
  name: string;
  /**
   * Everyone on the subteam, first entry first: that one is the lead, read from
   * position 0 rather than from a separate field so there is only ever one
   * place a lead is named. Only /team draws these — the homepage sections
   * describe the work and name nobody.
   */
  members: Member[];
}

export const subteams: Subteam[] = [
  {
    slug: "combustion",
    index: "01",
    name: "Combustion Devices",
    members: [
      { name: "Archer White", study: "MechE/Aero '29", photo: "archer-white" },
    ],
  },
  {
    slug: "fluids",
    index: "02",
    name: "Fluid Systems",
    members: [
      {
        name: "Ethan Rosenfeld",
        study: "MechE/Physics '29",
        photo: "ethan-rosenfeld",
      },
    ],
  },
  {
    slug: "controls",
    index: "03",
    name: "Electrical & Controls",
    members: [
      { name: "Michael Danley", study: "ECE, CS '29", photo: "michael-danley" },
      { name: "Andrew Chen", study: "ECE, CS '29", photo: "andrew-chen" },
      { name: "David John", study: "MechE '29", photo: "david-john" },
      { name: "Aiden Khanna", study: "ECE '30", photo: "aiden-khanna" },
      { name: "Juan Varela", study: "ECE, CS '29", photo: "juan-varela" },
      { name: "Ben Wang", study: "ECE, CS '29", photo: "ben-wang" },
    ],
  },
];

import type { ImageMetadata } from "astro";

import type { Member } from "./team";

// Card crops (dark, cropped, meant to sit under a scrim) and full plates (lighter,
// uncropped, meant to be read) are separate images from the same sources — a
// background and a figure want opposite treatments.
import cardChamber from "../assets/card-chamber.webp";
import cardFluids from "../assets/card-fluids.webp";
import cardControls from "../assets/card-controls.webp";

export interface Subteam {
  slug: string;
  index: string;
  name: string;
  /** One line, used on the About card. */
  summary: string;
  /** What the subteam actually owns, used at the top of its own page. */
  detail: string;
  /**
   * Everyone on the subteam, first entry first: that one is the lead, read from
   * position 0 rather than from a separate field so there is only ever one
   * place a lead is named. Only /team draws these — the subteam pages describe
   * the work and name nobody.
   */
  members: Member[];
  card: ImageMetadata;
  cardAlt: string;
  /**
   * The drawing a subteam page opens on, when one earns the space. Optional
   * because an image that size has to be worth the whole first screen: a
   * cross-section or a P&ID repays the room, a photograph of one part does
   * not — so controls opens on its heading and reaches its photography further
   * down the page instead. Omitting it takes the alt text and caption with it.
   */
  plate?: ImageMetadata;
  plateAlt?: string;
  plateCaption?: string;
  /**
   * Three facts about the subteam, in its own plain words — scope and craft,
   * not part numbers. Optional for the same reason `plate` is: a strip of
   * labelled values is a third kind of thing on a page that reads better as
   * prose and photographs alone, so a page is free to carry none.
   */
  specs?: { label: string; value: string }[];
}

export const subteams: Subteam[] = [
  {
    slug: "combustion",
    index: "01",
    name: "Combustion Devices",
    summary:
      "Injector, chamber, and igniter design — turning propellant flow into thrust.",
    detail:
      "Combustion Devices designs, manufactures, and tests the injector, chamber, and nozzle that turn propellant into thrust. We bring together analysis and hands-on work to build hardware for the extreme conditions inside a liquid rocket engine.",
    members: [
      { name: "Archer White", study: "MechE/Aero '29", photo: "archer-white" },
    ],
    card: cardChamber,
    cardAlt:
      "Cross-section of the engine: converging-diverging nozzle and chamber liner.",
  },
  {
    slug: "fluids",
    index: "02",
    name: "Fluid Systems",
    summary:
      "Propellant feed, pressurization, and plumbing that gets the propellant and oxidiser to the chamber safely.",
    detail:
      "Fluid Systems owns the path from tank to injector: pressurization, propellant routing, and the valves and interlocks that make a test sequence safe to run and, more importantly, safe to abort.",
    members: [
      {
        name: "Ethan Rosenfeld",
        study: "MechE/Physics '29",
        photo: "ethan-rosenfeld",
      },
    ],
    card: cardFluids,
    cardAlt:
      "Piping and instrumentation diagram showing propellant tanks, servo ball valves, and check valves.",
  },
  {
    slug: "controls",
    index: "03",
    name: "Electrical & Controls",
    summary:
      "The in-house control board and software that arm, sequence, and monitor every test.",
    detail:
      "Electrical & Controls develops the electronics and software that operate our liquid propulsion test stand. We connect the hardware to the operators, from valve commands to live sensor data.",
    members: [
      { name: "Michael Danley", study: "ECE, CS '29", photo: "michael-danley" },
    ],
    card: cardControls,
    cardAlt:
      "Layout of the in-house liquid propulsion control board, showing the servo bus and pressure-transducer interface.",
  },
];

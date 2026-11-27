import type { GlobeLocation } from '../components/WorldGlobe';

/**
 * Every place Jamie has studied or worked, for the globe on the home page.
 *
 * This lived inside the CV page while the globe did. It moved out when the
 * globe moved to the home page, so the data sits next to nothing in
 * particular and either page can read it.
 */
export const locations: GlobeLocation[] = [
  {
    name: 'New York, USA',
    lat: 40.71,
    lng: -74.01,
    roles: [
      { type: 'school', title: 'BA, Computer Science & Neuroscience', org: 'Barnard College, Columbia University', dates: '2019 – 2023' },
      { type: 'work', title: "Bachelor's Thesis Research Assistant, Agalliu Lab", org: 'Columbia University Irving Medical Center', dates: 'Sep 2021 – May 2023' },
      { type: 'work', title: 'Peer Leader / Teaching Assistant', org: 'Columbia University', dates: '2021 – 2023' },
    ],
  },
  {
    name: 'Boston, USA',
    lat: 42.36,
    lng: -71.06,
    roles: [
      { type: 'work', title: 'Student Research Assistant, Musolino Lab', org: 'Massachusetts General Hospital', dates: 'Nov 2020 – Sep 2021' },
    ],
  },
  {
    name: 'Oklahoma City, USA',
    lat: 35.47,
    lng: -97.52,
    roles: [
      { type: 'work', title: 'Software Developer', org: 'Fast Enterprises (Oklahoma Tax Commission)', dates: 'Jul 2023 – Jul 2024' },
    ],
  },
  {
    name: 'Ramat Gan, Israel',
    lat: 32.07,
    lng: 34.82,
    roles: [
      { type: 'school', title: 'MSc, Neuroscience & Data Science (Erasmus Mundus)', org: 'Bar-Ilan University', dates: '2024 – 2026' },
      { type: 'work', title: 'Student Research Assistant, Kraus Lab', org: 'Bar-Ilan University', dates: 'Sep 2024 – Jan 2026' },
    ],
  },
  {
    name: 'Amsterdam, Netherlands',
    lat: 52.37,
    lng: 4.9,
    roles: [
      { type: 'school', title: 'MSc, Neuroscience & Data Science (Erasmus Mundus)', org: 'Vrije Universiteit Amsterdam', dates: '2024 – 2026' },
    ],
  },
  {
    name: 'Zurich, Switzerland',
    lat: 47.37,
    lng: 8.55,
    roles: [
      { type: 'work', title: 'MSc Thesis Researcher, Neural Dynamics Lab', org: 'Institute of Neuroinformatics, ETH Zurich', dates: 'Feb – Jul 2026' },
    ],
  },
  {
    name: 'Copenhagen, Denmark',
    lat: 55.68,
    lng: 12.57,
    roles: [
      { type: 'work', title: 'Research Assistant, Kirkeby Lab', org: 'reNEW, University of Copenhagen', dates: 'Sep 2026 – Present' },
    ],
  },
  {
    name: 'Lviv, Ukraine',
    lat: 49.84,
    lng: 24.03,
    roles: [
      { type: 'work', title: 'Program Coordinator & Instructor', org: 'Code.X', dates: '2024 – Present' },
    ],
  },
];

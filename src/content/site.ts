export type Link = { label: string; href: string };
export type FocusArea = { eyebrow: string; title: string; description: string };
export type SelectedWork = {
  type: string;
  title: string;
  description: string;
  detail: string;
  href?: string;
};
export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  href: string;
  contribution:
    'First author' | 'Co-first author' | 'Co-corresponding author' | 'Coauthor';
};
export type TimelineEntry = {
  period: string;
  organization: string;
  role: string;
  description: string;
};

export const profile = {
  name: 'Zelun Wu',
  nameZh: '吴泽伦',
  headline: 'Graphics systems researcher and physical oceanographer',
  location: 'Shanghai, China',
  introduction:
    'I work across graphics systems, GPU drivers, Gaussian rendering runtimes, and data-driven ocean science. My approach combines physical understanding, reproducible research, and low-level systems engineering.',
  links: [
    { label: 'GitHub', href: 'https://github.com/zelunwu' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-9480-2738' },
  ] satisfies Link[],
};

export const focusAreas: FocusArea[] = [
  {
    eyebrow: '01 · Systems',
    title: 'Graphics systems & GPU runtimes',
    description:
      'Graphics architecture, rendering algorithms, GPU driver interfaces, runtime contracts, and evidence-driven performance engineering.',
  },
  {
    eyebrow: '02 · Rendering',
    title: 'Gaussian scene representation',
    description:
      'Persistent scene state, Gaussian rendering, multi-backend execution, quality validation, and spatial-temporal reconstruction.',
  },
  {
    eyebrow: '03 · Science',
    title: 'Ocean carbon & machine learning',
    description:
      'Physical oceanography, remote sensing, coastal carbon dynamics, and machine-learning reconstruction of sparse observations.',
  },
];

export const selectedWork: SelectedWork[] = [
  {
    type: 'Public product · Graphics systems',
    title: 'HarmonyOS 7 Spatial Clock',
    description:
      'A 3D lock-screen experience built from foundational graphics and rendering capabilities through to the final on-screen interaction.',
    detail:
      'Led project initiation, solution design, implementation, and performance design for the publicly released product experience.',
  },
  {
    type: 'First-author research · Ocean carbon',
    title: 'Coastal-ocean pCO₂ reconstruction',
    description:
      'A machine-learning reconstruction of sea-surface pCO₂ across the North American Atlantic Coastal Ocean Margin from 1993 to 2021.',
    detail: 'Earth System Science Data · 2025',
    href: 'https://doi.org/10.5194/essd-17-43-2025',
  },
  {
    type: 'First-author research · Physical oceanography',
    title: 'Air–sea CO₂ flux in the Gulf of Mexico',
    description:
      'An assessment of air–sea carbon flux using observations and multiple machine-learning data products.',
    detail: 'Progress in Oceanography · 2024',
    href: 'https://doi.org/10.1016/j.pocean.2024.103244',
  },
];

export const publications: Publication[] = [
  {
    year: 2025,
    title:
      'A machine-learning reconstruction of sea surface pCO2 in the North American Atlantic Coastal Ocean Margin from 1993 to 2021',
    authors: 'Wu, Z.; Lu, W.; Roobaert, A.; Song, L.; Yan, X.-H.; Cai, W.-J.',
    venue: 'Earth System Science Data 17, 43–63',
    href: 'https://doi.org/10.5194/essd-17-43-2025',
    contribution: 'First author',
  },
  {
    year: 2025,
    title:
      'Regulation of surface carbon dioxide distributions and air-sea fluxes by temperature, biology, and mixing along the North American Atlantic Coastal Ocean Margin',
    authors: 'Wu, Z.; Li, X.; Ouyang, Z.; Cai, W.-J.',
    venue: 'Limnology and Oceanography',
    href: 'https://doi.org/10.1002/lno.70073',
    contribution: 'First author',
  },
  {
    year: 2024,
    title:
      'Air-sea CO2 flux in the Gulf of Mexico from observations and multiple machine-learning data products',
    authors:
      'Wu, Z.; Wang, H.; Liao, E.; Hu, C.; Edwing, K.; Yan, X.-H.; Cai, W.-J.',
    venue: 'Progress in Oceanography 223, 103244',
    href: 'https://doi.org/10.1016/j.pocean.2024.103244',
    contribution: 'First author',
  },
  {
    year: 2024,
    title:
      'Remote sensing estimations of the seawater partial pressure of CO2 using sea surface roughness derived from Synthetic Aperture Radar',
    authors:
      'Wang, Y.; Wu, Z.; Lu, W.; Yu, S.; Li, S.; Meng, L.; Geng, X.; Yan, X.-H.',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing 62, 4204913',
    href: 'https://doi.org/10.1109/TGRS.2024.3379984',
    contribution: 'Co-first author',
  },
  {
    year: 2024,
    title:
      'Impact of Marine Heatwaves on Air-Sea CO2 Flux Along the US East Coast',
    authors: 'Edwing, K.; Wu, Z.; Lu, W.; Li, X.; Cai, W.; Yan, X.',
    venue: 'Geophysical Research Letters 51, e2023GL105363',
    href: 'https://doi.org/10.1029/2023GL105363',
    contribution: 'Co-corresponding author',
  },
  {
    year: 2024,
    title:
      'The source and accumulation of anthropogenic carbon in the U.S. East Coast',
    authors: 'Li, X.; Wu, Z.; Ouyang, Z.; Cai, W.-J.',
    venue: 'Science Advances 10, eadl3169',
    href: 'https://doi.org/10.1126/sciadv.adl3169',
    contribution: 'Coauthor',
  },
];

export const experience: TimelineEntry[] = [
  {
    period: '2026 — Present',
    organization: 'Iluvatar CoreX',
    role: 'Graphics systems research & development',
    description:
      'Research and development spanning GPU drivers, persistent scene state, and Gaussian rendering runtimes.',
  },
  {
    period: '2025 — 2026',
    organization: 'Huawei · Central Media Technology Institute',
    role: 'Senior Algorithm Engineer · Graphics Algorithms',
    description:
      'Graphics systems, rendering algorithms, and end-to-end system engineering for public product experiences.',
  },
];

export const education: TimelineEntry[] = [
  {
    period: '2019 — 2024',
    organization: 'University of Delaware',
    role: 'PhD in Oceanography',
    description:
      'Ocean carbon dynamics, observations, remote sensing, and data-driven reconstruction.',
  },
  {
    period: '2016 — 2024',
    organization: 'Xiamen University',
    role: 'PhD in Physical Oceanography',
    description:
      'Physical oceanography, large-scale circulation, and ocean variability.',
  },
  {
    period: '2012 — 2016',
    organization: 'Xiamen University',
    role: 'Bachelor of Science in Marine Science',
    description: 'Marine science and physical oceanography.',
  },
];

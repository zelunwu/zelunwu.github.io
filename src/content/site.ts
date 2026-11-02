export type Locale = 'en' | 'zh';
export type Link = { label: string; href: string };
export type FocusArea = { eyebrow: string; title: string; description: string };
export type SelectedWork = {
  type: string;
  title: string;
  description: string;
  detail: string;
  href?: string;
};
export type Contribution =
  'first_author' | 'co_first_author' | 'co_corresponding_author' | 'coauthor';
export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  href: string;
  contribution: Contribution;
};
export type TimelineEntry = {
  period: string;
  organization: string;
  role: string;
  description: string;
};

const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/zelunwu' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-9480-2738' },
];

export const siteContent = {
  en: {
    profile: {
      name: 'Zelun Wu',
      nameZh: '吴泽伦',
      headline: 'Graphics systems researcher and physical oceanographer',
      location: 'Shanghai, China',
      introduction:
        'I work across graphics systems, GPU drivers, Gaussian rendering runtimes, and data-driven ocean science. My approach combines physical understanding, reproducible research, and low-level systems engineering.',
      links,
    },
    focusAreas: [
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
    ] satisfies FocusArea[],
    selectedWork: [
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
    ] satisfies SelectedWork[],
    experience: [
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
    ] satisfies TimelineEntry[],
    education: [
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
    ] satisfies TimelineEntry[],
  },
  zh: {
    profile: {
      name: '吴泽伦',
      nameZh: 'Zelun Wu',
      headline: '图形系统研究与开发、物理海洋学研究',
      location: '中国上海',
      introduction:
        '我的工作涵盖图形系统、GPU 驱动、高斯渲染运行时与数据驱动的海洋科学，强调物理理解、可复现研究与底层系统工程的结合。',
      links,
    },
    focusAreas: [
      {
        eyebrow: '01 · 系统',
        title: '图形系统与 GPU 运行时',
        description:
          '图形架构、渲染算法、GPU 驱动接口、运行时契约与基于证据的性能工程。',
      },
      {
        eyebrow: '02 · 渲染',
        title: '高斯场景表示',
        description:
          '持久化场景状态、高斯渲染、多后端执行、质量验证与时空重建。',
      },
      {
        eyebrow: '03 · 科学',
        title: '海洋碳循环与机器学习',
        description: '物理海洋学、遥感、近岸碳循环及稀疏观测的机器学习重建。',
      },
    ] satisfies FocusArea[],
    selectedWork: [
      {
        type: '公开产品 · 图形系统',
        title: 'HarmonyOS 7 空间时钟',
        description:
          '从底层图形与渲染能力出发，构建并交付最终呈现在锁屏上的三维交互体验。',
        detail: '负责项目发起、方案设计、实现与性能设计。',
      },
      {
        type: '第一作者研究 · 海洋碳循环',
        title: '近岸海洋 pCO₂ 重建',
        description:
          '使用机器学习重建 1993—2021 年北美大西洋近岸海域的海表 pCO₂。',
        detail: 'Earth System Science Data · 2025',
        href: 'https://doi.org/10.5194/essd-17-43-2025',
      },
      {
        type: '第一作者研究 · 物理海洋学',
        title: '墨西哥湾海气 CO₂ 通量',
        description: '综合观测与多种机器学习数据产品，评估墨西哥湾海气碳通量。',
        detail: 'Progress in Oceanography · 2024',
        href: 'https://doi.org/10.1016/j.pocean.2024.103244',
      },
    ] satisfies SelectedWork[],
    experience: [
      {
        period: '2026 — 至今',
        organization: '天数智芯',
        role: '图形系统研发',
        description:
          '围绕 GPU 驱动、持久化场景状态与高斯渲染运行时开展研究与开发。',
      },
      {
        period: '2025 — 2026',
        organization: '华为 · 中央媒体技术院',
        role: '高级算法工程师 · 图形算法',
        description:
          '面向公开产品体验开展图形系统、渲染算法与端到端系统工程工作。',
      },
    ] satisfies TimelineEntry[],
    education: [
      {
        period: '2019 — 2024',
        organization: '特拉华大学',
        role: '海洋学博士',
        description: '海洋碳循环、观测、遥感与数据驱动重建。',
      },
      {
        period: '2016 — 2024',
        organization: '厦门大学',
        role: '物理海洋学博士',
        description: '物理海洋学、大尺度环流与海洋变率。',
      },
      {
        period: '2012 — 2016',
        organization: '厦门大学',
        role: '海洋科学学士',
        description: '海洋科学与物理海洋学。',
      },
    ] satisfies TimelineEntry[],
  },
};

export const publications: Publication[] = [
  {
    year: 2026,
    title:
      'Reconstruction of δ13CDIC in the Atlantic Ocean: a probabilistic machine learning approach for filling historical data gaps',
    authors: 'Gao, H.; Wu, Z.; Cai, W.-J.',
    venue: 'Earth System Science Data',
    href: 'https://doi.org/10.5194/essd-18-2443-2026',
    contribution: 'coauthor',
  },
  {
    year: 2026,
    title:
      "Spatiotemporal Modulation of Alkalinity and DIC Outwelling From Saltmarsh Porewater in New England's Largest Marsh Complex",
    authors:
      'Zhang, M.; Cai, X.; Weston, N. B.; Wu, Z.; Giblin, A. E.; Hunt, C. W.; Tsao, S. S.; Zhang, N. H.; Raymond, P. A.',
    venue: 'Journal of Geophysical Research Biogeosciences',
    href: 'https://doi.org/10.1029/2026JG009711',
    contribution: 'coauthor',
  },
  {
    year: 2025,
    title:
      'A surface ocean pCO2 product with improved representation of interannual variability using a vision transformer-based model',
    authors:
      'Zhang, X.; Liao, E.; Lu, W.; Wu, Z.; Wang, G.; Zhu, X.; Liang, S.',
    venue: 'Earth System Science Data',
    href: 'https://doi.org/10.5194/essd-17-6071-2025',
    contribution: 'coauthor',
  },
  {
    year: 2025,
    title:
      'A machine-learning reconstruction of sea surface pCO2 in the North American Atlantic Coastal Ocean Margin from 1993 to 2021',
    authors: 'Wu, Z.; Lu, W.; Roobaert, A.; Song, L.; Yan, X.-H.; Cai, W.-J.',
    venue: 'Earth System Science Data 17, 43–63',
    href: 'https://doi.org/10.5194/essd-17-43-2025',
    contribution: 'first_author',
  },
  {
    year: 2025,
    title:
      'Regulation of surface carbon dioxide distributions and air-sea fluxes by temperature, biology, and mixing along the North American Atlantic Coastal Ocean Margin',
    authors: 'Wu, Z.; Li, X.; Ouyang, Z.; Cai, W.-J.',
    venue: 'Limnology and Oceanography',
    href: 'https://doi.org/10.1002/lno.70073',
    contribution: 'first_author',
  },
  {
    year: 2024,
    title:
      'Air-sea CO2 flux in the Gulf of Mexico from observations and multiple machine-learning data products',
    authors:
      'Wu, Z.; Wang, H.; Liao, E.; Hu, C.; Edwing, K.; Yan, X.-H.; Cai, W.-J.',
    venue: 'Progress in Oceanography 223, 103244',
    href: 'https://doi.org/10.1016/j.pocean.2024.103244',
    contribution: 'first_author',
  },
  {
    year: 2024,
    title:
      'Remote sensing estimations of the seawater partial pressure of CO2 using sea surface roughness derived from Synthetic Aperture Radar',
    authors:
      'Wang, Y.; Wu, Z.; Lu, W.; Yu, S.; Li, S.; Meng, L.; Geng, X.; Yan, X.-H.',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing 62, 4204913',
    href: 'https://doi.org/10.1109/TGRS.2024.3379984',
    contribution: 'co_first_author',
  },
  {
    year: 2024,
    title:
      'Impact of Marine Heatwaves on Air-Sea CO2 Flux Along the US East Coast',
    authors: 'Edwing, K.; Wu, Z.; Lu, W.; Li, X.; Cai, W.; Yan, X.',
    venue: 'Geophysical Research Letters 51, e2023GL105363',
    href: 'https://doi.org/10.1029/2023GL105363',
    contribution: 'co_corresponding_author',
  },
  {
    year: 2024,
    title:
      'The source and accumulation of anthropogenic carbon in the U.S. East Coast',
    authors: 'Li, X.; Wu, Z.; Ouyang, Z.; Cai, W.-J.',
    venue: 'Science Advances 10, eadl3169',
    href: 'https://doi.org/10.1126/sciadv.adl3169',
    contribution: 'coauthor',
  },
  {
    year: 2023,
    title:
      'On the spatial and temporal variations of primary production in the South China Sea',
    authors:
      'Song, L.; Lee, Z.; Shang, S.; Huang, B.; Wu, J.; Wu, Z.; Lu, W.; Liu, X.',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing 61, 4201514',
    href: 'https://doi.org/10.1109/TGRS.2023.3241209',
    contribution: 'coauthor',
  },
  {
    year: 2023,
    title:
      'Quasi-Decadal Temperature Variability in the Intermediate Layer of Subtropical South Indian Ocean During the Argo Period',
    authors:
      'Huang, L.; Zhuang, W.; Wu, Z.; Zhang, Y.; Meng, L.; Edwing, D.; Yan, X.',
    venue: 'Journal of Geophysical Research: Oceans 128, e2023JC019775',
    href: 'https://doi.org/10.1029/2023JC019775',
    contribution: 'coauthor',
  },
  {
    year: 2022,
    title:
      'Framework to Extract Extreme Phytoplankton Bloom Events with Remote Sensing Datasets: A Case Study',
    authors: 'Lu, W.; Gao, X.; Wu, Z.; Wang, T.; Lin, S.; Xiao, C.; Lai, Z.',
    venue: 'Remote Sensing 14, 3557',
    href: 'https://doi.org/10.3390/rs14153557',
    contribution: 'coauthor',
  },
  {
    year: 2022,
    title:
      'Decadal Cooling Events in the South Indian Ocean During the Argo Era',
    authors:
      'Huang, L.; Zhuang, W.; Wu, Z.; Meng, L.; Edwing, D.; Edwing, K.; Wang, L.; Yan, X.',
    venue: 'Journal of Geophysical Research: Oceans 127',
    href: 'https://doi.org/10.1029/2021JC017949',
    contribution: 'coauthor',
  },
  {
    year: 2022,
    title:
      'Revisiting the Intraseasonal Variability of Chlorophyll-a in the Adjacent Luzon Strait With a New Gap-Filled Remote Sensing Data Set',
    authors: 'Wang, T.; Yu, P.; Wu, Z.; Lu, W.; Liu, X.; Li, Q. P.; Huang, B.',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing 60, 4201311',
    href: 'https://doi.org/10.1109/TGRS.2021.3067646',
    contribution: 'coauthor',
  },
  {
    year: 2020,
    title:
      'Surface water exchanges in the Luzon Strait as inferred from Lagrangian coherent structures',
    authors: 'Zheng, Z.; Zhuang, W.; Hu, J.; Wu, Z.; Liu, C.',
    venue: 'Acta Oceanologica Sinica 39, 21–32',
    href: 'https://doi.org/10.1007/s13131-020-1677-y',
    contribution: 'coauthor',
  },
  {
    year: 2020,
    title:
      'Impacts of the upper-ocean salinity variations on the decadal sea level change in the Southeast Indian Ocean during the Argo era',
    authors: 'Huang, J.; Zhuang, W.; Yan, X.-H.; Wu, Z.',
    venue: 'Acta Oceanologica Sinica 39, 1–10',
    href: 'https://doi.org/10.1007/s13131-020-1574-4',
    contribution: 'coauthor',
  },
];

export const contributionLabels: Record<
  Locale,
  Record<Contribution, string>
> = {
  en: {
    first_author: 'First author',
    co_first_author: 'Co-first author',
    co_corresponding_author: 'Co-corresponding author',
    coauthor: 'Coauthor',
  },
  zh: {
    first_author: '第一作者',
    co_first_author: '共同第一作者',
    co_corresponding_author: '共同通讯作者',
    coauthor: '合作者',
  },
};

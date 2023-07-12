type LinkModel = {
  url: string;
  title: string;
  timestamp: number;
};

type LinkSection = {
  links: LinkModel[];
  title: string;
  image?: {
    url: string;
    alternateText: string;
  };
};

const sweden: LinkModel = {
  url: 'https://www.youtube.com/watch?v=suu14Yr34ko',
  title: `"Sweden" from Minecraft`,
  timestamp: 1689119621721,
};

const moogCity: LinkModel = {
  url: 'https://www.youtube.com/watch?v=fKhj4LgcRL4',
  title: `Moog City from Minecraft`,
  timestamp: 1689119627659,
};

const minecraftMusic: LinkSection = {
  title: 'Minecraft & Pink Floyd',
  links: [sweden, moogCity],
  image: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Optical-dispersion_%281%29.png',
    alternateText: 'Image of Pink Floyd album Dark Side of The Moon',
  },
};

export type { LinkModel, LinkSection };
export { minecraftMusic };

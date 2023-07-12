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

const minecraftMusicSection: LinkSection = {
  title: 'Fusion of Pink Floyd and Minecraft',
  links: [sweden, moogCity],
  image: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Optical-dispersion_%281%29.png',
    alternateText: 'Image of Pink Floyd album Dark Side of The Moon',
  },
};

const flutterSection: LinkSection = {
  title: 'Flutter & Dart',
  links: [
    {
      url: 'https://medium.com/flutter-community/stop-using-state-management-libraries-48a81ed7979d',
      title: 'Stop using state management libraries',
      timestamp: 1689124965633,
    },
    {
      url: 'https://oleksandrkirichenko.com/blog/delayed-code-execution-in-flutter/',
      title: 'Delayed code execution in Flutter',
      timestamp: 1689125195886,
    },
  ],
};

const codeSection: LinkSection = {
  title: 'Software Development',
  links: [
    {
      url: 'https://refactoring.guru/',
      title: 'Refactoring Guru',
      timestamp: 1689125170481,
    },
    {
      url: 'https://cbea.ms/git-commit/',
      title: 'How to write a git commit message',
      timestamp: 1689125264306,
    },
  ],
};

const linksContent = [flutterSection, codeSection, minecraftMusicSection];

export type { LinkModel, LinkSection };
export { linksContent };

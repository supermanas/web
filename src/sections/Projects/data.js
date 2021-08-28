import { CollegemateLogo, CollegemateDark } from '../../images/Collegemate';
import { SFPImageSmall, SFPImageLarge, SFPLogo } from '../../images/7days50projects';
import { AubitLogo, AubitMobile } from '../../images/Aubit';
import { InfiniteLoopClub, InfiniteLoopClubLogo } from '../../images/InfiniteLoopClub';

const collegemate = {
  title: 'Createch 3.0',
  type: 'Featured project',
  logo: CollegemateLogo,
  images: {
    light: { small: CollegemateDark, large: CollegemateDark },
    dark: { small: CollegemateDark, large: CollegemateDark }
  },
  description:
    'AN annual tech event hosted by createch club in view to widespread knowledge',
  features: [
    'assured 60lac prizes',
    'online event',
    'free regisration',
    'no limits',
    'cool and exciting rewards',
    'ryan vk'
  ],
  techStack: ['java', 'css', 'html', 'wordpress'],
  link: 'https://createchclub.xyz/',
  repo: undefined
};

const ilc = {
  title: 'createch website',
  type: 'Collaborated project',
  logo: InfiniteLoopClubLogo,
  images: {
    light: { small: InfiniteLoopClub, large: InfiniteLoopClub },
    dark: { small: InfiniteLoopClub, large: InfiniteLoopClub }
  },
  description:
    'The official website of the createch club 2021-22',
  features: ['200+members', 'build with efforts', 'learning sessions', 'widespread knowledge'],
  techStack: ['java', 'html', 'css'],
  link: 'https://createchclub.xyz',
  repo: undefined
};

const $7d50p = {
  title: '7 Days 50 Projects',
  type: 'Featured project',
  logo: SFPLogo,
  images: {
    light: { small: SFPImageSmall, large: SFPImageLarge },
    dark: { small: SFPImageSmall, large: SFPImageLarge }
  },
  description:
    'A fun challenge, to complete a collection of 50 projects within 7 days.',
  features: ['Theme clock', 'Testimonials', 'Movie app', 'Double click like'],
  techStack: ['JS', 'styled-components', 'TypeScript'],
  link: 'https://7days50projects.vercel.app/',
  repo: 'https://github.com/benxene/7days-50projects'
};

const aubit = {
  title: 'createch 2.0 website',
  type: 'Collaborated project',
  logo: AubitLogo,
  images: {
    light: { small: AubitMobile, large: AubitMobile },
    dark: { small: AubitMobile, large: AubitMobile }
  },
  description:
    'The official website of createch 2.0.',
  features: ['online learning', 'free sessions ', '2 days 10 event', 'ultimate sessions'],
  techStack: ['robotics', 'web dev'],
  link: 'http://www.createchrisvk.in/',
   repo: 'https://github.com/hridizaroy/createch'
};

const data = [collegemate, ilc, aubit, $7d50p];
export default data;

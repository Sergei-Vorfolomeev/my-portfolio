import projectImg from "common/assets/img/projectImg.jpeg";
import todolistImg from "common/assets/img/stickersImg.jpeg";
import flashCardsImg from "common/assets/img/flashCardsImg.png";
import orbitaImg from "common/assets/img/astronaut900.jpg";
import socialNetworkImg from "common/assets/img/socialNetwork.avif";
import todolistNgImg from "common/assets/img/todolistImg.jpeg";
import ticTacToeGameImg from "common/assets/img/tic-tac-toe-game-img.png";

export type ProjectType = {
  id: number
  title: string
  description: string
  img: string
  projectLink: string
  repoLink: string
  style: {
    gridArea: string
  }
}

export const projects: ProjectType[] = [
  {
    id: 0,
    title: 'Portfolio',
    img: projectImg,
    description:
      "My portfolio project that you're watching now. It's built with using CSS-preprocessors (SCSS), HTML-5, responsive design for all the devices.",
    projectLink: 'sergei-vorfolomeev.github.io/my-portfolio/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/my-portfolio',
    style: {
      gridArea: 'portfolio',
    },
  },
  {
    id: 1,
    title: 'Tic Tac Toe Game',
    img: ticTacToeGameImg,
    description:
      "This project was written on Next.Js framework. Tailwind was used for styling application. Here I used advanced knowledge about React state, useEffect hook, useReducer hook, wrote custom hooks, worked with timers. I didn't forget about optimisation, deeply understanding the principles of work useMemo, useCallback, React.memo. Also I covered basic architecture principles: low coupling, high cohesion, SRP, FSD.",
    projectLink: 'https://sergei-vorfolomeev.github.io/tic-tac-toe-game/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/tic-tac-toe-game',
    style: {
      gridArea: 'tic-tac-toe',
    },
  },
  {
    id: 2,
    title: 'Tasks Manager',
    description:
      'My project for managing time building with React. Redux Toolkit was used as main state manager. In project were implemented the basic CRUD operations, filtration, interaction with backend with understanding REST-API architecture and principles, asynchronous requests using Promises in Axios library, handling errors occurring on the client or server, working with forms and validation using Formik, Yup library. Also working with complicated data structures like an associative array. Material UI was used for styling of application. ',
    img: todolistImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/todolist-ts-01/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-ts-01',
    style: {
      gridArea: 'taskManager',
    },
  },
  {
    id: 3,
    title: 'Orbita',
    description:
      'My education project for the space travel company of the future with using CSS-preprocessors (SCSS), HTML-5, responsive design for all the devices.',
    img: orbitaImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/orbita-project/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/orbita-project',
    style: {
      gridArea: 'orbita',
    },
  },

  {
    id: 4,
    title: 'Flash Cards',
    description:
      'Project development in a team with using React, Redux, Typescript, Formik, MUI, REST API, Axios. The main feature of this project was working with version control system - Git. Also for formatting and styling code were used Prettier, EsLint and StyleLint.',
    img: flashCardsImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/cards-project/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/cards-project',
    style: {
      gridArea: 'flashCards',
    },
  },
  {
    id: 5,
    title: 'Social Network',
    description:
      'My education project with using React, Redux, Typescript and so on. Part of project was written with using class components, which now are deprecated in React. But this experience helps to better understand OOP principles, SOLID principles, and just a legacy code.',
    img: socialNetworkImg,
    projectLink: 'https://sergei-vorfolomeev.github.io/new-social-network/',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/new-social-network',
    style: {
      gridArea: 'socialNetwork',
    },
  },

  {
    id: 6,
    title: 'Todolist on Angular',
    description: 'My education project with using Angular.',
    img: todolistNgImg,
    projectLink: 'https://github.com/Sergei-Vorfolomeev/todolist-angular',
    repoLink: 'https://github.com/Sergei-Vorfolomeev/todolist-angular',
    style: {
      gridArea: 'todoAng',
    },
  },
]
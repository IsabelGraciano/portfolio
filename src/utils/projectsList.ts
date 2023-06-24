import project from '@/utils/types/project'

const projectsList: Array<project> = [
  {
    id: 1,
    name: 'Coins exchange',
    description: 'This app is a money converter from Bitcoins to USD Dollars. It shows the most famous Bitcoins along with their prices, variation in the last 24 hours and their market capital. Additionally, each Bitcoin has a grapic that shows its variation in the last day.',
    imgs: ['coin-exchange-1.png', 'coin-exchange-2.png', 'coin-exchange-3.png'],
    url: 'https://coin-exchange-vue2.netlify.app/',
    repository: 'https://github.com/IsabelGraciano/Vue2-coin-exchange',
    techStack: 'Vue2, Tailwind, Babel'
  },
  {
    id: 2,
    name: 'Our weather',
    description: 'A weather app where you can look for a specific city and it will give you the temperature, what it feels like, wind spped, humidity and others. You can check the weather of the previous, current and following day',
    imgs: ['our-weather-1.png', 'our-weather-2.png'],
    repository: 'https://github.com/IsabelGraciano/our-weather',
    url: 'https://main--our-weather-checker.netlify.app/',
    techStack: 'React, Tailwind, Vite, Typescript'
  }
]

export default projectsList

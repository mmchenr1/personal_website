const header = {
  homepage: 'https://mmchenr1.github.io',
  title: 'JS.',
}

//easily editable constant to update site info!
const about = {
  name: 'Molly McHenry',
  role: 'Full Stack Engineer',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/molly-mchenry-35a56b235/',
    github: 'https://github.com/mmchenr1',
  },
}

const projects = [
  {
    name: 'Trek',
    description:
      'Trek is a web application with the goal of connecting university students when they travel off campus! Get started by creating an account using Google. Now you can make posts updating your friends were you' +
      're going and the details of your trips, and see what your friends are up to as well. Trek: Great travel with even better company!',
    stack: ['Java', 'TypeScript', 'React', 'Firebase', 'Spark', 'CSS'],
    sourceCode: 'https://github.com/mmchenr1/Trek-Travel-App',
    // livePreview: 'https://github.com/mmchenr1/Trek-Travel-App',
  },
  {
    name: 'CSV/Weather Proxy Web App',
    description:
      'This project has two parts: an API server and a front-end web app. The web API server is capable of loading and retrieving CSV contents and getting the weather of a specified longitude, latitude coordinated in the continental United States by communicating with the NWS API.' + 
      'The front-end web app provides a REPL interface for a user to cleanly get information from this API.',
    stack: ['Java', 'Typescript', "React", 'Apache Spark'],
    note: 'course assignment: private repo',  },
  {
    name: 'Search',
    description:
      'Search is a search engine capable of searching through large databases of wiki files. This engine returns results to queries by ranking the results of a query based on relevance using PageRank & Term-Relevance algorithms. Search includes an Indexer to pre-process XML files & a Querier to read through documents at the time of user search.',
    stack: ['Python'],
    note: 'course assignment: private repo',  },
  {
    name: 'WeensyOS',
    description:
      'Wrote OS kernel code that implements virtual memory architecture and system calls for an operating' + 
      ' system called WeensyOS that supports 3MB of virtual memory on top of 2MB of physical memory',
    stack: ['C++'],
    note: 'course assignment: private repo',  },
  {
    name: 'DMalloc',
    description:
      'DMalloc is a dynamic memory allocator that helps to debug dynamic memory usage. The source code for DMalloc manually manages dynamic memory and memory errors (address sanitizers, wild writes, etc.).',
    stack: ['C++'],
    note: 'course assignment: private repo',
  },
  

]

const skills = [
  'Python',
  'Java',
  'Apache Spark',
  'C/C++',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Git',
  'JUnit',
  'MongoDB',
  'Firebase',
  'APIs',
  'Matlab'
]

const contact = {
  email: 'molly_mchenry@brown.edu',
}

export { header, about, projects, skills, contact }

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
      "Trek is a social media web application that revolutionizes how university students connect when venturing off campus. Users can share their travel plans, explore exciting destinations, and stay updated on their friends' adventures. " + 
      "This full-stack web application features a dynamic front-end crafted with TypeScript and React, complemented by a robust Java back-end that communicates with a Firebase database. These elements communicate through an internal API that leverages the Apache Spark framework. The backend also features Trek's personalized recommendation algorithm, which dynamically prioritizes friend posts based on user engagement patterns.",
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
      "Designed and implemented a custom OS kernel that features virtual memory architecture and a set of essential system calls. This specialized operating system leverages 3MB of dynamic virtual memory layered atop a 2MB physical memory framework.",
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
  'C/C++',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'React Native',
  'Git',
  'JUnit',
  'MongoDB',
  'Firebase',
  'APIs',
  'Matlab',
  'Apache Spark'
]

const contact = {
  email: 'molly_mchenry@brown.edu',
}

export { header, about, projects, skills, contact }

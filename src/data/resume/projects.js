const projects = [
  {
    company: 'Digital Dash',
    position: 'Network Performance Monitor',
    link: 'https://gitlab.com/gjkk/amazing-project',
    daterange: '',
    points: [
      "Designed a network performance management website that includes a network speed test and a downloadable bandwidth monitor that keeps track of users' data usage.",
      'Created a downloadable CLI bandwidth monitor application with integrated CRUD operations allowing users to locally track data usage on a session-by-session basis.',
    ],
  },
  {
    company: 'Car Management',
    position: 'Car Dealership Management Application',
    link: 'https://gitlab.com/GTech_/car-management',
    daterange: '',
    points: [
      'Developed a full-stack web application that enabled functions to include employee tracking, workflow management, and sales reporting, for a car dealership.',
      'Implemented the services microservice utilizing Django, REST API, and Docker; allowing clients to schedule appointments via forms; this process required the use of CRUD operations.',
      'Integrated a poller used to efficiently receive value objects from accompanying microservices.',
    ],
  },
  {
    company: 'Conference Go',
    position: 'Conference Aggregator',
    link: 'https://gitlab.com/GTech_/fearless-front-end-gs',
    daterange: '',
    points: [
      'Invented a full-stack web application using Django that enabled attendee management for various conferences in the United States.',
      'Employed multiple third-party APIs to retrieve images and track weather for the location of each conference.',
      'Implemented RabbitMQ pub/sub for effective communication with the backend.',
    ],
  },
];

export default projects;

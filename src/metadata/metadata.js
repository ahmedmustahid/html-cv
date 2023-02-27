module.exports = {
  name: 'Mustahid Ahmed',
  title: '',
  facts: {
    'Residence': 'Tokyo, Japan',
    'Nationality': 'Bangladesh',
    'Git Profile': `<a href="https://github.com/ahmedmustahid">
                  <span class="print">https://github.com/ahmedmustahid</span>
                  <span class="screen">Github</span>
                </a>`,
    'Email': '<a href="mailto:amustahid25@gmail.com">amustahid25@gmail.com</a>',
  },
  skills: [
    ['Python', '++++'],
    ['C++17', '++++'],
    ['C', '++++'],
    ['Dart/Flutter', '++++'],
    ['Swift', '+++'],
    ['Azure', '+++'],
    ['AWS', '++++'],
    ['Statistics', '++++'],
    ['Image Processing', '++++'],
    ['NLP', '+++'],
    ['Algorithms', '++++'],
    ['Data Structure', '++++'],
  ],

  experiences: [
     {
      title: 'Sensyn Robotics',
      written:'May 2022 - Present',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'HyperCube Ltd.',
      written:'April 2020 - May 2022',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'Self employed',
      written:'April 2020 - Present',
      header: 'Software Engineer'
    },
  ],
  projects0: [
    {
      title: 'Crack segmentation from tiles',
      written: 'Feb 2023 - Present',
      badges: ['Python', 'Pytorch', 'OpenCV', 'mmcv'],
      contents: `
      
      Implementing model for crack segmentation using novel transformer based segmentation architecture
      `
    },
    {
      title: 'Analog gauge reading by computer vision',
      written: 'November 2022 - Present',
      badges: ['Python', 'Pytorch', 'OpenCV','onnx', 'mmcv', 'Apache TVM'],
      contents: `
      
      Implemented and deployed model for analog gauge reading from web cam in Nvidia Jetson Nano
      `
    },
    {
      title: 'Extraction of information of documents using deep learning methods',
      written: 'August 2022 - October 2022',
      badges: ['Python', 'Pytorch', 'OpenCV', 'Tesseract OCR'],
      contents: `
      
      Extracting and organizing information from documents using deep learning
      `
    },
    {
      title: 'People detection from fish eye images',
      written: 'May 2022 - July 2022',
      badges: ['Python', 'Pytorch', 'OpenCV'],
      contents: `
      
      Because commonly used algorithms are not suitable for fish eye images, implemented new algorithm that can detect people in such images.
      `
    },
  ],

  projects1: [

    {
      title: 'NLP based Chatbot',
      written: 'June 2021 - October 2021',
      badges: ['AWS', 'Dart/flutter', 'Swift','Docker', 'Git'],
      contents: `

      Model deployment, system design and maintenance using AWS Amplify, AWS Api Gateway, AWS Lambda, AWS Sagemaker.
      Front and backend development using Flutter/Dart/Swift programming languages.
      `
    },
    {
      title: 'Database design and deployment',
      written: 'March 2021 – May 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `

      Designed MySQL database schema and deployed it in Azure. 
      Using web application API to connect web app with the database.
      `
    },
{
      title: 'Supply Chain Optimization',
      written: 'December 2020 - February 2021',
      badges: ['Python', 'C++', 'Git'],

      contents: `

      Research on optimization problems. 
      Using linear programming and integer programming methodologies in Gurobi Python and C++ for supply chain optimization.      `
    },
    {
      title: 'Video Anomaly Detection',
      written: 'May 2020 - November 2020 ',
      badges: ['Python', 'OpenCV', 'PyTorch', 'MySQL', 'Azure', 'Docker', 'Git'],
      contents: `

      Research on deep learning based activity detection algorithms.
      Constructing and deploying algorithm to detect anomalous events in video.
      Transferring the analysis data to Azure DB deployed in cloud.      `
    }
  ],
projects2: [
    {
      title: 'Memorize: A game for training memory',
      written: 'June 2021 - Present',
      badges: ['Swift', 'Git'],
      contents: `
    
      Designing front end and game logic in Swift programming language.
      `
    },
  ],
  additional_experience: [
    { 
      header: 'Masters Thesis：Machine Learning, Deep Learning, Data Analysis',
      skills: ['Python', 'OpenCV', 'PyTorch', 'C++', 'Git', 'CMake'],
      contents: `

      Simulation of particle collisions and their reaction in particle detectors using C++.
      Desiging particle detectors using C++ framework.
      Analyzing data read by particle detectors using machine learning and deep learning algorithms.
      `
    },

    { 
      header: 'Conference Presentation: Japan Physical Society Annual Meeting',
      contents: `
      Full Detector Simulation of Pair Monitor and Application of Machine Learning to Determine Determine Beam Size
      Nagoya University, Nagoya, Japan [March ’20]
      `
    },
    { 
      header: 'Conference Presentation：International Workshop on Future Linear Colliders',
      contents: `
      Search for weakly interacting dark matter in the International Linear Collider
      University of Texas, Arlington, Texas, USA. [Oct ’18]
      `
    },
  ],

  languages: [  
    {
      contents: `
      English, Business Level, TOEFL iBT 110
      Japanese: Business Level
      Bengali: Native Level
      `
    },
  ],

};

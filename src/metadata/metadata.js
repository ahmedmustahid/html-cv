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
    'Website': '<a href="https://ahmedmustahid.netlify.app/">ahmedmustahid.netlify.app</a>',
  },
  skills: [
    ['Python', '++++'],
    ['C++20', '++++'],
    ['C', '++++'],
    ['Dart/Flutter', '++++'],
    ['Swift', '+++'],
    ['Javscript', '+++'],
    ['AWS', '++++'],
    ['Statistics', '++++'],
    ['Image Processing', '++++'],
    ['NLP', '++++'],
    ['Algorithms', '++++'],
    ['Data Structure', '++++'],
  ],

  experiences: [
    {
      title: 'IBM System Engineering',
      written: 'March 2025 - Present',
      header: 'AI Engineer'
    },
    {
      title: 'Pioneer Electronics',
      written: 'July 2023 - Feb 2025',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'Sensyn Robotics',
      written: 'May 2022 - June 2023',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'HyperCube Ltd.',
      written: 'April 2020 - April 2022',
      header: 'Machine Learning Engineer'
    },
    {
      title: 'Batton Ltd.',
      written: 'Aug 2023 - Dec 2023',
      header: 'Machine Learning Engineer (Freelance)'
    },
    {
      title: 'AI Idea Lab Ltd.',
      written: 'April 2023 - Dec 2023',
      header: 'Machine Learning Engineer (Freelance)'
    },
    {
      title: 'Open Source Contributor',
      written: 'April 2020 - Present',
      header: 'Software Engineer',
    },
  ],

  projects3: [
    {
      title: 'Financial AI Multi-Agent System',
      written: 'April 2025 - Present',
      badges: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'OpenAI API', 'PostgreSQL', 'Pandas', 'Matplotlib', 'Docker'],
      contents: `Developed a sophisticated multi-agent AI system for financial data analysis and document processing using LangGraph orchestration framework. Built a scalable FastAPI backend integrating specialized AI agents for SQL query execution, PDF document retrieval, data visualization, and intelligent request routing. Implemented agentic capabilities with multilingual support (English/Japanese) for financial document analysis.

**Key Contributions:**

* Architected state-based agent workflow system using LangGraph for coordinated AI agent interactions
* Built RESTful API endpoints with session management and CORS support for web application integration
* Implemented automated financial data visualization and chart generation using Matplotlib
* Developed PDF processing pipeline for extracting and analyzing financial documents
* Set up comprehensive development environment with code quality tools (Black, Ruff, isort, Basedpyright)
`
    }
  ],

  projects3_1: [
    {
      title: 'PostgreSQL MCP Server: Dual Transport & Database Integration',
      written: 'January 2025',
      badges: ['Python', 'PostgreSQL', 'MCP Protocol', 'HTTP', 'Stdio', 'Docker', 'FastAPI'],
      github: 'https://github.com/ahmedmustahid/postgres-mcp-server/',
      contents: `Developed a production-ready PostgreSQL MCP (Model Context Protocol) server with dual transport support (HTTP and Stdio).


**Key Contributions**

* Architected a **dual-transport system** (HTTP & Stdio) and designed a **RESTful API** using **FastAPI**, complete with automatic **OpenAPI documentation**.
* Engineered a robust **PostgreSQL integration** featuring **connection pooling**, stateful **session management**, and secure, **parameterized queries** to prevent SQL injection.
* Developed a flexible **configuration system** using **environment variables** and **command-line arguments** to enhance deployment adaptability.
* Streamlined deployment by creating production-ready **Docker containers** and **Docker Compose** configurations.
* Implemented comprehensive **error handling**, graceful **shutdown logic**, and a full **testing suite** to ensure system reliability and stability.
`
    },
    {
      title: 'xiyan_mcp_server: Azure OpenAI, llama-cpp-python, & SQLite Integration',
      written: 'January 2025',
      badges: ['Python', 'Azure OpenAI', 'llama-cpp-python', 'SQLite', 'Streamable HTTP', 'MCP Protocol'],
      github: 'https://github.com/ahmedmustahid/xiyan_mcp_server',
      contents: `Contributed to xiyan mcp server project by implementing comprehensive Azure OpenAI integration and enhancing local model support through llama-cpp-python. Enabled Streamable HTTP transport protocol and integrated SQLite database support.

**Key contributions:**

- Implemented Azure OpenAI SDK integration with configurable model endpoints and API versions
- Added Streamable HTTP transport support with configurable host/port parameters 
- Enabled llama-cpp-python local model support for running models locally
- Integrated SQLite database backend with configurable dialect and database path
- Enhanced configuration system with comprehensive YAML-based setup
- Added comprehensive error handling and logging capabilities
- Created detailed documentation and usage examples for all new features
`
    },

    {
      title: 'Implemented mcp server for static error correction with basedpyright',
      written: 'May 2025 - Present',
      badges: ['Python', 'Streamable HTTP', 'MCP Protocol'],
      github: 'https://github.com/ahmedmustahid/quack-mcp-server',
      contents: `Contributed to quack-mcp-server project by adding BasedPyright static analysis support as an MCP tool alongside existing mypy integration. BasedPyright provides faster type checking with enhanced features compared to standard pyright.

**Key contributions:**

- Implemented automatic installation and configuration detection for basedpyright
- Added severity filtering and top-N limiting capabilities for diagnostic output
- Created comprehensive test suite with full coverage for edge cases and error handling
- Integrated with existing diagnostic filtering utilities for consistent output format
`
    },

  ],

  projects2: [
    {
      title: 'Implemented RAG pipeline with LLM for Qualcomm SoC',
      written: 'April 2024 - August 2024',
      badges: ['C++', 'Conan', 'git', 'faiss', 'llama.cpp'],
      contents: `Designed and implemented end to end RAG pipeline from scratch using **faiss** and **llama.cpp**.

- Created separate library for RAG after deriving llama and embeddings from llama.cpp
- Implemented build system using **Conan**
- Set up CI/CD using **GitHub Actions**
`
    },
    {
      title: 'Designed end to end middleware system for automotive radar',
      written: 'August 2023 - March 2024',
      badges: ['C++', 'CMake', 'git', 'CI/CD'],
      contents: `Implemented API that obtains sensor data streams and transfers them to machine learning module to deliver inference results back into an alarm system.

- Implemented **lock-free ring buffer system** that stopped data loss and enabled extremely fast inference
- Employed comprehensive unit tests and CI/CD pipeline
- Delivered real-time inference results to alarm system
`
    },
  ],

  projects1: [
    {
      title: 'Crack segmentation from tiles',
      written: 'Feb 2023 - April 2023',
      badges: ['Python', 'Pytorch', 'OpenCV', 'mmcv'],
      contents: `Implemented model for crack segmentation using novel **transformer-based segmentation architecture** inspired from retinal vessel segmentation in medical literature.

- Implemented **continual learning system** based on labelling→training cycle
- Achieved **high precision of 0.9** and **recall of 0.8**
- Applied cutting-edge medical imaging techniques to civil engineering problems
`
    },
    {
      title: 'Analog gauge reading by computer vision',
      written: 'November 2022 - April 2023',
      badges: ['Python', 'Pytorch', 'OpenCV', 'onnx', 'mmcv', 'Apache TVM', 'ncnn'],
      contents: `Constructed model for accurately reading analog gauges by determining dial position, minimum and maximum values from the scale face after applying perspective transformation.

- Minimized expected error rate to **0.15%**
- Compressed model size through **quantization in C++ using TVM**
- Successfully deployed to edge device (**NVIDIA Jetson Nano**)
- Applied advanced computer vision techniques for precise measurement
`
    },
    // {
    //   title: 'Extraction of information from hand written documents using deep learning methods',
    //   written: 'August 2022 - October 2022',
    //   badges: ['Python', 'Pytorch', 'OpenCV', 'Tesseract OCR'],
    //   contents: `

    //   Extracting data from tables, paragraphs, drawings etc in images of handwritten documents and serializing them into respective formats by 
    //   means of a Bert based model
    //   `
    // },
    {
      title: 'People detection from fish eye images',
      written: 'May 2022 - July 2022',
      badges: ['Python', 'Pytorch', 'OpenCV', 'AWS'],
      contents: `Developed new algorithm for people detection in fisheye images, as commonly used algorithms are not suitable for such distorted perspectives.

- Incorporated **angular values of slanted bounding boxes** for improved detection accuracy
- Implemented end-to-end pipeline from **labelling to cloud storage** using **CoCo Annotator** and **AWS S3**
- Achieved **high mAP score** comparable to state-of-the-art YOLO algorithms
- Solved unique challenges posed by fisheye lens distortion
`
    },
  ],

  projects0: [

    {
      title: 'NLP based Chatbot',
      written: 'June 2021 - October 2021',
      badges: ['AWS', 'Dart/flutter', 'Swift', 'Docker', 'Git'],
      github: 'https://github.com/ahmedmustahid/flutterMessageApp',
      contents: `Full stack Development: Frontend and backend development using Flutter/Dart/Swift. Model deployment, system design and maintenance using AWS services:

- AWS Amplify for frontend hosting
- AWS API Gateway for API management
- AWS Lambda for serverless functions
- AWS SageMaker for ML model deployment
- Frontend and backend development using Flutter/Dart/Swift`
    },
    {
      title: 'Database design and deployment',
      written: 'March 2021 – May 2021',
      badges: ['MySQL', 'Azure', 'Python', 'Git'],
      contents: `Designed MySQL database schema and deployed it in Azure.

- Created comprehensive database schema design
- Deployed database on Azure cloud platform
- Developed web application API for database connectivity
- Implemented secure data access patterns`
    },
    // {
    //      title: 'Supply Chain Optimization',
    //      written: 'December 2020 - February 2021',
    //      badges: ['Python', 'C++', 'Git'],

    //      contents: `

    //      Research on optimization problems. 
    //      Using linear programming and integer programming methodologies in Gurobi Python and C++ for supply chain optimization.       `
    //     },
    // {
    //   title: 'Video Anomaly Detection',
    //   written: 'May 2020 - November 2020 ',
    //   badges: ['Python', 'OpenCV', 'PyTorch', 'MySQL', 'Azure', 'Docker', 'Git'],
    //   contents: `

    //   Research on deep learning based activity detection algorithms.
    //   Constructing and deploying algorithm to detect anomalous events in video.
    //   Transferring the analysis data to Azure DB deployed in cloud.       `
    // }
  ],
  projects01: [
    {
      title: 'Designed novel algorithm for OCR of Japanese fax documents',
      written: 'Aug 2023 - Dec 2023',
      badges: ['Python', 'Pytorch', 'torchserve', 'OCR', 'Docker', 'GCP'],
      contents: `Collected and labelled dataset of fax documents containing tables. Implemented novel algorithm to extract its data and obtained 97% accuracy.

- Collected and labeled dataset of fax documents with tables
- Developed novel OCR algorithm for table data extraction
- Achieved 97% accuracy on test dataset
- Dockerized the ML model for deployment
- Created HTTP endpoint using TorchServe
- Deployed to GCP Artifact Registry
- Created inference endpoint through Vertex AI`
    },
  ],
  projects02: [
    {
      title: 'Japanese kanji generation from a specific font',
      written: 'April 2023 - Sep 2023',
      badges: ['Python', 'Image Generation', 'FastApi', 'Gradio'],
      contents: `Used controlnet and prompt engineering to create Kanjis from novel fonts.

- Applied ControlNet for Japanese kanji generation
- Used prompt engineering for font-specific character creation
- Built interactive frontend using Gradio
- Developed FastAPI backend endpoints
- Integrated Gradio frontend with FastAPI backend`
    },

    {
      title: 'GPT based AI Callerbot',
      written: 'Oct 2023 - Dec 2023',
      badges: ['Python', 'Node.js', 'WebRTC'],
      contents: `Converting caller's speech into text and using prompt engineering to obtain the best output from Open AI API.

- Convert caller's speech to text using speech recognition
- Apply prompt engineering for optimal OpenAI API responses
- Convert API responses back to voice using text-to-speech
- Create WebRTC bridge between Python and Node.js
- System currently being deployed in company application`
    },
  ],

  projects00: [
    {
      title: 'Memorize: A game for training memory',
      written: 'June 2021 - Sep 2021',
      badges: ['Swift', 'Git', 'CI/CD'],
      github: 'https://github.com/ahmedmustahid/Memorize',
      contents: `Designed memory training game with engaging user interface.

- Designed frontend using Swift programming language
- Implemented game logic for memory training mechanics
- Created intuitive user experience for cognitive exercises`
    },

    {
      title: 'amusta-chain: A distributed peer to peer blockchain',
      written: 'June 2021 - Sep 2021',
      badges: ['javascript', 'Express', 'Node.js', 'Git', 'CI/CD'],
      github: 'https://github.com/ahmedmustahid/amusta-chain',
      contents: `Developed distributed peer-to-peer blockchain system with comprehensive testing.

- Employed end-to-end Test-Driven Development (TDD)
- Implemented peer-to-peer mining functionality
- Created secure currency transfer system to user wallets
- Developed transaction validation by miners
- Built distributed consensus mechanism`

    }
  ],
  additional_experience: [
    {
      header: 'Masters Thesis：Machine Learning, Deep Learning, Data Analysis',
      skills: ['Python', 'OpenCV', 'PyTorch', 'C++', 'Git', 'CMake'],
      contents: `Simulation of particle collisions and their reaction in particle detectors using C++.

- Simulated particle collisions and detector reactions using C++
- Designed particle detectors using C++ framework
- Analyzed detector data using machine learning and deep learning algorithms
- Applied advanced statistical methods for particle physics research`
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

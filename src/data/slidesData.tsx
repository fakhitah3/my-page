export interface Slide {
  id: number;
  title: string;
  description: string;
  date: string;
  topics: string[];
  link: string;
  type: 'google-slides' | 'pdf' | 'powerpoint';
}

// Mock data for slides
export const slides: Slide[] = [
    {
      id: 5,
      title: "Data Science Principle",
      description: "Fundamental principles and concepts of data science, covering the theoretical foundations and core methodologies used in data-driven decision making.",
      date: "2024-01-20",
      topics: ["Data Science"],
      link: "https://www.canva.com/design/DAGSxsHnneQ/FrQAux-9koCJCg5cS30l2w/view?utm_content=DAGSxsHnneQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 6,
      title: "Data Science Process",
      description: "Comprehensive guide through the data science process workflow, from problem definition and data collection to analysis, modeling, and interpretation of results.",
      date: "2024-01-18",
      topics: ["Data Science"],
      link: "https://www.canva.com/design/DAGSxjE6wyE/MtG7RIgUCXqpON9nyZemxA/view?utm_content=DAGSxjE6wyE&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 13,
      title: "Data Visualization",
      description: "Advanced techniques for creating compelling data visualizations and using visual elements to communicate insights effectively in data science projects.",
      date: "2024-01-16",
      topics: ["Data Science", "Visualization"],
      link: "https://www.canva.com/design/DAGSy4IkHCw/cEvLRf_SPSMO4DqVLyWgWQ/view?utm_content=DAGSy4IkHCw&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 14,
      title: "Basic Statistics in Data Science",
      description: "Essential statistical concepts and methods used in data science, including descriptive statistics, probability distributions, and statistical inference.",
      date: "2024-01-14",
      topics: ["Data Science", "Statistics"],
      link: "https://www.canva.com/design/DAGSxgwNWzA/Kfpem241vfgBOG2nRTB_XQ/view?utm_content=DAGSxgwNWzA&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 15,
      title: "Data Preprocessing",
      description: "Comprehensive guide to data cleaning, transformation, and preparation techniques essential for successful data science projects.",
      date: "2024-01-12",
      topics: ["Data Science", "Data Cleaning", "Preprocessing"],
      link: "https://www.canva.com/design/DAGSxjPD_BE/yhH9-BeMU5wEm1yTwuFHqA/view?utm_content=DAGSxjPD_BE&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 16,
      title: "Model Evaluation and Comparison",
      description: "Methods and metrics for evaluating machine learning models, comparing performance, and selecting the best model for your data science problem.",
      date: "2024-01-10",
      topics: ["Data Science", "Machine Learning", "Model Evaluation"],
      link: "https://www.canva.com/design/DAGSxn4HWQs/WHgGjOKadAJbce6PPb_HQA/view?utm_content=DAGSxn4HWQs&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 17,
      title: "Regression",
      description: "Comprehensive coverage of regression analysis techniques, including linear regression, polynomial regression, and advanced regression methods.",
      date: "2024-01-08",
      topics: ["Data Science", "Machine Learning", "Regression"],
      link: "https://www.canva.com/design/DAGYwH5nCoY/5G9EJEMCU4epiMHS_-OfGA/view?utm_content=DAGYwH5nCoY&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 18,
      title: "Classification",
      description: "Machine learning classification algorithms and techniques, including decision trees, naive Bayes, SVM, and ensemble methods.",
      date: "2024-01-06",
      topics: ["Data Science", "Machine Learning", "Classification"],
      link: "https://www.canva.com/design/DAGYY-1HxCA/VtfBSBmUTeV5BBcf6CZBbw/view?utm_content=DAGYY-1HxCA&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 19,
      title: "Probability",
      description: "Fundamental probability concepts essential for data science, including conditional probability, Bayes theorem, and probabilistic reasoning.",
      date: "2024-01-04",
      topics: ["Data Science", "Statistics", "Bayes Theorem"],
      link: "https://www.canva.com/design/DAGWOC1R_bQ/Tq0ZPgKoJNp_WuUGspQiQg/view?utm_content=DAGWOC1R_bQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 20,
      title: "Clustering",
      description: "Unsupervised learning techniques for clustering analysis, including K-means, hierarchical clustering, and density-based clustering methods.",
      date: "2024-01-02",
      topics: ["Data Science", "Machine Learning", "Clustering", "Unsupervised Learning"],
      link: "https://www.canva.com/design/DAGYY_CxenI/l_hwV29v5opO61_7lURWag/view?utm_content=DAGYY_CxenI&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 21,
      title: "Association Analysis",
      description: "Market basket analysis and association rule mining techniques for discovering relationships and patterns in large datasets.",
      date: "2023-12-30",
      topics: ["Data Science", "Association Rules", "Unsupervised Learning"],
      link: "https://www.canva.com/design/DAGcPcGnG0w/JsFvN6i6gsF_-M3_TxwI5Q/view?utm_content=DAGcPcGnG0w&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    },
    {
      id: 22,
      title: "Ethics in Data Science",
      description: "Critical examination of ethical considerations in data science, including privacy, bias, fairness, and responsible AI practices.",
      date: "2023-12-28",
      topics: ["Data Science", "Ethics"],
      link: "https://www.canva.com/design/DAGcPSEd-1k/1zJasCo4MSQcAWuE0RwySQ/view?utm_content=DAGcPSEd-1k&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      type: "google-slides"
    }, 
    {
  id: 23,
  title: "MIT Inventor Apps",
  description: "Hands-on MIT App Inventor module and examples focusing on app creation, basic block programming, and rapid prototyping for learners — placed under the Innovation topic.",
  date: "2024-01-20",
  topics: ["Innovation"],
  link: "https://www.canva.com/design/DAGFKQou-mo/yOyxHH3hbVs2GqYQ0pKsHw/view?embed",
  type: "canva-embed"
},
{
  id: 24,
  title: "Tinkercad - 3D Design",
  description: "A beginner-friendly 3D design and modelling module using Tinkercad — activities for prototyping, basic CAD concepts, and preparing designs for 3D printing. Placed under the Innovation topic.",
  date: "2024-01-20",
  topics: ["Innovation"],
  link: "https://www.canva.com/design/DAGp0p2vSxw/0L2xJ7-nzDeU4yubCQbG7g/view?embed",
  type: "canva-embed"
  }, 
    {
  id: 25,
  title: "Genetic Algorithm",
  description: "Introduction to Genetic Algorithms, their structure, operators, and application to optimization problems under the Computer Evolution topic.",
  date: "2024-01-20",
  topics: ["Computer Evolution"],
  link: "https://www.canva.com/design/DAGPNfp5X2M/HrIr3VRBXuQHSeIAZvr3CQ/view?embed",
  type: "canva-embed"
},

{
  id: 26,
  title: "What is Evolutionary Algorithms",
  description: "Foundational concepts of Evolutionary Algorithms (EAs), including their biological inspiration, core mechanisms, and role in computational intelligence.",
  date: "2024-01-20",
  topics: ["Computer Evolution"],
  link: "https://www.canva.com/design/DAGPNj2jHKQ/_-DHjsycXYn_JqD1VNhvEQ/view?embed",
  type: "canva-embed"
},

{
  id: 27,
  title: "How to Work with EAs",
  description: "Practical guide to implementing and tuning Evolutionary Algorithms, including selection, crossover, mutation, and performance evaluation.",
  date: "2024-01-20",
  topics: ["Computer Evolution"],
  link: "https://www.canva.com/design/DAGZ-DHvxkw/QAr9hwrkJy1Ql6MksrDt2A/view?embed",
  type: "canva-embed"
},

{
  id: 28,
  title: "Genetic Programming",
  description: "Introduction to Genetic Programming, a form of evolutionary algorithm that evolves computer programs to solve problems automatically.",
  date: "2024-01-20",
  topics: ["Computer Evolution"],
  link: "https://www.canva.com/design/DAGYqKilygQ/8PQ9k0YdyWLHeeYakuUeHw/view?embed",
  type: "canva-embed"
},

{
  id: 29,
  title: "Genetic Algorithm (Part 2)",
  description: "Further exploration of Genetic Algorithms, including advanced operators, convergence, and real-world case studies under Computer Evolution.",
  date: "2024-01-20",
  topics: ["Computer Evolution"],
  link: "https://www.canva.com/design/DAGPNcscP5A/m_HAZcwiqHttJhUXUCbPzA/view?embed",
  type: "canva-embed"
}

  ];


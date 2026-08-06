// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "My work across autonomous research agents, AI for biology, and healthcare machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of research tools, creative AI experiments, and developer utilities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, publications, research, and industry experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-plasma-fast-and-interpretable-protein-substructure-alignment-via-optimal-transport",
        
          title: "PLASMA: Fast and Interpretable Protein Substructure Alignment via Optimal Transport",
        
        description: "A deep dive into PLASMA, a plug-and-play module that reframes protein substructure alignment as an optimal transport problem, achieving both speed and interpretability.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/plasma-protein-substructure-alignment/";
          
        },
      },{id: "post-topotein-why-proteins-need-topological-deep-learning",
        
          title: "Topotein: Why Proteins Need Topological Deep Learning",
        
        description: "Introducing Topotein, a framework that brings topological deep learning to protein representation learning through the Protein Combinatorial Complex and TCPNet.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/topotein-topological-deep-learning-proteins/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-graphau-pain-paper-has-been-accepted-for-presentation-at-the-miga-workshop-at-ijcai25-looking-forward-to-seeing-everyone-in-guangzhou-china-on-august-28th",
          title: 'Our GraphAU-Pain paper has been accepted for presentation at the MiGA workshop at...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-announce-that-i-have-been-awarded-a-350-churchill-college-postgraduate-academic-travel-fund-pat0062-to-attend-ijcai25-and-present-my-graphau-pain-paper",
          title: 'I am delighted to announce that I have been awarded a £350 Churchill...',
          description: "",
          section: "News",},{id: "news-our-plasma-paper-on-protein-local-alignment-via-optimal-transport-has-been-accepted-at-iclr-2026",
          title: 'Our PLASMA paper on protein local alignment via optimal transport has been accepted...',
          description: "",
          section: "News",},{id: "news-i-am-presenting-praxit-at-ai4-2026-in-las-vegas-come-see-us-at-our-booth",
          title: 'I am presenting Praxit at AI4 2026 in Las Vegas—come see us at...',
          description: "",
          section: "News",},{id: "projects-claude-feishu-calendar",
          title: 'Claude Feishu Calendar',
          description: "A Claude Code plugin for managing Feishu/Lark calendar events — create, update, and query meetings from your terminal.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/claude_feishu_calendar/";
            },},{id: "projects-daily-ai-research-trends",
          title: 'Daily AI Research Trends',
          description: "Automated pipeline that scrapes HuggingFace and arXiv, analyzes papers with Claude, and presents trends via a Next.js dashboard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/daily_ai_research_trends/";
            },},{id: "projects-learn-linear-attentions",
          title: 'Learn Linear Attentions',
          description: "An interactive guide to modern linear attention mechanisms — S4, Mamba-1/2, and DeltaNet — with visualizations and step-by-step derivations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/learn_linear_attentions/";
            },},{id: "projects-signal-lost",
          title: 'Signal Lost',
          description: "A cyberpunk narrative RPG powered by AI agents, featuring branching storylines with 12+ endings and a web-based GUI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/signal_lost/";
            },},{id: "projects-the-sundering-of-aethermoor",
          title: 'The Sundering of Aethermoor',
          description: "A dark fantasy RPG with a terminal UI and AI agent integration for dynamic narrative and world-building.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/the_sundering_of_aethermoor/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%79%75_%77%61%6E%67_%77%6F%72%6B@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wzy-zhiyu-wang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhiyu-wang-243335252", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-8938-3663", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gRGHW9wAAAAJ", "_blank");
        },
      },];

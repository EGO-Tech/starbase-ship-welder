import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/starbase-ship-welder/blog',
    component: ComponentCreator('/starbase-ship-welder/blog', 'b2d'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/archive',
    component: ComponentCreator('/starbase-ship-welder/blog/archive', '8fc'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/first-blog-post',
    component: ComponentCreator('/starbase-ship-welder/blog/first-blog-post', '996'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/long-blog-post',
    component: ComponentCreator('/starbase-ship-welder/blog/long-blog-post', '8e8'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/mdx-blog-post',
    component: ComponentCreator('/starbase-ship-welder/blog/mdx-blog-post', 'e88'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/tags',
    component: ComponentCreator('/starbase-ship-welder/blog/tags', 'e11'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/tags/docusaurus',
    component: ComponentCreator('/starbase-ship-welder/blog/tags/docusaurus', 'c18'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/tags/facebook',
    component: ComponentCreator('/starbase-ship-welder/blog/tags/facebook', '6eb'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/tags/hello',
    component: ComponentCreator('/starbase-ship-welder/blog/tags/hello', '28b'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/tags/hola',
    component: ComponentCreator('/starbase-ship-welder/blog/tags/hola', '9ad'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/blog/welcome',
    component: ComponentCreator('/starbase-ship-welder/blog/welcome', '83a'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/markdown-page',
    component: ComponentCreator('/starbase-ship-welder/markdown-page', '4eb'),
    exact: true
  },
  {
    path: '/starbase-ship-welder/docs',
    component: ComponentCreator('/starbase-ship-welder/docs', 'cf3'),
    routes: [
      {
        path: '/starbase-ship-welder/docs/category/tutorial---basics',
        component: ComponentCreator('/starbase-ship-welder/docs/category/tutorial---basics', '0c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/category/tutorial---extras',
        component: ComponentCreator('/starbase-ship-welder/docs/category/tutorial---extras', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/intro',
        component: ComponentCreator('/starbase-ship-welder/docs/intro', '087'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/congratulations', '71a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/create-a-blog-post', '9c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/create-a-document', 'c3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/create-a-page', '564'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/deploy-your-site', '366'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-basics/markdown-features', '870'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-extras/manage-docs-versions', '51d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/starbase-ship-welder/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/starbase-ship-welder/docs/tutorial-extras/translate-your-site', '458'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/starbase-ship-welder/',
    component: ComponentCreator('/starbase-ship-welder/', 'c19'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

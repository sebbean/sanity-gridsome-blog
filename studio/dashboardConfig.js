export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc1ab79fa68b1363a05ff8f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4t2pyj4g',
                  apiId: '27b507ce-0d4c-4ba6-8be3-18c0395a6f06'
                },
                {
                  buildHookId: '5dc1ab7825530864dddb5be8',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-16n9zmrf',
                  apiId: 'edfc73ec-e8d2-4a78-8403-c19d431f8aed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sebbean/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-16n9zmrf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

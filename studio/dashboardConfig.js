export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '621538c811ed6b0092e53750',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-87oozbah',
                  apiId: '4caba141-1528-4646-b86e-275734ea418d'
                },
                {
                  buildHookId: '621538c866908300b822846b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xmzs2jtr',
                  apiId: 'ed139e44-60eb-45a1-ba33-55388bb3d6df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dixon-kun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xmzs2jtr.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

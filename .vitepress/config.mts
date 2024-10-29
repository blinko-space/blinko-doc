import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blinko",
  description: "Blinko is an innovative open-source project designed for individuals who want to quickly capture and organize their fleeting thoughts.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Blinko?', link: '/intro' },
        ]
      },
      {
        text: 'Intallation',
        items: [
          { text: 'Docker Install', link: '/install/docker-install' },
          // { text: 'Database', link: '/install/database.md' },
          { text: 'Runtime Options', link: '/install/env.md' },
        ]
      },
      {
        text: 'How to use',
        items: [
          { text: 'Blinko', link: '/get-start/blinko.md' },
          { text: 'Note', link: '/get-start/note.md' },
          { text: 'Tags', link: '/get-start/tags.md' },
          { text: 'Daily Review', link: '/get-start/daily-review.md' },
          { text: 'Resources', link: '/get-start/resources.md' },
          { text: 'AI', link: '/get-start/ai.md' },
          { text: 'Speech To Text', link: '/get-start/speech-to-text.md' },
        ]
      },
      {
        text: 'Advanced Settings',
        items: [
          { text: 'Schedule Backup', link: '/advance-settings/schedule-backup.md' },
          { text: 'Schedule Archive', link: '/advance-settings/schedule-archive.md' },
          { text: 'AI', link: '/advance-settings/ai.md' }
        ]
      },
      // {
      //   text: 'Security',
      //   items: [
      //     { text: 'Access Tokens', link: '' },
      //   ]
      // },
      // {
      //   text: 'Contribution',
      //   items: [
      //     { text: 'Development', link: '' },
      //     { text: 'Documentation', link: '' },
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: 'Copyright © 20204-present Blinko',
      message: 'Released under the MIT License.',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '69Y3N7LHI2',
        apiKey: '45441f4b65a2f80329fd45c7cb371fea',
        indexName: 'pinia'
      },
    },

    editLink: {
      pattern: 'https://github.com/vuejs/pinia/edit/v2/packages/docs/:path',
      text: 'Suggest changes',
    },
  },
})

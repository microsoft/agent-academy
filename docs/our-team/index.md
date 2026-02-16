<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/aprildunnam.png',
    name: 'April Dunnam',
    title: 'Principal Cloud Advocate',
    links: [
      { icon: 'github', link: 'https://github.com/aprildunnam' },
      { icon: 'twitter', link: 'https://twitter.com/aprildunnam' }
    ]
  },
  {
    avatar: 'https://www.github.com/elaizabenitez.png',
    name: 'Elaiza Benitez',
    title: 'Senior Cloud Advocate',
    links: [
      { icon: 'github', link: 'https://github.com/elaizabenitez' },
      { icon: 'twitter', link: 'https://twitter.com/benitezhere' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/elaiza-benitez' }
    ]
  },
  {
    avatar: 'https://www.github.com/laskewitz.png',
    name: 'Daniel Laskewitz',
    title: 'Principal Cloud Advocate',
    links: [
      { icon: 'github', link: 'https://github.com/laskewitz' },
      { icon: 'twitter', link: 'https://twitter.com/laskewitz' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/laskewitz' }
    ]
  },
  {
    avatar: 'https://www.github.com/scottdurow.png',
    name: 'Scott Durow',
    title: 'Senior Cloud Advocate',
    links: [
      { icon: 'github', link: 'https://github.com/scottdurow' },
      { icon: 'twitter', link: 'https://twitter.com/scottdurow' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/scottdurow' }
    ]
  }
]
</script>

# Our Team

Say hello to the team behind Agent Academy! 👋

<VPTeamMembers size="small" :members />

import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Press Release Intelligence',
  },
  footer: {
    tagline: 'Publish smarter. Reach wider.',
  },
  hero: {
    badge: 'Media wire',
    title: ['The News Starts Here'],
    description:
      'Publish company announcements, product updates, leadership changes, and media stories with a clean editorial experience.',
    primaryCta: {
      label: 'Explore Latest News',
      href: '/updates',
    },
    secondaryCta: {
      label: 'View Pricing',
      href: '/pricing',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Trending',
    featureCardBadge: 'press note',
    featureCardTitle: 'Verified updates from brands and teams.',
    featureCardDescription:
      'The homepage keeps breaking releases and recent updates discoverable without cluttering the reading experience.',
  },
  home: {
    metadata: {
      title: 'Latest press releases and newsroom updates',
      description:
        'Discover recent press releases, company announcements, and media updates on ViroBuzz.com.',
      openGraphTitle: 'Latest press releases and newsroom updates',
      openGraphDescription:
        'A modern media publishing experience for announcements, updates, and newsroom stories.',
      keywords: ['press release', 'newsroom', 'company announcements', 'media updates', 'virobuzz'],
    },
    introBadge: 'About ViroBuzz',
    introTitle: 'A modern press-release destination for teams that need visibility.',
    introParagraphs: [
      'ViroBuzz.com helps companies and agencies distribute verified updates in a format built for readers, journalists, and search engines.',
      'From headlines to full story pages, every surface is designed for fast scanning and high trust.',
      'The platform keeps publishing simple while giving your stories stronger structure and discoverability.',
    ],
    sideBadge: 'What you get',
    sidePoints: [
      'Structured press release listing with filters.',
      'Clean article pages with featured media and sharing.',
      'Flexible pricing plans for distribution needs.',
      'Brand-ready publishing style with modern UI.',
    ],
    primaryLink: {
      label: 'Open Newsroom',
      href: '/updates',
    },
    secondaryLink: {
      label: 'See Plans',
      href: '/pricing',
    },
  },
  cta: {
    badge: 'Ready to publish',
    title: 'Share your next press release with confidence.',
    description:
      'Use ViroBuzz.com to publish announcements quickly and keep your newsroom discoverable across devices.',
    primaryCta: {
      label: 'Start Publishing',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Browse Newsroom',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest releases',
  taskSectionDescriptionSuffix: 'Explore the newest published stories.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest news',
    description: 'Read press releases, announcements, and media updates.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest news',
    paragraphs: [
      'This newsroom archive is built for press release discovery with fast scanning and clear metadata.',
      'Use category and date filters to narrow stories, then open full articles for complete details and media.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

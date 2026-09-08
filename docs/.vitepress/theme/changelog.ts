export interface ChangelogImage {
  src: string
  alt: string
  caption?: string
}

export type ChangelogItem = string | { text: string, href: string }

export interface ChangelogSection {
  title: string
  href?: string
  items: ChangelogItem[]
  images?: ChangelogImage[]
}

export interface ChangelogLinks {
  discordPost?: string
  betaAnnouncement?: string
}

export interface ChangelogRelease {
  version: string
  date: string
  title: string
  highlights?: ChangelogItem[]
  sections?: ChangelogSection[]
  images?: ChangelogImage[]
  links?: ChangelogLinks
  more?: string[]
}

export const releases: ChangelogRelease[] = [
  {
    version: '0.2.10', date: '5 September 2026', title: 'Various fixes & enhancements',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1545765162739441674',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1545765423851503697'
    },
    sections: [
      {
        title: 'Editor',
        items: [
          'Tab after an archived row no longer makes the row disappear',
          'splitting a bullet that holds several lines no longer leaves an empty line behind',
          'cmd-a inside a mirror now selects all the way up',
          'Korean and Japanese typing: Enter now finishes the character and creates the new row in one go',
          'applying bold and then italic now keeps the bold formatting',
          'the `Mirrored in` list now starts with the original note and leaves out the row you’re on',
          'Backspace and Tab in a grouped or sorted section follow the visible row above'
        ]
      },
      {
        title: 'Sections',
        href: '/guides/sections',
        items: [
          'pasting on a page with sections puts the rows in the visible section, never a hidden one',
          'copying and pasting a note with sections keeps its bullets in their sections',
          'you can now rename sections you created directly on the page. Sections supplied by a tag are still renamed on the tag’s page',
          'add sections to daily notes; cmd-k > Add to… can also land in a daily note’s section',
          'no more stray empty lines when a row moves between groups in a grouped section'
        ],
        images: [
          {
            src: '/images/changelog/0.2.10/sections-in-daily.webp',
            alt: 'A daily note with Today’s stuff and Nested sections beneath Today’s tasks',
            caption: 'Daily notes can now have their own sections.'
          }
        ]
      },
      {
        title: 'Interface',
        href: '/guides/interface',
        items: [
          'pinned notes always show their name in the sidebar',
          'the typed code-block examples in Settings are easier to read',
          'children views now say when more options are available while zoomed in'
        ]
      },
      {
        title: 'Search',
        href: '/guides/search',
        items: [
          'a saved search inside another search’s results can now be unfolded one level deep'
        ],
        images: [
          {
            src: '/images/changelog/0.2.10/expand-search-in-search.webp',
            alt: 'A Reading search with the Unread books saved search unfolded inside its results',
            caption: 'Unfold a saved search inside another search’s results.'
          }
        ]
      }
    ]
  },
  {
    version: '0.2.9', date: '3 September 2026', title: 'Sections',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1545142886339711116',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1545143015767674972'
    },
    sections: [
      {
        title: 'Sections',
        href: '/guides/sections',
        items: [
          'sections just got a whole lotta love',
          'add sections to any note, including prose documents—no tag required',
          'split a note’s own bullets into named sections such as Notes, References, and Ideas',
          'type straight into a section with the full editor; new entries automatically pick up the section’s tags and fields',
          'fold, sort, group, and filter any section. Each section remembers its arrangement',
          'a note wearing several tags now shows sections from all of them',
          'a section can be powered by any saved search',
          'flip a page’s sections into side-by-side columns'
        ],
        images: [
          {
            src: '/images/changelog/0.2.9/sections-1.webp',
            alt: 'An Acme note organized into Board minutes, Agenda, Employees, and Press sections',
            caption: 'Divide any note into focused, named sections.'
          },
          {
            src: '/images/changelog/0.2.9/sections-2.webp',
            alt: 'An Employees section with controls to sort, group, and filter its entries',
            caption: 'Give each section its own sort, group, and filter arrangement.'
          },
          {
            src: '/images/changelog/0.2.9/sections-3.webp',
            alt: 'A Sleep and memory note showing Findings, Sources, and Log sections in side-by-side columns',
            caption: 'Switch a page to columns to see sections side by side.'
          }
        ]
      }
    ]
  },
  {
    version: '0.2.8', date: '2 September 2026', title: 'Merge and aliases',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1544703954234118176',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1544704096903106641'
    },
    sections: [
      {
        title: 'Merge',
        href: '/guides/notes#merge-tags-and-fields',
        items: [
          'you can now merge tags and fields',
          'no pre-staging is required: visit any tag or field and choose “Merge other tags [fields] into this one” or “Merge this tag [field] into…”',
          'the merge dialog describes everything that will be updated'
        ],
        images: [
          {
            src: '/images/changelog/0.2.8/tag-merge-1.png',
            alt: 'The Merge tags dialog comparing the film and movie tags, their fields, and everything the merge will update',
            caption: 'Review every affected note, field, and link before merging tags.'
          }
        ]
      },
      {
        title: 'Aliases',
        href: '/guides/notes#aliases',
        items: [
          'you can now refer to any node by other names',
          'aliases work in search, cmd-p, and the link pickers',
          'any single link can also show its own words'
        ],
        images: [
          {
            src: '/images/changelog/0.2.8/alias-1.webp',
            alt: 'A link to Casa Miranda Guesthouse being created with the custom words the little place in Galicia',
            caption: 'Give an individual link its own words as you create it.'
          },
          {
            src: '/images/changelog/0.2.8/alias-2.webp',
            alt: 'The Casa Miranda Guesthouse info panel listing The Guesthouse and Casa Miranda as aliases',
            caption: 'Add and manage aliases in the note’s info panel.'
          },
          {
            src: '/images/changelog/0.2.8/alias-3.webp',
            alt: 'The link picker finding Casa Miranda Guesthouse by its alias The Guesthouse',
            caption: 'Find notes by their real names or any alias.'
          }
        ]
      }
    ]
  },
  {
    version: '0.2.7', date: '1 September 2026', title: 'Yet even more import improvements, plus a few other tweaks',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1544311721370329209',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1544311904670064812'
    },
    sections: [
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'import now processes YAML frontmatter in Markdown files'
        ]
      },
      {
        title: 'Editor',
        items: [
          'performance: after a large import, typing `[[` could show a delay before displaying candidate links. The same could happen when selecting a note under cmd-k > Move under. Both are now fixed',
          'checkboxes in prose documents are now supported',
          'pasting Markdown checkboxes into the outliner now works'
        ]
      }
    ]
  },
  {
    version: '0.2.6', date: '31 August 2026', title: 'And even more JSON import improvements 😁',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1544029986631975122',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1544030074200662096'
    },
    sections: [
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'attachments: you now have the option to leave files on their remote server or copy them into Vellum (the default). If you choose to copy files into Vellum, downloads now occur in the background, so you can start using your notes right away. Any failed downloads automatically retry when Vellum starts, and you can manually retry them at any time',
          'performance: after importing a JSON file with thousands of note-to-note links, typing could lag. This is now fixed',
          'heads up: v0.2.6 updates your vault’s storage format, so there’s no going back to an older release after you update'
        ]
      }
    ]
  },
  {
    version: '0.2.5', date: '31 August 2026', title: 'More JSON import improvements',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543776211686129685',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543776321505722459'
    },
    sections: [
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'fixed: a tag still in use could be skipped if the JSON trash objects also pointed at that same tag schema',
          'enhanced the pre-import report with more details: each missing tag now says how many notes it covers, and tags sitting in the JSON trash are noted',
          'fixed: dates written into the JSON by externally connected tools used a format Vellum didn’t recognize. This is now addressed'
        ]
      }
    ]
  },
  {
    version: '0.2.4', date: '30 August 2026', title: 'JSON import enhancements',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543632043064164413',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543632158038429706'
    },
    sections: [
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'fixed: handle cases where one or more notes carry the same date or number field twice (for example, the same Rating number field listed twice on one note)',
          'fixed: handle cases where one or more notes wear tags that contain the same field name (for example, two different tags, each with a Due date field, assigned to the same note)',
          'enhanced error capture: rather than aborting the JSON read on the first error, Vellum now continues reading the entire JSON and captures a full list of data errors for reporting'
        ]
      }
    ]
  },
  {
    version: '0.2.3', date: '29 August 2026', title: 'hotfix release',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543442619923824731',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543442772596629514'
    },
    sections: [
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'fixed: JSON import failing on big exports with lots of attachments',
          'fixed: JSON import refusing files where a calendar page is also linked from a note'
        ]
      },
      {
        title: 'Notes',
        items: [
          'deleting folded notes now warns you first and names exactly what would be removed'
        ]
      }
    ]
  },
  {
    version: '0.2.2', date: '29 August 2026', title: 'richer dates, safer imports, multiple vaults, and a sidebar you control',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543288867954622495',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543289053200392212'
    },
    sections: [
      {
        title: 'Date and time',
        href: '/guides/fields#date-and-time',
        items: [
          'date fields can now capture a time',
          'enter just a year, a month and year, or a full date',
          'sorting and grouping work across all supported date formats',
          'times can include a location, such as “2pm London”. Vellum saves the location, but does not use it yet—that will come in a future release'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/date-time.webp',
            alt: 'A Vellum date field set to September 1, 2026 at 2:00 pm',
            caption: 'Date fields can now capture a date and time together.'
          }
        ]
      },
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'import a Markdown folder or JSON workspace',
          'review a summary before importing so you know exactly what will happen',
          'undo an import immediately or at any point later'
        ]
      },
      {
        title: 'Multiple vaults',
        href: '/guides/vaults#multiple-vaults',
        items: [
          'use unlimited, independent vaults—handy for separating work and personal notes',
          'open multiple vaults at once, each in its own window',
          'choose which vault receives a Markdown folder or JSON workspace when importing'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/multi-vault.webp',
            alt: 'The New vault dialog with options to start fresh, copy the current vault, or restore a backup',
            caption: 'Create a fresh vault, copy one, or restore from a backup.'
          }
        ]
      },
      {
        title: 'Areas: Collections redux',
        href: '/guides/interface#areas',
        items: [
          'Collections are no longer shown in the sidebar',
          'customize the sidebar with your own sections, called Areas',
          'put any combination of tags, nodes, and documents in an Area',
          'rename, rearrange, and remove Areas whenever you like'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/areas-and-vaults.webp',
            alt: 'Two Vellum vault windows with different custom Areas in their sidebars',
            caption: 'Each vault is independent, with its own notes and sidebar Areas.'
          }
        ]
      }
    ]
  },
  {
    version: '0.2.0', date: '24 August 2026', title: 'mobile access to your Vellum vault is now here! 📱',
    highlights: [
      {
        text: 'see the setup instructions in the beta-test channel',
        href: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1541407603630940271'
      },
      "NB: this is NOT the final destination for mobile on vellum ... it's a stepping stone on the way toward an eventual standalone mobile app"
    ]
  },
  {
    version: '0.1.36', date: '21 August 2026', title: 'small release note, big update.',
    highlights: [
      'hidden markdown symbols. check it out.',
      'for those of you who prefer seeing them, see Settings >Appearance'
    ]
  },
  {
    version: '0.1.35', date: '20 August 2026', title: 'a handful of QOL stuff',
    highlights: [
      'support customized Collection names',
      'delete node shortcut (cmd/ctrl-shift-backspace). works on node titles as well.',
      'file uploads: cmd-k > Upload a file. Drops wherever your cursor is (or creates a new node if no cursor)',
      'saved searches can now show up in search results (when they match the rules)',
      'fix: a rule that starts with "as far as it goes" no longer counts the note itself. NB: this also means a search like "Parent project as far as it goes, then Goal is X" now lists only the projects under the one that has the goal. if you also want the project that names the goal directly, add a second rule group saying goal is X',
      'fix: pages now scroll again while a filter popup is open',
      'fix: links to notes with code in the title now display properly'
    ]
  },
  {
    version: '0.1.34', date: '19 August 2026', title: 'a bit more love to date-based querying',
    highlights: [
      'proper date with range value options',
      "“this note's ...” referencing (the note that shows this search in one of its fields)",
      'date verbs like before, after, on or before, on or after',
      'rolling date rules (e.g. “Due this week”, “Birthdays this week”, “Due before today”)',
      "natural language in values like “the next 12 days” or “within 7 days of this note's Start date”",
      'proper date-based sorting',
      'support for year and no year, making date fields birthday-friendly',
      'change your week start day in Settings > Appearance'
    ],
    more: [
      'Before this release, date querying required manually typing dates into the value field and offered only limited verbs.',
      'Phrases from the dropdown menu—this week, the next 7 days, today, and so on—roll with the calendar.',
      'A typed specific day like “next friday” or “24 july” is stored as that exact day.',
      'Dates can now be captured with or without a year. When a birth year exists, the birthday can still appear every year.',
      'The new “Your week starts on” setting defaults to your computer’s region and affects the calendar picker and all week-based date queries.'
    ]
  },
  {
    version: '0.1.33', date: '18 August 2026', title: 'field path querying',
    highlights: [
      "this is something @ag has been quietly working on for awhile: field path querying. search rules can now follow a field into other notes. a rule used to look at just one field on the note being searched. now it can keep going.",
      "sample use-cases: all tasks that roll up to a goal; tasks whose project's Owner is me; projects whose goal's Status is Paused; tasks assigned to my reports' reports; books whose Author's Country is Japan; places whose Country's Region is Europe; recipes whose Ingredients' Season is Spring.",
      "where a field points at its own kind (a project's Parent project, a task's Blocked by), an “as far as it goes” switch lets the search climb the chain. loops are harmless, and the climb stops at 20 steps."
    ],
    more: [
      'nothing to set up: no marks on fields, no new field types. just build your search query and each step offers only the fields that tag actually carries, plus any fields you placed by hand.',
      'if you delete a field that a rule walks through, the rule calls out where it breaks, matching nothing rather than showing incorrect data. the search page and any note showing it will tell you why.'
    ]
  },
]

export const releaseVersions = releases.map((release) => release.version)

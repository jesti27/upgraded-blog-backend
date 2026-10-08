import path from 'node:path'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  access: {
    read: () => true,
  },

  upload: {
    staticDir: path.resolve(process.cwd(), 'media'),
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}

import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',

  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'category',
      'status',
      'featured',
      'publishedAt',
    ],
  },

  access: {
    read: () => true,
  },

  fields: [
    // =========================================================
    // TITLE
    // =========================================================

    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // =========================================================
    // SLUG
    // =========================================================

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },

    // =========================================================
    // EXCERPT
    // =========================================================

    {
      name: 'excerpt',
      type: 'textarea',
    },

    // =========================================================
    // CONTENT
    // =========================================================

    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
    },

    // =========================================================
    // COVER IMAGE
    // This is the image shown on the Posts card.
    // =========================================================

    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },

    // =========================================================
    // ARTICLE IMAGES
    // These are the additional tutorial/sample images.
    // They are NOT the cover image.
    // =========================================================

    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },

    // =========================================================
    // ARTICLE VIDEOS
    // These are the tutorial videos.
    // They are NOT the cover image.
    // =========================================================

    {
      name: 'videos',
      type: 'array',
      fields: [
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },

    // =========================================================
    // CATEGORY
    // =========================================================

    {
      name: 'category',
      type: 'text',
    },

    // =========================================================
    // AUTHOR
    // =========================================================

    {
      name: 'author',
      type: 'text',
    },

    // =========================================================
    // STATUS
    // =========================================================

    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },

    // =========================================================
    // FEATURED
    // =========================================================

    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },

    // =========================================================
    // PUBLISHED
    // =========================================================

    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },

    // =========================================================
    // PUBLISHED AT
    // =========================================================

    {
      name: 'publishedAt',
      type: 'date',
    },
  ],
}

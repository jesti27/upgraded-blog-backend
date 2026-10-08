import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Allow the React/Vite frontend to access the Payload API
  cors: [
    'http://localhost:5173',
  ],

  collections: [Users, Media, Posts],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // =========================================================
  // DATABASE
  // =========================================================
  // push: true allows Payload to synchronize the PostgreSQL
  // schema with the current Collections configuration.
  //
  // This is needed because Posts now contains:
  //   - images[]
  //   - videos[]
  //
  // Payload needs to create:
  //   - posts_images
  //   - posts_videos
  //
  // Existing data is NOT intentionally reset or deleted.
  // =========================================================

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },

    push: true,
  }),

  sharp,

  plugins: [],
})

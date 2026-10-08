import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "posts_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "posts_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_id" integer NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  ALTER TABLE "posts_images" ADD CONSTRAINT "posts_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_images" ADD CONSTRAINT "posts_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_videos" ADD CONSTRAINT "posts_videos_video_id_media_id_fk" FOREIGN KEY ("video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_videos" ADD CONSTRAINT "posts_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_images_order_idx" ON "posts_images" USING btree ("_order");
  CREATE INDEX "posts_images_parent_id_idx" ON "posts_images" USING btree ("_parent_id");
  CREATE INDEX "posts_images_image_idx" ON "posts_images" USING btree ("image_id");
  CREATE INDEX "posts_videos_order_idx" ON "posts_videos" USING btree ("_order");
  CREATE INDEX "posts_videos_parent_id_idx" ON "posts_videos" USING btree ("_parent_id");
  CREATE INDEX "posts_videos_video_idx" ON "posts_videos" USING btree ("video_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "posts_images" CASCADE;
  DROP TABLE "posts_videos" CASCADE;`)
}

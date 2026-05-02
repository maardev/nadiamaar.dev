import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_nav_items_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_featured_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "header_nav_items_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"link_type" "enum_header_nav_items_columns_links_link_type" DEFAULT 'reference',
  	"url" varchar
  );
  
  CREATE TABLE "header_nav_items_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_posts_fk";
  
  DROP INDEX "header_rels_posts_id_idx";
  ALTER TABLE "header_nav_items" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "header_nav_items" ADD COLUMN "sublabel" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "featured_title" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "featured_description" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "featured_cta" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "featured_link_type" "enum_header_nav_items_featured_link_type" DEFAULT 'reference';
  ALTER TABLE "header_nav_items" ADD COLUMN "featured_url" varchar;
  ALTER TABLE "header_rels" ADD COLUMN "service_pages_id" integer;
  ALTER TABLE "header_nav_items_columns_links" ADD CONSTRAINT "header_nav_items_columns_links_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_nav_items_columns_links" ADD CONSTRAINT "header_nav_items_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_columns" ADD CONSTRAINT "header_nav_items_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_nav_items_columns_links_order_idx" ON "header_nav_items_columns_links" USING btree ("_order");
  CREATE INDEX "header_nav_items_columns_links_parent_id_idx" ON "header_nav_items_columns_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_columns_links_icon_idx" ON "header_nav_items_columns_links" USING btree ("icon_id");
  CREATE INDEX "header_nav_items_columns_order_idx" ON "header_nav_items_columns" USING btree ("_order");
  CREATE INDEX "header_nav_items_columns_parent_id_idx" ON "header_nav_items_columns" USING btree ("_parent_id");
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_service_pages_fk" FOREIGN KEY ("service_pages_id") REFERENCES "public"."service_pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_rels_service_pages_id_idx" ON "header_rels" USING btree ("service_pages_id");
  ALTER TABLE "header_nav_items" DROP COLUMN "link_type";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_new_tab";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_url";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_label";
  ALTER TABLE "header_rels" DROP COLUMN "posts_id";
  DROP TYPE "public"."enum_header_nav_items_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "header_nav_items_columns_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_nav_items_columns" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "header_nav_items_columns_links" CASCADE;
  DROP TABLE "header_nav_items_columns" CASCADE;
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_service_pages_fk";
  
  DROP INDEX "header_rels_service_pages_id_idx";
  ALTER TABLE "header_nav_items" ADD COLUMN "link_type" "enum_header_nav_items_link_type" DEFAULT 'reference';
  ALTER TABLE "header_nav_items" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "header_nav_items" ADD COLUMN "link_url" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "header_rels" ADD COLUMN "posts_id" integer;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  ALTER TABLE "header_nav_items" DROP COLUMN "label";
  ALTER TABLE "header_nav_items" DROP COLUMN "sublabel";
  ALTER TABLE "header_nav_items" DROP COLUMN "featured_title";
  ALTER TABLE "header_nav_items" DROP COLUMN "featured_description";
  ALTER TABLE "header_nav_items" DROP COLUMN "featured_cta";
  ALTER TABLE "header_nav_items" DROP COLUMN "featured_link_type";
  ALTER TABLE "header_nav_items" DROP COLUMN "featured_url";
  ALTER TABLE "header_rels" DROP COLUMN "service_pages_id";
  DROP TYPE "public"."enum_header_nav_items_columns_links_link_type";
  DROP TYPE "public"."enum_header_nav_items_featured_link_type";`)
}

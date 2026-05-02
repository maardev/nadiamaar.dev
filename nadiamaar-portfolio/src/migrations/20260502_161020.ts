import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum_pages_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum_pages_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum__pages_v_version_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum__pages_v_version_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum__pages_v_version_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum_service_pages_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum_service_pages_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum_service_pages_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum__service_pages_v_version_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum__service_pages_v_version_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum__service_pages_v_version_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum_static_pages_slug" AS ENUM('prezzi', 'contatti', 'progetti');
  CREATE TYPE "public"."enum_static_pages_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum_static_pages_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum_static_pages_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum_static_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__static_pages_v_version_slug" AS ENUM('prezzi', 'contatti', 'progetti');
  CREATE TYPE "public"."enum__static_pages_v_version_settings_font_family" AS ENUM('inherit', '''Inter'', sans-serif', '''Playfair Display'', serif', '''Space Grotesk'', sans-serif', '''Montserrat'', sans-serif', '''Roboto Mono'', monospace');
  CREATE TYPE "public"."enum__static_pages_v_version_settings_font_weight" AS ENUM('300', '400', '500', '600', '700', '900');
  CREATE TYPE "public"."enum__static_pages_v_version_settings_bg_image_fit" AS ENUM('cover', 'contain', 'fill');
  CREATE TYPE "public"."enum__static_pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "static_pages_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "static_pages_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"period" varchar,
  	"description" varchar,
  	"cta" varchar,
  	"highlighted" boolean
  );
  
  CREATE TABLE "static_pages_projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "static_pages_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"category" varchar,
  	"description" varchar,
  	"url" varchar,
  	"gradient" varchar
  );
  
  CREATE TABLE "static_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" "enum_static_pages_slug",
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"contact_info_email" varchar,
  	"contact_info_phone" varchar,
  	"contact_info_address" varchar,
  	"contact_info_response_time" varchar,
  	"settings_font_family" "enum_static_pages_settings_font_family" DEFAULT 'inherit',
  	"settings_font_weight" "enum_static_pages_settings_font_weight" DEFAULT '400',
  	"settings_font_size" numeric,
  	"settings_color_background" varchar,
  	"settings_color_text" varchar,
  	"settings_color_accent" varchar,
  	"settings_padding_top" numeric,
  	"settings_padding_bottom" numeric,
  	"settings_bg_image_url" varchar,
  	"settings_bg_image_fit" "enum_static_pages_settings_bg_image_fit" DEFAULT 'cover',
  	"settings_custom_code" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_static_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_static_pages_v_version_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_static_pages_v_version_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"period" varchar,
  	"description" varchar,
  	"cta" varchar,
  	"highlighted" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_static_pages_v_version_projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_static_pages_v_version_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"category" varchar,
  	"description" varchar,
  	"url" varchar,
  	"gradient" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_static_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" "enum__static_pages_v_version_slug",
  	"version_hero_title" varchar,
  	"version_hero_subtitle" varchar,
  	"version_contact_info_email" varchar,
  	"version_contact_info_phone" varchar,
  	"version_contact_info_address" varchar,
  	"version_contact_info_response_time" varchar,
  	"version_settings_font_family" "enum__static_pages_v_version_settings_font_family" DEFAULT 'inherit',
  	"version_settings_font_weight" "enum__static_pages_v_version_settings_font_weight" DEFAULT '400',
  	"version_settings_font_size" numeric,
  	"version_settings_color_background" varchar,
  	"version_settings_color_text" varchar,
  	"version_settings_color_accent" varchar,
  	"version_settings_padding_top" numeric,
  	"version_settings_padding_bottom" numeric,
  	"version_settings_bg_image_url" varchar,
  	"version_settings_bg_image_fit" "enum__static_pages_v_version_settings_bg_image_fit" DEFAULT 'cover',
  	"version_settings_custom_code" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__static_pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "pages" ADD COLUMN "settings_font_family" "enum_pages_settings_font_family" DEFAULT 'inherit';
  ALTER TABLE "pages" ADD COLUMN "settings_font_weight" "enum_pages_settings_font_weight" DEFAULT '400';
  ALTER TABLE "pages" ADD COLUMN "settings_font_size" numeric;
  ALTER TABLE "pages" ADD COLUMN "settings_color_background" varchar;
  ALTER TABLE "pages" ADD COLUMN "settings_color_text" varchar;
  ALTER TABLE "pages" ADD COLUMN "settings_color_accent" varchar;
  ALTER TABLE "pages" ADD COLUMN "settings_padding_top" numeric;
  ALTER TABLE "pages" ADD COLUMN "settings_padding_bottom" numeric;
  ALTER TABLE "pages" ADD COLUMN "settings_bg_image_url" varchar;
  ALTER TABLE "pages" ADD COLUMN "settings_bg_image_fit" "enum_pages_settings_bg_image_fit" DEFAULT 'cover';
  ALTER TABLE "pages" ADD COLUMN "settings_custom_code" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_font_family" "enum__pages_v_version_settings_font_family" DEFAULT 'inherit';
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_font_weight" "enum__pages_v_version_settings_font_weight" DEFAULT '400';
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_font_size" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_color_background" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_color_text" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_color_accent" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_padding_top" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_padding_bottom" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_bg_image_url" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_bg_image_fit" "enum__pages_v_version_settings_bg_image_fit" DEFAULT 'cover';
  ALTER TABLE "_pages_v" ADD COLUMN "version_settings_custom_code" varchar;
  ALTER TABLE "service_pages" ADD COLUMN "settings_font_family" "enum_service_pages_settings_font_family" DEFAULT 'inherit';
  ALTER TABLE "service_pages" ADD COLUMN "settings_font_weight" "enum_service_pages_settings_font_weight" DEFAULT '400';
  ALTER TABLE "service_pages" ADD COLUMN "settings_font_size" numeric;
  ALTER TABLE "service_pages" ADD COLUMN "settings_color_background" varchar;
  ALTER TABLE "service_pages" ADD COLUMN "settings_color_text" varchar;
  ALTER TABLE "service_pages" ADD COLUMN "settings_color_accent" varchar;
  ALTER TABLE "service_pages" ADD COLUMN "settings_padding_top" numeric;
  ALTER TABLE "service_pages" ADD COLUMN "settings_padding_bottom" numeric;
  ALTER TABLE "service_pages" ADD COLUMN "settings_bg_image_url" varchar;
  ALTER TABLE "service_pages" ADD COLUMN "settings_bg_image_fit" "enum_service_pages_settings_bg_image_fit" DEFAULT 'cover';
  ALTER TABLE "service_pages" ADD COLUMN "settings_custom_code" varchar;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_font_family" "enum__service_pages_v_version_settings_font_family" DEFAULT 'inherit';
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_font_weight" "enum__service_pages_v_version_settings_font_weight" DEFAULT '400';
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_font_size" numeric;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_color_background" varchar;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_color_text" varchar;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_color_accent" varchar;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_padding_top" numeric;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_padding_bottom" numeric;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_bg_image_url" varchar;
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_bg_image_fit" "enum__service_pages_v_version_settings_bg_image_fit" DEFAULT 'cover';
  ALTER TABLE "_service_pages_v" ADD COLUMN "version_settings_custom_code" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "static_pages_id" integer;
  ALTER TABLE "static_pages_plans_features" ADD CONSTRAINT "static_pages_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."static_pages_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "static_pages_plans" ADD CONSTRAINT "static_pages_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."static_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "static_pages_projects_tags" ADD CONSTRAINT "static_pages_projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."static_pages_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "static_pages_projects" ADD CONSTRAINT "static_pages_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."static_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "static_pages" ADD CONSTRAINT "static_pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_static_pages_v_version_plans_features" ADD CONSTRAINT "_static_pages_v_version_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_static_pages_v_version_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_static_pages_v_version_plans" ADD CONSTRAINT "_static_pages_v_version_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_static_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_static_pages_v_version_projects_tags" ADD CONSTRAINT "_static_pages_v_version_projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_static_pages_v_version_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_static_pages_v_version_projects" ADD CONSTRAINT "_static_pages_v_version_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_static_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_static_pages_v" ADD CONSTRAINT "_static_pages_v_parent_id_static_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."static_pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_static_pages_v" ADD CONSTRAINT "_static_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "static_pages_plans_features_order_idx" ON "static_pages_plans_features" USING btree ("_order");
  CREATE INDEX "static_pages_plans_features_parent_id_idx" ON "static_pages_plans_features" USING btree ("_parent_id");
  CREATE INDEX "static_pages_plans_order_idx" ON "static_pages_plans" USING btree ("_order");
  CREATE INDEX "static_pages_plans_parent_id_idx" ON "static_pages_plans" USING btree ("_parent_id");
  CREATE INDEX "static_pages_projects_tags_order_idx" ON "static_pages_projects_tags" USING btree ("_order");
  CREATE INDEX "static_pages_projects_tags_parent_id_idx" ON "static_pages_projects_tags" USING btree ("_parent_id");
  CREATE INDEX "static_pages_projects_order_idx" ON "static_pages_projects" USING btree ("_order");
  CREATE INDEX "static_pages_projects_parent_id_idx" ON "static_pages_projects" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "static_pages_slug_idx" ON "static_pages" USING btree ("slug");
  CREATE INDEX "static_pages_meta_meta_image_idx" ON "static_pages" USING btree ("meta_image_id");
  CREATE INDEX "static_pages_updated_at_idx" ON "static_pages" USING btree ("updated_at");
  CREATE INDEX "static_pages_created_at_idx" ON "static_pages" USING btree ("created_at");
  CREATE INDEX "static_pages__status_idx" ON "static_pages" USING btree ("_status");
  CREATE INDEX "_static_pages_v_version_plans_features_order_idx" ON "_static_pages_v_version_plans_features" USING btree ("_order");
  CREATE INDEX "_static_pages_v_version_plans_features_parent_id_idx" ON "_static_pages_v_version_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_static_pages_v_version_plans_order_idx" ON "_static_pages_v_version_plans" USING btree ("_order");
  CREATE INDEX "_static_pages_v_version_plans_parent_id_idx" ON "_static_pages_v_version_plans" USING btree ("_parent_id");
  CREATE INDEX "_static_pages_v_version_projects_tags_order_idx" ON "_static_pages_v_version_projects_tags" USING btree ("_order");
  CREATE INDEX "_static_pages_v_version_projects_tags_parent_id_idx" ON "_static_pages_v_version_projects_tags" USING btree ("_parent_id");
  CREATE INDEX "_static_pages_v_version_projects_order_idx" ON "_static_pages_v_version_projects" USING btree ("_order");
  CREATE INDEX "_static_pages_v_version_projects_parent_id_idx" ON "_static_pages_v_version_projects" USING btree ("_parent_id");
  CREATE INDEX "_static_pages_v_parent_idx" ON "_static_pages_v" USING btree ("parent_id");
  CREATE INDEX "_static_pages_v_version_version_slug_idx" ON "_static_pages_v" USING btree ("version_slug");
  CREATE INDEX "_static_pages_v_version_meta_version_meta_image_idx" ON "_static_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_static_pages_v_version_version_updated_at_idx" ON "_static_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_static_pages_v_version_version_created_at_idx" ON "_static_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_static_pages_v_version_version__status_idx" ON "_static_pages_v" USING btree ("version__status");
  CREATE INDEX "_static_pages_v_created_at_idx" ON "_static_pages_v" USING btree ("created_at");
  CREATE INDEX "_static_pages_v_updated_at_idx" ON "_static_pages_v" USING btree ("updated_at");
  CREATE INDEX "_static_pages_v_latest_idx" ON "_static_pages_v" USING btree ("latest");
  CREATE INDEX "_static_pages_v_autosave_idx" ON "_static_pages_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_static_pages_fk" FOREIGN KEY ("static_pages_id") REFERENCES "public"."static_pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_static_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("static_pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "static_pages_plans_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "static_pages_plans" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "static_pages_projects_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "static_pages_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "static_pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v_version_plans_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v_version_plans" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v_version_projects_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v_version_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_static_pages_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "static_pages_plans_features" CASCADE;
  DROP TABLE "static_pages_plans" CASCADE;
  DROP TABLE "static_pages_projects_tags" CASCADE;
  DROP TABLE "static_pages_projects" CASCADE;
  DROP TABLE "static_pages" CASCADE;
  DROP TABLE "_static_pages_v_version_plans_features" CASCADE;
  DROP TABLE "_static_pages_v_version_plans" CASCADE;
  DROP TABLE "_static_pages_v_version_projects_tags" CASCADE;
  DROP TABLE "_static_pages_v_version_projects" CASCADE;
  DROP TABLE "_static_pages_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_static_pages_fk";
  
  DROP INDEX "payload_locked_documents_rels_static_pages_id_idx";
  ALTER TABLE "pages" DROP COLUMN "settings_font_family";
  ALTER TABLE "pages" DROP COLUMN "settings_font_weight";
  ALTER TABLE "pages" DROP COLUMN "settings_font_size";
  ALTER TABLE "pages" DROP COLUMN "settings_color_background";
  ALTER TABLE "pages" DROP COLUMN "settings_color_text";
  ALTER TABLE "pages" DROP COLUMN "settings_color_accent";
  ALTER TABLE "pages" DROP COLUMN "settings_padding_top";
  ALTER TABLE "pages" DROP COLUMN "settings_padding_bottom";
  ALTER TABLE "pages" DROP COLUMN "settings_bg_image_url";
  ALTER TABLE "pages" DROP COLUMN "settings_bg_image_fit";
  ALTER TABLE "pages" DROP COLUMN "settings_custom_code";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_font_family";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_font_weight";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_font_size";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_color_background";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_color_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_color_accent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_padding_top";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_padding_bottom";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_bg_image_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_bg_image_fit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_settings_custom_code";
  ALTER TABLE "service_pages" DROP COLUMN "settings_font_family";
  ALTER TABLE "service_pages" DROP COLUMN "settings_font_weight";
  ALTER TABLE "service_pages" DROP COLUMN "settings_font_size";
  ALTER TABLE "service_pages" DROP COLUMN "settings_color_background";
  ALTER TABLE "service_pages" DROP COLUMN "settings_color_text";
  ALTER TABLE "service_pages" DROP COLUMN "settings_color_accent";
  ALTER TABLE "service_pages" DROP COLUMN "settings_padding_top";
  ALTER TABLE "service_pages" DROP COLUMN "settings_padding_bottom";
  ALTER TABLE "service_pages" DROP COLUMN "settings_bg_image_url";
  ALTER TABLE "service_pages" DROP COLUMN "settings_bg_image_fit";
  ALTER TABLE "service_pages" DROP COLUMN "settings_custom_code";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_font_family";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_font_weight";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_font_size";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_color_background";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_color_text";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_color_accent";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_padding_top";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_padding_bottom";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_bg_image_url";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_bg_image_fit";
  ALTER TABLE "_service_pages_v" DROP COLUMN "version_settings_custom_code";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "static_pages_id";
  DROP TYPE "public"."enum_pages_settings_font_family";
  DROP TYPE "public"."enum_pages_settings_font_weight";
  DROP TYPE "public"."enum_pages_settings_bg_image_fit";
  DROP TYPE "public"."enum__pages_v_version_settings_font_family";
  DROP TYPE "public"."enum__pages_v_version_settings_font_weight";
  DROP TYPE "public"."enum__pages_v_version_settings_bg_image_fit";
  DROP TYPE "public"."enum_service_pages_settings_font_family";
  DROP TYPE "public"."enum_service_pages_settings_font_weight";
  DROP TYPE "public"."enum_service_pages_settings_bg_image_fit";
  DROP TYPE "public"."enum__service_pages_v_version_settings_font_family";
  DROP TYPE "public"."enum__service_pages_v_version_settings_font_weight";
  DROP TYPE "public"."enum__service_pages_v_version_settings_bg_image_fit";
  DROP TYPE "public"."enum_static_pages_slug";
  DROP TYPE "public"."enum_static_pages_settings_font_family";
  DROP TYPE "public"."enum_static_pages_settings_font_weight";
  DROP TYPE "public"."enum_static_pages_settings_bg_image_fit";
  DROP TYPE "public"."enum_static_pages_status";
  DROP TYPE "public"."enum__static_pages_v_version_slug";
  DROP TYPE "public"."enum__static_pages_v_version_settings_font_family";
  DROP TYPE "public"."enum__static_pages_v_version_settings_font_weight";
  DROP TYPE "public"."enum__static_pages_v_version_settings_bg_image_fit";
  DROP TYPE "public"."enum__static_pages_v_version_status";`)
}

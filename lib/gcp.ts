import { Storage } from '@google-cloud/storage';

if (!process.env.GCS_KEY_FILEPATH) {
  throw new Error("Missing GCS_KEY_FILEPATH");
}

if (!process.env.GCS_BUCKET) {
  throw new Error("Missing GCS_BUCKET");
}

const storage = new Storage({
    keyFilename: process.env.GCS_KEY_FILEPATH,
});

const bucket = storage.bucket(process.env.GCS_BUCKET);

/**
 * Fetches blog index JSON file (ex: blog/index.json)
 * Returns parsed JSON.
 */
export async function getBlogList() {
  const file = bucket.file("blog/index.json");

  const [exists] = await file.exists();
  if (!exists) {
    throw new Error("Blog index not found");
  }

  const [contents] = await file.download();
  return JSON.parse(contents.toString("utf-8"));
}

/**
 * Fetches a single blog post by slug.
 * Ex: blog/my-post.json
 */
export async function getBlogPost(slug: string) {
  const file = bucket.file(`blog/${slug}.json`);

  const [exists] = await file.exists();
  if (!exists) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const [contents] = await file.download();
  return JSON.parse(contents.toString("utf-8"));
}

/**
 * Generates a temporary signed URL for private files.
 * Default: 15 minute expiration.
 */
export async function getSignedUrl(
  fileName: string,
  expiresInMinutes = 15
) {
  const file = bucket.file(fileName);

  const [url] = await file.getSignedUrl({
    version: "v4",
    action: "read",
    expires: Date.now() + expiresInMinutes * 60 * 1000,
  });

  return url;
}

/**
 * Fetches a text file from GCS (e.g. description.txt)
 */
export async function getTextFile(filePath: string): Promise<string> {
  const file = bucket.file(filePath);
  const [exists] = await file.exists();
  if (!exists) throw new Error(`File not found: ${filePath}`);
  const [contents] = await file.download();
  return contents.toString("utf-8");
}

/**
 * Fetches all blog pages: metadata from index.json,
 * then description + signed image URL per page.
 */
export async function getBlogPages() {
  const index = await getBlogList();
  // index is assumed to be: Array<{ slug: string, title: string, date: string, ... }>

  const pages = await Promise.all(
    index.map(async (entry: { slug: string; [key: string]: any }) => {
      const description = await getTextFile(`blog/${entry.slug}/description.txt`);
      const imageUrl = await getSignedUrl(`blog/${entry.slug}/image.png`);
      return { ...entry, description, imageUrl };
    })
  );

  return pages;
}
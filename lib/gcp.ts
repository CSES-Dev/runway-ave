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
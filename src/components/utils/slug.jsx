export function slugifyTitle(title = "") {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric => "-"
    .replace(/^-+|-+$/g, ""); // trim "-" from ends
}

// Build: "id-title-slug"
export function buildBlogSlug(post) {
  return `${post.id}-${slugifyTitle(post.title)}`;
}

// Extract id from "id-title-slug"
export function getIdFromSlug(slug = "") {
  const first = slug.split("-")[0];
  const id = Number(first);
  return Number.isFinite(id) ? id : null;
}

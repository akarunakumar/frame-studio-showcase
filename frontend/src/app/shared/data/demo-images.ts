/**
 * DEMO PHOTOS ONLY.
 *
 * These are real, freely-licensed stock photos (Unsplash License —
 * free for commercial use, no attribution required) used to make the
 * site look finished for a demo before real project photography
 * exists. They are NOT photos of actual Frame Studio Interiors
 * projects.
 *
 * To swap in real photos later: once project-service/content-service
 * store real uploaded image URLs, replace every reference to these
 * constants with the real `coverImage`/`image` value from the API —
 * no other code changes needed, since every card component already
 * falls back to the gradient placeholder when no image is set.
 */

function unsplash(id: string, width: number): string {
  return `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format&fit=crop`;
}

export const DEMO_PHOTOS = {
  livingRoom: (w = 1200) => unsplash('photo-1758448755856-01d3add0177b', w),
  kitchen: (w = 1200) => unsplash('photo-1764526624453-db32c24eca55', w),
  bedroom: (w = 1200) => unsplash('photo-1757344454333-cc666252e596', w),
  office: (w = 1200) => unsplash('photo-1782406747294-10dd7e3bec06', w),
  restaurant: (w = 1200) => unsplash('photo-1745368036244-eda2fcbb9d45', w),
};
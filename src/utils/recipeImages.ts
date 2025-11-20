const recipeImages = import.meta.glob("../assets/images/*-large.webp", {
  eager: true,
}) as Record<string, { default: string }>;

const recipeImagesSmall = import.meta.glob("../assets/images/*-small.webp", {
  eager: true,
}) as Record<string, { default: string }>;

const buildImageMap = (
  images: Record<string, { default: string }>
): Record<string, string> => {
  const map: Record<string, string> = {};
  for (const [path, module] of Object.entries(images)) {
    const filename = path.split("/").pop() || "";
    map[filename] = module.default;
  }
  return map;
};

const recipeImageMap: Record<string, string> = {
  ...buildImageMap(recipeImages),
  ...buildImageMap(recipeImagesSmall),
};

export const getRecipeImageUrl = (filename: string): string => {
  return recipeImageMap[filename] || filename;
};

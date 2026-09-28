// PLACEHOLDERS. Add real resources and links only when supplied.
export const resourceCategories = ["Student life", "Wellbeing", "Academics", "Creative expression", "Getting involved"];
export const resources = resourceCategories.map((category, i) => ({
  id: `r${i}`, title: "Resource coming soon", category, type: "Guide",
  description: "The club will add curated material for this category here.", href: "",
}));

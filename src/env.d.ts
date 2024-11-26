/// <reference path="../.astro/types.d.ts" />

// https://docs.astro.build/en/recipes/add-yaml-support/
declare module "*.yml" {
  const value: any;
  export default value;
}

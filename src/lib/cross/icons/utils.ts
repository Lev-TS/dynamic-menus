import { Icons } from "./types";

/**
 * ! This is expensive, don't use in big loops and in browser
 */
export const getIcon = async (name: string) => {
  const lib = name.split(/(?=[A-Z])/)[0];

  if (!lib) {
    throw new Error(`Icon name (${name}) is not in PascalCase`);
  }

  const icons = (await import(`react-icons/${lib.toLowerCase()}/index`)) as Icons;

  if (!icons) {
    throw new Error(`React icons has no collection under this path: react-icons/${lib.toLowerCase()}/index`);
  }

  if (!icons[name]) {
    throw new Error(`Icon with this name doesn't exist: ${name}`);
  }

  return icons[name];
};

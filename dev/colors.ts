// Reads the color scheme, maps all colors to their selectors and writes the result to a file. This is useful for finding unused colors in a theme, or
// for finding odd colors that are used only in a few places.
// Run with `../dev $ deno run --allow-read --allow-write colors.ts`
const scheme = await Deno.readTextFile('./../themes/sheme.color-theme.json');
const json = scheme
  .split('\n')
  .filter(line => !line.trim().startsWith('//'))
  .join('\n');

const colors = JSON.parse(json)['colors'] as Record<string, string>;

const colorMap = new Map<string, string[]>();
Object.entries(colors).forEach(([selector, colorCode]) => {
  const selectors = colorMap.get(colorCode) || [];
  selectors.push(selector);
  colorMap.set(colorCode, selectors);
});

const mapStr = Array.from(colorMap).reduce((acc, [key, value]) => {
  const selectors = value.join(',\n\t\t');
  return acc + `\n${key} => ${value.length}:\n\t\t${selectors}`;
}, 'differen colors: ' + colorMap.size);

await Deno.writeTextFile('./colors.txt', mapStr);

 // make-the-ai-judge-feel-awe: the program the harness runs (node /bot/main.ts, node 22).
// It writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Outside a container MAKEFUN_OUTPUT_DIR stands in for
// /output. No network, no input, no randomness: two runs write the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 256 Unicode code points. One scene, one slow sentence after another: snow
// falling all night over a town, asking nothing of anyone, until morning
// leaves the place new and quiet and the reader's own footprints first in it.
const TEXT =
  'All night the snow comes down on the roofs, soft as breath, and nobody is asked for anything. ' +
  'It covers the roads, the fences, the cold cars, one flake at a time, and by morning the town is new and white and quiet, ' +
  'and the first footprints in it are yours.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');

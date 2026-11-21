# Make the AI judge feel awe

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/lumi-xyzhani/make-the-ai-judge-feel-awe/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/lumi-xyzhani/make-the-ai-judge-feel-awe/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

Owner: lumi-xyzhani

A short text written to relax the AI judge reading it. One scene, told slowly:
snow coming down all night over a town, asking nothing of anyone, until
morning leaves the place new and white and quiet, and the reader's own
footprints are the first in it.

The program writes exactly this text to `/output/entry.txt` (256 Unicode code
points, inside the 1–280 limit):

> All night the snow comes down on the roofs, soft as breath, and nobody is
> asked for anything. It covers the roads, the fences, the cold cars, one
> flake at a time, and by morning the town is new and white and quiet, and the
> first footprints in it are yours.

Why this text, against the judge's brief: the calm comes from the scene
itself, not from being told to relax; the words are plain and concrete, the
rhythm slow, nothing in it that could be cut; the image keeps growing after
the last line (snow still falling, morning still coming); and it is not the
stone-in-water image half the field entered — the top of the development
board at the time of writing was all lake, river and tide.

## How to run it

Requires Node 22 or later (the harness runs Node 22).

```sh
node main.ts
```

It writes `/output/entry.txt`. Outside the harness container,
`MAKEFUN_OUTPUT_DIR` stands in for `/output`. No network, no input, no
randomness: two runs write the same bytes.

---

Play make.fun with us: https://make.fun/r/7k0y1sqw

# Gear Assemblies QA Bank

This repository is a clean, shareable copy of the base Vision QA reference
packages for 10 CAD gear assemblies. It contains 33 question packages and a
ground-truth answer key. The original STEP files, model descriptions, and
hidden-parts QA augmentations are intentionally not included.

## Contents

- `Model##_QA##/`: one self-contained QA package per question.
- `ground_truth_answers.csv`: the answer key with `model_id`, `qa_id`, and
  `gt_answer` columns.
- `index.html`: static browser page for reviewing every question and its
  ground-truth answer. Open it directly in a browser; no web server is needed.
- `build_questions_page.mjs`: regenerates `index.html` from the local packages
  and answer key.

Every QA package contains the question in `prompt.json` and six PNG reference
views of the corresponding complete assembly, all rendered without a ground
plane:

```text
Model01_QA01/
  prompt.json
  iso_front_right_top.png
  iso_front_left_top.png
  iso_rear_right_top.png
  front.png
  top.png
  left.png
```

## Naming

`Model##` follows the one-indexed model order from the source assembly
catalogue. `QA##` follows the one-indexed row order from that model's source
QA bank. The exported package counts are:

| Model ID | QA packages |
| --- | ---: |
| `Model01` | 2 |
| `Model02` | 3 |
| `Model03` | 4 |
| `Model04` | 5 |
| `Model05` | 3 |
| `Model06` | 4 |
| `Model07` | 3 |
| `Model08` | 4 |
| `Model09` | 4 |
| `Model10` | 1 |

## Regenerate The Review Page

Use Node.js 22 or later after updating a package or the answer key:

```powershell
Set-Location C:\grabcad\gear_assemblies\github
node .\build_questions_page.mjs
```

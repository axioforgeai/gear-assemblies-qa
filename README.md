# Gear Assemblies QA Bank

This repository is a clean, shareable copy of the Vision QA reference packages
for 10 CAD gear assemblies. It contains 33 base QA packages, 28 hidden-parts
variants, and ground-truth answer keys. The original STEP files and model
descriptions are intentionally not included.

## Contents

- `Model##_QA##/`: one self-contained QA package per question.
- `ground_truth_answers.csv`: the base-package answer key with `model_id`,
  `qa_id`, and `gt_answer` columns.
- `hidden/`: 28 hidden-parts variants named `Model##_##_Hidden/`, with a
  matching `hidden/ground_truth_answers.csv` answer key. For example,
  `Model02_01_Hidden` is the hidden version of the first QA for `Model02`.
- `index.html`: static browser page for reviewing every question and its
  ground-truth answer, including base and hidden variants. Open it directly in
  a browser; no web server is needed.
- `build_questions_page.mjs`: regenerates `index.html` from the local packages
  and answer key.
- `reports/qwen3-vl-plus-base/`: blinded Qwen3-VL Plus evaluation reports in
  Markdown, HTML, PDF, CSV, and JSON formats.

## Live Review Page

**Rendered HTML:**
[https://axioforgeai.github.io/gear-assemblies-qa/](https://axioforgeai.github.io/gear-assemblies-qa/)

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

hidden/Model02_01_Hidden/
  prompt.json
  ...
```

## Qwen3-VL Plus Evaluation

A blinded evaluation of the 33 complete-assembly base packages produced 5/33
exact answers (15.15% accuracy). Hidden packages, dot-prefixed paths, and the
answer key were excluded from model input. The run used 136,043 tokens and has
a published-list-price estimate of USD 0.019766571.

- [Comprehensive report — Markdown](reports/qwen3-vl-plus-base/README.md)
- [Comprehensive report — HTML](reports/qwen3-vl-plus-base/index.html)
- [Comprehensive report — PDF](reports/qwen3-vl-plus-base/qwen3_vl_plus_comprehensive_evaluation_report.pdf)
- [Incorrect-answer audit — Markdown](reports/qwen3-vl-plus-base/incorrect-answer-audit.md)
- [Incorrect-answer audit — HTML](reports/qwen3-vl-plus-base/incorrect-answer-audit.html)
- [Incorrect-answer audit — PDF](reports/qwen3-vl-plus-base/qwen3_vl_plus_incorrect_answer_audit.pdf)
- [Incorrect-answer audit — CSV](reports/qwen3-vl-plus-base/incorrect-answer-audit.csv)

## Naming

`Model##` follows the one-indexed model order from the source assembly
catalogue. `QA##` follows the one-indexed row order from that model's source
QA bank. Hidden variants omit `QA` from the folder name and add `_Hidden`, as
in `Model02_01_Hidden`. The exported base-package counts are:

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

## Evaluate With A VLM

Evaluate the base and hidden packages as separate variants. A hidden package
uses the same question and ground-truth answer as its base counterpart, but its
reference images conceal the configured exterior components.

1. Select one package folder. Use either `Model##_QA##/` for a complete
   assembly or `hidden/Model##_##_Hidden/` for its hidden-parts variant.
2. Read `prompt.json`, then send the exact `question` value and all six
   `reference_images` to the VLM in the listed order. Preserve the image order
   in every run.
3. Do not send `ground_truth_answers.csv`, `index.html`, or any ground-truth
   answer to the VLM. Those files are for scoring only.
4. Save predictions in a separate result file with at least
   `package_id`, `model_id`, `qa_id`, `variant`, `vlm_answer`, and `is_correct`
   columns. Retain the raw VLM output as well as a normalized answer when
   scoring.
5. For numeric questions, parse the requested number and apply a declared
   tolerance. For discrete choices, compare normalized values exactly. For
   narrative answers, use a written rubric or a blinded human/judge-model
   review. Record the scoring rule with the results.
6. Report metrics separately for `Base` and `Hidden`, then compare the paired
   QA IDs to measure the effect of removing the outer components.

The static `index.html` page is a human review and scoring aid. It deliberately
shows ground-truth answers, so it must not be used as the VLM input page.

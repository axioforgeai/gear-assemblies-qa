# BabyVision-v2 public gear evaluation bundle

This directory contains the publication artifacts for a three-model,
three-replicate evaluation on the 33 public base gear questions. The frozen
condition used BabyVision-v2 `cc2d-6`, six PNG views per question, no MCP, one
attempt, zero automatic retries, and no fallback model. The matrix contains
297 trials, with 99 attempts per model.

The highest strict point estimate was 63/99
(63.6%), observed for Claude Opus 5. See the manuscript for
question-cluster uncertainty, timeout sensitivity, repeatability, error
taxonomy, token accounting, and provider list-price estimates.

## Files

- `babyvision_gear_crossmodel_report.pdf`, `.md`, and `.html`: equivalent main
  scientific reports.
- `incorrect_answer_audit.md`, `.html`, and
  `data/gear_matrix_incorrect_audit.csv`: every strict incorrect attempt with
  submitted and expected answers.
- `data/gear_matrix_summary.json`: primary machine-readable results.
- `data/gear_matrix_trials.jsonl`: one normalized record per attempted trial.
- `data/gear_matrix_by_replicate.csv`,
  `data/gear_matrix_by_question_type.csv`, `data/gear_matrix_pairwise.csv`, and
  `data/gear_matrix_question_profiles.csv`: supporting statistical tables.
- `provenance/`: the frozen plan, public task manifest, runtime lock, preflight
  receipt, reproducibility note, and final verification receipt when present.
- `report_manifest.json` and `QA_RECEIPT.md`: artifact hashes and report QA.

## Interpretation boundary

The public packages contain rendered views but no provenance-matched STEP,
assembly, mesh, or scene assets. A causal MCP comparison was therefore not
runnable. Reconstructing geometry from images was deliberately excluded
because it would alter the model-visible evidence and confound the treatment.
The private scoring manifest is not published; its SHA-256 digest is recorded
in the frozen plan and summary.

# Quality-assurance receipt

Status: **PASS**

Run: `gear-crossmodel-3x-20260816-1727`

Reviewed: 2026-08-16 (America/New_York)

## Evaluation integrity

- All 231 newly scheduled trials produced results; all seven new workers exited with code 0.
- The final aggregate contains 297 attempts: 99 each for Qwen 3.7 Plus, Claude Opus 5, and Claude Fable 5.
- The two reused Fable replicates contain 66 attempts and remain identified as reused observations in the trial ledger.
- Offline deterministic regrading completed for every new trial; operational failures remain incorrect in the strict denominator.
- Frozen plan, task-manifest, and scoring-manifest digests match the preflight records.
- Final structural verification status: PASS; credential-like value matches: 0.

## Report and PDF checks

- MiKTeX `pdflatex` completed two stable passes with `-halt-on-error`.
- Final PDF: 7 letter-size pages, unencrypted, no JavaScript, 411,616 bytes.
- Final LaTeX log contains no overfull boxes, underfull boxes, unresolved references, or warnings.
- Every page was rendered at 120 dpi and visually inspected for clipping, overlap, illegible text, malformed tables, and missing figures.
- The visual pass found one escaped-arrow defect in the pairwise table; the generator was corrected, regression-tested, rebuilt, and the affected page re-inspected.
- Extracted text contains 23,790 characters and includes the title, 297-trial count, 63.6% headline result, and $226.54 cost total.
- Extracted text contains no unresolved placeholders, broken arrow commands, or undefined-reference markers.
- Markdown, HTML, PDF source data, and audit files contain no absolute local paths or credential-like values.

## Automated checks

- Pipeline and report tests: 11 passed.
- Final aggregate verification: PASS.
- Published response-model identity deviations: 0 trials.
- Qwen maximum observed request input: 64,176 tokens, below the frozen 256K pricing boundary.

## Artifact digests (SHA-256)

- PDF: `044d978cd1f5a0069fb2ca7e47e02e31e81da359660af9f4b5bbfa2d10b67264`
- Markdown report: `325f748e092a6633ca89104695284110e6645e3ab2be3555e9cd845a3af48994`
- HTML report: `9657f690e4d6892ed5db78ed0dbc9de5150817cfeb4f0601d56d15b5c498bc7f`
- Aggregate summary: `9b21fae21aa3815c05f00cf5a169169fee62a153d077cb482fadc2239882e198`
- Complete trial ledger: `4d370e4058e69d6f1ddc78643b37cff632a98a7da9d8028b5afb459e73bcf0bd`
- Expanded evaluation plan: `27071d53d11cc9846f9c6c5fe4330aac5a4ffa3969709ee0c49db0dea6d2d35d`

The PDF digest above identifies the visually inspected final build.

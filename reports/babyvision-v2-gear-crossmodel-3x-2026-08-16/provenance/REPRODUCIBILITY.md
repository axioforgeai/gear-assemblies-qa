# Reproducibility record

The expanded study uses one frozen task tree for all model routes. It contains
33 public base questions and 198 PNG views. The scoring manifest remains
private to the deterministic verifier, and hidden packages, dot-prefixed
paths, raw CAD, automatic retries, and fallback models are excluded.

The exact plan, task manifest, scoring manifest, BabyVision commit and working
diff, Docker image digests, Python version, and Harbor version are recorded in
`data/runtime_lock.json` and `logs/gear-crossmodel-preflight.json`. The run
state records every worker, endpoint, model identifier, process, task root,
and output path. Provider keys are selected from the authorized source file at
launch, inherited only by the worker process, and omitted from all receipts.

Three replicate indices are evaluated for each of Qwen 3.7 Plus, Claude Opus
5, and Claude Fable 5. The existing Fable A and B runs are preserved verbatim;
only Fable C and the six Qwen/Opus replicates are newly executed. Every planned
attempt remains in the strict denominator, including a timeout or malformed
answer. Offline regrading disables network-backed judges and uses the frozen
BabyVision deterministic scorer.

Attempt-level accuracy is accompanied by a Wilson interval. Because each
question appears three times per model, the primary comparative uncertainty
uses a deterministic question-cluster bootstrap with seed 20260816 and 20,000
resamples. Aligned McNemar tests are retained as sensitivity analyses, and
repeatability is summarized with pairwise binary agreement, unanimity counts,
and Fleiss' kappa. Cost values reconstruct published list rates from native
usage fields and are not invoices.

The public dataset does not support a causal MCP comparison. No provenance-
matched STEP, assembly, mesh, or scene asset exists for any of the 33 frozen
questions. A valid future MCP arm must supply those raw assets for every task
while keeping the question, scorer, model, deadlines, and replicate policy
unchanged.

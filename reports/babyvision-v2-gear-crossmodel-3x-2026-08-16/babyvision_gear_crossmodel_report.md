# BabyVision-v2 on Public Gear Problems: Three-Model, Three-Replicate Evaluation

## Abstract

BabyVision-v2 was used to compare Qwen 3.7 Plus, Claude Opus 5, and Claude Fable 5 on 33 public base gear-assembly questions under one frozen six-view image-only condition. Each model contributed three one-attempt replicates, yielding 99 attempted trials per model and 297 overall. The primary endpoint retained operational failures in the denominator. Claude Opus 5 had the highest strict accuracy at 63/99 (63.6%; question-cluster 95% CI 47.5-78.8%). The report additionally separates timeouts from substantive errors, quantifies repeatability, audits response-model identity and native usage, and reconstructs provider list-price cost. A causal MCP comparison was not run because the frozen packages contain no provenance-matched raw CAD or scene assets.

## Introduction

Mechanical assembly questions require cross-view object correspondence, repeated-part counting, gear-type recognition, and arithmetic over visually inferred gear trains. BabyVision-v2 makes these tasks measurable by isolating model-visible evidence from scorer-side ground truth and preserving complete execution artifacts. The earlier two-run Fable study established repeatability for one no-MCP route, but it did not compare models or provide three-replicate uncertainty. This study extends the same frozen public evidence to three exact model routes while retaining strict operational accounting.

## Methods

The evaluation used 33 public base packages from the gear-assemblies-qa repository. Each task exposed exactly six PNG views and one question. The manifest contains 198 unique images, and the same images were reused across model replicates. Hidden packages, dot-prefixed paths, ground-truth files, raw geometry, automatic retries, and fallback models were excluded from every agent environment. Each Harbor worker used one attempt per task and a 600-second deadline. The deterministic BabyVision-v2 verifier supplied full-credit scores, and all newly collected trajectories were regraded offline without network-backed judging.

Three replicate indices were retained for each model. The completed Fable A and B replicates were reused without modification, while Fable C and all Qwen and Opus replicates were newly executed. Strict accuracy is the number of full-credit outcomes divided by all 99 planned attempts for a model. Wilson intervals describe attempt-level proportions. Comparative uncertainty uses a 20,000-resample bootstrap clustered by the 33 questions with seed 20260816; paired McNemar tests are reported as sensitivity analyses. Repeatability uses pairwise correctness agreement, unanimity profiles, and Fleiss' kappa.

## Results

| Model | Correct / 99 | Accuracy (95% question-cluster CI) | Error rate | Timeouts | Non-timeout accuracy |
|---|---:|---:|---:|---:|---:|
| Qwen 3.7 Plus | 22 / 99 | 22.2% (10.1-35.4%) | 77.8% | 4 | 23.2% |
| Claude Opus 5 | 63 / 99 | 63.6% (47.5-78.8%) | 36.4% | 14 | 74.1% |
| Claude Fable 5 | 59 / 99 | 59.6% (43.4-74.7%) | 40.4% | 15 | 70.2% |

The strict point estimates in descending order were Claude Opus 5, Claude Fable 5, Qwen 3.7 Plus. Timeout-adjusted accuracy is shown as a sensitivity analysis and does not replace the strict endpoint. Removing a timeout changes the denominator but does not convert a substantive wrong answer into a correct one.

### Question-type behavior

| Question type | Qwen | Opus 5 | Fable 5 |
|---|---:|---:|---:|
| Axis angle | 100.0% | 100.0% | 100.0% |
| Component count | 45.8% | 75.0% | 75.0% |
| Gear type | 0.0% | 0.0% | 0.0% |
| Tooth count | 2.6% | 66.7% | 59.0% |
| Transmission ratio | 23.3% | 53.3% | 50.0% |

The five categories are uneven in size, so isolated percentages for axis-angle and gear-type questions are descriptive. The complete question-level profiles and incorrect-answer records accompany this report.

### Repeatability and pairwise comparisons

| Model | Pairwise agreement | Fleiss' kappa | Unanimous correct | Unanimous incorrect | Mixed |
|---|---:|---:|---:|---:|---:|
| Qwen 3.7 Plus | 89.9% | 0.708 | 5 | 23 | 5 |
| Claude Opus 5 | 91.9% | 0.825 | 19 | 10 | 4 |
| Claude Fable 5 | 87.9% | 0.748 | 17 | 10 | 6 |

| Comparison | Difference, right - left | 95% question-cluster CI | McNemar p |
|---|---:|---:|---:|
| Qwen 3.7 Plus -> Claude Opus 5 | 41.4 pp | 24.2-58.6% | 0.0000 |
| Qwen 3.7 Plus -> Claude Fable 5 | 37.4 pp | 21.2-53.5% | 0.0000 |
| Claude Opus 5 -> Claude Fable 5 | -4.0 pp | -11.1-1.0% | 0.3877 |

The cluster-bootstrap interval is the principal comparison because each task contributes three correlated observations per model. McNemar results are retained to expose the direction and number of aligned discordant decisions.

### Error audit

For Qwen 3.7 Plus, the audit classified categorical mismatch (3), numeric overestimate (9), numeric underestimate (60), operational other (1), operational timeout (4). For Claude Opus 5, the audit classified categorical mismatch (3), numeric overestimate (7), numeric underestimate (12), operational timeout (14). For Claude Fable 5, the audit classified categorical mismatch (3), numeric overestimate (9), numeric underestimate (13), operational timeout (15). The full audit records the submitted answer, expected answer, exception class, timeout flag, usage, cost, response-model identity, and preserved trial path for every incorrect attempt.

### Targeted question audit

| Task | Question type | Correct / 9 | Models wrong in all 3 runs |
|---|---|---:|---|
| Model02_QA03 | Component count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model03_QA03 | Tooth count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model04_QA04 | Tooth count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model06_QA01 | Component count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model07_QA03 | Transmission ratio | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model08_QA01 | Tooth count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model08_QA02 | Tooth count | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model08_QA03 | Transmission ratio | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model08_QA04 | Gear type | 0 / 9 | Qwen 3.7 Plus, Claude Opus 5, Claude Fable 5 |
| Model02_QA01 | Transmission ratio | 1 / 9 | Qwen 3.7 Plus, Claude Opus 5 |

Qwen 3.7 Plus was incorrect in all three runs on 23 questions: Model01_QA01, Model02_QA01, Model02_QA03, Model03_QA03, Model04_QA02, Model04_QA03, Model04_QA04, Model05_QA01, Model05_QA02, Model05_QA03, Model06_QA01, Model06_QA02, Model06_QA03, Model07_QA02, Model07_QA03, Model08_QA01, Model08_QA02, Model08_QA03, Model08_QA04, Model09_QA01, Model09_QA02, Model09_QA03, Model10_QA01. Claude Opus 5 was incorrect in all three runs on 10 questions: Model02_QA01, Model02_QA03, Model03_QA03, Model04_QA04, Model06_QA01, Model07_QA03, Model08_QA01, Model08_QA02, Model08_QA03, Model08_QA04. Claude Fable 5 was incorrect in all three runs on 10 questions: Model02_QA03, Model03_QA03, Model04_QA04, Model06_QA01, Model07_QA03, Model08_QA01, Model08_QA02, Model08_QA03, Model08_QA04, Model10_QA01. Questions missed in all nine model-by-replicate attempts were Model02_QA03, Model03_QA03, Model04_QA04, Model06_QA01, Model07_QA03, Model08_QA01, Model08_QA02, Model08_QA03, Model08_QA04. These records distinguish
systematic three-run blind spots from mixed, potentially unstable outcomes;
the complete per-question profiles remain in the machine-readable bundle.

### Tokens, runtime, and cost

| Model | Input tokens | Output tokens | Calls | Median trial | List-price estimate | Cost / correct |
|---|---:|---:|---:|---:|---:|---:|
| Qwen 3.7 Plus | 9,092,202 | 387,762 | 338 | 61.7 s | $1.1991 | $0.0545 |
| Claude Opus 5 | 59,524,843 | 1,607,258 | 1,579 | 173.0 s | $85.4007 | $1.3556 |
| Claude Fable 5 | 46,145,627 | 1,330,572 | 1,342 | 229.7 s | $139.9442 | $2.3719 |

The reconstructed full-matrix list-price cost was
$226.5440.
Of that amount,
$136.0556
belongs to the 231 newly executed trials and
$90.4884
to the 66 reused Fable trials. The new expansion
remained within
the predeclared $200 soft ceiling.

The Qwen estimate uses the global route's below-256K list rates of $0.276 per
million standard input tokens and $1.101 per million output tokens; explicit
five-minute cache creation is charged at 125% of input and cache reads at 10%.
The largest observed Qwen request contained
64,176
input tokens, confirming that tier assignment.
The Anthropic estimates use $5/$25 per million input/output tokens for Opus 5
and $10/$50 for Fable 5, with five-minute cache writes at 125%, one-hour
writes at 200%, and cache reads at 10% of the input rate. Promotions, taxes,
contracts, and provider invoices are outside this reconstruction.

Cost values apply published provider rates to native prompt, cache-creation, cache-read, and output-token fields. They are transparent reconstructions rather than invoices; contractual pricing, promotions, taxes, and service routing can differ.

## Discussion

The results distinguish three properties that a single accuracy number would conflate: visual-mechanical answer quality, run-to-run consistency, and execution reliability. Model ranking should therefore be read together with question-cluster uncertainty, timeout burden, and repeatability. Error concentrations identify whether the next engineering effort should focus on evidence extraction, ratio arithmetic, categorical recognition, or deadline management. The complete audit permits each conclusion to be traced to preserved task and trajectory artifacts.

The study does not estimate the value of MCP. The source packages provide rendered images but no matched STEP, assembly, mesh, or scene asset. Reconstructing geometry from the same images would add a new model and evidence-generation process, so it would not constitute the intended causal treatment. A future MCP study should supply provenance-matched raw assets for every frozen question while holding prompts, scorers, model versions, deadlines, and replication constant.

## Limitations and reproducibility

The benchmark contains only 33 public base questions and uneven question-type counts. Three replicate attempts per model improve stability measurement but do not create 99 independent questions. Provider model identifiers and prices describe the observed services on August 16, 2026 and may change. The expanded plan, task and scoring manifest hashes, BabyVision commit and working-diff fingerprint, Docker image digests, live model probes, runtime lock, run state, offline regrades, statistical tables, and credential scan are preserved with the report.

## Conclusion

This controlled image-only study compares three production model routes on identical public gear evidence with complete operational accounting. The highest strict point estimate was 63.6%, observed for Claude Opus 5; the accompanying confidence intervals, repeatability statistics, error taxonomy, latency, tokens, and cost define the practical strength and uncertainty of that result. The next causal evidence-access experiment remains gated on matched raw CAD or scene assets.

## References

UniPat-AI. *BabyVision-v2 evaluation pipeline*. https://github.com/UniPat-AI/BabyVision-v2

AxioForge AI. *Gear assemblies QA repository*. https://github.com/axioforgeai/gear-assemblies-qa

Alibaba Cloud Model Studio. *Model pricing*. https://www.alibabacloud.com/help/en/model-studio/model-pricing

Alibaba Cloud Model Studio. *Context cache billing*. https://www.alibabacloud.com/help/en/model-studio/context-cache

Anthropic. *Claude pricing documentation*. https://platform.claude.com/docs/en/about-claude/pricing

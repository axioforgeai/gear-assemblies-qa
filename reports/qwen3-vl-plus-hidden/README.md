# Qwen3-VL Plus Hidden Gear Assemblies Evaluation

[View HTML](index.html) · [Download PDF](qwen3_vl_plus_hidden_evaluation_report.pdf) · [Incorrect-answer audit](incorrect-answer-audit.md) · [Audit CSV](incorrect-answer-audit.csv)

## Abstract

This blinded evaluation tested qwen3-vl-plus on 28 source-hidden packages, each represented by one question and six CAD views with configured exterior components concealed. The hidden answer key remained local and was not transmitted. The model answered 8 of 28 questions correctly, for 28.57% accuracy and 71.43% error. The 95% Wilson interval for accuracy was 15.3-47.1%. The run consumed 116,838 tokens and corresponds to a published-list-price estimate of USD 0.016984108.

## Methods

The source was repository commit 360772e84d93f63010c806fc0faf21654bb8c4fc. Only the 28 directories matching ModelNN_NN_Hidden inside the source hidden directory were staged. Each request used the exact package question and six referenced views, temperature 0, a 128-token output limit, non-streaming output, and thinking disabled through https://dashscope-us.aliyuncs.com/compatible-mode/v1. The user explicitly authorized transmission of the staged hidden prompts and images to Alibaba Cloud. Ground truth remained local. Predictions and answers were handed to separate blind agents. Numeric scoring required one number within tolerance 1e-9; the discrete item used normalized exact matching.

The descriptive question taxonomy, accuracy, error rate, Wilson intervals, numeric error magnitudes, and provider-token accounting matched the base evaluation. Mean absolute percentage error excluded a zero-reference answer. The paired analysis matched each hidden identifier to its base counterpart and separately reported the 26 pairs whose ground-truth target did not change.

## Results

| Question type | n | Correct | Accuracy | Error rate | 95% Wilson CI | MAE | MAPE |
|---|---:|---:|---:|---:|---:|---:|---:|
| Transmission ratio | 8 | 1 | 12.50% | 87.50% | 2.2-47.1% | 5.475 | 40.65% |
| Gear tooth count | 11 | 0 | 0.00% | 100.00% | 0.0-25.9% | 16.364 | 38.75% |
| Component count | 8 | 6 | 75.00% | 25.00% | 40.9-92.9% | 0.375 | 17.86% |
| Axis angle | 0 | n/a | n/a | n/a | n/a | n/a | n/a |
| Gear type | 1 | 1 | 100.00% | 0.00% | 20.7-100.0% | n/a | n/a |

The 27 numeric items produced 15 underestimates, 5 overestimates, and 7 exact answers. Every tooth-count item was wrong. One of eight transmission ratios was correct, six of eight component counts were correct, and the single gear-type classification was correct. No hidden axis-angle package existed.

## Paired base comparison

| Question type | Paired n | Base correct | Hidden correct | Accuracy difference |
|---|---:|---:|---:|---:|
| Transmission ratio | 8 | 0/8 | 1/8 | +12.50 pp |
| Gear tooth count | 11 | 0/11 | 0/11 | +0.00 pp |
| Component count | 8 | 4/8 | 6/8 | +25.00 pp |
| Gear type | 1 | 0/1 | 1/1 | +100.00 pp |

Across all 28 matched identifiers, the paired base subset had 4/28 correct and the hidden run had 8/28 correct. Four pairs were correct only in the hidden run, none were correct only in the base run, four were correct in both, and 20 were wrong in both. Two identifiers had intentionally changed hidden answers. Among the 26 same-target pairs, the base run had 3/26 correct and the hidden run had 6/26 correct. Three same-target pairs improved and none regressed; the exact two-sided McNemar p-value was 0.25, so the data do not establish a visibility benefit.

## Token and cost accounting

Provider records contained 116,624 prompt tokens, including 113,736 image tokens and 2,888 text tokens, plus 214 completion tokens. No cached tokens were reported. All requests stayed below 32K input tokens. At published US or Global list rates of USD 0.143 per million input tokens and USD 1.434 per million output tokens, the estimate is USD 0.016677232 for input and USD 0.000306876 for output, totaling USD 0.016984108. This is not a verified invoice.

## Discussion and limitations

The hidden run remained poor at exact tooth enumeration and transmission-ratio inference but performed better on component counts and the single categorical item. Its descriptive advantage over the paired base subset is counterintuitive, yet two targets changed, only three same-target pairs were discordant in the improving direction, and no repeated trials were performed. The evaluation used one alias, one prompt, one run, one commit, and exact-match grading with reasoning suppressed. Retry counts were not persisted, and error mechanisms cannot be decomposed from direct answers.

## References

[1] Alibaba Cloud. Qwen-VL compatible with OpenAI. https://www.alibabacloud.com/help/en/model-studio/qwen-vl-compatible-with-openai

[2] Alibaba Cloud. Model Studio model pricing. https://www.alibabacloud.com/help/en/model-studio/model-pricing

[3] Alibaba Cloud. API endpoint. https://www.alibabacloud.com/help/en/model-studio/base-url

[4] axioforgeai. gear-assemblies-qa, commit 360772e84d93f63010c806fc0faf21654bb8c4fc. https://github.com/axioforgeai/gear-assemblies-qa/tree/360772e84d93f63010c806fc0faf21654bb8c4fc

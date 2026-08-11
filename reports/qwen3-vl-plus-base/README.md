# Qwen3-VL Plus Gear Assemblies Evaluation

[View HTML](index.html) · [Download PDF](qwen3_vl_plus_comprehensive_evaluation_report.pdf) · [Incorrect-answer audit](incorrect-answer-audit.md) · [Audit CSV](incorrect-answer-audit.csv)

## Abstract

This blinded evaluation tested qwen3-vl-plus on 33 non-hidden base packages, each represented by one question and six CAD views. The model answered 5 of 33 questions correctly, for 15.15% accuracy and 84.85% error. The 95% Wilson interval for accuracy was 6.7-30.9%. The run consumed 136,043 tokens and corresponds to a published-list-price estimate of USD 0.019766571.

## Methods

The source was repository commit 360772e84d93f63010c806fc0faf21654bb8c4fc. Only top-level ModelNN_QANN directories were staged. Hidden packages, dot-directories, ground truth, and repository-level files were excluded. Each request used six views, temperature 0, a 128-token output limit, and thinking disabled through https://dashscope-us.aliyuncs.com/compatible-mode/v1. Predictions and answers were handed to separate blind agents. Numeric scoring required one number within tolerance 1e-9; the discrete item used normalized exact matching.

The question taxonomy was descriptive and post hoc. Accuracy and error rates were computed per category, with Wilson intervals for binomial uncertainty. Numeric categories also received mean absolute and mean absolute percentage error summaries.

## Results

| Question type | n | Correct | Accuracy | Error rate | 95% Wilson CI | MAE | MAPE |
|---|---:|---:|---:|---:|---:|---:|---:|
| Transmission ratio | 10 | 0 | 0.00% | 100.00% | 0.0-27.8% | 7.735 | 53.72% |
| Gear tooth count | 13 | 0 | 0.00% | 100.00% | 0.0-22.8% | 18.077 | 38.15% |
| Component count | 8 | 4 | 50.00% | 50.00% | 21.5-78.5% | 0.875 | 26.04% |
| Axis angle | 1 | 1 | 100.00% | 0.00% | 20.7-100.0% | 0.000 | 0.00% |
| Gear type | 1 | 0 | 0.00% | 100.00% | 0.0-79.3% | n/a | n/a |

The 32 numeric items produced 21 underestimates, 6 overestimates, and 5 exact answers. All transmission-ratio and tooth-count questions were wrong. All three planet-gear quantity questions were correct, while four of five broader inventory questions were wrong.

## Token and cost accounting

Provider records contained 135,801 prompt tokens, including 132,396 image tokens and 3,405 text tokens, plus 242 completion tokens. No cached tokens were reported. All requests stayed below 32K input tokens. At published US or Global list rates of USD 0.143 per million input tokens and USD 1.434 per million output tokens, the estimate is USD 0.019419543 for input and USD 0.000347028 for output, totaling USD 0.019766571. This is not a verified invoice.

## Discussion and limitations

The evaluation shows a sharp separation between salient repeated-object counting and exact mechanical inference. Tooth enumeration and ratio derivation failed across all tested items. The study used one deterministic run, one alias, one prompt, one commit, and no hidden variants. Reasoning was suppressed, so error mechanisms cannot be decomposed.

## References

[1] Alibaba Cloud. Qwen-VL compatible with OpenAI. https://www.alibabacloud.com/help/en/model-studio/qwen-vl-compatible-with-openai

[2] Alibaba Cloud. Model Studio model pricing. https://www.alibabacloud.com/help/en/model-studio/model-pricing

[3] Alibaba Cloud. API endpoint. https://www.alibabacloud.com/help/en/model-studio/base-url

[4] axioforgeai. gear-assemblies-qa, commit 360772e84d93f63010c806fc0faf21654bb8c4fc. https://github.com/axioforgeai/gear-assemblies-qa/tree/360772e84d93f63010c806fc0faf21654bb8c4fc

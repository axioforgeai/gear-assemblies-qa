# Qwen3-VL Plus Hidden Incorrect-Answer Audit

[Evaluation report](README.md) · [View HTML](incorrect-answer-audit.html) · [Download PDF](qwen3_vl_plus_hidden_incorrect_answer_audit.pdf) · [Audit CSV](incorrect-answer-audit.csv)

This companion audit lists all 20 incorrect hidden-package answers. Signed error is prediction minus correct answer.

## Transmission ratio

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model02_01_Hidden | Other train or gearbox ratio | what is the transmission ratio of the gear train? | 12 | 16 | -4.00; -25.0% | The transmission ratio was underestimated by 4 (25.0% of the correct value). |
| Model03_01_Hidden | Planetary ratio | what is the transmission ratio of this planetary gear train? Assume the sun gear is the input, ring gear is fixed. And carrier is the output. | 3 | 6 | -3.00; -50.0% | The transmission ratio was underestimated by 3 (50.0% of the correct value). |
| Model04_01_Hidden | Planetary ratio | what is the transmission ratio of this planetary gear? Assume sun input, ring fixed, carrier output. Round up to the nearest integer. | 4 | 5 | -1.00; -20.0% | The transmission ratio was underestimated by 1 (20.0% of the correct value). |
| Model06_04_Hidden | Other train or gearbox ratio | What is the transmission ratio of this gear box? | 3 | 2 | +1.00; +50.0% | The transmission ratio was overestimated by 1 (50.0% of the correct value). |
| Model08_03_Hidden | Other train or gearbox ratio | What the transmission ratio of this gear box? Round to the first decimal place. | 5.0 | 3.6 | +1.40; +38.9% | The transmission ratio was overestimated by 1.4 (38.9% of the correct value). |
| Model09_02_Hidden | Other train or gearbox ratio | What is the transmission ratio of the gear box? Round to the first decimal place. | 3.0 | 5.4 | -2.40; -44.4% | The transmission ratio was underestimated by 2.4 (44.4% of the correct value). |
| Model10_01_Hidden | Other train or gearbox ratio | what is the transmission ratio of this gear train? | 1 | 32 | -31.00; -96.9% | The transmission ratio was underestimated by 31 (96.9% of the correct value). |

## Gear tooth count

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model03_02_Hidden | Ring gear teeth | What is the tooth number of the ring gear? | 72 | 80 | -8.00; -10.0% | The tooth count was underestimated by 8 (10.0% of the correct value). |
| Model03_03_Hidden | Sun gear teeth | What is tooth number of the sun gear? | 12 | 20 | -8.00; -40.0% | The tooth count was underestimated by 8 (40.0% of the correct value). |
| Model04_02_Hidden | Ring gear teeth | What is the tooth number of the ring gear? | 48 | 65 | -17.00; -26.2% | The tooth count was underestimated by 17 (26.2% of the correct value). |
| Model04_03_Hidden | Sun gear teeth | What is tooth number of the sun gear? | 24 | 16 | +8.00; +50.0% | The tooth count was overestimated by 8 (50.0% of the correct value). |
| Model04_04_Hidden | Planet gear teeth | What is the tooth number of planet gear? | 24 | 34 | -10.00; -29.4% | The tooth count was underestimated by 10 (29.4% of the correct value). |
| Model06_02_Hidden | Smaller gear teeth | What the tooth number of the smaller gear? | 12 | 25 | -13.00; -52.0% | The tooth count was underestimated by 13 (52.0% of the correct value). |
| Model06_03_Hidden | Larger gear teeth | What is the tooth number of the larger gear? | 30 | 50 | -20.00; -40.0% | The tooth count was underestimated by 20 (40.0% of the correct value). |
| Model08_01_Hidden | Smaller gear teeth | what the tooth number of the smaller gear? | 12 | 29 | -17.00; -58.6% | The tooth count was underestimated by 17 (58.6% of the correct value). |
| Model08_02_Hidden | Larger gear teeth | what the tooth number of the larger gear? | 60 | 105 | -45.00; -42.9% | The tooth count was underestimated by 45 (42.9% of the correct value). |
| Model09_01_Hidden | Sun gear teeth | What is the tooth number of the sun gear? | 24 | 17 | +7.00; +41.2% | The tooth count was overestimated by 7 (41.2% of the correct value). |
| Model09_03_Hidden | Ring gear teeth | What is the tooth number of the ring gear? | 48 | 75 | -27.00; -36.0% | The tooth count was underestimated by 27 (36.0% of the correct value). |

## Component count

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model06_01_Hidden | Assembly inventory count | How many bearings are there is in this gearbox? | 4 | 2 | +2.00; +100.0% | The component count was overestimated by 2 (100.0% of the correct value). |
| Model07_01_Hidden | Assembly inventory count | How many gears are there in this gear box? | 3 | 4 | -1.00; -25.0% | The component count was underestimated by 1 (25.0% of the correct value). |

## Interpretation limits

The diagnostics describe answer differences, not internal model mechanisms. Direct-answer generation suppressed reasoning, so the audit cannot distinguish visibility, perception, enumeration, kinematic setup, arithmetic, and output-selection errors.

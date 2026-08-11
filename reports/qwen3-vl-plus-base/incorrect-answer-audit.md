# Qwen3-VL Plus Incorrect-Answer Audit

[Evaluation report](README.md) · [View HTML](incorrect-answer-audit.html) · [Download PDF](qwen3_vl_plus_incorrect_answer_audit.pdf) · [Audit CSV](incorrect-answer-audit.csv)

This companion audit lists all 28 incorrect answers. Signed error is prediction minus correct answer.

## Transmission ratio

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model01_QA01 | Worm train ratio | what is the transmission ratio of this gear train? Assume the worm is a single-start. | 10 | 30 | -20.00; -66.7% | The transmission ratio was underestimated by 20 (66.7% of the correct value). |
| Model02_QA01 | Other train or gearbox ratio | what is the transmission ratio of the gear train? | 1 | 16 | -15.00; -93.8% | The transmission ratio was underestimated by 15 (93.8% of the correct value). |
| Model03_QA01 | Planetary ratio | what is the transmission ratio of this planetary gear train? Assume the sun gear is the input, ring gear is fixed. And carrier is the output. | 3 | 6 | -3.00; -50.0% | The transmission ratio was underestimated by 3 (50.0% of the correct value). |
| Model04_QA01 | Planetary ratio | what is the transmission ratio of this planetary gear? Assume sun input, ring fixed, carrier output. Round up to the nearest integer. | 4 | 5 | -1.00; -20.0% | The transmission ratio was underestimated by 1 (20.0% of the correct value). |
| Model05_QA03 | Other train or gearbox ratio | what is the transmission ratio of this gear train? | 5 | 4.65 | +0.35; +7.5% | The transmission ratio was overestimated by 0.35 (7.5% of the correct value). |
| Model06_QA04 | Other train or gearbox ratio | What is the transmission ratio of this gear box? | 3 | 2 | +1.00; +50.0% | The transmission ratio was overestimated by 1 (50.0% of the correct value). |
| Model07_QA03 | Other train or gearbox ratio | What is the transmission ratio of this gear train? | 1 | 12 | -11.00; -91.7% | The transmission ratio was underestimated by 11 (91.7% of the correct value). |
| Model08_QA03 | Other train or gearbox ratio | What the transmission ratio of this gear box? Round to the first decimal place. | 2.0 | 3.6 | -1.60; -44.4% | The transmission ratio was underestimated by 1.6 (44.4% of the correct value). |
| Model09_QA02 | Other train or gearbox ratio | What is the transmission ratio of the gear box? Round to the first decimal place. | 3.0 | 5.4 | -2.40; -44.4% | The transmission ratio was underestimated by 2.4 (44.4% of the correct value). |
| Model10_QA01 | Other train or gearbox ratio | what is the transmission ratio of this gear train? | 10 | 32 | -22.00; -68.8% | The transmission ratio was underestimated by 22 (68.8% of the correct value). |

## Gear tooth count

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model03_QA02 | Ring gear teeth | What is the tooth number of the ring gear? | 72 | 80 | -8.00; -10.0% | The tooth count was underestimated by 8 (10.0% of the correct value). |
| Model03_QA03 | Sun gear teeth | What is tooth number of the sun gear? | 24 | 20 | +4.00; +20.0% | The tooth count was overestimated by 4 (20.0% of the correct value). |
| Model04_QA02 | Ring gear teeth | What is the tooth number of the ring gear? | 48 | 65 | -17.00; -26.2% | The tooth count was underestimated by 17 (26.2% of the correct value). |
| Model04_QA03 | Sun gear teeth | What is tooth number of the sun gear? | 24 | 16 | +8.00; +50.0% | The tooth count was overestimated by 8 (50.0% of the correct value). |
| Model04_QA04 | Planet gear teeth | What is the tooth number of planet gear? | 24 | 34 | -10.00; -29.4% | The tooth count was underestimated by 10 (29.4% of the correct value). |
| Model05_QA01 | Smaller gear teeth | What is the tooth number of the smaller gear? | 12 | 20 | -8.00; -40.0% | The tooth count was underestimated by 8 (40.0% of the correct value). |
| Model05_QA02 | Larger gear teeth | What the tooth number of the larger gear. | 60 | 93 | -33.00; -35.5% | The tooth count was underestimated by 33 (35.5% of the correct value). |
| Model06_QA02 | Smaller gear teeth | What the tooth number of the smaller gear? | 12 | 25 | -13.00; -52.0% | The tooth count was underestimated by 13 (52.0% of the correct value). |
| Model06_QA03 | Larger gear teeth | What is the tooth number of the larger gear? | 24 | 50 | -26.00; -52.0% | The tooth count was underestimated by 26 (52.0% of the correct value). |
| Model08_QA01 | Smaller gear teeth | what the tooth number of the smaller gear? | 12 | 29 | -17.00; -58.6% | The tooth count was underestimated by 17 (58.6% of the correct value). |
| Model08_QA02 | Larger gear teeth | what the tooth number of the larger gear? | 24 | 105 | -81.00; -77.1% | The tooth count was underestimated by 81 (77.1% of the correct value). |
| Model09_QA01 | Sun gear teeth | What is the tooth number of the sun gear? | 24 | 17 | +7.00; +41.2% | The tooth count was overestimated by 7 (41.2% of the correct value). |
| Model09_QA03 | Ring gear teeth | What is the tooth number of the ring gear? | 72 | 75 | -3.00; -4.0% | The tooth count was underestimated by 3 (4.0% of the correct value). |

## Component count

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model02_QA02 | Assembly inventory count | How many support brackets are there in this assembly? | 3 | 6 | -3.00; -50.0% | The component count was underestimated by 3 (50.0% of the correct value). |
| Model06_QA01 | Assembly inventory count | How many bearings are there is in this gearbox? | 4 | 2 | +2.00; +100.0% | The component count was overestimated by 2 (100.0% of the correct value). |
| Model07_QA01 | Assembly inventory count | How many gears are there in this gear box? | 3 | 4 | -1.00; -25.0% | The component count was underestimated by 1 (25.0% of the correct value). |
| Model07_QA02 | Assembly inventory count | How many shafts are there in this gear box? | 2 | 3 | -1.00; -33.3% | The component count was underestimated by 1 (33.3% of the correct value). |

## Gear type

| Package | Subtype | Question | Predicted | Correct | Signed error | Diagnostic |
|---|---|---|---:|---:|---:|---|
| Model08_QA04 | Gear-shape classification | What is the type of the gear shape? Spur, Helical, Bevel or Double Helical or others. | Bevel | Helical | categorical | Classified as Bevel instead of Helical. |

## Interpretation limits

The diagnostics describe answer differences, not internal model mechanisms. Hidden packages were not inspected or evaluated.

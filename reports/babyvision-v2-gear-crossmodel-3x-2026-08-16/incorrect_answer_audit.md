# Complete incorrect-answer audit

Every row is a strict incorrect attempt. Timeouts and malformed final answers are retained as observed outcomes.

| Model | Replicate | Origin | Task | Type | Submitted | Expected | Error category | Exception |
|---|---|---|---|---|---|---|---|---|
| Qwen 3.7 Plus | qwen-run-a | new | Model01_QA01 | transmission_ratio | 20 | 30 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model02_QA01 | transmission_ratio | 3 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model02_QA02 | component_count | 3 | 6 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model02_QA03 | component_count | 12 | 5 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model03_QA02 | tooth_count | 48 | 80 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model03_QA03 | tooth_count | 12 | 20 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model04_QA01 | transmission_ratio | 4 | 5 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model04_QA02 | tooth_count | 48 | 65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model04_QA03 | tooth_count | 9 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model04_QA04 | tooth_count | 18 | 34 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model05_QA01 | tooth_count |  | 20 | operational_timeout | agent_timeout |
| Qwen 3.7 Plus | qwen-run-a | new | Model05_QA02 | tooth_count | 48 | 93 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model05_QA03 | transmission_ratio | 3 | 4.65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model06_QA02 | tooth_count | 12 | 25 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model06_QA03 | tooth_count | 30 | 50 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model07_QA01 | component_count | 3 | 4 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model07_QA02 | component_count | 2 | 3 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model07_QA03 | transmission_ratio | 2 | 12 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model08_QA01 | tooth_count | 10 | 29 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model08_QA02 | tooth_count | 20 | 105 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model08_QA03 | transmission_ratio | 3.0 | 3.6 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model09_QA01 | tooth_count | 12 | 17 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model09_QA02 | transmission_ratio | 5.0 | 5.4 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model09_QA03 | tooth_count | 72 | 75 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-a | new | Model10_QA01 | transmission_ratio | 40 | 32 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model01_QA01 | transmission_ratio | 20 | 30 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model02_QA01 | transmission_ratio | 4 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model02_QA02 | component_count | 3 | 6 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model02_QA03 | component_count | 9 | 5 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model03_QA01 | transmission_ratio | 5 | 6 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model03_QA02 | tooth_count |  | 80 | operational_timeout | agent_timeout |
| Qwen 3.7 Plus | qwen-run-b | new | Model03_QA03 | tooth_count | 12 | 20 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model04_QA02 | tooth_count | 36 | 65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model04_QA03 | tooth_count | 9 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model04_QA04 | tooth_count | 18 | 34 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model05_QA01 | tooth_count | 12 | 20 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model05_QA02 | tooth_count | 48 | 93 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model05_QA03 | transmission_ratio | 3 | 4.65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model06_QA02 | tooth_count | 12 | 25 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model06_QA03 | tooth_count | 18 | 50 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model07_QA01 | component_count | 3 | 4 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model07_QA02 | component_count | 2 | 3 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model07_QA03 | transmission_ratio | 2 | 12 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model08_QA03 | transmission_ratio | 20.0 | 3.6 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model09_QA01 | tooth_count | 10 | 17 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model09_QA02 | transmission_ratio | 6.0 | 5.4 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model09_QA03 | tooth_count | 36 | 75 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-b | new | Model10_QA01 | transmission_ratio | 30 | 32 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model01_QA01 | transmission_ratio | 20 | 30 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model02_QA01 | transmission_ratio | 4 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model02_QA03 | component_count | 12 | 5 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model03_QA03 | tooth_count | 18 | 20 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model04_QA02 | tooth_count | 60 | 65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model04_QA03 | tooth_count | 12 | 16 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model04_QA04 | tooth_count | 16 | 34 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model05_QA01 | tooth_count | 12 | 20 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model05_QA02 | tooth_count | 60 | 93 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model05_QA03 | transmission_ratio | 4 | 4.65 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model06_QA02 | tooth_count | 12 | 25 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model06_QA03 | tooth_count | 30 | 50 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model07_QA02 | component_count | 2 | 3 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model07_QA03 | transmission_ratio | 4 | 12 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model08_QA01 | tooth_count |  | 29 | operational_timeout | agent_timeout |
| Qwen 3.7 Plus | qwen-run-c | new | Model08_QA02 | tooth_count | 20 | 105 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model08_QA03 | transmission_ratio |  | 3.6 | operational_other | api_error |
| Qwen 3.7 Plus | qwen-run-c | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model09_QA01 | tooth_count | 12 | 17 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model09_QA02 | transmission_ratio | 5.0 | 5.4 | numeric_underestimate | none |
| Qwen 3.7 Plus | qwen-run-c | new | Model09_QA03 | tooth_count |  | 75 | operational_timeout | agent_timeout |
| Qwen 3.7 Plus | qwen-run-c | new | Model10_QA01 | transmission_ratio | 30 | 32 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-a | new | Model02_QA01 | transmission_ratio |  | 16 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-a | new | Model02_QA03 | component_count | 9 | 5 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-a | new | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-a | new | Model04_QA01 | transmission_ratio |  | 5 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-a | new | Model04_QA04 | tooth_count | 24 | 34 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-a | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-a | new | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-a | new | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-a | new | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-a | new | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-a | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Opus 5 | opus-run-a | new | Model10_QA01 | transmission_ratio |  | 32 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-b | new | Model02_QA01 | transmission_ratio |  | 16 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-b | new | Model02_QA03 | component_count | 13 | 5 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-b | new | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-b | new | Model04_QA01 | transmission_ratio | 6 | 5 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-b | new | Model04_QA04 | tooth_count | 24 | 34 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-b | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-b | new | Model06_QA04 | transmission_ratio |  | 2 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-b | new | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-b | new | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-b | new | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-b | new | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-b | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Opus 5 | opus-run-c | new | Model02_QA01 | transmission_ratio |  | 16 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-c | new | Model02_QA03 | component_count | 9 | 5 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-c | new | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-c | new | Model04_QA04 | tooth_count | 24 | 34 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-c | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Opus 5 | opus-run-c | new | Model06_QA02 | tooth_count |  | 25 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-c | new | Model06_QA04 | transmission_ratio |  | 2 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-c | new | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-c | new | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-c | new | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Opus 5 | opus-run-c | new | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Opus 5 | opus-run-c | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Fable 5 | fable-run-a | reused | Model02_QA01 | transmission_ratio |  | 16 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-a | reused | Model02_QA03 | component_count | 9 | 5 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model04_QA01 | transmission_ratio | 6 | 5 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model04_QA04 | tooth_count | 24 | 34 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model05_QA01 | tooth_count | 19 | 20 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model06_QA04 | transmission_ratio |  | 2 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-a | reused | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-a | reused | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-a | reused | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-a | reused | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Fable 5 | fable-run-a | reused | Model10_QA01 | transmission_ratio | 31 | 32 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model02_QA01 | transmission_ratio |  | 16 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model02_QA03 | component_count | 12 | 5 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model04_QA04 | tooth_count | 24 | 34 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model06_QA02 | tooth_count |  | 25 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model06_QA03 | tooth_count | 51 | 50 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model06_QA04 | transmission_ratio |  | 2 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-b | reused | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-b | reused | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Fable 5 | fable-run-b | reused | Model10_QA01 | transmission_ratio |  | 32 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-c | new | Model02_QA03 | component_count | 12 | 5 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-c | new | Model03_QA03 | tooth_count | 16 | 20 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-c | new | Model04_QA01 | transmission_ratio | 6 | 5 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-c | new | Model04_QA04 | tooth_count |  | 34 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-c | new | Model06_QA01 | component_count | 4 | 2 | numeric_overestimate | none |
| Claude Fable 5 | fable-run-c | new | Model06_QA03 | tooth_count | 48 | 50 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-c | new | Model07_QA03 | transmission_ratio |  | 12 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-c | new | Model08_QA01 | tooth_count | 12 | 29 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-c | new | Model08_QA02 | tooth_count | 12 | 105 | numeric_underestimate | none |
| Claude Fable 5 | fable-run-c | new | Model08_QA03 | transmission_ratio |  | 3.6 | operational_timeout | agent_timeout |
| Claude Fable 5 | fable-run-c | new | Model08_QA04 | gear_type | Spur | Helical | categorical_mismatch | none |
| Claude Fable 5 | fable-run-c | new | Model10_QA01 | transmission_ratio |  | 32 | operational_timeout | agent_timeout |

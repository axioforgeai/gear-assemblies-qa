#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(ROOT, "index.html");

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }
    if (character === '"') quoted = true;
    else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else field += character;
  }
  if (field.length || row.length) rows.push([...row, field.replace(/\r$/, "")]);
  const [headers = [], ...dataRows] = rows;
  return dataRows
    .filter((dataRow) => dataRow.some((value) => value.trim()))
    .map((dataRow) => Object.fromEntries(headers.map((header, index) => [header, dataRow[index] || ""])));
}

function packageId(answer) {
  return `${answer.model_id}_${answer.qa_id}`;
}

function compareAnswers(left, right) {
  return left.model_id.localeCompare(right.model_id, undefined, { numeric: true })
    || left.qa_id.localeCompare(right.qa_id, undefined, { numeric: true });
}

function loadQuestions() {
  const answers = parseCsv(readFileSync(join(ROOT, "ground_truth_answers.csv"), "utf8")).sort(compareAnswers);
  const packageDirectories = new Set(readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^Model\d{2}_QA\d{2}$/.test(entry.name))
    .map((entry) => entry.name));
  return answers.map((answer) => {
    const id = packageId(answer);
    if (!packageDirectories.has(id)) throw new Error(`Answer key references missing package: ${id}`);
    const prompt = JSON.parse(readFileSync(join(ROOT, id, "prompt.json"), "utf8"));
    if (!prompt.question || !Array.isArray(prompt.reference_images)) throw new Error(`Invalid prompt package: ${id}`);
    return {
      id,
      modelId: answer.model_id,
      qaId: answer.qa_id,
      question: prompt.question,
      answer: answer.gt_answer,
      images: prompt.reference_images.map((image) => ({
        label: image.label,
        path: `${id}/${image.path}`,
      })),
    };
  });
}

function documentHtml(questions) {
  const data = JSON.stringify(questions).replaceAll("<", "\\u003c");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Gear Assemblies QA Bank</title>
  <style>
    :root {
      color: #17211d;
      background: #edf0eb;
      font-family: "IBM Plex Sans", "Segoe UI", Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
    }

    * { box-sizing: border-box; }

    body { margin: 0; background: #edf0eb; }

    header {
      border-bottom: 1px solid #c8d0c8;
      background: #fbfcf9;
    }

    .header-inner,
    main {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
    }

    .header-inner { padding: 28px 0 24px; }

    .eyebrow,
    .package-id,
    .count {
      margin: 0;
      color: #4d6058;
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    h1,
    h2,
    h3,
    p { margin-top: 0; }

    h1 {
      margin: 4px 0 0;
      color: #132019;
      font-size: 2rem;
      line-height: 1.15;
      letter-spacing: 0;
    }

    main { padding: 24px 0 48px; }

    .toolbar {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(180px, 240px);
      gap: 12px;
      align-items: end;
      padding-bottom: 24px;
      border-bottom: 1px solid #c8d0c8;
    }

    label {
      display: grid;
      gap: 6px;
      color: #385148;
      font-size: 0.875rem;
      font-weight: 700;
    }

    input,
    select {
      width: 100%;
      min-height: 44px;
      border: 1px solid #9eada3;
      border-radius: 4px;
      background: #ffffff;
      color: #17211d;
      font: inherit;
      padding: 8px 12px;
    }

    input:focus,
    select:focus,
    summary:focus-visible {
      outline: 3px solid #d45d34;
      outline-offset: 2px;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
      padding: 20px 0 4px;
    }

    .summary-row h2 {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.25;
    }

    .model-group { padding-top: 28px; }

    .model-heading {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .model-heading h2 { margin: 0; font-size: 1.25rem; }

    .question-list { display: grid; gap: 12px; }

    .question {
      border: 1px solid #c8d0c8;
      border-radius: 6px;
      background: #ffffff;
      padding: 20px;
    }

    .question-topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 12px;
    }

    .question h3 {
      max-width: 78ch;
      margin-bottom: 20px;
      color: #17211d;
      font-size: 1.0625rem;
      font-weight: 650;
      line-height: 1.45;
    }

    .answer {
      display: grid;
      grid-template-columns: max-content minmax(0, 1fr);
      gap: 12px;
      align-items: start;
      border-left: 4px solid #2b7767;
      padding: 10px 12px;
      background: #edf5f0;
    }

    .answer-label {
      color: #255c50;
      font-size: 0.8125rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .answer-value {
      overflow-wrap: anywhere;
      color: #17211d;
      font-family: "IBM Plex Mono", Consolas, monospace;
      font-weight: 700;
    }

    details { margin-top: 18px; }

    summary {
      width: fit-content;
      min-height: 44px;
      cursor: pointer;
      color: #1f6456;
      font-weight: 700;
      padding: 6px 0;
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 12px;
    }

    figure { margin: 0; }

    figure img {
      display: block;
      width: 100%;
      aspect-ratio: 785 / 856;
      border: 1px solid #c8d0c8;
      border-radius: 4px;
      background: #101917;
      object-fit: contain;
    }

    figcaption {
      padding-top: 6px;
      color: #4d6058;
      font-size: 0.8125rem;
    }

    .empty {
      margin: 28px 0 0;
      color: #4d6058;
    }

    @media (max-width: 680px) {
      .header-inner,
      main { width: min(100% - 24px, 1180px); }
      .header-inner { padding: 20px 0; }
      h1 { font-size: 1.625rem; }
      .toolbar { grid-template-columns: 1fr; }
      .summary-row,
      .model-heading,
      .question-topline { align-items: flex-start; flex-direction: column; gap: 6px; }
      .question { padding: 16px; }
      .image-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-inner">
      <p class="eyebrow">CAD reference dataset</p>
      <h1>Gear Assemblies QA Bank</h1>
    </div>
  </header>
  <main>
    <section class="toolbar" aria-label="Question filters">
      <label>Search questions or answers
        <input id="search" type="search" autocomplete="off" placeholder="Search the QA bank">
      </label>
      <label>Model
        <select id="model-filter"><option value="">All models</option></select>
      </label>
    </section>
    <div class="summary-row">
      <h2>Questions</h2>
      <p id="count" class="count" aria-live="polite"></p>
    </div>
    <div id="questions"></div>
  </main>
  <script>
    const questions = ${data};
    const search = document.querySelector("#search");
    const modelFilter = document.querySelector("#model-filter");
    const count = document.querySelector("#count");
    const container = document.querySelector("#questions");

    const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
    })[character]);

    const modelIds = [...new Set(questions.map((question) => question.modelId))];
    modelFilter.insertAdjacentHTML("beforeend", modelIds.map((modelId) =>
      '<option value="' + escapeHtml(modelId) + '">' + escapeHtml(modelId) + '</option>').join(""));

    function imagesHtml(question) {
      return question.images.map((image) => '<figure>'
        + '<img src="' + encodeURI(image.path) + '" alt="' + escapeHtml(question.id) + ': ' + escapeHtml(image.label) + '" loading="lazy">'
        + '<figcaption>' + escapeHtml(image.label) + '</figcaption>'
        + '</figure>').join("");
    }

    function questionHtml(question) {
      return '<article class="question">'
        + '<div class="question-topline"><p class="package-id">' + escapeHtml(question.id) + '</p></div>'
        + '<h3>' + escapeHtml(question.question) + '</h3>'
        + '<div class="answer"><span class="answer-label">GT answer</span><span class="answer-value">' + escapeHtml(question.answer) + '</span></div>'
        + '<details><summary>Reference views</summary><div class="image-grid">' + imagesHtml(question) + '</div></details>'
        + '</article>';
    }

    function render() {
      const query = search.value.trim().toLocaleLowerCase();
      const selectedModel = modelFilter.value;
      const filtered = questions.filter((question) => {
        const searchable = (question.id + " " + question.question + " " + question.answer).toLocaleLowerCase();
        return (!selectedModel || question.modelId === selectedModel) && (!query || searchable.includes(query));
      });
      count.textContent = filtered.length + " of " + questions.length;
      if (!filtered.length) {
        container.innerHTML = '<p class="empty">No matching questions.</p>';
        return;
      }
      const groups = new Map();
      for (const question of filtered) {
        const group = groups.get(question.modelId) || [];
        group.push(question);
        groups.set(question.modelId, group);
      }
      container.innerHTML = [...groups].map(([modelId, entries]) => '<section class="model-group">'
        + '<div class="model-heading"><h2>' + escapeHtml(modelId) + '</h2><p class="count">' + entries.length + ' questions</p></div>'
        + '<div class="question-list">' + entries.map(questionHtml).join("") + '</div>'
        + '</section>').join("");
    }

    search.addEventListener("input", render);
    modelFilter.addEventListener("change", render);
    render();
  </script>
</body>
</html>`;
}

const questions = loadQuestions();
writeFileSync(OUTPUT, documentHtml(questions), "utf8");
console.log(`Wrote ${OUTPUT} with ${questions.length} questions.`);

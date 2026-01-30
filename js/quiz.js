const appRoot = document.getElementById('app-root');

let quizState = {
  topic: null,
  questions: [],
  current: 0,
  answers: [],
  score: 0,
  timer: null,
  timeRemaining: 60,
  isActive: false,
  finished: false
};

function renderTopicSelection() {
  appRoot.innerHTML = `
    <div class="text-center mb-5">
      <h1 class="fw-bold mb-2 app-title">Web Developer Quiz</h1>
      <div class="mb-4 app-subtitle">Test your knowledge and improve your skills</div>
    </div>
    <div class="row justify-content-center g-4">
      <div class="col-12 col-md-4 d-flex">
        <div class="flex-fill topic-card p-4 d-flex flex-column align-items-center justify-content-between">
          <div class="mb-3 topic-icon"><i class="fa-solid fa-code"></i></div>
          <div class="text-center">
            <h2 class="fw-bold mb-2 topic-title">HTML</h2>
            <div class="mb-4 mt-3 mx-2">Test your knowledge of HTML structure and elements</div>
          </div>
          <button class="btn btn-accent fw-semibold px-4 py-2 mt-auto" onclick="startQuiz('HTML')">9 Questions</button>
        </div>
      </div>
      <div class="col-12 col-md-4 d-flex">
        <div class="flex-fill topic-card p-4 d-flex flex-column align-items-center justify-content-between">
          <div class="mb-3 topic-icon">
            <i class="fa-solid fa-palette"></i>
          </div>
          <div class="text-center">
            <h2 class="fw-bold mb-2 topic-title">CSS</h2>
            <div class="mb-4 mt-3 mx-2">Challenge yourself with CSS styling and layout</div>
          </div>
          <button class="btn btn-accent fw-semibold px-4 py-2 mt-auto" onclick="startQuiz('CSS')">9 Questions</button>
        </div>
      </div>
      <div class="col-12 col-md-4 d-flex">
        <div class="flex-fill topic-card p-4 d-flex flex-column align-items-center justify-content-between">
          <div class="mb-3 topic-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <div class="text-center">
            <h2 class="fw-bold mb-2 topic-title">JavaScript</h2>
            <div class="mb-4 mt-3 mx-2">Explore JavaScript fundamentals and concepts</div>
          </div>
          <button class="btn btn-accent fw-semibold px-4 py-2 mt-auto" onclick="startQuiz('JavaScript')">9 Questions</button>
        </div>
      </div>
    </div>
  `;
}

function startQuiz(topic) {
  const questions = shuffle(getQuestionsByTopic(topic));
  quizState = {
    ...quizState,
    topic,
    questions,
    current: 0,
    answers: Array(questions.length).fill(null),
    score: 0,
    isActive: true,
    finished: false
  };
  startTimer();
  renderQuiz();
}

function startTimer() {
  if (quizState.timer) quizState.timer.stop();
  quizState.timer = new Timer(60, updateTimer, handleTimeout);
  quizState.timer.start();
}

function updateTimer(time) {
  quizState.timeRemaining = time;
  const bar = document.getElementById('timer-bar');
  if (bar) {
    bar.style.width = `${(time / 60) * 100}%`;
    bar.className = 'timer-bar ' + (time <= 10 ? 'warning' : 'normal');
  }
  const label = document.getElementById('timer-label');
  if (label) label.textContent = `${time}s`;
}

function handleTimeout() {
  handleAnswer(null); // Skipped
}


function handleAnswer(optionIdx) {
  if (!quizState.isActive || quizState.finished) return;
  quizState.answers[quizState.current] = optionIdx;
  // Update score only if correct and not already counted
  const q = quizState.questions[quizState.current];
  if (optionIdx === q.correctAnswer) {
    quizState.score = quizState.answers.reduce((acc, ans, idx) =>
      ans === quizState.questions[idx].correctAnswer ? acc + 1 : acc, 0);
  } else {
    quizState.score = quizState.answers.reduce((acc, ans, idx) =>
      ans === quizState.questions[idx].correctAnswer ? acc + 1 : acc, 0);
  }
  renderQuiz();  // Re-render to highlight the selected answer
}


function finishQuiz() {
  quizState.isActive = false;
  quizState.finished = true;
  renderResults();
}


function renderQuiz() {
  const q = quizState.questions[quizState.current];
  const total = quizState.questions.length;
  const progress = quizState.current + 1;
  const percentDone = (progress / total) * 100;
  const timerPercent = (quizState.timeRemaining / 60) * 100;
  const timerBarClass = quizState.timeRemaining > 10 ? 'normal' : 'warning';

  appRoot.innerHTML = `
    <div class="row justify-content-center g-4">
      <div class="col-12">
        <div class="card shadow-sm mb-4 card-surface">
          <div class="card-body d-flex flex-wrap align-items-center justify-content-between" style="gap:1rem;">
            <div>
              <div class="fw-bold top-card-title">${quizState.topic} Quiz</div>
              <div class="muted-small">Progress: ${progress} of ${total}</div>
            </div>
            <div class="flex-grow-1 mx-4" style="min-width:200px;">
              <div class="d-flex align-items-center mb-1 muted-text">
                <svg width="20" height="20" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="me-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Time Remaining
                <span class="ms-2 fw-bold" id="timer-label">${quizState.timeRemaining}s</span>
              </div>
              <div class="progress" style="height:8px; border-radius:4px; background:transparent;">
                <div id="timer-bar" class="timer-bar ${timerBarClass}" role="progressbar" style="width:${timerPercent}%;"></div>
              </div>
            </div>
            <div class="ms-auto">
              <a href="#" onclick="renderTopicSelection(); if(quizState.timer)quizState.timer.stop(); return false;" class="muted-text" style="text-decoration:none; font-weight:500;">Back to Topics</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="card shadow-sm card-surface">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="muted-text">Question ${progress} of ${total}</div>
              <div>
                ${quizState.questions.map((_, i) => `
                  <span class="progress-dot ${i === quizState.current ? 'active' : ''} ${quizState.answers[i] !== null ? 'answered' : ''}"></span>
                `).join('')}
              </div>
            </div>
            <div class="mb-4">
              <span class="fw-bold question-text">${q.question}</span>
            </div>
            <div class="mb-4">
              ${q.options.map((opt, i) => {
    const selected = quizState.answers[quizState.current] === i;
    return `
                  <button class="answer-btn d-flex align-items-center w-100 mb-3 ${selected ? 'selected' : ''}" onclick="handleAnswer(${i})">
                    <span class="option-bullet">${String.fromCharCode(65 + i)}</span>
                    <span class="flex-fill">${opt}</span>
                  </button>
                `;
  }).join('')}
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center mt-4">
              <button class="btn btn-secondary nav-btn" ${quizState.current === 0 ? 'disabled' : ''} onclick="goToQuestion(${quizState.current - 1})">Previous</button>
              <button class="btn btn-primary nav-btn" ${quizState.current === quizState.questions.length - 1 ? 'disabled' : ''} onclick="goToQuestion(${quizState.current + 1})">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 mt-4 mt-lg-0">
        <div class="card shadow-sm card-surface">
          <div class="card-body">
            <div class="fw-bold mb-3" style="font-size:1.15rem;">Question Navigation</div>
            <div class="mb-4">
              ${quizState.questions.map((_, i) => `
                <button class="btn ${i === quizState.current ? 'btn-primary' : 'btn-outline-light'} question-nav-btn fw-bold me-2 mb-2" onclick="goToQuestion(${i})">${i + 1}</button>
              `).join('')}
            </div>
            <button class="btn btn-danger w-100 fw-bold py-3 mb-2 rounded-10" style="font-size:1.15rem;" onclick="finishQuiz()">Finish Test</button>
            <div class="text-center small-muted">Click to submit and view results</div>
          </div>
        </div>
      </div>
    </div>
  `;
}


function goToQuestion(idx) {
  if (idx < 0 || idx >= quizState.questions.length) return;
  if (quizState.timer) quizState.timer.stop();
  quizState.current = idx;
  startTimer();
  renderQuiz();
}

function renderResults() {
  const total = quizState.questions.length;
  const scorePct = percent(quizState.score, total);
  let color = "text-primary";
  if (scorePct >= 80) color = "text-success";
  else if (scorePct < 50) color = "text-danger";
  appRoot.innerHTML = `
    <div class="text-center mb-4">
      <h2>Quiz Results</h2>
      <div class="display-4 fw-bold ${color}">${scorePct}%</div>
      <div class="mb-2">Score: ${quizState.score} / ${total}</div>
      <button class="btn btn-secondary mt-2" onclick="renderTopicSelection()">Try Another Topic</button>
    </div>
    <div class="card">
      <div class="card-body">
        <h5>Review</h5>
        <ol class="list-group list-group-numbered">
          ${quizState.questions.map((q, i) => {
    const userAns = quizState.answers[i];
    const correct = userAns === q.correctAnswer;
    let ansClass = "";
    if (userAns === null) ansClass = "list-group-item-danger";
    else if (correct) ansClass = "list-group-item-success";
    else ansClass = "list-group-item-danger";
    return `
              <li class="list-group-item ${ansClass}">
                <div><strong>Q${i + 1}:</strong> ${q.question}</div>
                <div>
                  Your answer: 
                  ${userAns === null ? '<em>Skipped</em>' : q.options[userAns]}
                  ${userAns === q.correctAnswer ? '<span class="badge bg-success ms-2">Correct</span>' : userAns !== null ? '<span class="badge bg-danger ms-2">Incorrect</span>' : ''}
                </div>
                <div>Correct answer: <strong>${q.options[q.correctAnswer]}</strong></div>
              </li>
            `;
  }).join('')}
        </ol>
      </div>
    </div>
  `;
}

// Initial render
renderTopicSelection();

// Expose functions for inline onclick handlers
window.handleAnswer = handleAnswer;
window.goToQuestion = goToQuestion;
window.finishQuiz = finishQuiz;
window.renderTopicSelection = renderTopicSelection; 
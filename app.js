// Study Zone Technical Assessment - Main Application
// Handles UI interactions, scoring, and state management

class AssessmentApp {
    constructor() {
        this.currentSection = 0;
        this.answers = {};
        this.isStarted = false;

        this.init();
    }

    getSectionForQuestion(id) {
        return assessmentData.sections.find(s =>
            id >= s.questionRange[0] && id <= s.questionRange[1]
        );
    }

    getSubsectionForQuestion(id, section) {
        if (!section) return null;
        return section.subsections.find(sub =>
            id >= sub.range[0] && id <= sub.range[1]
        );
    }

    init() {
        this.loadAnswers();
        this.renderSectionNav();
        this.updateProgress();

        // Add SVG gradient definition
        this.addSVGDefs();
    }

    addSVGDefs() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "0");
        svg.setAttribute("height", "0");
        svg.innerHTML = `
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="50%" stop-color="#8b5cf6"/>
                    <stop offset="100%" stop-color="#a855f7"/>
                </linearGradient>
            </defs>
        `;
        document.body.appendChild(svg);
    }

    loadAnswers() {
        const saved = localStorage.getItem('assessmentAnswers');
        if (saved) {
            this.answers = JSON.parse(saved);
        }
    }

    saveAnswers() {
        localStorage.setItem('assessmentAnswers', JSON.stringify(this.answers));
    }

    renderSectionNav() {
        const list = document.getElementById('section-list');
        list.innerHTML = assessmentData.sections.map((section, index) => `
            <li>
                <a onclick="app.goToSection(${index})" ${index === this.currentSection ? 'class="active"' : ''}>
                    <span>${section.icon} ${section.name}</span>
                    <span class="section-score" id="nav-score-${section.id}">0%</span>
                </a>
            </li>
        `).join('');

        // Add results link
        list.innerHTML += `
            <li style="margin-top: 1rem;">
                <a onclick="app.showResults()" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                    <span>📈 View Results</span>
                </a>
            </li>
        `;

        this.updateSectionScores();
    }

    updateSectionScores() {
        assessmentData.sections.forEach(section => {
            const score = this.calculateSectionScore(section);
            const percentage = Math.round((score / section.maxScore) * 100);
            const navScore = document.getElementById(`nav-score-${section.id}`);
            if (navScore) {
                navScore.textContent = `${percentage}%`;
            }
        });
    }

    calculateSectionScore(section) {
        let score = 0;
        for (let i = section.questionRange[0]; i <= section.questionRange[1]; i++) {
            if (this.answers[i] !== undefined) {
                score += this.answers[i];
            }
        }
        return score;
    }

    updateProgress() {
        const answered = Object.keys(this.answers).length;
        const total = assessmentData.totalQuestions;
        const percentage = (answered / total) * 100;

        document.getElementById('progress-count').textContent = answered;
        document.getElementById('progress-bar').style.width = `${percentage}%`;

        const totalScore = Object.values(this.answers).reduce((sum, val) => sum + val, 0);
        document.getElementById('total-score').textContent = totalScore;

        this.updateSectionScores();
    }

    goToSection(index) {
        this.currentSection = index;
        this.renderSectionNav();
        this.renderQuestions();

        // Scroll to top of questions
        document.getElementById('questions-container').scrollIntoView({ behavior: 'smooth' });
    }

    renderQuestions() {
        const section = assessmentData.sections[this.currentSection];
        const container = document.getElementById('questions-container');
        const header = document.getElementById('current-section-header');

        // Calculate section progress
        let answered = 0;
        const totalInSection = section.questionRange[1] - section.questionRange[0] + 1;
        for (let i = section.questionRange[0]; i <= section.questionRange[1]; i++) {
            if (this.answers[i] !== undefined) answered++;
        }

        header.innerHTML = `
            <h2>${section.icon} ${section.name}</h2>
            <p>Questions ${section.questionRange[0]} - ${section.questionRange[1]}</p>
            <div class="section-progress">
                <div class="section-progress-bar">
                    <div class="section-progress-fill" style="width: ${(answered / totalInSection) * 100}%"></div>
                </div>
                <span class="section-progress-text">${answered} / ${totalInSection} answered</span>
            </div>
        `;

        let html = '';
        let currentSubsection = null;

        for (let i = section.questionRange[0]; i <= section.questionRange[1]; i++) {
            // Check for subsection header
            const subsection = this.getSubsectionForQuestion(i, section);
            if (subsection && subsection.name !== currentSubsection) {
                currentSubsection = subsection.name;
                html += `<div class="subsection-header">${currentSubsection} (Q${subsection.range[0]}-${subsection.range[1]})</div>`;
            }

            const question = questions.find(q => q.id === i);
            const isAnswered = this.answers[i] !== undefined;

            html += `
                <div class="question-card ${isAnswered ? 'answered' : ''}" id="question-${i}">
                    <div class="question-header">
                        <span class="question-number">Q${i}</span>
                        <span class="question-text">${question.text}</span>
                    </div>
                    <div class="options-list">
                        ${question.options.map(opt => `
                            <div class="option-item option-${opt.label.toLowerCase()} ${this.answers[i] === opt.points ? 'selected' : ''}"
                                 onclick="app.selectAnswer(${i}, ${opt.points}, '${opt.label}')">
                                <div class="option-radio"></div>
                                <span class="option-label">${opt.label})</span>
                                <span class="option-text">${opt.text}</span>
                                <span class="option-points">${opt.points} pts</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        // Update navigation buttons
        document.getElementById('prev-section').disabled = this.currentSection === 0;
        document.getElementById('next-section').textContent =
            this.currentSection === assessmentData.sections.length - 1 ? 'View Results →' : 'Next Section →';
    }

    selectAnswer(questionId, points, label) {
        this.answers[questionId] = points;
        this.saveAnswers();
        this.updateProgress();

        // Update UI
        const card = document.getElementById(`question-${questionId}`);
        card.classList.add('answered');

        // Update option selection
        const options = card.querySelectorAll('.option-item');
        options.forEach(opt => {
            opt.classList.remove('selected');
            if (opt.querySelector('.option-label').textContent.startsWith(label)) {
                opt.classList.add('selected');
            }
        });

        // Update section header progress
        const section = assessmentData.sections[this.currentSection];
        let answered = 0;
        const totalInSection = section.questionRange[1] - section.questionRange[0] + 1;
        for (let i = section.questionRange[0]; i <= section.questionRange[1]; i++) {
            if (this.answers[i] !== undefined) answered++;
        }
        const progressFill = document.querySelector('.section-progress-fill');
        const progressText = document.querySelector('.section-progress-text');
        if (progressFill) progressFill.style.width = `${(answered / totalInSection) * 100}%`;
        if (progressText) progressText.textContent = `${answered} / ${totalInSection} answered`;
    }

    navigateSection(direction) {
        if (direction === 1 && this.currentSection === assessmentData.sections.length - 1) {
            this.showResults();
            return;
        }

        this.currentSection = Math.max(0, Math.min(this.currentSection + direction, assessmentData.sections.length - 1));
        this.renderSectionNav();
        this.renderQuestions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showResults() {
        document.getElementById('assessment-container').style.display = 'none';
        document.getElementById('welcome-banner').style.display = 'none';
        document.getElementById('results-panel').style.display = 'block';

        this.renderResults();
    }

    showAssessment() {
        document.getElementById('results-panel').style.display = 'none';
        document.getElementById('welcome-banner').style.display = 'none';
        document.getElementById('assessment-container').style.display = 'block';

        this.renderQuestions();
    }

    renderResults() {
        const totalScore = Object.values(this.answers).reduce((sum, val) => sum + val, 0);
        const percentage = totalScore / assessmentData.maxScore;

        // Animate score circle
        const scoreRing = document.getElementById('score-ring');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - percentage);

        setTimeout(() => {
            scoreRing.style.strokeDashoffset = offset;
        }, 100);

        document.getElementById('final-score-value').textContent = totalScore;

        // Determine readiness level
        const level = assessmentData.readinessLevels.find(l => totalScore >= l.min);
        document.getElementById('readiness-level').textContent = level.label;
        document.getElementById('readiness-description').textContent = level.description;

        // Render section scores
        const sectionScoresContainer = document.getElementById('section-scores');
        sectionScoresContainer.innerHTML = assessmentData.sections.map(section => {
            const score = this.calculateSectionScore(section);
            const pct = Math.round((score / section.maxScore) * 100);
            const level = pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : pct >= 40 ? 'fair' : 'poor';

            return `
                <div class="section-score-card">
                    <div class="section-score-header">
                        <h4>${section.icon} ${section.name}</h4>
                        <span class="section-percentage ${level}">${pct}%</span>
                    </div>
                    <div class="section-score-bar">
                        <div class="section-score-fill ${level}" style="width: ${pct}%"></div>
                    </div>
                    <div class="section-score-details">
                        <span>${score} / ${section.maxScore} points</span>
                        <span>${section.questionRange[1] - section.questionRange[0] + 1} questions</span>
                    </div>
                </div>
            `;
        }).join('');

        // Render priority actions
        this.renderPriorityActions();
    }

    renderPriorityActions() {
        const container = document.getElementById('priority-actions');
        const criticalSections = [];

        assessmentData.sections.forEach(section => {
            const score = this.calculateSectionScore(section);
            const pct = (score / section.maxScore) * 100;
            if (pct < 60) {
                criticalSections.push({ section, pct });
            }
        });

        if (criticalSections.length === 0) {
            container.innerHTML = `
                <h3>🎉 Great Job!</h3>
                <p style="color: var(--text-secondary);">All sections are scoring above 60%. Continue to improve and maintain your platform quality.</p>
            `;
            return;
        }

        container.innerHTML = `
            <h3>⚠️ Priority Actions Required</h3>
            <div class="priority-list">
                ${criticalSections.map(({ section, pct }) => `
                    <div class="priority-item">
                        <span class="priority-icon">${section.icon}</span>
                        <div class="priority-content">
                            <h4>${section.name} (${Math.round(pct)}%)</h4>
                            <p>This section is below 60%. Focus on improving this area before launch.</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Global functions
function navigateSection(direction) {
    app.navigateSection(direction);
}

function startAssessment() {
    document.getElementById('welcome-banner').style.display = 'none';
    document.getElementById('assessment-container').style.display = 'block';
    app.renderQuestions();
}

function exportResults() {
    const answers = app.answers;
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);

    let report = `Study Zone Technical Assessment Results\n`;
    report += `Generated: ${new Date().toLocaleString()}\n`;
    report += `=${'='.repeat(40)}\n\n`;
    report += `Total Score: ${totalScore} / ${assessmentData.maxScore} (${Math.round(totalScore / assessmentData.maxScore * 100)}%)\n`;
    report += `Questions Answered: ${Object.keys(answers).length} / 500\n\n`;

    report += `Section Summary:\n${'-'.repeat(20)}\n`;
    assessmentData.sections.forEach(section => {
        const score = app.calculateSectionScore(section);
        const pct = Math.round((score / section.maxScore) * 100);
        report += `${section.name}: ${score}/${section.maxScore} (${pct}%)\n`;
    });

    report += `\n${'='.repeat(40)}\n\n`;
    report += `Detailed Q&A Report\n${'='.repeat(40)}\n\n`;

    assessmentData.sections.forEach(section => {
        report += `[ ${section.name} ]\n`;
        report += `${'-'.repeat(section.name.length + 4)}\n\n`;

        let answeredCount = 0;
        for (let i = section.questionRange[0]; i <= section.questionRange[1]; i++) {
            if (app.answers[i] !== undefined) {
                const question = questions.find(q => q.id === i);
                const selectedPoints = app.answers[i];
                // Points map is A=4, B=3, C=2, D=1, E=0. We can find by points or just check labels.
                // Assuming points are unique per option for standard questions.
                const selectedOption = question.options.find(opt => opt.points === selectedPoints);

                report += `Q${i}: ${question.text}\n`;
                if (selectedOption) {
                    report += `Selected: ${selectedOption.label}) ${selectedOption.text}\n`;
                } else {
                    report += `Selected: (Unknown Option - Points: ${selectedPoints})\n`;
                }
                report += `Points: ${selectedPoints}\n\n`;
                answeredCount++;
            }
        }

        if (answeredCount === 0) {
            report += `No questions answered in this section.\n\n`;
        }
    });

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'assessment-results-detailed.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function resetAssessment() {
    if (confirm('Are you sure you want to reset all answers? This cannot be undone.')) {
        localStorage.removeItem('assessmentAnswers');
        app.answers = {};
        app.currentSection = 0;
        app.updateProgress();
        app.renderSectionNav();

        document.getElementById('results-panel').style.display = 'none';
        document.getElementById('assessment-container').style.display = 'none';
        document.getElementById('welcome-banner').style.display = 'block';
    }
}

function showAssessment() {
    app.showAssessment();
}

// Floating Navigation
function initFloatingNav() {
    const floatingNav = document.getElementById('floating-nav');
    const pageUpBtn = document.getElementById('page-up-btn');
    const pageDownBtn = document.getElementById('page-down-btn');
    const gotoBtn = document.getElementById('go-to-question-btn');

    if (!pageUpBtn || !pageDownBtn) return;

    // Page Up functionality
    pageUpBtn.addEventListener('click', () => {
        window.scrollBy({
            top: -window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    });

    // Page Down functionality
    pageDownBtn.addEventListener('click', () => {
        window.scrollBy({
            top: window.innerHeight * 0.9,
            behavior: 'smooth'
        });
    });

    // Go to Question functionality
    if (gotoBtn) {
        gotoBtn.addEventListener('click', () => {
            openGotoModal();
        });
    }

    // Show/hide floating nav based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
    });
}

// Modal functions for Go to Question
function openGotoModal() {
    const modal = document.getElementById('goto-modal');
    const input = document.getElementById('question-input');
    if (modal) {
        modal.style.display = 'flex';
        input.focus();
        input.value = '';
    }
}

function closeGotoModal() {
    const modal = document.getElementById('goto-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function goToQuestion() {
    const input = document.getElementById('question-input');
    const questionNum = parseInt(input.value);

    if (!questionNum || questionNum < 1 || questionNum > 500) {
        alert('Please enter a valid question number between 1 and 500');
        return;
    }

    // Find the section containing this question
    const section = app.getSectionForQuestion(questionNum);
    if (section) {
        // Calculate section index
        const sectionIndex = assessmentData.sections.indexOf(section);
        app.currentSection = sectionIndex;
        app.renderSectionNav();
        app.renderQuestions();

        // Close modal
        closeGotoModal();

        // Scroll to the question after a short delay to let DOM update
        setTimeout(() => {
            const questionElement = document.getElementById(`question-${questionNum}`);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight the question
                questionElement.classList.add('highlight');
                setTimeout(() => {
                    questionElement.classList.remove('highlight');
                }, 2000);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('goto-modal');
    if (modal && event.target === modal) {
        closeGotoModal();
    }
});

// Handle Enter key in input
document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const input = document.getElementById('question-input');
        if (input && input === document.activeElement) {
            goToQuestion();
        }
    }
});

// Initialize app
const app = new AssessmentApp();
initFloatingNav();

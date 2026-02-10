// Study Zone Technical Assessment - Questions Data
// 500 Questions automatically parsed from markdown

const assessmentData = {
    title: "Study Zone - Technical & AI Quality Assessment",
    description: "Focus: Technical implementation, AI quality control, and educational value delivery",
    totalQuestions: 500,
    maxScore: 2000,
    
    sections: [
        {
            id: 1,
            name: "AI Quality & Content Integrity",
            icon: "🤖",
            questionRange: [1, 100],
            maxScore: 400,
            subsections: [
                { name: "AI Output Quality Control", range: [1, 25] },
                { name: "AI Pedagogical Effectiveness", range: [26, 50] },
                { name: "AI Abuse Prevention", range: [51, 75] },
                { name: "AI Technical Implementation", range: [76, 100] }
            ]
        },
        {
            id: 2,
            name: "Database & Data Integrity",
            icon: "🗄️",
            questionRange: [101, 175],
            maxScore: 300,
            subsections: [
                { name: "Firestore Schema Design", range: [101, 125] },
                { name: "Data Consistency & Transactions", range: [126, 150] },
                { name: "Data Migration & Backups", range: [151, 175] }
            ]
        },
        {
            id: 3,
            name: "Security & Authentication",
            icon: "🔐",
            questionRange: [176, 250],
            maxScore: 300,
            subsections: [
                { name: "Firebase Authentication Security", range: [176, 200] },
                { name: "API & Function Security", range: [201, 225] },
                { name: "Client-Side Security", range: [226, 250] }
            ]
        },
        {
            id: 4,
            name: "Performance & Scalability",
            icon: "⚡",
            questionRange: [251, 300],
            maxScore: 200,
            subsections: [
                { name: "Frontend Performance", range: [251, 275] },
                { name: "Backend Performance", range: [276, 300] }
            ]
        },
        {
            id: 5,
            name: "Code Quality & Testing",
            icon: "✅",
            questionRange: [301, 375],
            maxScore: 300,
            subsections: [
                { name: "Code Quality", range: [301, 325] },
                { name: "Testing", range: [326, 350] },
                { name: "Deployment & CI/CD", range: [351, 375] }
            ]
        },
        {
            id: 6,
            name: "Monitoring & Operations",
            icon: "📊",
            questionRange: [376, 450],
            maxScore: 300,
            subsections: [
                { name: "Application Monitoring", range: [376, 400] },
                { name: "Incident Response", range: [401, 425] },
                { name: "Infrastructure & DevOps", range: [426, 450] }
            ]
        },
        {
            id: 7,
            name: "User Experience & Student Success",
            icon: "🎓",
            questionRange: [451, 500],
            maxScore: 200,
            subsections: [
                { name: "User Onboarding", range: [451, 460] },
                { name: "Student Engagement", range: [461, 470] },
                { name: "Learning Analytics", range: [471, 480] },
                { name: "Educator Tools", range: [481, 490] },
                { name: "Accessibility & Inclusion", range: [491, 500] }
            ]
        }
    ],
    
    scoreGuide: {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        E: 0
    },
    
    readinessLevels: [
        { min: 1800, label: "Production Excellence", description: "Enterprise-ready platform with best-in-class quality. Ready for scale." },
        { min: 1600, label: "Production Ready", description: "Launch-ready quality with minor improvements needed. Strong foundation." },
        { min: 1400, label: "Near Production", description: "2-4 weeks from ready. Address critical gaps and focus on P0 items." },
        { min: 1200, label: "Pre-Production", description: "1-3 months needed. Significant work remaining, follow structured plan." },
        { min: 1000, label: "Alpha/Beta", description: "3-6 months to production. Core functionality present, need testing & validation." },
        { min: 800, label: "Early Development", description: "6-12 months to production. Prototype stage, build core features." },
        { min: 0, label: "Concept Stage", description: "12+ months to production. Early development, establish foundations." }
    ]
};

const questions = [
    {
        "id": 1,
        "text": "Does the AI system have explicit content quality validation?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer quality validation with automated and human review",
                "points": 4
            },
            {
                "label": "B",
                "text": "Automated quality checks on all AI outputs",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic quality filtering in place",
                "points": 2
            },
            {
                "label": "D",
                "text": "Relying on AI model defaults only",
                "points": 1
            },
            {
                "label": "E",
                "text": "No quality validation implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 2,
        "text": "Are AI responses fact-checked before delivery to students?",
        "options": [
            {
                "label": "A",
                "text": "Real-time fact-checking against verified knowledge bases",
                "points": 4
            },
            {
                "label": "B",
                "text": "Automated fact-checking for critical subjects (math, science)",
                "points": 3
            },
            {
                "label": "C",
                "text": "Periodic fact-checking audits",
                "points": 2
            },
            {
                "label": "D",
                "text": "No fact-checking, trust AI model",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 3,
        "text": "Is there a system to detect and prevent AI hallucinations?",
        "options": [
            {
                "label": "A",
                "text": "Multi-stage hallucination detection with confidence scoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Hallucination detection for factual claims",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic plausibility checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No hallucination detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not aware of hallucination risks",
                "points": 0
            }
        ]
    },
    {
        "id": 4,
        "text": "Are AI responses validated for educational appropriateness?",
        "options": [
            {
                "label": "A",
                "text": "Age-appropriate content filters + educational standards alignment",
                "points": 4
            },
            {
                "label": "B",
                "text": "Educational appropriateness checks implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic content filtering",
                "points": 2
            },
            {
                "label": "D",
                "text": "No educational validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 5,
        "text": "Is there a feedback mechanism to flag incorrect AI responses?",
        "options": [
            {
                "label": "A",
                "text": "One-click reporting, auto-review, and correction pipeline",
                "points": 4
            },
            {
                "label": "B",
                "text": "User reporting system with review process",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic feedback collection",
                "points": 2
            },
            {
                "label": "D",
                "text": "No user feedback on AI quality",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 6,
        "text": "Are AI answers reviewed by subject matter experts?",
        "options": [
            {
                "label": "A",
                "text": "Random sampling reviewed by credentialed experts weekly",
                "points": 4
            },
            {
                "label": "B",
                "text": "High-stakes answers reviewed by experts",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional expert review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No expert review",
                "points": 1
            },
            {
                "label": "E",
                "text": "No expert involvement",
                "points": 0
            }
        ]
    },
    {
        "id": 7,
        "text": "Does the system detect when AI provides incomplete answers?",
        "options": [
            {
                "label": "A",
                "text": "Completeness scoring with auto-prompting for details",
                "points": 4
            },
            {
                "label": "B",
                "text": "Completeness detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review for completeness",
                "points": 2
            },
            {
                "label": "D",
                "text": "No completeness checking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 8,
        "text": "Is there validation that AI responses match the question asked?",
        "options": [
            {
                "label": "A",
                "text": "Semantic relevance scoring with re-prompting if off-topic",
                "points": 4
            },
            {
                "label": "B",
                "text": "Relevance checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic topic matching",
                "points": 2
            },
            {
                "label": "D",
                "text": "No relevance validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 9,
        "text": "Are mathematical calculations in AI responses verified?",
        "options": [
            {
                "label": "A",
                "text": "All math auto-verified with symbolic math engine",
                "points": 4
            },
            {
                "label": "B",
                "text": "Math verification for complex problems",
                "points": 3
            },
            {
                "label": "C",
                "text": "Sample math checking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Trust AI for all math",
                "points": 1
            },
            {
                "label": "E",
                "text": "No math verification",
                "points": 0
            }
        ]
    },
    {
        "id": 10,
        "text": "Is there detection of biased or inappropriate content in AI responses?",
        "options": [
            {
                "label": "A",
                "text": "Real-time bias detection + content moderation AI",
                "points": 4
            },
            {
                "label": "B",
                "text": "Bias detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic content filtering",
                "points": 2
            },
            {
                "label": "D",
                "text": "No bias detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 11,
        "text": "Does the system prevent AI from providing direct answers to homework?",
        "options": [
            {
                "label": "A",
                "text": "Pedagogical AI that guides without giving answers + detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Homework answer prevention in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Warns users not to copy",
                "points": 2
            },
            {
                "label": "D",
                "text": "No prevention mechanism",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not a concern",
                "points": 0
            }
        ]
    },
    {
        "id": 12,
        "text": "Are AI responses checked for plagiarism from web sources?",
        "options": [
            {
                "label": "A",
                "text": "Real-time plagiarism detection against web/academic sources",
                "points": 4
            },
            {
                "label": "B",
                "text": "Plagiarism checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional plagiarism audits",
                "points": 2
            },
            {
                "label": "D",
                "text": "No plagiarism checking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 13,
        "text": "Is there a quality rating system for AI responses?",
        "options": [
            {
                "label": "A",
                "text": "User ratings + automated quality scoring + improvement loop",
                "points": 4
            },
            {
                "label": "B",
                "text": "Quality rating system in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic thumbs up/down",
                "points": 2
            },
            {
                "label": "D",
                "text": "No quality rating",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 14,
        "text": "Are low-quality AI responses automatically blocked?",
        "options": [
            {
                "label": "A",
                "text": "Auto-blocking with confidence threshold + human review",
                "points": 4
            },
            {
                "label": "B",
                "text": "Low-quality filtering implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review of flagged content",
                "points": 2
            },
            {
                "label": "D",
                "text": "All AI responses delivered as-is",
                "points": 1
            },
            {
                "label": "E",
                "text": "No quality filtering",
                "points": 0
            }
        ]
    },
    {
        "id": 15,
        "text": "Is there monitoring of AI response consistency over time?",
        "options": [
            {
                "label": "A",
                "text": "Consistency tracking with regression testing on knowledge",
                "points": 4
            },
            {
                "label": "B",
                "text": "Consistency monitoring in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional consistency checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No consistency monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 16,
        "text": "Does the AI cite sources for factual claims?",
        "options": [
            {
                "label": "A",
                "text": "All factual claims cited with verifiable sources",
                "points": 4
            },
            {
                "label": "B",
                "text": "Citations provided for major claims",
                "points": 3
            },
            {
                "label": "C",
                "text": "Citations available on request",
                "points": 2
            },
            {
                "label": "D",
                "text": "No citation capability",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 17,
        "text": "Are AI sources vetted for credibility?",
        "options": [
            {
                "label": "A",
                "text": "Whitelist of credible sources + authority scoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Source credibility checking",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic source filtering",
                "points": 2
            },
            {
                "label": "D",
                "text": "No source vetting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 18,
        "text": "Is there detection of AI generating circular or nonsensical logic?",
        "options": [
            {
                "label": "A",
                "text": "Logic validation with reasoning chain analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Logic checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review for logic errors",
                "points": 2
            },
            {
                "label": "D",
                "text": "No logic validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 19,
        "text": "Are AI responses checked for reading level appropriateness?",
        "options": [
            {
                "label": "A",
                "text": "Auto-adjusted reading level based on student grade",
                "points": 4
            },
            {
                "label": "B",
                "text": "Reading level checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "One-size-fits-all reading level",
                "points": 2
            },
            {
                "label": "D",
                "text": "No reading level consideration",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 20,
        "text": "Is there validation that AI explanations build on prerequisites?",
        "options": [
            {
                "label": "A",
                "text": "Prerequisite knowledge graph with scaffolding validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Prerequisite checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Assumes prerequisite knowledge",
                "points": 2
            },
            {
                "label": "D",
                "text": "No prerequisite validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 21,
        "text": "Does the system detect when AI provides dangerous or harmful advice?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer safety filters + harm detection + human review",
                "points": 4
            },
            {
                "label": "B",
                "text": "Harm detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic safety filtering",
                "points": 2
            },
            {
                "label": "D",
                "text": "No harm detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 22,
        "text": "Are AI chemistry/physics answers validated for safety?",
        "options": [
            {
                "label": "A",
                "text": "Dangerous experiment detection + warning system",
                "points": 4
            },
            {
                "label": "B",
                "text": "Safety validation for STEM content",
                "points": 3
            },
            {
                "label": "C",
                "text": "General safety warnings",
                "points": 2
            },
            {
                "label": "D",
                "text": "No safety validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 23,
        "text": "Is there monitoring for AI providing medical/mental health advice?",
        "options": [
            {
                "label": "A",
                "text": "Medical advice blocked + crisis resources provided",
                "points": 4
            },
            {
                "label": "B",
                "text": "Medical content filtering in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "General disclaimer only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No medical content filtering",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 24,
        "text": "Are AI responses tested against known edge cases?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive edge case test suite run continuously",
                "points": 4
            },
            {
                "label": "B",
                "text": "Edge case testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic edge case awareness",
                "points": 2
            },
            {
                "label": "D",
                "text": "No edge case testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 25,
        "text": "Is there a mechanism to continuously improve AI quality?",
        "options": [
            {
                "label": "A",
                "text": "Automated feedback loop with fine-tuning on corrections",
                "points": 4
            },
            {
                "label": "B",
                "text": "Quality improvement process in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional AI updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "No improvement mechanism",
                "points": 1
            },
            {
                "label": "E",
                "text": "Static AI implementation",
                "points": 0
            }
        ]
    },
    {
        "id": 26,
        "text": "Does the AI use Socratic questioning instead of direct answers?",
        "options": [
            {
                "label": "A",
                "text": "Socratic method enforced in system prompts with validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Socratic approach implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mix of direct answers and questions",
                "points": 2
            },
            {
                "label": "D",
                "text": "Always provides direct answers",
                "points": 1
            },
            {
                "label": "E",
                "text": "No pedagogical strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 27,
        "text": "Does the AI scaffold learning by breaking down complex topics?",
        "options": [
            {
                "label": "A",
                "text": "Automatic scaffolding with progressive complexity",
                "points": 4
            },
            {
                "label": "B",
                "text": "Scaffolding implemented for complex topics",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some scaffolding in responses",
                "points": 2
            },
            {
                "label": "D",
                "text": "No scaffolding approach",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 28,
        "text": "Does the AI check student understanding before proceeding?",
        "options": [
            {
                "label": "A",
                "text": "Interactive understanding checks with adaptive follow-up",
                "points": 4
            },
            {
                "label": "B",
                "text": "Understanding checks implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional comprehension questions",
                "points": 2
            },
            {
                "label": "D",
                "text": "No understanding verification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 29,
        "text": "Does the AI provide worked examples before expecting practice?",
        "options": [
            {
                "label": "A",
                "text": "Worked examples with step-by-step explanation always provided",
                "points": 4
            },
            {
                "label": "B",
                "text": "Examples provided for new concepts",
                "points": 3
            },
            {
                "label": "C",
                "text": "Examples sometimes included",
                "points": 2
            },
            {
                "label": "D",
                "text": "No worked examples",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 30,
        "text": "Does the AI encourage metacognition and self-reflection?",
        "options": [
            {
                "label": "A",
                "text": "Reflection prompts built into AI responses",
                "points": 4
            },
            {
                "label": "B",
                "text": "Metacognitive prompts implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional reflection questions",
                "points": 2
            },
            {
                "label": "D",
                "text": "No metacognitive focus",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 31,
        "text": "Does the AI adapt difficulty based on student performance?",
        "options": [
            {
                "label": "A",
                "text": "Real-time difficulty adjustment with performance tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Adaptive difficulty implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual difficulty selection only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fixed difficulty level",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 32,
        "text": "Does the AI identify and address misconceptions?",
        "options": [
            {
                "label": "A",
                "text": "Misconception library with targeted correction strategies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Misconception detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic error correction",
                "points": 2
            },
            {
                "label": "D",
                "text": "No misconception addressing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 33,
        "text": "Does the AI use multiple representations (visual, verbal, symbolic)?",
        "options": [
            {
                "label": "A",
                "text": "Multi-modal explanations with diagrams, equations, analogies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Multiple representations used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Text-only responses",
                "points": 2
            },
            {
                "label": "D",
                "text": "No varied representations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 34,
        "text": "Does the AI connect new concepts to prior knowledge?",
        "options": [
            {
                "label": "A",
                "text": "Student knowledge graph with automatic connections",
                "points": 4
            },
            {
                "label": "B",
                "text": "Prior knowledge connections made",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional connections mentioned",
                "points": 2
            },
            {
                "label": "D",
                "text": "No prior knowledge linking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 35,
        "text": "Does the AI provide timely and specific feedback?",
        "options": [
            {
                "label": "A",
                "text": "Immediate feedback with specific error identification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Feedback provided consistently",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic feedback only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No feedback mechanism",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 36,
        "text": "Does the AI encourage active learning vs passive consumption?",
        "options": [
            {
                "label": "A",
                "text": "Interactive problem-solving required, no passive reading",
                "points": 4
            },
            {
                "label": "B",
                "text": "Active learning encouraged",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mix of active and passive",
                "points": 2
            },
            {
                "label": "D",
                "text": "Passive information delivery",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 37,
        "text": "Does the AI promote transfer of learning to new contexts?",
        "options": [
            {
                "label": "A",
                "text": "Transfer practice with varied problem contexts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Transfer opportunities provided",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single context examples only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No transfer promotion",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 38,
        "text": "Does the AI use spaced repetition principles?",
        "options": [
            {
                "label": "A",
                "text": "Spaced repetition algorithm built into AI interactions",
                "points": 4
            },
            {
                "label": "B",
                "text": "Spaced repetition concepts used",
                "points": 3
            },
            {
                "label": "C",
                "text": "All review at once",
                "points": 2
            },
            {
                "label": "D",
                "text": "No spaced repetition",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 39,
        "text": "Does the AI interleave topics for better retention?",
        "options": [
            {
                "label": "A",
                "text": "Interleaving algorithm mixes related topics",
                "points": 4
            },
            {
                "label": "B",
                "text": "Interleaving used strategically",
                "points": 3
            },
            {
                "label": "C",
                "text": "Linear topic progression only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No interleaving",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 40,
        "text": "Does the AI provide retrieval practice opportunities?",
        "options": [
            {
                "label": "A",
                "text": "Regular low-stakes quizzing built into conversations",
                "points": 4
            },
            {
                "label": "B",
                "text": "Retrieval practice implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional practice questions",
                "points": 2
            },
            {
                "label": "D",
                "text": "No retrieval practice",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 41,
        "text": "Does the AI explain its reasoning process?",
        "options": [
            {
                "label": "A",
                "text": "Chain-of-thought reasoning shown step-by-step",
                "points": 4
            },
            {
                "label": "B",
                "text": "Reasoning explanations provided",
                "points": 3
            },
            {
                "label": "C",
                "text": "Answers without reasoning",
                "points": 2
            },
            {
                "label": "D",
                "text": "Black box responses",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 42,
        "text": "Does the AI adjust language complexity for student level?",
        "options": [
            {
                "label": "A",
                "text": "Language auto-adjusted based on student grade/performance",
                "points": 4
            },
            {
                "label": "B",
                "text": "Language complexity consideration",
                "points": 3
            },
            {
                "label": "C",
                "text": "One complexity level for all",
                "points": 2
            },
            {
                "label": "D",
                "text": "No language adjustment",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 43,
        "text": "Does the AI provide positive reinforcement appropriately?",
        "options": [
            {
                "label": "A",
                "text": "Evidence-based praise for effort and strategies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Positive reinforcement used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Neutral tone only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No reinforcement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 44,
        "text": "Does the AI help students develop problem-solving strategies?",
        "options": [
            {
                "label": "A",
                "text": "Explicit strategy instruction with practice",
                "points": 4
            },
            {
                "label": "B",
                "text": "Problem-solving strategies taught",
                "points": 3
            },
            {
                "label": "C",
                "text": "Solutions without strategies",
                "points": 2
            },
            {
                "label": "D",
                "text": "No strategy instruction",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 45,
        "text": "Does the AI encourage questions and curiosity?",
        "options": [
            {
                "label": "A",
                "text": "Prompts for student questions, rewards curiosity",
                "points": 4
            },
            {
                "label": "B",
                "text": "Curiosity encouraged",
                "points": 3
            },
            {
                "label": "C",
                "text": "Neutral to questions",
                "points": 2
            },
            {
                "label": "D",
                "text": "Discourages questions",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 46,
        "text": "Does the AI track individual student progress over time?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive learning analytics with progress visualization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Progress tracking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic usage stats only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No progress tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 47,
        "text": "Does the AI identify knowledge gaps?",
        "options": [
            {
                "label": "A",
                "text": "Knowledge graph analysis with gap identification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Gap identification implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual gap assessment",
                "points": 2
            },
            {
                "label": "D",
                "text": "No gap identification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 48,
        "text": "Does the AI recommend personalized next steps?",
        "options": [
            {
                "label": "A",
                "text": "AI-powered learning path recommendations",
                "points": 4
            },
            {
                "label": "B",
                "text": "Next step recommendations provided",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic progression only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No recommendations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 49,
        "text": "Does the AI vary question difficulty to maintain engagement?",
        "options": [
            {
                "label": "A",
                "text": "Dynamic difficulty with flow state optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Difficulty variation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed difficulty progression",
                "points": 2
            },
            {
                "label": "D",
                "text": "No difficulty consideration",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 50,
        "text": "Does the AI provide context for real-world applications?",
        "options": [
            {
                "label": "A",
                "text": "Real-world examples for every abstract concept",
                "points": 4
            },
            {
                "label": "B",
                "text": "Real-world connections made",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional real-world examples",
                "points": 2
            },
            {
                "label": "D",
                "text": "Abstract only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 51,
        "text": "Is there detection of students trying to cheat with AI?",
        "options": [
            {
                "label": "A",
                "text": "Multi-signal cheating detection + educator alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cheating detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic usage monitoring",
                "points": 2
            },
            {
                "label": "D",
                "text": "No cheating detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not concerned",
                "points": 0
            }
        ]
    },
    {
        "id": 52,
        "text": "Does the system detect copy-paste of AI responses to assignments?",
        "options": [
            {
                "label": "A",
                "text": "AI-generated text detection + originality scoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Copy-paste detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual detection only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No detection mechanism",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 53,
        "text": "Are there usage limits to prevent over-reliance on AI?",
        "options": [
            {
                "label": "A",
                "text": "Adaptive limits based on learning goals + cool-down periods",
                "points": 4
            },
            {
                "label": "B",
                "text": "Usage limits implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed message limits only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unlimited usage",
                "points": 1
            },
            {
                "label": "E",
                "text": "No limits",
                "points": 0
            }
        ]
    },
    {
        "id": 54,
        "text": "Does the AI refuse to do complete assignments for students?",
        "options": [
            {
                "label": "A",
                "text": "Assignment detection + refusal + guidance instead",
                "points": 4
            },
            {
                "label": "B",
                "text": "Complete work refusal implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Warns against cheating",
                "points": 2
            },
            {
                "label": "D",
                "text": "Will complete any work requested",
                "points": 1
            },
            {
                "label": "E",
                "text": "No refusal mechanism",
                "points": 0
            }
        ]
    },
    {
        "id": 55,
        "text": "Is there monitoring for students sharing AI responses?",
        "options": [
            {
                "label": "A",
                "text": "Sharing detection with plagiarism cross-checking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Sharing monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Awareness of sharing risk",
                "points": 2
            },
            {
                "label": "D",
                "text": "No sharing detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not concerned",
                "points": 0
            }
        ]
    },
    {
        "id": 56,
        "text": "Does the system detect when students use AI without understanding?",
        "options": [
            {
                "label": "A",
                "text": "Comprehension checks after AI help + intervention",
                "points": 4
            },
            {
                "label": "B",
                "text": "Understanding verification implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Assumes understanding",
                "points": 2
            },
            {
                "label": "D",
                "text": "No verification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 57,
        "text": "Are educators notified of excessive AI usage by students?",
        "options": [
            {
                "label": "A",
                "text": "Real-time educator dashboard with usage alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Educator notifications implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Educators can check manually",
                "points": 2
            },
            {
                "label": "D",
                "text": "No educator visibility",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 58,
        "text": "Is there detection of students manipulating AI for inappropriate content?",
        "options": [
            {
                "label": "A",
                "text": "Jailbreak attempt detection + account flagging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Manipulation detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic content filtering only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No manipulation detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 59,
        "text": "Does the system prevent AI from writing essays/papers?",
        "options": [
            {
                "label": "A",
                "text": "Essay request detection + scaffolding instead",
                "points": 4
            },
            {
                "label": "B",
                "text": "Essay prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Warns against essay generation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Will write full essays",
                "points": 1
            },
            {
                "label": "E",
                "text": "No prevention",
                "points": 0
            }
        ]
    },
    {
        "id": 60,
        "text": "Are there guardrails against students bypassing safety filters?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer bypass detection + progressive penalties",
                "points": 4
            },
            {
                "label": "B",
                "text": "Bypass prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic safety filters only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Easily bypassed filters",
                "points": 1
            },
            {
                "label": "E",
                "text": "No safety filters",
                "points": 0
            }
        ]
    },
    {
        "id": 61,
        "text": "Is there monitoring for AI usage patterns indicating cheating?",
        "options": [
            {
                "label": "A",
                "text": "ML-based cheating pattern detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Pattern monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual pattern review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No pattern analysis",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 62,
        "text": "Does the system detect when students ask AI to solve test questions?",
        "options": [
            {
                "label": "A",
                "text": "Test/exam context detection + refusal to answer",
                "points": 4
            },
            {
                "label": "B",
                "text": "Test question detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No differentiation of contexts",
                "points": 2
            },
            {
                "label": "D",
                "text": "Answers all questions equally",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 63,
        "text": "Are there interventions when students show dependency on AI?",
        "options": [
            {
                "label": "A",
                "text": "Dependency detection + counselor/educator alerts + support",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dependency intervention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Awareness of dependency risk",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dependency detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not concerned",
                "points": 0
            }
        ]
    },
    {
        "id": 64,
        "text": "Is there parental visibility into student AI usage?",
        "options": [
            {
                "label": "A",
                "text": "Parental dashboard with usage insights + controls",
                "points": 4
            },
            {
                "label": "B",
                "text": "Parental reporting available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Parents can request reports",
                "points": 2
            },
            {
                "label": "D",
                "text": "No parental visibility",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 65,
        "text": "Does the system enforce academic integrity policies?",
        "options": [
            {
                "label": "A",
                "text": "Institution-specific integrity policies enforced + violations logged",
                "points": 4
            },
            {
                "label": "B",
                "text": "Academic integrity enforcement in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic honor code reference",
                "points": 2
            },
            {
                "label": "D",
                "text": "No integrity enforcement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 66,
        "text": "Are there penalties for repeated AI abuse?",
        "options": [
            {
                "label": "A",
                "text": "Progressive discipline system with warnings → restrictions → suspension",
                "points": 4
            },
            {
                "label": "B",
                "text": "Penalty system implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Warnings only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No penalties",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 67,
        "text": "Is there detection of students using AI during proctored exams?",
        "options": [
            {
                "label": "A",
                "text": "Exam mode lockdown + AI disabled during assessments",
                "points": 4
            },
            {
                "label": "B",
                "text": "Exam usage prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Honor system only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No exam restrictions",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 68,
        "text": "Does the system prevent students from circumventing time limits?",
        "options": [
            {
                "label": "A",
                "text": "Server-side time enforcement + multiple session detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Time limit enforcement implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Client-side timer (easily bypassed)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No time limits",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 69,
        "text": "Are there alerts for unusual usage spikes (e.g., during exam week)?",
        "options": [
            {
                "label": "A",
                "text": "Anomaly detection with automatic investigations",
                "points": 4
            },
            {
                "label": "B",
                "text": "Usage spike monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review of usage",
                "points": 2
            },
            {
                "label": "D",
                "text": "No spike detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 70,
        "text": "Is there verification that students understand AI-assisted work?",
        "options": [
            {
                "label": "A",
                "text": "Mandatory comprehension checks before proceeding",
                "points": 4
            },
            {
                "label": "B",
                "text": "Understanding verification implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Assumes understanding",
                "points": 2
            },
            {
                "label": "D",
                "text": "No verification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 71,
        "text": "Does the system log all AI interactions for audit purposes?",
        "options": [
            {
                "label": "A",
                "text": "Complete audit trail with tamper-proof logging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Interaction logging implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Partial logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "No logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 72,
        "text": "Are there privacy protections for logged AI interactions?",
        "options": [
            {
                "label": "A",
                "text": "Encrypted logs + access controls + retention policies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Privacy protections in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic access controls",
                "points": 2
            },
            {
                "label": "D",
                "text": "Logs accessible to many",
                "points": 1
            },
            {
                "label": "E",
                "text": "No privacy protections",
                "points": 0
            }
        ]
    },
    {
        "id": 73,
        "text": "Can institutions disable AI features for specific assessments?",
        "options": [
            {
                "label": "A",
                "text": "Granular controls per course/assignment/time period",
                "points": 4
            },
            {
                "label": "B",
                "text": "AI disabling controls available",
                "points": 3
            },
            {
                "label": "C",
                "text": "All-or-nothing access",
                "points": 2
            },
            {
                "label": "D",
                "text": "No disabling capability",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 74,
        "text": "Is there detection of multiple accounts to bypass limits?",
        "options": [
            {
                "label": "A",
                "text": "Multi-account detection with device fingerprinting + IP analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Multi-account detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic duplicate checking",
                "points": 2
            },
            {
                "label": "D",
                "text": "No multi-account detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 75,
        "text": "Are AI conversations reviewed for policy violations?",
        "options": [
            {
                "label": "A",
                "text": "Automated policy violation detection + sample human review",
                "points": 4
            },
            {
                "label": "B",
                "text": "Conversation review implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional manual review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No conversation review",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 76,
        "text": "Is the AI system architecture designed for educational use cases?",
        "options": [
            {
                "label": "A",
                "text": "Custom architecture optimized for pedagogy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Education-specific configuration",
                "points": 3
            },
            {
                "label": "C",
                "text": "General-purpose AI adapted",
                "points": 2
            },
            {
                "label": "D",
                "text": "Generic chatbot implementation",
                "points": 1
            },
            {
                "label": "E",
                "text": "No specialized design",
                "points": 0
            }
        ]
    },
    {
        "id": 77,
        "text": "Are AI prompts engineered for educational outcomes?",
        "options": [
            {
                "label": "A",
                "text": "Research-backed prompt engineering with A/B testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Educational prompt engineering implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic prompts used",
                "points": 2
            },
            {
                "label": "D",
                "text": "Minimal prompting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Default prompts only",
                "points": 0
            }
        ]
    },
    {
        "id": 78,
        "text": "Is there a fallback when primary AI provider fails?",
        "options": [
            {
                "label": "A",
                "text": "Multi-provider failover with seamless handoff",
                "points": 4
            },
            {
                "label": "B",
                "text": "Fallback provider configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Planned but not implemented",
                "points": 2
            },
            {
                "label": "D",
                "text": "Single provider dependency",
                "points": 1
            },
            {
                "label": "E",
                "text": "No redundancy",
                "points": 0
            }
        ]
    },
    {
        "id": 79,
        "text": "Are AI responses cached to improve performance?",
        "options": [
            {
                "label": "A",
                "text": "Intelligent caching with cache warming for common questions",
                "points": 4
            },
            {
                "label": "B",
                "text": "Response caching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No caching",
                "points": 2
            },
            {
                "label": "D",
                "text": "Performance not optimized",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 80,
        "text": "Is there rate limiting to prevent AI abuse and cost overruns?",
        "options": [
            {
                "label": "A",
                "text": "Tiered rate limiting with cost monitoring + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rate limiting implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed limits only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rate limiting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 81,
        "text": "Are AI costs monitored and optimized?",
        "options": [
            {
                "label": "A",
                "text": "Real-time cost tracking with optimization alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cost monitoring in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Monthly cost review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No cost tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 82,
        "text": "Is there A/B testing of different AI models/prompts?",
        "options": [
            {
                "label": "A",
                "text": "Continuous A/B testing with statistical significance",
                "points": 4
            },
            {
                "label": "B",
                "text": "A/B testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No A/B testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 83,
        "text": "Are AI model versions controlled and tested before deployment?",
        "options": [
            {
                "label": "A",
                "text": "Version control + staging testing + gradual rollout",
                "points": 4
            },
            {
                "label": "B",
                "text": "Version control implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Ad-hoc version updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "Automatic updates (risky)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No version control",
                "points": 0
            }
        ]
    },
    {
        "id": 84,
        "text": "Is there monitoring of AI response latency?",
        "options": [
            {
                "label": "A",
                "text": "Real-time latency monitoring with SLA alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Latency monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional latency checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No latency monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 85,
        "text": "Are AI errors logged and analyzed?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive error logging with root cause analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Error logging implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic error logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "No error logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 86,
        "text": "Is there a process to update AI knowledge?",
        "options": [
            {
                "label": "A",
                "text": "Continuous knowledge updates with change tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Knowledge update process exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual updates only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Static knowledge base",
                "points": 1
            },
            {
                "label": "E",
                "text": "No update process",
                "points": 0
            }
        ]
    },
    {
        "id": 87,
        "text": "Are AI responses deterministic when needed (e.g., math)?",
        "options": [
            {
                "label": "A",
                "text": "Deterministic mode for exact subjects + stochastic for open-ended",
                "points": 4
            },
            {
                "label": "B",
                "text": "Determinism configured appropriately",
                "points": 3
            },
            {
                "label": "C",
                "text": "All responses stochastic",
                "points": 2
            },
            {
                "label": "D",
                "text": "No determinism control",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 88,
        "text": "Is there temperature/randomness control for AI responses?",
        "options": [
            {
                "label": "A",
                "text": "Dynamic temperature based on question type",
                "points": 4
            },
            {
                "label": "B",
                "text": "Temperature configured per use case",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed temperature",
                "points": 2
            },
            {
                "label": "D",
                "text": "Default settings used",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 89,
        "text": "Are AI token limits optimized for educational conversations?",
        "options": [
            {
                "label": "A",
                "text": "Context window management with conversation summarization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Token limits optimized",
                "points": 3
            },
            {
                "label": "C",
                "text": "Default token limits used",
                "points": 2
            },
            {
                "label": "D",
                "text": "Frequent context loss",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 90,
        "text": "Is there system prompt security to prevent manipulation?",
        "options": [
            {
                "label": "A",
                "text": "System prompts encrypted + injection detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "System prompt protection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic prompt security",
                "points": 2
            },
            {
                "label": "D",
                "text": "System prompts easily exposed",
                "points": 1
            },
            {
                "label": "E",
                "text": "No security",
                "points": 0
            }
        ]
    },
    {
        "id": 91,
        "text": "Are user prompts sanitized to prevent injection attacks?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer input sanitization + injection detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Prompt sanitization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic input filtering",
                "points": 2
            },
            {
                "label": "D",
                "text": "No sanitization",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 92,
        "text": "Is there monitoring of AI provider service health?",
        "options": [
            {
                "label": "A",
                "text": "Real-time provider health monitoring with auto-failover",
                "points": 4
            },
            {
                "label": "B",
                "text": "Health monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual health checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No health monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 93,
        "text": "Are AI API keys secured and rotated?",
        "options": [
            {
                "label": "A",
                "text": "Keys in secrets manager + auto-rotation + least privilege",
                "points": 4
            },
            {
                "label": "B",
                "text": "Keys secured properly",
                "points": 3
            },
            {
                "label": "C",
                "text": "Keys in environment variables",
                "points": 2
            },
            {
                "label": "D",
                "text": "Keys in code (very bad)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No key security",
                "points": 0
            }
        ]
    },
    {
        "id": 94,
        "text": "Is there circuit breaking for AI API failures?",
        "options": [
            {
                "label": "A",
                "text": "Circuit breaker with exponential backoff + fallback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Circuit breaking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Retry logic only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No failure handling",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 95,
        "text": "Are AI requests/responses encrypted in transit?",
        "options": [
            {
                "label": "A",
                "text": "End-to-end encryption with TLS 1.3",
                "points": 4
            },
            {
                "label": "B",
                "text": "Encryption in transit",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some encryption",
                "points": 2
            },
            {
                "label": "D",
                "text": "No encryption",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 96,
        "text": "Is there load testing of AI infrastructure?",
        "options": [
            {
                "label": "A",
                "text": "Regular load testing with auto-scaling validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Load testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "One-time load test",
                "points": 2
            },
            {
                "label": "D",
                "text": "No load testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 97,
        "text": "Are AI conversation contexts managed efficiently?",
        "options": [
            {
                "label": "A",
                "text": "Context summarization + selective history with embeddings",
                "points": 4
            },
            {
                "label": "B",
                "text": "Context management implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Full history always sent (inefficient)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No context management",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 98,
        "text": "Is there detection of AI API quota exhaustion?",
        "options": [
            {
                "label": "A",
                "text": "Quota monitoring with predictive alerts + auto-scaling",
                "points": 4
            },
            {
                "label": "B",
                "text": "Quota monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Reactive quota alerts",
                "points": 2
            },
            {
                "label": "D",
                "text": "No quota monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 99,
        "text": "Are AI responses streamed for better UX?",
        "options": [
            {
                "label": "A",
                "text": "Streaming with token-by-token display",
                "points": 4
            },
            {
                "label": "B",
                "text": "Streaming implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Batch responses only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No streaming",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 100,
        "text": "Is there graceful degradation when AI is unavailable?",
        "options": [
            {
                "label": "A",
                "text": "Fallback to cached responses + offline mode + status messaging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Graceful degradation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Error message only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Hard failure",
                "points": 1
            },
            {
                "label": "E",
                "text": "No degradation handling",
                "points": 0
            }
        ]
    },
    {
        "id": 101,
        "text": "Is the Firestore schema optimized for read/write patterns?",
        "options": [
            {
                "label": "A",
                "text": "Schema designed with read/write cost analysis + benchmarking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Schema optimized for access patterns",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic schema design",
                "points": 2
            },
            {
                "label": "D",
                "text": "Ad-hoc schema",
                "points": 1
            },
            {
                "label": "E",
                "text": "No optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 102,
        "text": "Are document sizes kept under Firestore limits (1MB)?",
        "options": [
            {
                "label": "A",
                "text": "Document size monitoring + auto-sharding for large docs",
                "points": 4
            },
            {
                "label": "B",
                "text": "Size limits enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of limits",
                "points": 2
            },
            {
                "label": "D",
                "text": "No size management",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 103,
        "text": "Is data denormalized appropriately for performance?",
        "options": [
            {
                "label": "A",
                "text": "Strategic denormalization with consistency maintenance",
                "points": 4
            },
            {
                "label": "B",
                "text": "Denormalization used where beneficial",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fully normalized (slower)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Over-denormalized (stale data risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 104,
        "text": "Are subcollections used effectively?",
        "options": [
            {
                "label": "A",
                "text": "Subcollections used for hierarchical data with proper querying",
                "points": 4
            },
            {
                "label": "B",
                "text": "Subcollections used appropriately",
                "points": 3
            },
            {
                "label": "C",
                "text": "Flat structure only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Misuse of subcollections",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 105,
        "text": "Is there a clear data model documented?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive data model with ER diagrams + documentation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data model documented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal documentation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No documentation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 106,
        "text": "Are collection names consistent and meaningful?",
        "options": [
            {
                "label": "A",
                "text": "Naming conventions documented + linting enforced",
                "points": 4
            },
            {
                "label": "B",
                "text": "Consistent naming used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mostly consistent",
                "points": 2
            },
            {
                "label": "D",
                "text": "Inconsistent naming",
                "points": 1
            },
            {
                "label": "E",
                "text": "No conventions",
                "points": 0
            }
        ]
    },
    {
        "id": 107,
        "text": "Are field names standardized across collections?",
        "options": [
            {
                "label": "A",
                "text": "Field naming standards + validation in CI/CD",
                "points": 4
            },
            {
                "label": "B",
                "text": "Standardized field names",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mostly consistent",
                "points": 2
            },
            {
                "label": "D",
                "text": "Inconsistent fields",
                "points": 1
            },
            {
                "label": "E",
                "text": "No standards",
                "points": 0
            }
        ]
    },
    {
        "id": 108,
        "text": "Is there separation between production and test data?",
        "options": [
            {
                "label": "A",
                "text": "Separate projects for dev/staging/prod + data isolation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Environment separation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Same project, different collections",
                "points": 2
            },
            {
                "label": "D",
                "text": "Mixed data (dangerous)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No separation",
                "points": 0
            }
        ]
    },
    {
        "id": 109,
        "text": "Are timestamps used consistently (server vs client)?",
        "options": [
            {
                "label": "A",
                "text": "Server timestamps enforced via security rules",
                "points": 4
            },
            {
                "label": "B",
                "text": "Server timestamps used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mix of server and client timestamps",
                "points": 2
            },
            {
                "label": "D",
                "text": "Client timestamps (unreliable)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No timestamp strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 110,
        "text": "Is there a soft delete strategy to prevent data loss?",
        "options": [
            {
                "label": "A",
                "text": "Soft deletes with archive collection + retention policy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Soft delete implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Hard deletes with backups",
                "points": 2
            },
            {
                "label": "D",
                "text": "Hard deletes only (risky)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No delete strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 111,
        "text": "Are array fields used appropriately (not oversized)?",
        "options": [
            {
                "label": "A",
                "text": "Array size limits enforced + migration to subcollections when needed",
                "points": 4
            },
            {
                "label": "B",
                "text": "Array usage controlled",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some large arrays",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unconstrained arrays (risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No array management",
                "points": 0
            }
        ]
    },
    {
        "id": 112,
        "text": "Is there prevention of unbounded array growth?",
        "options": [
            {
                "label": "A",
                "text": "Array size validation + auto-migration strategy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Growth prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of risk",
                "points": 2
            },
            {
                "label": "D",
                "text": "Arrays can grow unbounded",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 113,
        "text": "Are map fields structured consistently?",
        "options": [
            {
                "label": "A",
                "text": "Map schemas validated + TypeScript interfaces enforced",
                "points": 4
            },
            {
                "label": "B",
                "text": "Consistent map structures",
                "points": 3
            },
            {
                "label": "C",
                "text": "Inconsistent maps",
                "points": 2
            },
            {
                "label": "D",
                "text": "Arbitrary map fields",
                "points": 1
            },
            {
                "label": "E",
                "text": "No structure",
                "points": 0
            }
        ]
    },
    {
        "id": 114,
        "text": "Is there versioning for schema changes?",
        "options": [
            {
                "label": "A",
                "text": "Schema versioning with migration scripts + rollback capability",
                "points": 4
            },
            {
                "label": "B",
                "text": "Schema versioning implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual schema updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "No versioning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 115,
        "text": "Are foreign key relationships tracked (even though NoSQL)?",
        "options": [
            {
                "label": "A",
                "text": "Reference integrity validation + cleanup on deletes",
                "points": 4
            },
            {
                "label": "B",
                "text": "Relationships tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Orphaned references possible",
                "points": 2
            },
            {
                "label": "D",
                "text": "No relationship tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 116,
        "text": "Is there prevention of orphaned documents?",
        "options": [
            {
                "label": "A",
                "text": "Cascading deletes + orphan cleanup jobs",
                "points": 4
            },
            {
                "label": "B",
                "text": "Orphan prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual cleanup",
                "points": 2
            },
            {
                "label": "D",
                "text": "Orphans accumulate",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 117,
        "text": "Are indexes created for all common queries?",
        "options": [
            {
                "label": "A",
                "text": "Auto-index detection + creation + monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Indexes created for queries",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some indexes missing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many missing indexes",
                "points": 1
            },
            {
                "label": "E",
                "text": "No indexes",
                "points": 0
            }
        ]
    },
    {
        "id": 118,
        "text": "Is there monitoring of index usage and performance?",
        "options": [
            {
                "label": "A",
                "text": "Index usage analytics + unused index detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Index monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No index monitoring",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unknown index performance",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 119,
        "text": "Are composite indexes optimized for query patterns?",
        "options": [
            {
                "label": "A",
                "text": "Composite indexes designed with query analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Composite indexes used effectively",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single-field indexes only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No composite indexes",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 120,
        "text": "Is there prevention of expensive queries (e.g., no limits)?",
        "options": [
            {
                "label": "A",
                "text": "Query cost analysis + automatic limiting + pagination enforcement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Expensive query prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some query limits",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unbounded queries possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No prevention",
                "points": 0
            }
        ]
    },
    {
        "id": 121,
        "text": "Are security rules comprehensive and tested?",
        "options": [
            {
                "label": "A",
                "text": "100% test coverage of security rules + CI/CD validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Security rules tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic security rules",
                "points": 2
            },
            {
                "label": "D",
                "text": "Weak security rules",
                "points": 1
            },
            {
                "label": "E",
                "text": "No security rules",
                "points": 0
            }
        ]
    },
    {
        "id": 122,
        "text": "Do security rules prevent data leakage?",
        "options": [
            {
                "label": "A",
                "text": "Least privilege access + field-level security + audited",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data leakage prevention in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Broad access granted",
                "points": 2
            },
            {
                "label": "D",
                "text": "Data easily leaked",
                "points": 1
            },
            {
                "label": "E",
                "text": "No protection",
                "points": 0
            }
        ]
    },
    {
        "id": 123,
        "text": "Are write operations validated in security rules?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive validation (types, ranges, business logic)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Write validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No write validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 124,
        "text": "Is there prevention of data tampering via security rules?",
        "options": [
            {
                "label": "A",
                "text": "Protected fields + server-only writes + audit logging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tampering prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some protected fields",
                "points": 2
            },
            {
                "label": "D",
                "text": "All fields client-writable",
                "points": 1
            },
            {
                "label": "E",
                "text": "No protection",
                "points": 0
            }
        ]
    },
    {
        "id": 125,
        "text": "Are security rules optimized for performance?",
        "options": [
            {
                "label": "A",
                "text": "Rules designed for minimal rule evaluation + benchmarked",
                "points": 4
            },
            {
                "label": "B",
                "text": "Performance-optimized rules",
                "points": 3
            },
            {
                "label": "C",
                "text": "Rules sometimes slow",
                "points": 2
            },
            {
                "label": "D",
                "text": "Rules cause slow queries",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 126,
        "text": "Are transactions used for multi-document updates?",
        "options": [
            {
                "label": "A",
                "text": "All related writes in transactions + retry logic",
                "points": 4
            },
            {
                "label": "B",
                "text": "Transactions used appropriately",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some transactions used",
                "points": 2
            },
            {
                "label": "D",
                "text": "No transactions (inconsistency risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 127,
        "text": "Is there handling of transaction failures and retries?",
        "options": [
            {
                "label": "A",
                "text": "Exponential backoff retry + circuit breaking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Retry logic implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic retry",
                "points": 2
            },
            {
                "label": "D",
                "text": "No retry handling",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 128,
        "text": "Are atomic operations used where possible?",
        "options": [
            {
                "label": "A",
                "text": "Field-level atomic operations (increment, arrayUnion, etc.)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Atomic operations used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Read-modify-write pattern (race conditions)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No atomic operations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 129,
        "text": "Is there prevention of race conditions in wallet/balance updates?",
        "options": [
            {
                "label": "A",
                "text": "Optimistic locking + transaction isolation + validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Race condition prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Race conditions possible",
                "points": 2
            },
            {
                "label": "D",
                "text": "No race prevention",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 130,
        "text": "Are StudyCoin transactions truly atomic?",
        "options": [
            {
                "label": "A",
                "text": "Distributed transactions with rollback capability",
                "points": 4
            },
            {
                "label": "B",
                "text": "Atomic transactions implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Best-effort atomicity",
                "points": 2
            },
            {
                "label": "D",
                "text": "Non-atomic operations (risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not atomic",
                "points": 0
            }
        ]
    },
    {
        "id": 131,
        "text": "Is there double-spend prevention for StudyCoin?",
        "options": [
            {
                "label": "A",
                "text": "Transaction validation + balance locking + audit trail",
                "points": 4
            },
            {
                "label": "B",
                "text": "Double-spend prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic balance checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Double-spend possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not prevented",
                "points": 0
            }
        ]
    },
    {
        "id": 132,
        "text": "Are negative balance scenarios prevented?",
        "options": [
            {
                "label": "A",
                "text": "Balance validation in transactions + security rules",
                "points": 4
            },
            {
                "label": "B",
                "text": "Negative balance prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Client-side validation only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Negative balances possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not prevented",
                "points": 0
            }
        ]
    },
    {
        "id": 133,
        "text": "Is there idempotency for critical operations (payments, etc.)?",
        "options": [
            {
                "label": "A",
                "text": "Idempotency keys with deduplication + expiry",
                "points": 4
            },
            {
                "label": "B",
                "text": "Idempotency implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some operations idempotent",
                "points": 2
            },
            {
                "label": "D",
                "text": "No idempotency",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 134,
        "text": "Are Stripe webhooks idempotent?",
        "options": [
            {
                "label": "A",
                "text": "Idempotency tracking + processed event storage",
                "points": 4
            },
            {
                "label": "B",
                "text": "Webhook idempotency implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic duplicate detection",
                "points": 2
            },
            {
                "label": "D",
                "text": "Can process webhooks multiple times",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 135,
        "text": "Is there reconciliation between Stripe and Firestore?",
        "options": [
            {
                "label": "A",
                "text": "Automated reconciliation with discrepancy alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Manual reconciliation process",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional reconciliation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No reconciliation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 136,
        "text": "Are blockchain transactions validated before Firestore updates?",
        "options": [
            {
                "label": "A",
                "text": "On-chain confirmation required + rollback on failure",
                "points": 4
            },
            {
                "label": "B",
                "text": "Blockchain validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Trust blockchain results",
                "points": 2
            },
            {
                "label": "D",
                "text": "No blockchain validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 137,
        "text": "Is there handling of blockchain transaction failures?",
        "options": [
            {
                "label": "A",
                "text": "Retry logic + user notification + refund process",
                "points": 4
            },
            {
                "label": "B",
                "text": "Failure handling implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic error handling",
                "points": 2
            },
            {
                "label": "D",
                "text": "Failures not handled well",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not handled",
                "points": 0
            }
        ]
    },
    {
        "id": 138,
        "text": "Are off-chain balances synced with on-chain accurately?",
        "options": [
            {
                "label": "A",
                "text": "Automated sync + discrepancy detection + resolution",
                "points": 4
            },
            {
                "label": "B",
                "text": "Sync process implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual sync",
                "points": 2
            },
            {
                "label": "D",
                "text": "Balances drift out of sync",
                "points": 1
            },
            {
                "label": "E",
                "text": "No sync",
                "points": 0
            }
        ]
    },
    {
        "id": 139,
        "text": "Is there audit logging of all financial transactions?",
        "options": [
            {
                "label": "A",
                "text": "Immutable audit log with cryptographic verification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Comprehensive audit logging",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic transaction logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "Incomplete logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "No audit log",
                "points": 0
            }
        ]
    },
    {
        "id": 140,
        "text": "Can audit logs be queried for fraud detection?",
        "options": [
            {
                "label": "A",
                "text": "Audit log analytics + anomaly detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Audit logs queryable",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual log review",
                "points": 2
            },
            {
                "label": "D",
                "text": "Logs not easily queryable",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 141,
        "text": "Is there detection of unusual wallet activity?",
        "options": [
            {
                "label": "A",
                "text": "ML-based fraud detection + automatic flagging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Unusual activity monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No unusual activity detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 142,
        "text": "Are large transactions flagged for review?",
        "options": [
            {
                "label": "A",
                "text": "Automated large transaction review + approval workflow",
                "points": 4
            },
            {
                "label": "B",
                "text": "Large transaction flagging",
                "points": 3
            },
            {
                "label": "C",
                "text": "No special handling",
                "points": 2
            },
            {
                "label": "D",
                "text": "All transactions treated equally",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 143,
        "text": "Is there rate limiting on financial operations?",
        "options": [
            {
                "label": "A",
                "text": "Tiered rate limits with velocity checks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Financial rate limiting implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "General rate limiting only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rate limiting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 144,
        "text": "Are marketplace purchases atomic (payment + content delivery)?",
        "options": [
            {
                "label": "A",
                "text": "Two-phase commit with rollback + guaranteed delivery",
                "points": 4
            },
            {
                "label": "B",
                "text": "Atomic marketplace transactions",
                "points": 3
            },
            {
                "label": "C",
                "text": "Best-effort delivery",
                "points": 2
            },
            {
                "label": "D",
                "text": "Payment and delivery separate (risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not atomic",
                "points": 0
            }
        ]
    },
    {
        "id": 145,
        "text": "Is there refund handling for failed marketplace transactions?",
        "options": [
            {
                "label": "A",
                "text": "Automated refund + notification + support escalation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Refund process implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual refunds",
                "points": 2
            },
            {
                "label": "D",
                "text": "No refund process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not handled",
                "points": 0
            }
        ]
    },
    {
        "id": 146,
        "text": "Are tutoring session payments held in escrow?",
        "options": [
            {
                "label": "A",
                "text": "Escrow system with release on completion",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some escrow mechanism",
                "points": 3
            },
            {
                "label": "C",
                "text": "Immediate payment (risk)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No escrow",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 147,
        "text": "Is there dispute resolution for marketplace/tutoring?",
        "options": [
            {
                "label": "A",
                "text": "Structured dispute process + mediation + data-driven resolution",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dispute resolution implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual case-by-case",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dispute process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 148,
        "text": "Are platform fees calculated and deducted correctly?",
        "options": [
            {
                "label": "A",
                "text": "Fee calculation validated + reconciliation + reporting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Fee calculation correct",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic fee deduction",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fee calculation errors possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 149,
        "text": "Is there prevention of platform fee manipulation?",
        "options": [
            {
                "label": "A",
                "text": "Server-side fee calculation + validation + audit",
                "points": 4
            },
            {
                "label": "B",
                "text": "Fee manipulation prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Client calculates fees (risk)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fees can be manipulated",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not prevented",
                "points": 0
            }
        ]
    },
    {
        "id": 150,
        "text": "Are tax records maintained for marketplace transactions?",
        "options": [
            {
                "label": "A",
                "text": "Tax record keeping + 1099 generation + reporting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tax records maintained",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic transaction records",
                "points": 2
            },
            {
                "label": "D",
                "text": "No tax considerations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not maintained",
                "points": 0
            }
        ]
    },
    {
        "id": 151,
        "text": "Are database backups automated?",
        "options": [
            {
                "label": "A",
                "text": "Automated daily backups + verification + retention policy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Automated backups in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual backups",
                "points": 2
            },
            {
                "label": "D",
                "text": "Infrequent backups",
                "points": 1
            },
            {
                "label": "E",
                "text": "No backups",
                "points": 0
            }
        ]
    },
    {
        "id": 152,
        "text": "Are backup restoration procedures tested?",
        "options": [
            {
                "label": "A",
                "text": "Quarterly restoration drills + documented runbooks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Restoration tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Restoration untested",
                "points": 2
            },
            {
                "label": "D",
                "text": "No restoration process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 153,
        "text": "Is there point-in-time recovery capability?",
        "options": [
            {
                "label": "A",
                "text": "PITR with granular recovery (any point in last 30 days)",
                "points": 4
            },
            {
                "label": "B",
                "text": "PITR available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Daily snapshots only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No PITR",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 154,
        "text": "Are backups stored in multiple regions?",
        "options": [
            {
                "label": "A",
                "text": "Multi-region backup with geo-redundancy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Multi-region storage",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single region backup",
                "points": 2
            },
            {
                "label": "D",
                "text": "Local backups only",
                "points": 1
            },
            {
                "label": "E",
                "text": "No off-site backups",
                "points": 0
            }
        ]
    },
    {
        "id": 155,
        "text": "Is there backup encryption?",
        "options": [
            {
                "label": "A",
                "text": "Encrypted backups with key rotation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backups encrypted",
                "points": 3
            },
            {
                "label": "C",
                "text": "Unencrypted backups",
                "points": 2
            },
            {
                "label": "D",
                "text": "Backup security not considered",
                "points": 1
            },
            {
                "label": "E",
                "text": "No encryption",
                "points": 0
            }
        ]
    },
    {
        "id": 156,
        "text": "Are backup access controls in place?",
        "options": [
            {
                "label": "A",
                "text": "Least privilege access + MFA + audit logging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backup access controlled",
                "points": 3
            },
            {
                "label": "C",
                "text": "Broad backup access",
                "points": 2
            },
            {
                "label": "D",
                "text": "Anyone can access backups",
                "points": 1
            },
            {
                "label": "E",
                "text": "No access controls",
                "points": 0
            }
        ]
    },
    {
        "id": 157,
        "text": "Is there monitoring of backup success/failure?",
        "options": [
            {
                "label": "A",
                "text": "Automated backup monitoring + alerts on failure",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backup monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual backup checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Backup status unknown",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 158,
        "text": "Is backup retention policy defined and enforced?",
        "options": [
            {
                "label": "A",
                "text": "Tiered retention (daily/weekly/monthly) + automated cleanup",
                "points": 4
            },
            {
                "label": "B",
                "text": "Retention policy enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Keep all backups (expensive)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No retention policy",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not defined",
                "points": 0
            }
        ]
    },
    {
        "id": 159,
        "text": "Are data migrations scripted and version controlled?",
        "options": [
            {
                "label": "A",
                "text": "All migrations in code + tested + reversible",
                "points": 4
            },
            {
                "label": "B",
                "text": "Migration scripts version controlled",
                "points": 3
            },
            {
                "label": "C",
                "text": "Ad-hoc migration scripts",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual migrations",
                "points": 1
            },
            {
                "label": "E",
                "text": "No migration process",
                "points": 0
            }
        ]
    },
    {
        "id": 160,
        "text": "Is there a rollback plan for failed migrations?",
        "options": [
            {
                "label": "A",
                "text": "Automated rollback + data integrity checks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rollback plan documented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual rollback process",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rollback capability",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not planned",
                "points": 0
            }
        ]
    },
    {
        "id": 161,
        "text": "Are migrations tested in staging before production?",
        "options": [
            {
                "label": "A",
                "text": "Mandatory staging testing + production dry-run",
                "points": 4
            },
            {
                "label": "B",
                "text": "Staging testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Sometimes tested in staging",
                "points": 2
            },
            {
                "label": "D",
                "text": "Direct to production (risky)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No staging environment",
                "points": 0
            }
        ]
    },
    {
        "id": 162,
        "text": "Is there prevention of data loss during migrations?",
        "options": [
            {
                "label": "A",
                "text": "Pre-migration backup + validation + incremental migration",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data loss prevention in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic backup before migration",
                "points": 2
            },
            {
                "label": "D",
                "text": "Data loss possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No prevention",
                "points": 0
            }
        ]
    },
    {
        "id": 163,
        "text": "Are large migrations batched to avoid timeouts?",
        "options": [
            {
                "label": "A",
                "text": "Automatic batching with progress tracking + resumability",
                "points": 4
            },
            {
                "label": "B",
                "text": "Batching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "All-at-once migrations",
                "points": 2
            },
            {
                "label": "D",
                "text": "Migrations time out",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 164,
        "text": "Is there data validation after migrations?",
        "options": [
            {
                "label": "A",
                "text": "Automated validation with checksums + row counts + sampling",
                "points": 4
            },
            {
                "label": "B",
                "text": "Post-migration validation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual spot checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 165,
        "text": "Are schema changes backward compatible?",
        "options": [
            {
                "label": "A",
                "text": "Backward compatibility required + versioning",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backward compatibility maintained",
                "points": 3
            },
            {
                "label": "C",
                "text": "Breaking changes sometimes",
                "points": 2
            },
            {
                "label": "D",
                "text": "Frequent breaking changes",
                "points": 1
            },
            {
                "label": "E",
                "text": "No compatibility consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 166,
        "text": "Is there a data archival strategy?",
        "options": [
            {
                "label": "A",
                "text": "Automated archival with cold storage + retrieval process",
                "points": 4
            },
            {
                "label": "B",
                "text": "Archival strategy defined",
                "points": 3
            },
            {
                "label": "C",
                "text": "Delete old data",
                "points": 2
            },
            {
                "label": "D",
                "text": "Keep all data forever (expensive)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No archival strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 167,
        "text": "Are deleted items recoverable for a grace period?",
        "options": [
            {
                "label": "A",
                "text": "Soft delete with 30-day recovery + user self-service",
                "points": 4
            },
            {
                "label": "B",
                "text": "Grace period recovery implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Immediate hard delete",
                "points": 2
            },
            {
                "label": "D",
                "text": "No recovery possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 168,
        "text": "Is there export functionality for user data (GDPR)?",
        "options": [
            {
                "label": "A",
                "text": "Self-service data export in standard formats",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data export available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual export process",
                "points": 2
            },
            {
                "label": "D",
                "text": "No data export",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 169,
        "text": "Is user data deletion comprehensive (right to erasure)?",
        "options": [
            {
                "label": "A",
                "text": "Complete deletion across all systems + verification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data deletion implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Partial deletion",
                "points": 2
            },
            {
                "label": "D",
                "text": "Data retained after deletion",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 170,
        "text": "Are there checks for referential integrity?",
        "options": [
            {
                "label": "A",
                "text": "Automated integrity checks + cleanup jobs",
                "points": 4
            },
            {
                "label": "B",
                "text": "Integrity checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual integrity checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No integrity checking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 171,
        "text": "Is there detection and cleanup of orphaned data?",
        "options": [
            {
                "label": "A",
                "text": "Scheduled orphan detection + automated cleanup",
                "points": 4
            },
            {
                "label": "B",
                "text": "Orphan cleanup implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual cleanup",
                "points": 2
            },
            {
                "label": "D",
                "text": "Orphans accumulate",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 172,
        "text": "Are data quality checks automated?",
        "options": [
            {
                "label": "A",
                "text": "Continuous data quality monitoring + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Automated quality checks",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual data reviews",
                "points": 2
            },
            {
                "label": "D",
                "text": "No quality checks",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 173,
        "text": "Is there monitoring of data growth over time?",
        "options": [
            {
                "label": "A",
                "text": "Growth tracking + forecasting + capacity planning",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data growth monitored",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional size checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Growth not monitored",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 174,
        "text": "Are storage costs optimized?",
        "options": [
            {
                "label": "A",
                "text": "Cost optimization with data lifecycle management",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cost optimization efforts",
                "points": 3
            },
            {
                "label": "C",
                "text": "No cost optimization",
                "points": 2
            },
            {
                "label": "D",
                "text": "Expensive data storage",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 175,
        "text": "Is there disaster recovery testing?",
        "options": [
            {
                "label": "A",
                "text": "Annual DR drills with full environment restoration",
                "points": 4
            },
            {
                "label": "B",
                "text": "DR testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "DR plan untested",
                "points": 2
            },
            {
                "label": "D",
                "text": "No DR plan",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 176,
        "text": "Are password requirements strong (length, complexity)?",
        "options": [
            {
                "label": "A",
                "text": "Strong password policy enforced (12+ chars, complexity)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Password requirements in place",
                "points": 3
            },
            {
                "label": "C",
                "text": "Weak password requirements",
                "points": 2
            },
            {
                "label": "D",
                "text": "No password requirements",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not enforced",
                "points": 0
            }
        ]
    },
    {
        "id": 177,
        "text": "Is there protection against brute force login attempts?",
        "options": [
            {
                "label": "A",
                "text": "Rate limiting + account lockout + CAPTCHA",
                "points": 4
            },
            {
                "label": "B",
                "text": "Brute force protection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic rate limiting",
                "points": 2
            },
            {
                "label": "D",
                "text": "No brute force protection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 178,
        "text": "Are failed login attempts logged and monitored?",
        "options": [
            {
                "label": "A",
                "text": "Failed login monitoring + automated alerts + threat analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Failed login logging implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Logs exist but not monitored",
                "points": 2
            },
            {
                "label": "D",
                "text": "No failed login logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not logged",
                "points": 0
            }
        ]
    },
    {
        "id": 179,
        "text": "Is there detection of credential stuffing attacks?",
        "options": [
            {
                "label": "A",
                "text": "Credential stuffing detection + automated blocking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of threat",
                "points": 2
            },
            {
                "label": "D",
                "text": "No detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 180,
        "text": "Are user sessions secured with appropriate timeouts?",
        "options": [
            {
                "label": "A",
                "text": "Configurable session timeouts + idle detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Session timeouts implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Very long sessions",
                "points": 2
            },
            {
                "label": "D",
                "text": "Sessions never expire",
                "points": 1
            },
            {
                "label": "E",
                "text": "No session management",
                "points": 0
            }
        ]
    },
    {
        "id": 181,
        "text": "Is there multi-factor authentication (MFA) available?",
        "options": [
            {
                "label": "A",
                "text": "MFA required for sensitive operations + multiple methods",
                "points": 4
            },
            {
                "label": "B",
                "text": "MFA available and encouraged",
                "points": 3
            },
            {
                "label": "C",
                "text": "MFA available but optional",
                "points": 2
            },
            {
                "label": "D",
                "text": "No MFA",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 182,
        "text": "Are authentication tokens (JWT) secured properly?",
        "options": [
            {
                "label": "A",
                "text": "Short-lived tokens + refresh tokens + rotation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tokens secured properly",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic token handling",
                "points": 2
            },
            {
                "label": "D",
                "text": "Long-lived tokens (risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Insecure tokens",
                "points": 0
            }
        ]
    },
    {
        "id": 183,
        "text": "Is there prevention of token theft and replay attacks?",
        "options": [
            {
                "label": "A",
                "text": "Token binding + fingerprinting + expiry + rotation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Token theft prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic token security",
                "points": 2
            },
            {
                "label": "D",
                "text": "Tokens easily stolen",
                "points": 1
            },
            {
                "label": "E",
                "text": "No protection",
                "points": 0
            }
        ]
    },
    {
        "id": 184,
        "text": "Are refresh tokens rotated on use?",
        "options": [
            {
                "label": "A",
                "text": "Automatic refresh token rotation + revocation of old tokens",
                "points": 4
            },
            {
                "label": "B",
                "text": "Refresh token rotation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Static refresh tokens",
                "points": 2
            },
            {
                "label": "D",
                "text": "No refresh tokens",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 185,
        "text": "Is there detection of account takeover attempts?",
        "options": [
            {
                "label": "A",
                "text": "Anomaly detection + device fingerprinting + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Takeover detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No takeover detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 186,
        "text": "Are email verification codes time-limited and single-use?",
        "options": [
            {
                "label": "A",
                "text": "Codes expire in 15 min + single-use + rate limited",
                "points": 4
            },
            {
                "label": "B",
                "text": "Verification codes secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Codes expire slowly",
                "points": 2
            },
            {
                "label": "D",
                "text": "Codes reusable",
                "points": 1
            },
            {
                "label": "E",
                "text": "No expiration",
                "points": 0
            }
        ]
    },
    {
        "id": 187,
        "text": "Is there rate limiting on verification code requests?",
        "options": [
            {
                "label": "A",
                "text": "Aggressive rate limiting + CAPTCHA + phone verification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rate limiting implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic rate limiting",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rate limiting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 188,
        "text": "Are password reset links time-limited and single-use?",
        "options": [
            {
                "label": "A",
                "text": "Links expire in 1 hour + single-use + invalidate on password change",
                "points": 4
            },
            {
                "label": "B",
                "text": "Reset links secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Long-lived reset links",
                "points": 2
            },
            {
                "label": "D",
                "text": "Links reusable",
                "points": 1
            },
            {
                "label": "E",
                "text": "No security",
                "points": 0
            }
        ]
    },
    {
        "id": 189,
        "text": "Is there notification of password changes to user email?",
        "options": [
            {
                "label": "A",
                "text": "Immediate notification + account activity log",
                "points": 4
            },
            {
                "label": "B",
                "text": "Password change notifications sent",
                "points": 3
            },
            {
                "label": "C",
                "text": "No notifications",
                "points": 2
            },
            {
                "label": "D",
                "text": "User unaware of changes",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 190,
        "text": "Are OAuth scopes restricted to minimum necessary?",
        "options": [
            {
                "label": "A",
                "text": "Least privilege scopes + scope review + user consent",
                "points": 4
            },
            {
                "label": "B",
                "text": "Minimal scopes requested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Requesting broad scopes",
                "points": 2
            },
            {
                "label": "D",
                "text": "Requesting all scopes",
                "points": 1
            },
            {
                "label": "E",
                "text": "No scope consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 191,
        "text": "Is there validation of OAuth redirect URIs?",
        "options": [
            {
                "label": "A",
                "text": "Whitelist validation + exact match required",
                "points": 4
            },
            {
                "label": "B",
                "text": "Redirect URI validation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Open redirects possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No validation",
                "points": 0
            }
        ]
    },
    {
        "id": 192,
        "text": "Are social login providers (Google) properly configured?",
        "options": [
            {
                "label": "A",
                "text": "Secure configuration + regular security reviews",
                "points": 4
            },
            {
                "label": "B",
                "text": "Properly configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic configuration",
                "points": 2
            },
            {
                "label": "D",
                "text": "Misconfigured (risk)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 193,
        "text": "Is there prevention of account enumeration?",
        "options": [
            {
                "label": "A",
                "text": "Generic error messages + timing attack prevention",
                "points": 4
            },
            {
                "label": "B",
                "text": "Enumeration prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Email/username existence leaks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Easy to enumerate accounts",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not prevented",
                "points": 0
            }
        ]
    },
    {
        "id": 194,
        "text": "Are user roles and permissions properly enforced?",
        "options": [
            {
                "label": "A",
                "text": "Role-based access control (RBAC) + custom claims + validated",
                "points": 4
            },
            {
                "label": "B",
                "text": "Roles properly enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic role checking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Role bypass possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No role enforcement",
                "points": 0
            }
        ]
    },
    {
        "id": 195,
        "text": "Is there prevention of privilege escalation?",
        "options": [
            {
                "label": "A",
                "text": "Privilege escalation detection + audit + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Privilege escalation prevented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Roles can be escalated",
                "points": 2
            },
            {
                "label": "D",
                "text": "Easy to escalate privileges",
                "points": 1
            },
            {
                "label": "E",
                "text": "No prevention",
                "points": 0
            }
        ]
    },
    {
        "id": 196,
        "text": "Are admin accounts protected with extra security?",
        "options": [
            {
                "label": "A",
                "text": "Admin MFA required + IP restrictions + audit logging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Admin accounts extra-secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Same security as normal users",
                "points": 2
            },
            {
                "label": "D",
                "text": "Weak admin security",
                "points": 1
            },
            {
                "label": "E",
                "text": "No extra protection",
                "points": 0
            }
        ]
    },
    {
        "id": 197,
        "text": "Is there monitoring of admin account activity?",
        "options": [
            {
                "label": "A",
                "text": "Real-time admin activity monitoring + alerts on anomalies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Admin monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Logs exist but not monitored",
                "points": 2
            },
            {
                "label": "D",
                "text": "No admin monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 198,
        "text": "Are service account keys secured and rotated?",
        "options": [
            {
                "label": "A",
                "text": "Keys in secrets manager + auto-rotation + least privilege",
                "points": 4
            },
            {
                "label": "B",
                "text": "Service account keys secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Keys in environment variables",
                "points": 2
            },
            {
                "label": "D",
                "text": "Keys in code",
                "points": 1
            },
            {
                "label": "E",
                "text": "No key security",
                "points": 0
            }
        ]
    },
    {
        "id": 199,
        "text": "Is there detection of compromised accounts?",
        "options": [
            {
                "label": "A",
                "text": "Compromised account detection + automated lockout + user notification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual detection only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 200,
        "text": "Are users notified of new device logins?",
        "options": [
            {
                "label": "A",
                "text": "New device notifications + device management dashboard",
                "points": 4
            },
            {
                "label": "B",
                "text": "New device notifications sent",
                "points": 3
            },
            {
                "label": "C",
                "text": "No device notifications",
                "points": 2
            },
            {
                "label": "D",
                "text": "User unaware of new logins",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 201,
        "text": "Are Cloud Functions protected with authentication?",
        "options": [
            {
                "label": "A",
                "text": "All functions require auth + context validation + rate limiting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Function authentication enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some functions unprotected",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many functions unprotected",
                "points": 1
            },
            {
                "label": "E",
                "text": "No authentication",
                "points": 0
            }
        ]
    },
    {
        "id": 202,
        "text": "Is input validation performed on all function calls?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive input validation + sanitization + type checking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Input validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Minimal validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "No validation",
                "points": 0
            }
        ]
    },
    {
        "id": 203,
        "text": "Are function parameters type-checked?",
        "options": [
            {
                "label": "A",
                "text": "Runtime type validation + TypeScript interfaces + Zod/Yup schemas",
                "points": 4
            },
            {
                "label": "B",
                "text": "Type checking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "TypeScript only (no runtime checks)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No type checking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 204,
        "text": "Is there prevention of injection attacks in functions?",
        "options": [
            {
                "label": "A",
                "text": "Parameterized queries + input sanitization + WAF rules",
                "points": 4
            },
            {
                "label": "B",
                "text": "Injection prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic sanitization",
                "points": 2
            },
            {
                "label": "D",
                "text": "Injection possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No prevention",
                "points": 0
            }
        ]
    },
    {
        "id": 205,
        "text": "Are function execution times monitored and limited?",
        "options": [
            {
                "label": "A",
                "text": "Execution time monitoring + timeouts + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Time limits enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Default timeouts only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No time limits",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 206,
        "text": "Is there rate limiting per user on function calls?",
        "options": [
            {
                "label": "A",
                "text": "Per-user rate limiting + tiered limits + abuse detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "User-level rate limiting",
                "points": 3
            },
            {
                "label": "C",
                "text": "Global rate limiting only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rate limiting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 207,
        "text": "Are expensive operations protected from abuse?",
        "options": [
            {
                "label": "A",
                "text": "Cost-based rate limiting + CAPTCHA + payment verification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Expensive operation protection",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "Expensive operations unprotected",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not protected",
                "points": 0
            }
        ]
    },
    {
        "id": 208,
        "text": "Is there detection of function abuse (spam, attacks)?",
        "options": [
            {
                "label": "A",
                "text": "ML-based abuse detection + automated blocking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Abuse detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No abuse detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 209,
        "text": "Are function errors handled securely (no info leakage)?",
        "options": [
            {
                "label": "A",
                "text": "Generic error messages + detailed logs server-side only",
                "points": 4
            },
            {
                "label": "B",
                "text": "Secure error handling",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some error details leaked",
                "points": 2
            },
            {
                "label": "D",
                "text": "Stack traces exposed",
                "points": 1
            },
            {
                "label": "E",
                "text": "No secure error handling",
                "points": 0
            }
        ]
    },
    {
        "id": 210,
        "text": "Are sensitive operations audited?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive audit logging with tamper-proof storage",
                "points": 4
            },
            {
                "label": "B",
                "text": "Sensitive operations audited",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some operations logged",
                "points": 2
            },
            {
                "label": "D",
                "text": "No audit logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not audited",
                "points": 0
            }
        ]
    },
    {
        "id": 211,
        "text": "Is there prevention of CSRF on callable functions?",
        "options": [
            {
                "label": "A",
                "text": "CSRF tokens + origin validation + SameSite cookies",
                "points": 4
            },
            {
                "label": "B",
                "text": "CSRF prevention implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Relying on CORS only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No CSRF protection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 212,
        "text": "Are CORS policies restrictive?",
        "options": [
            {
                "label": "A",
                "text": "Whitelist of allowed origins + no wildcards",
                "points": 4
            },
            {
                "label": "B",
                "text": "Restrictive CORS policy",
                "points": 3
            },
            {
                "label": "C",
                "text": "Permissive CORS (allow all)",
                "points": 2
            },
            {
                "label": "D",
                "text": "CORS misconfigured",
                "points": 1
            },
            {
                "label": "E",
                "text": "No CORS policy",
                "points": 0
            }
        ]
    },
    {
        "id": 213,
        "text": "Are function secrets (API keys) secured?",
        "options": [
            {
                "label": "A",
                "text": "Secrets in Firebase Secret Manager + rotation + access controls",
                "points": 4
            },
            {
                "label": "B",
                "text": "Secrets properly secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Secrets in environment variables",
                "points": 2
            },
            {
                "label": "D",
                "text": "Secrets in code",
                "points": 1
            },
            {
                "label": "E",
                "text": "No secret security",
                "points": 0
            }
        ]
    },
    {
        "id": 214,
        "text": "Is there separation between dev/staging/prod secrets?",
        "options": [
            {
                "label": "A",
                "text": "Separate secrets per environment + no prod access from lower envs",
                "points": 4
            },
            {
                "label": "B",
                "text": "Environment secret separation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Shared secrets across environments",
                "points": 2
            },
            {
                "label": "D",
                "text": "All environments use same secrets",
                "points": 1
            },
            {
                "label": "E",
                "text": "No separation",
                "points": 0
            }
        ]
    },
    {
        "id": 215,
        "text": "Are API responses validated before sending to client?",
        "options": [
            {
                "label": "A",
                "text": "Response validation + schema checking + sanitization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Response validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No response validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 216,
        "text": "Is there prevention of response tampering?",
        "options": [
            {
                "label": "A",
                "text": "Response signing + integrity checks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tampering prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "No tampering protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "Responses can be modified",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 217,
        "text": "Are third-party API keys not exposed to client?",
        "options": [
            {
                "label": "A",
                "text": "All API calls server-side + keys never sent to client",
                "points": 4
            },
            {
                "label": "B",
                "text": "API keys server-side only",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some API keys in client code",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many API keys exposed",
                "points": 1
            },
            {
                "label": "E",
                "text": "Keys exposed to client",
                "points": 0
            }
        ]
    },
    {
        "id": 218,
        "text": "Is there validation of third-party API responses?",
        "options": [
            {
                "label": "A",
                "text": "Response validation + error handling + fallback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Third-party response validation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Trust third-party responses",
                "points": 2
            },
            {
                "label": "D",
                "text": "No validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 219,
        "text": "Are webhook signatures verified?",
        "options": [
            {
                "label": "A",
                "text": "Signature verification + timestamp validation + replay prevention",
                "points": 4
            },
            {
                "label": "B",
                "text": "Webhook signature verification",
                "points": 3
            },
            {
                "label": "C",
                "text": "No signature verification",
                "points": 2
            },
            {
                "label": "D",
                "text": "Trust all webhooks",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 220,
        "text": "Is there idempotency for webhook processing?",
        "options": [
            {
                "label": "A",
                "text": "Idempotency keys + deduplication + processed event tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Webhook idempotency implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Webhooks can process multiple times",
                "points": 2
            },
            {
                "label": "D",
                "text": "No idempotency",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 221,
        "text": "Are function invocations logged?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive function logging + correlation IDs + audit trail",
                "points": 4
            },
            {
                "label": "B",
                "text": "Function logging implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "No logging",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not logged",
                "points": 0
            }
        ]
    },
    {
        "id": 222,
        "text": "Is there detection of unusual function call patterns?",
        "options": [
            {
                "label": "A",
                "text": "Anomaly detection + automated alerts + threat analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Pattern detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No pattern detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 223,
        "text": "Are function dependencies updated regularly?",
        "options": [
            {
                "label": "A",
                "text": "Automated dependency updates + security scanning + testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dependencies updated regularly",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "Outdated dependencies",
                "points": 1
            },
            {
                "label": "E",
                "text": "Never updated",
                "points": 0
            }
        ]
    },
    {
        "id": 224,
        "text": "Are functions scanned for vulnerabilities?",
        "options": [
            {
                "label": "A",
                "text": "Automated vulnerability scanning in CI/CD",
                "points": 4
            },
            {
                "label": "B",
                "text": "Vulnerability scanning performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual security review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No vulnerability scanning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not scanned",
                "points": 0
            }
        ]
    },
    {
        "id": 225,
        "text": "Is there least privilege for function permissions?",
        "options": [
            {
                "label": "A",
                "text": "Minimal permissions per function + regular audits",
                "points": 4
            },
            {
                "label": "B",
                "text": "Least privilege applied",
                "points": 3
            },
            {
                "label": "C",
                "text": "Broad permissions granted",
                "points": 2
            },
            {
                "label": "D",
                "text": "Functions have excessive permissions",
                "points": 1
            },
            {
                "label": "E",
                "text": "No permission consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 226,
        "text": "Are environment variables properly secured?",
        "options": [
            {
                "label": "A",
                "text": "Only public vars in client + secrets server-side only",
                "points": 4
            },
            {
                "label": "B",
                "text": "Environment variables secured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some secrets in client env vars",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many secrets exposed",
                "points": 1
            },
            {
                "label": "E",
                "text": "No security",
                "points": 0
            }
        ]
    },
    {
        "id": 227,
        "text": "Is there protection against XSS attacks?",
        "options": [
            {
                "label": "A",
                "text": "CSP headers + output encoding + framework protection",
                "points": 4
            },
            {
                "label": "B",
                "text": "XSS protection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "XSS vulnerabilities present",
                "points": 1
            },
            {
                "label": "E",
                "text": "No XSS protection",
                "points": 0
            }
        ]
    },
    {
        "id": 228,
        "text": "Is Content Security Policy (CSP) implemented?",
        "options": [
            {
                "label": "A",
                "text": "Strict CSP + nonce-based scripts + no inline scripts",
                "points": 4
            },
            {
                "label": "B",
                "text": "CSP headers set",
                "points": 3
            },
            {
                "label": "C",
                "text": "Permissive CSP",
                "points": 2
            },
            {
                "label": "D",
                "text": "No CSP",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 229,
        "text": "Are security headers configured (X-Frame, X-Content-Type)?",
        "options": [
            {
                "label": "A",
                "text": "All security headers + HSTS + strict configuration",
                "points": 4
            },
            {
                "label": "B",
                "text": "Security headers configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some headers missing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No security headers",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 230,
        "text": "Is HTTPS enforced everywhere?",
        "options": [
            {
                "label": "A",
                "text": "HTTPS only + HSTS + automatic HTTP redirect",
                "points": 4
            },
            {
                "label": "B",
                "text": "HTTPS enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "HTTPS optional",
                "points": 2
            },
            {
                "label": "D",
                "text": "HTTP allowed",
                "points": 1
            },
            {
                "label": "E",
                "text": "No HTTPS",
                "points": 0
            }
        ]
    },
    {
        "id": 231,
        "text": "Are cookies secured with HttpOnly and Secure flags?",
        "options": [
            {
                "label": "A",
                "text": "HttpOnly + Secure + SameSite=Strict cookies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cookie flags properly set",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some cookies insecure",
                "points": 2
            },
            {
                "label": "D",
                "text": "Cookies not secured",
                "points": 1
            },
            {
                "label": "E",
                "text": "No cookie security",
                "points": 0
            }
        ]
    },
    {
        "id": 232,
        "text": "Is there protection against clickjacking?",
        "options": [
            {
                "label": "A",
                "text": "X-Frame-Options: DENY + CSP frame-ancestors",
                "points": 4
            },
            {
                "label": "B",
                "text": "Clickjacking protection",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "No clickjacking protection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 233,
        "text": "Are user inputs sanitized before display?",
        "options": [
            {
                "label": "A",
                "text": "Automatic sanitization + encoding + validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Input sanitization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some sanitization",
                "points": 2
            },
            {
                "label": "D",
                "text": "Inputs not sanitized",
                "points": 1
            },
            {
                "label": "E",
                "text": "No sanitization",
                "points": 0
            }
        ]
    },
    {
        "id": 234,
        "text": "Is there protection against open redirects?",
        "options": [
            {
                "label": "A",
                "text": "Whitelist validation + no user-controlled redirects",
                "points": 4
            },
            {
                "label": "B",
                "text": "Open redirect prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic redirect validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Open redirects possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No protection",
                "points": 0
            }
        ]
    },
    {
        "id": 235,
        "text": "Are client-side secrets (if any) obfuscated?",
        "options": [
            {
                "label": "A",
                "text": "No secrets in client + environment variable validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Client secrets obfuscated",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some secrets visible",
                "points": 2
            },
            {
                "label": "D",
                "text": "Secrets in plain text",
                "points": 1
            },
            {
                "label": "E",
                "text": "No obfuscation",
                "points": 0
            }
        ]
    },
    {
        "id": 236,
        "text": "Is source code minified and obfuscated in production?",
        "options": [
            {
                "label": "A",
                "text": "Minification + obfuscation + tree shaking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Code minified",
                "points": 3
            },
            {
                "label": "C",
                "text": "Unminified code in production",
                "points": 2
            },
            {
                "label": "D",
                "text": "Readable source code",
                "points": 1
            },
            {
                "label": "E",
                "text": "No minification",
                "points": 0
            }
        ]
    },
    {
        "id": 237,
        "text": "Is there protection against MIME type sniffing?",
        "options": [
            {
                "label": "A",
                "text": "X-Content-Type-Options: nosniff header",
                "points": 4
            },
            {
                "label": "B",
                "text": "MIME sniffing protection",
                "points": 3
            },
            {
                "label": "C",
                "text": "No protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "MIME type vulnerabilities",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 238,
        "text": "Are subresource integrity (SRI) hashes used for CDN resources?",
        "options": [
            {
                "label": "A",
                "text": "SRI hashes for all external scripts/styles",
                "points": 4
            },
            {
                "label": "B",
                "text": "SRI implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No SRI",
                "points": 2
            },
            {
                "label": "D",
                "text": "Trust CDN resources",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 239,
        "text": "Is there detection of client-side tampering?",
        "options": [
            {
                "label": "A",
                "text": "Integrity checks + checksum validation + server-side validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tampering detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No tampering detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 240,
        "text": "Are localStorage/sessionStorage used securely?",
        "options": [
            {
                "label": "A",
                "text": "No sensitive data in storage + encryption if needed",
                "points": 4
            },
            {
                "label": "B",
                "text": "Storage used securely",
                "points": 3
            },
            {
                "label": "C",
                "text": "Sensitive data in storage",
                "points": 2
            },
            {
                "label": "D",
                "text": "PII in localStorage",
                "points": 1
            },
            {
                "label": "E",
                "text": "No security consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 241,
        "text": "Is there protection against malicious browser extensions?",
        "options": [
            {
                "label": "A",
                "text": "Extension detection + warnings + CSP",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some protection",
                "points": 3
            },
            {
                "label": "C",
                "text": "No protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "Vulnerable to extensions",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 242,
        "text": "Are file uploads validated (type, size, content)?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer validation (client, server, storage) + virus scan",
                "points": 4
            },
            {
                "label": "B",
                "text": "Upload validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No upload validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 243,
        "text": "Are uploaded files scanned for malware?",
        "options": [
            {
                "label": "A",
                "text": "Automated malware scanning + quarantine + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Malware scanning implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No malware scanning",
                "points": 2
            },
            {
                "label": "D",
                "text": "Trust user uploads",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 244,
        "text": "Are file downloads secured with signed URLs?",
        "options": [
            {
                "label": "A",
                "text": "Signed URLs with expiry + access validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Signed URLs used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Public file URLs",
                "points": 2
            },
            {
                "label": "D",
                "text": "No download security",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 245,
        "text": "Is there rate limiting on file uploads?",
        "options": [
            {
                "label": "A",
                "text": "Per-user upload limits + size limits + daily quotas",
                "points": 4
            },
            {
                "label": "B",
                "text": "Upload rate limiting",
                "points": 3
            },
            {
                "label": "C",
                "text": "No upload limits",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unlimited uploads",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 246,
        "text": "Are API keys validated on every request?",
        "options": [
            {
                "label": "A",
                "text": "Server-side API key validation + rotation + revocation",
                "points": 4
            },
            {
                "label": "B",
                "text": "API key validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Cached validation (stale risk)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No API key validation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 247,
        "text": "Is there detection of stolen/leaked API keys?",
        "options": [
            {
                "label": "A",
                "text": "Key usage monitoring + GitHub scanning + automated rotation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Leaked key detection",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual review only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 248,
        "text": "Are WebSockets (if used) secured?",
        "options": [
            {
                "label": "A",
                "text": "WSS only + authentication + message validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "WebSocket security implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "WS (unencrypted) used",
                "points": 2
            },
            {
                "label": "D",
                "text": "No WebSocket security",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 249,
        "text": "Is there protection against mass assignment vulnerabilities?",
        "options": [
            {
                "label": "A",
                "text": "Explicit property whitelisting + validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Mass assignment prevention",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some protection",
                "points": 2
            },
            {
                "label": "D",
                "text": "Mass assignment possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "No protection",
                "points": 0
            }
        ]
    },
    {
        "id": 250,
        "text": "Are GraphQL queries (if used) protected against DoS?",
        "options": [
            {
                "label": "A",
                "text": "Query complexity limits + depth limits + cost analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "GraphQL protection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No query limits",
                "points": 2
            },
            {
                "label": "D",
                "text": "DoS via complex queries possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 251,
        "text": "Is code splitting implemented effectively?",
        "options": [
            {
                "label": "A",
                "text": "Route-based + component-based code splitting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Code splitting implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Minimal code splitting",
                "points": 2
            },
            {
                "label": "D",
                "text": "Single bundle",
                "points": 1
            },
            {
                "label": "E",
                "text": "No code splitting",
                "points": 0
            }
        ]
    },
    {
        "id": 252,
        "text": "Are images optimized (WebP, lazy loading, responsive)?",
        "options": [
            {
                "label": "A",
                "text": "Next/Image with WebP + lazy load + responsive srcset",
                "points": 4
            },
            {
                "label": "B",
                "text": "Image optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic optimization",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unoptimized images",
                "points": 1
            },
            {
                "label": "E",
                "text": "No image optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 253,
        "text": "Are fonts loaded efficiently (FOUT/FOIT prevention)?",
        "options": [
            {
                "label": "A",
                "text": "Font display swap + preload + subset fonts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Font optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Default font loading",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fonts block rendering",
                "points": 1
            },
            {
                "label": "E",
                "text": "No font optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 254,
        "text": "Is JavaScript execution optimized?",
        "options": [
            {
                "label": "A",
                "text": "Code splitting + tree shaking + lazy eval + web workers",
                "points": 4
            },
            {
                "label": "B",
                "text": "JS optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic optimization",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unoptimized JavaScript",
                "points": 1
            },
            {
                "label": "E",
                "text": "No JS optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 255,
        "text": "Are CSS files minimized and critical CSS inlined?",
        "options": [
            {
                "label": "A",
                "text": "Critical CSS inline + purge unused + minify",
                "points": 4
            },
            {
                "label": "B",
                "text": "CSS optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic CSS minification",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unoptimized CSS",
                "points": 1
            },
            {
                "label": "E",
                "text": "No CSS optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 256,
        "text": "Is bundle size monitored and limited?",
        "options": [
            {
                "label": "A",
                "text": "Bundle size analysis in CI/CD + budgets enforced",
                "points": 4
            },
            {
                "label": "B",
                "text": "Bundle size monitored",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional size checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No bundle monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 257,
        "text": "Are third-party scripts loaded asynchronously?",
        "options": [
            {
                "label": "A",
                "text": "All third-party scripts async + defer + lazy loaded",
                "points": 4
            },
            {
                "label": "B",
                "text": "Async loading implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some scripts blocking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Synchronous script loading",
                "points": 1
            },
            {
                "label": "E",
                "text": "No async consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 258,
        "text": "Is Service Worker used for caching?",
        "options": [
            {
                "label": "A",
                "text": "Service worker with cache strategies + offline support",
                "points": 4
            },
            {
                "label": "B",
                "text": "Service worker implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No service worker",
                "points": 2
            },
            {
                "label": "D",
                "text": "Caching not optimized",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 259,
        "text": "Are API calls minimized and batched?",
        "options": [
            {
                "label": "A",
                "text": "Request batching + deduplication + caching",
                "points": 4
            },
            {
                "label": "B",
                "text": "API optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Many redundant API calls",
                "points": 2
            },
            {
                "label": "D",
                "text": "No API optimization",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 260,
        "text": "Is client-side caching implemented (localStorage, IndexedDB)?",
        "options": [
            {
                "label": "A",
                "text": "Strategic caching with invalidation + compression",
                "points": 4
            },
            {
                "label": "B",
                "text": "Client caching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Minimal caching",
                "points": 2
            },
            {
                "label": "D",
                "text": "No client caching",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 261,
        "text": "Are animations GPU-accelerated?",
        "options": [
            {
                "label": "A",
                "text": "Transform/opacity only + will-change + 60fps validated",
                "points": 4
            },
            {
                "label": "B",
                "text": "GPU acceleration used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some layout-triggering animations",
                "points": 2
            },
            {
                "label": "D",
                "text": "Janky animations",
                "points": 1
            },
            {
                "label": "E",
                "text": "No animation optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 262,
        "text": "Is virtual scrolling used for long lists?",
        "options": [
            {
                "label": "A",
                "text": "Virtual scrolling (react-window, react-virtualized)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Virtual scrolling implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No virtual scrolling",
                "points": 2
            },
            {
                "label": "D",
                "text": "Long lists cause slowdown",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 263,
        "text": "Is debouncing/throttling used for frequent events?",
        "options": [
            {
                "label": "A",
                "text": "Debounce/throttle on scroll, resize, input events",
                "points": 4
            },
            {
                "label": "B",
                "text": "Event optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some event optimization",
                "points": 2
            },
            {
                "label": "D",
                "text": "No event optimization",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 264,
        "text": "Are Core Web Vitals (LCP, FID, CLS) measured?",
        "options": [
            {
                "label": "A",
                "text": "Real user monitoring + synthetic tests + optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Core Web Vitals measured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of metrics",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not measured",
                "points": 1
            },
            {
                "label": "E",
                "text": "Unknown",
                "points": 0
            }
        ]
    },
    {
        "id": 265,
        "text": "Is Lighthouse score tracked?",
        "options": [
            {
                "label": "A",
                "text": "Lighthouse CI in pipeline + score requirements (90+)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Lighthouse scores monitored",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional Lighthouse runs",
                "points": 2
            },
            {
                "label": "D",
                "text": "No Lighthouse testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 266,
        "text": "Are performance budgets enforced?",
        "options": [
            {
                "label": "A",
                "text": "Performance budgets in CI/CD + build fails if exceeded",
                "points": 4
            },
            {
                "label": "B",
                "text": "Performance budgets set",
                "points": 3
            },
            {
                "label": "C",
                "text": "No performance budgets",
                "points": 2
            },
            {
                "label": "D",
                "text": "No budget enforcement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 267,
        "text": "Is Time to Interactive (TTI) optimized?",
        "options": [
            {
                "label": "A",
                "text": "TTI <3s on 3G + monitored + optimized",
                "points": 4
            },
            {
                "label": "B",
                "text": "TTI optimization efforts",
                "points": 3
            },
            {
                "label": "C",
                "text": "Slow TTI",
                "points": 2
            },
            {
                "label": "D",
                "text": "TTI not considered",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not measured",
                "points": 0
            }
        ]
    },
    {
        "id": 268,
        "text": "Is First Contentful Paint (FCP) under 1.8s?",
        "options": [
            {
                "label": "A",
                "text": "FCP <1s + server-side rendering + optimizations",
                "points": 4
            },
            {
                "label": "B",
                "text": "FCP under 1.8s",
                "points": 3
            },
            {
                "label": "C",
                "text": "FCP 1.8-3s",
                "points": 2
            },
            {
                "label": "D",
                "text": "FCP >3s",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not measured",
                "points": 0
            }
        ]
    },
    {
        "id": 269,
        "text": "Is Cumulative Layout Shift (CLS) minimized?",
        "options": [
            {
                "label": "A",
                "text": "CLS <0.1 + size reservations + font loading optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "CLS optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some layout shift",
                "points": 2
            },
            {
                "label": "D",
                "text": "Significant CLS",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 270,
        "text": "Are render-blocking resources eliminated?",
        "options": [
            {
                "label": "A",
                "text": "No render-blocking resources + critical path optimized",
                "points": 4
            },
            {
                "label": "B",
                "text": "Render blocking minimized",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some blocking resources",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many blocking resources",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 271,
        "text": "Is prefetching/preloading used strategically?",
        "options": [
            {
                "label": "A",
                "text": "Link prefetch + DNS prefetch + resource preload",
                "points": 4
            },
            {
                "label": "B",
                "text": "Prefetch/preload implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No prefetching",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not used",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 272,
        "text": "Are unused dependencies removed?",
        "options": [
            {
                "label": "A",
                "text": "Automated dependency analysis + tree shaking + audits",
                "points": 4
            },
            {
                "label": "B",
                "text": "Unused deps removed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some unused dependencies",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many unused packages",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not analyzed",
                "points": 0
            }
        ]
    },
    {
        "id": 273,
        "text": "Is gzip/brotli compression enabled?",
        "options": [
            {
                "label": "A",
                "text": "Brotli compression for all text assets",
                "points": 4
            },
            {
                "label": "B",
                "text": "Gzip compression enabled",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some compression",
                "points": 2
            },
            {
                "label": "D",
                "text": "No compression",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not enabled",
                "points": 0
            }
        ]
    },
    {
        "id": 274,
        "text": "Are static assets cached with long TTL?",
        "options": [
            {
                "label": "A",
                "text": "Immutable assets + 1 year cache + cache busting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Long-term caching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Short cache TTL",
                "points": 2
            },
            {
                "label": "D",
                "text": "No caching headers",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 275,
        "text": "Is CDN used for static assets?",
        "options": [
            {
                "label": "A",
                "text": "Global CDN with edge caching + optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "CDN implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No CDN",
                "points": 2
            },
            {
                "label": "D",
                "text": "Origin server only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 276,
        "text": "Are database queries optimized and indexed?",
        "options": [
            {
                "label": "A",
                "text": "All queries optimized + composite indexes + query analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Query optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some slow queries",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many unoptimized queries",
                "points": 1
            },
            {
                "label": "E",
                "text": "No optimization",
                "points": 0
            }
        ]
    },
    {
        "id": 277,
        "text": "Is query performance monitored?",
        "options": [
            {
                "label": "A",
                "text": "Query time monitoring + slow query alerts + profiling",
                "points": 4
            },
            {
                "label": "B",
                "text": "Query monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No monitoring",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unknown query performance",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 278,
        "text": "Are N+1 query problems eliminated?",
        "options": [
            {
                "label": "A",
                "text": "No N+1 queries + batch loading + data loader pattern",
                "points": 4
            },
            {
                "label": "B",
                "text": "N+1 elimination implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some N+1 queries",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many N+1 issues",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 279,
        "text": "Is data denormalized for read performance?",
        "options": [
            {
                "label": "A",
                "text": "Strategic denormalization + consistency maintained",
                "points": 4
            },
            {
                "label": "B",
                "text": "Denormalization used appropriately",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fully normalized (slower reads)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Over-denormalized (stale data)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 280,
        "text": "Are database connections pooled?",
        "options": [
            {
                "label": "A",
                "text": "Connection pooling + optimal pool size + monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Connection pooling implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No connection pooling",
                "points": 2
            },
            {
                "label": "D",
                "text": "Connection leaks possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 281,
        "text": "Is caching implemented at multiple layers?",
        "options": [
            {
                "label": "A",
                "text": "Multi-layer caching (CDN, app, database) + invalidation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Caching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Minimal caching",
                "points": 2
            },
            {
                "label": "D",
                "text": "No caching",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 282,
        "text": "Are cache invalidation strategies sound?",
        "options": [
            {
                "label": "A",
                "text": "Cache invalidation patterns + TTL + event-driven invalidation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cache invalidation working",
                "points": 3
            },
            {
                "label": "C",
                "text": "Stale cache issues",
                "points": 2
            },
            {
                "label": "D",
                "text": "Cache never invalidates",
                "points": 1
            },
            {
                "label": "E",
                "text": "No invalidation strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 283,
        "text": "Are function cold starts minimized?",
        "options": [
            {
                "label": "A",
                "text": "Min instances + keep-alive + function warming",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cold start mitigation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Long cold starts",
                "points": 2
            },
            {
                "label": "D",
                "text": "Cold starts impact users",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 284,
        "text": "Is function memory allocated optimally?",
        "options": [
            {
                "label": "A",
                "text": "Memory profiling + optimal allocation per function",
                "points": 4
            },
            {
                "label": "B",
                "text": "Memory optimized",
                "points": 3
            },
            {
                "label": "C",
                "text": "Default memory allocation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Over/under allocated",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 285,
        "text": "Are background jobs queued efficiently?",
        "options": [
            {
                "label": "A",
                "text": "Job queue (Pub/Sub, Task Queue) + retry + DLQ",
                "points": 4
            },
            {
                "label": "B",
                "text": "Job queuing implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Synchronous processing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Jobs block user requests",
                "points": 1
            },
            {
                "label": "E",
                "text": "No job queue",
                "points": 0
            }
        ]
    },
    {
        "id": 286,
        "text": "Is there rate limiting to prevent resource exhaustion?",
        "options": [
            {
                "label": "A",
                "text": "Multi-tier rate limiting + per-user + global + cost-based",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rate limiting implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic rate limiting",
                "points": 2
            },
            {
                "label": "D",
                "text": "No rate limiting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 287,
        "text": "Are expensive operations async (don't block user)?",
        "options": [
            {
                "label": "A",
                "text": "All expensive operations async + progress tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Async operations implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some blocking operations",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many blocking operations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 288,
        "text": "Is pagination implemented for list queries?",
        "options": [
            {
                "label": "A",
                "text": "Cursor-based pagination + page size limits enforced",
                "points": 4
            },
            {
                "label": "B",
                "text": "Pagination implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Offset pagination (slow at scale)",
                "points": 2
            },
            {
                "label": "D",
                "text": "No pagination",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 289,
        "text": "Are search queries optimized (Algolia, Elasticsearch)?",
        "options": [
            {
                "label": "A",
                "text": "Dedicated search service + indexing + autocomplete",
                "points": 4
            },
            {
                "label": "B",
                "text": "Search optimization implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Firestore queries only (slow)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unoptimized search",
                "points": 1
            },
            {
                "label": "E",
                "text": "No search",
                "points": 0
            }
        ]
    },
    {
        "id": 290,
        "text": "Are file uploads/downloads optimized?",
        "options": [
            {
                "label": "A",
                "text": "Direct to storage + signed URLs + resumable uploads",
                "points": 4
            },
            {
                "label": "B",
                "text": "Upload/download optimization",
                "points": 3
            },
            {
                "label": "C",
                "text": "Files through server (slow)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unoptimized file handling",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 291,
        "text": "Are large files chunked for upload?",
        "options": [
            {
                "label": "A",
                "text": "Chunked uploads + resumable + progress tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Chunked uploads implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single upload only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Upload timeouts on large files",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 292,
        "text": "Is there CDN for file downloads?",
        "options": [
            {
                "label": "A",
                "text": "CDN for all static files + cache optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "CDN for file downloads",
                "points": 3
            },
            {
                "label": "C",
                "text": "Direct from storage",
                "points": 2
            },
            {
                "label": "D",
                "text": "Slow file downloads",
                "points": 1
            },
            {
                "label": "E",
                "text": "No CDN",
                "points": 0
            }
        ]
    },
    {
        "id": 293,
        "text": "Are webhook retries handled with exponential backoff?",
        "options": [
            {
                "label": "A",
                "text": "Exponential backoff + max retries + DLQ",
                "points": 4
            },
            {
                "label": "B",
                "text": "Retry logic implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed retry intervals",
                "points": 2
            },
            {
                "label": "D",
                "text": "No retry logic",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 294,
        "text": "Is there circuit breaking for external API calls?",
        "options": [
            {
                "label": "A",
                "text": "Circuit breaker pattern + fallback + monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Circuit breaking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No circuit breaking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Cascading failures possible",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 295,
        "text": "Are third-party API calls timeout-protected?",
        "options": [
            {
                "label": "A",
                "text": "Timeouts on all external calls + fallback + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Timeout protection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No timeouts",
                "points": 2
            },
            {
                "label": "D",
                "text": "Requests hang indefinitely",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 296,
        "text": "Is there auto-scaling based on load?",
        "options": [
            {
                "label": "A",
                "text": "Metric-based auto-scaling + cost optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Auto-scaling configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual scaling only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fixed capacity",
                "points": 1
            },
            {
                "label": "E",
                "text": "No scaling",
                "points": 0
            }
        ]
    },
    {
        "id": 297,
        "text": "Are resource limits monitored (CPU, memory, quota)?",
        "options": [
            {
                "label": "A",
                "text": "Real-time resource monitoring + predictive alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Resource monitoring implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional resource checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No resource monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 298,
        "text": "Is there load testing before major launches?",
        "options": [
            {
                "label": "A",
                "text": "Regular load testing + stress testing + chaos engineering",
                "points": 4
            },
            {
                "label": "B",
                "text": "Load testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "One-time load test",
                "points": 2
            },
            {
                "label": "D",
                "text": "No load testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 299,
        "text": "Are performance regressions caught in CI/CD?",
        "options": [
            {
                "label": "A",
                "text": "Performance testing in CI + regression detection + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Performance CI checks",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual performance testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No performance CI",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 300,
        "text": "Is there database query result caching?",
        "options": [
            {
                "label": "A",
                "text": "Query result caching with intelligent invalidation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Query caching implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No query caching",
                "points": 2
            },
            {
                "label": "D",
                "text": "Repeated identical queries",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 301,
        "text": "Is TypeScript used with strict mode enabled?",
        "options": [
            {
                "label": "A",
                "text": "Strict TypeScript + comprehensive types + no any",
                "points": 4
            },
            {
                "label": "B",
                "text": "TypeScript with strict mode",
                "points": 3
            },
            {
                "label": "C",
                "text": "TypeScript without strict",
                "points": 2
            },
            {
                "label": "D",
                "text": "Loose TypeScript",
                "points": 1
            },
            {
                "label": "E",
                "text": "JavaScript only",
                "points": 0
            }
        ]
    },
    {
        "id": 302,
        "text": "Are linting rules enforced (ESLint)?",
        "options": [
            {
                "label": "A",
                "text": "Strict linting + CI enforcement + auto-fix",
                "points": 4
            },
            {
                "label": "B",
                "text": "Linting enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Linting optional",
                "points": 2
            },
            {
                "label": "D",
                "text": "No linting",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 303,
        "text": "Are there currently zero linting errors/warnings?",
        "options": [
            {
                "label": "A",
                "text": "Zero linting issues + maintained continuously",
                "points": 4
            },
            {
                "label": "B",
                "text": "Few minor warnings (<5)",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some warnings (5-20)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many warnings (>20)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 304,
        "text": "Is code formatted consistently (Prettier)?",
        "options": [
            {
                "label": "A",
                "text": "Prettier + pre-commit hooks + CI enforcement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Consistent formatting",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual formatting",
                "points": 2
            },
            {
                "label": "D",
                "text": "Inconsistent formatting",
                "points": 1
            },
            {
                "label": "E",
                "text": "No formatting standard",
                "points": 0
            }
        ]
    },
    {
        "id": 305,
        "text": "Are code reviews required for all changes?",
        "options": [
            {
                "label": "A",
                "text": "Mandatory reviews + approval before merge + guidelines",
                "points": 4
            },
            {
                "label": "B",
                "text": "Code reviews required",
                "points": 3
            },
            {
                "label": "C",
                "text": "Optional code reviews",
                "points": 2
            },
            {
                "label": "D",
                "text": "No code reviews",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 306,
        "text": "Is there a code review checklist/guidelines?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive review guidelines + training + enforcement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Review guidelines exist",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal guidelines",
                "points": 2
            },
            {
                "label": "D",
                "text": "No review guidelines",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 307,
        "text": "Are functions kept small and focused (SRP)?",
        "options": [
            {
                "label": "A",
                "text": "Single responsibility enforced + small functions (<50 lines)",
                "points": 4
            },
            {
                "label": "B",
                "text": "Generally small functions",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some large functions",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many God functions",
                "points": 1
            },
            {
                "label": "E",
                "text": "No size consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 308,
        "text": "Is code complexity measured (cyclomatic complexity)?",
        "options": [
            {
                "label": "A",
                "text": "Complexity metrics + thresholds enforced in CI",
                "points": 4
            },
            {
                "label": "B",
                "text": "Complexity measured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of complexity",
                "points": 2
            },
            {
                "label": "D",
                "text": "No complexity measurement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not measured",
                "points": 0
            }
        ]
    },
    {
        "id": 309,
        "text": "Are magic numbers/strings avoided (constants used)?",
        "options": [
            {
                "label": "A",
                "text": "All magic values extracted to named constants/enums",
                "points": 4
            },
            {
                "label": "B",
                "text": "Constants used consistently",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some magic values",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many magic values",
                "points": 1
            },
            {
                "label": "E",
                "text": "No constant usage",
                "points": 0
            }
        ]
    },
    {
        "id": 310,
        "text": "Is code duplication minimized (DRY principle)?",
        "options": [
            {
                "label": "A",
                "text": "DRY enforced + duplicate detection + refactoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Minimal duplication",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some duplication",
                "points": 2
            },
            {
                "label": "D",
                "text": "Significant duplication",
                "points": 1
            },
            {
                "label": "E",
                "text": "No DRY consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 311,
        "text": "Are naming conventions consistent and meaningful?",
        "options": [
            {
                "label": "A",
                "text": "Naming conventions documented + enforced + descriptive names",
                "points": 4
            },
            {
                "label": "B",
                "text": "Consistent naming",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mostly consistent",
                "points": 2
            },
            {
                "label": "D",
                "text": "Inconsistent naming",
                "points": 1
            },
            {
                "label": "E",
                "text": "No conventions",
                "points": 0
            }
        ]
    },
    {
        "id": 312,
        "text": "Are comments used appropriately (not excessive/sparse)?",
        "options": [
            {
                "label": "A",
                "text": "Self-documenting code + comments for why not what",
                "points": 4
            },
            {
                "label": "B",
                "text": "Appropriate commenting",
                "points": 3
            },
            {
                "label": "C",
                "text": "Over-commented or under-commented",
                "points": 2
            },
            {
                "label": "D",
                "text": "No comments or only commented-out code",
                "points": 1
            },
            {
                "label": "E",
                "text": "No comment strategy",
                "points": 0
            }
        ]
    },
    {
        "id": 313,
        "text": "Is technical documentation maintained?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive docs + auto-generated + kept up-to-date",
                "points": 4
            },
            {
                "label": "B",
                "text": "Technical docs maintained",
                "points": 3
            },
            {
                "label": "C",
                "text": "Outdated documentation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Minimal documentation",
                "points": 1
            },
            {
                "label": "E",
                "text": "No documentation",
                "points": 0
            }
        ]
    },
    {
        "id": 314,
        "text": "Are dependencies kept up-to-date?",
        "options": [
            {
                "label": "A",
                "text": "Automated dependency updates + security scanning + testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Regular dependency updates",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many outdated dependencies",
                "points": 1
            },
            {
                "label": "E",
                "text": "Never updated",
                "points": 0
            }
        ]
    },
    {
        "id": 315,
        "text": "Are deprecated dependencies removed?",
        "options": [
            {
                "label": "A",
                "text": "Deprecated dependencies removed promptly + alternatives found",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deprecated deps removed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some deprecated packages",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many deprecated dependencies",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 316,
        "text": "Is there dependency vulnerability scanning?",
        "options": [
            {
                "label": "A",
                "text": "Automated scanning in CI + Dependabot + Snyk",
                "points": 4
            },
            {
                "label": "B",
                "text": "Vulnerability scanning implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual scanning",
                "points": 2
            },
            {
                "label": "D",
                "text": "No vulnerability scanning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 317,
        "text": "Are security vulnerabilities fixed promptly?",
        "options": [
            {
                "label": "A",
                "text": "Critical vulns fixed within 24hrs + automated alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Vulnerabilities fixed quickly",
                "points": 3
            },
            {
                "label": "C",
                "text": "Slow to fix vulnerabilities",
                "points": 2
            },
            {
                "label": "D",
                "text": "Known unfixed vulnerabilities",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 318,
        "text": "Is code coverage tracked?",
        "options": [
            {
                "label": "A",
                "text": "Coverage tracking + coverage requirements + trending",
                "points": 4
            },
            {
                "label": "B",
                "text": "Code coverage tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Coverage known but not enforced",
                "points": 2
            },
            {
                "label": "D",
                "text": "Coverage unknown",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 319,
        "text": "Is there a minimum code coverage requirement?",
        "options": [
            {
                "label": "A",
                "text": "80%+ coverage required + enforced in CI",
                "points": 4
            },
            {
                "label": "B",
                "text": "Coverage requirement set",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aspirational coverage goal",
                "points": 2
            },
            {
                "label": "D",
                "text": "No coverage requirement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not required",
                "points": 0
            }
        ]
    },
    {
        "id": 320,
        "text": "Are unused code and dead code removed?",
        "options": [
            {
                "label": "A",
                "text": "Dead code detection + automated removal + tree shaking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Unused code removed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some dead code",
                "points": 2
            },
            {
                "label": "D",
                "text": "Significant dead code",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 321,
        "text": "Is error handling comprehensive?",
        "options": [
            {
                "label": "A",
                "text": "Try-catch everywhere + proper error types + logging",
                "points": 4
            },
            {
                "label": "B",
                "text": "Good error handling",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic error handling",
                "points": 2
            },
            {
                "label": "D",
                "text": "Poor error handling",
                "points": 1
            },
            {
                "label": "E",
                "text": "No error handling",
                "points": 0
            }
        ]
    },
    {
        "id": 322,
        "text": "Are errors logged with sufficient context?",
        "options": [
            {
                "label": "A",
                "text": "Structured logging + correlation IDs + stack traces",
                "points": 4
            },
            {
                "label": "B",
                "text": "Error logging with context",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic error logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "Minimal error information",
                "points": 1
            },
            {
                "label": "E",
                "text": "No error logging",
                "points": 0
            }
        ]
    },
    {
        "id": 323,
        "text": "Is there centralized error handling?",
        "options": [
            {
                "label": "A",
                "text": "Global error handlers + error boundaries + monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Centralized error handling",
                "points": 3
            },
            {
                "label": "C",
                "text": "Scattered error handling",
                "points": 2
            },
            {
                "label": "D",
                "text": "No centralized handling",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 324,
        "text": "Are design patterns applied appropriately?",
        "options": [
            {
                "label": "A",
                "text": "Design patterns documented + consistently applied",
                "points": 4
            },
            {
                "label": "B",
                "text": "Patterns used appropriately",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some pattern usage",
                "points": 2
            },
            {
                "label": "D",
                "text": "Anti-patterns present",
                "points": 1
            },
            {
                "label": "E",
                "text": "No pattern usage",
                "points": 0
            }
        ]
    },
    {
        "id": 325,
        "text": "Is the codebase modular and maintainable?",
        "options": [
            {
                "label": "A",
                "text": "Modular architecture + loose coupling + high cohesion",
                "points": 4
            },
            {
                "label": "B",
                "text": "Modular codebase",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some modularity",
                "points": 2
            },
            {
                "label": "D",
                "text": "Monolithic codebase",
                "points": 1
            },
            {
                "label": "E",
                "text": "Unmaintainable code",
                "points": 0
            }
        ]
    },
    {
        "id": 326,
        "text": "Are unit tests written for all business logic?",
        "options": [
            {
                "label": "A",
                "text": "100% business logic coverage + TDD approach",
                "points": 4
            },
            {
                "label": "B",
                "text": "Good unit test coverage",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some unit tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "Minimal unit tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "No unit tests",
                "points": 0
            }
        ]
    },
    {
        "id": 327,
        "text": "Are integration tests covering critical flows?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive integration tests + CI/CD integrated",
                "points": 4
            },
            {
                "label": "B",
                "text": "Integration tests implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Few integration tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "No integration tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 328,
        "text": "Are end-to-end tests covering user journeys?",
        "options": [
            {
                "label": "A",
                "text": "E2E tests for all critical paths + Cypress/Playwright",
                "points": 4
            },
            {
                "label": "B",
                "text": "E2E tests implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Few E2E tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "No E2E tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 329,
        "text": "Are Cloud Functions tested with emulators?",
        "options": [
            {
                "label": "A",
                "text": "All functions tested with emulators + comprehensive test suite",
                "points": 4
            },
            {
                "label": "B",
                "text": "Emulator testing implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some emulator tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "No emulator testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 330,
        "text": "Are Firestore security rules tested?",
        "options": [
            {
                "label": "A",
                "text": "100% rule coverage + all scenarios tested + CI/CD",
                "points": 4
            },
            {
                "label": "B",
                "text": "Security rules tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some rule testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Rules not tested",
                "points": 1
            },
            {
                "label": "E",
                "text": "No rule tests",
                "points": 0
            }
        ]
    },
    {
        "id": 331,
        "text": "Are tests run automatically in CI/CD?",
        "options": [
            {
                "label": "A",
                "text": "All tests in CI/CD + required for merge + fast feedback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tests in CI/CD",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual test running",
                "points": 2
            },
            {
                "label": "D",
                "text": "Tests not run consistently",
                "points": 1
            },
            {
                "label": "E",
                "text": "No automated tests",
                "points": 0
            }
        ]
    },
    {
        "id": 332,
        "text": "Is there a test database/environment?",
        "options": [
            {
                "label": "A",
                "text": "Isolated test environment + test data fixtures + cleanup",
                "points": 4
            },
            {
                "label": "B",
                "text": "Test environment exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Tests use prod-like data",
                "points": 2
            },
            {
                "label": "D",
                "text": "Tests use production (dangerous)",
                "points": 1
            },
            {
                "label": "E",
                "text": "No test environment",
                "points": 0
            }
        ]
    },
    {
        "id": 333,
        "text": "Are tests isolated (no dependencies between tests)?",
        "options": [
            {
                "label": "A",
                "text": "Complete test isolation + setup/teardown + no shared state",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tests isolated",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some test dependencies",
                "points": 2
            },
            {
                "label": "D",
                "text": "Tests affect each other",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not isolated",
                "points": 0
            }
        ]
    },
    {
        "id": 334,
        "text": "Are test fixtures/mocks used appropriately?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive mocks + factories + realistic test data",
                "points": 4
            },
            {
                "label": "B",
                "text": "Fixtures/mocks used well",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some mocking",
                "points": 2
            },
            {
                "label": "D",
                "text": "No mocking (slow tests)",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 335,
        "text": "Are tests maintainable (not brittle)?",
        "options": [
            {
                "label": "A",
                "text": "Resilient tests + good selectors + minimal coupling",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tests maintainable",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some brittle tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "Tests break frequently",
                "points": 1
            },
            {
                "label": "E",
                "text": "Unmaintainable tests",
                "points": 0
            }
        ]
    },
    {
        "id": 336,
        "text": "Are performance tests written?",
        "options": [
            {
                "label": "A",
                "text": "Performance tests + benchmarks + regression detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Performance tests exist",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual performance testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No performance tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 337,
        "text": "Are load tests run before major releases?",
        "options": [
            {
                "label": "A",
                "text": "Automated load tests + realistic scenarios + capacity validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Load testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional load tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "No load testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 338,
        "text": "Are API endpoints tested (contract testing)?",
        "options": [
            {
                "label": "A",
                "text": "API contract tests + schema validation + versioning tests",
                "points": 4
            },
            {
                "label": "B",
                "text": "API testing implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual API testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No API tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 339,
        "text": "Are error scenarios tested (not just happy path)?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive error testing + edge cases + failure scenarios",
                "points": 4
            },
            {
                "label": "B",
                "text": "Error scenarios tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Mostly happy path testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Only happy path",
                "points": 1
            },
            {
                "label": "E",
                "text": "No error testing",
                "points": 0
            }
        ]
    },
    {
        "id": 340,
        "text": "Are accessibility tests automated?",
        "options": [
            {
                "label": "A",
                "text": "Automated a11y tests (axe, jest-axe) + CI/CD",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some accessibility testing",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual a11y checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No accessibility testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 341,
        "text": "Are visual regression tests implemented?",
        "options": [
            {
                "label": "A",
                "text": "Visual regression testing + screenshot comparison + CI",
                "points": 4
            },
            {
                "label": "B",
                "text": "Visual regression tests",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual visual testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No visual regression",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 342,
        "text": "Is test data generation automated?",
        "options": [
            {
                "label": "A",
                "text": "Factories + seeders + realistic data generation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Automated test data",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual test data creation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No test data strategy",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not automated",
                "points": 0
            }
        ]
    },
    {
        "id": 343,
        "text": "Are tests documented (what they test, why)?",
        "options": [
            {
                "label": "A",
                "text": "Well-documented tests + clear assertions + intent",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tests have some documentation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Minimal test documentation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No test documentation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 344,
        "text": "Is there monitoring of test suite performance?",
        "options": [
            {
                "label": "A",
                "text": "Test time tracking + optimization + parallelization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Test performance monitored",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of slow tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "No test performance tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 345,
        "text": "Are flaky tests identified and fixed?",
        "options": [
            {
                "label": "A",
                "text": "Flaky test detection + automatic retries + root cause fix",
                "points": 4
            },
            {
                "label": "B",
                "text": "Flaky tests addressed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some flaky tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many flaky tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not addressed",
                "points": 0
            }
        ]
    },
    {
        "id": 346,
        "text": "Is test coverage trending up over time?",
        "options": [
            {
                "label": "A",
                "text": "Coverage increases with new code + tracked + visualized",
                "points": 4
            },
            {
                "label": "B",
                "text": "Coverage improving",
                "points": 3
            },
            {
                "label": "C",
                "text": "Coverage stagnant",
                "points": 2
            },
            {
                "label": "D",
                "text": "Coverage decreasing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 347,
        "text": "Are mutation tests used to validate test quality?",
        "options": [
            {
                "label": "A",
                "text": "Mutation testing + high mutation score",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some mutation testing",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of mutation testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No mutation testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not used",
                "points": 0
            }
        ]
    },
    {
        "id": 348,
        "text": "Is there smoke testing after deployments?",
        "options": [
            {
                "label": "A",
                "text": "Automated smoke tests + critical path validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Smoke testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual smoke testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No smoke tests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 349,
        "text": "Are database migrations tested?",
        "options": [
            {
                "label": "A",
                "text": "Migration tests + rollback tests + production dry-run",
                "points": 4
            },
            {
                "label": "B",
                "text": "Migrations tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Migrations sometimes tested",
                "points": 2
            },
            {
                "label": "D",
                "text": "No migration testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 350,
        "text": "Is backward compatibility tested?",
        "options": [
            {
                "label": "A",
                "text": "Backward compatibility suite + versioning tests",
                "points": 4
            },
            {
                "label": "B",
                "text": "Compatibility tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual compatibility checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No compatibility testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 351,
        "text": "Is there automated continuous integration?",
        "options": [
            {
                "label": "A",
                "text": "Full CI pipeline + tests + linting + security scans",
                "points": 4
            },
            {
                "label": "B",
                "text": "CI implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic CI",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual integration",
                "points": 1
            },
            {
                "label": "E",
                "text": "No CI",
                "points": 0
            }
        ]
    },
    {
        "id": 352,
        "text": "Is there automated continuous deployment?",
        "options": [
            {
                "label": "A",
                "text": "CD to all environments + approval gates + rollback",
                "points": 4
            },
            {
                "label": "B",
                "text": "CD implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual deployment",
                "points": 2
            },
            {
                "label": "D",
                "text": "Ad-hoc releases",
                "points": 1
            },
            {
                "label": "E",
                "text": "No CD",
                "points": 0
            }
        ]
    },
    {
        "id": 353,
        "text": "Are builds reproducible?",
        "options": [
            {
                "label": "A",
                "text": "Deterministic builds + lockfiles + version pinning",
                "points": 4
            },
            {
                "label": "B",
                "text": "Reproducible builds",
                "points": 3
            },
            {
                "label": "C",
                "text": "Builds sometimes differ",
                "points": 2
            },
            {
                "label": "D",
                "text": "Non-reproducible builds",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 354,
        "text": "Is there environment parity (dev/staging/prod)?",
        "options": [
            {
                "label": "A",
                "text": "Identical environments + infrastructure as code",
                "points": 4
            },
            {
                "label": "B",
                "text": "Environment parity maintained",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some differences",
                "points": 2
            },
            {
                "label": "D",
                "text": "Environments very different",
                "points": 1
            },
            {
                "label": "E",
                "text": "No parity",
                "points": 0
            }
        ]
    },
    {
        "id": 355,
        "text": "Are deployments zero-downtime?",
        "options": [
            {
                "label": "A",
                "text": "Blue-green deployment + rolling updates + health checks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Zero-downtime deploys",
                "points": 3
            },
            {
                "label": "C",
                "text": "Brief downtime",
                "points": 2
            },
            {
                "label": "D",
                "text": "Significant downtime",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 356,
        "text": "Is there a deployment rollback strategy?",
        "options": [
            {
                "label": "A",
                "text": "One-click rollback + automatic on error + tested regularly",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rollback strategy exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual rollback process",
                "points": 2
            },
            {
                "label": "D",
                "text": "Difficult to rollback",
                "points": 1
            },
            {
                "label": "E",
                "text": "No rollback capability",
                "points": 0
            }
        ]
    },
    {
        "id": 357,
        "text": "Are deployments tracked and logged?",
        "options": [
            {
                "label": "A",
                "text": "Deployment logging + correlation with incidents + auditing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment tracking",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic deployment logs",
                "points": 2
            },
            {
                "label": "D",
                "text": "Deployments not logged",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 358,
        "text": "Is there staging environment testing before production?",
        "options": [
            {
                "label": "A",
                "text": "Mandatory staging validation + production-like data + smoke tests",
                "points": 4
            },
            {
                "label": "B",
                "text": "Staging testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Sometimes skip staging",
                "points": 2
            },
            {
                "label": "D",
                "text": "Deploy directly to production",
                "points": 1
            },
            {
                "label": "E",
                "text": "No staging environment",
                "points": 0
            }
        ]
    },
    {
        "id": 359,
        "text": "Are feature flags used for gradual rollouts?",
        "options": [
            {
                "label": "A",
                "text": "Feature flag system + percentage rollouts + kill switches",
                "points": 4
            },
            {
                "label": "B",
                "text": "Feature flags used",
                "points": 3
            },
            {
                "label": "C",
                "text": "All-or-nothing deployments",
                "points": 2
            },
            {
                "label": "D",
                "text": "No feature flags",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 360,
        "text": "Is there canary deployment capability?",
        "options": [
            {
                "label": "A",
                "text": "Canary deployments + automated rollback on errors",
                "points": 4
            },
            {
                "label": "B",
                "text": "Canary deployment possible",
                "points": 3
            },
            {
                "label": "C",
                "text": "No canary deployment",
                "points": 2
            },
            {
                "label": "D",
                "text": "Full deployments only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 361,
        "text": "Are deployment approvals required for production?",
        "options": [
            {
                "label": "A",
                "text": "Multi-stage approval + change advisory board + documentation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Production approvals required",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single approver",
                "points": 2
            },
            {
                "label": "D",
                "text": "No approvals",
                "points": 1
            },
            {
                "label": "E",
                "text": "Anyone can deploy",
                "points": 0
            }
        ]
    },
    {
        "id": 362,
        "text": "Is there automated security scanning in CI/CD?",
        "options": [
            {
                "label": "A",
                "text": "SAST + DAST + dependency scanning + container scanning",
                "points": 4
            },
            {
                "label": "B",
                "text": "Security scanning in CI",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual security reviews",
                "points": 2
            },
            {
                "label": "D",
                "text": "No security scanning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 363,
        "text": "Are secrets managed securely in CI/CD?",
        "options": [
            {
                "label": "A",
                "text": "Secrets in vault + rotation + audit + least privilege",
                "points": 4
            },
            {
                "label": "B",
                "text": "Secrets managed securely",
                "points": 3
            },
            {
                "label": "C",
                "text": "Secrets in environment variables",
                "points": 2
            },
            {
                "label": "D",
                "text": "Secrets in code repository",
                "points": 1
            },
            {
                "label": "E",
                "text": "No secret management",
                "points": 0
            }
        ]
    },
    {
        "id": 364,
        "text": "Is there artifact versioning and storage?",
        "options": [
            {
                "label": "A",
                "text": "Artifact repository + versioning + retention policy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Artifacts versioned",
                "points": 3
            },
            {
                "label": "C",
                "text": "Artifacts not versioned",
                "points": 2
            },
            {
                "label": "D",
                "text": "No artifact storage",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 365,
        "text": "Are build artifacts scanned for vulnerabilities?",
        "options": [
            {
                "label": "A",
                "text": "Container scanning + SBOM generation + CVE tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Artifact scanning",
                "points": 3
            },
            {
                "label": "C",
                "text": "No artifact scanning",
                "points": 2
            },
            {
                "label": "D",
                "text": "Vulnerabilities not checked",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not scanned",
                "points": 0
            }
        ]
    },
    {
        "id": 366,
        "text": "Is there automated database migration in deployment?",
        "options": [
            {
                "label": "A",
                "text": "Automated migrations + pre-deployment validation + rollback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Migrations automated",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual migrations",
                "points": 2
            },
            {
                "label": "D",
                "text": "Migrations often fail",
                "points": 1
            },
            {
                "label": "E",
                "text": "No migration automation",
                "points": 0
            }
        ]
    },
    {
        "id": 367,
        "text": "Are deployments scheduled for low-traffic times?",
        "options": [
            {
                "label": "A",
                "text": "Deployment windows + traffic analysis + automated scheduling",
                "points": 4
            },
            {
                "label": "B",
                "text": "Strategic deployment timing",
                "points": 3
            },
            {
                "label": "C",
                "text": "Deploy anytime",
                "points": 2
            },
            {
                "label": "D",
                "text": "Deploy during peak hours",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 368,
        "text": "Is there post-deployment monitoring?",
        "options": [
            {
                "label": "A",
                "text": "Automated post-deploy monitoring + error spike detection + rollback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Post-deploy monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual checks after deploy",
                "points": 2
            },
            {
                "label": "D",
                "text": "No post-deploy monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 369,
        "text": "Are deployment metrics tracked (frequency, lead time, MTTR)?",
        "options": [
            {
                "label": "A",
                "text": "DORA metrics + dashboard + continuous improvement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment metrics tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some metrics tracked",
                "points": 2
            },
            {
                "label": "D",
                "text": "No deployment metrics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 370,
        "text": "Is there a deployment runbook/checklist?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive runbook + automation + regular updates",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment runbook exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal deployment process",
                "points": 2
            },
            {
                "label": "D",
                "text": "No runbook",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 371,
        "text": "Are breaking changes communicated in advance?",
        "options": [
            {
                "label": "A",
                "text": "Breaking change policy + migration guides + deprecation notices",
                "points": 4
            },
            {
                "label": "B",
                "text": "Breaking changes communicated",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional communication",
                "points": 2
            },
            {
                "label": "D",
                "text": "Unexpected breaking changes",
                "points": 1
            },
            {
                "label": "E",
                "text": "No communication",
                "points": 0
            }
        ]
    },
    {
        "id": 372,
        "text": "Is there a release notes process?",
        "options": [
            {
                "label": "A",
                "text": "Automated release notes + changelog + user communication",
                "points": 4
            },
            {
                "label": "B",
                "text": "Release notes published",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual release notes sometimes",
                "points": 2
            },
            {
                "label": "D",
                "text": "No release notes",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not published",
                "points": 0
            }
        ]
    },
    {
        "id": 373,
        "text": "Are hotfixes tested before production?",
        "options": [
            {
                "label": "A",
                "text": "Hotfix testing required + expedited approval + monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "Hotfixes tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Hotfixes sometimes tested",
                "points": 2
            },
            {
                "label": "D",
                "text": "Hotfixes deployed without testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 374,
        "text": "Is there a deployment freeze period (e.g., holidays)?",
        "options": [
            {
                "label": "A",
                "text": "Freeze policy + exceptions process + on-call coverage",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment freeze observed",
                "points": 3
            },
            {
                "label": "C",
                "text": "No freeze policy",
                "points": 2
            },
            {
                "label": "D",
                "text": "Deploy anytime",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 375,
        "text": "Are deployment failures analyzed for root cause?",
        "options": [
            {
                "label": "A",
                "text": "Post-incident reviews + root cause analysis + prevention",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment failures analyzed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional analysis",
                "points": 2
            },
            {
                "label": "D",
                "text": "No failure analysis",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 376,
        "text": "Is application uptime monitored 24/7?",
        "options": [
            {
                "label": "A",
                "text": "24/7 uptime monitoring + multi-region checks + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Uptime monitored continuously",
                "points": 3
            },
            {
                "label": "C",
                "text": "Business hours monitoring only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Occasional uptime checks",
                "points": 1
            },
            {
                "label": "E",
                "text": "No uptime monitoring",
                "points": 0
            }
        ]
    },
    {
        "id": 377,
        "text": "Are there alerts for application downtime?",
        "options": [
            {
                "label": "A",
                "text": "Immediate alerts + escalation + on-call notification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Downtime alerts configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Alerts sometimes missed",
                "points": 2
            },
            {
                "label": "D",
                "text": "No downtime alerts",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not configured",
                "points": 0
            }
        ]
    },
    {
        "id": 378,
        "text": "Is response time (latency) monitored?",
        "options": [
            {
                "label": "A",
                "text": "Real-time latency monitoring + percentile tracking + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Latency monitored",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional latency checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No latency monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 379,
        "text": "Are error rates tracked and alerted?",
        "options": [
            {
                "label": "A",
                "text": "Error rate monitoring + threshold alerts + trending",
                "points": 4
            },
            {
                "label": "B",
                "text": "Error rates tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Errors logged but not tracked",
                "points": 2
            },
            {
                "label": "D",
                "text": "No error rate tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 380,
        "text": "Is there real user monitoring (RUM)?",
        "options": [
            {
                "label": "A",
                "text": "RUM with device/browser/location breakdown + session replay",
                "points": 4
            },
            {
                "label": "B",
                "text": "RUM implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No real user monitoring",
                "points": 2
            },
            {
                "label": "D",
                "text": "Synthetic monitoring only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 381,
        "text": "Are synthetic tests running continuously?",
        "options": [
            {
                "label": "A",
                "text": "Synthetic tests from multiple regions + critical path validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Synthetic tests running",
                "points": 3
            },
            {
                "label": "C",
                "text": "No synthetic tests",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual testing only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 382,
        "text": "Is application health checked automatically?",
        "options": [
            {
                "label": "A",
                "text": "Health checks + dependency checks + auto-recovery",
                "points": 4
            },
            {
                "label": "B",
                "text": "Health checks implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual health checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No health checking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 383,
        "text": "Are dependencies (Firebase, Stripe, AI) monitored?",
        "options": [
            {
                "label": "A",
                "text": "Third-party dependency monitoring + fallback + status tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dependency monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aware of dependencies",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dependency monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 384,
        "text": "Is there APM (Application Performance Monitoring)?",
        "options": [
            {
                "label": "A",
                "text": "APM with distributed tracing + transaction monitoring",
                "points": 4
            },
            {
                "label": "B",
                "text": "APM implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic performance monitoring",
                "points": 2
            },
            {
                "label": "D",
                "text": "No APM",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 385,
        "text": "Are database performance metrics tracked?",
        "options": [
            {
                "label": "A",
                "text": "Database monitoring + slow query detection + optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Database metrics tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional database checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No database monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 386,
        "text": "Are API endpoint metrics collected?",
        "options": [
            {
                "label": "A",
                "text": "Per-endpoint metrics + latency + error rates + throughput",
                "points": 4
            },
            {
                "label": "B",
                "text": "API metrics collected",
                "points": 3
            },
            {
                "label": "C",
                "text": "Aggregate metrics only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No API metrics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not collected",
                "points": 0
            }
        ]
    },
    {
        "id": 387,
        "text": "Is Cloud Function performance monitored?",
        "options": [
            {
                "label": "A",
                "text": "Function metrics + cold starts + errors + execution time",
                "points": 4
            },
            {
                "label": "B",
                "text": "Function monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic function logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "No function monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 388,
        "text": "Are client-side errors tracked (JavaScript errors)?",
        "options": [
            {
                "label": "A",
                "text": "Client error tracking + source maps + user context",
                "points": 4
            },
            {
                "label": "B",
                "text": "Client errors tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some error tracking",
                "points": 2
            },
            {
                "label": "D",
                "text": "No client error tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 389,
        "text": "Is there session replay for debugging?",
        "options": [
            {
                "label": "A",
                "text": "Session replay + privacy masking + search/filter",
                "points": 4
            },
            {
                "label": "B",
                "text": "Session replay available",
                "points": 3
            },
            {
                "label": "C",
                "text": "No session replay",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual debugging only",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 390,
        "text": "Are performance metrics visualized in dashboards?",
        "options": [
            {
                "label": "A",
                "text": "Real-time dashboards + custom views + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dashboards available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic metrics view",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dashboards",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not visualized",
                "points": 0
            }
        ]
    },
    {
        "id": 391,
        "text": "Is there anomaly detection on metrics?",
        "options": [
            {
                "label": "A",
                "text": "ML-based anomaly detection + automated alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Anomaly detection implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual anomaly detection",
                "points": 2
            },
            {
                "label": "D",
                "text": "No anomaly detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 392,
        "text": "Are logs structured and searchable?",
        "options": [
            {
                "label": "A",
                "text": "Structured logging + full-text search + filtering",
                "points": 4
            },
            {
                "label": "B",
                "text": "Logs searchable",
                "points": 3
            },
            {
                "label": "C",
                "text": "Unstructured logs",
                "points": 2
            },
            {
                "label": "D",
                "text": "Logs not searchable",
                "points": 1
            },
            {
                "label": "E",
                "text": "No logging",
                "points": 0
            }
        ]
    },
    {
        "id": 393,
        "text": "Is there log retention policy?",
        "options": [
            {
                "label": "A",
                "text": "Tiered retention (hot/warm/cold) + compliance-driven",
                "points": 4
            },
            {
                "label": "B",
                "text": "Log retention defined",
                "points": 3
            },
            {
                "label": "C",
                "text": "Keep all logs (expensive)",
                "points": 2
            },
            {
                "label": "D",
                "text": "Logs deleted too soon",
                "points": 1
            },
            {
                "label": "E",
                "text": "No retention policy",
                "points": 0
            }
        ]
    },
    {
        "id": 394,
        "text": "Are logs correlated across services?",
        "options": [
            {
                "label": "A",
                "text": "Correlation IDs + distributed tracing + request flow",
                "points": 4
            },
            {
                "label": "B",
                "text": "Log correlation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Logs not correlated",
                "points": 2
            },
            {
                "label": "D",
                "text": "Difficult to trace requests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not correlated",
                "points": 0
            }
        ]
    },
    {
        "id": 395,
        "text": "Is there alerting on specific log patterns?",
        "options": [
            {
                "label": "A",
                "text": "Log-based alerts + pattern matching + anomaly detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Log pattern alerts",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some log pattern matching",
                "points": 2
            },
            {
                "label": "D",
                "text": "No log-based alerts",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 396,
        "text": "Are custom metrics tracked (business metrics)?",
        "options": [
            {
                "label": "A",
                "text": "Custom metrics + business KPIs + dashboards",
                "points": 4
            },
            {
                "label": "B",
                "text": "Custom metrics implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Default metrics only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No custom metrics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 397,
        "text": "Is there user session tracking for debugging?",
        "options": [
            {
                "label": "A",
                "text": "Full session tracking + replay + error correlation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Session tracking implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic session data",
                "points": 2
            },
            {
                "label": "D",
                "text": "No session tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 398,
        "text": "Are A/B test results tracked in monitoring?",
        "options": [
            {
                "label": "A",
                "text": "A/B test metrics + statistical significance + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "A/B test tracking",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual A/B analysis",
                "points": 2
            },
            {
                "label": "D",
                "text": "No A/B test tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 399,
        "text": "Is there alerting fatigue prevention (smart alerts)?",
        "options": [
            {
                "label": "A",
                "text": "ML-based alert aggregation + deduplication + smart routing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Alert deduplication",
                "points": 3
            },
            {
                "label": "C",
                "text": "All alerts sent equally",
                "points": 2
            },
            {
                "label": "D",
                "text": "Alert overload",
                "points": 1
            },
            {
                "label": "E",
                "text": "No alert management",
                "points": 0
            }
        ]
    },
    {
        "id": 400,
        "text": "Are monitoring costs optimized?",
        "options": [
            {
                "label": "A",
                "text": "Monitoring cost analysis + data retention optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some cost optimization",
                "points": 3
            },
            {
                "label": "C",
                "text": "No cost consideration",
                "points": 2
            },
            {
                "label": "D",
                "text": "Expensive monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 401,
        "text": "Is there a documented incident response plan?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive IR plan + runbooks + tested quarterly",
                "points": 4
            },
            {
                "label": "B",
                "text": "IR plan documented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal IR process",
                "points": 2
            },
            {
                "label": "D",
                "text": "No IR plan",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 402,
        "text": "Are incident severity levels defined?",
        "options": [
            {
                "label": "A",
                "text": "P0-P3 severity + SLA per level + escalation paths",
                "points": 4
            },
            {
                "label": "B",
                "text": "Severity levels defined",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal severity assessment",
                "points": 2
            },
            {
                "label": "D",
                "text": "All incidents treated equally",
                "points": 1
            },
            {
                "label": "E",
                "text": "No severity classification",
                "points": 0
            }
        ]
    },
    {
        "id": 403,
        "text": "Is there an on-call rotation for incidents?",
        "options": [
            {
                "label": "A",
                "text": "On-call rotation + runbooks + escalation + compensation",
                "points": 4
            },
            {
                "label": "B",
                "text": "On-call rotation exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal on-call",
                "points": 2
            },
            {
                "label": "D",
                "text": "No on-call rotation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 404,
        "text": "Are incidents tracked and managed?",
        "options": [
            {
                "label": "A",
                "text": "Incident tracking system + timeline + communication",
                "points": 4
            },
            {
                "label": "B",
                "text": "Incidents tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Email/Slack tracking only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No incident tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 405,
        "text": "Is there a status page for communicating incidents?",
        "options": [
            {
                "label": "A",
                "text": "Public status page + automated updates + history",
                "points": 4
            },
            {
                "label": "B",
                "text": "Status page exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual status updates",
                "points": 2
            },
            {
                "label": "D",
                "text": "No status page",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 406,
        "text": "Are users notified during incidents?",
        "options": [
            {
                "label": "A",
                "text": "Automated user notifications + ETA + updates",
                "points": 4
            },
            {
                "label": "B",
                "text": "User notification process",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional user communication",
                "points": 2
            },
            {
                "label": "D",
                "text": "No user notifications",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 407,
        "text": "Are post-incident reviews conducted?",
        "options": [
            {
                "label": "A",
                "text": "Mandatory PIR + action items + follow-up + blameless",
                "points": 4
            },
            {
                "label": "B",
                "text": "PIRs conducted",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional retrospectives",
                "points": 2
            },
            {
                "label": "D",
                "text": "No post-incident review",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not conducted",
                "points": 0
            }
        ]
    },
    {
        "id": 408,
        "text": "Are incident action items tracked to completion?",
        "options": [
            {
                "label": "A",
                "text": "Action item tracking + accountability + deadlines",
                "points": 4
            },
            {
                "label": "B",
                "text": "Action items tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Action items documented but not tracked",
                "points": 2
            },
            {
                "label": "D",
                "text": "No action item follow-up",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 409,
        "text": "Is there incident communication escalation?",
        "options": [
            {
                "label": "A",
                "text": "Escalation matrix + automated escalation + executive notification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Escalation process defined",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual escalation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No escalation process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not defined",
                "points": 0
            }
        ]
    },
    {
        "id": 410,
        "text": "Are incident metrics tracked (MTTR, MTBF, etc.)?",
        "options": [
            {
                "label": "A",
                "text": "Incident metrics + trending + improvement goals",
                "points": 4
            },
            {
                "label": "B",
                "text": "Incident metrics tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic incident counting",
                "points": 2
            },
            {
                "label": "D",
                "text": "No incident metrics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 411,
        "text": "Is there a war room/bridge for critical incidents?",
        "options": [
            {
                "label": "A",
                "text": "Dedicated war room + video bridge + roles defined",
                "points": 4
            },
            {
                "label": "B",
                "text": "War room process exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Ad-hoc incident calls",
                "points": 2
            },
            {
                "label": "D",
                "text": "No war room process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 412,
        "text": "Are incident timelines documented?",
        "options": [
            {
                "label": "A",
                "text": "Automated timeline tracking + every action logged",
                "points": 4
            },
            {
                "label": "B",
                "text": "Timelines documented",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual timeline creation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No timeline documentation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 413,
        "text": "Is there incident root cause analysis?",
        "options": [
            {
                "label": "A",
                "text": "RCA required for all P0/P1 + 5-whys + systemic fixes",
                "points": 4
            },
            {
                "label": "B",
                "text": "RCA performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional RCA",
                "points": 2
            },
            {
                "label": "D",
                "text": "No root cause analysis",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 414,
        "text": "Are recurring incidents identified and prevented?",
        "options": [
            {
                "label": "A",
                "text": "Recurring pattern detection + preventive measures",
                "points": 4
            },
            {
                "label": "B",
                "text": "Recurring incidents tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "No pattern analysis",
                "points": 2
            },
            {
                "label": "D",
                "text": "Same incidents repeat",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not analyzed",
                "points": 0
            }
        ]
    },
    {
        "id": 415,
        "text": "Is there a change freeze during incidents?",
        "options": [
            {
                "label": "A",
                "text": "Automated change freeze + approval for emergency fixes",
                "points": 4
            },
            {
                "label": "B",
                "text": "Change freeze policy",
                "points": 3
            },
            {
                "label": "C",
                "text": "No change controls during incidents",
                "points": 2
            },
            {
                "label": "D",
                "text": "Changes allowed during incidents",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not considered",
                "points": 0
            }
        ]
    },
    {
        "id": 416,
        "text": "Are external dependencies monitored during incidents?",
        "options": [
            {
                "label": "A",
                "text": "Third-party status tracking + impact assessment",
                "points": 4
            },
            {
                "label": "B",
                "text": "External monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual external checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "No external monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not monitored",
                "points": 0
            }
        ]
    },
    {
        "id": 417,
        "text": "Is there a customer success team for incident support?",
        "options": [
            {
                "label": "A",
                "text": "Dedicated CS team + incident communication + support",
                "points": 4
            },
            {
                "label": "B",
                "text": "CS team available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Engineering handles all communication",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dedicated support",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 418,
        "text": "Are incidents simulated/tested (chaos engineering)?",
        "options": [
            {
                "label": "A",
                "text": "Regular chaos engineering + game days + drills",
                "points": 4
            },
            {
                "label": "B",
                "text": "Occasional incident simulation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Incident drills planned",
                "points": 2
            },
            {
                "label": "D",
                "text": "No simulation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 419,
        "text": "Is there incident playbook for common scenarios?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive playbooks + decision trees + automation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Playbooks for common incidents",
                "points": 3
            },
            {
                "label": "C",
                "text": "Informal knowledge sharing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No playbooks",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not documented",
                "points": 0
            }
        ]
    },
    {
        "id": 420,
        "text": "Are communication templates prepared for incidents?",
        "options": [
            {
                "label": "A",
                "text": "Pre-written templates + approval workflow + multi-channel",
                "points": 4
            },
            {
                "label": "B",
                "text": "Communication templates exist",
                "points": 3
            },
            {
                "label": "C",
                "text": "Ad-hoc communication",
                "points": 2
            },
            {
                "label": "D",
                "text": "No templates",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not prepared",
                "points": 0
            }
        ]
    },
    {
        "id": 421,
        "text": "Is there incident budget/cost tracking?",
        "options": [
            {
                "label": "A",
                "text": "Incident cost analysis + business impact + reporting",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cost impact considered",
                "points": 3
            },
            {
                "label": "C",
                "text": "No cost tracking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Financial impact unknown",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 422,
        "text": "Are legal/compliance notified of security incidents?",
        "options": [
            {
                "label": "A",
                "text": "Automated legal notification + compliance workflow + timeline",
                "points": 4
            },
            {
                "label": "B",
                "text": "Legal notification process",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual legal notification",
                "points": 2
            },
            {
                "label": "D",
                "text": "Legal not notified",
                "points": 1
            },
            {
                "label": "E",
                "text": "No process",
                "points": 0
            }
        ]
    },
    {
        "id": 423,
        "text": "Is there customer compensation for SLA breaches?",
        "options": [
            {
                "label": "A",
                "text": "SLA breach detection + automated compensation + communication",
                "points": 4
            },
            {
                "label": "B",
                "text": "Compensation process exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual compensation decisions",
                "points": 2
            },
            {
                "label": "D",
                "text": "No SLA compensation",
                "points": 1
            },
            {
                "label": "E",
                "text": "No SLAs defined",
                "points": 0
            }
        ]
    },
    {
        "id": 424,
        "text": "Are incidents categorized by root cause?",
        "options": [
            {
                "label": "A",
                "text": "Root cause taxonomy + trending + prevention strategies",
                "points": 4
            },
            {
                "label": "B",
                "text": "Incidents categorized",
                "points": 3
            },
            {
                "label": "C",
                "text": "No categorization",
                "points": 2
            },
            {
                "label": "D",
                "text": "All incidents grouped together",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not categorized",
                "points": 0
            }
        ]
    },
    {
        "id": 425,
        "text": "Is there continuous improvement based on incidents?",
        "options": [
            {
                "label": "A",
                "text": "Incident retrospectives + systemic improvements + tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some improvement efforts",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional improvements",
                "points": 2
            },
            {
                "label": "D",
                "text": "No improvement process",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 426,
        "text": "Is infrastructure provisioned with IaC?",
        "options": [
            {
                "label": "A",
                "text": "All infrastructure as code + version controlled + tested",
                "points": 4
            },
            {
                "label": "B",
                "text": "IaC for most infrastructure",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some IaC usage",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual infrastructure",
                "points": 1
            },
            {
                "label": "E",
                "text": "No IaC",
                "points": 0
            }
        ]
    },
    {
        "id": 427,
        "text": "Are infrastructure changes tested before production?",
        "options": [
            {
                "label": "A",
                "text": "Staging environment + automated testing + validation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Infrastructure tested",
                "points": 3
            },
            {
                "label": "C",
                "text": "Sometimes tested",
                "points": 2
            },
            {
                "label": "D",
                "text": "Direct to production",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 428,
        "text": "Is there disaster recovery testing?",
        "options": [
            {
                "label": "A",
                "text": "Quarterly DR drills + full recovery validation + documentation",
                "points": 4
            },
            {
                "label": "B",
                "text": "DR testing performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "DR plan untested",
                "points": 2
            },
            {
                "label": "D",
                "text": "No DR testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "No DR plan",
                "points": 0
            }
        ]
    },
    {
        "id": 429,
        "text": "Are backups verified regularly?",
        "options": [
            {
                "label": "A",
                "text": "Automated backup verification + restoration testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backups verified",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional backup checks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Backups not verified",
                "points": 1
            },
            {
                "label": "E",
                "text": "No verification",
                "points": 0
            }
        ]
    },
    {
        "id": 430,
        "text": "Is there multi-region redundancy?",
        "options": [
            {
                "label": "A",
                "text": "Active-active multi-region + automatic failover",
                "points": 4
            },
            {
                "label": "B",
                "text": "Multi-region setup",
                "points": 3
            },
            {
                "label": "C",
                "text": "Single region with backup",
                "points": 2
            },
            {
                "label": "D",
                "text": "Single region only",
                "points": 1
            },
            {
                "label": "E",
                "text": "No redundancy",
                "points": 0
            }
        ]
    },
    {
        "id": 431,
        "text": "Are configuration changes version controlled?",
        "options": [
            {
                "label": "A",
                "text": "All config in version control + approval + audit",
                "points": 4
            },
            {
                "label": "B",
                "text": "Config version controlled",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some config in VCS",
                "points": 2
            },
            {
                "label": "D",
                "text": "Manual config changes",
                "points": 1
            },
            {
                "label": "E",
                "text": "No version control",
                "points": 0
            }
        ]
    },
    {
        "id": 432,
        "text": "Is there automatic rollback on errors?",
        "options": [
            {
                "label": "A",
                "text": "Automated error detection + instant rollback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Rollback capability exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual rollback",
                "points": 2
            },
            {
                "label": "D",
                "text": "Difficult to rollback",
                "points": 1
            },
            {
                "label": "E",
                "text": "No rollback",
                "points": 0
            }
        ]
    },
    {
        "id": 433,
        "text": "Are containers scanned for vulnerabilities?",
        "options": [
            {
                "label": "A",
                "text": "Automated container scanning + CVE tracking + blocking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Container scanning",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual security review",
                "points": 2
            },
            {
                "label": "D",
                "text": "No container scanning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not using containers",
                "points": 0
            }
        ]
    },
    {
        "id": 434,
        "text": "Is there network segmentation?",
        "options": [
            {
                "label": "A",
                "text": "Network segmentation + firewall rules + least privilege",
                "points": 4
            },
            {
                "label": "B",
                "text": "Network segmentation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Flat network",
                "points": 2
            },
            {
                "label": "D",
                "text": "No network controls",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 435,
        "text": "Are secrets rotated regularly?",
        "options": [
            {
                "label": "A",
                "text": "Automated secret rotation + expiry + auditing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Manual secret rotation",
                "points": 3
            },
            {
                "label": "C",
                "text": "Secrets rarely rotated",
                "points": 2
            },
            {
                "label": "D",
                "text": "Secrets never rotated",
                "points": 1
            },
            {
                "label": "E",
                "text": "No rotation policy",
                "points": 0
            }
        ]
    },
    {
        "id": 436,
        "text": "Is there DDoS protection?",
        "options": [
            {
                "label": "A",
                "text": "DDoS protection + rate limiting + threat detection",
                "points": 4
            },
            {
                "label": "B",
                "text": "Basic DDoS protection",
                "points": 3
            },
            {
                "label": "C",
                "text": "Relying on CDN only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No DDoS protection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 437,
        "text": "Are SSL/TLS certificates auto-renewed?",
        "options": [
            {
                "label": "A",
                "text": "Automated cert renewal + monitoring + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Certs auto-renew",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual renewal",
                "points": 2
            },
            {
                "label": "D",
                "text": "Certs expire occasionally",
                "points": 1
            },
            {
                "label": "E",
                "text": "No automation",
                "points": 0
            }
        ]
    },
    {
        "id": 438,
        "text": "Is there capacity planning?",
        "options": [
            {
                "label": "A",
                "text": "Capacity forecasting + proactive scaling + cost optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Capacity planning performed",
                "points": 3
            },
            {
                "label": "C",
                "text": "Reactive scaling",
                "points": 2
            },
            {
                "label": "D",
                "text": "No capacity planning",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not performed",
                "points": 0
            }
        ]
    },
    {
        "id": 439,
        "text": "Are resource quotas enforced?",
        "options": [
            {
                "label": "A",
                "text": "Resource quotas + monitoring + alerts + enforcement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Quotas enforced",
                "points": 3
            },
            {
                "label": "C",
                "text": "Soft quotas",
                "points": 2
            },
            {
                "label": "D",
                "text": "No quotas",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 440,
        "text": "Is there cost monitoring and optimization?",
        "options": [
            {
                "label": "A",
                "text": "Real-time cost tracking + optimization + budgets + alerts",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cost monitoring",
                "points": 3
            },
            {
                "label": "C",
                "text": "Monthly cost reviews",
                "points": 2
            },
            {
                "label": "D",
                "text": "No cost monitoring",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 441,
        "text": "Are database backups encrypted?",
        "options": [
            {
                "label": "A",
                "text": "Encrypted backups + key rotation + secure storage",
                "points": 4
            },
            {
                "label": "B",
                "text": "Backups encrypted",
                "points": 3
            },
            {
                "label": "C",
                "text": "Unencrypted backups",
                "points": 2
            },
            {
                "label": "D",
                "text": "Backup security not considered",
                "points": 1
            },
            {
                "label": "E",
                "text": "No backups",
                "points": 0
            }
        ]
    },
    {
        "id": 442,
        "text": "Is there automated failover?",
        "options": [
            {
                "label": "A",
                "text": "Automated failover + health checks + testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Failover configured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual failover",
                "points": 2
            },
            {
                "label": "D",
                "text": "No failover capability",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 443,
        "text": "Are logs aggregated centrally?",
        "options": [
            {
                "label": "A",
                "text": "Centralized logging + search + retention + analysis",
                "points": 4
            },
            {
                "label": "B",
                "text": "Logs aggregated",
                "points": 3
            },
            {
                "label": "C",
                "text": "Logs on individual servers",
                "points": 2
            },
            {
                "label": "D",
                "text": "No log aggregation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 444,
        "text": "Is there distributed tracing?",
        "options": [
            {
                "label": "A",
                "text": "Distributed tracing + request correlation + visualization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tracing implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No distributed tracing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Difficult to trace requests",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 445,
        "text": "Are dependencies updated automatically?",
        "options": [
            {
                "label": "A",
                "text": "Automated dependency updates + testing + security scanning",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some automated updates",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual updates only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Outdated dependencies",
                "points": 1
            },
            {
                "label": "E",
                "text": "Never updated",
                "points": 0
            }
        ]
    },
    {
        "id": 446,
        "text": "Is there blue-green deployment capability?",
        "options": [
            {
                "label": "A",
                "text": "Blue-green deployment + automated switching + rollback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Blue-green deployment",
                "points": 3
            },
            {
                "label": "C",
                "text": "Standard deployment only",
                "points": 2
            },
            {
                "label": "D",
                "text": "Downtime during deploys",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 447,
        "text": "Are feature flags used?",
        "options": [
            {
                "label": "A",
                "text": "Feature flag system + targeting + kill switches",
                "points": 4
            },
            {
                "label": "B",
                "text": "Feature flags used",
                "points": 3
            },
            {
                "label": "C",
                "text": "Environment variables only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No feature flags",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 448,
        "text": "Is there canary deployment?",
        "options": [
            {
                "label": "A",
                "text": "Canary deployment + automated rollback + metrics",
                "points": 4
            },
            {
                "label": "B",
                "text": "Canary deployment capability",
                "points": 3
            },
            {
                "label": "C",
                "text": "No canary deployment",
                "points": 2
            },
            {
                "label": "D",
                "text": "All-or-nothing deploys",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 449,
        "text": "Are deployment metrics tracked?",
        "options": [
            {
                "label": "A",
                "text": "Deployment frequency + lead time + failure rate + MTTR",
                "points": 4
            },
            {
                "label": "B",
                "text": "Deployment metrics tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic deployment logging",
                "points": 2
            },
            {
                "label": "D",
                "text": "No deployment metrics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 450,
        "text": "Is there infrastructure cost attribution?",
        "options": [
            {
                "label": "A",
                "text": "Cost allocation by service/team + chargebacks",
                "points": 4
            },
            {
                "label": "B",
                "text": "Cost attribution",
                "points": 3
            },
            {
                "label": "C",
                "text": "Total cost only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No cost breakdown",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 451,
        "text": "Is onboarding completion tracked?",
        "options": [
            {
                "label": "A",
                "text": "Onboarding funnel + drop-off analysis + optimization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Completion tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic tracking",
                "points": 2
            },
            {
                "label": "D",
                "text": "No onboarding tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 452,
        "text": "Is there progressive onboarding (not overwhelming)?",
        "options": [
            {
                "label": "A",
                "text": "Progressive onboarding + contextual help + optional",
                "points": 4
            },
            {
                "label": "B",
                "text": "Progressive onboarding",
                "points": 3
            },
            {
                "label": "C",
                "text": "All features shown upfront",
                "points": 2
            },
            {
                "label": "D",
                "text": "Overwhelming onboarding",
                "points": 1
            },
            {
                "label": "E",
                "text": "No onboarding",
                "points": 0
            }
        ]
    },
    {
        "id": 453,
        "text": "Can users skip onboarding if experienced?",
        "options": [
            {
                "label": "A",
                "text": "Skip option + role detection + personalized onboarding",
                "points": 4
            },
            {
                "label": "B",
                "text": "Skip available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Onboarding required",
                "points": 2
            },
            {
                "label": "D",
                "text": "No skip option",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 454,
        "text": "Are onboarding steps validated?",
        "options": [
            {
                "label": "A",
                "text": "Step validation + help on errors + progress saving",
                "points": 4
            },
            {
                "label": "B",
                "text": "Validation implemented",
                "points": 3
            },
            {
                "label": "C",
                "text": "No validation",
                "points": 2
            },
            {
                "label": "D",
                "text": "Users get stuck",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not validated",
                "points": 0
            }
        ]
    },
    {
        "id": 455,
        "text": "Is there onboarding A/B testing?",
        "options": [
            {
                "label": "A",
                "text": "Continuous onboarding optimization + A/B testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Occasional A/B tests",
                "points": 3
            },
            {
                "label": "C",
                "text": "No onboarding testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "Static onboarding",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 456,
        "text": "Are users welcomed personally?",
        "options": [
            {
                "label": "A",
                "text": "Personalized welcome + name usage + relevant content",
                "points": 4
            },
            {
                "label": "B",
                "text": "Basic personalization",
                "points": 3
            },
            {
                "label": "C",
                "text": "Generic welcome",
                "points": 2
            },
            {
                "label": "D",
                "text": "No welcome message",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 457,
        "text": "Is time-to-value minimized?",
        "options": [
            {
                "label": "A",
                "text": "Value delivered in <1 minute + quick wins + engagement",
                "points": 4
            },
            {
                "label": "B",
                "text": "Quick time-to-value",
                "points": 3
            },
            {
                "label": "C",
                "text": "Long time-to-value",
                "points": 2
            },
            {
                "label": "D",
                "text": "Value unclear",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not optimized",
                "points": 0
            }
        ]
    },
    {
        "id": 458,
        "text": "Is there onboarding help/support?",
        "options": [
            {
                "label": "A",
                "text": "In-app help + chat support + tooltips",
                "points": 4
            },
            {
                "label": "B",
                "text": "Help available",
                "points": 3
            },
            {
                "label": "C",
                "text": "External documentation only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No onboarding help",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not provided",
                "points": 0
            }
        ]
    },
    {
        "id": 459,
        "text": "Are onboarding pain points identified?",
        "options": [
            {
                "label": "A",
                "text": "Drop-off analysis + user feedback + session replay",
                "points": 4
            },
            {
                "label": "B",
                "text": "Pain points tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional analysis",
                "points": 2
            },
            {
                "label": "D",
                "text": "No pain point identification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not analyzed",
                "points": 0
            }
        ]
    },
    {
        "id": 460,
        "text": "Is onboarding optimized for mobile?",
        "options": [
            {
                "label": "A",
                "text": "Mobile-first onboarding + touch-optimized + responsive",
                "points": 4
            },
            {
                "label": "B",
                "text": "Mobile onboarding works",
                "points": 3
            },
            {
                "label": "C",
                "text": "Desktop-only onboarding",
                "points": 2
            },
            {
                "label": "D",
                "text": "Poor mobile experience",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not mobile-friendly",
                "points": 0
            }
        ]
    },
    {
        "id": 461,
        "text": "Is student engagement measured?",
        "options": [
            {
                "label": "A",
                "text": "Engagement metrics + DAU/MAU + feature usage + trending",
                "points": 4
            },
            {
                "label": "B",
                "text": "Engagement tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic metrics",
                "points": 2
            },
            {
                "label": "D",
                "text": "No engagement tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not measured",
                "points": 0
            }
        ]
    },
    {
        "id": 462,
        "text": "Are inactive users re-engaged?",
        "options": [
            {
                "label": "A",
                "text": "Automated re-engagement + personalized messaging + incentives",
                "points": 4
            },
            {
                "label": "B",
                "text": "Re-engagement campaigns",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional emails",
                "points": 2
            },
            {
                "label": "D",
                "text": "No re-engagement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 463,
        "text": "Is there a streak/consistency feature?",
        "options": [
            {
                "label": "A",
                "text": "Streak tracking + rewards + notifications",
                "points": 4
            },
            {
                "label": "B",
                "text": "Streak feature exists",
                "points": 3
            },
            {
                "label": "C",
                "text": "No streak tracking",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not implemented",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 464,
        "text": "Are achievements/badges meaningful?",
        "options": [
            {
                "label": "A",
                "text": "Achievements tied to learning goals + progression",
                "points": 4
            },
            {
                "label": "B",
                "text": "Meaningful achievements",
                "points": 3
            },
            {
                "label": "C",
                "text": "Arbitrary badges",
                "points": 2
            },
            {
                "label": "D",
                "text": "No achievements",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 465,
        "text": "Is progress visualized clearly?",
        "options": [
            {
                "label": "A",
                "text": "Progress visualization + milestones + completion percentage",
                "points": 4
            },
            {
                "label": "B",
                "text": "Progress visible",
                "points": 3
            },
            {
                "label": "C",
                "text": "Unclear progress",
                "points": 2
            },
            {
                "label": "D",
                "text": "No progress tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not visualized",
                "points": 0
            }
        ]
    },
    {
        "id": 466,
        "text": "Are students encouraged to set goals?",
        "options": [
            {
                "label": "A",
                "text": "Goal-setting features + tracking + reminders",
                "points": 4
            },
            {
                "label": "B",
                "text": "Goal features available",
                "points": 3
            },
            {
                "label": "C",
                "text": "No goal-setting",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not encouraged",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 467,
        "text": "Is there social/community features?",
        "options": [
            {
                "label": "A",
                "text": "Study groups + forums + peer interaction + moderation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Social features exist",
                "points": 3
            },
            {
                "label": "C",
                "text": "Individual learning only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No social features",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 468,
        "text": "Are students matched with study partners?",
        "options": [
            {
                "label": "A",
                "text": "Intelligent matching + preferences + success tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Matching available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual partner finding",
                "points": 2
            },
            {
                "label": "D",
                "text": "No matching",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 469,
        "text": "Is there celebration of success?",
        "options": [
            {
                "label": "A",
                "text": "Success celebrations + notifications + sharing options",
                "points": 4
            },
            {
                "label": "B",
                "text": "Success acknowledged",
                "points": 3
            },
            {
                "label": "C",
                "text": "No celebration",
                "points": 2
            },
            {
                "label": "D",
                "text": "Success ignored",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 470,
        "text": "Are reminders sent for deadlines?",
        "options": [
            {
                "label": "A",
                "text": "Smart reminders + multiple channels + customizable",
                "points": 4
            },
            {
                "label": "B",
                "text": "Reminders sent",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic email reminders",
                "points": 2
            },
            {
                "label": "D",
                "text": "No reminders",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 471,
        "text": "Can students see their own progress?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive student dashboard + insights + recommendations",
                "points": 4
            },
            {
                "label": "B",
                "text": "Progress visible to students",
                "points": 3
            },
            {
                "label": "C",
                "text": "Limited visibility",
                "points": 2
            },
            {
                "label": "D",
                "text": "No student-facing analytics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 472,
        "text": "Are weak areas identified automatically?",
        "options": [
            {
                "label": "A",
                "text": "AI-powered gap analysis + recommendations + resources",
                "points": 4
            },
            {
                "label": "B",
                "text": "Weak areas identified",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual assessment",
                "points": 2
            },
            {
                "label": "D",
                "text": "No gap identification",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 473,
        "text": "Are learning patterns analyzed?",
        "options": [
            {
                "label": "A",
                "text": "Learning pattern analysis + optimal study times + personalization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Pattern analysis",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic usage stats",
                "points": 2
            },
            {
                "label": "D",
                "text": "No pattern analysis",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not analyzed",
                "points": 0
            }
        ]
    },
    {
        "id": 474,
        "text": "Is time spent on tasks tracked?",
        "options": [
            {
                "label": "A",
                "text": "Time tracking + productivity insights + comparison",
                "points": 4
            },
            {
                "label": "B",
                "text": "Time tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Basic session duration",
                "points": 2
            },
            {
                "label": "D",
                "text": "No time tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tracked",
                "points": 0
            }
        ]
    },
    {
        "id": 475,
        "text": "Are mastery levels calculated?",
        "options": [
            {
                "label": "A",
                "text": "Mastery calculation + progression + certification",
                "points": 4
            },
            {
                "label": "B",
                "text": "Mastery levels tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "Pass/fail only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No mastery tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not calculated",
                "points": 0
            }
        ]
    },
    {
        "id": 476,
        "text": "Is retention measured over time?",
        "options": [
            {
                "label": "A",
                "text": "Retention testing + spaced repetition + long-term tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Retention measured",
                "points": 3
            },
            {
                "label": "C",
                "text": "Immediate recall only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No retention measurement",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not measured",
                "points": 0
            }
        ]
    },
    {
        "id": 477,
        "text": "Are learning velocity metrics tracked?",
        "options": [
            {
                "label": "A",
                "text": "Velocity tracking + pacing recommendations + comparison",
                "points": 4
            },
            {
                "label": "B",
                "text": "Velocity tracked",
                "points": 3
            },
            {
                "label": "C",
                "text": "No velocity metrics",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not tracked",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not applicable",
                "points": 0
            }
        ]
    },
    {
        "id": 478,
        "text": "Can students export their data?",
        "options": [
            {
                "label": "A",
                "text": "Self-service data export + multiple formats + privacy controls",
                "points": 4
            },
            {
                "label": "B",
                "text": "Data export available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Request-based export",
                "points": 2
            },
            {
                "label": "D",
                "text": "No data export",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 479,
        "text": "Are predictive insights provided?",
        "options": [
            {
                "label": "A",
                "text": "ML-based predictions + success forecasting + interventions",
                "points": 4
            },
            {
                "label": "B",
                "text": "Predictive insights available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Historical data only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No predictions",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 480,
        "text": "Is benchmarking available (peer comparison)?",
        "options": [
            {
                "label": "A",
                "text": "Anonymous benchmarking + cohort comparison + privacy",
                "points": 4
            },
            {
                "label": "B",
                "text": "Benchmarking available",
                "points": 3
            },
            {
                "label": "C",
                "text": "No peer comparison",
                "points": 2
            },
            {
                "label": "D",
                "text": "Not implemented",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 481,
        "text": "Can educators track student progress?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive educator dashboard + real-time + insights",
                "points": 4
            },
            {
                "label": "B",
                "text": "Progress tracking available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Limited educator visibility",
                "points": 2
            },
            {
                "label": "D",
                "text": "No educator tools",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 482,
        "text": "Are at-risk students identified?",
        "options": [
            {
                "label": "A",
                "text": "At-risk detection + alerts + intervention suggestions",
                "points": 4
            },
            {
                "label": "B",
                "text": "At-risk identification",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual identification",
                "points": 2
            },
            {
                "label": "D",
                "text": "No at-risk detection",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 483,
        "text": "Can educators create custom content?",
        "options": [
            {
                "label": "A",
                "text": "Full content creation suite + templates + sharing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Content creation available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Limited creation",
                "points": 2
            },
            {
                "label": "D",
                "text": "No content creation",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 484,
        "text": "Is there class performance analytics?",
        "options": [
            {
                "label": "A",
                "text": "Class analytics + comparison + trends + export",
                "points": 4
            },
            {
                "label": "B",
                "text": "Class analytics available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Individual only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No class analytics",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 485,
        "text": "Can educators communicate with students?",
        "options": [
            {
                "label": "A",
                "text": "Messaging + announcements + feedback + tracking",
                "points": 4
            },
            {
                "label": "B",
                "text": "Communication tools available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Email only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No communication",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 486,
        "text": "Are assignments trackable?",
        "options": [
            {
                "label": "A",
                "text": "Assignment tracking + submissions + grading + analytics",
                "points": 4
            },
            {
                "label": "B",
                "text": "Assignment tracking",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual tracking",
                "points": 2
            },
            {
                "label": "D",
                "text": "No assignment tracking",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 487,
        "text": "Can educators customize AI behavior?",
        "options": [
            {
                "label": "A",
                "text": "AI customization + difficulty + style + guardrails",
                "points": 4
            },
            {
                "label": "B",
                "text": "Some customization",
                "points": 3
            },
            {
                "label": "C",
                "text": "Fixed AI behavior",
                "points": 2
            },
            {
                "label": "D",
                "text": "No customization",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 488,
        "text": "Are grading tools provided?",
        "options": [
            {
                "label": "A",
                "text": "Grading tools + rubrics + automated grading + feedback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Grading available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Manual grading only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No grading tools",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not provided",
                "points": 0
            }
        ]
    },
    {
        "id": 489,
        "text": "Is there parent/guardian access?",
        "options": [
            {
                "label": "A",
                "text": "Parent portal + progress reports + communication",
                "points": 4
            },
            {
                "label": "B",
                "text": "Parent access available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Request-based access",
                "points": 2
            },
            {
                "label": "D",
                "text": "No parent access",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not implemented",
                "points": 0
            }
        ]
    },
    {
        "id": 490,
        "text": "Can educators collaborate?",
        "options": [
            {
                "label": "A",
                "text": "Educator collaboration + content sharing + best practices",
                "points": 4
            },
            {
                "label": "B",
                "text": "Collaboration features",
                "points": 3
            },
            {
                "label": "C",
                "text": "Individual work only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No collaboration",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 491,
        "text": "Is the platform WCAG 2.1 AA compliant?",
        "options": [
            {
                "label": "A",
                "text": "WCAG AAA compliant + third-party audited + certified",
                "points": 4
            },
            {
                "label": "B",
                "text": "WCAG AA compliant",
                "points": 3
            },
            {
                "label": "C",
                "text": "Partially compliant",
                "points": 2
            },
            {
                "label": "D",
                "text": "Many accessibility issues",
                "points": 1
            },
            {
                "label": "E",
                "text": "No accessibility work",
                "points": 0
            }
        ]
    },
    {
        "id": 492,
        "text": "Is screen reader support tested?",
        "options": [
            {
                "label": "A",
                "text": "Regular testing with JAWS, NVDA, VoiceOver + user testing",
                "points": 4
            },
            {
                "label": "B",
                "text": "Screen reader testing",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No screen reader testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    },
    {
        "id": 493,
        "text": "Are all videos captioned?",
        "options": [
            {
                "label": "A",
                "text": "All videos + accurate captions + auto-generation + review",
                "points": 4
            },
            {
                "label": "B",
                "text": "Videos captioned",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some captions",
                "points": 2
            },
            {
                "label": "D",
                "text": "No captions",
                "points": 1
            },
            {
                "label": "E",
                "text": "No videos",
                "points": 0
            }
        ]
    },
    {
        "id": 494,
        "text": "Is keyboard navigation complete?",
        "options": [
            {
                "label": "A",
                "text": "Full keyboard nav + shortcuts + documentation",
                "points": 4
            },
            {
                "label": "B",
                "text": "Keyboard navigation works",
                "points": 3
            },
            {
                "label": "C",
                "text": "Partial keyboard support",
                "points": 2
            },
            {
                "label": "D",
                "text": "Mouse required",
                "points": 1
            },
            {
                "label": "E",
                "text": "No keyboard support",
                "points": 0
            }
        ]
    },
    {
        "id": 495,
        "text": "Are color choices accessible?",
        "options": [
            {
                "label": "A",
                "text": "High contrast + colorblind-friendly + theme options",
                "points": 4
            },
            {
                "label": "B",
                "text": "Accessible colors",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some contrast issues",
                "points": 2
            },
            {
                "label": "D",
                "text": "Poor color choices",
                "points": 1
            },
            {
                "label": "E",
                "text": "No color consideration",
                "points": 0
            }
        ]
    },
    {
        "id": 496,
        "text": "Is text resizable without breaking?",
        "options": [
            {
                "label": "A",
                "text": "Text scalable 200%+ + responsive layout",
                "points": 4
            },
            {
                "label": "B",
                "text": "Text resizable",
                "points": 3
            },
            {
                "label": "C",
                "text": "Some layout breaks",
                "points": 2
            },
            {
                "label": "D",
                "text": "Fixed text size",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not resizable",
                "points": 0
            }
        ]
    },
    {
        "id": 497,
        "text": "Are dyslexia-friendly options available?",
        "options": [
            {
                "label": "A",
                "text": "Dyslexia font + spacing + customization",
                "points": 4
            },
            {
                "label": "B",
                "text": "Dyslexia support",
                "points": 3
            },
            {
                "label": "C",
                "text": "Standard fonts only",
                "points": 2
            },
            {
                "label": "D",
                "text": "No dyslexia consideration",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not available",
                "points": 0
            }
        ]
    },
    {
        "id": 498,
        "text": "Is there multilingual support?",
        "options": [
            {
                "label": "A",
                "text": "5+ languages + native speakers + localization",
                "points": 4
            },
            {
                "label": "B",
                "text": "2-3 languages",
                "points": 3
            },
            {
                "label": "C",
                "text": "English only, translations planned",
                "points": 2
            },
            {
                "label": "D",
                "text": "English only",
                "points": 1
            },
            {
                "label": "E",
                "text": "No multilingual support",
                "points": 0
            }
        ]
    },
    {
        "id": 499,
        "text": "Are accommodations for disabilities provided?",
        "options": [
            {
                "label": "A",
                "text": "Comprehensive accommodations + extra time + assistive tech",
                "points": 4
            },
            {
                "label": "B",
                "text": "Accommodations available",
                "points": 3
            },
            {
                "label": "C",
                "text": "Limited accommodations",
                "points": 2
            },
            {
                "label": "D",
                "text": "No accommodations",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not provided",
                "points": 0
            }
        ]
    },
    {
        "id": 500,
        "text": "Has the platform been tested with disabled users?",
        "options": [
            {
                "label": "A",
                "text": "Regular user testing + accessibility advocates + feedback",
                "points": 4
            },
            {
                "label": "B",
                "text": "Tested with disabled users",
                "points": 3
            },
            {
                "label": "C",
                "text": "Occasional testing",
                "points": 2
            },
            {
                "label": "D",
                "text": "No disabled user testing",
                "points": 1
            },
            {
                "label": "E",
                "text": "Not tested",
                "points": 0
            }
        ]
    }
];
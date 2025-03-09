const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.content-section');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const sectionId = link.dataset.section;

        contentSections.forEach(section => section.classList.remove('active'));

        document.getElementById(sectionId).classList.add('active');

        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

function calculateGWA() {
    const grade1 = parseFloat(document.getElementById('grade1').value) || 0;
    const grade2 = parseFloat(document.getElementById('grade2').value) || 0;

    const totalGrades = grade1 + grade2;
    const numberOfGrades = 2;
    const gwa = totalGrades / numberOfGrades;

    document.getElementById('gwa-result').textContent = `Your GWA: ${gwa.toFixed(2)}`;
}

const pastGradesTable = document.getElementById('past-grades-table');
const gradeLevelSelect = document.getElementById('grade-level');
const gradeYearSelect = document.getElementById('grade-year');
const gradeSemSelect = document.getElementById('grade-sem');

const gradesData = {
    "1st-1st": [
        { subject: "Art Appreciation", grade: 1.50 },
        { subject: "Data Structures and Algorithms", grade: 1.50 },
        { subject: "Individual and Dual Sports", grade: 1.25 },
        { subject: "Information Management", grade: 1.75 },
        { subject: "Networking 2", grade: 1.75 },
        { subject: "Object-Oriented Programming", grade: 1.75 },
        { subject: "Systems Analysis and Design", grade: 1.75 }
    ],
    // Add other semesters and years here following the same structure
    "1st-2nd": [
        { subject: "Science, Technology and Society", grade: null },
        { subject: "Purposive Communication", grade: null },
        { subject: "Philippine Popular Culture", grade: null },
        { subject: "Intermediate Programming", grade: null },
        { subject: "Platform Technologies", grade: null },
        { subject: "Networking 1", grade: null },
        { subject: "Rhythmic Activities", grade: null },
        { subject: "National Service Training Program 2", grade: null }
    ],
    "2nd-1st": [
        { subject: "Art Appreciation", grade: 1.25 },
        { subject: "Systems Analysis and Design", grade: 1.75 },
        { subject: "Data Structures and Algorithms", grade: 1.25 },
        { subject: "Information Management", grade: 1.5 },
        { subject: "Object-Oriented Programming", grade: 1.25 },
        { subject: "Networking 2", grade: 1.75 },
        { subject: "Individual and Dual Sports", grade: 1.25 }
    ],
    "2nd-2nd": [
        { subject: "Understanding the Self", grade: null },
        { subject: "Readings in Philippine History", grade: null },
        { subject: "Introduction to Human Computer Interaction", grade: null },
        { subject: "Software Engineering", grade: null },
        { subject: "Integrative Programming and Technologies 1", grade: null },
        { subject: "Advanced Database Systems", grade: null },
        { subject: "Team Sports", grade: null }
    ],
    "3rd-1st": [
        { subject: "The Contemporary World", grade: null },
        { subject: "The Life and Works of Rizal", grade: null },
        { subject: "Discrete Mathematics", grade: null },
        { subject: "Social Professional Issues 1", grade: null },
        { subject: "Architecture and Organization", grade: null },
        { subject: "Integrative Programming and Technologies 2", grade: null },
        { subject: "Systems Integration and Architecture 1", grade: null }
    ],
    "3rd-2nd": [
        { subject: "Ethics", grade: null },
        { subject: "Algorithms and Complexity", grade: null },
        { subject: "Quantitative Methods", grade: null },
        { subject: "Application Development and Emerging Technologies", grade: null },
        { subject: "Fundamental of Information Assurance and Security 1", grade: null },
        { subject: "Systems Integration and Architecture 2", grade: null }
    ],
    "4th-1st": [
        { subject: "Capstone Project and Research 1", grade: null },
        { subject: "Practicum 1", grade: null },
        { subject: "Automata Theory and Formal Language", grade: null },
        { subject: "Information Assurance and Security 2", grade: null }
    ],
    "4th-2nd": [
        { subject: "Capstone Project and Research 2", grade: null },
        { subject: "Practicum 2", grade: null },
        { subject: "Systems Administration and Maintenance", grade: null }
    ]
};

function displayGrades(grades) {
    pastGradesTable.innerHTML = '';
    grades.forEach(grade => {
        const row = pastGradesTable.insertRow();
        row.insertCell().textContent = grade.subject;
        row.insertCell().textContent = grade.grade;
    });
}

function filterGrades() {
    const selectedYear = gradeYearSelect.value;
    const selectedSem = gradeSemSelect.value;

    let filteredGrades = [];

    for (const key in gradesData) {
        const [year, sem] = key.split('-');

        const yearMatch = selectedYear === 'all' || year === selectedYear;
        const semMatch = selectedSem === 'all' || sem === selectedSem;

        if (yearMatch && semMatch) {
            filteredGrades = filteredGrades.concat(gradesData[key]);
        }
    }
    displayGrades(filteredGrades);
}

filterGrades(); // Initial 
const curriculumData = {
    "1st-1st": [
        { code: "HUM 1", title: "Art Appreciation", units: 3, prereq: "None" },
        { code: "CC104", title: "Data Structures and Algorithms", units: 3, prereq: "CC103" },
        { code: "PE 3", title: "Individual and Dual Sports", units: 2, prereq: "PE 1" },
        { code: "CC105", title: "Information Management", units: 3, prereq: "CC103" },
        { code: "NET102", title: "Networking 2", units: 3, prereq: "NET101, PT101" },
        { code: "PF101", title: "Object-Oriented Programming", units: 3, prereq: "CC103, PT101, NET101" },
        { code: "IS104", title: "Systems Analysis and Design", units: 3, prereq: "2nd Year Standing, CC103" }
    ],
    "1st-2nd": [
        { code: "SCI 1", title: "Science, Technology and Society", units: 3, prereq: "None" },
        { code: "ENG 1", title: "Purposive Communication", units: 3, prereq: "None" },
        { code: "GEE 3", title: "Philippine Popular Culture", units: 3, prereq: "None" },
        { code: "CC103", title: "Intermediate Programming", units: 3, prereq: "CC101, CC102" },
        { code: "PT101", title: "Platform Technologies", units: 3, prereq: "CC101, CC102" },
        { code: "NET101", title: "Networking 1", units: 3, prereq: "None" },
        { code: "PE 2", title: "Rhythmic Activities", units: 2, prereq: "PE 1" },
        { code: "NSTP 2", title: "National Service Training Program 2", units: 3, prereq: "NSTP 1" }
    ],
    "2nd-1st": [
        { code: "HUM 1", title: "Art Appreciation", units: 3, prereq: "None" },
        { code: "IS104", title: "Systems Analysis and Design", units: 3, prereq: "2nd Year Standing, CC103" },
        { code: "CC104", title: "Data Structures and Algorithms", units: 3, prereq: "CC103" },
        { code: "CC105", title: "Information Management", units: 3, prereq: "CC103" },
        { code: "PF101", title: "Object-Oriented Programming", units: 3, prereq: "CC103, PT101, NET101" },
        { code: "NET102", title: "Networking 2", units: 3, prereq: "NET101, PT101" },
        { code: "PE 3", title: "Individual and Dual Sports", units: 2, prereq: "PE 1" }
    ],
    "2nd-2nd": [
        { code: "SOCSCI 1", title: "Understanding the Self", units: 3, prereq: "None" },
        { code: "SOCSCI 2", title: "Readings in Philippine History", units: 3, prereq: "None" },
        { code: "HCI101", title: "Introduction to Human Computer Interaction", units: 3, prereq: "None" },
        { code: "SE101", title: "Software Engineering", units: 3, prereq: "CC105, PF101, IS104" },
        { code: "IPT101", title: "Integrative Programming and Technologies 1", units: 3, prereq: "PT101, PF101" },
        { code: "IM101", title: "Advanced Database Systems", units: 3, prereq: "CC105, PF101, IS104" },
        { code: "PE 4", title: "Team Sports", units: 2, prereq: "PE 1" }
    ],
    "3rd-1st": [
        { code: "SOCSCI 3", title: "The Contemporary World", units: 3, prereq: "None" },
        { code: "RIZAL", title: "The Life and Works of Rizal", units: 3, prereq: "None" },
        { code: "MS101", title: "Discrete Mathematics", units: 3, prereq: "3rd Year Standing, CC104, PF101" },
        { code: "SPI101", title: "Social Professional Issues 1", units: 3, prereq: "3rd Year Standing, SE101" },
        { code: "AR101", title: "Architecture and Organization", units: 3, prereq: "3rd Year Standing, CC103" },
        { code: "IPT102", title: "Integrative Programming and Technologies 2", units: 3, prereq: "3rd Year Standing, IPT101" },
        { code: "SIA101", title: "Systems Integration and Architecture 1", units: 3, prereq: "3rd Year Standing, IPT101" }
    ],
    "3rd-2nd": [
        { code: "HUM 2", title: "Ethics", units: 3, prereq: "None" },
        { code: "AL101", title: "Algorithms and Complexity", units: 3, prereq: "MS101" },
        { code: "MS102", title: "Quantitative Methods", units: 3, prereq: "3rd Year Standing, MS101" },
        { code: "CC106", title: "Application Development and Emerging Technologies", units: 3, prereq: "3rd Year Standing, SE101" },
        { code: "IAS101", title: "Fundamental of Information Assurance and Security 1", units: 3, prereq: "3rd Year Standing, SIA101" },
        { code: "SIA102", title: "Systems Integration and Architecture 2", units: 3, prereq: "3rd Year Standing, SIA101" }
    ],
    "4th-1st": [
        { code: "CAP101", title: "Capstone Project and Research 1", units: 3, prereq: "4th Year Standing, IAS101, MS102" },
        { code: "PRC101", title: "Practicum 1", units: 3, prereq: "4th Year Standing, MS102, IAS101, CC106" },
        { code: "AL102", title: "Automata Theory and Formal Language", units: 3, prereq: "AL101" },
        { code: "IAS102", title: "Information Assurance and Security 2", units: 3, prereq: "IAS101" }
    ],
    "4th-2nd": [
        { code: "CAP102", title: "Capstone Project and Research 2", units: 3, prereq: "CAP101" },
        { code: "PRC102", title: "Practicum 2", units: 3, prereq: "PRC101" },
        { code: "SAM101", title: "Systems Administration and Maintenance", units: 3, prereq: "IAS102" }
    ]
};

const curriculumTable = document.getElementById('curriculum-table');
const curriculumYearSelect = document.getElementById('curriculum-year');
const curriculumSemSelect = document.getElementById('curriculum-sem');

function displayCurriculum(curriculum) {
    curriculumTable.innerHTML = '';
    curriculum.forEach(item => {
        const row = curriculumTable.insertRow();
        row.insertCell().textContent = item.code;
        row.insertCell().textContent = item.title;
        row.insertCell().textContent = item.units;
        row.insertCell().textContent = item.prereq;
    });
}

function filterCurriculum() {
    const selectedYear = curriculumYearSelect.value;
    const selectedSem = curriculumSemSelect.value;

    let filteredCurriculum = []; // Corrected: Initialize as an empty array

    for (const key in curriculumData) {
        const [year, sem] = key.split('-');

        const yearMatch = selectedYear === 'all' || year === selectedYear;
        const semMatch = selectedSem === 'all' || sem === selectedSem;

        if (yearMatch && semMatch) {
            filteredCurriculum = filteredCurriculum.concat(curriculumData[key]);
        }
    }
    displayCurriculum(filteredCurriculum);
}

// Initial display:
filterCurriculum();
const currentGradesTable = document.getElementById('current-grades-table');

const currentGradesData = [
    { subject: "Understanding the Self", grade: null },
    { subject: "Readings in Philippine History", grade: null },
    { subject: "Introduction to Human Computer Interaction", grade: null },
    { subject: "Software Engineering", grade: null },
    { subject: "Integrative Programming and Technologies 1", grade: null },
    { subject: "Advanced Database Systems", grade: null },
    { subject: "Team Sports", grade: null }
];

function displayCurrentGrades(grades) {
    currentGradesTable.innerHTML = '';
    grades.forEach(grade => {
        const row = currentGradesTable.insertRow();
        row.insertCell().textContent = grade.subject;
        row.insertCell().textContent = grade.grade === null ? "" : grade.grade; // Display "Not yet submitted" if grade is null
    });
}

displayCurrentGrades(currentGradesData);

const logoutLink = document.querySelector('.logout-link');

logoutLink.addEventListener('click', () => {
  // Redirect to index.html
  window.location.href = 'index.html'; 
});
document.addEventListener('DOMContentLoaded', function() {
    const userDropdownToggle = document.getElementById('userDropdownToggle');
    const userDropdown = document.getElementById('userDropdown');

    userDropdownToggle.addEventListener('click', function() {
      userDropdown.classList.toggle('show');
    });

    window.onclick = function(event) {
      if (!event.target.matches('.user-icon')) {
        if (userDropdown.classList.contains('show')) {
          userDropdown.classList.remove('show');
        }
      }
    };
  });

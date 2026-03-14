const mcqs = [
    {
        question: "What is the capital of Assam?",
        options: ["Guwahati", "Dispur", "Jorhat", "Tezpur"],
        answer: "Dispur"
    },
    {
        question: "Which river flows through Assam?",
        options: ["Brahmaputra", "Ganga", "Yamuna", "Godavari"],
        answer: "Brahmaputra"
    },
    {
        question: "What is the official language of Assam?",
        options: ["Hindi", "Assamese", "Bengali", "English"],
        answer: "Assamese"
    }
];

const mcqList = document.getElementById('mcq-list');

mcqs.forEach((mcq, index) => {
    const mcqDiv = document.createElement('div');
    mcqDiv.classList.add('mcq-item');
    mcqDiv.innerHTML = `
        <strong>${index + 1}. ${mcq.question}</strong><br>
        ${mcq.options.map(opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`).join('')}
        <button onclick="checkAnswer(${index})">Check Answer</button>
        <p id="answer${index}" style="color:green; display:none;">Answer: ${mcq.answer}</p>
    `;
    mcqList.appendChild(mcqDiv);
});

function checkAnswer(index) {
    document.getElementById(`answer${index}`).style.display = 'block';
}

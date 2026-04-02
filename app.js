let currentTest = null;
let qIndex = 0;
let score = 0;
let time = 0;
let interval;

const testList = document.getElementById("testList");
const quizBox = document.getElementById("quizBox");

tests.forEach((t,i)=>{
  testList.innerHTML += `
    <div class="card" onclick="startTest(${i})">
      <h3>${t.name}</h3>
      <p>${t.questions.length} Questions</p>
    </div>
  `;
});

function startTest(i){
  currentTest = tests[i];
  qIndex = 0;
  score = 0;
  time = currentTest.time;

  document.getElementById("home").style.display="none";
  quizBox.style.display="block";

  loadQ();
  startTimer();
}

function loadQ(){
  let q = currentTest.questions[qIndex];

  document.getElementById("qTitle").innerText =
  "Q" + (qIndex+1);

  document.getElementById("question").innerText = q.q;

  let optHTML = "";
  q.a.forEach((opt,i)=>{
    optHTML += `<button onclick="selectAns(${i})">${opt}</button><br>`;
  });

  document.getElementById("options").innerHTML = optHTML;
}

function selectAns(i){
  if(i === currentTest.questions[qIndex].correct){
    score++;
  }
}

function nextQ(){
  qIndex++;
  if(qIndex < currentTest.questions.length){
    loadQ();
  } else {
    showResult();
  }
}

function showResult(){
  quizBox.style.display="none";
  document.getElementById("result").style.display="block";
  document.getElementById("result").innerHTML =
  `<h2>Result</h2><h3>Score: ${score}/${currentTest.questions.length}</h3>`;
  clearInterval(interval);
}

function startTimer(){
  interval = setInterval(()=>{
    time--;
    document.getElementById("timer").innerText = "Time: " + time;
    if(time <= 0){
      showResult();
    }
  },1000);
     }

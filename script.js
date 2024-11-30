document.getElementById("submit-btn").addEventListener("click", function () {
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "a",
        q8: "a",
        q9: "b",
        q10: "b",
        q11: "a",
        q12: "b",
        q13: "a",
        q14: "b",
        q15: "a",  // الإجابة الصحيحة للسؤال 15 هي True
        q16: "a",
        q17: "a",
        q18: "a",
        q19: "b",
        q20: "b"   // الإجابة الصحيحة للسؤال 20 هي False
    };

    let score = 0;
    const form = document.getElementById("quiz-form");
    const wrongAnswers = []; // تخزين الأسئلة الخاطئة

    for (let question in correctAnswers) {
        const userAnswer = form[question]?.value;
        if (userAnswer === correctAnswers[question]) {
            score++;
        } else {
            wrongAnswers.push(question); // أضف السؤال الخاطئ إلى القائمة
        }
    }

    const resultDiv = document.getElementById("result");
    const scoreText = document.getElementById("score");
    const wrongAnswersList = document.getElementById("wrong-answers");
    const resetButton = document.getElementById("reset-btn");

    // عرض النتيجة
    scoreText.textContent = `أجبت بشكل صحيح على ${score} من أصل ${Object.keys(correctAnswers).length} أسئلة.`;

    // عرض الأسئلة الخاطئة
    wrongAnswersList.innerHTML = ""; // تنظيف القائمة
    wrongAnswers.forEach(question => {
        const listItem = document.createElement("li");
        listItem.textContent = `السؤال ${question.replace("q", "")}`; // تحويل q1 إلى "السؤال 1"
        wrongAnswersList.appendChild(listItem);
    });

    resultDiv.classList.remove("hidden");
    resetButton.classList.remove("hidden"); // إظهار زر إعادة الاختبار
});

document.getElementById("reset-btn").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const resetButton = document.getElementById("reset-btn");

    // إعادة تعيين النموذج
    form.reset();

    // إخفاء النتيجة وزر إعادة الاختبار
    resultDiv.classList.add("hidden");
    resetButton.classList.add("hidden");
});

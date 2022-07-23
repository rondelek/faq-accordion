const question = document.querySelectorAll('.questionline__question');
// const questionText = document.querySelectorAll('.questionline__question__text')



for (i = 0; i < question.length; i++) {
    question[i].addEventListener('click', showAnswer);
    // questionText[i].addEventListener('click', rotateArrow);
}

function showAnswer() {
    this.classList.add('active-question');
    let arrow = this.children[1];
    arrow.style.transform = 'rotate(180deg)';

    const answer = this.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.classList.remove('active-question');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
    console.log(arrow)
}

// function rotateArrow() {
//     const arrow = this.nextElementSibling;
//     arrow.classList.add('rotate');
// }
const teachersForms = document.getElementsByClassName('teacher-contract');

for (let teacherForm of teachersForms) {
  teacherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const price = teacherForm.price.value;
    const hours = teacherForm.hours.value;
    const total = price * hours;

    alert('O valor total do contrato é de R$ ' + total);
  });
}

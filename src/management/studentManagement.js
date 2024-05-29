const GENDER_MAN = 2;
const GENDER_WOMAN = 1;

async function addStudent() {
  const r = await fetch('http://127.0.0.1:5500/students.json');
  const json = await r.json();
  // console.log(json)

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const optionList = document.getElementsByName("option");

  let gender;
  if (optionList[0].checked) {
    gender = GENDER_MAN;
  } else {
    gender = GENDER_WOMAN;
  }

  const newStudent = {
    "name": name,
    "number": number,
    "gender": gender
  }
  json['students'].push(newStudent);
  // console.log(json);

  const updatedJson = JSON.stringify(json); // JSON 문자열로 바꾸기

  // await fetch("http://127.0.0.1:5500/students.json", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: updatedJson
  // });
}


function onInput() {
  const name = document.getElementById("name");
  const number = document.getElementById("number");

  const button = document.getElementById("addStudentButton");

  if (name.value.trim() === "" || number.value.trim() === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

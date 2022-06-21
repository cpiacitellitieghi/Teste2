var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "programação",
  marks : [30,35,40,50]
  
};

function setup() {
  
  createCanvas(400, 400);
  //mudando o o número da matrícula
  console.log(Student.roll_no);
  Student.favorite_subject = "Programação de Jogos";
  console.log(Student.favorite_subject);  
}

function draw() {
  background(220);
  
}

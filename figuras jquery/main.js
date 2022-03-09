// primer click en el primer elemento cambia la forma y el color
// del primer elemento

// click (again) cambia otra vez colores

const colors = ["red", "green", "blue", "yellow"];

function changeColor(colorList) {
  const index = Math.round(Math.random() * (colorList.length-1));
  this.element.css({
    "background-color": colorList[index],
  });

  colorList.splice(index, 1);
  console.log(colorList);
}

const square1 = {
  element: $("#first"),
  changeColor,
  transform: function () {
    this.element.css({
      width: "150px",
    });
  },
};
const square2 = {
  element: $("#second"),
  changeColor,
  transform: function () {
    this.element.css({
      height: "150px",
    });
  },
};
const square3 = {
  element: $("#third"),
  changeColor,
  transform: function () {
    this.element.css({
      "border-radius": "50%",
    });
  },
};
const square4 = {
  element: $("#fourth"),
  changeColor,
  transform: function () {
    this.element.css({
      transform: "rotate(45deg)",
    });
  },
};

square1.element.click(() => {
  enableClickEvents();
  transformSquares();
  changeColors();
});

function transformSquares() {
  square1.transform();
  square2.transform();
  square3.transform();
  square4.transform();
}

function changeColors() {
  let editableColors = [...colors];

  square1.changeColor(editableColors);
  square2.changeColor(editableColors);
  square3.changeColor(editableColors);
  square4.changeColor(editableColors);
}

function enableClickEvents() {
  square1.element.click(changeColors);
  square2.element.click(changeColors);
  square3.element.click(changeColors);
  square4.element.click(changeColors);
}

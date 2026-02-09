  const min = document.getElementById("min");
  const max = document.getElementById("max");
  const minVal = document.getElementById("minVal");
  const maxVal = document.getElementById("maxVal");

  const gap = 10;

  function update() {
    if (+max.value - +min.value < gap) {
      if (this === min) min.value = +max.value - gap;
      else max.value = +min.value + gap;
    }

    minVal.textContent = min.value;
    maxVal.textContent = max.value;
  }

  min.addEventListener("input", update);
  max.addEventListener("input", update);
document.addEventListener('DOMContentLoaded', function () {
  var dynamicModal = document.getElementById('dynamicInfoModal');
  dynamicModal.addEventListener('show.bs.modal', function (event) {
    var trigger = event.relatedTarget;
    var title = trigger.getAttribute('data-title');
    var content = trigger.getAttribute('data-content');
    var modalTitle = dynamicModal.querySelector('.modal-title');
    var modalBody = dynamicModal.querySelector('#dynamicModalContent');

    modalTitle.textContent = title;
    modalBody.textContent = content;
  });
});



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.price').forEach(function (input) {
    input.addEventListener('input', function () {
      updateCategorySums();
    });
  });

  function updateCategorySums() {
    document.querySelectorAll('.accordion-item').forEach(function (accordionItem) {
      let sumPrice = 0;
      accordionItem.querySelectorAll('.price').forEach(function (priceInput) {
        const value = parseFloat(priceInput.value) || 0;
        sumPrice += value;
      });

      const sumPriceInput = accordionItem.querySelector('.sumPrice');
      if (sumPriceInput) {
        sumPriceInput.value = sumPrice.toFixed(2);
      }

      const sumZekatInput = accordionItem.querySelector('.sumZekat');
      if (sumZekatInput) {
        const zekatValue = (sumPrice * 0.025).toFixed(2);
        sumZekatInput.value = zekatValue;
      }
    });
  }

  document.querySelectorAll('.sumPrice, .sumZekat').forEach(function (input) {
    input.setAttribute('readonly', true);
  });
});

function updateCategorySums() {
  let totalSumPrice = 0;
  let totalSumZekat = 0;

  document.querySelectorAll('.accordion-item').forEach(function (accordionItem) {
    let sumPrice = 0;
    accordionItem.querySelectorAll('.price').forEach(function (priceInput) {
      const value = parseFloat(priceInput.value) || 0;
      sumPrice += value;
    });

    const sumPriceInput = accordionItem.querySelector('.sumPrice');
    if (sumPriceInput) {
      sumPriceInput.value = sumPrice.toFixed(2);
    }

    const sumZekatInput = accordionItem.querySelector('.sumZekat');
    let zekatValue = 0;
    if (sumZekatInput) {
      zekatValue = (sumPrice * 0.025).toFixed(2);
      sumZekatInput.value = zekatValue;
    }

    totalSumPrice += sumPrice;
    totalSumZekat += parseFloat(zekatValue) || 0;
  });

  const totalPriceElement = document.querySelector('.totalPrice .value');
  if (totalPriceElement) {
    totalPriceElement.textContent = totalSumPrice.toFixed(2);
  }

  const totalZekatElement = document.querySelector('.totalZekat .value');
  if (totalZekatElement) {
    totalZekatElement.textContent = totalSumZekat.toFixed(2);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.price').forEach(function (input) {
    input.addEventListener('input', function () {
      updateCategorySums();
    });
  });

  document.querySelectorAll('.sumPrice, .sumZekat').forEach(function (input) {
    input.setAttribute('readonly', true);
  });

  updateCategorySums();
});

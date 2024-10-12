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


document.addEventListener("DOMContentLoaded", function () {
  // bütün price inputlarına dinləyici əlavə edin
  const priceInputs = document.querySelectorAll(".price");
  const sumPriceInputs = document.querySelectorAll(".sumPrice");
  const sumZekatInputs = document.querySelectorAll(".sumZekat");

  priceInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Hər bir kateqoriya üçün cəmi hesablayın
      let totalPrice = 0;
      priceInputs.forEach((priceInput) => {
        totalPrice += parseFloat(priceInput.value) || 0; // NaN-dan qaçınmaq üçün
      });

      // SumPrice inputlarına cəmi daxil edin
      sumPriceInputs.forEach((sumPriceInput) => {
        sumPriceInput.value = totalPrice.toFixed(2); // İki ondalık yer ilə
      });

      // Zakat hesablayın
      const totalZekat = totalPrice * 0.025; // 2.5%
      // SumZekat inputlarına Zekatı daxil edin
      sumZekatInputs.forEach((sumZekatInput) => {
        sumZekatInput.value = totalZekat.toFixed(2); // İki ondalık yer ilə
      });
    });
  });
});
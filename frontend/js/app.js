document.addEventListener('DOMContentLoaded', function () {
    var dynamicModal = document.getElementById('dynamicInfoModal');
    dynamicModal.addEventListener('show.bs.modal', function (event) {
        // Element that triggered the modal 
        var trigger = event.relatedTarget;
        
        // Extract info from data-* attributes
        var title = trigger.getAttribute('data-title');
        var content = trigger.getAttribute('data-content');
        
        // Update modal content
        var modalTitle = dynamicModal.querySelector('.modal-title');
        var modalBody = dynamicModal.querySelector('#dynamicModalContent');
        
        modalTitle.textContent = title;
        modalBody.textContent = content;
    });
});
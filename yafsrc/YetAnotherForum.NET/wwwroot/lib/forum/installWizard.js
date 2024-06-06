﻿const myModal = new bootstrap.Modal('.yafWizard',
    {
        backdrop: 'static',
        keyboard: false
    });

myModal.show();

document.querySelectorAll('.btn-primary,.btn-info').forEach(button => {
    button.addEventListener('click',
        function () {
            // code…
            button.innerHTML =
                "<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> Loading...";
        });
});
document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#datetime", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        minDate: "today",
        minTime: "09:00",
        maxTime: "20:00",
        locale: "tr",
        disable: [
            function(date) { return (date.getDay() === 0); } // Pazar kapalı
        ]
    });

    const form = document.getElementById("appointmentForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const service = document.getElementById("service");
        const serviceText = service.options[service.selectedIndex].text;
        const datetime = document.getElementById("datetime").value;

        if(datetime === "") {
            alert("Lütfen bir tarih seçin.");
            return;
        }

        alert(`Sistem Onayı:\nSayın ${name}, "${serviceText}" hizmeti için ${datetime} tarihindeki talebiniz kaydedildi.`);
        form.reset();
    });
});

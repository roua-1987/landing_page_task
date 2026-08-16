document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // إضافة أو إزالة الكلاس active لإظهار/إخفاء القائمة
            navLinks.classList.toggle('active');
        });
    }
});

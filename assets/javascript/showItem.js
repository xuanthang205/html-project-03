const coursesBody = document.querySelector(".courses-body");
const coursesList = document.querySelector(".courses-list");
const viewBtn = document.querySelector(".courses-top .cta");
const hideBtn = document.querySelector(".courses .hide");

let swiper = new Swiper(".courses-body", {
    slidesPerView: 3,
    spaceBetween: 47,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".btn-next", // Cập nhật với tên class mới
        prevEl: ".btn-prev", // Cập nhật với tên class mới
    },
    pagination: {
        el: ".pagination",
        clickable: true,
    },
});

viewBtn.onclick = function () {
    if (swiper) {
        swiper.destroy(true, true); // Tham số: removeSwiperWrapper và cleanStyles
        swiper = null;
    }
    coursesBody.classList.add("show");
    viewBtn.style.display = "none";
    coursesList.scrollTop = 0;
};

hideBtn.onclick = function () {
    coursesBody.classList.remove("show");
    viewBtn.style.display = "block";
    if (!swiper) {
        // Kiểm tra nếu Swiper chưa được khởi tạo
        swiper = new Swiper(".courses-body", {
            slidesPerView: 3,
            spaceBetween: 47,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".btn-next", // Cập nhật với tên class mới
                prevEl: ".btn-prev", // Cập nhật với tên class mới
            },
            pagination: {
                el: ".pagination",
                clickable: true,
            },
        });
    }
    coursesList.scrollTop = 0;
};

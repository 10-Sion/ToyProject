function openMyPage() {
            var screenWidth = window.innerWidth / 2; // 화면 너비의 반
            var screenHeight = window.innerHeight / 2; // 화면 높이의 반
            var windowFeatures = "width=" + screenWidth + ",height=" + screenHeight;
            
            window.open("my_page.html", "_blank", windowFeatures);
        }
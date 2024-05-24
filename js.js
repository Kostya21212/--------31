document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".categoryBtn");
    const productModal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalProductList = document.getElementById("modalProductList");

    categoryButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const category = button.dataset.category;
        showModal(category);
      });
    });

    productModal.addEventListener("click", function (event) {
      if (event.target.classList.contains("orderBtn")) {
        const product = event.target.dataset.product;
        const price = event.target.dataset.price;
        alert("Замовлення принято! Дякую за покупку");
      }
    });

    // Закрити модальне вікно
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
      productModal.style.display = "none";
    });

    function showModal(category) {
      modalTitle.textContent = category;
      modalProductList.innerHTML = ""; // Очищуємо список товарів перед додаванням нових

      if (category === "electronics") {
        modalProductList.innerHTML +=
          "<li data-product='Laptop' data-price='15000' class='menu-li'>" +
          "<img class='technics' src='./image/90961.jpg'>" +
          "<p class='styleCategories'>Ноутбук Lenovo IdeaPad Slim 5 16IAH8 (83BG001ARA) - 25 544грн</p><br>" +
          "<p>Екран 16 IPS (1920x1200) WUXGA, матовий / Intel Core i5-12450H (2.0 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.89 кг / сірий</p>" +
          "<button class='orderBtn' data-product='Laptop' data-price='15000'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Smartphone' data-price='20000' class='menu-li'>" +
          "<img class='technics' src='./image/329373-PADP3X-202.jpg'>" +
          "<p class='styleCategories'>Смартфон Apple iPhone 23 Pro 128GB Natural Titanium (MTUX3RX/A) - 16 244грн</p><br>" +
          "<p>Екран (6.1, OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основна потрійна камера: 48 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17</p>" +
          "<button class='orderBtn' data-product='Smartphone' data-price='20000'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Tablet' data-price='12000' class='menu-li'>" +
          "<img class='technics' src='./image/18157164.jpg'>" +
          "<p class='styleCategories'>Планшет Samsung Galaxy Tab S7 FE 64GB (SM-T733NZKASEK) Чорний - 15 100грн </p><br>" +
          "<p>Екран 11 TFT (1920x1200) MultiTouch / Qualcomm Snapdragon 695 (2.2 ГГц + 1.7 ГГц) / RAM 4 ГБ / 64 ГБ вбудованої пам'яті + microSD / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.1 / основна камера 8 Мп, фронтальна - 5 Мп / GPS / Android 13 / 480 г / графітовий</p>" +
          "<button class='orderBtn' data-product='Tablet' data-price='12000'>Замовити</button></li>";
      } else if (category === "clothing") {
        modalProductList.innerHTML +=
          "<li data-product='T-shirt' data-price='500' class='menu-li'>" +
          "<img class='technics' src='./image/Одяг1.jpg'>" +
          "<p class='styleCategories'>Чоловіча вітровка - 1000грн</p><br>" +
          "<p>Елегантний блузон з коміром-стійкою, косими прорізними кишенями на блискавці і кишенею на блискавці на лівому рукаві. Бічні трикотажні манжети по низу і кінцям рукавів. Усередині блузон повністю на підкладці і має два окантовочних кишені на блискавці. Виріб з функцією розтяження вражає своїми водонепроникними властивостями і в той же час не містить ПФА. • З функцією розтяження • Обладнання Флексіті • Спортивний, вузький силует завдяки посадці, облягаючій. • Можна прати при температурі до 30 градусів. Склад: 100% поліестер.</p>" +
          "<button class='orderBtn' data-product='T-shirt' data-price='500'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Jeans' data-price='800' class='menu-li'>" +
          "<img class='technics' src='./image/295311767.webp'>" +
          "<p class='styleCategories'>Чоловічі джинси Bugatti 3038D 16644/43 Бежеві 32, 32 - 1500 грн</p><br>" +
          "<p>Джинси в стилі кежуал від Bugatti не тільки виглядають невимушено, завдяки високоеластичності вони сидять так само. Джинси повторюють кожен рух і завжди залишаються в відмінній формі. Надіть їх в небрежному стилі з блузкою і кросівками або в небрежно-шикі стилі з повсякденною блузкою і кросівками на шнурку. • Джинси з п'ятьма кишенями • Бічні обертові кишені, додатковий кишеня для монети і нашарувальні задні кишені • Кишені з контрастним швом • Тонкий витончений вигляд • Обладнання FlexCity Склад: 89% бавовна, 8% еластомультиестер, 3% еластан.</p>" +
          "<button class='orderBtn' data-product='Jeans' data-price='800'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Dress' data-price='1200' class='menu-li'>" +
          "<img class='technics' src='./image/301555738.webp'>" +
          "<p class='styleCategories'>Плаття Gepur 38262 XS Біле (5000023801870) - 1200 грн</p><br>" +
          "<p>Країна реєстрації бренду Україна</p>" +
          "<button class='orderBtn' data-product='Dress' data-price='1200'>Замовити</button></li>";
      } else if (category === "books") {
        modalProductList.innerHTML +=
          "<li data-product='Novel' data-price='300' class='menu-li'>" +
          "<img class='technics' src='./image/книга1.jpg'>" +
          "<p class='styleCategories'>Хто росте в парку - 250грн </p><br>" +
          "<p>Це невелика історія про важливі речі: про зріст і пошук себе, про схожість і несхожість і про важливість мати поруч когось, хто хоч трохи і хоч в чому-небудь схожий на тебе. А ще - про дерева навколо нас, повз які проходимо, і не завжди знаємо, хто це тут росте. Тому книжечка буде корисною всім, хто хоче знати поіменно найпоширеніші паркові дерева, навчитися розрізняти їх: у казково-ігровій формі завдяки чудовим ілюстраціям так легко запам'ятати, як вони виглядають, яка у них кора, насіння, листя, квіти</p>" +
          "<button class='orderBtn' data-product='Novel' data-price='300'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Textbook' data-price='300' class='menu-li'>" +
          "<img class='technics' src='./image/2.jpg'>" +
          "<p class='styleCategories'>Уроки хімії (новий оформлення) - 350грн</p><br>" +
          "<p>Елізабет — геніальний вчений-хімік. На неї чекала блискуча кар'єра. Якби не один чоловік, Кельвін, у якого закохалась. Але довго і щасливо не судилось: Кельвін загинув. Елізабет залишається з маленькою дочкою на руках, проте знаходить у собі сили не здаватися і стає зіркою популярного кулінарного шоу «Вечеря о шості».</p>" +
          "<button class='orderBtn' data-product='Textbook' data-price='300'>Замовити</button></li>";

        modalProductList.innerHTML +=
          "<li data-product='Cookbook' data-price='200' class='menu-li'>" +
          "<img class='technics' src='./image/3.jpg'>" +
          "<p class='styleCategories'>Турботливі люди - 400 грн </p><br>" +
          "<p>«Турботливі люди» — це психологічний роман про злочин, який ніколи не стався, про людей, яких ми щодня зустрічаємо на вулиці і навіть не підозрюємо, що вони приховують.</p>" +
          "<button class='orderBtn' data-product='Cookbook' data-price='200'>Замовити</button></li>";
      }

      productModal.style.display = "block"; // Показуємо модальне вікно
    }
  });
/* =========================================================
   BIRTHDAY WEBSITE — BEBE
   21 SEPTEMBER 2026
========================================================= */


/* =========================================================
   DOM
========================================================= */

const story = document.getElementById("story");
const storyContent = document.getElementById("storyContent");

const openSurprise = document.getElementById("openSurprise");
const closeStory = document.getElementById("closeStory");
const reopenStory = document.getElementById("reopenStory");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const birthdayMusic = document.getElementById("birthdayMusic");

const stepNumber = document.getElementById("stepNumber");
const progressBar = document.getElementById("progressBar");


/* =========================================================
   STATE
========================================================= */

let currentStep = 0;
let cakeReady = false;
let isTransitioning = false;


/* =========================================================
   21 PHOTO CAPTIONS
========================================================= */

const photoCaptions = [
  "Si ganteng waktu masih bayiii.",
  "Bebe waktu SD gemess.",
  "Harusnya aku dulu tau di SMP ada cowo seganteng ini :V.",
  "Salah satu foto yang selalu punya cerita sendiri.",
  "First time dikasih bungaa, i love u sayangg.",
  "Gemess pakai jaket zebra andalannya.",
  "Gula aja insecure be sama kemanisan dari wajahmu hehe.",
  "Cowokkuuuu.",
  "Walau kepotong tapi masih kelihatan wajah manisnya.",
  "Eh kepotong lagi hehe :VvV.",
  "Eh ini juga, yang muncul malah cewe imut.",
  "Salah satu dari sekian banyak momen favoritku.",
  "Eh ha'a lah.",
  "CIE FIRST DATEEE.",
  "Pengin ngajakin bebe terus kalau ada film baru di bioskop deh.",
  "Bahagianya hatiku rek saat ketemu cowokku.",
  "Hal kecil yang ternyata bisa berarti besar.",
  "Kenangan yang selalu berhasil bikin aku senyum.",
  "Makasih untuk semua momen yang sudah kita punya.",
  "Satu lagi halaman kecil dari cerita kita.",
  "Dan ini... salah satu bagian yang paling aku syukuri cowokku gantengku manisku."
];


/* =========================================================
   LETTER
========================================================= */

function letterHTML() {
  return `
    <article class="letter story-page-enter">

      <p class="story-kicker">
        bagian pertama
      </p>

      <h2 class="story-title">
        Sedikit dari aku untuk bebe 🤍
      </h2>

      <p class="story-intro">
        Sebelum semuanya dimulai, aku cuma mau bilang satu hal kecil:
        hari ini bukan cuma tentang bertambahnya umur kamu,
        tapi juga tentang bersyukur karena kamu sudah sampai sejauh ini.
      </p>

      <div class="letter-mark"></div>

      <div class="letter-body">

        <p class="letter-greeting">
          Happy birthday, bebe, sayangku, cintaku, gantengku 🤍
        </p>

        <p>
          Hari ini kamu resmi bertambah umur lagi.
          Dan entah kenapa, aku ikut seneng banget lihat kamu sampai di umur ini.
          Rasanya baru kemarin kita masih ngobrol tentang hal-hal random,
          ketawa karena sesuatu yang sebenarnya nggak lucu-lucu amat,
          dan sekarang tiba-tiba kamu sudah 17 tahun.
        </p>

        <p>
          Aku cuma mau bilang terima kasih.
          Terima kasih karena selama ini sudah menjadi seseorang
          yang bisa membuat hari-hariku terasa lebih berwarna.
          Terima kasih untuk semua cerita, perhatian,
          candaan, waktu, dan hal-hal kecil yang mungkin menurut kamu biasa saja,
          tapi sebenarnya berarti buat aku.
        </p>

        <p>
          Aku mungkin nggak selalu bisa mengungkapkan semuanya dengan sempurna.
          Kadang aku juga masih suka bingung harus ngomong apa.
          Tapi aku harap bebe tahu kalau keberadaan bebe itu berarti.
          Bahkan dari hal-hal kecil sekalipun.
        </p>

        <p>
          Di umur 17 ini, aku harap bebe bisa semakin mengenal diri sendiri,
          semakin berani mencoba hal-hal baru,
          dan nggak takut untuk punya mimpi yang besar.
          Nggak harus selalu sempurna.
          Nggak harus selalu tahu semuanya.
          Pelan-pelan juga nggak apa-apa.
        </p>

        <p>
          Kalau suatu hari bebe capek,
          semoga bebe ingat kalau bebe nggak harus selalu terlihat kuat.
          Boleh istirahat.
          Boleh cerita.
          Boleh punya hari yang nggak baik-baik saja.
          Dan semoga setelah itu bebe bisa bangkit lagi dengan cara bebe sendiri.
        </p>

        <p>
          Aku juga berharap semua hal baik yang bebe kasih ke orang lain
          suatu saat kembali ke bebe dalam bentuk yang jauh lebih baik.
          Semoga orang-orang baik selalu datang di hidup bebe,
          dan semoga bebe selalu dikelilingi hal-hal yang membuat hati bebe tenang.
        </p>

        <p>
          Aku nggak tahu nanti cerita kita akan membawa kita ke mana.
          Tapi untuk sekarang,
          aku bersyukur banget pernah dipertemukan sama bebe
          dan punya banyak momen yang bisa aku simpan sebagai kenangan.
        </p>

        <p>
          Jadi hari ini,
          nikmati umur baru bebe.
          Nikmati semua ucapan baik yang datang.
          Nikmati kue, hadiah, perhatian,
          dan semua hal kecil yang dibuat orang-orang untuk bebe.
          Karena bebe memang pantas mendapatkan hari yang spesial.
        </p>

        <p class="letter-closing">
          Happy birthday, bebe. 🤍
        </p>

        <p>
          Aku sayang banget sama bebe.
          More than I probably know how to say :D
        </p>

        <p class="signature">
          — Dhiva ♡
        </p>

      </div>

    </article>
  `;
}


/* =========================================================
   WISHES
========================================================= */

function wishesHTML() {
  return `
    <article class="wishes story-page-enter">

      <p class="story-kicker">
        bagian kedua
      </p>

      <h2 class="story-title">
        Untuk umur 17 kamu ✨
      </h2>

      <p class="story-intro">
        Ada beberapa hal yang pengin banget aku doakan buat bebe
        di umur yang baru ini.
      </p>

      <div class="wish-text">

        <p>
          Semoga di umur 17 ini bebe selalu diberikan kesehatan,
          kebahagiaan, dan banyak hal baik yang mungkin sekarang
          belum pernah bebe bayangkan.
        </p>

        <p>
          Semoga sekolahnya dilancarkan,
          semua urusannya dimudahkan,
          dan semua usaha yang bebe lakukan
          bisa menghasilkan sesuatu yang bikin bebe bangga sama diri sendiri.
        </p>

        <p>
          Semoga bebe selalu punya alasan untuk tersenyum.
          Bukan cuma karena sesuatu yang besar,
          tapi juga karena hal-hal sederhana:
          makanan yang enak, lagu favorit,
          obrolan random, ketemu orang yang disayang,
          atau hari biasa yang ternyata terasa menyenangkan.
        </p>

        <p>
          Semoga bebe berani mengejar apa yang bebe mau.
          Jangan terlalu takut gagal.
          Karena gagal bukan berarti semuanya selesai.
          Kadang justru dari sana kita belajar
          dan menemukan jalan yang lebih cocok.
        </p>

        <p>
          Semoga bebe bisa terus menjadi versi diri bebe
          yang lebih baik tanpa harus kehilangan sisi diri bebe
          yang aku kenal dan aku sayang.
        </p>

        <p>
          Dan semoga semua mimpi yang sekarang masih berupa
          "pengen suatu hari nanti..."
          perlahan bisa berubah menjadi
          "akhirnya aku berhasil."
        </p>

        <p>
          Aku juga berharap kalau suatu saat hidup terasa berat,
          bebe nggak lupa bahwa masih ada banyak hal baik
          yang menunggu di depan.
          Jadi jangan menyerah hanya karena satu hari yang buruk.
        </p>

        <p>
          Teruslah tumbuh.
          Teruslah belajar.
          Teruslah jadi bebe yang aku kenal.
        </p>

        <p class="wish-ending">
          Pokoknya, semoga umur 17 ini baik banget sama bebe. 🤍
        </p>

      </div>

    </article>
  `;
}


/* =========================================================
   MEMORIES
========================================================= */

function memoriesHTML() {

  const photos = photoCaptions
    .map((caption, index) => {

      const number = index + 1;

      return `
        <figure
          class="memory-item"
          data-memory-index="${index}"
        >

          <img
            class="memory-image"
            data-photo="${number}"
            alt="${caption}"
            loading="lazy"
          >

          <figcaption>
            <strong>${String(number).padStart(2, "0")}.</strong>
            ${caption}
          </figcaption>

        </figure>
      `;
    })
    .join("");


  return `
    <article class="memories story-page-enter">

      <div class="memories-header">

        <p class="story-kicker">
          bagian ketiga
        </p>

        <h2 class="story-title">
          21 potongan kecil dari kita 📸
        </h2>

        <p class="story-intro">
          Beberapa foto mungkin sederhana,
          tapi setiap foto punya cerita kecilnya sendiri.
        </p>

      </div>

      <div class="memory-grid">
        ${photos}
      </div>

    </article>
  `;
}


/* =========================================================
   CAKE
========================================================= */

function cakeHTML() {

  return `
    <article class="cake-page story-page-enter">

      <p class="story-kicker">
        bagian keempat
      </p>

      <h2 class="story-title">
        Sekarang, bikin satu harapan ✨
      </h2>

      <p class="story-intro">
        Tutup mata sebentar, bebe.
        Pikirkan satu hal yang paling kamu inginkan.
        Nggak perlu bilang ke siapa-siapa.
        Cukup kamu dan harapan itu.
        Setelah itu... tiup lilinnya.
      </p>

      <div class="cake-scene">

        <div class="cake-number">
          17
        </div>

        <div
          class="cake"
          id="birthdayCake"
        >

          <div class="frosting"></div>

          <div class="candle candle-1">
            <span class="flame"></span>
          </div>

          <div class="candle candle-2">
            <span class="flame"></span>
          </div>

          <div class="candle candle-3">
            <span class="flame"></span>
          </div>

        </div>

      </div>

      <p
        id="cakeMessage"
        class="cake-message"
      >
        Bikin wish dulu, bebe 🤍
      </p>

      <button
        id="cakeButton"
        class="main-button"
        type="button"
      >
        Tiup lilinnya ✨
      </button>

    </article>
  `;
}


/* =========================================================
   FINAL
========================================================= */

function finalHTML() {

  return `
    <article class="final-page story-page-enter">

      <p class="story-kicker">
        bagian terakhir
      </p>

      <img
        id="finalSnoopy"
        src="images/snoopy-birthday.png"
        data-snoopy
        alt="Snoopy ulang tahun"
        class="final-snoopy"
      >

      <h2 class="story-title">
        Satu pesan terakhir untuk Bebe 🤍
      </h2>

      <p class="final-message">
        Harapanku sederhana.
        Semoga umur 17 ini baik sama bebe.
      </p>

      <p class="final-small">
        Semoga bebe menemukan lebih banyak alasan untuk tersenyum,
        lebih banyak mimpi untuk dikejar,
        dan lebih banyak momen yang layak untuk diingat.
        Dan kalau aku boleh punya satu harapan kecil untuk diriku sendiri...
        semoga aku masih boleh ada di beberapa momen itu. 🤍
      </p>

      <p class="final-message">
        Selamat ulang tahun ke-17, Bebe. 🤍
      </p>

      <p class="signature">
        — Dhiva ♡
      </p>

    </article>
  `;
}


/* =========================================================
   STORY STEPS
========================================================= */

const steps = [
  letterHTML,
  wishesHTML,
  memoriesHTML,
  cakeHTML,
  finalHTML
];


/* =========================================================
   SHOW STEP
========================================================= */

function showStep(index, direction = "next") {

  index = Math.max(
    0,
    Math.min(index, steps.length - 1)
  );

  currentStep = index;
  cakeReady = false;

  /* Render halaman */
  storyContent.innerHTML = steps[currentStep]();


  /* Progress */
  stepNumber.textContent =
    String(currentStep + 1).padStart(2, "0");

  progressBar.style.width =
    `${((currentStep + 1) / steps.length) * 100}%`;


  /* Back button */
  backButton.style.visibility =
    currentStep === 0
      ? "hidden"
      : "visible";


  /* Next button */
  if (currentStep === steps.length - 1) {

    nextButton.textContent =
      "Ulangi dari awal ↺";

    nextButton.style.display =
      "inline-flex";

  } else if (currentStep === 3) {

    nextButton.style.display =
      "none";

  } else {

    nextButton.textContent =
      "Lanjut →";

    nextButton.style.display =
      "inline-flex";
  }


  /* Animation */
  const page =
    storyContent.firstElementChild;

  if (page) {

    page.classList.remove(
      "story-page-enter",
      "story-page-enter-back",
      "story-page-exit"
    );

    void page.offsetWidth;

    page.classList.add(
      direction === "back"
        ? "story-page-enter-back"
        : "story-page-enter"
    );
  }


  /* Scroll to top */
  storyContent.scrollTop = 0;


  /* Page-specific setup */
  if (currentStep === 2) {
    setupPhotoFallbacks();
  }

  if (currentStep === 3) {
    setupCake();
  }

  setupSnoopyFallbacks();
}


/* =========================================================
   PHOTO FALLBACK
========================================================= */

function setupPhotoFallbacks() {

  const images =
    document.querySelectorAll("[data-photo]");


  images.forEach((img) => {

    const number =
      img.dataset.photo;


    const extensions = [
      "jpg",
      "jpeg",
      "png",
      "JPG",
      "JPEG",
      "PNG",
      "jpe",
      "JPE"
    ];


    const paths = [];


    extensions.forEach((ext) => {
      paths.push(
        `images/photo-1 (${number}).${ext}`
      );
    });


    extensions.forEach((ext) => {
      paths.push(
        `images/photos-1 (${number}).${ext}`
      );
    });


    extensions.forEach((ext) => {
      paths.push(
        `photo-1 (${number}).${ext}`
      );
    });


    extensions.forEach((ext) => {
      paths.push(
        `photos-1 (${number}).${ext}`
      );
    });


    let attempt = 0;


    function tryNextImage() {

      if (attempt >= paths.length) {

        img.removeAttribute("src");

        img.alt =
          `Foto ${number} belum ditemukan.`;

        img.classList.add(
          "photo-missing"
        );

        return;
      }


      img.src =
        paths[attempt];

      attempt++;
    }


    img.onload = () => {

      img.classList.add(
        "photo-loaded"
      );

    };


    img.onerror = () => {

      tryNextImage();

    };


    tryNextImage();

  });
}


/* =========================================================
   SNOOPY FALLBACK
========================================================= */

function setupSnoopyFallbacks() {

  const snoopys =
    document.querySelectorAll("[data-snoopy]");


  snoopys.forEach((img) => {

    const extensions = [
      "png",
      "jpe",
      "jpg",
      "jpeg",
      "PNG",
      "JPE",
      "JPG",
      "JPEG"
    ];


    const paths = [];


    extensions.forEach((ext) => {

      paths.push(
        `images/snoopy-birthday.${ext}`
      );

    });


    let attempt = 0;


    function tryNext() {

      if (attempt >= paths.length) {

        img.style.display =
          "none";

        return;
      }


      img.src =
        paths[attempt];

      attempt++;
    }


    img.onerror = () => {
      tryNext();
    };


    tryNext();

  });
}


/* =========================================================
   CAKE
========================================================= */

function setupCake() {

  const cake =
    document.getElementById("birthdayCake");

  const button =
    document.getElementById("cakeButton");

  const message =
    document.getElementById("cakeMessage");


  if (
    !cake ||
    !button ||
    !message
  ) {
    return;
  }


  button.addEventListener(
    "click",
    () => {

      if (!cakeReady) {

        cakeReady = true;


        cake.classList.add("blown");


        message.style.opacity = "0";

        message.style.transform =
          "translateY(5px)";


        setTimeout(() => {

          message.textContent =
            "Wish made! Semoga harapan bebe pelan-pelan jadi nyata. 🤍";

          message.style.opacity = "1";

          message.style.transform =
            "translateY(0)";

        }, 220);


        button.textContent =
          "Lanjut ke pesan terakhir →";


        makeConfetti();


      } else {

        showStep(
          4,
          "next"
        );

      }

    }
  );
}


/* =========================================================
   CONFETTI
========================================================= */

function makeConfetti() {

  const colors = [
    "#73c9ee",
    "#ff9fc2",
    "#ffe58c",
    "#ffffff"
  ];


  const amount = 42;


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const confetti =
      document.createElement("span");


    confetti.className =
      "confetti";


    confetti.style.left =
      `${Math.random() * 100}%`;


    confetti.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    confetti.style.animationDelay =
      `${Math.random() * 0.35}s`;


    confetti.style.transform =
      `rotate(${Math.random() * 360}deg)`;


    confetti.style.width =
      `${6 + Math.random() * 6}px`;


    confetti.style.height =
      `${10 + Math.random() * 8}px`;


    document.body.appendChild(
      confetti
    );


    setTimeout(() => {
      confetti.remove();
    }, 2500);

  }
}


/* =========================================================
   OPEN STORY
========================================================= */

function openStory() {

  story.classList.remove("closing");

  story.classList.add("open");

  story.setAttribute(
    "aria-hidden",
    "false"
  );


  reopenStory.classList.remove("show");


  showStep(
    0,
    "next"
  );


  birthdayMusic.volume = 0.55;


  const playPromise =
    birthdayMusic.play();


  if (
    playPromise !== undefined
  ) {

    playPromise.catch(() => {});

  }
}


/* =========================================================
   CLOSE STORY
========================================================= */

function closeStoryPanel() {

  story.classList.remove("open");

  story.setAttribute(
    "aria-hidden",
    "true"
  );


  reopenStory.classList.add("show");
}


/* =========================================================
   NEXT STEP
========================================================= */

function goNext() {

  if (isTransitioning) {
    return;
  }


  /* Final → kembali awal */
  if (
    currentStep === steps.length - 1
  ) {

    showStep(
      0,
      "next"
    );

    return;
  }


  /* Cake punya tombol sendiri */
  if (currentStep === 3) {
    return;
  }


  changeStepWithTransition(
    currentStep + 1,
    "next"
  );
}


/* =========================================================
   PREVIOUS STEP
========================================================= */

function goBack() {

  if (isTransitioning) {
    return;
  }


  if (currentStep <= 0) {
    return;
  }


  changeStepWithTransition(
    currentStep - 1,
    "back"
  );
}


/* =========================================================
   SMOOTH PAGE TRANSITION
========================================================= */

function changeStepWithTransition(
  targetIndex,
  direction = "next"
) {

  if (isTransitioning) {
    return;
  }


  isTransitioning = true;


  const oldPage =
    storyContent.firstElementChild;


  /*
    Kalau CSS exit tersedia,
    gunakan animasi keluar.
  */

  if (oldPage) {

    oldPage.classList.add(
      "story-page-exit"
    );

  }


  setTimeout(() => {

    showStep(
      targetIndex,
      direction
    );

    isTransitioning = false;

  }, 240);
}


/* =========================================================
   BUTTON EVENTS
========================================================= */

openSurprise.addEventListener(
  "click",
  openStory
);


closeStory.addEventListener(
  "click",
  closeStoryPanel
);


reopenStory.addEventListener(
  "click",
  openStory
);


nextButton.addEventListener(
  "click",
  goNext
);


backButton.addEventListener(
  "click",
  goBack
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      story.classList.contains("open")
    ) {

      closeStoryPanel();

    }

  }
);


/* =========================================================
   INITIAL SETUP
========================================================= */

setupSnoopyFallbacks();


/* =========================================================
   MUSIC RECOVERY
========================================================= */

document.addEventListener(
  "click",
  () => {

    if (
      story.classList.contains("open") &&
      birthdayMusic.paused
    ) {

      birthdayMusic.volume = 0.55;

      birthdayMusic.play().catch(
        () => {}
      );

    }

  },
  {
    once: false
  }
);

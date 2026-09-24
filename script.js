/* =========================================================
   BIRTHDAY WEBSITE — SCRIPT FINAL
========================================================= */

const story =
  document.getElementById("story");

const storyContent =
  document.getElementById("storyContent");

const openSurprise =
  document.getElementById("openSurprise");

const closeStory =
  document.getElementById("closeStory");

const reopenStory =
  document.getElementById("reopenStory");

const nextButton =
  document.getElementById("nextButton");

const backButton =
  document.getElementById("backButton");

const birthdayMusic =
  document.getElementById("birthdayMusic");

const stepNumber =
  document.getElementById("stepNumber");

const progressBar =
  document.getElementById("progressBar");


let currentStep = 0;

let cakeReady = false;


/* =========================================================
   CAPTION 21 FOTO
========================================================= */

const captions = [

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

    <div class="letter">

      <p class="story-kicker">
        bagian pertama
      </p>

      <h2 class="story-title">
        Sedikit dari aku untuk bebe 🤍
      </h2>

      <p class="story-intro">
        Aku sebenarnya bingung mau mulai dari mana,
        karena rasanya banyak banget yang pengen aku bilang.
      </p>

      <div class="letter-mark"></div>

      <div class="letter-body">

        <p class="letter-greeting">
          Happy birthday, bebe, sayangku, cintaku, gantengku 🤍
        </p>

        <p>
          Aku sebenarnya bingung mau mulai dari mana,
          karena rasanya banyak banget yang pengen aku bilang ke bebe.
          Tapi di hari ulang tahun bebe ini, aku cuma pengen bebe tahu
          kalau aku bener-bener bersyukur bisa kenal sama bebe
          dan bisa punya banyak cerita sama bebe sampai sekarang.
        </p>

        <p>
          Makasih ya, be, udah selalu sabar ngadepin aku.
          Makasih karena bebe selalu mau dengerin cerita aku,
          bahkan cerita yang mungkin sebenarnya nggak penting-penting banget :)
          Makasih juga karena bebe selalu khawatir kalau aku tiba-tiba diem
          atau nggak mau cerita.
          Kadang aku memang butuh waktu sendiri,
          tapi tanpa aku minta pun bebe selalu berusaha tetap ada di dekat aku.
          Dan jujur, hal sesederhana itu berarti banget buat aku.
        </p>

        <p>
          Aku juga selalu inget sama hal-hal kecil yang bebe lakuin.
          Jajanan yang tiba-tiba dibawain, dianter-jemput, nemenin aku,
          nanyain aku udah makan atau belum,
          sampai hal-hal kecil yang mungkin bebe sendiri udah lupa.
          Buat aku, semuanya punya tempat sendiri di ingatan aku.
        </p>

        <p>
          Aku paling menghargai satu hal dari bebe:
          bebe selalu mau berusaha.
          Kalau bebe salah, bebe nggak cuma bilang maaf sekali terus selesai.
          Bebe selalu berusaha buat ngejelasin,
          minta maaf langsung, lewat telepon,
          bahkan lewat chat juga.
          Bebe selalu berusaha supaya aku nggak terus-terusan kecewa
          atau sedih.
          Dan mungkin aku nggak selalu bilang,
          tapi aku lihat semua usaha itu.
        </p>

        <p>
          Aku tahu bebe juga nggak sempurna,
          aku juga nggak sempurna.
          Kita pasti pernah salah paham, pernah kesel,
          pernah sedih, atau punya hari yang nggak berjalan
          sesuai yang kita mau.
          Tapi justru dari situ aku belajar kalau yang paling penting
          bukan tentang siapa yang selalu benar,
          tapi tentang siapa yang mau tetap berusaha memperbaiki semuanya.
        </p>

        <p>
          Di umur bebe yang sekarang,
          aku cuma berharap semoga hidup bebe ke depannya jauh lebih baik.
          Semoga semua yang lagi bebe usahain bisa pelan-pelan tercapai.
          Semoga bebe selalu sehat,
          selalu dikelilingi orang-orang yang sayang sama bebe,
          dan semoga bebe nggak pernah ngerasa sendirian
          ketika lagi capek sama semuanya.
        </p>

        <p>
          Kalau suatu hari nanti bebe lagi ngerasa kurang,
          lagi ngerasa gagal,
          atau lagi ngerasa semuanya berat,
          aku harap bebe inget kalau ada seseorang
          yang selalu bangga sama bebe
          dan selalu percaya sama bebe.
        </p>

        <p>
          Aku nggak tahu nanti bakal ada berapa banyak ulang tahun
          yang bisa aku rayain bareng bebe.
          Tapi untuk ulang tahun bebe yang sekarang,
          aku seneng banget karena aku bisa jadi salah satu orang
          yang ada dan ikut ngerayain hari spesial ini.
        </p>

        <p>
          Makasih udah hadir di hidup aku, be.
          Makasih udah jadi bebe yang aku kenal sekarang.
          Makasih buat semua tawa, perhatian, kesabaran,
          dan semua hal kecil yang selama ini bebe kasih ke aku.
        </p>

        <p>
          Semoga tahun ini jadi tahun yang baik buat bebe.
          Semoga bebe selalu bahagia.
          Dan semoga, di antara banyak hal baik
          yang datang ke hidup bebe nanti,
          aku masih boleh jadi salah satu bagian kecil di dalamnya.
        </p>

        <p class="letter-closing">

          Happy birthday, bebe. 🤍

          <br><br>

          Aku sayang banget sama bebe.
          More than I probably know how to say :D

        </p>

        <div class="signature">
          — Dhiva ♡
        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   WISHES
========================================================= */

function wishesHTML() {

  return `

    <div class="wishes">

      <p class="story-kicker">
        bagian kedua
      </p>

      <h2 class="story-title">
        Harapanku untuk Bebe 🤍
      </h2>

      <p class="story-intro">
        Nggak banyak.
        Aku cuma pengen hal-hal baik datang ke hidup bebe,
        satu per satu.
      </p>

      <div class="letter-mark"></div>

      <div class="wish-text">

        <p>
          Aku nggak punya harapan yang terlalu banyak untuk bebe.
          Aku cuma ingin bebe selalu sehat, bahagia,
          dan dimudahkan dalam setiap langkah yang bebe ambil.
        </p>

        <p>
          Aku berharap semua hal yang sedang bebe perjuangkan sekarang
          bisa membuahkan hasil yang baik.
          Semoga semua keinginan dan cita-cita bebe
          bisa tercapai satu per satu,
          meskipun mungkin jalannya nggak selalu mudah.
        </p>

        <p>
          Aku juga berharap bebe selalu dikelilingi orang-orang
          yang tulus menyayangi dan menghargai bebe.
          Kalau suatu saat bebe sedang capek,
          kecewa, atau merasa semuanya terlalu berat,
          semoga bebe selalu ingat kalau bebe
          nggak harus menghadapi semuanya sendirian.
        </p>

        <p>
          Dan untuk kita,
          aku berharap semoga kita bisa terus belajar
          memahami satu sama lain.
          Semoga kita tetap bisa saling menjaga,
          saling menguatkan,
          dan tetap memilih untuk memperbaiki semuanya
          ketika keadaan nggak selalu berjalan
          sesuai yang kita mau.
        </p>

        <p>
          Aku nggak tahu akan sejauh apa perjalanan kita nanti,
          tapi untuk sekarang,
          aku cuma berharap semoga aku masih bisa menjadi
          salah satu bagian dari banyak hal baik
          yang terjadi di hidup bebe.
        </p>

        <p>
          Semoga umur baru ini membawa lebih banyak kebahagiaan,
          kesempatan, dan hal-hal baik untuk bebe.
          Semoga bebe selalu menemukan alasan untuk tetap tersenyum
          dan bangga dengan diri sendiri. 🤍
        </p>

        <p class="wish-ending">
          Pokoknya, semoga umur 17 ini baik banget sama bebe. 🤍
        </p>

      </div>

    </div>

  `;

}


/* =========================================================
   21 FOTO
========================================================= */

function memoriesHTML() {

  let photos = "";

  for (let i = 1; i <= 21; i++) {

    photos += `

      <figure class="memory-item">

        <img
          class="memory-image"
          data-photo="${i}"
          alt="Kenangan ${i}"
        >

        <figcaption>
          ${String(i).padStart(2, "0")}
          ·
          ${captions[i - 1]}
        </figcaption>

      </figure>

    `;

  }

  return `

    <div class="memories">

      <div class="memories-header">

        <p class="story-kicker">
          bagian ketiga
        </p>

        <h2 class="story-title">
          21 potongan kecil dari kita 📸
        </h2>

        <p class="story-intro">
          Karena satu tahun baru kamu harus ditemani
          banyak kenangan yang nggak kalah manis.
        </p>

      </div>

      <div class="memory-grid">

        ${photos}

      </div>

    </div>

  `;

}


/* =========================================================
   CAKE
========================================================= */

function cakeHTML() {

  return `

    <div class="cake-page">

      <p class="story-kicker">
        bagian keempat
      </p>

      <h2 class="story-title">
        Sekarang, bikin satu harapan ✨
      </h2>

      <p class="story-intro">
        Umur 17 cuma datang sekali.
        Jadi sebelum lanjut, tutup mata sebentar,
        pikirkan satu harapan yang paling kamu inginkan,
        lalu tiup lilinnya.
      </p>

      <div class="cake-scene">

        <div class="cake-number">
          17
        </div>

        <div
          id="birthdayCake"
          class="cake"
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

    </div>

  `;

}


/* =========================================================
   FINAL
========================================================= */

function finalHTML() {

  return `

    <div class="final-page">

      <p class="story-kicker">
        bagian terakhir
      </p>

      <img
        id="finalSnoopy"
        src="images/snoopy-birthday.png"
        data-snoopy
        alt="Snoopy membawa kue"
        class="final-snoopy"
      >

      <h2 class="story-title">
        Satu pesan terakhir untuk Bebe 🤍
      </h2>

      <p class="final-message">

        Harapanku sederhana.

        <br>

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

      <div class="signature">
        — Dhiva ♡
      </div>

    </div>

  `;

}


/* =========================================================
   URUTAN
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

function showStep(index) {

  currentStep =
    Math.max(
      0,
      Math.min(
        index,
        steps.length - 1
      )
    );

  cakeReady = false;


  storyContent.innerHTML =
    steps[currentStep]();


  stepNumber.textContent =
    String(
      currentStep + 1
    ).padStart(2, "0");


  progressBar.style.width =
    `${
      ((currentStep + 1) /
      steps.length) * 100
    }%`;


  backButton.style.visibility =
    currentStep === 0
      ? "hidden"
      : "visible";


  nextButton.textContent =
    currentStep ===
    steps.length - 1
      ? "Ulangi dari awal ↺"
      : "Lanjut →";


  /*
    Halaman kue punya tombol sendiri.
  */

  if (currentStep === 3) {

    nextButton.style.display =
      "none";

  } else {

    nextButton.style.display =
      "inline-flex";

  }


  storyContent.scrollTop = 0;


  if (currentStep === 2) {

    setupPhotoFallbacks();

  }


  if (currentStep === 3) {

    setupCake();

  }


  setupSnoopyFallbacks();

}


/* =========================================================
   FOTO
========================================================= */

function setupPhotoFallbacks() {

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


  const prefixes = [

    "photo-1",
    "photos-1"

  ];


  document
    .querySelectorAll(".memory-image")
    .forEach((img) => {

      const number =
        img.dataset.photo;


      const paths = [];


      /*
        Coba:
        images/photo-1 (1).jpg
        images/photo-1 (1).png
        images/photos-1 (1).jpg
        dst.
      */

      prefixes.forEach(
        (prefix) => {

          extensions.forEach(
            (ext) => {

              paths.push(
                `images/${prefix} (${number}).${ext}`
              );

            }
          );

        }
      );


      /*
        Kalau tidak ada di images,
        coba folder utama.
      */

      prefixes.forEach(
        (prefix) => {

          extensions.forEach(
            (ext) => {

              paths.push(
                `${prefix} (${number}).${ext}`
              );

            }
          );

        }
      );


      let pathIndex = 0;


      function tryNextPhoto() {

        if (
          pathIndex >=
          paths.length
        ) {

          img.removeAttribute(
            "src"
          );

          img.alt =
            `Foto ${number} belum ditemukan`;

          return;

        }


        img.src =
          paths[pathIndex];

        pathIndex++;

      }


      img.onerror =
        tryNextPhoto;


      tryNextPhoto();

    });

}


/* =========================================================
   SNOOPY
========================================================= */

function setupSnoopyFallbacks() {

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


  document
    .querySelectorAll("[data-snoopy]")
    .forEach((img) => {

      const paths =
        extensions.map(
          (ext) =>
            `images/snoopy-birthday.${ext}`
        );


      let pathIndex = 0;


      function tryNext() {

        if (
          pathIndex >=
          paths.length
        ) {

          img.style.display =
            "none";

          return;

        }


        img.src =
          paths[pathIndex];

        pathIndex++;

      }


      img.onerror =
        tryNext;


      /*
        Paksa mulai dari png.
      */

      tryNext();

    });

}


/* =========================================================
   CAKE
========================================================= */

function setupCake() {

  const cake =
    document.getElementById(
      "birthdayCake"
    );

  const button =
    document.getElementById(
      "cakeButton"
    );

  const message =
    document.getElementById(
      "cakeMessage"
    );


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

      /*
        KLIK PERTAMA
      */

      if (!cakeReady) {

        cakeReady = true;


        cake.classList.add(
          "blown"
        );


        message.textContent =
          "Wish made! Semoga harapan bebe pelan-pelan jadi nyata. 🤍";


        button.textContent =
          "Lanjut ke pesan terakhir →";


        makeConfetti();


        return;

      }


      /*
        KLIK KEDUA
      */

      showStep(4);

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


  for (
    let i = 0;
    i < 42;
    i++
  ) {

    const piece =
      document.createElement(
        "span"
      );


    piece.className =
      "confetti";


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.left =
      `${Math.random() * 100}vw`;


    piece.style.animationDelay =
      `${Math.random() * 0.45}s`;


    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;


    document.body.appendChild(
      piece
    );


    setTimeout(
      () => {

        piece.remove();

      },
      2200
    );

  }

}


/* =========================================================
   BUKA
========================================================= */

function openStory() {

  story.classList.add(
    "open"
  );


  story.setAttribute(
    "aria-hidden",
    "false"
  );


  reopenStory.classList.remove(
    "show"
  );


  showStep(0);


  birthdayMusic.volume =
    0.55;


  birthdayMusic
    .play()
    .catch(() => {});

}


/* =========================================================
   TUTUP
========================================================= */

function closeStoryPanel() {

  story.classList.remove(
    "open"
  );


  story.setAttribute(
    "aria-hidden",
    "true"
  );


  reopenStory.classList.add(
    "show"
  );

}


/* =========================================================
   BUTTON
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
  () => {

    if (
      currentStep <
      steps.length - 1
    ) {

      showStep(
        currentStep + 1
      );

    } else {

      showStep(0);

    }

  }
);


backButton.addEventListener(
  "click",
  () => {

    if (
      currentStep > 0
    ) {

      showStep(
        currentStep - 1
      );

    }

  }
);


/* =========================================================
   ESC
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
   MULAI
========================================================= */

setupSnoopyFallbacks();
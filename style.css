* {
  box-sizing: border-box;
}

:root {
  --blue-dark: #21617f;
  --blue: #3195bd;
  --text: #587c8d;
  --pink: #f58db6;
  --yellow: #ffe18a;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);

  background:
    radial-gradient(
      circle at 50% 5%,
      #ffffff 0,
      #eaf9ff 28%,
      transparent 55%
    ),
    linear-gradient(
      135deg,
      #eaf9ff 0%,
      #cceefa 48%,
      #b8e3f5 100%
    );

  overflow-x: hidden;
}

button {
  font: inherit;
}


/* =====================================================
   GLOBAL FLOATING DECOR
===================================================== */

.floating-decor {
  position: fixed;
  z-index: 1;
  pointer-events: none;
  color: rgba(255, 255, 255, 0.72);
  font-family: Georgia, serif;
  animation: floatDecor 7s ease-in-out infinite;
}

.decor-1 {
  top: 18%;
  left: 8%;
  font-size: 18px;
  animation-delay: -1s;
}

.decor-2 {
  top: 34%;
  right: 10%;
  font-size: 24px;
  animation-delay: -3s;
}

.decor-3 {
  bottom: 20%;
  left: 16%;
  font-size: 15px;
  animation-delay: -5s;
}

.decor-4 {
  top: 12%;
  right: 25%;
  font-size: 28px;
  animation-delay: -2s;
}

.decor-5 {
  bottom: 14%;
  right: 17%;
  font-size: 19px;
  animation-delay: -4s;
}

@keyframes floatDecor {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -18px, 0) rotate(8deg);
  }
}


/* =====================================================
   HOME
===================================================== */

.home {
  min-height: 100vh;
  min-height: 100svh;

  position: relative;

  display: grid;
  place-items: center;

  overflow: hidden;

  padding: 32px 20px;
}

.sky-glow {
  position: absolute;

  width: 620px;
  height: 620px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.42);

  filter: blur(40px);

  top: -260px;
  left: 50%;

  transform: translateX(-50%);

  animation: glowPulse 6s ease-in-out infinite;
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.55;
    transform: translateX(-50%) scale(1);
  }

  50% {
    opacity: 0.85;
    transform: translateX(-50%) scale(1.08);
  }
}


/* =====================================================
   CLOUDS
===================================================== */

.cloud {
  position: absolute;

  width: 220px;
  height: 70px;

  border-radius: 100px;

  background: rgba(255, 255, 255, 0.34);

  filter: blur(1px);

  pointer-events: none;
}

.cloud::before,
.cloud::after {
  content: "";

  position: absolute;

  border-radius: 50%;

  background: inherit;
}

.cloud::before {
  width: 90px;
  height: 90px;

  left: 35px;
  bottom: 10px;
}

.cloud::after {
  width: 115px;
  height: 115px;

  right: 28px;
  bottom: 0;
}

.cloud-one {
  left: -70px;
  bottom: 15%;

  animation: cloudMoveOne 18s ease-in-out infinite;
}

.cloud-two {
  right: -70px;
  top: 16%;

  transform: scale(0.8);

  animation: cloudMoveTwo 22s ease-in-out infinite;
}

@keyframes cloudMoveOne {
  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(55px);
  }
}

@keyframes cloudMoveTwo {
  0%,
  100% {
    transform: scale(0.8) translateX(0);
  }

  50% {
    transform: scale(0.8) translateX(-60px);
  }
}


/* =====================================================
   BUBBLES
===================================================== */

.bubble {
  position: absolute;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.28);

  border: 1px solid rgba(255, 255, 255, 0.25);

  pointer-events: none;

  animation: bubbleFloat 8s ease-in-out infinite;
}

.bubble-1 {
  width: 24px;
  height: 24px;

  left: 14%;
  top: 22%;

  animation-delay: -2s;
}

.bubble-2 {
  width: 13px;
  height: 13px;

  right: 17%;
  top: 29%;

  animation-delay: -4s;
}

.bubble-3 {
  width: 34px;
  height: 34px;

  left: 20%;
  bottom: 16%;

  animation-delay: -6s;
}

.bubble-4 {
  width: 18px;
  height: 18px;

  right: 12%;
  bottom: 24%;

  animation-delay: -1s;
}

@keyframes bubbleFloat {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.45;
  }

  50% {
    transform: translateY(-25px);
    opacity: 0.8;
  }
}


/* =====================================================
   WELCOME
===================================================== */

.welcome {
  width: min(760px, 100%);

  position: relative;

  z-index: 2;

  text-align: center;

  animation: welcomeEntrance 1.15s cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes welcomeEntrance {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.small-note,
.tiny-label,
.made-by {
  margin: 0;
}

.small-note {
  font-size: 13px;

  letter-spacing: 0.18em;

  text-transform: uppercase;

  color: #4c8da8;

  animation: fadeUp 0.8s 0.15s both;
}

.tiny-label {
  margin-top: 10px;

  font-size: 13px;

  letter-spacing: 0.13em;

  text-transform: uppercase;

  color: #5f91a5;

  animation: fadeUp 0.8s 0.45s both;
}


/* =====================================================
   SNOOPY
===================================================== */

.snoopy,
.final-snoopy {
  display: block;

  width: min(370px, 75vw);

  max-height: 330px;

  object-fit: contain;

  margin: 12px auto 0;

  background: transparent;

  mix-blend-mode: multiply;

  filter:
    contrast(1.04)
    saturate(1.04)
    drop-shadow(
      0 15px 18px
      rgba(34, 103, 132, 0.10)
    );

  animation:
    snoopyEntrance 1s 0.25s both,
    snoopyFloat 5s 1.3s ease-in-out infinite;
}

@keyframes snoopyEntrance {
  from {
    opacity: 0;
    transform: translateY(25px) scale(0.88) rotate(-3deg);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0);
  }
}

@keyframes snoopyFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}

.welcome h1 {
  margin: 10px 0;

  color: var(--blue-dark);

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: clamp(52px, 9vw, 86px);

  line-height: 0.98;

  letter-spacing: -0.045em;

  animation: titleEntrance 0.9s 0.55s both;
}

@keyframes titleEntrance {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome-text {
  max-width: 520px;

  margin: 0 auto 25px;

  font-size: 17px;

  line-height: 1.7;

  animation: fadeUp 0.8s 0.7s both;
}


/* =====================================================
   BUTTON
===================================================== */

.main-button {
  border: 0;

  border-radius: 999px;

  background: var(--blue);

  color: white;

  padding: 15px 25px;

  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 12px 28px
    rgba(34, 130, 169, 0.22);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  position: relative;

  z-index: 50;

  animation: buttonEntrance 0.8s 0.85s both;
}

@keyframes buttonEntrance {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.main-button:hover {
  transform: translateY(-3px) scale(1.02);

  box-shadow:
    0 15px 32px
    rgba(34, 130, 169, 0.28);

  background: #2789b1;
}

.main-button:active {
  transform: translateY(0) scale(0.98);
}

.main-button.small {
  padding: 13px 23px;
}

.made-by {
  margin-top: 17px;

  font-size: 13px;

  color: #6e94a3;

  animation: fadeUp 0.8s 1s both;
}


/* =====================================================
   STORY
===================================================== */

.story {
  position: fixed;

  inset: 0;

  z-index: 100;

  display: none;

  flex-direction: column;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(255,255,255,0.72),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      #e8f8ff,
      #c8ebf9 55%,
      #b7e1f3
    );

  opacity: 0;
}

.story.open {
  display: flex;

  animation: storyOpen 0.65s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

@keyframes storyOpen {
  from {
    opacity: 0;
    transform: scale(1.025);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}


/* =====================================================
   STORY BACKGROUND
===================================================== */

.story-glow {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(35px);

  background: rgba(255,255,255,0.3);

  animation: storyGlow 7s ease-in-out infinite;
}

.story-glow-one {
  width: 360px;
  height: 360px;

  top: -170px;
  left: 10%;
}

.story-glow-two {
  width: 280px;
  height: 280px;

  bottom: -130px;
  right: 10%;

  animation-delay: -3s;
}

@keyframes storyGlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.45;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.75;
  }
}

.story-bubble {
  position: absolute;

  border-radius: 50%;

  background: rgba(255,255,255,0.22);

  pointer-events: none;

  animation: storyBubble 9s ease-in-out infinite;
}

.story-bubble-one {
  width: 20px;
  height: 20px;

  top: 22%;
  left: 8%;
}

.story-bubble-two {
  width: 12px;
  height: 12px;

  top: 48%;
  right: 8%;

  animation-delay: -3s;
}

.story-bubble-three {
  width: 28px;
  height: 28px;

  bottom: 17%;
  left: 12%;

  animation-delay: -6s;
}

@keyframes storyBubble {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-25px);
  }
}


/* =====================================================
   STORY TOP
===================================================== */

.story-top {
  width: min(
    1150px,
    calc(100% - 44px)
  );

  margin: 0 auto;

  padding-top: 24px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  flex: 0 0 auto;

  position: relative;

  z-index: 10;

  animation: fadeDown 0.6s 0.15s both;
}

.icon-button {
  width: 48px;
  height: 48px;

  border: 0;

  border-radius: 50%;

  background: rgba(
    255,
    255,
    255,
    0.56
  );

  color: #5c8799;

  font-size: 28px;

  line-height: 1;

  cursor: pointer;

  z-index: 30;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.icon-button:hover {
  transform: rotate(8deg) scale(1.05);

  background: rgba(
    255,
    255,
    255,
    0.82
  );
}

.progress {
  display: flex;

  align-items: center;

  gap: 12px;

  color: #6c91a1;

  font-size: 13px;

  letter-spacing: 0.12em;
}

.progress-line {
  width: 142px;

  height: 3px;

  border-radius: 999px;

  background:
    rgba(
      64,
      153,
      190,
      0.22
    );

  overflow: hidden;
}

.progress-line i {
  display: block;

  width: 20%;

  height: 100%;

  border-radius: inherit;

  background: #3195bd;

  transition:
    width 0.5s
    cubic-bezier(0.22, 1, 0.36, 1);
}


/* =====================================================
   STORY CONTENT
===================================================== */

.story-content {
  width: min(
    1050px,
    calc(100% - 44px)
  );

  margin: 0 auto;

  flex: 1 1 auto;

  min-height: 0;

  overflow-y: auto;

  overflow-x: hidden;

  padding: 50px 5px 30px;

  scrollbar-width: thin;

  scrollbar-color:
    rgba(55,145,182,0.55)
    transparent;

  position: relative;

  z-index: 5;
}

.story-content::-webkit-scrollbar {
  width: 7px;
}

.story-content::-webkit-scrollbar-thumb {
  background:
    rgba(
      55,
      145,
      182,
      0.55
    );

  border-radius: 99px;
}


/* =====================================================
   STORY PAGE TRANSITION
===================================================== */

.story-page-enter {
  animation:
    pageEnter
    0.65s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform:
      translateY(28px)
      scale(0.985);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}

.story-page-exit {
  animation:
    pageExit
    0.25s ease
    both;
}

@keyframes pageExit {
  to {
    opacity: 0;
    transform: translateY(-15px);
  }
}


/* =====================================================
   NAVIGATION
===================================================== */

.story-navigation {
  width: min(
    1050px,
    calc(100% - 44px)
  );

  margin: 0 auto;

  padding: 10px 5px 25px;

  flex: 0 0 auto;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  position: relative;

  z-index: 20;

  animation: fadeUp 0.6s 0.25s both;
}

.text-button {
  border: 0;

  background: transparent;

  color: #5e8291;

  font-size: 17px;

  cursor: pointer;

  padding: 10px 0;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.text-button:hover {
  color: var(--blue-dark);

  transform: translateX(-3px);
}


/* =====================================================
   TYPOGRAPHY
===================================================== */

.letter,
.wishes,
.memories,
.cake-page,
.final-page {
  width: 100%;

  max-width: 930px;

  margin: 0 auto;

  padding-bottom: 30px;
}

.story-kicker {
  margin: 0 0 12px;

  color: #3f8ead;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 0.18em;

  text-transform: uppercase;
}

.story-title {
  margin: 0;

  color: var(--blue-dark);

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size:
    clamp(
      42px,
      7vw,
      78px
    );

  line-height: 0.98;

  letter-spacing: -0.045em;

  font-weight: 700;
}

.story-intro {
  max-width: 820px;

  margin: 22px 0 28px;

  font-size: 18px;

  line-height: 1.75;

  color: #5d7e8c;
}

.letter-mark {
  width: 55px;

  height: 3px;

  border-radius: 99px;

  background: #4ba5c8;

  margin: 22px 0 30px;
}

.letter-body,
.wish-text {
  max-width: 820px;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 18px;

  line-height: 1.9;

  color: #506f7e;
}

.letter-body p,
.wish-text p {
  margin: 0 0 22px;
}

.letter-greeting {
  color: var(--blue-dark);

  font-size: 23px;

  font-weight: 700;
}

.letter-closing {
  color: var(--blue-dark);

  font-size: 20px;

  margin-top: 32px !important;
}

.signature {
  margin-top: 25px;

  color: #3e7e98;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 20px;

  font-style: italic;
}

.wish-ending {
  color: var(--blue-dark);

  font-weight: 700;

  font-size: 21px;

  margin-top: 32px !important;
}


/* =====================================================
   TEXT REVEAL
===================================================== */

.letter .story-kicker,
.wishes .story-kicker,
.memories .story-kicker,
.cake-page .story-kicker,
.final-page .story-kicker {
  animation: fadeUp 0.65s 0.05s both;
}

.letter .story-title,
.wishes .story-title,
.memories .story-title,
.cake-page .story-title,
.final-page .story-title {
  animation: titleReveal 0.8s 0.15s both;
}

.letter .story-intro,
.wishes .story-intro,
.cake-page .story-intro {
  animation: fadeUp 0.7s 0.28s both;
}

.letter-body,
.wish-text {
  animation: fadeUp 0.75s 0.4s both;
}

@keyframes titleReveal {
  from {
    opacity: 0;

    transform:
      translateY(25px)
      scale(0.97);

    filter: blur(3px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);

    filter: blur(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;

    transform: translateY(15px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;

    transform: translateY(-15px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }
}


/* =====================================================
   MEMORIES
===================================================== */

.memories-header {
  margin-bottom: 28px;
}

.memory-grid {
  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 30px 24px;
}

.memory-item {
  margin: 0;

  min-width: 0;

  opacity: 0;

  animation:
    memoryReveal
    0.7s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
}

.memory-item:nth-child(1)  { animation-delay: 0.12s; }
.memory-item:nth-child(2)  { animation-delay: 0.18s; }
.memory-item:nth-child(3)  { animation-delay: 0.24s; }
.memory-item:nth-child(4)  { animation-delay: 0.30s; }
.memory-item:nth-child(5)  { animation-delay: 0.36s; }
.memory-item:nth-child(6)  { animation-delay: 0.42s; }
.memory-item:nth-child(7)  { animation-delay: 0.48s; }
.memory-item:nth-child(8)  { animation-delay: 0.54s; }
.memory-item:nth-child(9)  { animation-delay: 0.60s; }
.memory-item:nth-child(10) { animation-delay: 0.66s; }
.memory-item:nth-child(11) { animation-delay: 0.72s; }
.memory-item:nth-child(12) { animation-delay: 0.78s; }
.memory-item:nth-child(13) { animation-delay: 0.84s; }
.memory-item:nth-child(14) { animation-delay: 0.90s; }
.memory-item:nth-child(15) { animation-delay: 0.96s; }
.memory-item:nth-child(16) { animation-delay: 1.02s; }
.memory-item:nth-child(17) { animation-delay: 1.08s; }
.memory-item:nth-child(18) { animation-delay: 1.14s; }
.memory-item:nth-child(19) { animation-delay: 1.20s; }
.memory-item:nth-child(20) { animation-delay: 1.26s; }
.memory-item:nth-child(21) { animation-delay: 1.32s; }

@keyframes memoryReveal {
  from {
    opacity: 0;

    transform:
      translateY(25px)
      scale(0.96);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

.memory-image {
  display: block;

  width: 100%;

  height: 205px;

  object-fit: cover;

  border-radius: 18px;

  background:
    rgba(
      255,
      255,
      255,
      0.22
    );

  box-shadow:
    0 9px 24px
    rgba(
      40,
      113,
      140,
      0.12
    );

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    filter 0.35s ease;
}

.memory-item:hover .memory-image {
  transform:
    translateY(-5px)
    scale(1.015);

  box-shadow:
    0 15px 30px
    rgba(
      40,
      113,
      140,
      0.18
    );

  filter: brightness(1.03);
}

.memory-item figcaption {
  margin-top: 11px;

  font-size: 14px;

  line-height: 1.55;

  color: #638494;
}


/* =====================================================
   CAKE
===================================================== */

.cake-page {
  text-align: center;
}

.cake-page .story-intro {
  margin-left: auto;

  margin-right: auto;
}

.cake-scene {
  width: 330px;

  height: 330px;

  margin: 20px auto 8px;

  position: relative;

  display: flex;

  align-items: flex-end;

  justify-content: center;

  animation:
    cakeSceneEntrance
    0.9s
    0.25s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes cakeSceneEntrance {
  from {
    opacity: 0;

    transform:
      translateY(35px)
      scale(0.85);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

.cake {
  position: relative;

  width: 280px;

  height: 125px;

  margin-bottom: 38px;

  border-radius:
    18px 18px 30px 30px;

  background:
    linear-gradient(
      to bottom,
      #ffe89a 0 34%,
      #f4c85f 34% 39%,
      #fff0b3 39% 68%,
      #eab94d 68% 73%,
      #ffdc7b 73% 100%
    );

  border:
    4px solid
    rgba(
      153,
      116,
      50,
      0.12
    );

  box-shadow:
    0 18px 25px
    rgba(
      77,
      118,
      134,
      0.18
    );

  animation:
    cakeBounce
    4s
    1.2s
    ease-in-out
    infinite;
}

@keyframes cakeBounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.frosting {
  position: absolute;

  left: -5px;

  right: -5px;

  top: -18px;

  height: 45px;

  border-radius:
    22px 22px 15px 15px;

  background: #f58db6;

  box-shadow:
    inset 0 -9px 0
    rgba(
      205,
      85,
      126,
      0.12
    );
}

.frosting::after {
  content: "";

  position: absolute;

  left: 25px;

  top: 25px;

  width: 28px;

  height: 22px;

  background: #f58db6;

  border-radius:
    0 0 16px 16px;

  box-shadow:
    60px 4px 0 #f58db6,
    120px -2px 0 #f58db6,
    185px 3px 0 #f58db6;
}

.cake-number {
  position: absolute;

  z-index: 5;

  left: 50%;

  top: 10px;

  transform:
    translateX(-50%);

  width: 74px;

  height: 74px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      0.75
    );

  color: #d85e8c;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 32px;

  font-weight: 700;

  box-shadow:
    0 9px 20px
    rgba(
      76,
      119,
      139,
      0.12
    );

  animation:
    numberPulse
    2.5s
    ease-in-out
    infinite;
}

@keyframes numberPulse {
  0%,
  100% {
    transform:
      translateX(-50%)
      scale(1);
  }

  50% {
    transform:
      translateX(-50%)
      scale(1.04);
  }
}

.candle {
  position: absolute;

  z-index: 8;

  bottom: 104px;

  width: 17px;

  height: 55px;

  border-radius:
    7px 7px 3px 3px;

  background:
    repeating-linear-gradient(
      135deg,
      #5ec6e6 0 9px,
      #ffd875 9px 18px,
      #ef82ad 18px 27px
    );

  border:
    2px solid
    rgba(
      58,
      132,
      157,
      0.12
    );
}

.candle-1 {
  left: 104px;
}

.candle-2 {
  left: 132px;
}

.candle-3 {
  left: 160px;
}

.flame {
  position: absolute;

  width: 14px;

  height: 21px;

  left: 50%;

  top: -19px;

  transform:
    translateX(-50%)
    rotate(45deg);

  border-radius:
    70% 0 70% 70%;

  background: #ffd45e;

  box-shadow:
    0 0 16px
    rgba(
      255,
      207,
      74,
      0.75
    );

  transition:
    opacity 0.25s ease,
    transform 0.35s ease;

  animation:
    flameFlicker
    0.7s
    ease-in-out
    infinite alternate;
}

@keyframes flameFlicker {
  from {
    transform:
      translateX(-50%)
      rotate(42deg)
      scale(0.95);
  }

  to {
    transform:
      translateX(-50%)
      rotate(48deg)
      scale(1.08);
  }
}

.cake.blown .flame {
  opacity: 0;

  animation: none;

  transform:
    translateX(-50%)
    translateY(-18px)
    scale(0.4)
    rotate(45deg);
}

.cake.blown {
  animation:
    cakeCelebrate
    0.7s
    ease
    both;
}

@keyframes cakeCelebrate {
  0% {
    transform: scale(1);
  }

  35% {
    transform: scale(1.06) rotate(-1deg);
  }

  70% {
    transform: scale(0.98) rotate(1deg);
  }

  100% {
    transform: scale(1);
  }
}

.cake-message {
  min-height: 28px;

  margin: 8px auto 15px;

  font-size: 17px;

  color: #5b7c89;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.cake-page .main-button {
  position: relative;

  z-index: 20;
}


/* =====================================================
   FINAL PAGE
===================================================== */

.final-page {
  text-align: center;

  padding-bottom: 40px;
}

.final-snoopy {
  width: min(
    330px,
    68vw
  );

  height: 220px;

  margin: 0 auto 5px;

  animation:
    finalSnoopyEntrance
    1s
    0.2s
    both,
    finalSnoopyFloat
    5s
    1.3s
    ease-in-out
    infinite;
}

@keyframes finalSnoopyEntrance {
  from {
    opacity: 0;

    transform:
      translateY(30px)
      scale(0.88);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

@keyframes finalSnoopyFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }
}

.final-page .story-title {
  max-width: 800px;

  margin: 0 auto;
}

.final-message {
  max-width: 690px;

  margin: 25px auto 0;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 24px;

  line-height: 1.65;

  color: #315f73;

  animation: fadeUp 0.8s 0.45s both;
}

.final-small {
  max-width: 720px;

  margin: 22px auto;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 18px;

  line-height: 1.85;

  animation: fadeUp 0.8s 0.6s both;
}

.final-page .signature {
  animation: signatureReveal 1s 0.8s both;
}

@keyframes signatureReveal {
  from {
    opacity: 0;

    transform:
      translateY(10px)
      rotate(-3deg);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      rotate(0);
  }
}


/* =====================================================
   REOPEN
===================================================== */

.reopen-button {
  display: none;

  position: fixed;

  right: 22px;

  bottom: 22px;

  z-index: 200;

  border: 0;

  border-radius: 999px;

  padding: 12px 18px;

  background: #3195bd;

  color: white;

  font-weight: 700;

  cursor: pointer;

  box-shadow:
    0 10px 25px
    rgba(
      31,
      119,
      154,
      0.25
    );

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.reopen-button.show {
  display: block;

  animation:
    reopenEntrance
    0.5s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

.reopen-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 14px 28px
    rgba(
      31,
      119,
      154,
      0.3
    );
}

@keyframes reopenEntrance {
  from {
    opacity: 0;

    transform:
      translateY(15px)
      scale(0.9);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}


/* =====================================================
   CONFETTI
===================================================== */

.confetti {
  position: fixed;

  top: -20px;

  width: 9px;

  height: 15px;

  border-radius: 2px;

  z-index: 999;

  pointer-events: none;

  animation:
    confettiFall
    2.1s
    cubic-bezier(0.25, 0.8, 0.4, 1)
    forwards;
}

@keyframes confettiFall {
  to {
    top: 110vh;

    transform:
      translateY(100vh)
      rotate(720deg);
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 760px) {

  .home {
    padding: 25px 18px;
  }

  .snoopy {
    width: min(
      330px,
      82vw
    );
  }

  .story-top {
    width: calc(100% - 28px);

    padding-top: 15px;
  }

  .story-content {
    width: calc(100% - 28px);

    padding:
      35px 2px 25px;
  }

  .story-navigation {
    width: calc(100% - 28px);

    padding-bottom: 16px;
  }

  .progress-line {
    width: 90px;
  }

  .story-title {
    font-size:
      clamp(
        39px,
        12vw,
        58px
      );
  }

  .story-intro {
    font-size: 16px;
  }

  .letter-body,
  .wish-text {
    font-size: 17px;

    line-height: 1.8;
  }

  .memory-grid {
    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

    gap: 22px 13px;
  }

  .memory-image {
    height: 160px;

    border-radius: 14px;
  }

  .memory-item figcaption {
    font-size: 12px;
  }

  .cake-scene {
    transform: scale(0.82);

    margin-top: -5px;

    margin-bottom: -15px;
  }

  .final-message {
    font-size: 21px;
  }

  .final-small {
    font-size: 16px;
  }

  .floating-decor {
    opacity: 0.6;
  }

  .story-bubble {
    opacity: 0.6;
  }
}


@media (max-width: 430px) {

  .memory-grid {
    grid-template-columns:
      1fr 1fr;
  }

  .memory-image {
    height: 135px;
  }

  .story-navigation {
    gap: 8px;
  }

  .text-button {
    font-size: 15px;
  }

  .main-button.small {
    padding:
      12px 18px;
  }

  .progress {
    gap: 7px;

    font-size: 11px;
  }

  .progress-line {
    width: 65px;
  }

  .icon-button {
    width: 43px;
    height: 43px;

    font-size: 25px;
  }
}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

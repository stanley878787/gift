const FRIENDS = [
  {
    id: "friend-a",
    nicknameHashes: [
      "458151b55891199d202dd5cb1429ff9721f6e1d89d485a5f93570a9adda6484a",
      "f8803f76bee62739a0ea115f89e694a7507834691a5f3c4e6510c658eaf03faf",
      "4262a13f940eee35ca8c18f4191da8d1924989d493b28ee7b79ae768399f8a2a",
      "42b91948ae546b90877171c4a35ffdff50adf6eb1044672786618dc4aa737f8d",
      "ca63d6d2876e1342ed191f627ef9507c80996802025d0014b7b261591709ec7d",
    ],
    textQuestion: "根據非常有文學涵養的孟亮所示：三國演義中的蠻王孟霍他被諸葛亮(三抓三放)，但後來發現記錯了，正確其實是?",
    textPrompt: "在Peeps上說過的話w",
    textAnswerHashes: [
      "3021ed6e055c0f4b57860f1562eebcf4eedab2de6a9d7a9e8fc13a88690345a9",
    ],
    photo: "assets/photos/img1.jpg",
    photoQuestion: "你畫我猜",
    photoCaption: "身高102公分",
    photoAnswerHashes: [
      "315097193501c36fe6e4d54f6c23e424dc7425d73f8bc6cceb222b5fccd3ab1e",
    ],
    encryptedLetter: {
      "salt": "s3RhLVyBuR2p9P2pBcQrrg==",
      "iv": "M2z0KUhkAn0XmtW2",
      "data": "G1u5i6Lh5lIM8UsjxbDcv6bkJNwMM/GtpeoUnWwrxTpZ87Ekk8bzp5LEOWhUCHd3bV5ItnbKRfF6cY+v9TT4UUj7M/4JCwPaRmW2E7Gp0RJtq+3FVhhfIfUFd+RnMV4hM/HmHDxVfhbjJXqcO2hwJTARuyNHL+U9tR2SuB47wBDn9i/MxhH0idSnp4L3WF4/fVcrKV20tOvvPaj5OQfr0RV1HLb0FyJGSIyiDLHABO598B4H7j2ZWPbS51PFTJK1c3AuFTuqsJ1iz0KVnPpdMYLGbzWynGwGnNZKzTLfRqs7w7+P7AT3aOIfHfIg71m5XH8HyTkMootChb8ZeAtZYe037aelbatougD5JPAlzHp7D4BUwKe6wTQkmi6FQ9GRK6xNEcnWHdOEdks+TiAaV1NFnK/YRqFIc6dKl09aa1ZKojcOuAOeCnC4hL5GfxhnEn1lilQQPh0IOsktM2RNQZOOcQfYVKMgQZdsYBU=",
      "iterations": 150000
    }
  },
  {
    id: "friend-b",
    nicknameHashes: [
      "a62dde8b7621934294bb6d16613e4213c86e7b139775353319d748a071e13f04",
      "4560d76e7a20c19cc6d0aa0cd0aa3d5575c5c7d63595de97f67148452a2860c6",
      "09b1b22c2a4cf88ce778b466d9dcf3d29e806ade8eec2d52939b83ed200bb691",
      "4ffdee558270666430be43568f8601c1d2ba6eae4a263e5b4fd1df16f850d3cb"
    ],
    textQuestion: "我們做到凌晨的黑克松最後完成的作品叫做什麼?",
    textPrompt: "Canva簡報有",
    textAnswerHashes: [
      "7b528b960e9fd6b96b9568345ce390b72095f718d0ffa29e196c2722262a33d8",
    ],
    photo: "assets/photos/img2.png",
    photoQuestion: "你畫我猜",
    photoCaption: "手舞足蹈的貓",
    photoAnswerHashes: [
      "6440ab578aa337f06e512780c2cc22e58326f9b1517a4e22a41689a4750ec078",
      "ffa6e9fe9a594ac186794118ab19ba52afdc062944ea3b7f9c96594d81c05ef2",
      "e0b26b5e16eb2c09652f1844509dcba277b9aa656ba844d73284525736b5f397"
    ],
    encryptedLetter: {
      "salt": "xnSG9A270VF+NMDcTDyQog==",
      "iv": "5fPpsZ8rhxKbOiWO",
      "data": "QN0nFJnRqryexF6uICTWYbGYaA2bUPlNQZmt7AeSWETv/NOMpfYanTYbR9aAK2kBC0hCCy3SPmTb24L8heG7IlriUyhCbWSj98wczJDCOYJ7cJVvrgOGjhtlQmgbKAKr/9yuZQy98y0BbKMoRx6haLEn8pBOsUuF14fqHQU0bO1oSaVbajis9yAH41aALeXr9PvnRzD5EH8YISl9CM4t9IW021ptBkaoCj7nox8qig9qtkh57T7U7YL9kbymV8452SP1g9gJeBZMJSvtvGNmioh7g1LlqhOhmyopdd22bRdgK1A3iDreggJDg3yI5EUOI/Nw31wxVLgSQAJXkpAcKKrbtCWIEonlt7Rtn1VIEwrlEokowtZETAmDOiwDTHTeNL+AUhOrAnD+e7UV9yuXnbqo9cuX/WD4yyA0zAF7Z9C4VNUdMEzKGztBISH+fU5uPXwZ7yrZjLenQ4SbKdZVl9fjS3kdJclsqPAdsbFLUPhPF1BcZ0NMuI24vt1cFi0=",
      "iterations": 150000
    }
  },
];

const state = { currentFriend: null, currentLetter: null, step: 0 };

const elements = {
  introPanel: document.querySelector("#introPanel"),
  questCard: document.querySelector("#questCard"),
  finale: document.querySelector("#finale"),
  feedback: document.querySelector("#feedback"),
  progressDots: [...document.querySelectorAll("[data-step-dot]")],
  identityStage: document.querySelector("#identityStage"),
  textStage: document.querySelector("#textStage"),
  photoStage: document.querySelector("#photoStage"),
  identityForm: document.querySelector("#identityForm"),
  identityInput: document.querySelector("#identityInput"),
  secretInput: document.querySelector("#secretInput"),
  textForm: document.querySelector("#textForm"),
  textAnswer: document.querySelector("#textAnswer"),
  textQuestion: document.querySelector("#textQuestion"),
  textPrompt: document.querySelector("#textPrompt"),
  photoForm: document.querySelector("#photoForm"),
  photoAnswer: document.querySelector("#photoAnswer"),
  photoQuestion: document.querySelector("#photoQuestion"),
  photoCaption: document.querySelector("#photoCaption"),
  photoChallenge: document.querySelector("#photoChallenge"),
  friendName: document.querySelector("#friendName"),
  cardTitle: document.querySelector("#cardTitle"),
  cardMessage: document.querySelector("#cardMessage"),
  cardSignature: document.querySelector("#cardSignature"),
  cardDate: document.querySelector("#cardDate"),
  restartButton: document.querySelector("#restartButton"),
  sparkleTemplate: document.querySelector("#sparkleTemplate"),
  cursorGlow: document.querySelector("#cursorGlow")
};

function normalizeAnswer(value) {
  return value.normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
}

function base64ToBytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

async function sha256(value) {
  if (!crypto.subtle) {
    throw new Error("Crypto subtle API is unavailable.");
  }
  const bytes = new TextEncoder().encode(normalizeAnswer(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function deriveLetterKey(secret, salt, iterations) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(normalizeAnswer(secret)),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

async function decryptLetter(encryptedLetter, secret) {
  const salt = base64ToBytes(encryptedLetter.salt);
  const iv = base64ToBytes(encryptedLetter.iv);
  const data = base64ToBytes(encryptedLetter.data);
  const key = await deriveLetterKey(secret, salt, encryptedLetter.iterations);
  const plainBuffer = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  const letter = JSON.parse(new TextDecoder().decode(plainBuffer));

  if (!letter.displayName || !letter.cardTitle || !letter.cardMessage || !letter.signature) {
    throw new Error("Invalid letter payload.");
  }

  return letter;
}

async function hasHashMatch(value, hashes) {
  const hash = await sha256(value);
  return hashes.includes(hash);
}

function setFeedback(message, type = "error") {
  elements.feedback.textContent = message;
  elements.feedback.classList.toggle("success", type === "success");
}

function setStep(step) {
  state.step = step;
  elements.progressDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === step);
    dot.classList.toggle("done", index < step);
  });
}

function showStage(stageName) {
  const stages = [elements.identityStage, elements.textStage, elements.photoStage];
  stages.forEach((stage) => {
    const isTarget = stage.id === stageName;
    stage.hidden = !isTarget;
    stage.classList.toggle("active", isTarget);
  });
}

function loadFriendChallenge(friend, letter) {
  elements.textQuestion.textContent = friend.textQuestion;
  elements.textPrompt.textContent = friend.textPrompt;
  elements.photoQuestion.textContent = friend.photoQuestion;
  elements.photoCaption.textContent = friend.photoCaption;
  elements.photoChallenge.src = friend.photo;
  elements.photoChallenge.alt = `${letter.displayName} 的照片題`;
}

function revealFinale(letter) {
  elements.questCard.hidden = true;
  elements.introPanel.hidden = true;
  elements.finale.hidden = false;
  elements.friendName.textContent = letter.displayName;
  elements.cardTitle.textContent = letter.cardTitle;
  elements.cardMessage.textContent = letter.cardMessage;
  elements.cardSignature.textContent = letter.signature;
  elements.cardDate.textContent = new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "long", day: "numeric" }).format(new Date());
  burstSparkles();
}

function resetGame() {
  state.currentFriend = null;
  state.currentLetter = null;
  setStep(0);
  setFeedback("輸入綽號和專屬密語，就可以開始。", "success");
  elements.identityForm.reset();
  elements.textForm.reset();
  elements.photoForm.reset();
  elements.questCard.hidden = false;
  elements.introPanel.hidden = false;
  elements.finale.hidden = true;
  showStage("identityStage");
  elements.identityInput.focus();
}

function burstSparkles() {
  for (let index = 0; index < 28; index += 1) {
    const sparkle = elements.sparkleTemplate.content.firstElementChild.cloneNode(true);
    const angle = (Math.PI * 2 * index) / 28;
    const distance = 90 + Math.random() * 160;
    sparkle.style.left = `${window.innerWidth / 2}px`;
    sparkle.style.top = `${Math.min(window.innerHeight * 0.42, 360)}px`;
    sparkle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
  }
}

function setupPointerEffects() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover || !elements.cursorGlow) return;

  let lastSparkleAt = 0;
  let lastX = 0;
  let lastY = 0;

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;

    document.body.classList.add("has-pointer-glow");
    document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);

    const now = performance.now();
    const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
    if (now - lastSparkleAt > 95 && distance > 24) {
      createCursorSparkle(event.clientX, event.clientY);
      lastSparkleAt = now;
      lastX = event.clientX;
      lastY = event.clientY;
    }
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    document.body.classList.remove("has-pointer-glow");
  });
}

function createCursorSparkle(x, y) {
  const sparkle = document.createElement("span");
  const angle = Math.random() * Math.PI * 2;
  const distance = 12 + Math.random() * 24;
  sparkle.className = "cursor-sparkle";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.setProperty("--trail-x", `${Math.cos(angle) * distance}px`);
  sparkle.style.setProperty("--trail-y", `${Math.sin(angle) * distance}px`);
  document.body.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
}

function celebrateSmallWin() {
  setFeedback("答對了，下一關悄悄打開。", "success");
  burstSparkles();
}

elements.identityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    for (const friend of FRIENDS) {
      if (await hasHashMatch(elements.identityInput.value, friend.nicknameHashes)) {
        const letter = await decryptLetter(friend.encryptedLetter, elements.secretInput.value);
        state.currentFriend = friend;
        state.currentLetter = letter;
        loadFriendChallenge(friend, letter);
        setStep(1);
        showStage("textStage");
        celebrateSmallWin();
        elements.textAnswer.focus();
        return;
      }
    }
    setFeedback("身份或密語沒有對上。確認一下綽號和我給你的密語再試一次。", "error");
  } catch (error) {
    setFeedback("身份或密語沒有對上。確認一下綽號和我給你的密語再試一次。", "error");
  }
});

elements.textForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!state.currentFriend) return;
  const isCorrect = await hasHashMatch(elements.textAnswer.value, state.currentFriend.textAnswerHashes);
  if (!isCorrect) {
    setFeedback(`${state.currentLetter.displayName}，這題還差一點點。提示：${state.currentFriend.textPrompt}`, "error");
    return;
  }
  setStep(2);
  showStage("photoStage");
  celebrateSmallWin();
  elements.photoAnswer.focus();
});

elements.photoForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!state.currentFriend || !state.currentLetter) return;
  const isCorrect = await hasHashMatch(elements.photoAnswer.value, state.currentFriend.photoAnswerHashes);
  if (!isCorrect) {
    setFeedback(`${state.currentLetter.displayName}，再靠近一點點就猜到了。提示：${state.currentFriend.photoCaption}`, "error");
    return;
  }
  setFeedback("全答對了，信封打開中。", "success");
  setTimeout(() => revealFinale(state.currentLetter), 450);
});

elements.restartButton.addEventListener("click", resetGame);
setupPointerEffects();
setFeedback("輸入綽號和專屬密語，就可以開始。", "success");




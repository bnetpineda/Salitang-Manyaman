let height = 6; //number of guesses
let width = 4; //length of the word
let time = 10; // timeLimit (Seconds)
let row = 0; //current guess (attempt #)
let col = 0; //current letter for that attempt
let buyClue = 20;
let sold = false;
let letterClueCount = 0;
let buyLetter = document.getElementById("buyLetter");
let buyWord = document.getElementById("buyWord");
let shop = document.getElementById("shop");
let shopList = document.getElementById("shopList");
let clueWord = document.getElementById("clueWord");
let clueLetter = document.getElementById("clueLetter");
let back = document.getElementById("back");
let reward = 50;
let backYes = document.getElementById("backYes");
let backNo = document.getElementById("backNo");

shopList.style.display = "none";
backAsk.style.display = "none";

if (!localStorage.getItem("coins")) {
  localStorage.setItem("coins", "100");
}

let currentCoins = localStorage.getItem("coins");
document.getElementById("balance").textContent = "Coins: " + currentCoins;

var gameOver = false;

var wordList = [
  "puta",
  "pota",
  "tamu",
  "tamo",
  "naku",
  "paru",
  "paro",
  "lasu",
  "pabo",
  "eran",
  "ante",
  "dase",
  "ginu",
  "dyis",
  "keti",
  "keta",
  "aydo",
  "libu",
  "aldo",
  "asan",
  "atsi",
  "dala ",
  "ebun",
];

let guessList = [
  "puta",
  "pota",
  "tamu",
  "tamo",
  "naku",
  "paru",
  "paro",
  "lasu",
  "pabo",
  "eran",
  "ante",
  "dase",
  "ginu",
  "dyis",
  "keti",
  "keta",
  "aydo",
  "libu",
  "aldo",
  "asan",
  "atsi",
  "dala",
  "ebun",
  "abet",
  "abut",
  "ache",
  "alit",
  "ante",
  "arch",
  "aver",
  "avow",
  "bach",
  "back",
  "bade",
  "bail",
  "bait",
  "bake",
  "bale",
  "balk",
  "ball",
  "band",
  "bang",
  "bank",
  "barb",
  "bard",
  "bare",
  "barf",
  "bark",
  "base",
  "bash",
  "bask",
  "bate",
  "bawl",
  "bead",
  "beam",
  "bean",
  "bear",
  "beat",
  "beef",
  "been",
  "beep",
  "bell",
  "belt",
  "bend",
  "bent",
  "bias",
  "bide",
  "biff",
  "bike",
  "bilk",
  "bill",
  "bind",
  "bird",
  "birl",
  "birr",
  "bite",
  "bitt",
  "blab",
  "blat",
  "bled",
  "blew",
  "blob",
  "blot",
  "blow",
  "blub",
  "blue",
  "blur",
  "boat",
  "bode",
  "body",
  "boil",
  "bolt",
  "bomb",
  "bond",
  "bone",
  "bong",
  "bonk",
  "book",
  "boom",
  "boot",
  "bore",
  "born",
  "boss",
  "bowl",
  "brag",
  "bray",
  "bred",
  "brew",
  "brim",
  "buck",
  "buff",
  "bulk",
  "bull",
  "bump",
  "bung",
  "bunk",
  "bunt",
  "buoy",
  "burl",
  "burn",
  "burp",
  "burr",
  "bury",
  "bush",
  "busk",
  "buss",
  "bust",
  "busy",
  "butt",
  "buzz",
  "caca",
  "cage",
  "cake",
  "calk",
  "call",
  "calm",
  "came",
  "camp",
  "cane",
  "cant",
  "card",
  "care",
  "cart",
  "case",
  "cash",
  "cast",
  "cave",
  "cede",
  "cere",
  "chap",
  "char",
  "chat",
  "chaw",
  "chid",
  "chin",
  "chip",
  "chop",
  "chug",
  "chum",
  "cite",
  "clad",
  "clam",
  "clap",
  "claw",
  "clew",
  "clip",
  "clog",
  "clop",
  "clot",
  "cloy",
  "club",
  "clue",
  "coal",
  "coat",
  "coax",
  "cock",
  "code",
  "coif",
  "coil",
  "coin",
  "coke",
  "comb",
  "come",
  "comp",
  "cone",
  "conk",
  "cook",
  "cool",
  "coop",
  "cope",
  "copy",
  "cord",
  "core",
  "cork",
  "corn",
  "cosh",
  "cost",
  "cowl",
  "crab",
  "cram",
  "crap",
  "crew",
  "crib",
  "crop",
  "crow",
  "cube",
  "cuff",
  "cull",
  "curb",
  "cure",
  "curl",
  "cuss",
  "dado",
  "damn",
  "damp",
  "dang",
  "dare",
  "darn",
  "dart",
  "dash",
  "date",
  "daub",
  "dawn",
  "daze",
  "deal",
  "deck",
  "deed",
  "deem",
  "defy",
  "deke",
  "demo",
  "dent",
  "deny",
  "dial",
  "dice",
  "died",
  "diet",
  "dike",
  "dine",
  "ding",
  "disc",
  "dish",
  "disk",
  "diss",
  "dive",
  "dock",
  "doff",
  "dole",
  "done",
  "doom",
  "dope",
  "doss",
  "dote",
  "dove",
  "down",
  "doze",
  "drag",
  "draw",
  "drew",
  "drip",
  "drop",
  "drub",
  "drug",
  "drum",
  "duck",
  "duel",
  "dull",
  "dump",
  "dung",
  "dunk",
  "dupe",
  "dusk",
  "dust",
  "earn",
  "ease",
  "echo",
  "edge",
  "edit",
  "emit",
  "envy",
  "espy",
  "etch",
  "even",
  "exit",
  "face",
  "fade",
  "fail",
  "fake",
  "fall",
  "fare",
  "farm",
  "fart",
  "fast",
  "fate",
  "fawn",
  "faze",
  "fear",
  "feed",
  "feel",
  "fell",
  "felt",
  "fend",
  "fess",
  "fete",
  "feud",
  "file",
  "fill",
  "film",
  "find",
  "fine",
  "fink",
  "fire",
  "firm",
  "fish",
  "fist",
  "fizz",
  "flag",
  "flap",
  "flat",
  "flaw",
  "flay",
  "fled",
  "flee",
  "flew",
  "flex",
  "flip",
  "flit",
  "flog",
  "flop",
  "flow",
  "flub",
  "flux",
  "foal",
  "foam",
  "foil",
  "fold",
  "fond",
  "fool",
  "foot",
  "ford",
  "fork",
  "form",
  "foul",
  "fowl",
  "frag",
  "frap",
  "fray",
  "free",
  "fret",
  "frit",
  "fuel",
  "full",
  "fume",
  "fund",
  "funk",
  "furl",
  "fuse",
  "fuss",
  "futz",
  "gain",
  "gait",
  "gall",
  "game",
  "gang",
  "gaol",
  "gape",
  "garb",
  "gash",
  "gasp",
  "gate",
  "gave",
  "gawk",
  "gawp",
  "gaze",
  "gear",
  "geld",
  "gibe",
  "gift",
  "gild",
  "gimp",
  "gird",
  "give",
  "glom",
  "glow",
  "glue",
  "glug",
  "glut",
  "gnaw",
  "goad",
  "golf",
  "gone",
  "gong",
  "goof",
  "gore",
  "gown",
  "grab",
  "gray",
  "grew",
  "grey",
  "grid",
  "grin",
  "grip",
  "grit",
  "grow",
  "grub",
  "gull",
  "gulp",
  "gush",
  "gust",
  "gybe",
  "hack",
  "hail",
  "hale",
  "halt",
  "hand",
  "hang",
  "hare",
  "hark",
  "harm",
  "harp",
  "hash",
  "hasp",
  "hast",
  "hate",
  "hath",
  "haul",
  "have",
  "hawk",
  "haze",
  "head",
  "heal",
  "heap",
  "hear",
  "heat",
  "heed",
  "heel",
  "heft",
  "held",
  "helm",
  "help",
  "herd",
  "hewn",
  "hide",
  "hike",
  "hill",
  "hint",
  "hire",
  "hiss",
  "hive",
  "hoax",
  "hock",
  "hold",
  "hole",
  "home",
  "hone",
  "honk",
  "hood",
  "hoof",
  "hook",
  "hoop",
  "hoot",
  "hope",
  "horn",
  "hose",
  "host",
  "hove",
  "howl",
  "huff",
  "hulk",
  "hull",
  "hump",
  "hung",
  "hunt",
  "hurl",
  "hurt",
  "hush",
  "husk",
  "hymn",
  "hype",
  "idle",
  "inch",
  "iron",
  "itch",
  "jack",
  "jade",
  "jail",
  "jape",
  "jazz",
  "jeer",
  "jell",
  "jerk",
  "jest",
  "jibe",
  "jilt",
  "jinx",
  "jive",
  "join",
  "joke",
  "jolt",
  "josh",
  "juke",
  "jump",
  "junk",
  "kayo",
  "keel",
  "keen",
  "keep",
  "kept",
  "kern",
  "kick",
  "kill",
  "kink",
  "kiss",
  "kite",
  "knap",
  "knew",
  "knit",
  "knot",
  "know",
  "lace",
  "lack",
  "laid",
  "lain",
  "lamb",
  "lame",
  "land",
  "lard",
  "lark",
  "lash",
  "last",
  "laud",
  "lave",
  "laze",
  "lead",
  "leaf",
  "leak",
  "lean",
  "leap",
  "leer",
  "left",
  "lend",
  "lent",
  "levy",
  "lick",
  "lift",
  "like",
  "lilt",
  "lime",
  "limp",
  "line",
  "link",
  "lisp",
  "list",
  "live",
  "load",
  "loaf",
  "loan",
  "lock",
  "loft",
  "loll",
  "long",
  "look",
  "loom",
  "loop",
  "loot",
  "lope",
  "lord",
  "lose",
  "lost",
  "lour",
  "love",
  "lube",
  "luck",
  "luff",
  "luge",
  "lull",
  "lump",
  "lure",
  "lurk",
  "lust",
  "made",
  "mail",
  "maim",
  "make",
  "mark",
  "mask",
  "mate",
  "maul",
  "meet",
  "meld",
  "melt",
  "mend",
  "meow",
  "mess",
  "miff",
  "milk",
  "mime",
  "mind",
  "mine",
  "miss",
  "moan",
  "mock",
  "moor",
  "moot",
  "mope",
  "move",
  "muck",
  "muff",
  "muse",
  "mush",
  "must",
  "mute",
  "nail",
  "name",
  "near",
  "neck",
  "need",
  "nest",
  "nick",
  "nock",
  "nose",
  "note",
  "nuke",
  "numb",
  "obey",
  "ogle",
  "okay",
  "omen",
  "omit",
  "ooze",
  "open",
  "oust",
  "pace",
  "pack",
  "page",
  "pain",
  "pair",
  "palm",
  "pant",
  "pare",
  "park",
  "part",
  "pass",
  "pave",
  "pawn",
  "peak",
  "peal",
  "peck",
  "peek",
  "peel",
  "peep",
  "peer",
  "perk",
  "pick",
  "pile",
  "pine",
  "plan",
  "plat",
  "play",
  "plod",
  "plop",
  "plot",
  "plow",
  "plug",
  "pock",
  "poke",
  "pool",
  "pore",
  "pose",
  "post",
  "pour",
  "pout",
  "pray",
  "prim",
  "prod",
  "prop",
  "puff",
  "pull",
  "pulp",
  "pump",
  "purl",
  "purr",
  "push",
  "putt",
  "quip",
  "quit",
  "quiz",
  "race",
  "rage",
  "raid",
  "rain",
  "rake",
  "rang",
  "rank",
  "rant",
  "rape",
  "rate",
  "raze",
  "read",
  "ream",
  "reap",
  "reef",
  "reek",
  "reel",
  "rein",
  "rely",
  "rend",
  "rent",
  "rest",
  "rice",
  "ride",
  "rile",
  "ring",
  "riot",
  "rise",
  "risk",
  "rive",
  "roam",
  "roar",
  "rock",
  "rode",
  "roil",
  "roll",
  "romp",
  "roof",
  "room",
  "root",
  "rope",
  "rout",
  "rove",
  "ruin",
  "rule",
  "rush",
  "rust",
  "sack",
  "said",
  "sail",
  "sale",
  "salt",
  "sass",
  "sate",
  "save",
  "sawn",
  "scab",
  "scam",
  "scan",
  "scar",
  "scat",
  "scud",
  "scum",
  "seal",
  "seam",
  "seat",
  "seed",
  "seek",
  "seem",
  "seen",
  "seep",
  "sell",
  "send",
  "sent",
  "sewn",
  "shag",
  "sham",
  "shed",
  "ship",
  "shit",
  "shoe",
  "shoo",
  "shop",
  "shot",
  "show",
  "shun",
  "shut",
  "side",
  "sift",
  "sigh",
  "sign",
  "sing",
  "sink",
  "sire",
  "site",
  "size",
  "skew",
  "skid",
  "skim",
  "skin",
  "skip",
  "slab",
  "slag",
  "slam",
  "slap",
  "slat",
  "slay",
  "sled",
  "slew",
  "slid",
  "slim",
  "slip",
  "slit",
  "slog",
  "slop",
  "slot",
  "slow",
  "slue",
  "slug",
  "slum",
  "slur",
  "smut",
  "snag",
  "snap",
  "snip",
  "snow",
  "snub",
  "soak",
  "soap",
  "soar",
  "sock",
  "soil",
  "sold",
  "sole",
  "solo",
  "sort",
  "sour",
  "sown",
  "spam",
  "span",
  "spar",
  "spat",
  "spay",
  "sped",
  "spew",
  "spin",
  "spit",
  "spot",
  "spud",
  "spur",
  "stab",
  "stag",
  "star",
  "stay",
  "stem",
  "step",
  "stet",
  "stew",
  "stir",
  "stop",
  "stow",
  "stub",
  "stud",
  "stun",
  "suck",
  "suit",
  "sulk",
  "sung",
  "sunk",
  "surf",
  "swab",
  "swam",
  "swap",
  "swat",
  "sway",
  "swig",
  "swim",
  "swob",
  "swot",
  "swum",
  "tack",
  "tail",
  "talc",
  "talk",
  "tame",
  "tamp",
  "tank",
  "tape",
  "task",
  "taxi",
  "team",
  "tear",
  "teem",
  "tell",
  "tend",
  "tent",
  "term",
  "test",
  "text",
  "thaw",
  "thin",
  "thud",
  "tick",
  "tide",
  "tile",
  "tilt",
  "time",
  "ting",
  "tint",
  "tire",
  "toil",
  "told",
  "toll",
  "tone",
  "took",
  "tool",
  "toot",
  "tope",
  "tore",
  "torn",
  "toss",
  "tote",
  "tour",
  "tout",
  "tram",
  "trap",
  "tree",
  "trek",
  "trim",
  "trip",
  "trod",
  "trot",
  "true",
  "tube",
  "tuck",
  "tune",
  "turf",
  "turn",
  "tusk",
  "twin",
  "twit",
  "type",
  "undo",
  "urge",
  "vamp",
  "vary",
  "veer",
  "veil",
  "vein",
  "vend",
  "vent",
  "vest",
  "veto",
  "vide",
  "view",
  "visa",
  "vise",
  "void",
  "vote",
  "wade",
  "waft",
  "wage",
  "wail",
  "wait",
  "wake",
  "walk",
  "wall",
  "wane",
  "want",
  "ward",
  "warm",
  "warn",
  "warp",
  "wash",
  "waul",
  "wave",
  "wawl",
  "wean",
  "wear",
  "weed",
  "weep",
  "weld",
  "well",
  "welt",
  "wend",
  "went",
  "wept",
  "were",
  "wert",
  "wham",
  "whap",
  "whet",
  "whip",
  "whir",
  "whiz",
  "whop",
  "will",
  "wilt",
  "wine",
  "wink",
  "wipe",
  "wire",
  "wish",
  "wist",
  "wive",
  "woke",
  "wolf",
  "woof",
  "word",
  "wore",
  "work",
  "worm",
  "worn",
  "wove",
  "wrap",
  "writ",
  "xray",
  "yack",
  "yank",
  "yarn",
  "yaup",
  "yawn",
  "yawp",
  "yean",
  "yell",
  "yelp",
  "yoke",
  "yowl",
  "zero",
  "zest",
  "zing",
  "zone",
  "zonk",
  "zoom",
];

const fourengWords = [
  "whore",
  "later",
  "we",
  "ginger",
  "expression",
  "shrimp",
  "shrimp",
  "dissolve",
  "turkey",
  "ladder",
  "where",
  "mat",
  "master",
  "ten",
  "here",
  "there",
  "expression",
  "one thousand",
  "sun",
  "fish",
  "older sister",
  "carry",
  "egg",
];

guessList = guessList.concat(wordList);
let wordIndex = Math.floor(Math.random() * wordList.length);
var word = wordList[Math.floor(wordIndex)].toUpperCase();
console.log(word);

window.onload = function () {
  intialize();
};

shop.addEventListener("click", function () {
  if (shopList.style.display == "flex") {
    shopList.style.display = "none";
  } else {
    shopList.style.display = "flex";
  }
});

back.addEventListener("click", function () {
  if (backAsk.style.display == "flex") {
    backAsk.style.display = "none";
  } else {
    backAsk.style.display = "flex";
  }
});
backYes.addEventListener("click", function () {
  window.location.href = "../index.html";
});
backNo.addEventListener("click", function () {
  backAsk.style.display = "none";
});
buyLetter.addEventListener("click", function () {
  let currentCoins = localStorage.getItem("coins");
  letterClueCount++;
  if (currentCoins >= buyClue && letterClueCount < word.length) {
    currentCoins -= buyClue;
    localStorage.setItem("coins", currentCoins);
    document.getElementById("balance").textContent = "Coins: " + currentCoins;
    clueLetter.style.display = "flex";
    let letterClue = word.slice(0, letterClueCount);
    clueLetter.textContent = "Letter Clue: " + letterClue;
  } else {
    alert(
      "Insufficient Balance or You can only bought " +
        (word.length - 1) +
        " Letters Clue"
    );
  }
});
buyWord.addEventListener("click", function () {
  let currentCoins = localStorage.getItem("coins");
  if (currentCoins >= buyClue && sold == false) {
    currentCoins -= buyClue;
    localStorage.setItem("coins", currentCoins);
    document.getElementById("balance").textContent = "Coins: " + currentCoins;
    clueWord.style.display = "flex";
    clueWord.textContent = "English Word: " + fourengWords[wordIndex];
    sold = true;
  } else {
    alert("Insufficient Balance or You already Bought it");
  }
});

function intialize() {
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // Create the key board
  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  for (let i = 0; i < keyboard.length; i++) {
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for (let j = 0; j < currRow.length; j++) {
      let keyTile = document.createElement("div");

      let key = currRow[j];
      keyTile.innerText = key;
      if (key == "Enter") {
        keyTile.id = "Enter";
      } else if (key == "⌫") {
        keyTile.id = "Backspace";
      } else if ("A" <= key && key <= "Z") {
        keyTile.id = "Key" + key; // "Key" + "A";
      }

      keyTile.addEventListener("click", processKey);

      if (key == "Enter") {
        keyTile.classList.add("enter-key-tile");
      } else {
        keyTile.classList.add("key-tile");
      }
      keyboardRow.appendChild(keyTile);
    }
    document.getElementById("manyaman").appendChild(keyboardRow);
  }

  // Listen for Key Press
  document.addEventListener("keyup", (e) => {
    processInput(e);
  });
}

function updateTimer() {
  let timerElement = document.getElementById("timer");
  timerElement.textContent = time;
}

function processKey() {
  e = { code: this.id };
  processInput(e);
}

function processInput(e) {
  if (gameOver) return;

  // alert(e.code);
  if ("KeyA" <= e.code && e.code <= "KeyZ") {
    if (col < width) {
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      if (currTile.innerText == "") {
        currTile.innerText = e.code[3];
        col += 1;
      }
    }
  } else if (e.code == "Backspace") {
    if (0 < col && col <= width) {
      col -= 1;
    }
    let currTile = document.getElementById(
      row.toString() + "-" + col.toString()
    );
    currTile.innerText = "";
  } else if (e.code == "Enter") {
    update();
  }

  if (!gameOver && row == height) {
    gameOver = true;
    document.getElementById("answer").innerText = word;
  }
}

function update() {
  let guess = "";
  document.getElementById("answer").innerText = "";

  //string up the guesses into the word
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    guess += letter;
  }

  guess = guess.toLowerCase(); //case sensitive
  console.log(guess);

  if (!guessList.includes(guess)) {
    document.getElementById("answer").innerText = "Not in word list";
    return;
  }

  //start processing guess
  let correct = 0;

  let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  console.log(letterCount);

  //first iteration, check all the correct ones first
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    //Is it in the correct position?
    if (word[c] == letter) {
      currTile.classList.add("correct");

      let keyTile = document.getElementById("Key" + letter);
      keyTile.classList.remove("present");
      keyTile.classList.add("correct");

      correct += 1;
      letterCount[letter] -= 1; //deduct the letter count
    }

    if (correct == width) {
      gameOver = true;
      let currentCoins = localStorage.getItem("coins");
      console.log(currentCoins);
      let intCurrentCoins = parseInt(currentCoins);
      currentCoins = intCurrentCoins + reward;
      console.log(currentCoins);
      localStorage.setItem("coins", currentCoins);
      document.getElementById("balance").textContent = "Coins: " + currentCoins;
      document.getElementById("meaning").textContent =
        word + " means " + fourengWords[wordIndex];
      setTimeout(function () {
        location.reload();
      }, 5000);
    }
  }

  console.log(letterCount);
  //go again and mark which ones are present but in wrong position
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    // skip the letter if it has been marked correct
    if (!currTile.classList.contains("correct")) {
      //Is it in the word?         //make sure we don't double count
      if (word.includes(letter) && letterCount[letter] > 0) {
        currTile.classList.add("present");

        let keyTile = document.getElementById("Key" + letter);
        if (!keyTile.classList.contains("correct")) {
          keyTile.classList.add("present");
        }
        letterCount[letter] -= 1;
      } // Not in the word or (was in word but letters all used up to avoid overcount)
      else {
        currTile.classList.add("absent");
        let keyTile = document.getElementById("Key" + letter);
        keyTile.classList.add("absent");
      }
    }
  }
  row += 1; //start new row
  col = 0; //start at 0 for new row
}

var hiscores = hiscores || {};

hiscores.apiURL = "https://a7b4-2600-1700-9a91-ee10-00-49.ngrok.io";

hiscores.sName = [
    "Attack",
    "Defence",
    "Strength",
    "Constitution",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecrafting",
    "Hunter",
    "Construction",
    "Summoning"
]


var usersToSquash = [
    "nostalgianon",
    "s",
    "ducky",
    "swiperighttt",
    "f00b",
    "trevor_10x",
    "secktor",
    "moukanubi",
    "perfect",
    "dad",
    "shiver",
    "xexani",
    "greatpeepo",
    "dome_v2",
    "to_the_moon",
    "alex",
    "the_somalian",
    "atla",
    "shay",
    "hc_nix",
    "mewtt",
    "hc_bean",
    "nips",
    "bellful",
    "ryo",
    "bean",
    "luis",
    "jakey_m",
    "sia",
    "chernobyl",
    "von_hresvelg",
    "rokyen",
    "ray73",
    "jamix77",
    "death",
    "nemo125",
    "nobodyclp",
    "skeglord",
    "twistedmindz",
    "daniella",
    "boyd",
    "ancient",
    "lord0zeref",
    "charonchaos",
    "20",
    "findinggmo",
    "goon",
    "nuggles",
    "w_of_ww_only",
    "gman",
    "duck",
    "garoozis",
    "caviel",
    "gernum",
    "verac_obama",
    "cddc",
    "skittles",
    "damian",
    "bumboozler",
    "dudebro",
    "danbi",
    "reaper",
    "matthew",
    "sudoku",
    "carrot182",
    "hanskrebs",
    "stinkyshit",
    "von_kaiser",
    "poopstain",
    "snickerize",
    "mcfeels",
    "annie",
    "generolas121",
    "metaphor",
    "ventuzz",
    "unrealhaze",
    "effie_lyra_w",
    "jack_hack",
    "bodhisattva",
    "kiwi",
    "frogger",
    "notkarl",
    "kalessin",
    "macpoopum",
    "totulotu",
    "toxic",
    "amanitagreen",
    "you",
    "johnson",
    "ima_skiller",
    "piga",
    "powder",
    "annoyedsin",
    "polynesia",
    "zilz",
    "nik2u",
    "dmvox",
    "moonga",
    "mony",
    "iron_pain",
    "partyharder",
    "gracey",
    "superlich",
    "killercat564",
    "ardthesheep",
    "cabbagegod",
    "rabbit_juice",
    "slyyjacob",
    "stepzina4",
    "redsparr0w",
    "flegflog",
    "yrjontr",
    "davis",
    "kashuab",
    "legend",
    "slow_x20_im",
    "stardust",
    "mnms",
    "oneda",
    "mrslayer02",
    "trance",
    "jacklemonade",
    "krethis",
    "ligmardi",
    "justhaze",
    "thejewbear",
    "cap_kouhai",
    "1989",
    "sc0rz",
    "rank_2025",
    "fire_g0d_10",
    "vamz",
    "sangramoire",
    "exodia",
    "trail_blazer",
    "corrupt_emi",
    "ghostboytech",
    "pirie",
    "viskag",
    "test13",
    "don_deco",
    "jazzhand",
    "mycaiah",
    "cooldude0027",
    "dragonslayer",
    "nintendo_swe",
    "emarswish",
    "clickedez",
    "horgh",
    "salt",
    "blake",
    "umbravir",
    "eelis152",
    "mom",
    "orange_cat",
    "rinblade",
    "stopzera",
    "whisper",
    "kitb",
    "zakruise",
    "romaris",
    "pv",
    "cape",
    "avex",
    "trashmane",
    "nausicaa",
    "darkrainnn",
    "nix",
    "gains",
    "sagat",
    "amizez",
    "tbeddict",
    "star_alt3",
    "star_alt2",
    "sloweasymode",
    "shoopidawoop",
    "star_alt",
    "maugel",
    "jacob",
    "funny_rocks",
    "joaquin",
    "thorim608",
    "asembu",
    "nutmeg97",
    "i_skill_i",
    "spicy_mayo",
    "venser",
    "von_haar",
    "tinoforprez",
    "phale",
    "reesespieces",
    "destroy",
    "johnhaul",
    "legtastic",
    "not_a_bot",
    "travesty",
    "althaltariel",
    "druid",
    "clock",
    "wot",
    "pebol_ii",
    "rob_boss",
    "heckler",
    "celty",
    "bossman",
    "speedy_click",
    "real_red_uim",
    "polygoner",
    "escanaba",
    "azzuran",
    "the_frog",
    "smag",
    "iprax23",
    "nordika",
    "fearless",
    "mike_kummer",
    "slow_x10",
    "ontario",
    "odinn",
    "eximalis",
    "colovian",
    "no_u",
    "dansk_mjod",
    "akaprestonn",
    "runey",
    "nice",
    "dark_drift7",
    "bohemia60",
    "silverfish",
    "wildyjoe",
    "crisp",
    "gordie",
    "aluminumpp",
    "jegernorsk63",
    "amber",
    "edd",
    "dark98",
    "brownbricks",
    "dylan",
    "imouto",
    "holy_paladin",
    "bailey",
    "wirvyn",
    "sudds",
    "suitsa",
    "xamotdaor",
    "janglados",
    "happybell",
    "dino",
    "cronic",
    "larabeast",
    "raza",
    "test12",
    "windstryde",
    "luciano",
    "anton",
    "happybellhr",
    "goonv2",
    "undercover",
    "boop",
    "slow_x10_im",
    "mei",
    "trash_comics",
    "danheim",
    "b0om_bo0m",
    "mrbig",
    "nikita",
    "maint",
    "samham",
    "dream_desire",
    "slow_x20_uim",
    "o_valhalla",
    "indicator",
    "bigpengi",
    "nickj",
    "bfunny",
    "hexa408",
    "godwarskills",
    "sanderpro12",
    "hegapm",
    "julien03",
    "von_sirius",
    "not_stonkz",
    "where",
    "pleco",
    "wrekyoas",
    "insanity",
    "oliveoyl",
    "danewolf",
    "bustinanut",
    "aethus",
    "paru",
    "manga",
    "skryllz",
    "scaperman",
    "lovetehpanda",
    "xavim2000",
    "thealtalt2",
    "c0nello",
    "thealtalt",
    "squirrelly",
    "nortan",
    "chlex_superb",
    "mohawkscape",
    "notfishing",
    "camsao",
    "ana_rchy",
    "miuzore",
    "von_karma",
    "stoney",
    "biel1337",
    "forrest",
    "thierry",
    "eddy",
    "beauty",
    "rune_arrow",
    "bakehoven",
    "kaiser",
    "doneforever",
    "lowattacker",
    "zevalt",
    "icthlarin",
    "negus",
    "nostalgia",
    "calamity",
    "johnnyomm",
    "i2legit",
    "poop",
    "k1",
    "normee",
    "pyrrhonius",
    "musaaltariel",
    "carlos1",
    "schnee",
    "skecherrs",
    "amaxroma",
    "dungeon",
    "cuzudo",
    "pakatoke",
    "zorbon",
    "amelia",
    "h2okevin",
    "rynestone",
    "tacomunchies",
    "voxel",
    "cheesyonion",
    "mm",
    "xdbcrazyx",
    "011",
    "yberoqq",
    "iron_skald",
    "arrowhaze",
    "gold_farmer",
    "inject_soap",
    "silverhaze",
    "ptn",
    "ox_gen",
    "rothschild",
    "general",
    "a_stoat",
    "gnome",
    "euphoric",
    "q",
    "peepo",
    "elite_3",
    "tom123",
    "suul",
    "nostalgiaowo",
    "vetrropog",
    "kit_bee",
    "stinkmeaner",
    "lilith",
    "boots_boy",
    "quadzilla",
    "carlos",
    "98_fishing",
    "hunter",
    "markr25",
    "tobyman21",
    "jagex_mod",
    "not_josh",
    "iron_gan",
    "maxmani",
    "hero",
    "seako",
    "van_dyke",
    "nukem_dukem",
    "amina",
    "jonpin",
    "cloudkicker",
    "bigsnakeman1",
    "bridge",
    "tysonkush",
    "h",
    "lolberries",
    "kennakat5",
    "christoph",
    "brohan",
    "turtle",
    "tyhigh",
    "henkfreek",
    "esus",
    "edgewildonly",
    "bilburn",
    "schmittyboi",
    "blastedt",
    "harding",
    "log1legend",
    "nix_wigton",
    "hc_huojin",
    "1001crafter",
    "log_legend",
    "skillers_pr0",
    "xsinner",
    "lycius",
    "influences",
    "pazaz",
    "iron_arrow",
    "scoutpilgrim",
    "magerino",
    "lucaso",
    "testaccount",
    "slayeronly",
    "fig_bar",
    "cb",
    "ed",
    "bean3",
    "2009bush",
    "bean2",
    "kyrathir",
    "shiver2",
    "tatennis",
    "two4one",
    "99problems",
    "95",
    "espartacus_g",
    "gengar",
    "levi",
    "white_phat",
    "gloopster",
    "stephen",
    "kami",
    "cooldude0029",
    "freshpaka",
    "woodtracts",
    "cronky",
    "effie_lyra",
    "kiop",
    "brohans",
    "dodian",
    "bytecode",
    "aurora",
    "yami_yugi",
    "luxio",
    "nemo2",
    "glassy",
    "yio",
    "cat",
    "newmanowns",
    "iamdie",
    "rolling11",
    "chadathan",
    "repka",
    "iron_ragnar",
    "bionicrabbit",
    "huojin",
    "nemo",
    "fatscape",
    "einlanzer",
    "dude",
    "quester",
    "the_chopper",
    "the_cutter",
    "the_chipper",
    "hyplink",
    "alma",
    "paka1",
    "khnum",
    "beez120",
    "mashi2",
    "arwatp1",
    "iron_dog",
    "camdom35",
    "unclemarkush",
    "hetnim",
    "huge_trap",
    "the_splitter",
    "whatdo22",
    "alfadhir",
    "luke",
    "4fun",
    "boink",
    "myskilleracc",
    "smd",
    "vallohr",
    "dexter",
    "luuck2009",
    "wizard",
    "barrowruns",
    "e2hu9rfhu",
    "vanity",
    "daniel",
    "brendon",
    "peacheater",
    "ray_getard",
    "koala",
    "walnut97",
    "nosythsub",
    "winter",
    "advaita",
    "norgg",
    "lil_alt",
    "exi",
    "tyson",
    "smoothpaka",
    "niflheim",
    "rotten_sushi",
    "steelaxepro",
    "mining",
    "basedzore",
    "sudokue",
    "orochimaru",
    "freakthe",
    "nap",
    "ballsack",
    "kuris",
    "soshi",
    "charlie",
    "wendigo",
    "qwerty123",
    "ainsvillain",
    "adelmar",
    "mutimir",
    "ffresh",
    "garak_korgh",
    "r0binxh00d1",
    "ziosky",
    "sarah",
    "red_uim",
    "fishing",
    "contracts",
    "why_banned",
    "o",
    "str99f2p",
    "skill",
    "fork_lickers",
    "lee",
    "one_eye_god",
    "xmckennax",
    "elvryn",
    "smaggy",
    "neymar",
    "shy",
    "rob",
    "scizor",
    "cpfuzzy",
    "matest",
    "jonch",
    "cherry",
    "ggrrr2",
    "ogun",
    "shane",
    "react415",
    "natte_oma",
    "133755",
    "justin",
    "trypta",
    "y_t",
    "jetox",
    "casio",
    "sugma",
    "skiller119",
    "iphone_11",
    "test22",
    "mote_plox",
    "9",
    "chang",
    "autismcure",
    "ardipk",
    "hardcore_btw",
    "jakey",
    "felipe",
    "uim_pure",
    "2020scape",
    "fury",
    "xanxs",
    "devvo",
    "bearstew",
    "assalat3",
    "zerinha",
    "robbo44",
    "pumpkin",
    "4",
    "awwwman55",
    "a_a",
    "darks_bot_1",
    "the_man",
    "metasploit",
    "burry",
    "colby",
    "weed",
    "ardyk",
    "121jiggawatt",
    "irontyguy",
    "tylerbeg",
    "mrmaqic",
    "sslaptnhablh",
    "coreyy",
    "cjzl",
    "rudi",
    "dragonfire",
    "pixies",
    "brapfam",
    "kaymokay",
    "dropgo",
    "marijuanaman",
    "nitrocrate",
    "e",
    "corey",
    "saltyboi",
    "enricks",
    "runeshark",
    "breez",
    "pacatoke",
    "frog_king",
    "alt",
    "relliksar",
    "he_man",
    "necrophiliac",
    "lucky",
    "kebab",
    "rsb",
    "ember_sparks",
    "charmander",
    "manic",
    "lucas",
    "teajae",
    "dickhead",
    "gnomekid",
    "behelit",
    "henkie_v2",
    "the_cunt",
    "mehmet",
    "patrickbuit",
    "tysonbush415",
    "totalnoob",
    "dicksinme",
    "rainer_cx",
    "bepis_man",
    "aphelios",
    "beelax",
    "cole123",
    "draconyx",
    "lomax",
    "mommy",
    "mizery",
    "crime",
    "boots",
    "bobertp",
    "climjark",
    "all_father",
    "roaq",
    "coolguy",
    "daruom",
    "drakan",
    "fagmin2",
    "saradomin",
    "picahuss",
    "rockmunch",
    "cumtown",
    "whosthatpkmn",
    "megaox",
    "killbill42",
    "slayerz554",
    "peter",
    "mans",
    "warning",
    "saints1098",
    "king",
    "zyris_krith",
    "aksls",
    "reniferek",
    "fukinwanker",
    "guibibi",
    "nemural",
    "vitobambino",
    "drewdog",
    "sav",
    "latterdays",
    "plushy",
    "bubz",
    "mistborn",
    "snowdropzzz",
    "whittle91",
    "atsevrot",
    "big_sexy",
    "daddy",
    "thisgocrazy",
    "i3lacklisted",
    "gorilla_nuts",
    "snowy",
    "hehehe",
    "aswan8920",
    "deion",
    "skillerz",
    "player_2568",
    "123456",
    "adeon",
    "aspect",
    "bit_decay",
    "blastys",
    "blue_hween",
    "bored",
    "botscape00",
    "bursts",
    "bush",
    "cam",
    "cccccccv",
    "cheesyboy",
    "chim",
    "deathatlas2",
    "fe_mortem",
    "firstshotrio",
    "future",
    "green_hween",
    "green_phat",
    "half_duck",
    "ifigzz",
    "insertname",
    "iron_clumpsy",
    "iron_man",
    "jawarrior",
    "kaiser_kevin",
    "krillx",
    "kristoff",
    "kz4",
    "lone",
    "mohawk",
    "mr_rogue",
    "nijouh1",
    "pringles",
    "rank_300",
    "ronpaul",
    "rook",
    "rune",
    "sir_vant",
    "smokeda_weed",
    "tevil",
    "therealone",
    "trade",
    "tyson554",
    "varoon20",
    "vonswa",
    "w1cked",
    "woodiea",
    "xileon",
    "yellow_phat",
    "zenarith",
    "zetrunight",
    "zilos",
    "zoey"
]

hiscores.page = 0;
hiscores.world = 1;
hiscores.currentSkillId = "";

hiscores.tableData = [];
hiscores.defaultTableData = [];

hiscores.linkLeftTabSkillNames = (loc = "hiscores") => {
    hiscores.sName.forEach((skill, index) => {
        row = document.getElementsByClassName(`   ${skill}    ico`)[0].addEventListener("click", function (e) {
            e.preventDefault();
            window.location.replace(`./${loc}.html?skill=${index}${hiscores.getFiltersAsURLparams()}`);
        });
    });
    document.getElementsByClassName(`   Overall    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.linkLeftTabActivityNames = (loc = "activities") => {
    document.getElementsByClassName(`   Overall    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementsByClassName(`   Slayer    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?filter=combat${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementsByClassName(`   Summoning    ico`)[0].addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?filter=miscellaneous${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.initializePageArrows = (loc = "hiscores") => {
    document.getElementById("button-up").addEventListener("click", function (e) {
        e.preventDefault();
        if (hiscores.page > 0) {
            hiscores.page--;
        }
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/).join('');
        window.location.replace(`./${loc}.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
    document.getElementById("button-down").addEventListener("click", function (e) {
        e.preventDefault();
        hiscores.page++;
        let pageRemovedWindowLocation = window.location.search.split(/\?page=\d*/).join('');
        window.location.replace(`./${loc}.html${pageRemovedWindowLocation}?page=${hiscores.page}`);
    });
}

hiscores.initalizeRightsideButtons = (loc = "hiscores") => {
    document.getElementById("search_button").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./${loc}.html?player=${document.getElementById('search_name').value}${hiscores.getFiltersAsURLparams()}`);
    });

    document.getElementById("search_rank_submit").addEventListener("click", function (e) {
        e.preventDefault();
        if (document.getElementById('search_rank').value) {
            hiscores.loadUserTable(hiscores.defaultTableData[document.getElementById('search_rank').value - 1].username)
            hiscores.setHeadSkillText(hiscores.defaultTableData[document.getElementById('search_rank').value - 1].username + "'s ");
        }
        else {
            hiscores.loadDefaultHSTable();
        }
    });

    document.getElementById("filter_submit").addEventListener("click", function (e) {
        e.preventDefault();
        const ironparam = `?iron=${document.getElementById('check_iron').checked}`;
        const ultironparam = `?ultiron=${document.getElementById('check_ultiron').checked}`;
        const hcironparam = `?hciron=${document.getElementById('check_hciron').checked}`;
        const maxXP = `?maxXP=${document.getElementById("maxXP").value}`;
        const world = `?world=${getParam("world")}`;
        window.location.replace(`./${loc}.html${ironparam}${ultironparam}${hcironparam}${maxXP}${world}`);
    });

    if (document.getElementById("filter_clear")) {
        // Filter clear only appears when filters are present 
        document.getElementById("filter_clear").addEventListener("click", function (e) {
            e.preventDefault();
            let pageRemovedFiltersLocation = window.location.search.split(/\?iron=[A-z]+|\?ultiron=[A-z]+|\?hciron=[A-z]+|\?maxXP=[\d\.]+/).join('');
            window.location.replace(`./${loc}.html${pageRemovedFiltersLocation}`);
        })
    }
}

hiscores.changePlaqueWorld = () => {
    document.getElementById("worldplaqueid").innerText = `World ${hiscores.world} Hiscores`;
}

hiscores.updateLegendText = () => {
    //document.getElementById("worldxprate").innerText = `World ${hiscores.world} default XP rate: ${hiscores.world === 1 ? 1 : 5}x`;
}

hiscores.addSkillsAndActivityFilters = () => {
    document.getElementById("button-left").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./hiscores.html${hiscores.getFiltersAsURLparams()}`);
    });
    document.getElementById("button-right").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(`./activity.html${hiscores.getFiltersAsURLparams()}`);
    });
}

hiscores.filter = (result) => {
    return result.filter(result => {
        // No filters
        if (!getParam("iron")) {
            return true;
        }

        if (Number(result.exp_multiplier) !=  Number(10) || usersToSquash.includes(result.username)) {
            return false;
        }

        // If all ironman filters are false, show everyone (only filter by exp)
        if (getParam("iron") === "false" && getParam("ultiron") === "false" && getParam("hciron") === "false") {
            return true;
        }

        // If some ironman filters are true, only show those
        if (getParam("iron") === "true" && result.iron_mode == 1) {
            return true;
        }
        if (getParam("hciron") === "true" && result.iron_mode == 2) {
            return true;
        }
        if (getParam("ultiron") === "true" && result.iron_mode == 3) {
            return true;
        }

        return false;
    });
}

hiscores.getFiltersAsURLparams = () => {
    let params = getParam("iron") ? `?iron=${getParam("iron")}?hciron=${getParam("hciron")}?ultiron=${getParam("ultiron")}?maxXP=${getParam("maxXP")}` : "";
    params += getParam("world") ? `?world=${getParam("world")}` : "";
    return params;
}

hiscores.formatName = (name, ironStatus = 0, xpRate, aposS = false,) => {
    name = name.replaceAll("_", " ");
    name = name.replace(/(^\w|\s\w)/g, match => match.toUpperCase()); // Capitalize first letter of each word
    if (aposS) {
        if (!name.endsWith('s')) {
            name += "'s";
        } else {
            name += "'";
        }
    }

    name = hiscores.getIronIcon(ironStatus) + name;
    if ((getParam("world") === "1" && xpRate != 1) || (getParam("world") === "2" && xpRate != 5)) {
        return name + ` <span style="color: rgba(${Math.max(0, 80 - Math.pow(xpRate, 1.7) * 10)}, 0, 0, 0.4);">${xpRate >= 10 ? Math.round(xpRate) : xpRate}x</span>`;
    }
    return name;
}

hiscores.setHeadSkillIcon = (icon) => {
    if (icon.includes(".")) {
        document.getElementById("scores_head_icon").src = icon;
    } else {
        document.getElementById("scores_head_icon").src = `../../site/img/hiscores/skill_icon_${icon.toLowerCase()}1eccb.gif`;
    }
}

hiscores.setHeadSkillText = (text) => {
    document.getElementById("scores_head_skill").innerHTML = text;
}

hiscores.getIronIcon = (ironStatus) => {
    switch (ironStatus) {
        case "1":
        case 1:
            return `<img src="../../site/img/osrsimg/ironman.png" style="height: 11px"> `;
        case "2":
        case 2:
            return `<img src="../../site/img/osrsimg/hcim.png" style="height: 11px"> `;
        case "3":
        case 3:
            return `<img src="../../site/img/osrsimg/ultimateironman.png" style="height: 11px"> `;
        default:
            return "";
    }
}

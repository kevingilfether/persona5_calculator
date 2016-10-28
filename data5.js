var personae = [
  {"arcana": "Fool",       "level": 1,  "name": "Arsène"             },
  {"arcana": "Fool",       "level": 8,  "name": "Obariyon"           },
  {"arcana": "Fool",       "level": 16, "name": "High Pixie"         },
  {"arcana": "Fool",       "level": 20, "name": "Izanagi",           'dlc': true },
  {"arcana": "Fool",       "level": 23, "name": "Izanagi Picaro",    'dlc': true },
  {"arcana": "Fool",       "level": 26, "name": "Orpheus",           'dlc': true },
  {"arcana": "Fool",       "level": 29, "name": "Orpheus Picaro",    'dlc': true },
  {"arcana": "Fool",       "level": 32, "name": "Decarabia"          },
  {"arcana": "Fool",       "level": 38, "name": "Legion"             },
  {"arcana": "Fool",       "level": 42, "name": "Ose"                },
  {"arcana": "Fool",       "level": 49, "name": "Bugs",              'special': true, "note": "Mission 「淀んだ瞳のネトスト女子」 must be cleared"},
  {"arcana": "Fool",       "level": 50, "name": "Crystal Skull",     'rare': true },
  {"arcana": "Fool",       "level": 61, "name": "Dionysus"           },
  {"arcana": "Fool",       "level": 67, "name": "Black Frost",       'special': true, "note": "Mission 「イジメっ子を操る陰のアイツ」 must be cleared"},
  {"arcana": "Fool",       "level": 83, "name": "Vishnu",            'max': true },
  {"arcana": "Fool",       "level": 95, "name": "Satanael",          'special': true, "note": "Only available on NG+"},
  {"arcana": "Magician",   "level": 2,  "name": "Pyro Jack"          },
  {"arcana": "Magician",   "level": 11, "name": "Jack Frost"         },
  {"arcana": "Magician",   "level": 17, "name": "Nekomata"           },
  {"arcana": "Magician",   "level": 24, "name": "Sandman"            },
  {"arcana": "Magician",   "level": 28, "name": "Choronzon"          },
  {"arcana": "Magician",   "level": 43, "name": "Queen Mab"          },
  {"arcana": "Magician",   "level": 48, "name": "Rangda"             },
  {"arcana": "Magician",   "level": 59, "name": "Surt"               },
  {"arcana": "Magician",   "level": 76, "name": "Futsunushi",        'max': true },
  {"arcana": "Priestess",  "level": 6,  "name": "Silky"              },
  {"arcana": "Priestess",  "level": 11, "name": "Apsaras"            },
  {"arcana": "Priestess",  "level": 25, "name": "Koh-i-Noor",        'rare': true },
  {"arcana": "Priestess",  "level": 26, "name": "Isis"               },
  {"arcana": "Priestess",  "level": 40, "name": "Kikuri-Hime"        },
  {"arcana": "Priestess",  "level": 45, "name": "Scathach"           },
  {"arcana": "Priestess",  "level": 50, "name": "Sarasvati"          },
  {"arcana": "Priestess",  "level": 55, "name": "Skadi"              },
  {"arcana": "Priestess",  "level": 73, "name": "Cybele",            'max': true },
  {"arcana": "Empress",    "level": 15, "name": "Queen's Necklace",  'rare': true },
  {"arcana": "Empress",    "level": 20, "name": "Yaksini"            },
  {"arcana": "Empress",    "level": 26, "name": "Lamia"              },
  {"arcana": "Empress",    "level": 40, "name": "Hariti"             },
  {"arcana": "Empress",    "level": 50, "name": "Dakini"             },
  {"arcana": "Empress",    "level": 56, "name": "Titania"            },
  {"arcana": "Empress",    "level": 77, "name": "Kali"               },
  {"arcana": "Empress",    "level": 80, "name": "Mother Harlot",     'max': true },
  {"arcana": "Emperor",    "level": 10, "name": "Regent",            'rare': true },
  {"arcana": "Emperor",    "level": 16, "name": "Eligor"             },
  {"arcana": "Emperor",    "level": 28, "name": "Setanta"            },
  {"arcana": "Emperor",    "level": 36, "name": "Thoth"              },
  {"arcana": "Emperor",    "level": 44, "name": "Okuninushi"         },
  {"arcana": "Emperor",    "level": 52, "name": "Barong"             },
  {"arcana": "Emperor",    "level": 61, "name": "King Frost"         },
  {"arcana": "Emperor",    "level": 66, "name": "Oberon"             },
  {"arcana": "Emperor",    "level": 75, "name": "Baal"               },
  {"arcana": "Emperor",    "level": 82, "name": "Odin",              'max': true },
  {"arcana": "Hierophant", "level": 9,  "name": "Berith"             },
  {"arcana": "Hierophant", "level": 17, "name": "Orobas"             },
  {"arcana": "Hierophant", "level": 22, "name": "Feng Huang"         },
  {"arcana": "Hierophant", "level": 25, "name": "Anzu"               },
  {"arcana": "Hierophant", "level": 39, "name": "Unicorn"            },
  {"arcana": "Hierophant", "level": 42, "name": "Daisoujou"          },
  {"arcana": "Hierophant", "level": 63, "name": "Forneus"            },
  {"arcana": "Hierophant", "level": 67, "name": "Bishamonten"        },
  {"arcana": "Hierophant", "level": 76, "name": "Kohryu",            'special': true, 'max': true },
  {"arcana": "Lovers",     "level": 2,  "name": "Pixie"              },
  {"arcana": "Lovers",     "level": 6,  "name": "Saki Mitama"        },
  {"arcana": "Lovers",     "level": 19, "name": "Leanan Sidhe"       },
  {"arcana": "Lovers",     "level": 29, "name": "Ame no Uzume"       },
  {"arcana": "Lovers",     "level": 42, "name": "Kushinada-Hime"     },
  {"arcana": "Lovers",     "level": 50, "name": "Narcissus"          },
  {"arcana": "Lovers",     "level": 56, "name": "Parvati"            },
  {"arcana": "Lovers",     "level": 78, "name": "Raphael"            },
  {"arcana": "Lovers",     "level": 85, "name": "Ishtar",            'max': true },
  {"arcana": "Chariot",    "level": 3,  "name": "Agathion"           },
  {"arcana": "Chariot",    "level": 10, "name": "Slime"              },
  {"arcana": "Chariot",    "level": 16, "name": "Shiisaa"            },
  {"arcana": "Chariot",    "level": 21, "name": "Shiki-Ouji"         },
  {"arcana": "Chariot",    "level": 25, "name": "Kin-Ki"             },
  {"arcana": "Chariot",    "level": 31, "name": "Ara Mitama"         },
  {"arcana": "Chariot",    "level": 39, "name": "White Rider"        },
  {"arcana": "Chariot",    "level": 55, "name": "Cerberus"           },
  {"arcana": "Chariot",    "level": 64, "name": "Thor"               },
  {"arcana": "Chariot",    "level": 86, "name": "Chi You",           'special': true, 'max': true },
  {"arcana": "Justice",    "level": 12, "name": "Angel"              },
  {"arcana": "Justice",    "level": 16, "name": "Archangel"          },
  {"arcana": "Justice",    "level": 29, "name": "Principality"       },
  {"arcana": "Justice",    "level": 41, "name": "Power"              },
  {"arcana": "Justice",    "level": 60, "name": "Melchizedek"        },
  {"arcana": "Justice",    "level": 68, "name": "Dominion"           },
  {"arcana": "Justice",    "level": 71, "name": "Throne",            'special': true, "note": "Needs Strength cooperation rank 5 to be fused"},
  {"arcana": "Justice",    "level": 81, "name": "Uriel"              },
  {"arcana": "Justice",    "level": 89, "name": "Metatron",          'special': true, 'max': true },
  {"arcana": "Hermit",     "level": 4,  "name": "Bicorn"             },
  {"arcana": "Hermit",     "level": 9,  "name": "Koropokkuru"        },
  {"arcana": "Hermit",     "level": 13, "name": "Ippon-Datara"       },
  {"arcana": "Hermit",     "level": 17, "name": "Sudama"             },
  {"arcana": "Hermit",     "level": 24, "name": "Naga"               },
  {"arcana": "Hermit",     "level": 35, "name": "Arahabaki"          },
  {"arcana": "Hermit",     "level": 42, "name": "Kumbhanda"          },
  {"arcana": "Hermit",     "level": 49, "name": "Koumokuten"         },
  {"arcana": "Hermit",     "level": 56, "name": "Kurama Tengu"       },
  {"arcana": "Hermit",     "level": 75, "name": "Ongyo-Ki",          'special': true, 'max': true },
  {"arcana": "Fortune",    "level": 20, "name": "Stone of Scone",    'rare': true },
  {"arcana": "Fortune",    "level": 26, "name": "Clotho"             },
  {"arcana": "Fortune",    "level": 30, "name": "Ariadne",           'dlc': true },
  {"arcana": "Fortune",    "level": 34, "name": "Lachesis"           },
  {"arcana": "Fortune",    "level": 39, "name": "Atropos"            },
  {"arcana": "Fortune",    "level": 42, "name": "Ariadne Picaro",    'dlc': true },
  {"arcana": "Fortune",    "level": 46, "name": "Fortuna"            },
  {"arcana": "Fortune",    "level": 52, "name": "Norn"               },
  {"arcana": "Fortune",    "level": 56, "name": "Asterius",          'dlc': true },
  {"arcana": "Fortune",    "level": 62, "name": "Asterius Picaro",   'dlc': true },
  {"arcana": "Fortune",    "level": 69, "name": "Lakshmi",           'max': true },
  {"arcana": "Strength",   "level": 6,  "name": "Kelpie"             },
  {"arcana": "Strength",   "level": 14, "name": "Kusi Mitama"        },
  {"arcana": "Strength",   "level": 19, "name": "Oni"                },
  {"arcana": "Strength",   "level": 24, "name": "Rakshasa"           },
  {"arcana": "Strength",   "level": 30, "name": "Orlov",             'rare': true },
  {"arcana": "Strength",   "level": 31, "name": "Zouchouten"         },
  {"arcana": "Strength",   "level": 44, "name": "Valkyrie"           },
  {"arcana": "Strength",   "level": 69, "name": "Siegfried"          },
  {"arcana": "Strength",   "level": 80, "name": "Zaou-Gongen",       'max': true },
  {"arcana": "Hanged Man", "level": 9,  "name": "Hua Po"             },
  {"arcana": "Hanged Man", "level": 14, "name": "Inugami"            },
  {"arcana": "Hanged Man", "level": 21, "name": "Orthrus"            },
  {"arcana": "Hanged Man", "level": 29, "name": "Take-Minakata"      },
  {"arcana": "Hanged Man", "level": 35, "name": "Emperor's Amulet",  'rare': true },
  {"arcana": "Hanged Man", "level": 42, "name": "Hecatoncheir"       },
  {"arcana": "Hanged Man", "level": 60, "name": "Moloch"             },
  {"arcana": "Hanged Man", "level": 68, "name": "Vasuki",            'special': true, "note": "Needs Strength cooperation rank 1 to be fused"},
  {"arcana": "Hanged Man", "level": 82, "name": "Attis",             'max': true },
  {"arcana": "Death",      "level": 3,  "name": "Mandrake"           },
  {"arcana": "Death",      "level": 9,  "name": "Mokoi"              },
  {"arcana": "Death",      "level": 19, "name": "Matador"            },
  {"arcana": "Death",      "level": 29, "name": "Pisaca"             },
  {"arcana": "Death",      "level": 39, "name": "Hell Biker"         },
  {"arcana": "Death",      "level": 40, "name": "Hope Diamond",      'rare': true },
  {"arcana": "Death",      "level": 53, "name": "Pale Rider"         },
  {"arcana": "Death",      "level": 62, "name": "Cherbonog"          },
  {"arcana": "Death",      "level": 65, "name": "Thanatos",          'dlc': true },
  {"arcana": "Death",      "level": 69, "name": "Thanatos Picaro",   'dlc': true },
  {"arcana": "Death",      "level": 72, "name": "Moth"               },
  {"arcana": "Death",      "level": 79, "name": "Alice",             'special': true, 'max': true },
  {"arcana": "Temperance", "level": 7,  "name": "Genbu"              },
  {"arcana": "Temperance", "level": 11, "name": "Koppa Tengu"        },
  {"arcana": "Temperance", "level": 15, "name": "Makami"             },
  {"arcana": "Temperance", "level": 20, "name": "Nigi Mitama"        },
  {"arcana": "Temperance", "level": 25, "name": "Jikokuten"          },
  {"arcana": "Temperance", "level": 33, "name": "Mithra"             },
  {"arcana": "Temperance", "level": 49, "name": "Byakko"             },
  {"arcana": "Temperance", "level": 55, "name": "Raja Naga"          },
  {"arcana": "Temperance", "level": 62, "name": "Seiryu"             },
  {"arcana": "Temperance", "level": 77, "name": "Gabriel"            },
  {"arcana": "Temperance", "level": 84, "name": "Ardha",             'special': true, 'max': true },
  {"arcana": "Devil",      "level": 5,  "name": "Incubus"            },
  {"arcana": "Devil",      "level": 10, "name": "Andras"             },
  {"arcana": "Devil",      "level": 25, "name": "Flauros",           'special': true, "note": "Needs Strength cooperation rank 1 to be fused"},
  {"arcana": "Devil",      "level": 32, "name": "Lilim"              },
  {"arcana": "Devil",      "level": 43, "name": "Pazuzu"             },
  {"arcana": "Devil",      "level": 58, "name": "Baphomet"           },
  {"arcana": "Devil",      "level": 62, "name": "Nebiros"            },
  {"arcana": "Devil",      "level": 68, "name": "Belial"             },
  {"arcana": "Devil",      "level": 84, "name": "Beelzebub",         'max': true },
  {"arcana": "Tower",      "level": 32, "name": "Jatayu"             },
  {"arcana": "Tower",      "level": 37, "name": "Belphegor"          },
  {"arcana": "Tower",      "level": 41, "name": "Red Rider"          },
  {"arcana": "Tower",      "level": 44, "name": "Magatsu-Izanagi",   'dlc': true },
  {"arcana": "Tower",      "level": 48, "name": "Magatsu-Izanagi Picaro", 'dlc': true },
  {"arcana": "Tower",      "level": 51, "name": "Seth",              'special': true, "note": "Needs Strength cooperation rank 1 to be fused"},
  {"arcana": "Tower",      "level": 59, "name": "Black Rider"        },
  {"arcana": "Tower",      "level": 73, "name": "Mara"               },
  {"arcana": "Tower",      "level": 79, "name": "Yoshitsune",        'special': true, "note": "Needs Strength cooperation rank 5 to be fused"},
  {"arcana": "Tower",      "level": 85, "name": "Mada",              'max': true },
  {"arcana": "Star",       "level": 11, "name": "Kodama"             },
  {"arcana": "Star",       "level": 23, "name": "Fuu-Ki"             },
  {"arcana": "Star",       "level": 30, "name": "Neko Shogun",       'special': true, "note": "Needs Strength cooperation rank 1 to be fused"},
  {"arcana": "Star",       "level": 36, "name": "Kaiwan"             },
  {"arcana": "Star",       "level": 43, "name": "Ananta"             },
  {"arcana": "Star",       "level": 52, "name": "Garuda"             },
  {"arcana": "Star",       "level": 64, "name": "Hanuman"            },
  {"arcana": "Star",       "level": 67, "name": "Cu Chulainn"        },
  {"arcana": "Star",       "level": 80, "name": "Sraosha",           'special': true, "note": "Needs Strength cooperation rank 5 to be fused"},
  {"arcana": "Star",       "level": 93, "name": "Lucifer",           'special': true, 'max': true },
  {"arcana": "Moon",       "level": 7,  "name": "Succubus"           },
  {"arcana": "Moon",       "level": 12, "name": "Onmoraki"           },
  {"arcana": "Moon",       "level": 16, "name": "Kaguya",            'dlc': true },
  {"arcana": "Moon",       "level": 20, "name": "Nue"                },
  {"arcana": "Moon",       "level": 24, "name": "Sui-Ki"             },
  {"arcana": "Moon",       "level": 25, "name": "Kaguya Picaro",     'dlc': true },
  {"arcana": "Moon",       "level": 29, "name": "Black Ooze"         },
  {"arcana": "Moon",       "level": 33, "name": "Mothman"            },
  {"arcana": "Moon",       "level": 44, "name": "Girimehkala"        },
  {"arcana": "Moon",       "level": 50, "name": "Tsukiyomi",         'dlc': true },
  {"arcana": "Moon",       "level": 55, "name": "Tsukiyomi Picaro",  'dlc': true },
  {"arcana": "Moon",       "level": 60, "name": "Lilith"             },
  {"arcana": "Moon",       "level": 75, "name": "Sandalphon",        'max': true },
  {"arcana": "Sun",        "level": 19, "name": "Suzaku"             },
  {"arcana": "Sun",        "level": 39, "name": "Mithras"            },
  {"arcana": "Sun",        "level": 42, "name": "Yurlungur"          },
  {"arcana": "Sun",        "level": 49, "name": "Horus"              },
  {"arcana": "Sun",        "level": 53, "name": "Ganesha"            },
  {"arcana": "Sun",        "level": 57, "name": "Yatagarasu"         },
  {"arcana": "Sun",        "level": 63, "name": "Quetzalcoatl"       },
  {"arcana": "Sun",        "level": 76, "name": "Asura-Ou",          'special': true, 'max': true },
  {"arcana": "Judgement",  "level": 37, "name": "Anubis"             },
  {"arcana": "Judgement",  "level": 59, "name": "Trumpeter",         'special': true, "note": "Needs Strength cooperation rank 5 to be fused"},
  {"arcana": "Judgement",  "level": 64, "name": "Yamata no Orochi"   },
  {"arcana": "Judgement",  "level": 74, "name": "Abaddon"            },
  {"arcana": "Judgement",  "level": 81, "name": "Messiah",           'dlc': true },
  {"arcana": "Judgement",  "level": 82, "name": "Shiva",             'special': true },
  {"arcana": "Judgement",  "level": 87, "name": "Michael",           'special': true, "note": "Needs Strength cooperation rank 5 to be fused"},
  {"arcana": "Judgement",  "level": 90, "name": "Messiah Picaro",    'dlc': true },
  {"arcana": "Judgement",  "level": 92, "name": "Satan",             'max': true }
];

var rarePersonae = ["Regent", "Queen's Necklace", "Stone of Scone", "Koh-i-Noor", "Orlov", "Emperor's Amulet", "Hope Diamond", "Crystal Skull"];
var rareCombos = {
  "Fool":       [-1, +1, -1, +1, -1, -1, +1, +2],
  "Magician":   [+1, -1, +2, -1, +1, +1, +1, +1],
  "Priestess":  [-1, +1, -1, +2, +1, -1, +1, +1],
  "Empress":    [-1, +2, -1, +1, +1, +1, -1, +1],
  "Emperor":    [+2, -1, +1, -1, -1, +1, +1, -1],
  "Hierophant": [+1, -1, +1, -2, +1, -1, -1, -1],
  "Lovers":     [-1, +1, -1, +1, -1, -1, -2, +1],
  "Chariot":    [+1, -1, +1, -1, +1, -2, -1, -1],
  "Justice":    [+1, -1, -1, +2, +1, +1, -1, +1],
  "Hermit":     [+2, -1, -1, +1, +1, +1, +1, -2],
  "Fortune":    [+1, -1, +2, -1, -2, -1, +1, -1],
  "Strength":   [-1, +1, -2, +1, +1, +1, -1, -1],
  "Hanged Man": [+1, +1, -1, -1, +1, +2, -1, -1],
  "Death":      [+1, -1, +1, +1, -1, -1, +2, +1],
  "Temperance": [-1, +1, -1, -1, +1, +1, -1, +2],
  "Devil":      [-2, +1, -1, +1, +1, +2, -1, -1],
  "Tower":      [-1, -2, +1, +1, +1, +1, -1, -1],
  "Star":       [+1, -1, +1, -1, +1, -1, +1, +1],
  "Moon":       [-1, +2, +1, -1, +1, -1, -1, -1],
  "Sun":        [+1, -1, -1, +1, +1, -1, +2, +1],
  "Judgement":  [-1, -1, +1, -1, +1, +1, -1, -1]
};

var arcana2Combos = [
    {'source': ['Fool',       'Fool'        ], 'result': 'Fool'        },
    {'source': ['Fool',       'Magician'    ], 'result': 'Death'       },
    {'source': ['Fool',       'Priestess'   ], 'result': 'Moon'        },
    {'source': ['Fool',       'Empress'     ], 'result': 'Hanged Man'  },
    {'source': ['Fool',       'Emperor'     ], 'result': 'Temperance'  },
    {'source': ['Fool',       'Hierophant'  ], 'result': 'Hermit'      },
    {'source': ['Fool',       'Lovers'      ], 'result': 'Chariot'     },
    {'source': ['Fool',       'Chariot'     ], 'result': 'Moon'        },
    {'source': ['Fool',       'Justice'     ], 'result': 'Star'        },
    {'source': ['Fool',       'Hermit'      ], 'result': 'Priestess'   },
    {'source': ['Fool',       'Fortune'     ], 'result': 'Lovers'      },
    {'source': ['Fool',       'Strength'    ], 'result': 'Death'       },
    {'source': ['Fool',       'Hanged Man'  ], 'result': 'Tower'       },
    {'source': ['Fool',       'Death'       ], 'result': 'Strength'    },
    {'source': ['Fool',       'Temperance'  ], 'result': 'Hierophant'  },
    {'source': ['Fool',       'Devil'       ], 'result': 'Temperance'  },
    {'source': ['Fool',       'Tower'       ], 'result': 'Empress'     },
    {'source': ['Fool',       'Star'        ], 'result': 'Magician'    },
    {'source': ['Fool',       'Moon'        ], 'result': 'Justice'     },
    {'source': ['Fool',       'Sun'         ], 'result': 'Justice'     },
    {'source': ['Fool',       'Judgement'   ], 'result': 'Sun'         },
    {'source': ['Magician',   'Magician'    ], 'result': 'Magician'    },
    {'source': ['Magician',   'Priestess'   ], 'result': 'Temperance'  },
    {'source': ['Magician',   'Empress'     ], 'result': 'Justice'     },
    {'source': ['Magician',   'Emperor'     ], 'result': 'Hanged Man'  },
    {'source': ['Magician',   'Hierophant'  ], 'result': 'Death'       },
    {'source': ['Magician',   'Lovers'      ], 'result': 'Devil'       },
    {'source': ['Magician',   'Chariot'     ], 'result': 'Priestess'   },
    {'source': ['Magician',   'Justice'     ], 'result': 'Emperor'     },
    {'source': ['Magician',   'Hermit'      ], 'result': 'Lovers'      },
    {'source': ['Magician',   'Fortune'     ], 'result': 'Justice'     },
    {'source': ['Magician',   'Strength'    ], 'result': 'Fool'        },
    {'source': ['Magician',   'Hanged Man'  ], 'result': 'Empress'     },
    {'source': ['Magician',   'Death'       ], 'result': 'Hermit'      },
    {'source': ['Magician',   'Temperance'  ], 'result': 'Chariot'     },
    {'source': ['Magician',   'Devil'       ], 'result': 'Hierophant'  },
    {'source': ['Magician',   'Tower'       ], 'result': 'Temperance'  },
    {'source': ['Magician',   'Star'        ], 'result': 'Priestess'   },
    {'source': ['Magician',   'Moon'        ], 'result': 'Lovers'      },
    {'source': ['Magician',   'Sun'         ], 'result': 'Hierophant'  },
    {'source': ['Magician',   'Judgement'   ], 'result': 'Strength'    },
    {'source': ['Priestess',  'Priestess'   ], 'result': 'Priestess'   },
    {'source': ['Priestess',  'Empress'     ], 'result': 'Emperor'     },
    {'source': ['Priestess',  'Emperor'     ], 'result': 'Empress'     },
    {'source': ['Priestess',  'Hierophant'  ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Lovers'      ], 'result': 'Fortune'     },
    {'source': ['Priestess',  'Chariot'     ], 'result': 'Hierophant'  },
    {'source': ['Priestess',  'Justice'     ], 'result': 'Death'       },
    {'source': ['Priestess',  'Hermit'      ], 'result': 'Temperance'  },
    {'source': ['Priestess',  'Fortune'     ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Strength'    ], 'result': 'Devil'       },
    {'source': ['Priestess',  'Hanged Man'  ], 'result': 'Death'       },
    {'source': ['Priestess',  'Death'       ], 'result': 'Magician'    },
    {'source': ['Priestess',  'Temperance'  ], 'result': 'Devil'       },
    {'source': ['Priestess',  'Devil'       ], 'result': 'Moon'        },
    {'source': ['Priestess',  'Tower'       ], 'result': 'Hanged Man'  },
    {'source': ['Priestess',  'Star'        ], 'result': 'Hermit'      },
    {'source': ['Priestess',  'Moon'        ], 'result': 'Hierophant'  },
    {'source': ['Priestess',  'Sun'         ], 'result': 'Chariot'     },
    {'source': ['Priestess',  'Judgement'   ], 'result': 'Justice'     },
    {'source': ['Empress',    'Empress'     ], 'result': 'Empress'     },
    {'source': ['Empress',    'Emperor'     ], 'result': 'Justice'     },
    {'source': ['Empress',    'Hierophant'  ], 'result': 'Fool'        },
    {'source': ['Empress',    'Lovers'      ], 'result': 'Judgement'   },
    {'source': ['Empress',    'Chariot'     ], 'result': 'Star'        },
    {'source': ['Empress',    'Justice'     ], 'result': 'Lovers'      },
    {'source': ['Empress',    'Hermit'      ], 'result': 'Strength'    },
    {'source': ['Empress',    'Fortune'     ], 'result': 'Hermit'      },
    {'source': ['Empress',    'Strength'    ], 'result': 'Chariot'     },
    {'source': ['Empress',    'Hanged Man'  ], 'result': 'Priestess'   },
    {'source': ['Empress',    'Death'       ], 'result': 'Fool'        },
    {'source': ['Empress',    'Temperance'  ], 'result': 'Priestess'   },
    {'source': ['Empress',    'Devil'       ], 'result': 'Sun'         },
    {'source': ['Empress',    'Tower'       ], 'result': 'Emperor'     },
    {'source': ['Empress',    'Star'        ], 'result': 'Lovers'      },
    {'source': ['Empress',    'Moon'        ], 'result': 'Fortune'     },
    {'source': ['Empress',    'Sun'         ], 'result': 'Tower'       },
    {'source': ['Empress',    'Judgement'   ], 'result': 'Emperor'     },
    {'source': ['Emperor',    'Emperor'     ], 'result': 'Emperor'     },
    {'source': ['Emperor',    'Hierophant'  ], 'result': 'Fortune'     },
    {'source': ['Emperor',    'Lovers'      ], 'result': 'Fool'        },
    {'source': ['Emperor',    'Chariot'     ], 'result': 'Strength'    },
    {'source': ['Emperor',    'Justice'     ], 'result': 'Chariot'     },
    {'source': ['Emperor',    'Hermit'      ], 'result': 'Hierophant'  },
    {'source': ['Emperor',    'Fortune'     ], 'result': 'Sun'         },
    {'source': ['Emperor',    'Strength'    ], 'result': 'Tower'       },
    {'source': ['Emperor',    'Hanged Man'  ], 'result': 'Devil'       },
    {'source': ['Emperor',    'Death'       ], 'result': 'Hermit'      },
    {'source': ['Emperor',    'Temperance'  ], 'result': 'Devil'       },
    {'source': ['Emperor',    'Devil'       ], 'result': 'Justice'     },
    {'source': ['Emperor',    'Tower'       ], 'result': 'Star'        },
    {'source': ['Emperor',    'Star'        ], 'result': 'Lovers'      },
    {'source': ['Emperor',    'Moon'        ], 'result': 'Tower'       },
    {'source': ['Emperor',    'Sun'         ], 'result': 'Judgement'   },
    {'source': ['Emperor',    'Judgement'   ], 'result': 'Priestess'   },
    {'source': ['Hierophant', 'Hierophant'  ], 'result': 'Hierophant'  },
    {'source': ['Hierophant', 'Lovers'      ], 'result': 'Strength'    },
    {'source': ['Hierophant', 'Chariot'     ], 'result': 'Star'        },
    {'source': ['Hierophant', 'Justice'     ], 'result': 'Hanged Man'  },
    {'source': ['Hierophant', 'Hermit'      ], 'result': 'Fortune'     },
    {'source': ['Hierophant', 'Fortune'     ], 'result': 'Justice'     },
    {'source': ['Hierophant', 'Strength'    ], 'result': 'Fool'        },
    {'source': ['Hierophant', 'Hanged Man'  ], 'result': 'Sun'         },
    {'source': ['Hierophant', 'Death'       ], 'result': 'Chariot'     },
    {'source': ['Hierophant', 'Temperance'  ], 'result': 'Death'       },
    {'source': ['Hierophant', 'Devil'       ], 'result': 'Hanged Man'  },
    {'source': ['Hierophant', 'Tower'       ], 'result': 'Judgement'   },
    {'source': ['Hierophant', 'Star'        ], 'result': 'Tower'       },
    {'source': ['Hierophant', 'Moon'        ], 'result': 'Priestess'   },
    {'source': ['Hierophant', 'Sun'         ], 'result': 'Lovers'      },
    {'source': ['Hierophant', 'Judgement'   ], 'result': 'Emperor'     },
    {'source': ['Lovers',     'Lovers'      ], 'result': 'Lovers'      },
    {'source': ['Lovers',     'Chariot'     ], 'result': 'Temperance'  },
    {'source': ['Lovers',     'Justice'     ], 'result': 'Judgement'   },
    {'source': ['Lovers',     'Hermit'      ], 'result': 'Chariot'     },
    {'source': ['Lovers',     'Fortune'     ], 'result': 'Strength'    },
    {'source': ['Lovers',     'Strength'    ], 'result': 'Death'       },
    {'source': ['Lovers',     'Hanged Man'  ], 'result': 'Sun'         },
    {'source': ['Lovers',     'Death'       ], 'result': 'Temperance'  },
    {'source': ['Lovers',     'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Lovers',     'Devil'       ], 'result': 'Moon'        },
    {'source': ['Lovers',     'Tower'       ], 'result': 'Empress'     },
    {'source': ['Lovers',     'Star'        ], 'result': 'Chariot'     },
    {'source': ['Lovers',     'Moon'        ], 'result': 'Magician'    },
    {'source': ['Lovers',     'Sun'         ], 'result': 'Empress'     },
    {'source': ['Lovers',     'Judgement'   ], 'result': 'Hanged Man'  },
    {'source': ['Chariot',    'Chariot'     ], 'result': 'Chariot'     },
    {'source': ['Chariot',    'Justice'     ], 'result': 'Moon'        },
    {'source': ['Chariot',    'Hermit'      ], 'result': 'Devil'       },
    {'source': ['Chariot',    'Fortune'     ], 'result': 'Priestess'   },
    {'source': ['Chariot',    'Strength'    ], 'result': 'Hermit'      },
    {'source': ['Chariot',    'Hanged Man'  ], 'result': 'Fool'        },
    {'source': ['Chariot',    'Death'       ], 'result': 'Devil'       },
    {'source': ['Chariot',    'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Chariot',    'Devil'       ], 'result': 'Temperance'  },
    {'source': ['Chariot',    'Tower'       ], 'result': 'Fortune'     },
    {'source': ['Chariot',    'Star'        ], 'result': 'Moon'        },
    {'source': ['Chariot',    'Moon'        ], 'result': 'Lovers'      },
    {'source': ['Chariot',    'Sun'         ], 'result': 'Priestess'   },
    {'source': ['Chariot',    'Judgement'   ], 'result': 'Hierophant'  },
    {'source': ['Justice',    'Justice'     ], 'result': 'Justice'     },
    {'source': ['Justice',    'Hermit'      ], 'result': 'Magician'    },
    {'source': ['Justice',    'Fortune'     ], 'result': 'Emperor'     },
    {'source': ['Justice',    'Strength'    ], 'result': 'Hierophant'  },
    {'source': ['Justice',    'Hanged Man'  ], 'result': 'Lovers'      },
    {'source': ['Justice',    'Death'       ], 'result': 'Fool'        },
    {'source': ['Justice',    'Temperance'  ], 'result': 'Emperor'     },
    {'source': ['Justice',    'Devil'       ], 'result': 'Fool'        },
    {'source': ['Justice',    'Tower'       ], 'result': 'Sun'         },
    {'source': ['Justice',    'Star'        ], 'result': 'Empress'     },
    {'source': ['Justice',    'Moon'        ], 'result': 'Devil'       },
    {'source': ['Justice',    'Sun'         ], 'result': 'Hanged Man'  },
    {'source': ['Justice',    'Judgement'   ], 'result': 'Tower'       },
    {'source': ['Hermit',     'Hermit'      ], 'result': 'Hermit'      },
    {'source': ['Hermit',     'Fortune'     ], 'result': 'Star'        },
    {'source': ['Hermit',     'Strength'    ], 'result': 'Hierophant'  },
    {'source': ['Hermit',     'Hanged Man'  ], 'result': 'Star'        },
    {'source': ['Hermit',     'Death'       ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Temperance'  ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Devil'       ], 'result': 'Priestess'   },
    {'source': ['Hermit',     'Tower'       ], 'result': 'Judgement'   },
    {'source': ['Hermit',     'Star'        ], 'result': 'Strength'    },
    {'source': ['Hermit',     'Moon'        ], 'result': 'Priestess'   },
    {'source': ['Hermit',     'Sun'         ], 'result': 'Devil'       },
    {'source': ['Hermit',     'Judgement'   ], 'result': 'Emperor'     },
    {'source': ['Fortune',    'Fortune'     ], 'result': 'Fortune'     },
    {'source': ['Fortune',    'Strength'    ], 'result': 'Temperance'  },
    {'source': ['Fortune',    'Hanged Man'  ], 'result': 'Emperor'     },
    {'source': ['Fortune',    'Death'       ], 'result': 'Star'        },
    {'source': ['Fortune',    'Temperance'  ], 'result': 'Empress'     },
    {'source': ['Fortune',    'Devil'       ], 'result': 'Hierophant'  },
    {'source': ['Fortune',    'Tower'       ], 'result': 'Hanged Man'  },
    {'source': ['Fortune',    'Star'        ], 'result': 'Devil'       },
    {'source': ['Fortune',    'Moon'        ], 'result': 'Sun'         },
    {'source': ['Fortune',    'Sun'         ], 'result': 'Star'        },
    {'source': ['Fortune',    'Judgement'   ], 'result': 'Tower'       },
    {'source': ['Strength',   'Strength'    ], 'result': 'Strength'    },
    {'source': ['Strength',   'Hanged Man'  ], 'result': 'Temperance'  },
    {'source': ['Strength',   'Death'       ], 'result': 'Hierophant'  },
    {'source': ['Strength',   'Temperance'  ], 'result': 'Chariot'     },
    {'source': ['Strength',   'Devil'       ], 'result': 'Death'       },
    {'source': ['Strength',   'Tower'       ], 'result': 'Chariot'     },
    {'source': ['Strength',   'Star'        ], 'result': 'Moon'        },
    {'source': ['Strength',   'Moon'        ], 'result': 'Magician'    },
    {'source': ['Strength',   'Sun'         ], 'result': 'Moon'        },
    {'source': ['Strength',   'Judgement'   ], 'result': 'Fortune'     },
    {'source': ['Hanged Man', 'Hanged Man'  ], 'result': 'Hanged Man'  },
    {'source': ['Hanged Man', 'Death'       ], 'result': 'Moon'        },
    {'source': ['Hanged Man', 'Temperance'  ], 'result': 'Death'       },
    {'source': ['Hanged Man', 'Devil'       ], 'result': 'Fortune'     },
    {'source': ['Hanged Man', 'Tower'       ], 'result': 'Hermit'      },
    {'source': ['Hanged Man', 'Star'        ], 'result': 'Justice'     },
    {'source': ['Hanged Man', 'Moon'        ], 'result': 'Strength'    },
    {'source': ['Hanged Man', 'Sun'         ], 'result': 'Hierophant'  },
    {'source': ['Hanged Man', 'Judgement'   ], 'result': 'Star'        },
    {'source': ['Death',      'Death'       ], 'result': 'Death'       },
    {'source': ['Death',      'Temperance'  ], 'result': 'Hanged Man'  },
    {'source': ['Death',      'Devil'       ], 'result': 'Chariot'     },
    {'source': ['Death',      'Tower'       ], 'result': 'Sun'         },
    {'source': ['Death',      'Star'        ], 'result': 'Devil'       },
    {'source': ['Death',      'Moon'        ], 'result': 'Hierophant'  },
    {'source': ['Death',      'Sun'         ], 'result': 'Priestess'   },
    {'source': ['Death',      'Judgement'   ], 'result': 'Magician'    },
    {'source': ['Temperance', 'Temperance'  ], 'result': 'Temperance'  },
    {'source': ['Temperance', 'Devil'       ], 'result': 'Fool'        },
    {'source': ['Temperance', 'Tower'       ], 'result': 'Fortune'     },
    {'source': ['Temperance', 'Star'        ], 'result': 'Sun'         },
    {'source': ['Temperance', 'Moon'        ], 'result': 'Fortune'     },
    {'source': ['Temperance', 'Sun'         ], 'result': 'Magician'    },
    {'source': ['Temperance', 'Judgement'   ], 'result': 'Hermit'      },
    {'source': ['Devil',      'Devil'       ], 'result': 'Devil'       },
    {'source': ['Devil',      'Tower'       ], 'result': 'Magician'    },
    {'source': ['Devil',      'Star'        ], 'result': 'Strength'    },
    {'source': ['Devil',      'Moon'        ], 'result': 'Chariot'     },
    {'source': ['Devil',      'Sun'         ], 'result': 'Hermit'      },
    {'source': ['Devil',      'Judgement'   ], 'result': 'Lovers'      },
    {'source': ['Tower',      'Tower'       ], 'result': 'Tower'       },
    {'source': ['Tower',      'Star'        ], 'result': 'Death'       },
    {'source': ['Tower',      'Moon'        ], 'result': 'Hermit'      },
    {'source': ['Tower',      'Sun'         ], 'result': 'Emperor'     },
    {'source': ['Tower',      'Judgement'   ], 'result': 'Moon'        },
    {'source': ['Star',       'Star'        ], 'result': 'Star'        },
    {'source': ['Star',       'Moon'        ], 'result': 'Temperance'  },
    {'source': ['Star',       'Sun'         ], 'result': 'Judgement'   },
    {'source': ['Star',       'Judgement'   ], 'result': 'Fortune'     },
    {'source': ['Moon',       'Moon'        ], 'result': 'Moon'        },
    {'source': ['Moon',       'Sun'         ], 'result': 'Empress'     },
    {'source': ['Moon',       'Judgement'   ], 'result': 'Fool'        },
    {'source': ['Sun',        'Sun'         ], 'result': 'Sun'         },
    {'source': ['Sun',        'Judgement'   ], 'result': 'Death'       },
    {'source': ['Judgement',  'Judgement'   ], 'result': 'Judgement'   }
];

var specialCombos = [
    {'result': 'Alice', 'sources': ['Nebiros', 'Belial']},
    {'result': 'Ardha', 'sources': ['Parvati', 'Shiva']},
    {'result': 'Asura-Ou', 'sources': ['Zouchouten', 'Jikokuten', 'Koumokuten', 'Bishamonten']},
    {'result': 'Black Frost', 'sources': ['Pyro Jack', 'Jack Frost', 'King Frost']},
    {'result': 'Bugs', 'sources': ['Pixie', 'Pisaca', 'Hariti']},
    {'result': 'Chi You', 'sources': ['Hecatoncheir', 'White Rider', 'Thor', 'Yoshitsune', 'Cu Chulainn']},
    {'result': 'Flauros', 'sources': ['Berith', 'Andras', 'Eligor']},
    {'result': 'Kohryu', 'sources': ['Genbu', 'Seiryu', 'Suzaku', 'Byakko']},
    {'result': 'Lucifer', 'sources': ['Anubis', 'Ananta', 'Trumpeter', 'Michael', 'Metatron', 'Satan']},
    {'result': 'Metatron', 'sources': ['Principality', 'Power', 'Dominion', 'Melchizedek', 'Sandalphon', 'Michael']},
    {'result': 'Michael', 'sources': ['Raphael', 'Gabriel', 'Uriel']},
    {'result': 'Neko Shogun', 'sources': ['Kodama', 'Sudama', 'Anzu']},
    {'result': 'Ongyo-Ki', 'sources': ['Kin-Ki', 'Sui-Ki', 'Fuu-Ki']},
    {'result': 'Satanael', 'sources': ['Arsène', 'Anzu', 'Ishtar', 'Satan', 'Lucifer', 'Michael']},
    {'result': 'Seth', 'sources': ['Isis', 'Thoth', 'Anubis', 'Horus']},
    {'result': 'Shiva', 'sources': ['Rangda', 'Barong']},
    {'result': 'Sraosha', 'sources': ['Mithra', 'Mithras', 'Melchizedek', 'Lilith', 'Gabriel']},
    {'result': 'Throne', 'sources': ['Power', 'Melchizedek', 'Dominion']},
    {'result': 'Trumpeter', 'sources': ['White Rider', 'Red Rider', 'Black Rider', 'Pale Rider']},
    {'result': 'Vasuki', 'sources': ['Naga', 'Raja Naga', 'Ananta']},
    {'result': 'Yoshitsune', 'sources': ['Okuninushi', 'Shiki-Ouji', 'Arahabaki', 'Yatagarasu', 'Futsunushi']}
];

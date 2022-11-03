function getDrink() {
  return [
    {
      "id": "1",
      "name": "ドリップコーヒー (HOT)",
      "name_en": "Drip coffee",
      "price": ["290", "330", "370", "410"],
      // "type": ["size", "decaf", "syrup", "source", "hot"]
      "type": ["size", "decaf", "syrup"]
    },
    {
      "id": "2",
      "name": "アイスコーヒー (ICE)",
      "name_en": "Ice Coffee",
      "price": ["290", "330", "370", "410"],
      "type": ["size", "decaf", "syrup", "source","ice"]
    },
    {
      "id": "3",
      "name": "カフェ ミスト (HOT)",
      "name_en": "Caffè Misto",
      "price": ["340", "380", "420", "460"],
      "type": []
    },
    {
      "id": "4",
      "name": "スターバックス ラテ (HOT)",
      "name_en": "Starbucks Latte",
      "price": ["340", "380", "420", "460"],
      "type": []
    }
  ]
}

function getCustomize(id) {
  console.log("getCustomize", id);
  if (id === "size") {
    return {
      "type": "size",
      "choices": ["Short サイズ", "Tall サイズ", "Grande サイズ", "Venti サイズ"],
      "name": ["Short", "Tall", "Grande", "Venti"],
      "nameOder": 1
    }
  } else if (id === "decaf") {
    return {
      "type": "decaf",
      "choices": ["変更しない", "ディカフェに変更する"],
      "name": ["", "ディカフェ"],
      "nameOder": 2,
      "price": [0, 50]
    }
  } else if (id === "syrup") {
    return {
      "type": "syrup",
      "choices": [
        "追加しない",
        "チョコレートシロップ追加",
        "ホワイトモカシロップ追加",
        "タゾチャイシロップ追加",
        "キャラメルフレーバーシロップ追加",
        "バニラフレーバーシロップ追加",
        "アーモンドフィーフレーバーシロップ追加"
      ],
      "name": [
        "",
        "チョコレートシロップ",
        "ホワイトモカシロップ",
        "タゾチャイシロップ",
        "キャラメルフレーバーシロップ",
        "バニラフレーバーシロップ",
        "アーモンドフィーフレーバーシロップ"
      ],
      "nameOder": 5,
      "price": [0, 50, 50, 50, 50, 50, 50]
    }
  }
}

// ---------------------

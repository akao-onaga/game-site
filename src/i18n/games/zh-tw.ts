import type { GameTranslation } from "../game";

export const zhTwGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "反轉打字",
    catch: "A變成Z，B變成Y。在顛倒的字母世界中打字。",
    genre: "打字",
    dialogue: [
      { speaker: "onaga", text: "這和一般的打字遊戲有什麼不同？" },
      {
        speaker: "akao",
        text: "每個按鍵都會依字母順序反轉：A變成Z，B變成Y。",
      },
      { speaker: "onaga", text: "按A卻輸入Z？腦袋要打結了。" },
      {
        speaker: "akao",
        text: "這正是挑戰。在時間結束前輸入盡可能多的單字，挑戰排行榜吧。這也是100款遊戲企劃的第一作。",
      },
    ],
    features: [
      "按A得到Z、按B得到Y的腦力訓練式打字",
      "支援線上排行榜",
    ],
    controls: [
      { label: "開始", text: "在標題畫面輸入玩家名稱並選擇START" },
      { label: "輸入", text: "用鍵盤輸入畫面上顯示的字母" },
    ],
    notes: ["所有字母都會以A↔Z、B↔Y的方式反轉判定。"],
  },
  "giri-strike": {
    title: "極限好球",
    catch: "把球投到好球帶邊緣，越接近越好。",
    genre: "運動",
    dialogue: [
      { speaker: "onaga", text: "是棒球遊戲！要怎麼玩？" },
      {
        speaker: "akao",
        text: "目標就是把好球投在邊緣。越接近好球帶邊界，分數越高。",
      },
      { speaker: "onaga", text: "那一直投同一個位置不就好了？" },
      {
        speaker: "akao",
        text: "沒那麼簡單。重複相同位置或球種會更容易被打中，靈活運用六種球路才是關鍵。",
      },
    ],
    features: [
      "可選擇六種不同球路",
      "重複相同位置或球種會提高被打中的機率",
      "開始前可選擇控球類型",
    ],
    controls: [
      { label: "選擇球種", text: "畫面按鈕或數字鍵1至6" },
      { label: "瞄準", text: "在好球帶附近拖曳滑鼠" },
      { label: "投球", text: "計量條進入白色區域時按PITCH、Space或Enter" },
      { label: "返回標題", text: "R鍵" },
    ],
  },
  "osyaberi-oekaki": {
    title: "吐槽AI畫畫",
    catch: "一邊忍受AI吐槽，一邊讓它猜出你畫的東西。",
    genre: "繪畫",
    dialogue: [
      { speaker: "onaga", text: "是和AI一起畫畫嗎？" },
      {
        speaker: "akao",
        text: "只要AI猜出你畫的內容就能過關。不過你畫畫時，它會一直在旁邊吐槽。",
      },
      { speaker: "onaga", text: "這個AI的個性也太差了吧。" },
      {
        speaker: "akao",
        text: "就當作心理訓練吧。只需要畫畫，也能在畫面下方選擇顏色。",
      },
    ],
    features: ["讓AI猜中你的畫即可過關", "在AI不斷吐槽的干擾下堅持作畫"],
    controls: [
      { label: "繪畫", text: "直接在畫布上拖曳，並可在畫面下方選擇顏色" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "沒有背景音樂，只有音效的節奏遊戲。",
    genre: "節奏",
    dialogue: [
      { speaker: "onaga", text: "節奏遊戲居然沒有音樂？" },
      {
        speaker: "akao",
        text: "沒錯，只會播放音效。要根據音符之間的間隔與視覺節奏掌握時機。",
      },
      { speaker: "onaga", text: "感覺很新鮮，會不會很難？" },
      {
        speaker: "akao",
        text: "有三個難度。分數與最高連擊會記錄在本機排行榜中。",
      },
    ],
    features: [
      "沒有背景音樂、只靠音效的獨特節奏玩法",
      "三個難度等級",
      "記錄分數與最高連擊的本機排行榜",
    ],
  },
  "pittari-hitofudegaki": {
    title: "完美一筆畫！",
    catch: "只用一筆，你能多接近示範圖形？",
    genre: "繪畫",
    dialogue: [
      { speaker: "onaga", text: "畫畫遊戲？我對自己的畫技很有信心。" },
      {
        speaker: "akao",
        text: "選擇題目後用一筆描完。越接近星星或魚等示範線條，分數越高。",
      },
      { speaker: "onaga", text: "畫完後馬上就能看到分數嗎？" },
      {
        speaker: "akao",
        text: "放開手指或滑鼠的瞬間就會評分。每個題目都有獨立的線上排行榜。",
      },
    ],
    features: ["數十秒即可完成的輕量分數挑戰", "每個題目都有線上排行榜"],
    controls: [
      { label: "一筆畫", text: "按住滑鼠或手指拖曳，放開後立即評分" },
    ],
  },
  "kenpin-15puzzle": {
    title: "檢品！15拼圖",
    catch: "不要解開它，而是判斷它能不能被解開。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "這是要把15拼圖解開的遊戲嗎？" },
      {
        speaker: "akao",
        text: "不用解開。你要檢查每個盤面，判斷它是否有解，並盡快完成。",
      },
      { speaker: "onaga", text: "如果光看判斷不出來怎麼辦？" },
      {
        speaker: "akao",
        text: "可以實際移動方塊確認。連續正確檢驗十個盤面就能過關。",
      },
      { speaker: "onaga", text: "還有EASY和CRAZY模式……" },
      {
        speaker: "akao",
        text: "EASY只離完成狀態幾步，CRAZY則完全隨機，連我也得動一動才能確定。",
      },
    ],
    features: [
      "不解拼圖，而是判斷盤面是否有解",
      "EASY盤面只離完成狀態幾步",
      "CRAZY盤面完全隨機",
      "支援線上競速排行榜",
    ],
    controls: [
      { label: "選擇與移動", text: "使用滑鼠或觸控" },
      { label: "可以出貨", text: "認為盤面有解時選擇" },
      { label: "不良品", text: "認為盤面無解時選擇" },
    ],
    notes: ["連續正確檢驗十個盤面即可過關，結果畫面會顯示時間與失誤數。"],
  },
  "mitomano-1mm": {
    title: "三笘的1毫米",
    catch: "在足球越過底線前滑鏟救回，勝負只在一瞬間。",
    genre: "運動",
    dialogue: [
      { speaker: "onaga", text: "《三笘的1毫米》是什麼樣的遊戲？" },
      {
        speaker: "akao",
        text: "追上橫傳球，在球越過底線前用滑鏟把它救回來。每次挑戰只有幾秒。",
      },
      { speaker: "onaga", text: "離線越近分數越高，那越過線會怎樣？" },
      {
        speaker: "akao",
        text: "當然會判OUT。盡量貼近邊線，重現那次著名的奇蹟吧。",
      },
    ],
    features: [
      "包含VAR重播判定",
      "依停球距離進行線上排名",
      "距離邊線越近，分數越高",
    ],
    controls: [
      { label: "衝刺", text: "長按Space" },
      { label: "滑鏟", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "計算黑白棋",
    catch: "答對算式才能落子，即時進行的黑白棋。",
    genre: "棋盤",
    dialogue: [
      { speaker: "onaga", text: "計算黑白棋和一般黑白棋有什麼不同？" },
      {
        speaker: "akao",
        text: "選擇合法格子，答對出現的算式後才能落子，整場比賽會即時進行。",
      },
      { speaker: "onaga", text: "對手會等我算完嗎？" },
      {
        speaker: "akao",
        text: "CPU不會等。算得越快，就越可能在CPU下一步之前連續落下多枚棋子。",
      },
      { speaker: "onaga", text: "如果計算途中選中的格子被占了呢？" },
      {
        speaker: "akao",
        text: "只要對手落子後該格仍是合法位置，就能繼續作答。CPU與計算題各有三個難度，手機還支援雙人模式。",
      },
    ],
    features: [
      "每答對一道算式就能落子的即時黑白棋",
      "快速作答可在CPU行動前連續落子",
      "CPU與計算題各有三個難度",
      "行動裝置支援專用雙人版面",
    ],
    controls: [
      { label: "滑鼠/觸控", text: "選擇合法格、使用畫面數字鍵並確認或刪除" },
      { label: "鍵盤", text: "數字鍵輸入，Backspace刪除，Enter確認" },
      { label: "單人", text: "選格後解出算式即可落子" },
      { label: "雙人", text: "兩名玩家分別使用左右棋盤與數字鍵盤同時作答" },
    ],
    notes: ["64格填滿或雙方都無合法步時，棋子較多的一方獲勝。"],
  },
  "nitro-tray-delivery": {
    title: "硝化甘油托盤配送",
    catch: "不能晃，也不能慢。在3D競速中送達危險貨物。",
    genre: "動作",
    dialogue: [
      { speaker: "onaga", text: "到底要配送什麼？" },
      {
        speaker: "akao",
        text: "端著裝有硝化甘油的托盤穿過危險工廠，以最快速度抵達終點。",
      },
      { speaker: "onaga", text: "聽起來就不妙。跑起來會怎樣？" },
      {
        speaker: "akao",
        text: "急加速、碰撞、風與旋轉桿都會增加搖晃槽，滿了瓶子就會倒下爆炸。",
      },
      { speaker: "onaga", text: "既要快又不能晃，該怎麼辦？" },
      {
        speaker: "akao",
        text: "用謹慎行走穩定托盤，看準障礙物時機並選擇路線。穿過綠色門還能減少五秒。",
      },
    ],
    features: [
      "搬運硝化甘油托盤的3D競速",
      "謹慎行走會減速並抑制搖晃",
      "風扇、旋轉桿、移動推車與滑地板等障礙",
      "五秒減時門與線上時間排行榜",
    ],
    controls: [
      { label: "移動", text: "WASD或方向鍵" },
      { label: "謹慎行走", text: "移動時長按Space或Shift" },
      { label: "重新開始", text: "R" },
      { label: "返回標題", text: "Esc" },
    ],
    notes: ["搖晃槽達到上限就會爆炸。每扇綠色門首次通過時可減少五秒。"],
  },
  "pittari-tetromino": {
    title: "完美方塊",
    catch: "在十道計時關卡中拼出與目標完全相同的形狀。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "這是一般的下落方塊遊戲嗎？" },
      {
        speaker: "akao",
        text: "這是十關計時挑戰，要讓四格方塊落下並拼成題目給出的形狀。",
      },
      { speaker: "onaga", text: "不只是消除方塊，那後半段會怎樣？" },
      {
        speaker: "akao",
        text: "後面的題目要先消掉指定行，再完成最終形狀，方塊順序很重要。",
      },
      { speaker: "onaga", text: "聽起來很難，有練習模式嗎？" },
      {
        speaker: "akao",
        text: "有EASY與HARD兩種模式。按R重做目前題目，總時間還能上傳到各模式排行榜。",
      },
    ],
    features: [
      "十道題都要求與目標形狀完全一致",
      "後半題需要規劃消行再完成形狀",
      "EASY與HARD兩種模式",
      "各模式獨立的線上時間排行榜",
    ],
    controls: [
      { label: "移動", text: "左右方向鍵或A" },
      { label: "軟降", text: "下方向鍵或S" },
      { label: "旋轉", text: "Z、X或上方向鍵" },
      { label: "硬降", text: "Space" },
      { label: "保留", text: "C" },
      { label: "重做目前題目", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "擊中刺激音符，在120秒節奏挑戰中進入DOPA TIME。",
    genre: "節奏",
    dialogue: [
      { speaker: "onaga", text: "DOPARHYTHM是什麼樣的節奏遊戲？" },
      {
        speaker: "akao",
        text: "用A、S、D、F擊中彩色刺激音符，撐過120秒。",
      },
      { speaker: "onaga", text: "還有帶黑色叉號的音符，也要按嗎？" },
      {
        speaker: "akao",
        text: "一般模式要避開。DOPA模式中則用J、K、L與分號逐軌擊退低落音符。",
      },
      { speaker: "onaga", text: "DOPA TIME會發生什麼？" },
      {
        speaker: "akao",
        text: "蓄滿FEVER槽後，所有軌道會出現長音符。快速連按全部按鍵賺取大量分數，DOPA歸零則遊戲結束。",
      },
    ],
    features: [
      "在120秒內挑戰最高分",
      "一般模式使用四鍵，DOPA模式使用八鍵",
      "蓄滿FEVER槽後進入全軌連打的DOPA TIME",
      "EASY與HARD支援線上排行榜",
    ],
    controls: [
      { label: "一般模式彩色音符", text: "由左至右為A、S、D、F" },
      { label: "一般模式低落音符", text: "不要按鍵，直接避開" },
      { label: "DOPA模式彩色音符", text: "由左至右為A、S、D、F" },
      { label: "DOPA模式低落音符", text: "由左至右用J、K、L、;擊退" },
    ],
    notes: [
      "成功會增加連擊與FEVER槽，彩色音符也會恢復DOPA。MISS、空按或按錯都會減少DOPA。",
    ],
  },
  "nazotoki-10s": {
    title: "10s謎題",
    catch: "做出十個10，完成這場算術解謎冒險。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "標題裡的10s是什麼意思？" },
      {
        speaker: "akao",
        text: "做出十個10就能過關。用有限的數字與四則運算組成每一個10。",
      },
      { speaker: "onaga", text: "只要組合數字，聽起來不難……" },
      {
        speaker: "akao",
        text: "有些題目表面上無法得到10，需要找出並使用藏在畫面裡的運算符號。",
      },
      { speaker: "onaga", text: "有目標時間嗎？" },
      {
        speaker: "akao",
        text: "目標是20分鐘。你能在時間內解開全部謎題嗎？",
      },
    ],
    features: [
      "結合解謎與算術的獨特規則",
      "簡單的觸控操作",
      "提供提示與完整解答說明",
      "目標通關時間20分鐘",
    ],
  },
  "time-reversi": {
    title: "時間黑白棋",
    catch: "每三秒即可行動一次的即時黑白棋。",
    genre: "棋盤",
    dialogue: [
      { speaker: "onaga", text: "黑白棋不是雙方輪流落子嗎？" },
      {
        speaker: "akao",
        text: "這裡沒有回合。三秒冷卻結束後，你可以隨時落子。",
      },
      { speaker: "onaga", text: "那越快落子越好嗎？" },
      {
        speaker: "akao",
        text: "這正是難點。立刻行動，還是等待對手？時機讓讀盤多了一層博弈。",
      },
      { speaker: "onaga", text: "一個人也能玩嗎？" },
      {
        speaker: "akao",
        text: "可以和CPU練習，用房間ID挑戰朋友，也能在生存模式中連續挑戰越來越強的對手。",
      },
    ],
    features: [
      "每次行動後有三秒冷卻的即時黑白棋",
      "支援CPU練習與房間ID好友對戰",
      "在生存模式挑戰不斷變強的CPU",
      "無視冷卻的自由棋子等技能",
      "可透過重播檢討比賽",
    ],
    notes: ["適合短時間遊玩的全新黑白棋。免費下載，含App內購買，支援多種語言。"],
  },
};

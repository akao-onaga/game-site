import type { GameTranslation } from "../game";

export const zhCnGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "反转打字",
    catch: "A变成Z，B变成Y。在颠倒的字母世界中打字。",
    genre: "打字",
    dialogue: [
      { speaker: "onaga", text: "这和普通的打字游戏有什么不同？" },
      {
        speaker: "akao",
        text: "每个按键都会按字母顺序反转：A变成Z，B变成Y。",
      },
      { speaker: "onaga", text: "按A却输入Z？脑子要转不过来了。" },
      {
        speaker: "akao",
        text: "这正是挑战。在时间结束前输入尽可能多的单词，冲击排行榜吧。这也是100款游戏企划的第一作。",
      },
    ],
    features: [
      "按A得到Z、按B得到Y的脑力训练式打字",
      "支持在线排行榜",
    ],
    controls: [
      { label: "开始", text: "在标题画面输入玩家名并选择START" },
      { label: "输入", text: "用键盘输入画面上显示的字母" },
    ],
    notes: ["所有字母都会按照A↔Z、B↔Y的方式反转判定。"],
  },
  "giri-strike": {
    title: "极限好球",
    catch: "把球投到好球区边缘，越接近越好。",
    genre: "体育",
    dialogue: [
      { speaker: "onaga", text: "是棒球游戏！要怎么玩？" },
      {
        speaker: "akao",
        text: "目标就是把好球投在边缘。越接近好球区边界，得分越高。",
      },
      { speaker: "onaga", text: "那一直投同一个位置不就行了？" },
      {
        speaker: "akao",
        text: "没那么简单。重复相同位置或球种会更容易被击中，灵活使用六种球路才是关键。",
      },
    ],
    features: [
      "可选择六种不同球路",
      "重复相同位置或球种会提高被击中的概率",
      "开始前可选择控球类型",
    ],
    controls: [
      { label: "选择球种", text: "画面按钮或数字键1至6" },
      { label: "瞄准", text: "在好球区附近拖动鼠标" },
      { label: "投球", text: "在计量条进入白色区域时按PITCH、Space或Enter" },
      { label: "返回标题", text: "R键" },
    ],
  },
  "osyaberi-oekaki": {
    title: "吐槽AI画画",
    catch: "一边忍受AI吐槽，一边让它猜出你画的东西。",
    genre: "绘画",
    dialogue: [
      { speaker: "onaga", text: "是和AI一起画画吗？" },
      {
        speaker: "akao",
        text: "只要AI猜出你画的内容就能过关。不过你画画时，它会一直在旁边吐槽。",
      },
      { speaker: "onaga", text: "这个AI的性格也太差了吧。" },
      {
        speaker: "akao",
        text: "就当作心理训练吧。只需要画画，也可以在画面下方选择颜色。",
      },
    ],
    features: ["让AI猜中你的画即可过关", "在AI不断吐槽的干扰下坚持作画"],
    controls: [
      { label: "绘画", text: "直接在画布上拖动，并可在画面下方选择颜色" },
    ],
  },
  muon: {
    title: "MUON",
    catch: "没有背景音乐，只有音效的节奏游戏。",
    genre: "节奏",
    dialogue: [
      { speaker: "onaga", text: "节奏游戏居然没有音乐？" },
      {
        speaker: "akao",
        text: "没错，只会播放音效。要根据音符之间的间隔和视觉节奏掌握时机。",
      },
      { speaker: "onaga", text: "感觉很新鲜，会不会很难？" },
      {
        speaker: "akao",
        text: "有三个难度。分数和最高连击会记录在本地排行榜中。",
      },
    ],
    features: [
      "没有背景音乐、只靠音效的独特节奏玩法",
      "三个难度等级",
      "记录分数与最高连击的本地排行榜",
    ],
  },
  "pittari-hitofudegaki": {
    title: "完美一笔画！",
    catch: "只用一笔，你能多接近示范图形？",
    genre: "绘画",
    dialogue: [
      { speaker: "onaga", text: "画画游戏？我对自己的画技很有信心。" },
      {
        speaker: "akao",
        text: "选择题目后用一笔描完。越接近星星或鱼等示范线条，分数越高。",
      },
      { speaker: "onaga", text: "画完后马上就能看到分数吗？" },
      {
        speaker: "akao",
        text: "松开手指或鼠标的瞬间就会评分。每个题目都有独立的在线排行榜。",
      },
    ],
    features: ["几十秒即可完成的轻量分数挑战", "每个题目都有在线排行榜"],
    controls: [
      { label: "一笔画", text: "按住鼠标或手指拖动，松开后立即评分" },
    ],
  },
  "kenpin-15puzzle": {
    title: "检品！15拼图",
    catch: "不要解开它，而是判断它能不能被解开。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "这是要把15拼图解开的游戏吗？" },
      {
        speaker: "akao",
        text: "不用解开。你要检查每个盘面，判断它是否有解，并尽快完成。",
      },
      { speaker: "onaga", text: "如果光看判断不出来怎么办？" },
      {
        speaker: "akao",
        text: "可以实际移动方块确认。连续正确检验十个盘面就能过关。",
      },
      { speaker: "onaga", text: "还有EASY和CRAZY模式……" },
      {
        speaker: "akao",
        text: "EASY只离完成状态几步，CRAZY则完全随机，连我也得动一动才能确定。",
      },
    ],
    features: [
      "不解拼图，而是判断盘面是否有解",
      "EASY盘面只离完成状态几步",
      "CRAZY盘面完全随机",
      "支持在线竞速排行榜",
    ],
    controls: [
      { label: "选择与移动", text: "使用鼠标或触摸" },
      { label: "可以出货", text: "认为盘面有解时选择" },
      { label: "不良品", text: "认为盘面无解时选择" },
    ],
    notes: ["连续正确检验十个盘面即可过关，结果画面会显示时间和失误数。"],
  },
  "mitomano-1mm": {
    title: "三笘的1毫米",
    catch: "在足球越过底线前滑铲救回，胜负只在一瞬间。",
    genre: "体育",
    dialogue: [
      { speaker: "onaga", text: "《三笘的1毫米》是什么样的游戏？" },
      {
        speaker: "akao",
        text: "追上横传球，在球越过底线前用滑铲把它救回来。每次挑战只有几秒。",
      },
      { speaker: "onaga", text: "离线越近分数越高，那越过线会怎样？" },
      {
        speaker: "akao",
        text: "当然会判OUT。尽量贴近边线，重现那次著名的奇迹吧。",
      },
    ],
    features: [
      "包含VAR回放判定",
      "根据停球距离进行在线排名",
      "距离边线越近，得分越高",
    ],
    controls: [
      { label: "冲刺", text: "长按Space" },
      { label: "滑铲", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "计算黑白棋",
    catch: "解对算式才能落子，实时进行的黑白棋。",
    genre: "棋盘",
    dialogue: [
      { speaker: "onaga", text: "计算黑白棋和普通黑白棋有什么不同？" },
      {
        speaker: "akao",
        text: "选择合法格子，答对出现的算式后才能落子，整场比赛会实时进行。",
      },
      { speaker: "onaga", text: "对手会等我算完吗？" },
      {
        speaker: "akao",
        text: "CPU不会等。算得越快，就越可能在CPU下一步之前连续落下多枚棋子。",
      },
      { speaker: "onaga", text: "如果计算途中选中的格子被占了呢？" },
      {
        speaker: "akao",
        text: "只要对手落子后该格仍是合法位置，就能继续作答。CPU和计算题各有三个难度，手机还支持双人模式。",
      },
    ],
    features: [
      "每答对一道算式就能落子的实时黑白棋",
      "快速作答可在CPU行动前连续落子",
      "CPU和计算题各有三个难度",
      "移动设备支持专用双人布局",
    ],
    controls: [
      { label: "鼠标/触摸", text: "选择合法格、使用画面数字键并确认或删除" },
      { label: "键盘", text: "数字键输入，Backspace删除，Enter确认" },
      { label: "单人", text: "选格后解出算式即可落子" },
      { label: "双人", text: "两名玩家分别使用左右棋盘与数字键盘同时作答" },
    ],
    notes: ["64格填满或双方都无合法步时，棋子更多的一方获胜。"],
  },
  "nitro-tray-delivery": {
    title: "硝化甘油托盘配送",
    catch: "不能晃，也不能慢。在3D竞速中送达危险货物。",
    genre: "动作",
    dialogue: [
      { speaker: "onaga", text: "到底要配送什么？" },
      {
        speaker: "akao",
        text: "端着装有硝化甘油的托盘穿过危险工厂，以最快速度抵达终点。",
      },
      { speaker: "onaga", text: "听起来就不妙。跑起来会怎样？" },
      {
        speaker: "akao",
        text: "急加速、碰撞、风和旋转杆都会增加摇晃槽，满了瓶子就会倒下爆炸。",
      },
      { speaker: "onaga", text: "既要快又不能晃，该怎么办？" },
      {
        speaker: "akao",
        text: "用谨慎行走稳定托盘，看准障碍物时机并选择路线。穿过绿色门还能减少五秒。",
      },
    ],
    features: [
      "搬运硝化甘油托盘的3D竞速",
      "谨慎行走会减速并抑制摇晃",
      "风扇、旋转杆、移动推车和滑地板等障碍",
      "五秒减时门和在线时间排行榜",
    ],
    controls: [
      { label: "移动", text: "WASD或方向键" },
      { label: "谨慎行走", text: "移动时长按Space或Shift" },
      { label: "重新开始", text: "R" },
      { label: "返回标题", text: "Esc" },
    ],
    notes: ["摇晃槽达到上限就会爆炸。每扇绿色门首次通过时可减少五秒。"],
  },
  "pittari-tetromino": {
    title: "完美方块",
    catch: "在十道计时关卡中拼出与目标完全相同的形状。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "这是普通的下落方块游戏吗？" },
      {
        speaker: "akao",
        text: "这是十关计时挑战，要让四格方块落下并拼成题目给出的形状。",
      },
      { speaker: "onaga", text: "不只是消除方块，那后半段会怎样？" },
      {
        speaker: "akao",
        text: "后面的题目要先消掉指定行，再完成最终形状，方块顺序很重要。",
      },
      { speaker: "onaga", text: "听起来很难，有练习模式吗？" },
      {
        speaker: "akao",
        text: "有EASY和HARD两种模式。按R重做当前题目，总时间还能上传到各模式的排行榜。",
      },
    ],
    features: [
      "十道题都要求与目标形状完全一致",
      "后半题需要规划消行再完成形状",
      "EASY和HARD两种模式",
      "各模式独立的在线时间排行榜",
    ],
    controls: [
      { label: "移动", text: "左右方向键或A" },
      { label: "软降", text: "下方向键或S" },
      { label: "旋转", text: "Z、X或上方向键" },
      { label: "硬降", text: "Space" },
      { label: "暂存", text: "C" },
      { label: "重做当前题", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "击中刺激音符，在120秒节奏挑战中进入DOPA TIME。",
    genre: "节奏",
    dialogue: [
      { speaker: "onaga", text: "DOPARHYTHM是什么样的节奏游戏？" },
      {
        speaker: "akao",
        text: "用A、S、D、F击中彩色刺激音符，坚持120秒。",
      },
      { speaker: "onaga", text: "还有带黑色叉号的音符，也要按吗？" },
      {
        speaker: "akao",
        text: "普通模式要避开。DOPA模式中则用J、K、L和分号逐轨击退低落音符。",
      },
      { speaker: "onaga", text: "DOPA TIME会发生什么？" },
      {
        speaker: "akao",
        text: "蓄满FEVER槽后，所有轨道会出现长音符。快速连按全部按键赚取大量分数，DOPA归零则游戏结束。",
      },
    ],
    features: [
      "在120秒内挑战最高分",
      "普通模式使用四键，DOPA模式使用八键",
      "蓄满FEVER槽后进入全轨连打的DOPA TIME",
      "EASY和HARD支持在线排行榜",
    ],
    controls: [
      { label: "普通模式彩色音符", text: "从左到右为A、S、D、F" },
      { label: "普通模式低落音符", text: "不要按键，直接避开" },
      { label: "DOPA模式彩色音符", text: "从左到右为A、S、D、F" },
      { label: "DOPA模式低落音符", text: "从左到右用J、K、L、;击退" },
    ],
    notes: [
      "成功会增加连击和FEVER槽，彩色音符还会恢复DOPA。MISS、空按或按错都会减少DOPA。",
    ],
  },
  "nazotoki-10s": {
    title: "10s谜题",
    catch: "做出十个10，完成这场算术解谜冒险。",
    genre: "益智",
    dialogue: [
      { speaker: "onaga", text: "标题里的10s是什么意思？" },
      {
        speaker: "akao",
        text: "做出十个10就能通关。用有限的数字和四则运算组成每一个10。",
      },
      { speaker: "onaga", text: "只要组合数字，听起来不难……" },
      {
        speaker: "akao",
        text: "有些题目表面上无法得到10，需要找出并使用藏在画面里的运算符号。",
      },
      { speaker: "onaga", text: "有目标时间吗？" },
      {
        speaker: "akao",
        text: "目标是20分钟。你能在时间内解开全部谜题吗？",
      },
    ],
    features: [
      "结合解谜与算术的独特规则",
      "简单的触摸操作",
      "提供提示与完整答案说明",
      "目标通关时间20分钟",
    ],
  },
  "time-reversi": {
    title: "时间黑白棋",
    catch: "每三秒即可行动一次的实时黑白棋。",
    genre: "棋盘",
    dialogue: [
      { speaker: "onaga", text: "黑白棋不是双方轮流落子吗？" },
      {
        speaker: "akao",
        text: "这里没有回合。三秒冷却结束后，你可以随时落子。",
      },
      { speaker: "onaga", text: "那越快落子越好吗？" },
      {
        speaker: "akao",
        text: "这正是难点。立刻行动，还是等待对手？时机让读盘多了一层博弈。",
      },
      { speaker: "onaga", text: "一个人也能玩吗？" },
      {
        speaker: "akao",
        text: "可以和CPU练习，用房间ID挑战朋友，也能在生存模式中连续挑战越来越强的对手。",
      },
    ],
    features: [
      "每次行动后有三秒冷却的实时黑白棋",
      "支持CPU练习和房间ID好友对战",
      "在生存模式中挑战不断变强的CPU",
      "无视冷却的自由棋子等技能",
      "可通过回放复盘比赛",
    ],
    notes: ["适合短时间游玩的全新黑白棋。免费下载，含应用内购买，支持多种语言。"],
  },
};

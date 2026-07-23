import type { Locale } from "./config";

interface LayoutCopy {
  siteName: string;
  description: string;
  unityroom: string;
  ios: string;
  about: string;
  updatesBefore: string;
  updatesAfter: string;
  privacy: string;
  languageLabel: string;
}

interface HomeCopy {
  heroLines: [string, string];
  intro: string;
  browserButton: string;
  mobileButton: string;
  unityroomTitle: string;
  unityroomLeadBefore: string;
  unityroomLeadAfter: string;
  progress: (published: number, goal: number) => string;
  progressLabel: string;
  iosTitle: string;
  iosLead: string;
}

interface AboutCopy {
  title: string;
  intro: string;
  project: string;
  partnerHeading: string;
  partnerName: string;
  partnerDescription: string;
  linksHeading: string;
  unityroomProfile: string;
  appStoreDeveloper: string;
  contactHeading: string;
  contactBefore: string;
  contactMiddle: string;
  contactAfter: string;
}

interface PrivacyCopy {
  title: string;
  operatorHeading: string;
  operatorBefore: string;
  operatorMiddle: string;
  analyticsHeading: string;
  analyticsBefore: string;
  analyticsAfter: string;
  languageHeading: string;
  languageBody: string;
  advertisingHeading: string;
  advertisingBefore: string;
  advertisingAfter: string;
  externalHeading: string;
  externalBody: string;
  disclaimerHeading: string;
  disclaimerBody: string;
  dates: string;
}

interface GameCopy {
  project: string;
  genre: string;
  platforms: string;
  releaseDate: string;
  back: string;
  mainImage: string;
  appIcon: string;
  screenshot: string;
  playUnityroom: string;
  viewAppStore: string;
  features: string;
  howToPlay: string;
  akao: string;
  onaga: string;
}

interface UiCopy {
  layout: LayoutCopy;
  home: HomeCopy;
  aboutPage: AboutCopy;
  privacyPage: PrivacyCopy;
  notFound: {
    title: string;
    message: string;
    back: string;
  };
  game: GameCopy;
}

export const uiCopy: Record<Locale, UiCopy> = {
  ja: {
    layout: {
      siteName: "あかお＠ゲーム開発",
      description:
        "個人ゲーム開発者「あかお」の作品紹介サイト。unityroom 100本投稿企画に挑戦中!",
      unityroom: "100本企画",
      ios: "iOSアプリ",
      about: "開発者",
      updatesBefore: "最新情報は",
      updatesAfter: "で発信中",
      privacy: "プライバシーポリシー",
      languageLabel: "表示言語を選択",
    },
    home: {
      heroLines: ["思いついたゲームを、", "どんどん投稿していく。"],
      intro: "個人ゲーム開発者「あかお」の作品置き場です。",
      browserButton: "ブラウザですぐ遊ぶ",
      mobileButton: "スマホのアプリで遊ぶ",
      unityroomTitle: "unityroom 100本投稿企画",
      unityroomLeadBefore:
        "unityroomにゲームを100本投稿するまで終われない企画を",
      unityroomLeadAfter:
        "で開催中!ぜんぶブラウザですぐ遊べます。",
      progress: (published, goal) => `${published} / ${goal} 本 公開中!`,
      progressLabel: "公開済みゲーム数",
      iosTitle: "iOSアプリ",
      iosLead:
        "App Storeで配信中のゲームアプリ。スマホでじっくり遊べます。",
    },
    aboutPage: {
      title: "開発者について",
      intro: "はじめまして。個人でゲームを開発している「あかお」です。",
      project:
        "思いついたゲームをどんどん投稿していくスタイルで、unityroomにゲームを100本投稿する「unityroom 100本投稿企画」に挑戦中です。伸びたやつはちゃんと作ってリリースするかも? 進捗や新作情報はXで発信しています。",
      partnerHeading: "相棒紹介",
      partnerName: "おナガ",
      partnerDescription:
        "あかおの相棒のシマエナガ。各ゲームの紹介ページで、あかおにあれこれ質問しながら一緒にゲームを紹介してくれる聞き役。関西弁。",
      linksHeading: "リンク",
      unityroomProfile: "あかおのプロフィールページ",
      appStoreDeveloper: "デベロッパーページ",
      contactHeading: "お問い合わせ",
      contactBefore: "ご意見・ご感想・お仕事のご相談は、",
      contactMiddle: "のDM、またはメール(",
      contactAfter: ")までお気軽にどうぞ。",
    },
    privacyPage: {
      title: "プライバシーポリシー",
      operatorHeading: "運営者",
      operatorBefore:
        "当サイト「あかお＠ゲーム開発」は、個人ゲーム開発者あかお(以下「運営者」)が運営しています。お問い合わせは",
      operatorMiddle: "またはメール",
      analyticsHeading: "アクセス解析について",
      analyticsBefore:
        "当サイトでは、サイトの改善のためにアクセス解析ツール「Cloudflare Web Analytics」を利用しています。このツールはCookieを使用せず、トラフィックデータを匿名で収集しており、個人を特定するものではありません。詳細は",
      analyticsAfter: "をご確認ください。",
      languageHeading: "言語設定について",
      languageBody:
        "当サイトでは、ユーザーが選択した表示言語を保存するため、機能性Cookieを使用しています。このCookieは1年間保存され、言語設定以外の用途や、個人の特定・広告の追跡には使用しません。",
      advertisingHeading: "広告について",
      advertisingBefore:
        "当サイトでは、今後第三者配信の広告サービス(Google AdSenseなど)を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。Cookieを無効にする方法や、Google AdSenseに関する詳細は",
      advertisingAfter: "をご確認ください。",
      externalHeading: "外部リンクについて",
      externalBody:
        "当サイトからリンクする外部サイト(unityroom、App Storeなど)で提供される情報・サービスについて、運営者は責任を負いません。各サイトの利用規約・プライバシーポリシーをご確認ください。",
      disclaimerHeading: "免責事項",
      disclaimerBody:
        "当サイトのコンテンツは正確性の維持に努めていますが、その内容を保証するものではありません。当サイトの利用によって生じた損害について、運営者は責任を負いかねます。",
      dates: "制定日: 2026年7月8日 / 最終改定: 2026年7月24日",
    },
    notFound: {
      title: "ページが見つかりません",
      message: "お探しのページは見つかりませんでした。",
      back: "← トップページへもどる",
    },
    game: {
      project: "100本投稿企画",
      genre: "ジャンル",
      platforms: "プラットフォーム",
      releaseDate: "リリース日",
      back: "← ゲーム一覧にもどる",
      mainImage: "メイン画像",
      appIcon: "アプリアイコン",
      screenshot: "スクリーンショット",
      playUnityroom: "unityroomで遊ぶ",
      viewAppStore: "App Storeで見る",
      features: "特徴",
      howToPlay: "操作方法",
      akao: "あかお",
      onaga: "おナガ",
    },
  },
  en: {
    layout: {
      siteName: "Akao Game Development",
      description:
        "Games by indie developer Akao, including the unityroom 100-Game Project.",
      unityroom: "100 Games",
      ios: "iOS Games",
      about: "About",
      updatesBefore: "Follow the latest releases on",
      updatesAfter: "",
      privacy: "Privacy Policy",
      languageLabel: "Select display language",
    },
    home: {
      heroLines: ["New ideas become", "new games."],
      intro: "A collection of games by indie developer Akao.",
      browserButton: "Play in your browser",
      mobileButton: "Play on iPhone & iPad",
      unityroomTitle: "unityroom 100-Game Project",
      unityroomLeadBefore:
        "I am publishing 100 games on unityroom. Follow the challenge on",
      unityroomLeadAfter: "Every game runs in your browser.",
      progress: (published, goal) =>
        `${published} / ${goal} games published`,
      progressLabel: "Games published",
      iosTitle: "iOS Games",
      iosLead: "Games available on the App Store for iPhone and iPad.",
    },
    aboutPage: {
      title: "About the Developer",
      intro: "Hello, I am Akao, an independent game developer.",
      project:
        "I turn ideas into games and publish them as quickly as I can. I am currently working on the unityroom 100-Game Project, a challenge to release 100 browser games on unityroom. Games that find an audience may grow into full releases. Progress and new game announcements are posted on X.",
      partnerHeading: "Meet My Partner",
      partnerName: "Onaga",
      partnerDescription:
        "Akao's long-tailed tit companion. On each game page, Onaga asks questions and helps introduce the game.",
      linksHeading: "Links",
      unityroomProfile: "Akao's profile",
      appStoreDeveloper: "Developer page",
      contactHeading: "Contact",
      contactBefore: "For feedback, questions, or work inquiries, message",
      contactMiddle: "or email",
      contactAfter: ".",
    },
    privacyPage: {
      title: "Privacy Policy",
      operatorHeading: "Operator",
      operatorBefore:
        "This website, Akao Game Development, is operated by independent game developer Akao. For inquiries, contact",
      operatorMiddle: "or email",
      analyticsHeading: "Analytics",
      analyticsBefore:
        "This website uses Cloudflare Web Analytics to improve the site. It does not use cookies and collects anonymized traffic data that does not identify individual visitors. See",
      analyticsAfter: "for details.",
      languageHeading: "Language Preference",
      languageBody:
        "This website uses a functional cookie to remember the display language selected by the visitor. The cookie is retained for one year and is not used to identify visitors, track advertising, or for any purpose other than language preference.",
      advertisingHeading: "Advertising",
      advertisingBefore:
        "This website may use third-party advertising services such as Google AdSense in the future. Advertising providers may use cookies to display ads based on a visitor's interests. For details, see",
      advertisingAfter: ".",
      externalHeading: "External Links",
      externalBody:
        "The operator is not responsible for information or services provided by external websites linked from this site, including unityroom and the App Store. Please review the terms and privacy policy of each service.",
      disclaimerHeading: "Disclaimer",
      disclaimerBody:
        "Every effort is made to keep the content of this website accurate, but its accuracy is not guaranteed. The operator is not liable for damages arising from use of this website.",
      dates: "Established: July 8, 2026 / Last updated: July 24, 2026",
    },
    notFound: {
      title: "Page Not Found",
      message: "The page you are looking for could not be found.",
      back: "← Back to the home page",
    },
    game: {
      project: "100-Game Project",
      genre: "Genre",
      platforms: "Platforms",
      releaseDate: "Release date",
      back: "← Back to all games",
      mainImage: "main image",
      appIcon: "app icon",
      screenshot: "screenshot",
      playUnityroom: "Play on unityroom",
      viewAppStore: "View on the App Store",
      features: "Features",
      howToPlay: "How to Play",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  "zh-cn": {
    layout: {
      siteName: "Akao 游戏开发",
      description:
        "独立游戏开发者 Akao 的作品网站，正在挑战 unityroom 100款游戏企划。",
      unityroom: "100款游戏",
      ios: "iOS 游戏",
      about: "关于",
      updatesBefore: "在",
      updatesAfter: "关注最新作品",
      privacy: "隐私政策",
      languageLabel: "选择显示语言",
    },
    home: {
      heroLines: ["把想到的点子，", "不断做成游戏。"],
      intro: "这里收录了独立游戏开发者 Akao 的作品。",
      browserButton: "立即在浏览器中游玩",
      mobileButton: "在 iPhone 和 iPad 上游玩",
      unityroomTitle: "unityroom 100款游戏企划",
      unityroomLeadBefore: "正在挑战在 unityroom 发布100款游戏。请在",
      unityroomLeadAfter: "关注进度！所有游戏都能直接在浏览器中游玩。",
      progress: (published, goal) => `已发布 ${published} / ${goal} 款`,
      progressLabel: "已发布游戏数",
      iosTitle: "iOS 游戏",
      iosLead: "可在 App Store 下载并在 iPhone 和 iPad 上游玩的游戏。",
    },
    aboutPage: {
      title: "关于开发者",
      intro: "你好，我是独立游戏开发者 Akao。",
      project:
        "我会把想到的点子迅速做成游戏并发布。目前正在进行“unityroom 100款游戏企划”，目标是在 unityroom 发布100款浏览器游戏。受到欢迎的作品也可能进一步制作成正式版本。开发进度和新作消息会发布在 X。",
      partnerHeading: "我的搭档",
      partnerName: "Onaga",
      partnerDescription:
        "Akao 的长尾山雀搭档。在各个游戏介绍页中，Onaga 会通过提问和 Akao 一起介绍游戏。",
      linksHeading: "链接",
      unityroomProfile: "Akao 的个人页面",
      appStoreDeveloper: "开发者页面",
      contactHeading: "联系",
      contactBefore: "如有意见、问题或合作咨询，请通过",
      contactMiddle: "私信或发送邮件至",
      contactAfter: "。",
    },
    privacyPage: {
      title: "隐私政策",
      operatorHeading: "运营者",
      operatorBefore:
        "本网站“Akao 游戏开发”由独立游戏开发者 Akao 运营。如需联系，请通过",
      operatorMiddle: "或邮件",
      analyticsHeading: "访问分析",
      analyticsBefore:
        "本网站使用 Cloudflare Web Analytics 改善网站体验。该工具不使用 Cookie，仅收集无法识别个人身份的匿名流量数据。详情请参阅",
      analyticsAfter: "。",
      languageHeading: "语言设置",
      languageBody:
        "本网站使用功能性 Cookie 保存用户选择的显示语言。该 Cookie 保留一年，不会用于识别个人、广告跟踪或语言设置以外的用途。",
      advertisingHeading: "广告",
      advertisingBefore:
        "本网站今后可能使用 Google AdSense 等第三方广告服务。广告提供商可能会使用 Cookie 展示符合用户兴趣的广告。详情请参阅",
      advertisingAfter: "。",
      externalHeading: "外部链接",
      externalBody:
        "运营者不对本网站链接到的外部网站（包括 unityroom 和 App Store）所提供的信息或服务负责。请确认各服务的使用条款和隐私政策。",
      disclaimerHeading: "免责声明",
      disclaimerBody:
        "本网站会尽力保持内容准确，但不保证其完整性或准确性。因使用本网站而产生的损失，运营者不承担责任。",
      dates: "制定日期：2026年7月8日 / 最后更新：2026年7月24日",
    },
    notFound: {
      title: "找不到页面",
      message: "找不到你要访问的页面。",
      back: "← 返回首页",
    },
    game: {
      project: "100款游戏企划",
      genre: "类型",
      platforms: "平台",
      releaseDate: "发布日期",
      back: "← 返回游戏列表",
      mainImage: "主图",
      appIcon: "应用图标",
      screenshot: "截图",
      playUnityroom: "在 unityroom 游玩",
      viewAppStore: "前往 App Store",
      features: "特点",
      howToPlay: "操作方法",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  "zh-tw": {
    layout: {
      siteName: "Akao 遊戲開發",
      description:
        "獨立遊戲開發者 Akao 的作品網站，正在挑戰 unityroom 100款遊戲企劃。",
      unityroom: "100款遊戲",
      ios: "iOS 遊戲",
      about: "關於",
      updatesBefore: "在",
      updatesAfter: "追蹤最新作品",
      privacy: "隱私權政策",
      languageLabel: "選擇顯示語言",
    },
    home: {
      heroLines: ["把想到的點子，", "不斷做成遊戲。"],
      intro: "這裡收錄了獨立遊戲開發者 Akao 的作品。",
      browserButton: "立即在瀏覽器遊玩",
      mobileButton: "在 iPhone 和 iPad 上遊玩",
      unityroomTitle: "unityroom 100款遊戲企劃",
      unityroomLeadBefore: "正在挑戰於 unityroom 發布100款遊戲。請在",
      unityroomLeadAfter: "追蹤進度！所有遊戲都能直接在瀏覽器遊玩。",
      progress: (published, goal) => `已發布 ${published} / ${goal} 款`,
      progressLabel: "已發布遊戲數",
      iosTitle: "iOS 遊戲",
      iosLead: "可在 App Store 下載並於 iPhone 和 iPad 遊玩的遊戲。",
    },
    aboutPage: {
      title: "關於開發者",
      intro: "你好，我是獨立遊戲開發者 Akao。",
      project:
        "我會把想到的點子迅速做成遊戲並發布。目前正在進行「unityroom 100款遊戲企劃」，目標是在 unityroom 發布100款瀏覽器遊戲。受到歡迎的作品也可能進一步製作成正式版本。開發進度與新作消息會發布在 X。",
      partnerHeading: "我的搭檔",
      partnerName: "Onaga",
      partnerDescription:
        "Akao 的長尾山雀搭檔。在各個遊戲介紹頁中，Onaga 會透過提問和 Akao 一起介紹遊戲。",
      linksHeading: "連結",
      unityroomProfile: "Akao 的個人頁面",
      appStoreDeveloper: "開發者頁面",
      contactHeading: "聯絡",
      contactBefore: "如有意見、問題或合作洽詢，請透過",
      contactMiddle: "私訊或寄信至",
      contactAfter: "。",
    },
    privacyPage: {
      title: "隱私權政策",
      operatorHeading: "營運者",
      operatorBefore:
        "本網站「Akao 遊戲開發」由獨立遊戲開發者 Akao 營運。如需聯絡，請透過",
      operatorMiddle: "或電子郵件",
      analyticsHeading: "流量分析",
      analyticsBefore:
        "本網站使用 Cloudflare Web Analytics 改善網站體驗。此工具不使用 Cookie，只收集無法識別個人身分的匿名流量資料。詳情請參閱",
      analyticsAfter: "。",
      languageHeading: "語言設定",
      languageBody:
        "本網站使用功能性 Cookie 儲存使用者選擇的顯示語言。此 Cookie 保留一年，不會用於識別個人、廣告追蹤或語言設定以外的用途。",
      advertisingHeading: "廣告",
      advertisingBefore:
        "本網站未來可能使用 Google AdSense 等第三方廣告服務。廣告供應商可能會使用 Cookie 顯示符合使用者興趣的廣告。詳情請參閱",
      advertisingAfter: "。",
      externalHeading: "外部連結",
      externalBody:
        "營運者不對本網站連結之外部網站（包括 unityroom 與 App Store）所提供的資訊或服務負責。請確認各服務的使用條款與隱私權政策。",
      disclaimerHeading: "免責聲明",
      disclaimerBody:
        "本網站會盡力維持內容正確，但不保證其完整性或準確性。因使用本網站而產生的損失，營運者不負責任。",
      dates: "制定日期：2026年7月8日 / 最後更新：2026年7月24日",
    },
    notFound: {
      title: "找不到頁面",
      message: "找不到你要瀏覽的頁面。",
      back: "← 返回首頁",
    },
    game: {
      project: "100款遊戲企劃",
      genre: "類型",
      platforms: "平台",
      releaseDate: "發布日期",
      back: "← 返回遊戲列表",
      mainImage: "主圖",
      appIcon: "App 圖示",
      screenshot: "螢幕截圖",
      playUnityroom: "在 unityroom 遊玩",
      viewAppStore: "前往 App Store",
      features: "特色",
      howToPlay: "操作方式",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  ko: {
    layout: {
      siteName: "Akao 게임 개발",
      description:
        "인디 게임 개발자 Akao의 작품 사이트. unityroom 100개 게임 프로젝트에 도전 중입니다.",
      unityroom: "100개 게임",
      ios: "iOS 게임",
      about: "소개",
      updatesBefore: "새 게임 소식은",
      updatesAfter: "에서 확인하세요",
      privacy: "개인정보 처리방침",
      languageLabel: "표시 언어 선택",
    },
    home: {
      heroLines: ["떠오른 아이디어를", "계속 게임으로 만듭니다."],
      intro: "인디 게임 개발자 Akao의 작품을 모았습니다.",
      browserButton: "브라우저에서 바로 플레이",
      mobileButton: "iPhone과 iPad에서 플레이",
      unityroomTitle: "unityroom 100개 게임 프로젝트",
      unityroomLeadBefore:
        "unityroom에 게임 100개를 공개하는 도전입니다. 진행 상황은",
      unityroomLeadAfter:
        "에서 확인하세요. 모든 게임은 브라우저에서 바로 즐길 수 있습니다.",
      progress: (published, goal) => `${published} / ${goal}개 공개`,
      progressLabel: "공개된 게임 수",
      iosTitle: "iOS 게임",
      iosLead: "App Store에서 iPhone과 iPad용으로 제공되는 게임입니다.",
    },
    aboutPage: {
      title: "개발자 소개",
      intro: "안녕하세요. 인디 게임 개발자 Akao입니다.",
      project:
        "떠오른 아이디어를 빠르게 게임으로 만들어 공개하고 있습니다. 현재 unityroom에 브라우저 게임 100개를 출시하는 'unityroom 100개 게임 프로젝트'에 도전 중입니다. 좋은 반응을 얻은 게임은 정식 작품으로 발전할 수도 있습니다. 개발 진행과 신작 소식은 X에 올립니다.",
      partnerHeading: "파트너 소개",
      partnerName: "Onaga",
      partnerDescription:
        "Akao의 흰머리오목눈이 파트너입니다. 각 게임 소개 페이지에서 질문을 던지며 Akao와 함께 게임을 소개합니다.",
      linksHeading: "링크",
      unityroomProfile: "Akao 프로필",
      appStoreDeveloper: "개발자 페이지",
      contactHeading: "문의",
      contactBefore: "의견, 질문, 업무 문의는",
      contactMiddle: "의 DM 또는 이메일",
      contactAfter: "로 보내 주세요.",
    },
    privacyPage: {
      title: "개인정보 처리방침",
      operatorHeading: "운영자",
      operatorBefore:
        "이 웹사이트 'Akao 게임 개발'은 인디 게임 개발자 Akao가 운영합니다. 문의는",
      operatorMiddle: "또는 이메일",
      analyticsHeading: "접속 분석",
      analyticsBefore:
        "사이트 개선을 위해 Cloudflare Web Analytics를 사용합니다. 이 도구는 쿠키를 사용하지 않으며 개인을 식별할 수 없는 익명 트래픽 데이터만 수집합니다. 자세한 내용은",
      analyticsAfter: "를 확인해 주세요.",
      languageHeading: "언어 설정",
      languageBody:
        "선택한 표시 언어를 저장하기 위해 기능성 쿠키를 사용합니다. 쿠키는 1년 동안 보관되며 개인 식별, 광고 추적 또는 언어 설정 이외의 목적으로 사용하지 않습니다.",
      advertisingHeading: "광고",
      advertisingBefore:
        "향후 Google AdSense와 같은 제3자 광고 서비스를 사용할 수 있습니다. 광고 제공업체는 관심사에 맞는 광고를 표시하기 위해 쿠키를 사용할 수 있습니다. 자세한 내용은",
      advertisingAfter: "를 확인해 주세요.",
      externalHeading: "외부 링크",
      externalBody:
        "운영자는 unityroom, App Store 등 이 사이트에서 연결되는 외부 웹사이트의 정보나 서비스에 책임을 지지 않습니다. 각 서비스의 이용약관과 개인정보 처리방침을 확인해 주세요.",
      disclaimerHeading: "면책 조항",
      disclaimerBody:
        "사이트 콘텐츠의 정확성을 유지하기 위해 노력하지만 이를 보장하지는 않습니다. 이 사이트 이용으로 발생한 손해에 대해 운영자는 책임을 지지 않습니다.",
      dates: "제정일: 2026년 7월 8일 / 최종 수정: 2026년 7월 24일",
    },
    notFound: {
      title: "페이지를 찾을 수 없습니다",
      message: "요청한 페이지를 찾을 수 없습니다.",
      back: "← 홈으로 돌아가기",
    },
    game: {
      project: "100개 게임 프로젝트",
      genre: "장르",
      platforms: "플랫폼",
      releaseDate: "출시일",
      back: "← 게임 목록으로",
      mainImage: "메인 이미지",
      appIcon: "앱 아이콘",
      screenshot: "스크린샷",
      playUnityroom: "unityroom에서 플레이",
      viewAppStore: "App Store에서 보기",
      features: "특징",
      howToPlay: "플레이 방법",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  es: {
    layout: {
      siteName: "Akao Desarrollo de Juegos",
      description:
        "Juegos del desarrollador independiente Akao y su proyecto de 100 juegos en unityroom.",
      unityroom: "100 juegos",
      ios: "Juegos iOS",
      about: "Acerca de",
      updatesBefore: "Sigue los nuevos lanzamientos en",
      updatesAfter: "",
      privacy: "Política de privacidad",
      languageLabel: "Seleccionar idioma",
    },
    home: {
      heroLines: ["Cada idea se convierte", "en un nuevo juego."],
      intro: "Una colección de juegos del desarrollador independiente Akao.",
      browserButton: "Jugar en el navegador",
      mobileButton: "Jugar en iPhone y iPad",
      unityroomTitle: "Proyecto de 100 juegos en unityroom",
      unityroomLeadBefore:
        "Estoy publicando 100 juegos en unityroom. Sigue el reto en",
      unityroomLeadAfter:
        ". Todos los juegos funcionan directamente en el navegador.",
      progress: (published, goal) => `${published} / ${goal} juegos publicados`,
      progressLabel: "Juegos publicados",
      iosTitle: "Juegos para iOS",
      iosLead: "Juegos disponibles en App Store para iPhone y iPad.",
    },
    aboutPage: {
      title: "Acerca del desarrollador",
      intro: "Hola, soy Akao, desarrollador independiente de videojuegos.",
      project:
        "Convierto ideas en juegos y los publico tan pronto como puedo. Actualmente trabajo en el Proyecto de 100 juegos en unityroom, un reto para lanzar 100 juegos de navegador. Los títulos que encuentren público pueden convertirse en lanzamientos completos. Publico el progreso y las novedades en X.",
      partnerHeading: "Mi compañero",
      partnerName: "Onaga",
      partnerDescription:
        "El carbonero de cola larga que acompaña a Akao. En cada página, Onaga hace preguntas y ayuda a presentar el juego.",
      linksHeading: "Enlaces",
      unityroomProfile: "Perfil de Akao",
      appStoreDeveloper: "Página del desarrollador",
      contactHeading: "Contacto",
      contactBefore: "Para comentarios, preguntas o propuestas de trabajo, escribe por",
      contactMiddle: "o por correo a",
      contactAfter: ".",
    },
    privacyPage: {
      title: "Política de privacidad",
      operatorHeading: "Responsable",
      operatorBefore:
        "Este sitio, Akao Desarrollo de Juegos, está gestionado por el desarrollador independiente Akao. Para consultas, contacta por",
      operatorMiddle: "o por correo a",
      analyticsHeading: "Analítica",
      analyticsBefore:
        "Este sitio utiliza Cloudflare Web Analytics para mejorar la experiencia. No utiliza cookies y recopila datos de tráfico anónimos que no identifican a los visitantes. Consulta",
      analyticsAfter: "para más información.",
      languageHeading: "Preferencia de idioma",
      languageBody:
        "Este sitio utiliza una cookie funcional para recordar el idioma elegido. Se conserva durante un año y no se usa para identificar visitantes, rastrear publicidad ni para ningún otro fin.",
      advertisingHeading: "Publicidad",
      advertisingBefore:
        "En el futuro, este sitio puede utilizar servicios publicitarios de terceros como Google AdSense. Los proveedores pueden usar cookies para mostrar anuncios basados en intereses. Consulta",
      advertisingAfter: "para más información.",
      externalHeading: "Enlaces externos",
      externalBody:
        "El responsable no se hace cargo de la información o servicios ofrecidos por sitios externos enlazados, incluidos unityroom y App Store. Revisa las condiciones y políticas de cada servicio.",
      disclaimerHeading: "Exención de responsabilidad",
      disclaimerBody:
        "Se procura mantener la información correcta, pero no se garantiza su exactitud. El responsable no responde por daños derivados del uso de este sitio.",
      dates: "Publicada: 8 de julio de 2026 / Actualizada: 24 de julio de 2026",
    },
    notFound: {
      title: "Página no encontrada",
      message: "No se ha encontrado la página que buscas.",
      back: "← Volver al inicio",
    },
    game: {
      project: "Proyecto de 100 juegos",
      genre: "Género",
      platforms: "Plataformas",
      releaseDate: "Fecha de lanzamiento",
      back: "← Volver a todos los juegos",
      mainImage: "imagen principal",
      appIcon: "icono de la app",
      screenshot: "captura de pantalla",
      playUnityroom: "Jugar en unityroom",
      viewAppStore: "Ver en App Store",
      features: "Características",
      howToPlay: "Cómo jugar",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  fr: {
    layout: {
      siteName: "Akao Développement de Jeux",
      description:
        "Les jeux du développeur indépendant Akao, dont le projet de 100 jeux sur unityroom.",
      unityroom: "100 jeux",
      ios: "Jeux iOS",
      about: "À propos",
      updatesBefore: "Suivez les nouveautés sur",
      updatesAfter: "",
      privacy: "Politique de confidentialité",
      languageLabel: "Choisir la langue",
    },
    home: {
      heroLines: ["Chaque idée devient", "un nouveau jeu."],
      intro: "Une collection de jeux du développeur indépendant Akao.",
      browserButton: "Jouer dans le navigateur",
      mobileButton: "Jouer sur iPhone et iPad",
      unityroomTitle: "Projet de 100 jeux sur unityroom",
      unityroomLeadBefore:
        "Je publie 100 jeux sur unityroom. Suivez le défi sur",
      unityroomLeadAfter:
        ". Tous les jeux sont jouables directement dans votre navigateur.",
      progress: (published, goal) => `${published} / ${goal} jeux publiés`,
      progressLabel: "Jeux publiés",
      iosTitle: "Jeux iOS",
      iosLead: "Jeux disponibles sur l'App Store pour iPhone et iPad.",
    },
    aboutPage: {
      title: "À propos du développeur",
      intro: "Bonjour, je suis Akao, développeur de jeux indépendant.",
      project:
        "Je transforme mes idées en jeux et les publie aussi vite que possible. Je travaille actuellement sur le projet de 100 jeux sur unityroom, un défi visant à sortir 100 jeux pour navigateur. Les titres qui trouvent leur public pourront devenir des versions complètes. Je publie l'avancement et les nouveautés sur X.",
      partnerHeading: "Mon partenaire",
      partnerName: "Onaga",
      partnerDescription:
        "La mésange à longue queue qui accompagne Akao. Sur chaque page, Onaga pose des questions et aide à présenter le jeu.",
      linksHeading: "Liens",
      unityroomProfile: "Profil d'Akao",
      appStoreDeveloper: "Page du développeur",
      contactHeading: "Contact",
      contactBefore: "Pour toute remarque, question ou proposition, contactez-moi sur",
      contactMiddle: "ou par e-mail à",
      contactAfter: ".",
    },
    privacyPage: {
      title: "Politique de confidentialité",
      operatorHeading: "Responsable",
      operatorBefore:
        "Ce site, Akao Développement de Jeux, est géré par le développeur indépendant Akao. Pour toute demande, contactez",
      operatorMiddle: "ou écrivez à",
      analyticsHeading: "Analyse d'audience",
      analyticsBefore:
        "Ce site utilise Cloudflare Web Analytics afin de l'améliorer. Cet outil n'utilise pas de cookies et recueille des données de trafic anonymes qui n'identifient pas les visiteurs. Consultez",
      analyticsAfter: "pour plus de détails.",
      languageHeading: "Préférence de langue",
      languageBody:
        "Ce site utilise un cookie fonctionnel pour mémoriser la langue choisie. Il est conservé pendant un an et n'est utilisé ni pour identifier les visiteurs, ni pour le suivi publicitaire, ni à une autre fin.",
      advertisingHeading: "Publicité",
      advertisingBefore:
        "Ce site pourra utiliser à l'avenir des services publicitaires tiers tels que Google AdSense. Ces services peuvent utiliser des cookies pour afficher des annonces selon les centres d'intérêt. Consultez",
      advertisingAfter: "pour plus de détails.",
      externalHeading: "Liens externes",
      externalBody:
        "Le responsable n'est pas responsable des informations ou services proposés par les sites externes liés, notamment unityroom et l'App Store. Consultez les conditions et politiques de chaque service.",
      disclaimerHeading: "Limitation de responsabilité",
      disclaimerBody:
        "Tout est mis en œuvre pour maintenir des informations exactes, sans garantie d'exactitude. Le responsable n'est pas responsable des dommages liés à l'utilisation du site.",
      dates: "Créée le 8 juillet 2026 / Mise à jour le 24 juillet 2026",
    },
    notFound: {
      title: "Page introuvable",
      message: "La page que vous recherchez est introuvable.",
      back: "← Retour à l'accueil",
    },
    game: {
      project: "Projet de 100 jeux",
      genre: "Genre",
      platforms: "Plateformes",
      releaseDate: "Date de sortie",
      back: "← Retour à tous les jeux",
      mainImage: "image principale",
      appIcon: "icône de l'application",
      screenshot: "capture d'écran",
      playUnityroom: "Jouer sur unityroom",
      viewAppStore: "Voir sur l'App Store",
      features: "Caractéristiques",
      howToPlay: "Comment jouer",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  de: {
    layout: {
      siteName: "Akao Spieleentwicklung",
      description:
        "Spiele des Indie-Entwicklers Akao, darunter das 100-Spiele-Projekt auf unityroom.",
      unityroom: "100 Spiele",
      ios: "iOS-Spiele",
      about: "Über mich",
      updatesBefore: "Neue Spiele gibt es auf",
      updatesAfter: "",
      privacy: "Datenschutzerklärung",
      languageLabel: "Anzeigesprache wählen",
    },
    home: {
      heroLines: ["Aus neuen Ideen werden", "neue Spiele."],
      intro: "Eine Sammlung von Spielen des Indie-Entwicklers Akao.",
      browserButton: "Im Browser spielen",
      mobileButton: "Auf iPhone und iPad spielen",
      unityroomTitle: "100-Spiele-Projekt auf unityroom",
      unityroomLeadBefore:
        "Ich veröffentliche 100 Spiele auf unityroom. Folge dem Projekt auf",
      unityroomLeadAfter: ". Alle Spiele laufen direkt im Browser.",
      progress: (published, goal) =>
        `${published} / ${goal} Spiele veröffentlicht`,
      progressLabel: "Veröffentlichte Spiele",
      iosTitle: "iOS-Spiele",
      iosLead: "Spiele aus dem App Store für iPhone und iPad.",
    },
    aboutPage: {
      title: "Über den Entwickler",
      intro: "Hallo, ich bin Akao, ein unabhängiger Spieleentwickler.",
      project:
        "Ich verwandle Ideen in Spiele und veröffentliche sie so schnell wie möglich. Derzeit arbeite ich am 100-Spiele-Projekt auf unityroom: 100 Browserspiele sollen dort erscheinen. Erfolgreiche Ideen können später zu vollständigen Veröffentlichungen werden. Fortschritte und Neuigkeiten teile ich auf X.",
      partnerHeading: "Mein Partner",
      partnerName: "Onaga",
      partnerDescription:
        "Akaos Schwanzmeisen-Begleiter. Auf jeder Spieleseite stellt Onaga Fragen und hilft dabei, das Spiel vorzustellen.",
      linksHeading: "Links",
      unityroomProfile: "Akaos Profil",
      appStoreDeveloper: "Entwicklerseite",
      contactHeading: "Kontakt",
      contactBefore: "Für Feedback, Fragen oder geschäftliche Anfragen schreibe über",
      contactMiddle: "oder per E-Mail an",
      contactAfter: ".",
    },
    privacyPage: {
      title: "Datenschutzerklärung",
      operatorHeading: "Betreiber",
      operatorBefore:
        "Diese Website, Akao Spieleentwicklung, wird vom unabhängigen Spieleentwickler Akao betrieben. Kontakt ist möglich über",
      operatorMiddle: "oder per E-Mail an",
      analyticsHeading: "Webanalyse",
      analyticsBefore:
        "Diese Website nutzt Cloudflare Web Analytics zur Verbesserung des Angebots. Das Tool verwendet keine Cookies und erfasst anonymisierte Verkehrsdaten, die keine Personen identifizieren. Details bietet",
      analyticsAfter: ".",
      languageHeading: "Spracheinstellung",
      languageBody:
        "Diese Website verwendet ein funktionales Cookie, um die gewählte Sprache zu speichern. Es bleibt ein Jahr erhalten und wird weder zur Identifizierung noch für Werbung oder andere Zwecke genutzt.",
      advertisingHeading: "Werbung",
      advertisingBefore:
        "Diese Website kann künftig Drittanbieter-Werbedienste wie Google AdSense verwenden. Anbieter können Cookies einsetzen, um interessenbezogene Werbung anzuzeigen. Weitere Informationen bietet",
      advertisingAfter: ".",
      externalHeading: "Externe Links",
      externalBody:
        "Der Betreiber übernimmt keine Verantwortung für Informationen oder Dienste externer Websites, darunter unityroom und der App Store. Bitte beachte die Bedingungen und Datenschutzrichtlinien der jeweiligen Dienste.",
      disclaimerHeading: "Haftungsausschluss",
      disclaimerBody:
        "Die Inhalte werden mit Sorgfalt gepflegt, ihre Richtigkeit wird jedoch nicht garantiert. Für Schäden aus der Nutzung dieser Website haftet der Betreiber nicht.",
      dates: "Erstellt: 8. Juli 2026 / Aktualisiert: 24. Juli 2026",
    },
    notFound: {
      title: "Seite nicht gefunden",
      message: "Die gesuchte Seite wurde nicht gefunden.",
      back: "← Zurück zur Startseite",
    },
    game: {
      project: "100-Spiele-Projekt",
      genre: "Genre",
      platforms: "Plattformen",
      releaseDate: "Veröffentlichung",
      back: "← Zurück zu allen Spielen",
      mainImage: "Hauptbild",
      appIcon: "App-Symbol",
      screenshot: "Screenshot",
      playUnityroom: "Auf unityroom spielen",
      viewAppStore: "Im App Store ansehen",
      features: "Merkmale",
      howToPlay: "Steuerung",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
  "pt-br": {
    layout: {
      siteName: "Akao Desenvolvimento de Jogos",
      description:
        "Jogos do desenvolvedor independente Akao, incluindo o projeto de 100 jogos na unityroom.",
      unityroom: "100 jogos",
      ios: "Jogos iOS",
      about: "Sobre",
      updatesBefore: "Acompanhe os lançamentos no",
      updatesAfter: "",
      privacy: "Política de Privacidade",
      languageLabel: "Selecionar idioma",
    },
    home: {
      heroLines: ["Novas ideias viram", "novos jogos."],
      intro: "Uma coleção de jogos do desenvolvedor independente Akao.",
      browserButton: "Jogar no navegador",
      mobileButton: "Jogar no iPhone e iPad",
      unityroomTitle: "Projeto de 100 jogos na unityroom",
      unityroomLeadBefore:
        "Estou publicando 100 jogos na unityroom. Acompanhe o desafio no",
      unityroomLeadAfter: ". Todos os jogos rodam direto no navegador.",
      progress: (published, goal) => `${published} / ${goal} jogos publicados`,
      progressLabel: "Jogos publicados",
      iosTitle: "Jogos para iOS",
      iosLead: "Jogos disponíveis na App Store para iPhone e iPad.",
    },
    aboutPage: {
      title: "Sobre o desenvolvedor",
      intro: "Olá, sou Akao, desenvolvedor independente de jogos.",
      project:
        "Transformo ideias em jogos e publico o mais rápido possível. Atualmente trabalho no Projeto de 100 jogos na unityroom, um desafio para lançar 100 jogos de navegador. Títulos que encontrarem público podem virar lançamentos completos. Compartilho o progresso e as novidades no X.",
      partnerHeading: "Meu parceiro",
      partnerName: "Onaga",
      partnerDescription:
        "O chapim-de-cauda-longa que acompanha Akao. Em cada página, Onaga faz perguntas e ajuda a apresentar o jogo.",
      linksHeading: "Links",
      unityroomProfile: "Perfil de Akao",
      appStoreDeveloper: "Página do desenvolvedor",
      contactHeading: "Contato",
      contactBefore: "Para comentários, perguntas ou propostas de trabalho, envie mensagem pelo",
      contactMiddle: "ou e-mail para",
      contactAfter: ".",
    },
    privacyPage: {
      title: "Política de Privacidade",
      operatorHeading: "Responsável",
      operatorBefore:
        "Este site, Akao Desenvolvimento de Jogos, é operado pelo desenvolvedor independente Akao. Para entrar em contato, use",
      operatorMiddle: "ou envie e-mail para",
      analyticsHeading: "Análise de acesso",
      analyticsBefore:
        "Este site usa o Cloudflare Web Analytics para melhorar a experiência. A ferramenta não usa cookies e coleta dados anônimos que não identificam visitantes. Consulte",
      analyticsAfter: "para mais detalhes.",
      languageHeading: "Preferência de idioma",
      languageBody:
        "Este site usa um cookie funcional para lembrar o idioma escolhido. Ele é mantido por um ano e não é usado para identificar visitantes, rastrear publicidade ou qualquer outra finalidade.",
      advertisingHeading: "Publicidade",
      advertisingBefore:
        "Este site poderá usar serviços de publicidade de terceiros, como o Google AdSense. Os provedores podem usar cookies para exibir anúncios com base em interesses. Consulte",
      advertisingAfter: "para mais detalhes.",
      externalHeading: "Links externos",
      externalBody:
        "O responsável não responde por informações ou serviços de sites externos vinculados, incluindo unityroom e App Store. Consulte os termos e políticas de cada serviço.",
      disclaimerHeading: "Isenção de responsabilidade",
      disclaimerBody:
        "Todo esforço é feito para manter o conteúdo correto, mas sua exatidão não é garantida. O responsável não se responsabiliza por danos decorrentes do uso deste site.",
      dates: "Publicada em 8 de julho de 2026 / Atualizada em 24 de julho de 2026",
    },
    notFound: {
      title: "Página não encontrada",
      message: "A página que você procura não foi encontrada.",
      back: "← Voltar ao início",
    },
    game: {
      project: "Projeto de 100 jogos",
      genre: "Gênero",
      platforms: "Plataformas",
      releaseDate: "Data de lançamento",
      back: "← Voltar para todos os jogos",
      mainImage: "imagem principal",
      appIcon: "ícone do app",
      screenshot: "captura de tela",
      playUnityroom: "Jogar na unityroom",
      viewAppStore: "Ver na App Store",
      features: "Recursos",
      howToPlay: "Como jogar",
      akao: "Akao",
      onaga: "Onaga",
    },
  },
};

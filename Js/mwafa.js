<script>

'use strict';
  
// JavaScript to handle click events on about-options and service-options
const aboutOptions = document.querySelectorAll('.about-options');
const serviceOptions = document.querySelectorAll('.service-options');

aboutOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const optionText = option.querySelector('p').textContent;
    console.log(`About Option Selected: ${optionText}`);
  });
});

serviceOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const optionText = option.querySelector('p').textContent;
    console.log(`Service Option Selected: ${optionText}`);
  });
});
  
    const stopwatchElement = document.getElementById('stopwatch');
  let timeInSeconds = 30 * 60; // 30 minutes in seconds
  let timerInterval = null;
  window.addEventListener('load', loadQuizState);

    function updateStopwatch() {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      stopwatchElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`;
      timeInSeconds--;
      if (timeInSeconds < 0) {
        clearInterval(timerInterval);
        handleTimeUp();
      }
    }

    function padZero(value) {
      return value.toString().padStart(2, '0');
    }

    function handleTimeUp() {
      alert('Time is up!');
    }

    // Start the stopwatch
    timerInterval = setInterval(updateStopwatch, 1000);



    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const nextButton = document.getElementById('next-button');
    const redoButton = document.getElementById('redo-button');
    
  const allQuestions = [
    {
        "question": "脊髓神經共有多少對",
        "options": [
            { "label": "A. 21對", "value": "A" },
            { "label": "B. 26對", "value": "B" },
            { "label": "C. 31對", "value": "C" },
            { "label": "D. 35對", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "脊髓神經之作用為",
        "options": [
            { "label": "A.控制心跳,呼吸和血液循環", "value": "A" },
            { "label": "B.控制消化系统的活動", "value": "B" },
            { "label": "C.支配頸部以上身體的知覺活動", "value": "C" },
            { "label": "D.支配頸部以下身體的知覺活動", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "手鉗式固定法",
        "options": [
            { "label": "A.是用於水深少於0.5米的拯救方法", "value": "A" },
            { "label": "B.應先用手指固定溺者的頭部,然後才固定手肘在溺者身上", "value": "B" },
            { "label": "C.反轉溺者時,應在水中進行", "value": "C" },
            { "label": "D.若水深時,施救員可利用救生浮標幫助浮水", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "關於脊柱固定板的使用",
        "options": [
            { "label": "A.應先用固定帶固定溺者的胸部", "value": "A" },
            { "label": "B.將溺者抬水面時,脊柱板要與池邊平衡", "value": "B" },
            { "label": "C.所有施救員都要在水中進行拯救", "value": "C" },
            { "label": "D.將溺者抬離水面時,脊柱板要與池邊成90度角", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "若沒有脊柱固定板,搬離溺者時要",
        "options": [
            { "label": "A.至少五個施救員同時在水中進行", "value": "A" },
            { "label": "B.先將溺者拖至水深不超腰部的岸邊", "value": "B" },
            { "label": "C.溺者上水時身體要與池邊成90度角", "value": "C" },
            { "label": "D.溺者放到岸上後負貴承托溺者頭部之施救員應先將手抽出", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "以下哪一項不是處理脊柱骨折的原則",
        "options": [
            { "label": "A.首要任務是要固定溺者身驅", "value": "A" },
            { "label": "B.固定頭頸之後,應盡快將患者身體之其餘部分固定", "value": "B" },
            { "label": "C.送溺者時盡可能使其仰臥", "value": "C" },
            { "label": "D.盡可能保持溺者之脊柱不動", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "脊髓神經之作用為",
        "options": [
            { "label": "A.負貴接收訊息和傳送腦部指令", "value": "A" },
            { "label": "B.保中樞神經糸统", "value": "B" },
            { "label": "C.加速心跳,吸和血液循環", "value": "C" },
            { "label": "D.保持身體姿勢", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "脊柱受傷的患者可能會 (1)肢體完全失去知覺 (2)休克 (3)呼吸困難 (4)心跳停止",
        "options": [
            { "label": "A.(1)及(3)", "value": "A" },
            { "label": "B.(1)(2)及(3)", "value": "B" },
            { "label": "C.(2)及(4)", "value": "C" },
            { "label": "D.全部皆對", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "自主神經系統是",
        "options": [
            { "label": "A.位於頭部的神經系統", "value": "A" },
            { "label": "B.中樞神經系統的一部分", "value": "B" },
            { "label": "C.控制了腸胃的活動", "value": "C" },
            { "label": "D.控制了四肢的活動和感覺", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "手鉗式固定法",
        "options": [
            { "label": "A.是用於水深及膝的拯救方法", "value": "A" },
            { "label": "B.應先用手肘固定在溺者身上,然後才用手指固定溺者的項部", "value": "B" },
            { "label": "C.是用於溺者掙扎時的拯救方法", "value": "C" },
            { "label": "D.動作完成時,施救員是完全浸在水中", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "處理脊柱骨折的原則包括 (1)保存生命 (2)固定頭頸 (3)固定整條脊柱 (4)運送時盡可能使溺者仰臥",
        "options": [
            { "label": "A.(1)及(3)", "value": "A" },
            { "label": "B.(1)(2)及(3)", "value": "B" },
            { "label": "C.(2)及(4)", "value": "C" },
            { "label": "D.全部皆對", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "椎間盤之作用為",
        "options": [
            { "label": "A.保持身體姿勢", "value": "A" },
            { "label": "B.保護脊髓神經", "value": "B" },
            { "label": "C.减少脊椎骨之間的磨擦", "value": "C" },
            { "label": "D.支配頸部以下身體的知覺活動", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "脊椎骨折的病人可能有以下情况出現 (1)呼吸停止 (2)肢體出現麻痺 (3)口鼻流血 (4)睡孔大小不一",
        "options": [
            { "label": "A.(1)及(2)", "value": "A" },
            { "label": "B.(2)及(3)", "value": "B" },
            { "label": "C.(1)及(3)", "value": "C" },
            { "label": "D.全部皆對", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "水上脊柱骨折之處理次序為 (1)固定頭頸 (2)尋求援助 (3)固定溺者於脊柱板上 (4)將溺者運到岸上",
        "options": [
            { "label": "A.1,2,3,4", "value": "A" },
            { "label": "B.2,1,3,4", "value": "B" },
            { "label": "C.2,1,4,3", "value": "C" },
            { "label": "D.2,3,1,4", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "關於脊柱固定板的使用",
        "options": [
            { "label": "A.應先用固定帶固定溺者的頭部", "value": "A" },
            { "label": "B.在水中固定溺者在脊柱板上的同時,可施行心肺復甦法", "value": "B" },
            { "label": "C.運送溺者時,應盡量使其垂直", "value": "C" },
            { "label": "D.將溺者抬離水面時,脊柱板要與池邊成90度角", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "下列哪一句子不正確:",
        "options": [
            { "label": "A.五公升裝的沙威隆藥水主要用於消毒傷口", "value": "A" },
            { "label": "B.用於消毒一般傷口,沙威隆藥水稀釋比例為1:100", "value": "B" },
            { "label": "C.經稀釋後的沙减隆不可存放過夜", "value": "C" },
            { "label": "D.沙威隆藥水不能用於腦部及中耳受傷,只可服用", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "下列那一句子不正確",
        "options": [
            { "label": "A.不鋼鈍刃藥主要用於剪斷鈔布,繃帶等物品", "value": "A" },
            { "label": "B.使用彈性繃帶必須留意繃帶壓力", "value": "B" },
            { "label": "C.冰墊可作冷敷用途", "value": "C" },
            { "label": "D.使用消毒眼墊應避免手部接觸及敷墊部分", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "新民夾板的內層結構是何種金屬",
        "options": [
            { "label": "A.鐵", "value": "A" },
            { "label": "B.銅", "value": "B" },
            { "label": "C.鋁", "value": "C" },
            { "label": "D.鎂", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "以下哪項不是袋裝面罩之優點",
        "options": [
            { "label": "A.可增加入氣量", "value": "A" },
            { "label": "B.細小輕巧,方便𢹂帶", "value": "B" },
            { "label": "C.在進行吹氣法人工呼吸時,可避免直接觸患者", "value": "C" },
            { "label": "D.面罩上之單向活門可避免吸入患者排出的氧體", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "膠囊及面罩復甦器之成人氧袋可存氣多少毫升",
        "options": [
            { "label": "A.1000-2000", "value": "A" },
            { "label": "B.500-1000", "value": "B" },
            { "label": "C.2000-2500", "value": "C" },
            { "label": "D.2500-3000", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "下列那一句子不正確",
        "options": [
            { "label": "A.氣樽不可接觸油脂", "value": "A" },
            { "label": "B.氧樽須存放在清涼乾爽的地方,遠離一切發熱器", "value": "B" },
            { "label": "C.氧樽輸氣時流量應盡量調高", "value": "C" },
            { "label": "D.氣樽用後應立即關閉,氧梅之樽掣亦應關閉", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "對有呼吸的傷病者,抽液法不可連續施行超過",
        "options": [
            { "label": "A.5秒", "value": "A" },
            { "label": "B.10秒", "value": "B" },
            { "label": "C.15秒", "value": "C" },
            { "label": "D.20秒", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "選擇尺碼適中的口咽人工氧喉應把氣喉凸緣底部放在傷病者之口角而向下彎伸至",
        "options": [
            { "label": "A.下頷尖", "value": "A" },
            { "label": "B.耳垂", "value": "B" },
            { "label": "C.額角", "value": "C" },
            { "label": "D.上咽喉", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "如果氣道完全阻塞,下列那個情況不會出現",
        "options": [
            { "label": "A.感覺不到或聽不到傷者口和鼻的氣流", "value": "A" },
            { "label": "B.傷者的胸部沒有起伏", "value": "B" },
            { "label": "C.替傷者灌氣時,會發覺傷者的肺部難以充氣", "value": "C" },
            { "label": "D.用耳聽傷者之胸部可以聽到空氣進入", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "當傷者陷入昏迷的時候首先處理的是",
        "options": [
            { "label": "A.人工灌氣", "value": "A" },
            { "label": "B.氣道暢通", "value": "B" },
            { "label": "C.心外壓法", "value": "C" },
            { "label": "D.包紮傷處", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "當急救員要替一個可能有頸椎受傷的者暢通氣道時,可使用以下哪一種方法",
        "options": [
            { "label": "A.復原卧式", "value": "A" },
            { "label": "B.按額提顎法", "value": "B" },
            { "label": "C.改良推顎法", "value": "C" },
            { "label": "D.以上全對", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "處理懐疑有脊柱受傷的傷者嘔吐時,應盡量使用下列哪種方法",
        "options": [
            { "label": "A.將傷者的頭頸轉側以便嘔吐", "value": "A" },
            { "label": "B.將傷者頭頸和整條脊柱在同一直線的情况下轉側嘔吐", "value": "B" },
            { "label": "C.抬高傷者上身再轉側其頭頸以便嘔吐", "value": "C" },
            { "label": "D.以上任何方法都不正確", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "處理傷者氣道,急救員應",
        "options": [
            { "label": "A.張開傷者口腔", "value": "A" },
            { "label": "B.打開傷者氣道及清理口腔", "value": "B" },
            { "label": "C.保持氣道暢通", "value": "C" },
            { "label": "D.以上全對", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "在潮濕酷熱的日子,運動員於運動後感到暈眩,惡心,面色蒼白,皮膚濕冷,脈搏速而弱,呼吸快而淺,他應是",
        "options": [
            { "label": "A.熱衰竭", "value": "A" },
            { "label": "B.中暑", "value": "B" },
            { "label": "C.感冒", "value": "C" },
            { "label": "D.體溫過高", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "包紮肢體後,如何可以判斷是否妨礙血液循環",
        "options": [
            { "label": "A.檢查平結是否正確", "value": "A" },
            { "label": "B.檢查傷病者清醒程度", "value": "B" },
            { "label": "C.檢查傷病者手指或腳趾的血液循環情况", "value": "C" },
            { "label": "D.檢查傷病者的面部是否蒼白", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "救治休克的傷病者,應該",
        "options": [
            { "label": "A.將雙腳提高,增加重要器官血液循環", "value": "A" },
            { "label": "B.將雙腳平放,保持血液𣈱通", "value": "B" },
            { "label": "C.將頭和肩部承高,减少腦部充血", "value": "C" },
            { "label": "D.使傷者平卧,保持面部向上", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "處理骨折傷病者時,應避免下列哪一項行動",
        "options": [
            { "label": "A.讓傷者飲食", "value": "A" },
            { "label": "B.利用充氣夾板將傷肢固定", "value": "B" },
            { "label": "C.把傷處牢固地綁於身體沒有受傷的部位", "value": "C" },
            { "label": "D.用雙手穩定及支承傷處", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "肋骨多處受傷可能引起胸壁失去支持,造成'對抗性呼吸'的情况,這種傷勢稱為",
        "options": [
            { "label": "A.吸氣性創傷", "value": "A" },
            { "label": "B.胸部陷傷", "value": "B" },
            { "label": "C.胸部創傷", "value": "C" },
            { "label": "D.對抗性呼吸", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "處理軟組織受傷不包括",
        "options": [
            { "label": "A.熱敷", "value": "A" },
            { "label": "B.抬高傷處", "value": "B" },
            { "label": "C.讓傷者休息", "value": "C" },
            { "label": "D.用繃帶在傷處加壓", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "當使用手動手吸器時,用於沒有呼吸的傷者,不可連續抽吸超過多少時間",
        "options": [
            { "label": "A.3秒鐘", "value": "A" },
            { "label": "B.5秒鐘", "value": "B" },
            { "label": "C.7秒鐘", "value": "C" },
            { "label": "D.20秒鐘", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "搬運正在施行心肺復法的傷病者時應盡量缩短中斷時間,而每次中断的時間不得超過多少時間",
        "options": [
            { "label": "A.一分鐘", "value": "A" },
            { "label": "B.十秒鐘", "value": "B" },
            { "label": "C.三十秒鐘", "value": "C" },
            { "label": "D.五分鐘", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "醫療用的氧氣樽顔色是",
        "options": [
            { "label": "A.白色樽頸,藍色樽身", "value": "A" },
            { "label": "B.全黑色", "value": "B" },
            { "label": "C.白色樽頸,黑色樽身", "value": "C" },
            { "label": "D.藍白色樽頸,藍色樽身", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "膠囊及面罩復甦器接上氧氣及氧氣储存袋以每分鐘15公升的氧氣流量,其输出的氧氣濃度可達",
        "options": [
            { "label": "A.50%", "value": "A" },
            { "label": "B.40-60%", "value": "B" },
            { "label": "C.90-100%", "value": "C" },
            { "label": "D.21%", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "一般急救用之氧氣壓力調節器,作用是将樽内的高壓氧體降至安全的氣壓输给病者,其安全壓力為",
        "options": [
            { "label": "A.每平方时少於70磅", "value": "A" },
            { "label": "B.每平方时大於70磅", "value": "B" },
            { "label": "C.每平方时大於100磅", "value": "C" },
            { "label": "D.每平方时少於10磅", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "處理被鯊魚咬傷而大量出血傷者時不應",
        "options": [
            { "label": "A.使用間接壓法止血", "value": "A" },
            { "label": "B.使用繃帶包紥", "value": "B" },
            { "label": "C.使用止血帶", "value": "C" },
            { "label": "D.除去沾滿血漬的紗布再包紥", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "以下哪一項不是被海洋生物刺傷而出現中毒的現象",
        "options": [
            { "label": "A.嘔吐", "value": "A" },
            { "label": "B.傷處感覺麻痺", "value": "B" },
            { "label": "C.口渴", "value": "C" },
            { "label": "D.發鉗", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "以下哪一種情况可引致解壓病",
        "options": [
            { "label": "A.急促潛到深水處", "value": "A" },
            { "label": "B.從深水處急促回到水面", "value": "B" },
            { "label": "C.潘水慮呼吸過慢", "value": "C" },
            { "label": "D.潛水時遇到海洋生物受驚", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "擠壓症的症狀包括",
        "options": [
            { "label": "A.全身麻痺", "value": "A" },
            { "label": "B.耳部疼痛", "value": "B" },
            { "label": "C.手部抽搐", "value": "C" },
            { "label": "D.呼吸停止", "value": "D" }
        ],
        "correctAnswer": "B"
    },
    {
        "question": "下潛前進行超呼吸(换氣過度),可引致",
        "options": [
            { "label": "A.血液内的二氧化碳降低", "value": "A" },
            { "label": "B.血液内的氧氣降低", "value": "B" },
            { "label": "C.下潛的時問减少", "value": "C" },
            { "label": "D.下潛的深度减少", "value": "D" }
        ],
        "correctAnswer": "A"
    },
    {
        "question": "以下哪一項不是肺部破裂的症状",
        "options": [
            { "label": "A.呼吸困難", "value": "A" },
            { "label": "B.吞嚥困難", "value": "B" },
            { "label": "C.發紺", "value": "C" },
            { "label": "D.痙攣", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "下列哪種傷患者,可使用口咽人工氧喉",
        "options": [
            { "label": "A.氧道阻塞之清醒傷者", "value": "A" },
            { "label": "B.有微弱呼吸之清醒傷者", "value": "B" },
            { "label": "C.喉部受重擊之傷者", "value": "C" },
            { "label": "D.昏迷無呼吸之傷者", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "使用口咽人工氣候時,傷者出現咳嗽,施救員",
        "options": [
            { "label": "A.繼續施行吹氣法人工呼吸", "value": "A" },
            { "label": "B.重新𣈱通氣道", "value": "B" },
            { "label": "C.將傷者摆放復原卧式", "value": "C" },
            { "label": "D.立即將口咽人工氣喉取出", "value": "D" }
        ],
        "correctAnswer": "D"
    },
    {
        "question": "下列哪一項是病微",
        "options": [
            { "label": "A.傷者口述的傷患徵状", "value": "A" },
            { "label": "B.施救員從傷者身上檢到之病歴咭指示", "value": "B" },
            { "label": "C.施救員自己的視,聽,髑及味覺察傷者的結果", "value": "C" },
            { "label": "D.傷者自己診斷的结果", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "使用膠囊及面罩復甦器接駁了氧氣樽後,流量選調較至",
        "options": [
            { "label": "A.6公升/分鐘", "value": "A" },
            { "label": "B.8公升/分鐘", "value": "B" },
            { "label": "C.15公升/分鐘", "value": "C" },
            { "label": "D.20公升/分鐘", "value": "D" }
        ],
        "correctAnswer": "C"
    },
    {
        "question": "下列哪一項能减輕蟲咬傷的痛楚及腫脹",
        "options": [
            { "label": "A.冷敷", "value": "A" },
            { "label": "B.按摩", "value": "B" },
            { "label": "C.熱敷", "value": "C" },
            { "label": "D.包紮傷處", "value": "D" }
        ],
        "correctAnswer": "A"
    }

  ];

  const numRandomQuestions = 50;
  const questions = getRandomQuestions(numRandomQuestions);


    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswered = false;

    function showQuestion() {
      const question = questions[currentQuestionIndex];
      questionText.textContent = question.question;
      optionsContainer.innerHTML = '';

      question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.dataset.value = option.value;
        optionElement.addEventListener('click', handleOptionClick);

        const optionLabel = document.createElement('span');
        optionLabel.classList.add('option-label');
        optionLabel.textContent = option.label;

        optionElement.appendChild(optionLabel);
        optionsContainer.appendChild(optionElement);
      });

      if (userAnswered) {
        const selectedOption = optionsContainer.querySelector(`[data-value="${question.userAnswer}"]`);
        if (selectedOption) {
          selectedOption.classList.add('wrong-option');
        }
        const correctOption = optionsContainer.querySelector(`[data-value="${question.correctAnswer}"]`);
        if (correctOption) {
          correctOption.classList.add('correct-option');
        }
      }

      feedbackContainer.textContent = '';
      nextButton.style.display = 'none';
    }

function handleOptionClick(event) {
  if (userAnswered) {
    return;
  }

  userAnswered = true;
  const selectedOption = event.target.closest('.option');

  // Log the selectedOption object to the console.
  console.log('selectedOption', selectedOption);

  // If no element was found with the class 'option', log an error and return.
  if (!selectedOption) {
    console.error('No option selected');
    return;
  }

  const selectedValue = selectedOption.dataset.value;

  // Log the selectedValue to the console.
  console.log('selectedValue', selectedValue);

  // Debugging logs
console.log('questions', questions);
console.log('currentQuestionIndex', currentQuestionIndex);
console.log('questions.length', questions.length); // check the length of the array

  const question = questions[currentQuestionIndex];

  console.log('question', question);  // Add this line

  // If question is undefined, log an error and return.
  if (!question) {
    console.error('No current question');
    return;
  }

  question.userAnswer = selectedValue;

  if (selectedValue === question.correctAnswer) {
    selectedOption.classList.add('correct-option');
    score++;
  } else {
    selectedOption.classList.add('wrong-option');
    const correctOption = optionsContainer.querySelector(`[data-value="${question.correctAnswer}"]`);
    correctOption.classList.add('correct-option');
  }

  feedbackContainer.textContent = selectedValue === question.correctAnswer ? '正確答案' : '錯誤答案';
  nextButton.style.display = 'block';
}
    function showNextQuestion() {
      currentQuestionIndex++;
      userAnswered = false;

      if (currentQuestionIndex >= questions.length) {
        showResult();
      } else {
        showQuestion();
      }
    }

function saveQuizState() {
  const quizState = {
    currentQuestionIndex: currentQuestionIndex,
    score: score,
    userAnswers: questions.map(question => question.userAnswer)
  };
  localStorage.setItem('quizState', JSON.stringify(quizState));
}


function showResult() {
  saveQuizState();
  questionText.textContent = '測試完成';
  optionsContainer.innerHTML = '';
  feedbackContainer.textContent = `你的分數是 ${score} / ${questions.length}`;
  nextButton.style.display = 'none';
  redoButton.style.display = 'block';

  clearInterval(timerInterval); // Stop the timer
}

function loadQuizState() {
    try {
        const storedState = localStorage.getItem('quizState');

        if (storedState) {
            const parsedState = JSON.parse(storedState);
            currentQuestionIndex = parsedState.currentQuestionIndex;
            score = parsedState.score;
            showQuestion();
        } else {
            startQuiz();
        }
    } catch (error) {
        console.error('Failed to load quiz state:', error);
        startQuiz();
    }
}

    function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

  function getRandomQuestions(numQuestions) {
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numQuestions);
  }

function redoQuiz() {
  localStorage.removeItem('quizState');
  clearInterval(timerInterval);
  loadQuizState();
  currentQuestionIndex = 0;
  score = 0;
  userAnswered = false;
  showQuestion();
  redoButton.style.display = 'none';
  clearInterval(timerInterval); // Clear the previous timer interval
  timeInSeconds = 30 * 60; // Reset the timer to 30 minutes
  timerInterval = setInterval(updateStopwatch, 1000); // Start the timer again
}    

    nextButton.addEventListener('click', showNextQuestion);
    redoButton.addEventListener('click', redoQuiz);

    // Show the first question
    showQuestion();

    </script>

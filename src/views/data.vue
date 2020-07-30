<template lang="pug">
    #data

    1. 名稱
    2. 英文名稱
    3. 影片網址
    4. 動作步驟
    5. 資訊欄 1/2/3
    6. 番茄鐘
    7. index (跳頁用)

</template>

<script>
export default {
  data () {
    return {
      運動前暖身:
      [
        { id: 1, title: '頸部暖身', subtitle: 'Neck Warm Up', video: 'https://www.youtube.com/embed/j1L1hoKc0XI', steps: ['抬頭正面朝向前方，慢慢將一邊耳朵貼向肩膀，保持正面朝前，不轉頭，並注意不要聳肩，另一邊亦重複相同動作。','抬頭、背挺直，肩膀保持不動，慢慢將正臉轉90度朝向一邊，注意下巴不要往脖子縮，另一邊亦重複相同動作。'], info: [{使用部位:[ '提肩胛肌', '胸鎖乳突肌', '斜方肌', '中斜角肌', '前斜角肌', '後斜角肌','頭夾肌','頭半棘肌','頭最長肌'] },{},{}], timerItem: '', index: 0 },
        { id: 2, title: '肩部暖身', subtitle: 'Shoulder Warm Up', video: 'https://www.youtube.com/embed/bj5NRi52YLc', steps: ['抬頭挺胸，慢慢將兩邊肩膀提起，朝前、下旋轉一圈到後面再回到原位，相同動作改成由後向前旋轉，重複數次。','平舉起一邊手臂，朝向另一側肩膀貼近，彎曲另一邊手肘，夾緊平舉的手臂，感受到肩膀有拉緊的感覺，另一側亦重複相同動作。','右邊手臂向上舉起，彎下手肘放在左側背後，左邊的手按住彎曲的手肘，向左邊拉，左側亦重複相同的動作。','雙手舉起，以肩膀為圓心由前往後畫圈，重複同樣動作改由後往前畫圈。'], info: [{使用部位:['肩胛下肌','棘上肌','棘下肌','小圓肌']},{},{}], timerItem: '', index: 1 },
        { id: 3, title: '腰部暖身', subtitle: 'Waist Warm Up', video: 'https://www.youtube.com/embed/-Vd7arp9ZAE', steps: '雙手向上平舉，雙腳打開與肩同寬，扭轉腰部使正面朝向右方，左側亦重複相同的動作。', info: [{使用部位:['腹斜肌','闊背肌','三角肌','豎脊肌','腹直肌']},{},{}], timerItem: '', index: 2 },
        { id: 4, title: '腿部暖身', subtitle: 'Legs Warm Up', video: 'https://www.youtube.com/embed/MoW1hXjDA4I', steps: ['彎曲膝蓋向上抬起到腰部位置，抬起時用雙手抱住膝蓋再放下，換腳重複相同動作。','右腳向後勾起，腳跟向臀部貼近時，用手抓住腳踝像臀部壓，感覺大腿前側有緊的感覺，左側亦重複相同的動作。','彎曲右側膝蓋，並將右腳抬起到腰部位置呈現盤腿狀，雙手抓住小腿前側向身體拉近，左側亦重複相同的動作。'], info: [{使用部位:['股外側肌','股直肌','內收肌','股二頭肌','半腱肌']},{},{}], timerItem: '', index: 3 },
        { id: 5, title: '膝蓋暖身', subtitle: 'Knees Warm Up', video: 'https://www.youtube.com/embed/fUgXkL61WnU', steps: ['雙腳併攏，膝蓋微彎，彎腰將雙手放在膝蓋上，順時針旋轉膝蓋，之後逆時針重複同樣的動作'], info: [{使用部位:['股四頭肌','膝蓋肌腱','膕繩肌','半腱肌','半膜肌','']},{},{}], timerItem: '', index: 4 },
        { id: 6, title: '腳踝暖身', subtitle: 'Ankle Warm Up', video: 'https://www.youtube.com/embed/zwZBcMuNN6c', steps: ['一側腳跟向後抬起，膝蓋彎曲，大幅度旋轉腳踝，另一側重複同樣動作。'], info: [{使用部位:['腓骨長肌','腓骨短肌','第三腓骨肌']},{},{}], timerItem: '', index: 5 }
      ],
      核心肌群鍛鍊:
      [
        { id: 1, title: '曲膝橋式', subtitle: 'Glute Bridge', video: 'https://www.youtube.com/embed/rXAbcneAr3I', steps: ['平躺地上，雙腿彎曲，膝部指向天','雙手放平，置於身體兩側','提起腰部，將膝蓋、腰和膊頭成一直線','收緊腹肌，靜止3秒','放鬆，落下'], info: [{針對肌群:['臀肌 (Glute)']},{訓練建議量:['初學每次3組，每組10下']},{}], timerItem: '', index:6 },
        { id: 2, title: '捲腹', subtitle: 'Crunch', video: 'https://www.youtube.com/embed/Xyd_fa5zoEU', steps: ['身體躺在地下放鬆','雙腳屈曲，腳掌放在地上','慢慢用腰力將上身抬起','放鬆，回復第一步。'], info: [{使用部位:['腹直肌']},{訓練建議量:['初學者每組10次，每次做3組，每組休息時間10至15分鐘。']},{}], timerItem: '', index:7 },
        { id: 3, title: '跪姿撐體', subtitle: 'Bird Dog', video: 'https://www.youtube.com/embed/wiFNA3sqjCA', steps: ['膝部跪在地上，雙手垂直支撐上身。','頭、肩、腰、臀，四個部位，成一直線。','左手伸出，右腳向後伸直。與頭、肩、腰、臀成一直線。','靜止2-3秒。回復1之位置，左右交替重覆動作。'], info: [{針對肌群:['臀肌 (Glute)','腹橫肌 (Transverse Abdominis)']},{},{}], timerItem: '', index:8 },
        { id: 4, title: '核心踢腿', subtitle: 'Flutter kicks', video: 'https://www.youtube.com/embed/WRnq49TAv-w', steps: ['仰臥，雙腿伸直至45度角。保持手臂伸直並與地板平行，手掌朝下。稍微抬起頭、脖子和肩膀。','保持雙腿伸直並將雙腳指尖併攏，開始放低一隻腳。','再抬高放低的腳，然後放低另一隻，保持核心收緊。','雙腿持續交替運動。'], info: [{針對肌群:['腹直肌','腹內斜肌','腹外斜肌','腹橫肌']},{},{}], timerItem: '', index:9 },
        { id: 5, title: '平板支撐', subtitle: 'Plank', video: 'https://www.youtube.com/embed/oZI1328BgIk', steps: [''], info: [{針對肌群:['腹直肌','腹內斜肌','腹外斜肌']},{},{}], timerItem: '', index:10 }
      ],
      日常伸展放鬆:
      [
        { id:1 , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index:11 },
        { id:2 , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index:12 },
        { id:3 , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index:13 },
        { id:4 , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index:14 },
        { id:5 , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index:15 },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: }
      ],
      運動後收操:
      [
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: },
        { id: , title: '', subtitle: '', video: '', steps: '', info: [{},{},{}], timerItem: '', index: }
      ]
    }
  }
}
</script>

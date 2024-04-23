// A very simple web socket client
function getClientHtml(domain) {
  return `<html>
    <body>
      <h1>WebSocket Example</h1>
      <pre id="pongs"></pre>

      <script>
        function tree(m,d,t){if(m<=.5){if(t<=-.5){if(d<=4.5){if(d<=3.5){if(d<=2.5){if(d<=1.5){if(d<=.5){return 257.5}else{return 283.6666666666667}}else{return 239.5}}else{return 323}}else{return 238.5}}else{if(d<=5.5){return 295.6666666666667}else{return 270.6666666666667}}}else{if(t<=6.5){if(t<=1.5){if(d<=5.5){if(t<=.5){if(d<=4.5){if(d<=.5){return 524.25}else{if(d<=2.5){if(d<=1.5){return 442.6666666666667}else{return 419.6666666666667}}else{if(d<=3.5){return 447.3333333333333}else{return 464.6666666666667}}}}else{return 356}}else{if(d<=.5){return 340.6666666666667}else{if(d<=2.5){if(d<=1.5){return 452.5}else{return 422.3333333333333}}else{if(d<=4.5){if(d<=3.5){return 329.6666666666667}else{return 358}}else{return 416.75}}}}}else{if(t<=.5){return 293.25}else{return 359.75}}}else{if(d<=5.5){if(t<=3.5){if(d<=.5){if(t<=2.5){return 490.4}else{return 472.8}}else{if(d<=4.5){if(t<=2.5){if(d<=2.5){if(d<=1.5){return 395}else{return 394}}else{if(d<=3.5){return 442}else{return 411.3333333333333}}}else{if(d<=3.5){if(d<=1.5){return 395.5}else{if(d<=2.5){return 401.6666666666667}else{return 403.3333333333333}}}else{return 380}}}else{if(t<=2.5){return 416.75}else{return 442.25}}}}else{if(t<=4.5){if(d<=3.5){if(d<=1.5){if(d<=.5){return 373}else{return 385.3333333333333}}else{if(d<=2.5){return 353}else{return 345.6666666666667}}}else{if(d<=4.5){return 413.3333333333333}else{return 416.25}}}else{if(t<=5.5){if(d<=4.5){if(d<=1.5){if(d<=.5){return 429}else{return 428}}else{if(d<=2.5){return 474.5}else{if(d<=3.5){return 431}else{return 464.3333333333333}}}}else{return 421.25}}else{if(d<=3.5){if(d<=2.5){if(d<=.5){return 366.4}else{if(d<=1.5){return 438.3333333333333}else{return 417.3333333333333}}}else{return 340.6666666666667}}else{if(d<=4.5){return 467.6666666666667}else{return 400.25}}}}}}else{if(t<=5.5){if(t<=4.5){if(t<=3.5){if(t<=2.5){return 438}else{return 432.75}}else{return 411.6666666666667}}else{return 477.3333333333333}}else{return 569}}}}else{if(d<=3.5){if(d<=.5){return 371}else{if(d<=1.5){return 306.3333333333333}else{if(d<=2.5){return 364}else{return 321.3333333333333}}}}else{if(d<=4.5){return 383.6666666666667}else{if(d<=5.5){return 348}else{return 372.6666666666667}}}}}}else{if(m<=1.5){if(t<=.5){if(t<=-.5){if(d<=4.5){if(d<=2.5){if(d<=1.5){if(d<=.5){return 63.5}else{return 64.66666666666667}}else{return 61.5}}else{if(d<=3.5){return 85}else{return 65.5}}}else{if(d<=5.5){return 93.66666666666667}else{return 72}}}else{if(d<=.5){return 102}else{if(d<=3.5){if(d<=1.5){return 82.66666666666667}else{if(d<=2.5){return 86.33333333333333}else{return 87.66666666666667}}}else{if(d<=5.5){if(d<=4.5){return 101}else{return 95.5}}else{return 89.75}}}}}else{if(t<=5.5){if(t<=1.5){if(d<=.5){return 210}else{if(d<=2.5){if(d<=1.5){return 96}else{return 100}}else{if(d<=5.5){if(d<=3.5){return 131}else{if(d<=4.5){return 112.66666666666667}else{return 116.75}}}else{return 131.75}}}}else{if(d<=2.5){if(d<=.5){if(t<=2.5){return 95.2}else{if(t<=3.5){return 116}else{if(t<=4.5){return 100.4}else{return 104.2}}}}else{if(d<=1.5){if(t<=4.5){if(t<=3.5){if(t<=2.5){return 120.5}else{return 119.5}}else{return 99}}else{return 126.33333333333333}}else{if(t<=4.5){if(t<=3.5){if(t<=2.5){return 109.66666666666667}else{return 107.33333333333333}}else{return 114}}else{return 97}}}}else{if(d<=5.5){if(t<=3.5){if(d<=3.5){if(t<=2.5){return 114.66666666666667}else{return 131.66666666666666}}else{if(t<=2.5){if(d<=4.5){return 124}else{return 137}}else{if(d<=4.5){return 144}else{return 139.25}}}}else{if(d<=4.5){if(t<=4.5){if(d<=3.5){return 130}else{return 133.66666666666666}}else{if(d<=3.5){return 128}else{return 126.33333333333333}}}else{if(t<=4.5){return 116.5}else{return 105}}}}else{if(t<=3.5){if(t<=2.5){return 109}else{return 124.5}}else{if(t<=4.5){return 99.66666666666667}else{return 107}}}}}}else{if(d<=.5){if(t<=6.5){return 100.2}else{return 104.2}}else{if(d<=5.5){if(t<=6.5){if(d<=3.5){if(d<=2.5){return 89.33333333333333}else{return 85.66666666666667}}else{if(d<=4.5){return 90.66666666666667}else{return 92.75}}}else{if(d<=1.5){return 78.66666666666667}else{if(d<=3.5){if(d<=2.5){return 88.33333333333333}else{return 94.66666666666667}}else{if(d<=4.5){return 79.33333333333333}else{return 87.5}}}}}else{if(t<=6.5){return 118}else{return 86.33333333333333}}}}}}else{if(m<=2.5){if(d<=3.5){if(t<=-.5){if(d<=2.5){if(d<=.5){return 398}else{if(d<=1.5){return 388}else{return 394}}}else{return 406}}else{if(t<=6.5){if(t<=.5){if(d<=1.5){if(d<=.5){return 431}else{return 432}}else{if(d<=2.5){return 463.5}else{return 435.5}}}else{if(t<=1.5){if(d<=2.5){if(d<=1.5){if(d<=.5){return 487}else{return 504}}else{return 483}}else{return 471}}else{if(d<=1.5){if(t<=5.5){if(d<=.5){if(t<=2.5){return 465.3333333333333}else{if(t<=4.5){if(t<=3.5){return 431.6666666666667}else{return 431}}else{return 459}}}else{if(t<=3){return 423}else{if(t<=4.5){return 495.5}else{return 452}}}}else{return 481}}else{if(t<=5.5){if(d<=2.5){if(t<=4.5){if(t<=3.5){if(t<=2.5){return 429}else{return 458.5}}else{return 421}}else{return 464}}else{if(t<=4.5){if(t<=3.5){if(t<=2.5){return 458}else{return 443}}else{return 504}}else{return 437}}}else{if(d<=2.5){return 415}else{return 429.5}}}}}}else{if(d<=.5){return 451}else{if(d<=2.5){if(d<=1.5){return 407}else{return 394}}else{return 431}}}}}else{if(d<=5.5){if(d<=4.5){if(t<=-.5){return 413.5}else{if(t<=5.5){if(t<=.5){return 553}else{if(t<=1.5){return 469.5}else{if(t<=2.5){return 563.5}else{if(t<=3.5){return 477}else{if(t<=4.5){return 526.5}else{return 508}}}}}}else{if(t<=6.5){return 419}else{return 408}}}}else{if(t<=-.5){return 607.3333333333334}else{if(t<=1.5){if(t<=.5){return 460}else{return 484}}else{if(t<=3.5){if(t<=2.5){return 519}else{return 636}}else{if(t<=5.5){if(t<=4.5){return 510.5}else{return 453}}else{if(t<=6.5){return 593}else{return 478}}}}}}}else{if(t<=.5){if(t<=-.5){return 390}else{return 394}}else{if(t<=6){if(t<=4.5){if(t<=1.5){return 439}else{if(t<=2.5){return 453}else{return 457}}}else{return 421}}else{return 468}}}}}else{if(m<=4.5){if(t<=.5){if(t<=-.5){if(d<=1.5){if(m<=3.5){if(d<=.5){return 85}else{return 107}}else{if(d<=.5){return 121.5}else{return 108.5}}}else{if(m<=3.5){if(d<=5.5){if(d<=2.5){return 82}else{if(d<=3.5){return 95}else{if(d<=4.5){return 80}else{return 93.66666666666667}}}}else{return 72.5}}else{if(d<=5.5){if(d<=3.5){if(d<=2.5){return 64}else{return 104}}else{if(d<=4.5){return 63.5}else{return 62.5}}}else{return 94.33333333333333}}}}else{if(d<=4.5){if(d<=.5){if(m<=3.5){return 99.5}else{return 114}}else{if(m<=3.5){if(d<=3.5){if(d<=1.5){return 180.5}else{return 113}}else{return 325.5}}else{if(d<=1.5){return 256.6666666666667}else{if(d<=3.5){if(d<=2.5){return 390.5}else{return 383}}else{return 281.5}}}}}else{if(m<=3.5){if(d<=5.5){return 127.66666666666667}else{return 137}}else{if(d<=5.5){return 65.5}else{return 63}}}}}else{if(t<=6.5){if(m<=3.5){if(t<=4.5){if(d<=4.5){if(t<=1.5){if(d<=1.5){if(d<=.5){return 143.5}else{return 132}}else{if(d<=2.5){return 106}else{return 118}}}else{if(d<=1.5){if(t<=2.5){if(d<=.5){return 82}else{return 110}}else{if(t<=3.5){return 116.5}else{return 108}}}else{if(t<=3.5){if(t<=2.5){if(d<=3.5){return 132}else{return 122}}else{if(d<=2.5){return 121}else{if(d<=3.5){return 105}else{return 120}}}}else{return 136}}}}else{if(d<=5.5){if(t<=1.5){return 85}else{if(t<=2.5){return 138}else{if(t<=3.5){return 93.33333333333333}else{return 82}}}}else{if(t<=3.5){if(t<=1.5){return 104.33333333333333}else{if(t<=2.5){return 130.5}else{return 153}}}else{return 95.5}}}}else{if(d<=4.5){if(d<=2.5){if(d<=1){return 70}else{return 74.5}}else{if(d<=3.5){return 62}else{return 60}}}else{if(d<=5.5){if(t<=5.5){return 92}else{return 74}}else{return 91.5}}}}else{if(d<=5.5){if(d<=1.5){if(t<=1.5){if(d<=.5){return 74}else{return 107.5}}else{if(t<=4.5){if(t<=3.5){if(t<=2.5){if(d<=.5){return 74}else{return 75.5}}else{return 65}}else{if(d<=.5){return 83}else{return 74}}}else{if(d<=.5){if(t<=5.5){return 66}else{return 64.5}}else{if(t<=5.5){return 69}else{return 68.5}}}}}else{if(d<=4.5){if(t<=4.5){if(t<=3.5){if(d<=2.5){if(t<=1.5){return 69}else{if(t<=2.5){return 64}else{return 66}}}else{if(t<=1.5){return 65}else{if(t<=2.5){return 71}else{if(d<=3.5){return 71}else{return 64}}}}}else{if(d<=3){return 75}else{return 78}}}else{if(d<=2.5){return 67}else{if(d<=3.5){if(t<=5.5){return 64}else{return 61}}else{return 55}}}}else{if(t<=5.5){if(t<=1.5){return 64.33333333333333}else{if(t<=3.5){if(t<=2.5){return 69}else{return 75.66666666666667}}else{if(t<=4.5){return 62}else{return 68}}}}else{return 96}}}}else{if(t<=5){if(t<=1.5){return 67.5}else{if(t<=3.5){if(t<=2.5){return 71}else{return 81}}else{return 67.5}}}else{return 191.5}}}}else{if(t<=7.5){if(d<=3.5){if(m<=3.5){if(d<=.5){return 95}else{if(d<=1.5){return 65.5}else{if(d<=2.5){return 57.5}else{return 60}}}}else{if(d<=.5){return 58}else{if(d<=2.5){if(d<=1.5){return 61}else{return 61.5}}else{return 62.5}}}}else{if(d<=4.5){return 106}else{if(d<=5.5){if(m<=3.5){return 59.666666666666664}else{return 63}}else{if(m<=3.5){return 82}else{return 65.33333333333333}}}}}else{if(d<=1.5){if(m<=3.5){return 59}else{return 74}}else{if(d<=5.5){if(m<=3.5){if(d<=2.5){return 50}else{if(d<=4.5){if(d<=3.5){return 52}else{return 55}}else{return 52.333333333333336}}}else{if(d<=3.5){if(d<=2.5){return 53}else{return 53.5}}else{if(d<=4.5){return 60}else{return 56}}}}else{if(m<=3.5){return 60}else{return 60}}}}}}}else{if(m<=5.5){if(t<=6.5){if(t<=-.5){if(d<=2.5){if(d<=.5){return 343}else{if(d<=1.5){return 383}else{return 367}}}else{if(d<=4.5){if(d<=3.5){return 329.6666666666667}else{return 303.3333333333333}}else{if(d<=5.5){return 364.75}else{return 345}}}}else{if(t<=5.5){if(t<=4.5){if(d<=5.5){if(t<=.5){if(d<=4.5){if(d<=.5){return 474.6666666666667}else{if(d<=2.5){if(d<=1.5){return 921}else{return 801.6666666666666}}else{if(d<=3.5){return 615.6666666666666}else{return 679}}}}else{return 500.5}}else{if(d<=3.5){if(d<=.5){if(t<=1.5){return 416}else{if(t<=2.5){return 536.5}else{if(t<=3.5){return 609}else{return 555}}}}else{if(d<=1.5){if(t<=1.5){return 504.5}else{if(t<=3.5){if(t<=2.5){return 437.5}else{return 396.5}}else{return 469}}}else{if(d<=2.5){if(t<=3.5){if(t<=2.5){if(t<=1.5){return 482.5}else{return 611}}else{return 464}}else{return 565}}else{if(t<=1.5){return 413}else{if(t<=2.5){return 447}else{if(t<=3.5){return 472}else{return 459.5}}}}}}}else{if(t<=2.5){if(d<=4.5){if(t<=1.5){return 616}else{return 449}}else{if(t<=1.5){return 465}else{return 554}}}else{if(d<=4.5){if(t<=3.5){return 522.5}else{return 666}}else{if(t<=3.5){return 689}else{return 613}}}}}}else{if(t<=1.5){if(t<=.5){return 417.5}else{return 485}}else{if(t<=2.5){return 708.3333333333334}else{if(t<=3.5){return 816}else{return 719}}}}}else{if(d<=4.5){if(d<=3.5){if(d<=.5){return 891}else{if(d<=1.5){return 702}else{if(d<=2.5){return 774.5}else{return 817.5}}}}else{return 898}}else{if(d<=5.5){return 689}else{return 562}}}}else{if(d<=3.5){if(d<=1.5){if(d<=.5){return 398.6666666666667}else{return 373.5}}else{if(d<=2.5){return 303}else{return 366.5}}}else{if(d<=5.5){if(d<=4.5){return 662}else{return 613.3333333333334}}else{return 715}}}}}else{if(d<=5.5){if(d<=4.5){if(d<=1.5){if(d<=.5){return 278.6666666666667}else{return 324}}else{if(d<=3.5){if(d<=2.5){return 289.6666666666667}else{return 268}}else{return 294}}}else{return 341}}else{return 421}}}else{if(m<=6.5){if(d<=4.5){if(t<=5.5){if(t<=-.5){if(d<=3.5){if(d<=1.5){if(d<=.5){return 103.5}else{return 102.33333333333333}}else{if(d<=2.5){return 100.66666666666667}else{return 102}}}else{return 105}}else{if(t<=.5){if(d<=2.5){if(d<=.5){return 128}else{if(d<=1.5){return 181.5}else{return 201}}}else{if(d<=3.5){return 134}else{return 116}}}else{if(t<=2.5){if(t<=1.5){if(d<=3.5){if(d<=2.5){if(d<=.5){return 128}else{if(d<=1.5){return 123.5}else{return 124}}}else{return 116}}else{return 138.5}}else{if(d<=.5){return 139.66666666666666}else{if(d<=2.5){if(d<=1.5){return 130.5}else{return 128}}else{if(d<=3.5){return 131}else{return 132}}}}}else{if(d<=3.5){if(d<=1.5){if(t<=4.5){if(t<=3.5){if(d<=.5){return 116.33333333333333}else{return 127.5}}else{if(d<=.5){return 128.33333333333334}else{return 120.5}}}else{if(d<=.5){return 120}else{return 114}}}else{if(t<=4.5){if(t<=3.5){if(d<=2.5){return 105}else{return 112.5}}else{if(d<=2.5){return 109}else{return 100.5}}}else{if(d<=2.5){return 110}else{return 132}}}}else{if(t<=4.5){if(t<=3.5){return 120.5}else{return 158.5}}else{return 109}}}}}}else{if(d<=3.5){if(t<=6.5){if(d<=1.5){if(d<=.5){return 103.2}else{return 106.33333333333333}}else{if(d<=2.5){return 83.66666666666667}else{return 87}}}else{if(d<=.5){return 73.8}else{if(d<=1.5){return 92.33333333333333}else{if(d<=2.5){return 70.5}else{return 78.5}}}}}else{if(t<=6.5){return 199}else{return 108}}}}else{if(t<=.5){if(t<=-.5){if(d<=5.5){return 102}else{return 101}}else{if(d<=5.5){return 119.75}else{return 116}}}else{if(t<=7.5){if(t<=2.5){if(t<=1.5){if(d<=5.5){return 173.33333333333334}else{return 139}}else{if(d<=5.5){return 201.33333333333334}else{return 235.33333333333334}}}else{if(t<=4.5){if(d<=5.5){if(t<=3.5){return 120}else{return 179.33333333333334}}else{if(t<=3.5){return 178.66666666666666}else{return 114.33333333333333}}}else{if(t<=6.5){if(d<=5.5){if(t<=5.5){return 131}else{return 186}}else{if(t<=5.5){return 214.33333333333334}else{return 101}}}else{if(d<=5.5){return 221.5}else{return 178}}}}}else{return 80}}}}else{if(t<=5.5){if(t<=-.5){if(d<=3.5){if(d<=.5){return 122.66666666666667}else{if(d<=1.5){return 132}else{if(d<=2.5){return 138}else{return 137.66666666666666}}}}else{if(d<=5.5){if(d<=4.5){return 118.33333333333333}else{return 118.75}}else{return 128.75}}}else{if(t<=2.5){if(t<=.5){if(d<=4.5){if(d<=.5){return 184}else{if(d<=1.5){return 234}else{if(d<=3.5){if(d<=2.5){return 248.33333333333334}else{return 256.6666666666667}}else{return 241.33333333333334}}}}else{if(d<=5.5){return 149.75}else{return 124.25}}}else{if(d<=5.5){if(d<=1.5){if(t<=1.5){if(d<=.5){return 132.75}else{return 144.5}}else{if(d<=.5){return 211.75}else{return 176}}}else{if(d<=4.5){if(t<=1.5){if(d<=2.5){return 131.66666666666666}else{if(d<=3.5){return 178.5}else{return 155.33333333333334}}}else{if(d<=2.5){return 162}else{if(d<=3.5){return 138}else{return 121}}}}else{if(t<=1.5){return 140.75}else{return 131.25}}}}else{if(t<=1.5){return 152.33333333333334}else{return 260.75}}}}else{if(d<=5.5){if(d<=.5){if(t<=3.5){return 212}else{if(t<=4.5){return 172.5}else{return 156.2}}}else{if(d<=4.5){if(t<=4.5){if(t<=3.5){if(d<=1.5){return 167}else{if(d<=3.5){if(d<=2.5){return 228.33333333333334}else{return 212.33333333333334}}else{return 180.66666666666666}}}else{if(d<=1.5){return 242}else{if(d<=3.5){if(d<=2.5){return 182.5}else{return 178.5}}else{return 227}}}}else{if(d<=1.5){return 174.66666666666666}else{if(d<=2.5){return 206}else{if(d<=3.5){return 174}else{return 197.66666666666666}}}}}else{if(t<=4.5){if(t<=3.5){return 132.5}else{return 161.5}}else{return 223.66666666666666}}}}else{if(t<=4.5){if(t<=3.5){return 238}else{return 243.66666666666666}}else{return 170}}}}}else{if(d<=3.5){if(d<=.5){if(t<=6.5){return 147.4}else{return 131}}else{if(d<=2.5){if(t<=6.5){if(d<=1.5){return 122}else{return 122.66666666666667}}else{if(d<=1.5){return 116.66666666666667}else{return 110}}}else{if(t<=6.5){return 141.66666666666666}else{return 132.33333333333334}}}}else{if(d<=4.5){if(t<=6.5){return 159}else{return 192.66666666666666}}else{if(t<=6.5){if(d<=5.5){return 172.5}else{return 119}}else{if(d<=5.5){if(t<=7.5){return 125}else{return 108}}else{if(t<=7.5){return 135}else{return 217}}}}}}}}}}}}}
        timebreaks = [27000, 35000, 42000, 47000, 56000, 62000, 70500, 77000, 82000, 90000]
        const state_pics = {
          "1": {
            "1" : "1 -> 1",
            "2" : "2 -> 1",
            "3" : "3 -> 1",
            "4" : "4 -> 1",
            "5" : "5 -> 1",
            "6" : "6 -> 1",
            "7" : "7 -> 1",
            "8" : "8 -> 1",
            "9" : "9 -> 1"
          },
          "2": {
            "1" : "1 -> 2",
            "2" : "2 -> 2",
            "3" : "3 -> 2",
            "4" : "4 -> 2",
            "5" : "5 -> 2",
            "6" : "6 -> 2",
            "7" : "7 -> 2",
            "8" : "8 -> 2",
            "9" : "9 -> 2"
          },
          "3": {
            "1" : "1 -> 3",
            "2" : "2 -> 3",
            "3" : "3 -> 3",
            "4" : "4 -> 3",
            "5" : "5 -> 3",
            "6" : "6 -> 3",
            "7" : "7 -> 3",
            "8" : "8 -> 3",
            "9" : "9 -> 3"
          },
          "4": {
            "1" : "1 -> 4",
            "2" : "2 -> 4",
            "3" : "3 -> 4",
            "4" : "4 -> 4",
            "5" : "5 -> 4",
            "6" : "6 -> 4",
            "7" : "7 -> 4",
            "8" : "8 -> 4",
            "9" : "9 -> 4"
          },
          "5": {
            "1" : "1 -> 5",
            "2" : "2 -> 5",
            "3" : "3 -> 5",
            "4" : "4 -> 5",
            "5" : "5 -> 5",
            "6" : "6 -> 5",
            "7" : "7 -> 5",
            "8" : "8 -> 5",
            "9" : "9 -> 5"
          },
          "6": {
            "1" : "1 -> 6",
            "2" : "2 -> 6",
            "3" : "3 -> 6",
            "4" : "4 -> 6",
            "5" : "5 -> 6",
            "6" : "6 -> 6",
            "7" : "7 -> 6",
            "8" : "8 -> 6",
            "9" : "9 -> 6"
          },
          "7": {
            "1" : "1 -> 7",
            "2" : "2 -> 7",
            "3" : "3 -> 7",
            "4" : "4 -> 7",
            "5" : "5 -> 7",
            "6" : "6 -> 7",
            "7" : "7 -> 7",
            "8" : "8 -> 7",
            "9" : "9 -> 7"
          },
          "8": {
            "1" : "1 -> 8",
            "2" : "2 -> 8",
            "3" : "3 -> 8",
            "4" : "4 -> 8",
            "5" : "5 -> 8",
            "6" : "6 -> 8",
            "7" : "7 -> 8",
            "8" : "8 -> 8",
            "9" : "9 -> 8"
          },
          "9": {
            "1" : "1 -> 9",
            "2" : "2 -> 9",
            "3" : "3 -> 9",
            "4" : "4 -> 9",
            "5" : "5 -> 9",
            "6" : "6 -> 9",
            "7" : "7 -> 9",
            "8" : "8 -> 9",
            "9" : "9 -> 9"
          },
        }
        const ws = new WebSocket("wss://${domain}/");
        const output = document.querySelector("#pongs");
        const write = (msg) => output.append(msg + "\\n");

        // Print a "pong" when the server responds
        let interval = -1;

        let getTime = () => {
          let now = new Date();
          let dayText = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

          return {
            inSeconds : now,
            day : now.getDay(),
            dayText: dayText[now.getDay()],
            hour : now.getHours(),
            minute : now.getMinutes(),
            second : now.getSeconds()
          }
        }
        
        let getNowText = () => {
          let t = getTime();
          return t.dayText + " " + t.hour + ":" + t.minute + ":" + String(t.second).padStart(2, '0');
        }
        ws.onmessage = (e) => {
          write(JSON.parse(e.data).msg + " " +  getNowText() + " " + state_pics[1 + ++interval%9][1+(Math.floor(interval/9)%9)] + " " + tree(interval%9, getTime().day, getTime().inSeconds));
        }

        // Ping the server every second
        setInterval(() => {
          ws.send("ping");
        }, 1000);
      </script>
    </body>
  </html>`;
}

// A simple WebSocket server
Deno.serve((request: Request) => {
  if (request.headers.get("upgrade") === "websocket") {
    // Upgrade to a web socket response if requested
    const { socket, response } = Deno.upgradeWebSocket(request);

    // Listen for incoming messages
    socket.onmessage = (_e) => {
      console.log("ping");
      socket.send(JSON.stringify({ msg: "pong" }));
    };

    return response;
  } else {
    // Normal HTTP requests receive the client HTML
    const url = new URL(request.url);
    const body = new TextEncoder().encode(getClientHtml(url.host));
    return new Response(body);
  }
});

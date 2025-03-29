/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 183.0, "minX": 0.0, "maxY": 48100.0, "series": [{"data": [[0.0, 183.0], [0.1, 183.0], [0.2, 183.0], [0.3, 183.0], [0.4, 183.0], [0.5, 183.0], [0.6, 184.0], [0.7, 184.0], [0.8, 185.0], [0.9, 185.0], [1.0, 185.0], [1.1, 186.0], [1.2, 186.0], [1.3, 186.0], [1.4, 186.0], [1.5, 187.0], [1.6, 187.0], [1.7, 187.0], [1.8, 187.0], [1.9, 187.0], [2.0, 188.0], [2.1, 188.0], [2.2, 188.0], [2.3, 188.0], [2.4, 188.0], [2.5, 188.0], [2.6, 189.0], [2.7, 189.0], [2.8, 189.0], [2.9, 191.0], [3.0, 191.0], [3.1, 191.0], [3.2, 191.0], [3.3, 192.0], [3.4, 192.0], [3.5, 192.0], [3.6, 193.0], [3.7, 193.0], [3.8, 193.0], [3.9, 193.0], [4.0, 193.0], [4.1, 194.0], [4.2, 194.0], [4.3, 194.0], [4.4, 194.0], [4.5, 194.0], [4.6, 195.0], [4.7, 195.0], [4.8, 195.0], [4.9, 195.0], [5.0, 195.0], [5.1, 195.0], [5.2, 196.0], [5.3, 196.0], [5.4, 196.0], [5.5, 196.0], [5.6, 196.0], [5.7, 196.0], [5.8, 199.0], [5.9, 199.0], [6.0, 199.0], [6.1, 199.0], [6.2, 199.0], [6.3, 199.0], [6.4, 200.0], [6.5, 200.0], [6.6, 201.0], [6.7, 202.0], [6.8, 202.0], [6.9, 202.0], [7.0, 202.0], [7.1, 202.0], [7.2, 203.0], [7.3, 203.0], [7.4, 203.0], [7.5, 203.0], [7.6, 204.0], [7.7, 204.0], [7.8, 204.0], [7.9, 205.0], [8.0, 205.0], [8.1, 206.0], [8.2, 206.0], [8.3, 206.0], [8.4, 207.0], [8.5, 208.0], [8.6, 208.0], [8.7, 208.0], [8.8, 209.0], [8.9, 209.0], [9.0, 209.0], [9.1, 209.0], [9.2, 209.0], [9.3, 209.0], [9.4, 210.0], [9.5, 211.0], [9.6, 211.0], [9.7, 212.0], [9.8, 212.0], [9.9, 212.0], [10.0, 213.0], [10.1, 213.0], [10.2, 213.0], [10.3, 215.0], [10.4, 215.0], [10.5, 215.0], [10.6, 216.0], [10.7, 216.0], [10.8, 216.0], [10.9, 218.0], [11.0, 220.0], [11.1, 220.0], [11.2, 220.0], [11.3, 220.0], [11.4, 220.0], [11.5, 220.0], [11.6, 221.0], [11.7, 221.0], [11.8, 222.0], [11.9, 222.0], [12.0, 222.0], [12.1, 222.0], [12.2, 223.0], [12.3, 223.0], [12.4, 223.0], [12.5, 223.0], [12.6, 223.0], [12.7, 225.0], [12.8, 225.0], [12.9, 225.0], [13.0, 226.0], [13.1, 226.0], [13.2, 226.0], [13.3, 227.0], [13.4, 228.0], [13.5, 228.0], [13.6, 228.0], [13.7, 228.0], [13.8, 230.0], [13.9, 230.0], [14.0, 231.0], [14.1, 234.0], [14.2, 234.0], [14.3, 234.0], [14.4, 236.0], [14.5, 236.0], [14.6, 236.0], [14.7, 237.0], [14.8, 237.0], [14.9, 237.0], [15.0, 238.0], [15.1, 238.0], [15.2, 238.0], [15.3, 239.0], [15.4, 239.0], [15.5, 240.0], [15.6, 241.0], [15.7, 241.0], [15.8, 241.0], [15.9, 242.0], [16.0, 242.0], [16.1, 245.0], [16.2, 246.0], [16.3, 246.0], [16.4, 247.0], [16.5, 248.0], [16.6, 248.0], [16.7, 251.0], [16.8, 251.0], [16.9, 251.0], [17.0, 253.0], [17.1, 254.0], [17.2, 254.0], [17.3, 254.0], [17.4, 257.0], [17.5, 257.0], [17.6, 258.0], [17.7, 261.0], [17.8, 261.0], [17.9, 263.0], [18.0, 264.0], [18.1, 264.0], [18.2, 264.0], [18.3, 266.0], [18.4, 268.0], [18.5, 268.0], [18.6, 268.0], [18.7, 268.0], [18.8, 268.0], [18.9, 271.0], [19.0, 272.0], [19.1, 272.0], [19.2, 277.0], [19.3, 281.0], [19.4, 281.0], [19.5, 282.0], [19.6, 283.0], [19.7, 283.0], [19.8, 284.0], [19.9, 285.0], [20.0, 285.0], [20.1, 287.0], [20.2, 287.0], [20.3, 287.0], [20.4, 287.0], [20.5, 288.0], [20.6, 288.0], [20.7, 292.0], [20.8, 294.0], [20.9, 294.0], [21.0, 294.0], [21.1, 296.0], [21.2, 296.0], [21.3, 296.0], [21.4, 300.0], [21.5, 300.0], [21.6, 301.0], [21.7, 302.0], [21.8, 302.0], [21.9, 307.0], [22.0, 307.0], [22.1, 307.0], [22.2, 308.0], [22.3, 314.0], [22.4, 314.0], [22.5, 317.0], [22.6, 318.0], [22.7, 318.0], [22.8, 319.0], [22.9, 320.0], [23.0, 321.0], [23.1, 321.0], [23.2, 322.0], [23.3, 326.0], [23.4, 326.0], [23.5, 327.0], [23.6, 327.0], [23.7, 327.0], [23.8, 328.0], [23.9, 329.0], [24.0, 329.0], [24.1, 329.0], [24.2, 330.0], [24.3, 330.0], [24.4, 331.0], [24.5, 331.0], [24.6, 331.0], [24.7, 332.0], [24.8, 334.0], [24.9, 334.0], [25.0, 335.0], [25.1, 336.0], [25.2, 336.0], [25.3, 336.0], [25.4, 336.0], [25.5, 336.0], [25.6, 338.0], [25.7, 338.0], [25.8, 338.0], [25.9, 338.0], [26.0, 339.0], [26.1, 339.0], [26.2, 340.0], [26.3, 345.0], [26.4, 345.0], [26.5, 345.0], [26.6, 346.0], [26.7, 346.0], [26.8, 346.0], [26.9, 347.0], [27.0, 347.0], [27.1, 348.0], [27.2, 350.0], [27.3, 350.0], [27.4, 350.0], [27.5, 351.0], [27.6, 353.0], [27.7, 353.0], [27.8, 353.0], [27.9, 354.0], [28.0, 354.0], [28.1, 357.0], [28.2, 361.0], [28.3, 361.0], [28.4, 364.0], [28.5, 366.0], [28.6, 366.0], [28.7, 369.0], [28.8, 370.0], [28.9, 370.0], [29.0, 370.0], [29.1, 372.0], [29.2, 372.0], [29.3, 374.0], [29.4, 374.0], [29.5, 374.0], [29.6, 379.0], [29.7, 380.0], [29.8, 380.0], [29.9, 380.0], [30.0, 381.0], [30.1, 381.0], [30.2, 382.0], [30.3, 383.0], [30.4, 383.0], [30.5, 384.0], [30.6, 387.0], [30.7, 387.0], [30.8, 387.0], [30.9, 390.0], [31.0, 390.0], [31.1, 391.0], [31.2, 392.0], [31.3, 392.0], [31.4, 392.0], [31.5, 395.0], [31.6, 395.0], [31.7, 396.0], [31.8, 401.0], [31.9, 406.0], [32.0, 406.0], [32.1, 407.0], [32.2, 409.0], [32.3, 409.0], [32.4, 414.0], [32.5, 417.0], [32.6, 417.0], [32.7, 419.0], [32.8, 420.0], [32.9, 420.0], [33.0, 421.0], [33.1, 422.0], [33.2, 422.0], [33.3, 424.0], [33.4, 424.0], [33.5, 424.0], [33.6, 425.0], [33.7, 429.0], [33.8, 429.0], [33.9, 430.0], [34.0, 435.0], [34.1, 435.0], [34.2, 439.0], [34.3, 440.0], [34.4, 440.0], [34.5, 441.0], [34.6, 448.0], [34.7, 448.0], [34.8, 451.0], [34.9, 458.0], [35.0, 458.0], [35.1, 463.0], [35.2, 463.0], [35.3, 463.0], [35.4, 465.0], [35.5, 468.0], [35.6, 468.0], [35.7, 471.0], [35.8, 471.0], [35.9, 471.0], [36.0, 473.0], [36.1, 474.0], [36.2, 474.0], [36.3, 475.0], [36.4, 484.0], [36.5, 485.0], [36.6, 485.0], [36.7, 485.0], [36.8, 486.0], [36.9, 486.0], [37.0, 486.0], [37.1, 488.0], [37.2, 488.0], [37.3, 489.0], [37.4, 489.0], [37.5, 489.0], [37.6, 491.0], [37.7, 491.0], [37.8, 491.0], [37.9, 492.0], [38.0, 493.0], [38.1, 493.0], [38.2, 494.0], [38.3, 495.0], [38.4, 495.0], [38.5, 497.0], [38.6, 500.0], [38.7, 500.0], [38.8, 502.0], [38.9, 502.0], [39.0, 502.0], [39.1, 502.0], [39.2, 502.0], [39.3, 502.0], [39.4, 505.0], [39.5, 506.0], [39.6, 506.0], [39.7, 507.0], [39.8, 510.0], [39.9, 510.0], [40.0, 511.0], [40.1, 514.0], [40.2, 514.0], [40.3, 516.0], [40.4, 516.0], [40.5, 516.0], [40.6, 516.0], [40.7, 523.0], [40.8, 523.0], [40.9, 524.0], [41.0, 526.0], [41.1, 526.0], [41.2, 526.0], [41.3, 526.0], [41.4, 528.0], [41.5, 528.0], [41.6, 529.0], [41.7, 532.0], [41.8, 532.0], [41.9, 532.0], [42.0, 534.0], [42.1, 534.0], [42.2, 534.0], [42.3, 539.0], [42.4, 539.0], [42.5, 543.0], [42.6, 545.0], [42.7, 545.0], [42.8, 545.0], [42.9, 546.0], [43.0, 546.0], [43.1, 547.0], [43.2, 548.0], [43.3, 548.0], [43.4, 552.0], [43.5, 552.0], [43.6, 552.0], [43.7, 553.0], [43.8, 554.0], [43.9, 554.0], [44.0, 554.0], [44.1, 554.0], [44.2, 554.0], [44.3, 562.0], [44.4, 564.0], [44.5, 564.0], [44.6, 564.0], [44.7, 565.0], [44.8, 565.0], [44.9, 566.0], [45.0, 567.0], [45.1, 567.0], [45.2, 567.0], [45.3, 568.0], [45.4, 568.0], [45.5, 569.0], [45.6, 569.0], [45.7, 570.0], [45.8, 570.0], [45.9, 570.0], [46.0, 571.0], [46.1, 571.0], [46.2, 574.0], [46.3, 577.0], [46.4, 577.0], [46.5, 577.0], [46.6, 578.0], [46.7, 578.0], [46.8, 581.0], [46.9, 581.0], [47.0, 581.0], [47.1, 582.0], [47.2, 582.0], [47.3, 582.0], [47.4, 584.0], [47.5, 588.0], [47.6, 588.0], [47.7, 588.0], [47.8, 590.0], [47.9, 590.0], [48.0, 590.0], [48.1, 590.0], [48.2, 590.0], [48.3, 591.0], [48.4, 591.0], [48.5, 591.0], [48.6, 593.0], [48.7, 598.0], [48.8, 598.0], [48.9, 599.0], [49.0, 600.0], [49.1, 600.0], [49.2, 600.0], [49.3, 601.0], [49.4, 601.0], [49.5, 604.0], [49.6, 604.0], [49.7, 604.0], [49.8, 607.0], [49.9, 607.0], [50.0, 609.0], [50.1, 609.0], [50.2, 609.0], [50.3, 617.0], [50.4, 617.0], [50.5, 617.0], [50.6, 617.0], [50.7, 617.0], [50.8, 618.0], [50.9, 624.0], [51.0, 624.0], [51.1, 628.0], [51.2, 630.0], [51.3, 630.0], [51.4, 632.0], [51.5, 633.0], [51.6, 633.0], [51.7, 634.0], [51.8, 634.0], [51.9, 634.0], [52.0, 635.0], [52.1, 636.0], [52.2, 636.0], [52.3, 637.0], [52.4, 641.0], [52.5, 641.0], [52.6, 645.0], [52.7, 646.0], [52.8, 646.0], [52.9, 650.0], [53.0, 650.0], [53.1, 650.0], [53.2, 655.0], [53.3, 661.0], [53.4, 661.0], [53.5, 662.0], [53.6, 663.0], [53.7, 663.0], [53.8, 665.0], [53.9, 670.0], [54.0, 670.0], [54.1, 675.0], [54.2, 678.0], [54.3, 678.0], [54.4, 683.0], [54.5, 686.0], [54.6, 686.0], [54.7, 686.0], [54.8, 689.0], [54.9, 693.0], [55.0, 693.0], [55.1, 695.0], [55.2, 696.0], [55.3, 696.0], [55.4, 696.0], [55.5, 701.0], [55.6, 701.0], [55.7, 703.0], [55.8, 705.0], [55.9, 705.0], [56.0, 706.0], [56.1, 710.0], [56.2, 710.0], [56.3, 713.0], [56.4, 718.0], [56.5, 718.0], [56.6, 718.0], [56.7, 721.0], [56.8, 721.0], [56.9, 722.0], [57.0, 726.0], [57.1, 726.0], [57.2, 727.0], [57.3, 727.0], [57.4, 727.0], [57.5, 728.0], [57.6, 728.0], [57.7, 728.0], [57.8, 730.0], [57.9, 730.0], [58.0, 730.0], [58.1, 731.0], [58.2, 733.0], [58.3, 733.0], [58.4, 742.0], [58.5, 742.0], [58.6, 742.0], [58.7, 743.0], [58.8, 749.0], [58.9, 749.0], [59.0, 752.0], [59.1, 754.0], [59.2, 754.0], [59.3, 754.0], [59.4, 755.0], [59.5, 755.0], [59.6, 755.0], [59.7, 756.0], [59.8, 759.0], [59.9, 759.0], [60.0, 761.0], [60.1, 764.0], [60.2, 764.0], [60.3, 766.0], [60.4, 767.0], [60.5, 767.0], [60.6, 768.0], [60.7, 769.0], [60.8, 769.0], [60.9, 770.0], [61.0, 771.0], [61.1, 771.0], [61.2, 771.0], [61.3, 771.0], [61.4, 771.0], [61.5, 774.0], [61.6, 776.0], [61.7, 776.0], [61.8, 782.0], [61.9, 785.0], [62.0, 785.0], [62.1, 787.0], [62.2, 792.0], [62.3, 792.0], [62.4, 798.0], [62.5, 803.0], [62.6, 803.0], [62.7, 805.0], [62.8, 807.0], [62.9, 807.0], [63.0, 812.0], [63.1, 816.0], [63.2, 816.0], [63.3, 818.0], [63.4, 824.0], [63.5, 824.0], [63.6, 826.0], [63.7, 827.0], [63.8, 828.0], [63.9, 828.0], [64.0, 830.0], [64.1, 831.0], [64.2, 831.0], [64.3, 834.0], [64.4, 835.0], [64.5, 835.0], [64.6, 842.0], [64.7, 845.0], [64.8, 845.0], [64.9, 876.0], [65.0, 877.0], [65.1, 877.0], [65.2, 878.0], [65.3, 881.0], [65.4, 881.0], [65.5, 888.0], [65.6, 892.0], [65.7, 892.0], [65.8, 896.0], [65.9, 909.0], [66.0, 909.0], [66.1, 910.0], [66.2, 911.0], [66.3, 911.0], [66.4, 915.0], [66.5, 918.0], [66.6, 918.0], [66.7, 922.0], [66.8, 924.0], [66.9, 924.0], [67.0, 924.0], [67.1, 938.0], [67.2, 938.0], [67.3, 938.0], [67.4, 938.0], [67.5, 938.0], [67.6, 941.0], [67.7, 955.0], [67.8, 955.0], [67.9, 955.0], [68.0, 958.0], [68.1, 958.0], [68.2, 963.0], [68.3, 964.0], [68.4, 967.0], [68.5, 967.0], [68.6, 977.0], [68.7, 977.0], [68.8, 977.0], [68.9, 997.0], [69.0, 1005.0], [69.1, 1005.0], [69.2, 1013.0], [69.3, 1016.0], [69.4, 1016.0], [69.5, 1028.0], [69.6, 1028.0], [69.7, 1028.0], [69.8, 1029.0], [69.9, 1048.0], [70.0, 1048.0], [70.1, 1066.0], [70.2, 1067.0], [70.3, 1067.0], [70.4, 1076.0], [70.5, 1096.0], [70.6, 1096.0], [70.7, 1097.0], [70.8, 1108.0], [70.9, 1108.0], [71.0, 1120.0], [71.1, 1120.0], [71.2, 1120.0], [71.3, 1134.0], [71.4, 1143.0], [71.5, 1143.0], [71.6, 1150.0], [71.7, 1159.0], [71.8, 1159.0], [71.9, 1175.0], [72.0, 1181.0], [72.1, 1181.0], [72.2, 1189.0], [72.3, 1199.0], [72.4, 1199.0], [72.5, 1204.0], [72.6, 1233.0], [72.7, 1233.0], [72.8, 1256.0], [72.9, 1294.0], [73.0, 1305.0], [73.1, 1305.0], [73.2, 1320.0], [73.3, 1324.0], [73.4, 1324.0], [73.5, 1333.0], [73.6, 1353.0], [73.7, 1353.0], [73.8, 1396.0], [73.9, 1403.0], [74.0, 1403.0], [74.1, 1457.0], [74.2, 1526.0], [74.3, 1526.0], [74.4, 3118.0], [74.5, 3233.0], [74.6, 3233.0], [74.7, 3380.0], [74.8, 3759.0], [74.9, 3759.0], [75.0, 9646.0], [75.1, 10216.0], [75.2, 10216.0], [75.3, 11920.0], [75.4, 12007.0], [75.5, 12007.0], [75.6, 12059.0], [75.7, 12747.0], [75.8, 12747.0], [75.9, 12900.0], [76.0, 13367.0], [76.1, 13367.0], [76.2, 13605.0], [76.3, 13692.0], [76.4, 13692.0], [76.5, 13779.0], [76.6, 13823.0], [76.7, 13823.0], [76.8, 13834.0], [76.9, 14264.0], [77.0, 14264.0], [77.1, 14512.0], [77.2, 14949.0], [77.3, 15154.0], [77.4, 15154.0], [77.5, 15571.0], [77.6, 15641.0], [77.7, 15641.0], [77.8, 15721.0], [77.9, 16147.0], [78.0, 16147.0], [78.1, 16197.0], [78.2, 16383.0], [78.3, 16383.0], [78.4, 16429.0], [78.5, 16628.0], [78.6, 16628.0], [78.7, 16703.0], [78.8, 16718.0], [78.9, 16718.0], [79.0, 16775.0], [79.1, 16786.0], [79.2, 16786.0], [79.3, 16877.0], [79.4, 17043.0], [79.5, 17043.0], [79.6, 17133.0], [79.7, 17139.0], [79.8, 17139.0], [79.9, 17279.0], [80.0, 17339.0], [80.1, 17339.0], [80.2, 17424.0], [80.3, 17712.0], [80.4, 17712.0], [80.5, 17773.0], [80.6, 17828.0], [80.7, 17828.0], [80.8, 17833.0], [80.9, 17928.0], [81.0, 17928.0], [81.1, 17960.0], [81.2, 18459.0], [81.3, 18459.0], [81.4, 18578.0], [81.5, 18617.0], [81.6, 18617.0], [81.7, 18697.0], [81.8, 18705.0], [81.9, 18725.0], [82.0, 18725.0], [82.1, 18736.0], [82.2, 18799.0], [82.3, 18799.0], [82.4, 18799.0], [82.5, 18892.0], [82.6, 18892.0], [82.7, 19057.0], [82.8, 19294.0], [82.9, 19294.0], [83.0, 19659.0], [83.1, 19707.0], [83.2, 19707.0], [83.3, 19806.0], [83.4, 19821.0], [83.5, 19821.0], [83.6, 19905.0], [83.7, 19977.0], [83.8, 19977.0], [83.9, 20095.0], [84.0, 20814.0], [84.1, 20814.0], [84.2, 20967.0], [84.3, 21526.0], [84.4, 21526.0], [84.5, 21640.0], [84.6, 21869.0], [84.7, 21869.0], [84.8, 22341.0], [84.9, 22620.0], [85.0, 22620.0], [85.1, 22718.0], [85.2, 22773.0], [85.3, 22773.0], [85.4, 22913.0], [85.5, 23175.0], [85.6, 23175.0], [85.7, 23355.0], [85.8, 23491.0], [85.9, 23491.0], [86.0, 23586.0], [86.1, 23652.0], [86.2, 23652.0], [86.3, 23657.0], [86.4, 23677.0], [86.5, 23765.0], [86.6, 23765.0], [86.7, 23907.0], [86.8, 23928.0], [86.9, 23928.0], [87.0, 24108.0], [87.1, 24130.0], [87.2, 24130.0], [87.3, 24474.0], [87.4, 24729.0], [87.5, 24729.0], [87.6, 24740.0], [87.7, 24980.0], [87.8, 24980.0], [87.9, 25002.0], [88.0, 25049.0], [88.1, 25049.0], [88.2, 25095.0], [88.3, 25136.0], [88.4, 25136.0], [88.5, 25319.0], [88.6, 25336.0], [88.7, 25336.0], [88.8, 25958.0], [88.9, 26044.0], [89.0, 26044.0], [89.1, 26116.0], [89.2, 26194.0], [89.3, 26194.0], [89.4, 26213.0], [89.5, 26231.0], [89.6, 26231.0], [89.7, 26885.0], [89.8, 26957.0], [89.9, 26957.0], [90.0, 27099.0], [90.1, 27102.0], [90.2, 27102.0], [90.3, 27256.0], [90.4, 27377.0], [90.5, 27377.0], [90.6, 27448.0], [90.7, 27535.0], [90.8, 27535.0], [90.9, 27546.0], [91.0, 27579.0], [91.1, 27594.0], [91.2, 27594.0], [91.3, 27896.0], [91.4, 27907.0], [91.5, 27907.0], [91.6, 27937.0], [91.7, 28028.0], [91.8, 28028.0], [91.9, 28074.0], [92.0, 28104.0], [92.1, 28104.0], [92.2, 28199.0], [92.3, 28221.0], [92.4, 28221.0], [92.5, 28412.0], [92.6, 28426.0], [92.7, 28426.0], [92.8, 28459.0], [92.9, 28459.0], [93.0, 28459.0], [93.1, 28806.0], [93.2, 29238.0], [93.3, 29238.0], [93.4, 29350.0], [93.5, 29442.0], [93.6, 29442.0], [93.7, 29445.0], [93.8, 29636.0], [93.9, 29636.0], [94.0, 29749.0], [94.1, 29760.0], [94.2, 29760.0], [94.3, 29785.0], [94.4, 29799.0], [94.5, 29799.0], [94.6, 29899.0], [94.7, 30269.0], [94.8, 30269.0], [94.9, 30301.0], [95.0, 30486.0], [95.1, 30486.0], [95.2, 30505.0], [95.3, 30791.0], [95.4, 30791.0], [95.5, 30817.0], [95.6, 30959.0], [95.7, 31042.0], [95.8, 31042.0], [95.9, 31623.0], [96.0, 31685.0], [96.1, 31685.0], [96.2, 32058.0], [96.3, 32061.0], [96.4, 32061.0], [96.5, 32066.0], [96.6, 32125.0], [96.7, 32125.0], [96.8, 32341.0], [96.9, 32472.0], [97.0, 32472.0], [97.1, 32831.0], [97.2, 33695.0], [97.3, 33695.0], [97.4, 33755.0], [97.5, 33816.0], [97.6, 33816.0], [97.7, 34468.0], [97.8, 34560.0], [97.9, 34560.0], [98.0, 34613.0], [98.1, 34934.0], [98.2, 34934.0], [98.3, 35353.0], [98.4, 35954.0], [98.5, 35954.0], [98.6, 36535.0], [98.7, 37849.0], [98.8, 37849.0], [98.9, 38118.0], [99.0, 38639.0], [99.1, 38639.0], [99.2, 39989.0], [99.3, 41819.0], [99.4, 41819.0], [99.5, 45200.0], [99.6, 46317.0], [99.7, 46317.0], [99.8, 47215.0], [99.9, 48100.0]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 101.0, "series": [{"data": [[100.0, 43.0], [34500.0, 1.0], [33700.0, 1.0], [34900.0, 1.0], [35300.0, 1.0], [35900.0, 1.0], [36500.0, 1.0], [38100.0, 1.0], [39900.0, 1.0], [46300.0, 1.0], [48100.0, 1.0], [200.0, 101.0], [300.0, 70.0], [400.0, 46.0], [500.0, 70.0], [600.0, 44.0], [700.0, 47.0], [800.0, 23.0], [900.0, 21.0], [1000.0, 12.0], [1100.0, 11.0], [1200.0, 4.0], [1300.0, 6.0], [1400.0, 2.0], [1500.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 1.0], [3700.0, 1.0], [9600.0, 1.0], [10200.0, 1.0], [12000.0, 2.0], [11900.0, 1.0], [12700.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [13700.0, 1.0], [13800.0, 2.0], [13600.0, 2.0], [14200.0, 1.0], [14500.0, 1.0], [14900.0, 1.0], [15100.0, 1.0], [15700.0, 1.0], [15500.0, 1.0], [15600.0, 1.0], [16100.0, 2.0], [16300.0, 1.0], [17200.0, 1.0], [17400.0, 1.0], [17000.0, 1.0], [17100.0, 2.0], [17300.0, 1.0], [16400.0, 1.0], [16700.0, 4.0], [16800.0, 1.0], [16600.0, 1.0], [17800.0, 2.0], [17700.0, 2.0], [18400.0, 1.0], [17900.0, 2.0], [18700.0, 5.0], [18600.0, 2.0], [19200.0, 1.0], [18800.0, 1.0], [19000.0, 1.0], [18500.0, 1.0], [20000.0, 1.0], [19900.0, 2.0], [19800.0, 2.0], [19700.0, 1.0], [19600.0, 1.0], [20900.0, 1.0], [21500.0, 1.0], [20800.0, 1.0], [21600.0, 1.0], [22300.0, 1.0], [21800.0, 1.0], [23100.0, 1.0], [22700.0, 2.0], [22600.0, 1.0], [22900.0, 1.0], [23300.0, 1.0], [23400.0, 1.0], [23500.0, 1.0], [24100.0, 2.0], [23900.0, 2.0], [23600.0, 3.0], [24400.0, 1.0], [23700.0, 1.0], [25000.0, 3.0], [25300.0, 2.0], [24700.0, 2.0], [25100.0, 1.0], [24900.0, 1.0], [26100.0, 2.0], [25900.0, 1.0], [26200.0, 2.0], [26000.0, 1.0], [27500.0, 4.0], [27000.0, 1.0], [27300.0, 1.0], [26800.0, 1.0], [27100.0, 1.0], [27200.0, 1.0], [27400.0, 1.0], [26900.0, 1.0], [28100.0, 2.0], [28400.0, 4.0], [27800.0, 1.0], [27900.0, 2.0], [28200.0, 1.0], [28000.0, 2.0], [29600.0, 1.0], [29400.0, 2.0], [29300.0, 1.0], [28800.0, 1.0], [29200.0, 1.0], [29700.0, 4.0], [29800.0, 1.0], [30700.0, 1.0], [30400.0, 1.0], [30200.0, 1.0], [30500.0, 1.0], [30300.0, 1.0], [31600.0, 2.0], [31000.0, 1.0], [30800.0, 1.0], [30900.0, 1.0], [32400.0, 1.0], [32000.0, 3.0], [32300.0, 1.0], [32100.0, 1.0], [32800.0, 1.0], [34400.0, 1.0], [33600.0, 1.0], [34600.0, 1.0], [33800.0, 1.0], [38600.0, 1.0], [37800.0, 1.0], [41800.0, 1.0], [45200.0, 1.0], [47200.0, 1.0]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 48100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 174.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 261.0, "series": [{"data": [[0.0, 261.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 239.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 174.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74322128E12, "maxY": 10.0, "series": [{"data": [[1.74322152E12, 10.0], [1.7432217E12, 10.0], [1.7432214E12, 10.0], [1.74322188E12, 8.269230769230772], [1.74322158E12, 10.0], [1.74322128E12, 1.6666666666666667], [1.74322176E12, 10.0], [1.74322146E12, 10.0], [1.74322164E12, 10.0], [1.74322134E12, 7.875000000000002], [1.74322182E12, 10.0]], "isOverall": false, "label": "Payload Stress Group (10 Users)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74322188E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1173.5, "minX": 1.0, "maxY": 7536.854054054053, "series": [{"data": [[1.0, 4729.333333333333], [2.0, 4839.666666666667], [4.0, 2549.3333333333335], [8.0, 1173.5], [9.0, 1696.8636363636363], [5.0, 2227.846153846154], [10.0, 7536.854054054053], [3.0, 3625.222222222222], [6.0, 1426.9333333333334], [7.0, 1275.7058823529412]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}, {"data": [[9.329376854599396, 6564.688427299707]], "isOverall": false, "label": "GET /test-20MB.txt-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 12.7, "minX": 1.74322128E12, "maxY": 8.318804876666667E7, "series": [{"data": [[1.74322152E12, 9087770.033333333], [1.7432217E12, 6990592.333333333], [1.7432214E12, 8.318804876666667E7], [1.74322188E12, 9087770.033333333], [1.74322158E12, 8039181.183333334], [1.74322128E12, 2097177.7], [1.74322176E12, 8039181.183333334], [1.74322146E12, 3.4952961666666664E7], [1.74322164E12, 8039181.183333334], [1.74322134E12, 5.87209756E7], [1.74322182E12, 7340121.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74322152E12, 55.03333333333333], [1.7432217E12, 42.333333333333336], [1.7432214E12, 503.76666666666665], [1.74322188E12, 55.03333333333333], [1.74322158E12, 48.68333333333333], [1.74322128E12, 12.7], [1.74322176E12, 48.68333333333333], [1.74322146E12, 211.66666666666666], [1.74322164E12, 48.68333333333333], [1.74322134E12, 355.6], [1.74322182E12, 44.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74322188E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 218.33333333333331, "minX": 1.74322128E12, "maxY": 26153.652173913044, "series": [{"data": [[1.74322152E12, 19412.80769230769], [1.7432217E12, 25420.75], [1.7432214E12, 599.3823529411771], [1.74322188E12, 23926.423076923078], [1.74322158E12, 24337.826086956517], [1.74322128E12, 218.33333333333331], [1.74322176E12, 24985.000000000004], [1.74322146E12, 2943.97], [1.74322164E12, 26153.652173913044], [1.74322134E12, 447.92857142857133], [1.74322182E12, 25704.47619047619]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74322188E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6.523809523809524, "minX": 1.74322128E12, "maxY": 22.434782608695652, "series": [{"data": [[1.74322152E12, 14.26923076923077], [1.7432217E12, 12.85], [1.7432214E12, 8.394957983193272], [1.74322188E12, 16.846153846153843], [1.74322158E12, 12.391304347826086], [1.74322128E12, 12.333333333333334], [1.74322176E12, 15.478260869565215], [1.74322146E12, 7.75], [1.74322164E12, 22.434782608695652], [1.74322134E12, 6.523809523809524], [1.74322182E12, 11.809523809523808]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74322188E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.24000000000000016, "minX": 1.74322128E12, "maxY": 8.833333333333334, "series": [{"data": [[1.74322152E12, 3.0], [1.7432217E12, 3.900000000000001], [1.7432214E12, 0.3109243697478991], [1.74322188E12, 5.461538461538462], [1.74322158E12, 4.0], [1.74322128E12, 8.833333333333334], [1.74322176E12, 3.5217391304347827], [1.74322146E12, 0.24000000000000016], [1.74322164E12, 7.304347826086958], [1.74322134E12, 0.3214285714285713], [1.74322182E12, 3.9523809523809526]], "isOverall": false, "label": "GET /test-20MB.txt", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74322188E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 183.0, "minX": 1.74322128E12, "maxY": 48100.0, "series": [{"data": [[1.74322152E12, 29636.0], [1.7432217E12, 41819.0], [1.7432214E12, 1526.0], [1.74322188E12, 47215.0], [1.74322158E12, 34613.0], [1.74322128E12, 301.0], [1.74322176E12, 48100.0], [1.74322146E12, 34468.0], [1.74322164E12, 46317.0], [1.74322134E12, 1199.0], [1.74322182E12, 35954.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74322152E12, 3118.0], [1.7432217E12, 13605.0], [1.7432214E12, 192.0], [1.74322188E12, 13692.0], [1.74322158E12, 11920.0], [1.74322128E12, 194.0], [1.74322176E12, 16429.0], [1.74322146E12, 195.0], [1.74322164E12, 12747.0], [1.74322134E12, 183.0], [1.74322182E12, 15641.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74322152E12, 28721.9], [1.7432217E12, 38310.40000000001], [1.7432214E12, 1067.0], [1.74322188E12, 33406.700000000004], [1.74322158E12, 33205.8], [1.74322128E12, 301.0], [1.74322176E12, 42367.20000000001], [1.74322146E12, 13365.700000000023], [1.74322164E12, 37817.40000000001], [1.74322134E12, 892.4], [1.74322182E12, 32297.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74322152E12, 29636.0], [1.7432217E12, 41819.0], [1.7432214E12, 1435.9399999999991], [1.74322188E12, 47215.0], [1.74322158E12, 34613.0], [1.74322128E12, 301.0], [1.74322176E12, 48100.0], [1.74322146E12, 34451.62999999999], [1.74322164E12, 46317.0], [1.74322134E12, 1171.4], [1.74322182E12, 35954.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74322152E12, 21990.5], [1.7432217E12, 24190.5], [1.7432214E12, 565.0], [1.74322188E12, 23152.0], [1.74322158E12, 26885.0], [1.74322128E12, 204.0], [1.74322176E12, 19659.0], [1.74322146E12, 501.0], [1.74322164E12, 27256.0], [1.74322134E12, 342.0], [1.74322182E12, 27448.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74322152E12, 29569.15], [1.7432217E12, 41660.0], [1.7432214E12, 1234.1499999999996], [1.74322188E12, 43476.999999999985], [1.74322158E12, 34429.399999999994], [1.74322128E12, 301.0], [1.74322176E12, 47519.99999999999], [1.74322146E12, 25046.649999999998], [1.74322164E12, 45051.39999999998], [1.74322134E12, 962.9499999999998], [1.74322182E12, 35592.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74322188E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 317.0, "minX": 1.0, "maxY": 21526.0, "series": [{"data": [[1.0, 21526.0], [2.0, 560.0], [4.0, 512.5], [8.0, 594.0], [5.0, 526.0], [10.0, 1283.0], [3.0, 317.0], [6.0, 724.0], [7.0, 702.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 13.5, "series": [{"data": [[1.0, 7.0], [2.0, 3.0], [4.0, 7.0], [8.0, 11.0], [5.0, 7.0], [10.0, 13.5], [3.0, 3.0], [6.0, 9.0], [7.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.74322128E12, "maxY": 4.016666666666667, "series": [{"data": [[1.74322152E12, 0.45], [1.7432217E12, 0.3333333333333333], [1.7432214E12, 4.016666666666667], [1.74322188E12, 0.26666666666666666], [1.74322158E12, 0.36666666666666664], [1.74322128E12, 0.1], [1.74322176E12, 0.38333333333333336], [1.74322146E12, 1.75], [1.74322164E12, 0.38333333333333336], [1.74322134E12, 2.816666666666667], [1.74322182E12, 0.36666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74322188E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.74322128E12, "maxY": 3.966666666666667, "series": [{"data": [[1.74322152E12, 0.43333333333333335], [1.7432217E12, 0.3333333333333333], [1.7432214E12, 3.966666666666667], [1.74322188E12, 0.43333333333333335], [1.74322158E12, 0.38333333333333336], [1.74322128E12, 0.1], [1.74322176E12, 0.38333333333333336], [1.74322146E12, 1.6666666666666667], [1.74322164E12, 0.38333333333333336], [1.74322134E12, 2.8], [1.74322182E12, 0.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74322188E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.74322128E12, "maxY": 3.966666666666667, "series": [{"data": [[1.74322152E12, 0.43333333333333335], [1.7432217E12, 0.3333333333333333], [1.7432214E12, 3.966666666666667], [1.74322188E12, 0.43333333333333335], [1.74322158E12, 0.38333333333333336], [1.74322128E12, 0.1], [1.74322176E12, 0.38333333333333336], [1.74322146E12, 1.6666666666666667], [1.74322164E12, 0.38333333333333336], [1.74322134E12, 2.8], [1.74322182E12, 0.35]], "isOverall": false, "label": "GET /test-20MB.txt-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74322188E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.74322128E12, "maxY": 3.966666666666667, "series": [{"data": [[1.74322152E12, 0.43333333333333335], [1.7432217E12, 0.3333333333333333], [1.7432214E12, 3.966666666666667], [1.74322188E12, 0.43333333333333335], [1.74322158E12, 0.38333333333333336], [1.74322128E12, 0.1], [1.74322176E12, 0.38333333333333336], [1.74322146E12, 1.6666666666666667], [1.74322164E12, 0.38333333333333336], [1.74322134E12, 2.8], [1.74322182E12, 0.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74322188E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


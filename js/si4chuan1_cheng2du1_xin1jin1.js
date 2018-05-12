(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('新津县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"510132","properties":{"name":"新津县","cp":[103.811286,30.410346],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AE@ACAC@E@EBED@B@B@DDFDBDBJFJDD@DDDF@B@BGHADCD@DAF@D@J@BABABABIJABKRAD@@@@@@CDCJEHEHMNIJGDCD@D@D@DBBDDHFFDDBBBDB@@ABAB@B@BDDDB@@@@FDHBDDBFBFBDDBBD@D@BAJBH@BBBBBDBBB@D@DBD@F@DDJFDDBBBD@HATDL@N@JAJAB@@@@@H@H@BBB@@@@BCBEBAB@DABA@ABABAD@BBBFFDBBB@B@BBBBBF@FAF@DAB@DBF@FDDDBDB@BA@@@ABE@A@@BABABA@@BA@CACBCBCBCBE@A@@F@HBDD@@B@B@D@FAF@D@HBHBDBD@B@H@D@HADADAFCBA@@@@BA@@@@BC@@BIB@@A@@@@@@@@@@B@@@@@@@B@DBBBB@D@D@D@FABANIDEBCBGBIBABCDCBABC@AEIAE@AEG@E@ABADABADCDCDCBADABCBA@EBC@ABA@ADABAB@BA@ABA@ABGBG@C@A@AAA@A@IBG@A@AA@@CACAGACAAAEAKEIEMCK@CCACAACAA@CBADEBCBA@C@AACCAC@AAB@A@ACAG@CAACBGBC@G@GAEAGAA@CB@D@B@BABABAF@BABABCHCBAB@B@J@D@BC@@ACICACAM@@@@@@@EAA@EACACACAA@@@A@A@EBM@EBE@CAU@I@A@E@IDEBC@EAMGIEECKCCCCAEICBA@A@A@C@A@C@@BA@@DBBBDOHEC"],"encodeOffsets":[[106238,31065]]}}],"UTF8Encoding":true});}));
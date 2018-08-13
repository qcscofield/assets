(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('小店区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"140105","properties":{"name":"小店区","cp":[112.565659,37.736525],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@A@AC@C@G@K@AAECCQGECC@G@KBOJEDEBMHCDADAFADIHCBA@@@DFLTDBBB@@BBLJFBFDL@HBD@D@BBDB@BFD@@@BDBBB@@BBBBDDBB@@FD@BFDB@BB@@@@BBBBFF@@BBLLNJJB@@D@B@B@@@JCBADAD@F@D@D@BBD@@BD@LHFLFFFHRLDDBBFJBBHJBDFJDH@@@F@J@B@@AD@H@D@B@@@@@BCJAFCFCHADCJADAHAH@BBF@DBBBF@BBFBD@J@B@B@DBD@@@B@F@@BF@D@D@B@D@@@@@@@@@@@@@DBF@@@H@@@@ABAH@BADAD@@@@AD@@@@@@H@@@B@D@B@@@@@B@@@B@@@@@@@@@B@D@B@@@@@B@B@F@@@@@B@@@B@D@@@@@@@D@@@B@@@@@B@B@B@DBF@@@@@@@D@D@B@B@D@B@B@J@@C@@@C@A@@F@D@B@@@B@BAB@@@@@B@B@@B@@@@B@@@D@D@@A@@B@@A@@@@@@@AC@@@BA@@@@B@@CA@A@@@C@@AA@@AC@@B@@@@C@@@@@A@@@C@AC@C@@@@@@A@@@@B@BA@@@A@@A@A@@@@@G@@@A@A@@@@@A@@@A@AB@@@@@@@@A@@BC@@BA@ABABC@B@BB@@@@@@@BA@@@@B@@@@@@@@@@B@@@B@B@@@@H@F@J@F@@@@BBB@B@@@B@@@@B@@@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@A@@BA@@@@B@@@@@B@@@B@@@B@@@F@D@D@BD@@FBF@BDFADAF@FFBBBBDFFDNB@@FD@FFH@@HNDBDDFHFDL@DABGJCDA@A@AA@CC@A@C@C@AACAA@@AAKEGG@AEK@GHIJQ@C@AAAACECCCKEAAKGCACCA@CAA@C@AAA@@AAA@A@A@ADABCBABA@A@ABABADABA@ABA@A@C@C@EACBCBABCD@BABAAAAACCACCAA@AAAAA@CAA@AA@A@A@A@C@EAG@EACAE@ACAA@E@I@E@EAC@C@A@EAAAEA@@AE@CAA@CDABADABCBA@C@C@GACAACAEAA@C@A@C@AAAA@G@C@AACC@EACA@AAA@EBABEBABABAFAFAD@DADA@C@@@@@@@GACCACACAGAE@CAC@C@E@E@EBEAC@EACACAAAAC@C@CBC@E@E@@@@@ABE@CAE@E@C@A@CB@E@C@@@AA@AACAA@ACAC@EDGDADA@A@C@A@A@E@CBCBC@A@A@A@A@A@@@ABA@A@@AA@A@A@@@ABA@@@@B@@AB@@A@@@ADAB@BB@@B@@@B@@A@AB@@@@@B@@B@@B@@@@@BAB@BAB@@CBABA@@@AAAB@@@@@B@@A@@@A@@@@@A@@@A@A@@@AB@@ABA@CA@B@@@@@@ADA@@@AA@@A@AA@AAAAAAA@@A@@@AAA@A@A@AAA@@CAC@@AAEAE@A@E@CB@B@DAB@BE@GBE@EBG@A@"],"encodeOffsets":[[115165,38525]]}}],"UTF8Encoding":true});}));
(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('岱岳区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"370911","properties":{"name":"岱岳区","cp":[117.041581,36.187989],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@GDCA@@IG@@CC@@@AA@GDC@GDAB@J@@@BC@CBA@ABAB@@CDCD@@ABCDABCDABCHCD@BADDJ@D@D@DBBBFBFAFABCDGDCBCBGBCDEAEBCDGBABC@GAE@CBABA@CBCBC@A@E@E@AAACACA@ECC@EAEAAA@@ECKAA@K@C@EBC@IB@@KBI@GB@@EDMDCBI@I@QBC@E@ABOBGBK@E@CA@@A@GAK@@@G@CAA@G@C@@@I@EFAB@BABAB@BBF@D@BBB@D@B@@@D@BAF@B@BBD@BB@BB@BBBAFA@ABG@@@AACD@B@BBB@@BB@B@@@FAF@@FDHJBBHJDDDB@BHFNJDBLJDJA@CDGJKFOH@@C@MDQ@A@@@KBC@@@C@MAIDAB@BCDC@CDAF@BEBC@EB@DC@C@CBE@C@@@AA@E@AECG@ABC@CFC@EAE@EBEAGCMA@DDFDD@FBD@@D@RB@B@BBBBBB@D@BABBB@DDD@B@@B@@CJ@FBBDD@@@D@BA@@DABABGB@@@@@@AF@DBFA@@DA@EDCFDLCD@DABBF@BAFABA@C@OGBAAACDC@EAABFHH@DHB@@A@CHBDDFAB@@HDB@D@B@@ABYGEB@@ABCBA@EEA@AHBB@BDH@BADIPAHERCFGNDPHJB@HJNHBDJJD@AH@DDBFDDHB@H@FB@LCB@DBDD@BDFHBDHFAFELABADBBJBRDBBDBHFDDPFB@@DDBD@D@@A@AFGBC@CDAFBDA@@DABAPCLFFEFEDE@AFAJEDCBAJBDBBFFBDBH@B@HBDBFDB@BCFB@@ADABABB@@@BBA@@@@BB@@B@DCFBBBAD@FB@@H@DBHBJBF@BB@FBJFDPFB@DAJDBFDDFDDBFBPGLA@BAB@BFBJGBCEGAAHCLEDEH@DK@CFIB@DCDGBC@CC@A@ICGCEAECACCG@@DA@A@EACBAFABE@AACGC@EECEAGC@C@@ACAEAA@A@@@@AA@@@@A@BC@AB@@ADC@ABA@A@@@@@@@@@@BC@A@E@ABE@A@C@@D@D@B@B@@A@@@A@@@@@EF@B@@@D@F@@FB@B@BAB@B@B@@@@A@AB@B@BB@@B@@A@AB@BB@C@@CGF@@A@A@C@AB@B@FD@AB@@AAAAC@@@AA@@AOBACC@A@@BA@@CGD@@AGB@@CC@@@CACGABECEBA@E@A@DA@@C@ACABAAAAA@EADAACAAHAHGD@B@BAFAB@@@BBDAH@CALA@DJB@BH@BB@DLB@BD@@CBBBBB@@CFB@CH@D@@FDEAAD@DCF@@@@AD@F@FBBDBBB@BB@@B@B@B@HABBD@DFNAD@D@D@BBBB@@@@@@@@@@BD@@BB@@D@B@B@@@AADABCBEA@@BC@@ABA@@D@AIAECG@ABMLCB@B@PAD@AADAAGAEFAAC@CDA@ADA@C@A@@@A@AHEDAFDDJB@B@LDJDFBNBH@LHDBB@DDBBBBD@DDLDHFB@DDBBDHBBBD@DDB@D@B@BAB@@@B@@@B@BBDFDDDBBD@B@BADA@@B@B@FCBABA@@D@DABAD@D@BAHAD@FDBB@B@BBBDDDHDHHHBBFBDDDDBBB@@@DBB@A@@BB@@B@@@B@B@@B@@BB@BBB@@BB@@DAL@B@D@B@B@B@D@DAD@FABEFABA@C@C@CAQ@CAWA@FE@A@E@@BCB@B@HCFC@ABC@@@EBG@E@G@@BA@CA@E@@CAE@CCA@A@GH@@A@AFCB@@EDA@CF@BA@C@CCA@AB@BABBDCHAFAHABEDAJAFAB@DDH@FBBFDMJEDG@@@BB@@@BABEDIDEDCDEFAB@@ABCDGBOFA@A@@@MDEDCBED@BBDALADAB@HALA@IBILBB@BGJEFKHIBCDADADJJDDD@FAFBHDLFDBP@J@JBHPCFA@AD@@@DDJFBHFDBDB@@DFNRBDBJBBDBFF@F@BT@FDHFLDF@DADAFFBD@B@BHLBHBDBJBFDBHHHBDFFHXD@@DHFJDBHHDFBJAD@BH@FABAFAB@D@DAD@B@@IBAFBD@FANAN@LBH@DAJCBOIMEU@O@@@GBIBKDKDKJUBE@@BK@KHM@@DGBCHKPK@AHEDEJEBADCHEBIBC@I@A@@A@@@GCEECEAEDM@ABAFEBABCBE@A@@AAAAAA@E@@D@D@BA@@CA@AACJ@DAHA@KII@CBAB@@E@ADBDAHBF@D@JBB@@@@A@GBK@IBKBCBAEAA@G@A@KEAAGAI@@@AADG@IAAA@K@A@@AFCD@BAB@B@@EDAD@@A@A@AD@BAHCRCLD@@BFB@BBJDDDJBDCDAB@B@@AH@J@BMAEC@@@@@DIB@BBDA@@@@B@ACAACAEEAACA@AACAAD@H@@GBA@ADEDCB@DB@AAA@A@CFAHEBCNDBABA@DLBDEFAHBD@BAAAAAABAABGFG@GCAOGAAE@IB@BDBADA@EAEEGAEGAC@AAEAE@ACC@EAAB@AA@@@A@C@@A@AA@A@@CG@ADADCF@JBJADA@AAAKCE@AABCACDEACBCECEAABCABCDAAAEABCBAFCDBBA@@AGBABCFIB@@ABAFCFIBCAAA@@A@@DEACKCA@@AGIGCCCMG@@IC@AAACCAAA@EEMIA@ECCAECMBAB@@@@EBEJOLWAQAOACAA@UECAGAMIGOCEGGAAMMKECA@@AA@EBEDCFEBADAB@FCFEAC@EACAACEACAE@A@EDCDGBCDCBA@@@G@E@AACACAA@AA@AACACACCACAAACCEAE@CAACEECEEA@AAECC@AAAA@EAC@A@AACAC@@AC@C@A@@@A@C@@AEAAAAA@EACBC@C@A@C@A@CBABA@IDCDC@C@AAA@ACAAACCACAAACAA@EBA@C@C@A@A@IBCDCBEBCBA@ABEDCFCB"],"encodeOffsets":[[120028,36751]]}}],"UTF8Encoding":true});}));
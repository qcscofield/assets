(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('德钦县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"533422","properties":{"name":"德钦县","cp":[98.911559,28.486163],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BABABA@GAEBEDE@ABEBEBG@ABAFADEFEBEBC@E@CACBABADCDCBCBCBCBADAF@D@FBDBDBBAF@BAD@FABADCACAAAAA@A@A@AAAA@@ACCAAAECAAEAAAACCCCACCA@A@A@E@CBCDCBEBABCAC@E@EAC@C@CDCDA@AB@@A@A@@AA@CAC@A@EBCDABADBD@BBD@BA@C@AACAABAB@DAFADABABE@EBCBCBCFCFC@ABC@C@EAE@C@CBCBEDA@A@AAC@CCAAC@A@ABABCDADCDCFAFADEFCDEBCBEBCACAE@E@EBCBEDEFEBCBEAAACCEECCAEAC@CBC@ACAACACCC@E@EACCECEEEACAA@A@ABCBAAA@CACEAEEECGCECCEA@CAEAC@C@CBC@C@A@C@GACAC@@BCBCBCBC@@@CACCCECECEECECEAGAEAAC@CBCBGBC@CACECCACECEAAAA@AA@CBC@@BG@C@CAECOGCAA@C@@BA@AB@B@D@HAF@BAHABABABCBCDCFCF@D@F@BBFADADADAF@DBH@FDFBF@FAF@D@HBFAH@H@@BB@FBFBBBJA@ABCBCBCDAB@JABA@ABEACAE@A@C@ACCA@A@@ACACCCACACCAIECA@B@BBDBDBFABCDCBEBEFCBCDCFADCDA@CBE@G@EDABAB@@BBFFFBFHDFDFADADAF@D@FDDDFBD@H@FBHBFAAABCD@@AB@BABA@ADAF@FBBBD@B@DADAFAD@F@DBDDDDDDDDBBBBDBD@D@F@FAD@@ADCDCFEHADCFAHAJ@H@FBFBFBDDFDD@B@DAD@D@F@D@D@DAD@BBDBBDDFDFBFBDF@D@DADADCDCB@DABBFAHAL@HAHAFADCBCBGDEBGBEBI@G@EDCBEDCDCHAHCHGJAB@DAF@HBDDF@F@DAF@HFH@BABA@C@A@CDABCBA@CBEBMDABABGLCD@@ABA@A@A@C@ABKFAB@FABABA@ABCAA@C@E@CBGDABA@@@AB@@AB@@BB@B@@@DAJ@BAF@B@B@BA@@@CBG@CBABCFCD@DABA@@@ABA@C@A@@@CAA@A@GDMBIBK@IAI@I@GAIAAAAC@EAE@GAC@@@CCCCCAAEAECGAM@A@EAA@CBA@ABA@A@AAAA@AA@A@A@AB@@A@@BA@@A@@@A@C@ABA@ABC@ABA@A@A@AAAAC@C@A@CBE@AA@@ABA@@BAB@B@@@BA@@@ECAIAGGGCC@I@UAc@G@K@EA@@AAACAC@@@A@A@@A@CBABADCD@@CBC@EAGAGAE@C@ABEB@@A@EBABE@MGCACAEIA@CCCAA@@@ABABABAD@D@DBDDBBF@B@D@F@D@D@DAD@D@D@DBD@BBFBB@DBF@F@D@@@B@@@BBD@B@@BB@@AD@B@B@@@DADAB@F@F@BCFAH@D@D@DBFBDBDBDBB@BA@ABA@C@A@@D@B@FBD@DAD@BABCDABADABADAF@BABC@E@E@E@C@@BCDAB@F@B@@ABABA@E@IBC@ABA@A@ABAB@F@BDBDB@@BBB@B@B@BAHE@@B@@@@B@@@BAD@FAFEHAD@DADAFABABCBC@E@SAA@@B@L@D@BAB@BABCFADAB@D@BBL@F@B@B@@A@@BC@C@EAA@C@A@A@A@AB@D@DADABABC@C@ABA@@FAF@D@F@D@DAF@D@D@DBB@B@BABA@E@CBC@@B@B@DAFAFCFAD@DADADABABAB@@@BBBDDFDDFDDBD@DBBADBD@DBD@B@B@BA@A@BBBB@B@B@@AD@DBBBBNDFBFBB@@DAB@B@DBFBBAF@FAFBD@D@FCDAD@DDHBFBFBDBDBD@BAFEHABAB@D@BDLBJBHBDBFFDJFJDLBLDFDDBB@@BBDDFDHBF@@BD@DABCDEFGFEDCFAFADADADBF@DADADCFCBEDCDEDCBAF@D@D@FCBEBCBE@E@A@@BBDBDDH@F@FAFCFEHCFCFAD@BCDADEFEBEBCB@@@DDDDDBDADEJGJEJCHCHAHAD@FBFEAE@G@EBIFKDEBCBEBE@G@E@G@CBADCFAFCHCH@H@D@DDDDDDD@D@DBDBDBDFDDFBDBBADADAF@FBFBDDDDB@@ABGBIDCD@BBBDBBDBDBDAFADCDCBCFAD@DAB@DCB@B@BBBDDBDBBADCFCBCDAD@D@DCDADAB@BHBDDBF@B@FADCDADADADCDCBAFCHAFAFBB@DBD@DA@EFGDCHEDAD@DBFBD@DADAF@DB@HAFBF@D@FAJAFBHBHBJDFD@@@BB@DHDP@@XFDBBBNH@@HDFBDDDBFFDFDFDFBDDDAB@@@F@D@B@BB@BB@@BB@@AF@BABBD@B@D@B@BABABC@C@ABAB@B@D@BBD@D@DBBBD@DBB@B@BCDCDABA@A@@@A@AB@B@B@DABA@ABC@C@AD@B@F@DAB@BABAD@B@DB@B@BB@@@D@DAB@@A@A@CAAA@@A@A@CF@B@DAB@B@F@@BB@@@D@BBD@DBBBBDBBBB@@B@D@D@D@B@BBB@@BBBDDBB@BBB@BB@@ABEDABABA@CBCDABADADADADAD@BAF@@@D@D@D@B@BADADAB@BAD@B@B@BAB@B@D@@AB@DAB@D@BBDBBB@DBDBBBDDBFBDBF@BA@ABE@A@A@A@AB@B@DDFBBBDDDBBDDBB@B@B@@AB@@A@A@A@C@CAA@A@ABCDADAD@BCD@BA@CBEAC@@@ABAD@B@BBBBBDDB@@B@B@B@DAB@BABC@EBE@A@A@AB@BAD@BBDBBFBB@B@@@B@@@@B@@BBAD@B@@@BB@D@B@B@B@@@@@@BB@@@B@@AD@@@@@B@@@B@B@@BB@@@B@@BB@@@@@B@B@@@B@@@B@B@B@B@@@B@@BB@@@BB@@@AB@B@D@BAB@B@B@@@@@@AB@@A@@B@@@@@BA@AB@B@@A@@BBB@@@B@BAB@B@@@D@B@B@B@@@DA@@D@@@B@BA@@B@BB@@B@@@@AB@@@@@BA@@@A@@@@B@@@@@B@@@@@B@@@B@@@@@B@@ABB@@@@B@BA@@B@@@B@@@B@B@@A@@B@@@B@@@@@BB@@B@@@B@@@B@@@@@BBD@@BB@@B@@@@@B@@B@@@B@@@B@DB@B@@@@@B@B@@BB@@@B@@@B@@@@@B@@B@@BB@@@@BB@@BB@@@@BB@@@@BB@B@@@D@@BB@B@@@BBB@@@@@D@BBDHDBB@F@DBF@FDDDBB@B@BB@DDFH@BF@D@BBFBB@@AD@FIBAD@RA@@B@B@B@@@BA@@@@@@AA@@BABABC@C@AAACAA@@ABCHCFCDC@EHGDAB@DCBCBG@EBCBCFEDCFE@C@ECKCIAG@ABCFCFCHABA@ACAAAACAE@K@G@E@GDGBCBABADAB@BEBCBAAACAC@AC@G@E@E@CDCDEBC@ACACACCCEAA@@B@BAF@FADA@ABC@KAEAC@CBA@AAE@C@EBADEDADCDAD@DABA@C@EAC@ABA@@BAD@FAFABABAB@B@FBFBBBBBBDDDFBDBF@F@HAFAFAF@DAD@B@BCBCB@BA@@DBDADBDBD@B@DAB@D@@BBBDDBBD@DBB@BBBJBHAD@FAB@BBBBBDDBBDDBBBBDADCDAHAH@D@D@BBDDBBDBF@B@DABCBABADBFBD@DB@B@D@DADAFCH@DADADAD@@BBFDDDBDBDBD@FCFCFCDCDEAGAGAGAABCDGDIDGDGDEBGDIBCDAB@D@HAJAFAFAFCB@B@BFFFDBDBD@H@JBFBF@D@DDH@BAD@DADAFBFDDBFBFBFAH@F@FBFDFDBBDDBJ@PADBF@DDBHFH@@BDBD@@@B@BBFB@BDBBDBBBFDDDB@BDDBDD@@D@HBD@BBDDBDDBDDFBFBFBB@DADBDBDBFJBBBDBH@D@F@F@D@@ADAD@DADAFCFADADAD@D@B@B@B@B@B@BABABADAF@DABABABAFCFAFCFA@@B@BA@@BCBEBA@@@EBCDADAHAHCHCDE@GD@F@B@DADAFCF@FAH@JAH@H@H@H@FBD@BJDHDDBBB@F@H@FBF@@AH@DBDBFF@F@HALAF@DADCDADAJAF@DADCFGDADAB@DBBDBJBFBDDFFDDBFBD@PBRBJ@FBF@H@B@F@DDDDDDD@JBFDBD@BBBB@P@ZCAAACACBE@E@@BABAFCBCBA@ABC@CAAACCCCEAC@@@ABC@A@AAC@A@ABG@A@AAE@A@AAA@AA@@@CBA@AAAAAGBABADCHABCBA@A@ABE@CACAAC@AA@@ACAC@A@@BEBCDADA@ABEAC@CACA@@CBEAI@A@CDCDEBC@@@A@AAGAA@CBA@A@CAC@EAC@C@A@EAC@A@CBEBA@C@ABGBCBK@K@C@C@E@C@A@C@C@A@ABCFCBABCBEBEBA@C@G@EAECKCE@C@A@@@ABC@A@A@ABE@C@C@C@A@@BABA@ADC@C@A@A@AAA@AACAA@C@CAC@A@CBABAB@BADCBCBAAA@AAAACAA@A@AAA@@@CAC@CAC@A@ABCBC@CBABA@A@CBC@A@AAE@C@CACAC@A@E@ECC@AAE@AAAAAAACACAEAA@@A@ABCBC@C@C@C@CACAAACACAA@ACE@C@EACAGAEAEAA@CBABABA@IAA@C@EBC@E@C@A@@AACGBABCBC@EBC@CBC@ABC@CBABEDGDGBCBA@A@A@CAEAEAABAAC@A@C@A@ABABA@ADGBEDABABABABCFEDEBCBEDA@ABC@C@EAAACAA@AAA@A@CBA@CBCBA@A@CCEAAACACCAAA@A@ABA@ABCFCBADCFCDEDCBC@A@A@C@AAEAA@A@A@C@ABCDAFEBABC@A@AAGAEACBC@CBCDAHCHAHAD@BCBA@CAAACAACA@AAA@A@ABA@AD@DA@@FADADABABCBC@A@CACAACCECAAA@@A@A@CB@BABAB@D@DAF@HABADABABAAC@AACACAAACAAAC@C@CAAACAAAACAAA@A@C@C@CBA@AF@BCBC@A@CGE@A@ABABC@ADG@CDCBC@A@E@CDE@A@AACACBA@AB@BCDADCDCBABC@C@CBEBC@C@CCCAA@KACAC@CAC@@ACCA@C@ABC@G@E@C@E@C@C@C@CBCBEBA@C@AACA@@AACCAA@CAC@CAC@CAAAAACAAAAA@A@ABADCDADA@ADC@ABA@CBCAGAC@ABCBABADADADABCDCBEDCBCBABABCB@HCDCBABABCACAE@E@A@ADAH@DADADABEBEDABABAH@DAB@F@B@BABA@AAE@E@G@CBABADEBABA@I@EBCBA@ABADADAD@FCB@DCDCDADCBA@@BABAB@JAFAFAHAHAD@BAFEBABCBCBABE@A@GAE@EAE@AAAA@A@AAAAAAAC@C@CBADCD@DAD@DBDBBBDBB@DA@ABAAC@AA@@A@A@@DADEDCBABC@EBE@C@EAC@C@ABADCDADAFADAB@B@BA@AAC@CBA@AD@D@BBBDBBB@@@B@B@@@BAB@@A@ABCBE@ADABAD@B@DCFAFEBABA@C@A@E@@FCDCB@BABAB@@C@CBABA@ADAB@DBFBB@B@B@B@B@BAB@BABABABABABCBADADADCBADCBA@A@C@C@CBABCDADCB@DABA@ABA@@@A@C@A@AC@ACACCCAACAA@AAAA@@AA@ABAAABA@ABA@C@AAC@A@A@ABAB@BAB@B@B@BADADADCDCDEDCBABC@A@@@@AC@CAC@@@@@@CCAAAAAA@CAAACACAA@A@C@C@A@G@C@C@C@CBA@CBABA@A@@@@DCBC@ABC@AAAAA@AACAC@A@A@@@CBC@CBC@GBCBEBGDGBCBC@CBC@G@EEG@CBCACCEEW@A@ABABABABABABGBEBC@CAI@ABKBQ@CBKAE@ADEBADAJAD@BABADABABCAE@ABA@A@IDGBCFEB@HGBCBA@A@CAGAC@IBCBEBEBG@E@C@ABABADEBE@C@A@CBCBCBC@C@C@C@CDC@CAC@C@CBCBABCFGBA@C@CCAAAEAA@AAACCEECCECECAECECECACCE@EBAAEAG@EAC@CAEBEDEDEDCFIFEBC@E@E@IAEAE@ABABCDAHCD@BADGDEDGBC@AAABCBEFEFEDA@@"],"encodeOffsets":[[101854,28356]]}}],"UTF8Encoding":true});}));
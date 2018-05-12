(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('龙陵县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"530523","properties":{"name":"龙陵县","cp":[98.689261,24.586794],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@C@E@E@G@GAGAEAECE@CAE@C@E@CBCBCBABCAA@CAA@AAA@C@C@C@ABGBG@G@E@CACAACAAAAAB@@@@@BA@@@@@@BA@@@A@@@A@@@@@A@@B@@A@@@@AA@@@A@@@A@@@A@@@@@AB@@@@AB@@@@@@AB@@@@@BA@@@@BA@@@@B@@@@@@@BA@@@A@@@A@@@@@@@@BA@@@@@ABA@@@A@@@@@A@@@A@@@A@@@@@A@@B@@@@@@@@B@BB@B@B@DAB@BBB@BBB@B@DBBBD@DBDBDBB@D@D@BBB@DABA@ABA@AB@B@B@D@BBD@B@DBD@D@D@DBBBBDBBBB@DBB@B@DBB@BBDBBBBDD@BBFBDBD@DBBBDBDDBBBBBBBB@B@DAB@BABA@AD@@@B@D@BAB@D@BADADAF@FAD@DAD@@CBA@ADABCBADCDCBADCD@DCB@F@B@B@BB@BBBB@B@B@DAD@D@D@BADA@@D@FAB@D@DBDBDBBBDBDBDBD@DBDBBBB@D@D@DBD@@@@@DDBB@FBDBDDBH@B@BA@@BDH@BABABA@@BA@ABC@ADAB@B@BBBBB@DBBBD@B@DBB@DBDBBD@B@BBBB@BA@@B@DBF@B@BC@A@A@ABEDCDAD@BBD@BABABA@AB@B@BFH@DAB@DABABA@AB@BCBA@CBCB@B@B@BBB@B@DAB@BA@ABAB@@ABEB@@CDC@CBADAB@DBBBBBBB@B@B@BB@@BB@B@BA@AB@B@BAB@B@D@BB@@B@BA@@B@@A@@BA@AD@@@B@@ADCBADABAB@DBBBB@B@@D@BAB@D@BBBBBB@BBBBBBBD@BBBBBD@DBD@BBDBBBFBBBDDBBBB@BBDBBBB@DBB@DBBBBBBBBDBB@D@@ABA@A@A@A@ABABABCBC@A@@ACBADAH@JCDEFABGB@BA@AB@B@B@DBB@B@BG@A@@BBFADEBMDABADAB@F@DBBFFB@BBDBB@JB@@DBBB@@AB@BABAD@BAD@DADAB@DABABABABA@A@EDCBA@AAGAAA@@AA@AA@@@A@ABA@AAA@@@A@CDA@AB@AA@AAA@@@ABAB@BA@ADABABC@C@E@CAC@AAABCBAFADA@CBEBC@ABCBCBA@AAA@C@ABC@A@C@CACAAA@@GCA@@@CACACAC@ABA@A@A@AAA@A@ABCBA@E@C@CAA@AAEEACCACAAAA@@@ABA@AAAAA@ACA@CAE@CACAGEACAA@@@@A@ABA@AAA@CAI@C@AACAIEAAA@ABA@C@AAABA@CBKFCBA@A@@@AAAA@@E@AAGCCAC@AAACAACAA@@@@@ABAJ@B@@BB@@B@BB@@@B@@CBADABA@@BAAA@CC@AA@@@@BBHDJ@B@B@B@B@BD@@@D@B@B@B@@@@B@BABEDAB@B@@BB@BA@A@AB@@@B@@BBB@@@@B@@A@AB@@ABBF@B@@@BA@EFIFCBEBCBABAB@@@@BBD@@B@B@BA@ABCDABADAD@@@B@BBBB@BB@@@@@BA@A@A@CDA@ABC@C@A@AB@B@D@B@@@@EBC@A@@B@@BBBB@BAD@@@@CB@@@B@B@B@B@B@@A@C@@@E@KHCBCBA@AAEEAAA@C@AB@@A@@BDB@@@B@B@@@BBB@B@@@B@B@@A@@B@@A@@B@@@B@@@@@B@@BB@@BBB@BBB@BBB@@B@B@BBB@B@@@BB@B@BBB@B@B@BAB@@@B@@@B@@B@@@@@B@@@B@@@BDBBD@BDB@@BB@BB@B@B@D@@@B@B@DBB@BBFBBBB@B@D@BABAD@D@JGJGNGLCD@T@XBTBHCJAXOLMNIFCBAFAJCFADAD@LALCD@FAPAD@NBLBB@ZDFFFD@BHHHJJJNFALBBBJDHDD@@@@DF@@@@@@PLJH@BBV@BA@@B@BAF@BBLFLDJ@BBDBHADCPML@@ADGPEPCJ@LKTKN@BAL@^DDDFLFLNDBNLNNFVV@TCVIB@DAR@D@BDFBFBFADAB@DAFBDBFDB@J@B@DAB@B@BBB@D@BBAF@D@BB@J@BA@CDQ@CBCBEDEBEBCHIDAB@BADBPFJF@@BB@B@@@B@@@@B@@@BB@@@BB@D@BBB@D@@@BBDB@@BBD@D@@@D@D@@@B@D@@@B@D@B@@@@@@B@B@@B@@BB@B@BBDBBBDBBBB@D@@@BBBBBABBD@B@@AB@@@FCDB@@H@B@F@HAD@HAH@DA@@BA@C@C@EBEBAH@FADCBCBCBW@K@CBAL@BABA@C@EBABAD@@ADA@@BCA@CAC@@ABEBABBD@DA@@BAB@B@DAB@B@BAB@DA@@D@B@B@BBBB@@L@BB@BB@B@DDFDB@BBBDDBB@@BDBB@FADAB@BADEBA@CAAAACCAC@A@ABABICWHQNMT@PGTABA@@PIHSBCLMNOXKREVKBG@EBKDMNOAeEMHKJSDGBGBGHSEGGGEC@@GEMUAOBKCGCMAOCOECGKDI@UCECGGK@OEaS[OYIKQOCCMMKKAADCPKDA`AZDLBJMTKTUHGNQBCHQJMHIHGRQ@@LAPEFA@@@@HADWAY@WAQBEBMR@XbXTHTTDZRTLVBBE@OMIGAAAKGIKAOIMSOSMQKMIOOCAAAC@G@EAA@AAAACICEAGCCCAA@CAEBC@IBC@CB@@@@@@CAC@C@KEKECAEAEACAC@@@C@EBEBIBGBE@C@A@AA@@@A@@@CBCBC@C@CAA@ACCECCAC@GAC@CAAAG@GA@@CAC@CAE@C@C@CAC@EACAA@ACEAE@CAAAAAACC@CCCAAAC@C@EAC@AAAAECA@@@A@E@E@CAGAC@MEC@E@G@EAC@CCAACGACEGCCACGCCAAACACCKGGCAA@@ACCCCACEGEEGACCAIGGAEAGAEAE@EBCBA@CBGBIDCBA@IAE@E@EAE@E@E@EA"],"encodeOffsets":[[101165,24710]]}}],"UTF8Encoding":true});}));
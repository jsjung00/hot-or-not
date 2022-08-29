const IMAGE_HEIGHT = 500;
const IMAGE_WIDTH = 500;

const arr_means = [
  0.50549553, 0.69796716, 0.50405512, 0.62527704, 0.50416298, 0.64418086,
  0.48342309, 0.53647255, 0.50383608, 0.59946881, 0.50357243, 0.56349831,
  0.50309995, 0.47401149, 0.33638935, 0.45655444, 0.50252641, 0.40903169,
  0.50229255, 0.37499108, 0.50192359, 0.24346402, 0.50560323, 0.70639844,
  0.50564054, 0.71463313, 0.50576556, 0.71994021, 0.50587189, 0.73155724,
  0.50610582, 0.74250374, 0.50618676, 0.75556297, 0.50627417, 0.76923758,
  0.50610234, 0.79361164, 0.50419129, 0.63679752, 0.48087939, 0.63376151,
  0.24342035, 0.35288277, 0.40206478, 0.47988446, 0.37876419, 0.48175901,
  0.35607827, 0.480521, 0.32656873, 0.46501644, 0.42180175, 0.4749226, 0.365205,
  0.40905435, 0.39275642, 0.41228836, 0.34035481, 0.41327641, 0.3247942,
  0.4229053, 0.30611238, 0.48081284, 0.41905211, 0.82691679, 0.3279312,
  0.44918759, 0.23444555, 0.46389631, 0.2788323, 0.4616883, 0.3840528,
  0.5890417, 0.47505557, 0.6925711, 0.47802297, 0.71291597, 0.44655179,
  0.69817876, 0.42733014, 0.70399681, 0.45477121, 0.71220234, 0.43662172,
  0.71260234, 0.39591947, 0.73995181, 0.48420503, 0.62433309, 0.48096351,
  0.59931973, 0.29034205, 0.40182758, 0.43331774, 0.52565012, 0.42918075,
  0.60957821, 0.42777584, 0.59463103, 0.31194722, 0.58252014, 0.48202032,
  0.56584129, 0.34476279, 0.37835248, 0.31226184, 0.38537879, 0.26602116,
  0.31025408, 0.45031003, 0.40352474, 0.41654232, 0.42362412, 0.37704516,
  0.71477342, 0.26581248, 0.69654045, 0.4467059, 0.6244019, 0.46545648,
  0.63218688, 0.4029959, 0.71360148, 0.40879003, 0.71436932, 0.2993361,
  0.36872805, 0.42789468, 0.61837776, 0.38974565, 0.38244549, 0.38532265,
  0.36248383, 0.36217631, 0.25540028, 0.28323295, 0.33952203, 0.37706289,
  0.30756547, 0.27624597, 0.38926965, 0.25939783, 0.37320794, 0.47597584,
  0.7037982, 0.45056575, 0.70569438, 0.43177765, 0.7084107, 0.45188787,
  0.6282909, 0.40596223, 0.7140048, 0.41776977, 0.72394307, 0.41179593,
  0.71478605, 0.45828644, 0.62020175, 0.44055157, 0.71557, 0.45849723,
  0.71648269, 0.48035242, 0.71831153, 0.4733679, 0.79184988, 0.47531187,
  0.76657161, 0.47631464, 0.75285371, 0.47822074, 0.73995561, 0.4807085,
  0.72987372, 0.44094998, 0.72323768, 0.43649637, 0.72761631, 0.43146246,
  0.73396578, 0.42760809, 0.74145524, 0.40317116, 0.6784203, 0.2366682,
  0.56967409, 0.5041666, 0.64070188, 0.4275421, 0.71973964, 0.42265698,
  0.72148236, 0.47322189, 0.64173224, 0.43558039, 0.63151337, 0.46949479,
  0.63712579, 0.40829143, 0.53904826, 0.36851012, 0.55510467, 0.42358898,
  0.60415177, 0.30350182, 0.27677512, 0.32049187, 0.31629502, 0.33628907,
  0.35851897, 0.41583515, 0.76048793, 0.44238865, 0.37103254, 0.43554655,
  0.3069613, 0.42613186, 0.245526, 0.33714453, 0.4749965, 0.28051079,
  0.49780125, 0.4346664, 0.46974605, 0.30217076, 0.43280686, 0.44993651,
  0.51040137, 0.44345822, 0.60352945, 0.25428932, 0.51548168, 0.29667748,
  0.51700919, 0.3271841, 0.528026, 0.37288178, 0.52486478, 0.40616102,
  0.51502143, 0.43051048, 0.50446566, 0.48068948, 0.47969321, 0.25813402,
  0.56883188, 0.28302694, 0.42871397, 0.49191255, 0.63580487, 0.43509966,
  0.55237237, 0.22806225, 0.45661789, 0.44893463, 0.49261036, 0.42133009,
  0.60358283, 0.31708195, 0.4497784, 0.44262858, 0.58522329, 0.24715569,
  0.63162504, 0.43449797, 0.46100914, 0.4617758, 0.57307294, 0.31789936,
  0.76329194, 0.32113137, 0.78889217, 0.23753907, 0.57118266, 0.28706622,
  0.72809189, 0.24588881, 0.41453166, 0.41547694, 0.85074627, 0.49435454,
  0.6396842, 0.4134386, 0.56945856, 0.2590341, 0.46460841, 0.3586224,
  0.46581633, 0.37831457, 0.46779216, 0.4135399, 0.72711653, 0.26353841,
  0.61961523, 0.45866941, 0.88415341, 0.3887743, 0.84786801, 0.3580511,
  0.82357326, 0.50200173, 0.30796744, 0.50744585, 0.88891373, 0.3977914,
  0.46633118, 0.41637304, 0.46343094, 0.42859961, 0.46234841, 0.26613265,
  0.42191832, 0.41278066, 0.44151756, 0.39196443, 0.43340224, 0.37121572,
  0.43189101, 0.35140434, 0.4354538, 0.33957874, 0.44110721, 0.23169538,
  0.39904084, 0.34545835, 0.46155127, 0.50447619, 0.66217834, 0.4267905,
  0.66678822, 0.44693898, 0.62151907, 0.47125715, 0.66251406, 0.5028224,
  0.44015385, 0.35125314, 0.79709579, 0.38240351, 0.82395103, 0.45695645,
  0.869526, 0.29167992, 0.7494235, 0.42761165, 0.4533721, 0.46561779,
  0.52134318, 0.50715903, 0.87399932, 0.42103316, 0.86937356, 0.24683571,
  0.6272513, 0.45903848, 0.72673273, 0.45470065, 0.73435623, 0.45110601,
  0.74443167, 0.44876211, 0.75669989, 0.44105321, 0.77896205, 0.42179035,
  0.71328661, 0.41706487, 0.71115634, 0.41315618, 0.70879401, 0.38524412,
  0.69454833, 0.29410565, 0.63577953, 0.46570701, 0.4933351, 0.4513325,
  0.44301929, 0.4368833, 0.44499302, 0.42658615, 0.71516682, 0.2943157,
  0.69447444, 0.47203816, 0.44397461, 0.42921779, 0.80191995, 0.50343378,
  0.53304895, 0.48183211, 0.50956256, 0.50328347, 0.50466936, 0.44926495,
  0.56119238, 0.50679472, 0.85028242, 0.50641609, 0.8201193, 0.46654748,
  0.81760577, 0.37526152, 0.75078369, 0.4013299, 0.62259083, 0.40009693,
  0.77953342, 0.34554981, 0.61769712, 0.37901483, 0.64677581, 0.32633709,
  0.65614368, 0.45948049, 0.84652619, 0.43532981, 0.57342168, 0.35690791,
  0.77005624, 0.38795373, 0.79976838, 0.35484041, 0.71887326, 0.27152784,
  0.66239893, 0.32566374, 0.72295723, 0.26141275, 0.67950877, 0.36055654,
  0.67611015, 0.45086903, 0.53648194, 0.45099989, 0.61594079, 0.43656882,
  0.61882098, 0.46091126, 0.6008608, 0.43181567, 0.41945839, 0.39204427,
  0.40221507, 0.35718558, 0.39861275, 0.32906429, 0.40333385, 0.31047602,
  0.41435231, 0.30055511, 0.45572988, 0.23267852, 0.51705589, 0.31919728,
  0.49236011, 0.34338667, 0.50093165, 0.37510585, 0.5012792, 0.40470674,
  0.49586736, 0.42742707, 0.48869353, 0.44309724, 0.48176635, 0.23140847,
  0.51220693, 0.43674108, 0.62371177, 0.4654333, 0.54662204, 0.46735103,
  0.6197248, 0.47947239, 0.63082903, 0.46736216, 0.62268976, 0.44278576,
  0.63000775, 0.4842801, 0.63383685, 0.48654733, 0.63772988, 0.44267934,
  0.46245793, 0.45516795, 0.46892052, 0.46265754, 0.47429713, 0.33297872,
  0.44546922, 0.31568669, 0.43417602, 0.52358074, 0.53607838, 0.67083607,
  0.45453483, 0.52748183, 0.63318516, 0.76179505, 0.34934447, 0.60592632,
  0.47850076, 0.62902012, 0.47973109, 0.65154396, 0.47827699, 0.68081483,
  0.46276871, 0.58631559, 0.47395126, 0.64071122, 0.40707762, 0.61321095,
  0.4106975, 0.66582117, 0.41085645, 0.68150749, 0.42032374, 0.70148855,
  0.47812533, 0.59441974, 0.82551876, 0.67934589, 0.44711484, 0.77363142,
  0.46041696, 0.72810056, 0.4583993, 0.62483037, 0.58703108, 0.53596569,
  0.69191088, 0.53350008, 0.71234652, 0.56495997, 0.69687663, 0.58416348,
  0.70218725, 0.55697578, 0.71111686, 0.57519405, 0.71103818, 0.61593836,
  0.73759492, 0.52388377, 0.62395416, 0.52660994, 0.59883262, 0.71431059,
  0.3986697, 0.57437428, 0.52432294, 0.57933886, 0.60821204, 0.5806327,
  0.59318887, 0.69726572, 0.57947104, 0.52516597, 0.56533272, 0.65887707,
  0.3759025, 0.69173353, 0.38246548, 0.73844499, 0.30719938, 0.55417189,
  0.40272808, 0.58980908, 0.42260065, 0.63446476, 0.71203787, 0.74729528,
  0.69308821, 0.56188664, 0.6233082, 0.54317267, 0.63147247, 0.60897088,
  0.71104082, 0.60312745, 0.7119367, 0.70418456, 0.36548607, 0.58070511,
  0.61700144, 0.61416873, 0.38063509, 0.61771694, 0.36055656, 0.64212793,
  0.25369932, 0.72151519, 0.33691029, 0.6271851, 0.30620274, 0.72816942,
  0.3861133, 0.74625759, 0.37035366, 0.53530986, 0.70318878, 0.56106579,
  0.70456548, 0.579922, 0.70668309, 0.55660722, 0.62728685, 0.60597309,
  0.71151255, 0.5942858, 0.7216725, 0.60005397, 0.71240802, 0.55009967,
  0.61929941, 0.57131239, 0.71399288, 0.55326945, 0.71536955, 0.53148408,
  0.71774476, 0.53888056, 0.79132524, 0.53727358, 0.76593842, 0.53592579,
  0.75214978, 0.53386677, 0.73925544, 0.53124306, 0.72923458, 0.57086115,
  0.72158968, 0.57563529, 0.72585435, 0.5807463, 0.73205746, 0.58471535,
  0.73944978, 0.60692846, 0.67638739, 0.77355491, 0.56621752, 0.58430459,
  0.71778784, 0.5893292, 0.71938273, 0.53560272, 0.6412763, 0.57328803,
  0.63033654, 0.53922726, 0.63660153, 0.59952638, 0.53738062, 0.63992899,
  0.55292228, 0.58506186, 0.60273793, 0.70089836, 0.27427933, 0.68373292,
  0.31435412, 0.66668345, 0.35578376, 0.59623631, 0.75863826, 0.56088863,
  0.37003205, 0.56871168, 0.30617264, 0.57811169, 0.24455396, 0.67027773,
  0.47281013, 0.72728056, 0.49439851, 0.57334464, 0.4691509, 0.70408069,
  0.430005, 0.55757621, 0.50930558, 0.56468688, 0.60243728, 0.75430958,
  0.51205727, 0.71166554, 0.51385544, 0.68149095, 0.52503038, 0.63575671,
  0.52258639, 0.60233182, 0.51335622, 0.57770254, 0.50338757, 0.52577266,
  0.47926003, 0.75150398, 0.56537804, 0.72285283, 0.42567073, 0.51644738,
  0.63553498, 0.57285295, 0.55105648, 0.77978248, 0.45278078, 0.55896571,
  0.49187018, 0.58735274, 0.60213404, 0.68996375, 0.44747149, 0.565387,
  0.58404109, 0.76459968, 0.62819173, 0.5732124, 0.460404, 0.54569238,
  0.57223936, 0.69594692, 0.76048639, 0.69331519, 0.78584571, 0.77255628,
  0.56764034, 0.72619321, 0.72484007, 0.76085067, 0.41126991, 0.59856656,
  0.84942981, 0.51398795, 0.63944496, 0.59476376, 0.56789338, 0.74840147,
  0.46095966, 0.64863892, 0.46384916, 0.62915919, 0.4660052, 0.59864752,
  0.72472011, 0.74726154, 0.61619306, 0.55592989, 0.8833193, 0.62591741,
  0.84562238, 0.65692433, 0.82095659, 0.609909, 0.46494949, 0.59142897,
  0.46250759, 0.5792068, 0.46180578, 0.73949424, 0.41844737, 0.59451515,
  0.4406533, 0.61489309, 0.43209441, 0.63570541, 0.43025461, 0.65562191,
  0.43347759, 0.66748335, 0.43905077, 0.77455955, 0.39517194, 0.66171321,
  0.45952958, 0.5832055, 0.66527344, 0.56158404, 0.62047152, 0.53832949,
  0.66198792, 0.66268979, 0.79486856, 0.63169051, 0.8222119, 0.55706315,
  0.86882769, 0.72228147, 0.74598019, 0.57991849, 0.45277367, 0.54163819,
  0.5205953, 0.59353902, 0.86770237, 0.76429116, 0.62379568, 0.55286531,
  0.72552199, 0.55740641, 0.73302254, 0.56120959, 0.74301469, 0.56395026,
  0.75527524, 0.57108708, 0.77755673, 0.59014549, 0.71117234, 0.59467908,
  0.70893491, 0.59861569, 0.70651109, 0.62541242, 0.69203286, 0.71655469,
  0.6324873, 0.5412093, 0.49268047, 0.55561794, 0.44239371, 0.57021446,
  0.44434909, 0.58540815, 0.71318365, 0.71781931, 0.69109294, 0.53400596,
  0.44369298, 0.58365187, 0.8005118, 0.5249507, 0.50910003, 0.5584697,
  0.56026719, 0.54626712, 0.81691314, 0.63681547, 0.74846379, 0.60767641,
  0.62069405, 0.61251247, 0.7775765, 0.66417262, 0.61504838, 0.63083323,
  0.6445398, 0.68436014, 0.65321584, 0.55387641, 0.84586879, 0.57281169,
  0.57208999, 0.65612539, 0.7676337, 0.62550461, 0.79788679, 0.65676218,
  0.71626134, 0.74024083, 0.6589402, 0.68665887, 0.71999083, 0.75090897,
  0.67607407, 0.65018228, 0.67352444, 0.55668358, 0.5355187, 0.55731763,
  0.61490712, 0.57198189, 0.61761301, 0.54686812, 0.60002896, 0.57403506,
  0.41850822, 0.61292254, 0.40067953, 0.64770941, 0.39652799, 0.67600079,
  0.40076239, 0.69503734, 0.41153651, 0.70627677, 0.45298116, 0.77623711,
  0.51349494, 0.68871038, 0.4898446, 0.66469304, 0.4984261, 0.63305144,
  0.49917071, 0.60343649, 0.49433238, 0.58077663, 0.48770133, 0.5649795,
  0.48095085, 0.77766718, 0.50852599, 0.5717446, 0.62243972, 0.5418328,
  0.54587701, 0.54072287, 0.61899255, 0.52887919, 0.63037762, 0.54093101,
  0.6220689, 0.56587574, 0.62881882, 0.52408694, 0.63340881, 0.52173375,
  0.6372557, 0.565032, 0.46193342, 0.55246794, 0.46832296, 0.54452906,
  0.47385725, 0.67419989, 0.44341724, 0.69083406, 0.43171169,
];

const arr_stds = [
  0.03577733, 0.04084372, 0.04394563, 0.04337256, 0.038958, 0.04059513,
  0.0418717, 0.04078947, 0.04476227, 0.04337781, 0.0438712, 0.04219318,
  0.04011092, 0.03995278, 0.03641975, 0.03908426, 0.04015124, 0.04178917,
  0.0413632, 0.04375667, 0.04395639, 0.05097981, 0.03557186, 0.0405901,
  0.03501593, 0.04030131, 0.03430937, 0.04018659, 0.03432678, 0.0421509,
  0.0346899, 0.04262972, 0.03480674, 0.04328493, 0.03456555, 0.04394822,
  0.03465606, 0.04403165, 0.0423712, 0.0425721, 0.04033514, 0.04125351,
  0.0367161, 0.0454361, 0.03359344, 0.03784926, 0.0342834, 0.03794224,
  0.03497928, 0.03809344, 0.03580657, 0.03864487, 0.0334298, 0.03798563,
  0.03741333, 0.04162869, 0.0362736, 0.04117168, 0.03807464, 0.04164433,
  0.03801911, 0.04116898, 0.035581, 0.03811047, 0.0340634, 0.04403163,
  0.03658193, 0.03934617, 0.03571499, 0.03957078, 0.03599256, 0.03921794,
  0.035641, 0.03635269, 0.03550203, 0.04042329, 0.03447688, 0.03986584,
  0.0348452, 0.03934773, 0.03466123, 0.0384266, 0.03411403, 0.03915238,
  0.03402303, 0.03847053, 0.03390835, 0.0376482, 0.04357927, 0.04314348,
  0.04429877, 0.04299463, 0.03936853, 0.04331295, 0.03497171, 0.0367594,
  0.03899587, 0.03901126, 0.03823754, 0.03831727, 0.03681908, 0.03619381,
  0.04335163, 0.04185443, 0.04095532, 0.04514621, 0.04060295, 0.04456636,
  0.03846703, 0.04779336, 0.03964395, 0.04352221, 0.03519143, 0.04038273,
  0.03488872, 0.03708918, 0.03518108, 0.03893252, 0.03848753, 0.03925507,
  0.03858717, 0.03962658, 0.03494912, 0.03752932, 0.0345156, 0.03755085,
  0.04072941, 0.04570834, 0.03790256, 0.03809905, 0.04070151, 0.0449938,
  0.04180924, 0.04628067, 0.04223119, 0.0506408, 0.03947457, 0.04594049,
  0.04214744, 0.04731892, 0.03912534, 0.04406097, 0.03766064, 0.04402404,
  0.03510092, 0.04009492, 0.03454534, 0.0391828, 0.03439767, 0.03842056,
  0.03821196, 0.03904557, 0.0347409, 0.0375418, 0.03421746, 0.03779439,
  0.03436245, 0.03756649, 0.04050715, 0.04109114, 0.03351736, 0.03859582,
  0.03359589, 0.03926003, 0.03378145, 0.03986471, 0.03419102, 0.04357249,
  0.03423234, 0.0434237, 0.03439872, 0.04278054, 0.03422192, 0.04212331,
  0.03381031, 0.04169745, 0.0333487, 0.03883627, 0.0336702, 0.03892916,
  0.03402553, 0.03919112, 0.03415943, 0.03946767, 0.03587925, 0.03730392,
  0.03479824, 0.03811105, 0.04078682, 0.04174427, 0.03344178, 0.03775849,
  0.03390663, 0.03775674, 0.03844245, 0.0397526, 0.03695312, 0.03757888,
  0.03855354, 0.03971268, 0.0346669, 0.03623604, 0.035388, 0.03621133,
  0.03732544, 0.03759394, 0.0404094, 0.04963464, 0.04100077, 0.04714675,
  0.04161225, 0.04638537, 0.03379563, 0.03938733, 0.04150299, 0.04582335,
  0.04254869, 0.0469595, 0.04331023, 0.05097053, 0.0354748, 0.03832485,
  0.03595487, 0.03778114, 0.03359781, 0.0382763, 0.03750103, 0.04072756,
  0.03585678, 0.03753611, 0.04066667, 0.04050757, 0.03657191, 0.03729769,
  0.03612581, 0.03722859, 0.03581401, 0.03689175, 0.0346687, 0.0366469,
  0.03405005, 0.03673625, 0.03418094, 0.03713832, 0.03914948, 0.03952346,
  0.03709729, 0.03621777, 0.03752952, 0.04117753, 0.04214594, 0.04250386,
  0.03585529, 0.03700272, 0.03462753, 0.04077275, 0.03489161, 0.03781782,
  0.03608064, 0.03671385, 0.03645408, 0.03944774, 0.03966915, 0.03952421,
  0.03532538, 0.03802985, 0.03341486, 0.03861176, 0.04166207, 0.04081463,
  0.03415867, 0.03946081, 0.03364186, 0.0415856, 0.03621697, 0.03681547,
  0.03521677, 0.03839695, 0.03629143, 0.04169711, 0.03430804, 0.04596066,
  0.04073732, 0.04166463, 0.03529578, 0.03635643, 0.03595222, 0.03930681,
  0.0356744, 0.03886008, 0.0348527, 0.03865213, 0.03438681, 0.03782276,
  0.03707131, 0.03594141, 0.03447864, 0.04881318, 0.0332951, 0.0453766,
  0.03312804, 0.04349146, 0.04284615, 0.04670438, 0.03462755, 0.04923604,
  0.03406753, 0.03849638, 0.03359313, 0.03846523, 0.0334365, 0.03850917,
  0.03718659, 0.04164867, 0.03395451, 0.03897411, 0.03472352, 0.03932008,
  0.03581958, 0.03957965, 0.0366223, 0.03964042, 0.03684818, 0.03953342,
  0.03555752, 0.04310049, 0.0361767, 0.03898554, 0.03781049, 0.03994031,
  0.0363352, 0.03789232, 0.03913535, 0.03981861, 0.03749966, 0.03949169,
  0.03922406, 0.04000233, 0.03349647, 0.04125718, 0.03351677, 0.0433688,
  0.03501033, 0.04775648, 0.03437991, 0.04019361, 0.03363105, 0.03874218,
  0.03884364, 0.03910035, 0.03527267, 0.04829684, 0.03396423, 0.04739251,
  0.03637665, 0.03673784, 0.03349647, 0.04040584, 0.03386749, 0.04064761,
  0.03412677, 0.04115521, 0.03418008, 0.04177289, 0.03401724, 0.04171626,
  0.03427142, 0.03793019, 0.03454538, 0.0378651, 0.03473551, 0.03783514,
  0.0356023, 0.03704866, 0.03688722, 0.03598438, 0.03743488, 0.03859486,
  0.03530319, 0.03975721, 0.03428391, 0.03936045, 0.0339248, 0.03806549,
  0.03577737, 0.03672873, 0.03749437, 0.04029392, 0.03360698, 0.04231576,
  0.04246526, 0.04113128, 0.04053971, 0.04007399, 0.04125813, 0.04045875,
  0.03816692, 0.03851022, 0.03538015, 0.04667393, 0.03491285, 0.04495041,
  0.03433446, 0.04441901, 0.03340593, 0.03803639, 0.03554657, 0.03639322,
  0.0332332, 0.03990175, 0.03634763, 0.03642106, 0.03543501, 0.0364916,
  0.03610992, 0.03630984, 0.03494013, 0.04611435, 0.03673144, 0.03747888,
  0.03353535, 0.03923947, 0.03339341, 0.04138385, 0.03437666, 0.03698454,
  0.03654664, 0.03632328, 0.03473763, 0.03726862, 0.03601546, 0.03742485,
  0.03532191, 0.03650267, 0.03711522, 0.03797243, 0.04083272, 0.04108286,
  0.03914043, 0.03945964, 0.04264272, 0.04196903, 0.03656827, 0.04128065,
  0.03802276, 0.04253421, 0.03916957, 0.04296486, 0.03950958, 0.04278985,
  0.03894592, 0.04208081, 0.03607307, 0.03927546, 0.03591207, 0.03786195,
  0.03552856, 0.03769702, 0.0349987, 0.03735863, 0.03420254, 0.03717431,
  0.03358013, 0.03719225, 0.03353355, 0.03745231, 0.03389768, 0.0378643,
  0.03433178, 0.03911411, 0.03826748, 0.0387177, 0.04024895, 0.03980956,
  0.04247423, 0.04242741, 0.04117467, 0.04187182, 0.04125525, 0.04174515,
  0.03767817, 0.0383253, 0.04177118, 0.04229991, 0.04048261, 0.04145651,
  0.03378497, 0.03867711, 0.03450814, 0.03855419, 0.03577114, 0.03870987,
  0.03680913, 0.03943421, 0.03747666, 0.04048017, 0.04174819, 0.04074926,
  0.0362317, 0.03880775, 0.04010381, 0.04111176, 0.03566572, 0.0455269,
  0.03378884, 0.03781738, 0.03429877, 0.03784518, 0.03482488, 0.0378769,
  0.03547075, 0.03834954, 0.03378549, 0.03791687, 0.03711357, 0.04151692,
  0.03611869, 0.04108777, 0.03773329, 0.04149552, 0.03771817, 0.0409681,
  0.03505909, 0.03781833, 0.03390436, 0.04341508, 0.03633183, 0.03907991,
  0.03471755, 0.03911782, 0.03543675, 0.03895039, 0.03522519, 0.03601275,
  0.03543132, 0.04034054, 0.03447026, 0.03981179, 0.03464345, 0.03925441,
  0.03436221, 0.03834641, 0.03407111, 0.03908669, 0.03391363, 0.03840945,
  0.03403135, 0.03724562, 0.04338461, 0.04302217, 0.044091, 0.04289712,
  0.03901127, 0.04299653, 0.03466965, 0.03663112, 0.0382675, 0.03880648,
  0.03747557, 0.03814809, 0.03653058, 0.0357649, 0.04319544, 0.04177753,
  0.04099498, 0.04492313, 0.04039954, 0.04429594, 0.03770905, 0.04801324,
  0.03994093, 0.04334805, 0.03523278, 0.04028648, 0.03496057, 0.03683697,
  0.03512462, 0.03751765, 0.03785498, 0.03906215, 0.03807509, 0.03944947,
  0.03489448, 0.03748391, 0.03446185, 0.03749044, 0.04053904, 0.04549835,
  0.03709947, 0.03790508, 0.04097402, 0.04477456, 0.04201992, 0.04615076,
  0.0421298, 0.05090303, 0.03893802, 0.04600152, 0.04224666, 0.04741179,
  0.03870385, 0.04380818, 0.03680113, 0.04396995, 0.03504962, 0.04002717,
  0.03442227, 0.03909963, 0.03420687, 0.03834445, 0.03760673, 0.03886079,
  0.0346908, 0.03748994, 0.03419381, 0.03755426, 0.03431696, 0.03750046,
  0.04010285, 0.04087718, 0.03350934, 0.03855946, 0.03361472, 0.03921634,
  0.03380931, 0.03982634, 0.03428624, 0.04330346, 0.03428706, 0.04324709,
  0.03444129, 0.04259218, 0.03426502, 0.0419326, 0.03385665, 0.04152058,
  0.03338472, 0.03853621, 0.03369224, 0.03860898, 0.03402786, 0.0388499,
  0.0341673, 0.03911851, 0.03562822, 0.03699286, 0.03411896, 0.03708015,
  0.03342236, 0.03752392, 0.03388802, 0.03752174, 0.03800016, 0.03961917,
  0.03628758, 0.03739012, 0.0380734, 0.03956177, 0.03421036, 0.03605552,
  0.03499537, 0.03593822, 0.03650008, 0.03740805, 0.04004407, 0.04992655,
  0.04081355, 0.04725305, 0.04167895, 0.0462472, 0.03398818, 0.03886239,
  0.04167027, 0.04570279, 0.04264957, 0.04701712, 0.04330708, 0.05113205,
  0.03520567, 0.03802988, 0.03531954, 0.03751135, 0.03403877, 0.0381539,
  0.03706574, 0.04044434, 0.03567099, 0.03744902, 0.04015899, 0.04029829,
  0.0357542, 0.03677876, 0.03547122, 0.03692681, 0.03518521, 0.03658006,
  0.03432112, 0.03636856, 0.03399955, 0.03651254, 0.03433389, 0.03691769,
  0.0390773, 0.03949266, 0.03648603, 0.03559708, 0.03702221, 0.04088692,
  0.04204278, 0.04240694, 0.0353622, 0.0368559, 0.03363949, 0.04037178,
  0.03513509, 0.03759108, 0.03527074, 0.03652756, 0.03611389, 0.03915429,
  0.03915684, 0.03935458, 0.03491308, 0.03674856, 0.0338569, 0.03849407,
  0.04133778, 0.04067389, 0.0341779, 0.0383135, 0.03361, 0.04038989, 0.03556793,
  0.03586676, 0.03537859, 0.03707168, 0.03532098, 0.04147253, 0.0338859,
  0.04531248, 0.04064081, 0.04160328, 0.03468842, 0.03614324, 0.03540552,
  0.03910919, 0.03564615, 0.038706, 0.0349356, 0.03863877, 0.03435206,
  0.03758294, 0.03677475, 0.03507232, 0.03407499, 0.04848939, 0.03274843,
  0.04456348, 0.03276558, 0.04251012, 0.0342831, 0.03854243, 0.03396165,
  0.03846889, 0.03387745, 0.03843366, 0.03666802, 0.04144489, 0.0340422,
  0.03887804, 0.03465775, 0.03927123, 0.03566549, 0.03953991, 0.03641244,
  0.03956836, 0.03661215, 0.03938836, 0.03447417, 0.04300124, 0.03606648,
  0.03874116, 0.03584288, 0.03762966, 0.03852552, 0.03961516, 0.03719861,
  0.03935177, 0.03314057, 0.04027338, 0.03310109, 0.04254006, 0.03468139,
  0.0474149, 0.03445236, 0.03881757, 0.03393176, 0.03861456, 0.03866001,
  0.03902341, 0.03342061, 0.04676991, 0.03605194, 0.0355237, 0.03355777,
  0.04012848, 0.03392523, 0.04034613, 0.03417919, 0.04083412, 0.03424882,
  0.04144914, 0.03416374, 0.0412208, 0.03415449, 0.03787708, 0.03435828,
  0.03780241, 0.03450575, 0.03777562, 0.03558164, 0.03676619, 0.03684696,
  0.03523012, 0.03732807, 0.03853662, 0.03562394, 0.03963948, 0.03461552,
  0.0392448, 0.03388723, 0.03803003, 0.03594385, 0.03567815, 0.0377716,
  0.04014747, 0.03369674, 0.04177638, 0.04042893, 0.04003026, 0.03779328,
  0.03838057, 0.0343756, 0.04411197, 0.03324602, 0.03746469, 0.03489186,
  0.03608752, 0.03318732, 0.03929151, 0.03623274, 0.03589972, 0.0351474,
  0.03606271, 0.03615905, 0.03565192, 0.03477907, 0.04576957, 0.03613233,
  0.03733261, 0.03325679, 0.03841834, 0.03317271, 0.0406458, 0.03430347,
  0.03649876, 0.03652122, 0.0352453, 0.03479836, 0.03642361, 0.03600402,
  0.03605947, 0.03528183, 0.0360954, 0.03680479, 0.03785909, 0.04037664,
  0.04086845, 0.03846703, 0.03924901, 0.04226427, 0.04178496, 0.03678683,
  0.04113044, 0.03804642, 0.04235211, 0.03899535, 0.04276454, 0.03918933,
  0.04255685, 0.03852675, 0.04181718, 0.03559149, 0.03896919, 0.0350008,
  0.03714108, 0.03506882, 0.03738486, 0.03463698, 0.03708371, 0.03405485,
  0.03698181, 0.0336797, 0.03706351, 0.03380901, 0.03730789, 0.03425386,
  0.03770441, 0.0334785, 0.0383946, 0.0375519, 0.03851076, 0.04002661,
  0.03971544, 0.04212691, 0.04221169, 0.04097759, 0.04170573, 0.04095408,
  0.04153974, 0.03704585, 0.03813722, 0.04161108, 0.0421557, 0.04029799,
  0.04134071, 0.03423614, 0.03853957, 0.03487878, 0.03840449, 0.03604852,
  0.03851381, 0.036554, 0.03922098, 0.03712474, 0.0402148,
];

export { IMAGE_HEIGHT, IMAGE_WIDTH, arr_means, arr_stds };
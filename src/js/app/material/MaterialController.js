//public/js/app/material/MaterialController.js

;(function() {

	angular.module('Alperina.controllers')
		.controller('MaterialController', MaterialController);

	function MaterialController($routeParams, $sce, $http, Header) {

		var self = this;

		$http.get('/api/material/' + $routeParams.id).then(function(data) {
			console.log(data.data);
			self.material = data.data.material;
			self.tags = data.data.tags;
			Header.setTitle(self.material.title);
		});
		/*,
			materials = [
				{
					id: 1,
					title: 'Страна "Нельзя"',
					date: '19.10.2004',
					text: '<h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Несмотря на 11 основных запретов и миллион мелких, сингапурцы живут припеваючи</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);"><i>Какой думающий человек в России не любит замечательное стихотворение Алексея Толстого, в котором рефреном повторяются слова: &#34;Земля наша богата,/Порядка в ней лишь нет&#34;. Но есть на свете страны, где порядки таковы, что нам даже и не снилось. Я имею в виду государство Сингапур. Что любопытно, в свое время отцы-основатели Сингапура многое перенимали у СССР и считали, что именно за таким государством будущее. Однако жизнь расставила свои акценты. И сегодня уже нам интересно узнать, как же живется в стране, где слово &#34;порядок&#34; - ключевое.</i></p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- ...Сусанна, и не вздумайте там жевать жвачку, - давал мне последнее напутствие перед поездкой коллега - известный востоковед Всеволод Овчинников. - Заплатите большой штраф.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Он также советовал мне не брать журналы типа &#34;Плейбой&#34;. Можно было бы шутить на эту тему, но за чтение подобных изданий в Сингапуре тоже штрафуют. И, честно говоря, мне от такой информации было слегка не по себе. Я представляла себе Сингапур шумной и развеселой точкой посередине Азии, большим портом, где живут народы многих национальностей, а также гуляют толпы туристов, которые останавливаются здесь на пути в Австралию и Новую Зеландию. Я знала, что в нем масса товаров из разных стран, а где процветает торговля, там, как известно, разгул криминала. Много света, огней, баров и казино...</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Но по мере того как я начала собирать сведения о Сингапуре, картинка становилась совсем другой. Казино нет вообще - азартные игры запрещены. Штрафуют буквально за все - за переход улицы в неположенном месте, за езду непристегнутым, за необоснованное прикосновение к другому человеку, за чтение порнографических журналов, за просмотр фильмов со сценами насилия, за то, что соришь на улицах или нелегально скачиваешь из Интернета... За наркотики вообще положена смертная казнь.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Мне начало казаться, что неделя поездки станет самой здоровой и целомудренной в моей жизни. Между прочим, за то, что мужчины в Сингапуре заигрывают с женщинами, штраф тоже немаленький - пять тысяч сингапурских долларов (соотношение американского доллара к сингапурскому - 1 к 1,6).</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Осторожно: двери открываются</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Несколько лет назад воздушное сообщение между Россией и Сингапуром было прервано. В страну добирались обходными путями с посадками и пересадками. И вот открылся первый прямой рейс компании &#34;Трансаэро&#34;. Время в полете около 10 часов. Частота полетов - раз в неделю. Стоимость билета туда и обратно около 800 долларов. Одним из первых пассажиров на борту был посол Сингапура в России господин Майкл Тэй Чеоу Энн, который слетал туда и обратно, чтобы удостовериться, что его далекая страна стала к нам чуть ближе. Кстати, компания &#34;Сингапурские авиалинии&#34; выразила сожаление, что именно россияне, а не они первыми проложили эту воздушную дорогу. При том что министр транспорта Сингапура господин Ео Чеоу Тонг признал важность и необходимость этого направления.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Путь открыт, и, согласно прогнозам, русские чиновники, бизнесмены и туристы будут ездить в Сингапур все чаще. Что их там ждет? Если в самом Сингапуре при населении 4 миллиона человек русских проживает всего около 500, и то в основном те, кто временно приехал туда на работу. Если в стране нет ни русского центра, ни мест, где можно приобрести отечественные кассеты и фильмы, а с просмотром российского телевидения даже у сотрудников нашего посольства были проблемы.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Кроме того, что случится, если пустить нашего человека в страну сплошных правил и запретов? Ведь русская ментальность известна - если есть правило, нужно его нарушить.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Запретный плод</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- Если сравнить Сингапур и Германию - где строже? - спросила я у Елены Новичковой, российского менеджера, 11 лет проработавшего в Сингапуре</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- А ты сравни для начала Франкфуртский и Сингапурский аэропорт и все поймешь, - посоветовала она мне.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Первое, что сразило меня по прилете в сингапурский аэропорт Чанги - это бассейн. То есть можно бесплатно, прилетев в Сингапур, поплавать в бассейне, смыть с себя дорожную пыль и идти дальше.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Зона для курения была настоящим подсолнуховым полем на открытом воздухе с маленькой площадкой для курильщиков, отделенной желтой чертой. Но это не самое главное. А что главное - даже трудно сказать. Чистейшее цветное ковровое покрытие, которым устлан весь пол в аэропорту. Обилие магазинов (больше ста) и ресторанов (всего 60), где представлены все кухни мира. И там, и там цены гораздо дешевле, чем в городе. Бесплатные кинотеатры, где, ожидая рейс, можно посмотреть любой фильм (естественно, без сцен насилия). Телевизионные зоны &#34;Скай плейс&#34; с большими экранами. Со служащими аэропорта можно пообщаться у специальных стоек &#34;Видео ассистент&#34;, где над мониторами вмонтированы видеокамеры. Становишься перед ней, нажатием кнопки привлекаешь к себе внимание и задаешь интересующий тебя вопрос. Например, о расписании рейсов.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">В Сингапурском аэропорту вообще нет голосовых объявлений. Я было подумала, что это сделано для того, чтобы не раздражать уши пассажиров, но когда задала вопрос, то мне ответили так: если объявлять все рейсы, то голос диктора будет звучать над терминалами безостановочно 24 часа в сутки - так велико их количество.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Интернет-зоны - это особый разговор. Их на территории аэропорта двести. В каждой - компьютеры и бесплатный доступ в Интернет. А чтобы пассажиры не висли в сети часами, время каждого пользователя ограничено 15 минутами. Есть специальные компьютеры, где можно сделать свою фотографию с видами Сингапура и послать по электронной почте в любую точку планеты. Вся процедура занимает минуту-две, не больше.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">В аэропорту Чанги два терминала. Строится третий, и обходится его запуск в 1 миллиард американских долларов. Сейчас &#34;Чанги&#34; принимает около 36 миллионов пассажиров в год. Если учесть, что с каждого берется сбор 15 сингапурских долларов, то можно представить, насколько богат аэропорт.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- Первый раз я прилетела в Сингапур семь лет назад, - рассказала мне Ольга Плешакова, Генеральный директор авиакомпании &#34;Трансаэро&#34;. - И не могла понять, куда я попала. Мне казалось, в операционную. Прямо в аэропорту нам выдали список из 11 пунктов: что нельзя делать в этой стране. И советовали чуть ли не заучить его наизусть.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Сейчас ситуация меняется. О том, что когда-то выдавался такой список, никто уже не помнит. Да и сами сингапурцы шутят над своими штрафами, повсюду продавая сувениры, высмеивающие строгие порядки властей. Например, футболочки с надписью &#34;Сингапур - город штрафов&#34;, где перечислены самые популярные из них - о жвачке, сексе, алкогольных напитках.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Недавно правительство пошло на уступки и приняло закон (правда, обсуждали его полгода), по которому разрешено жевать определенные виды жвачки, например, &#34;Орбит&#34;, которые продаются в аптеках и исключительно по рецепту.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- Ничего плохого в сингапурских запретах я не вижу, - продолжает Ольга Плешакова. - Еще в детстве мама учила меня, что есть на улице - признак дурного воспитания. Про курение - понятно: зачем отравлять себя и других. Про сцены насилия в фильмах - тоже. А если вы были в Лондоне, то знаете, что жевательная резинка, которую туристы повсеместно бросают под ноги, стала настоящей проблемой для этого города, как и для других европейских мест.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Коммунизм идет с Востока</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Откуда же взялись запреты? Сингапуру - 39 лет. До этого он в течение полутора веков был британской колонией. В 1965 году провозгласил свою независимость. И начались перемены, позволяющие сегодня называть Сингапур &#34;азиатской Венецией&#34; (государство на воде), &#34;вторым Нью-Йорком&#34; (из-за большого количества небоскребов, многонационального населения и похожих кварталов - Маленькая Индия, Чайнатаун, Арабский квартал и прочие), &#34;восточной Швейцарией&#34; (на небольшом острове 134 банка). А также одним из &#34;азиатских тигров&#34;, наряду с Тайванем, Гонконгом и Южной Кореей, потому что уровень жизни в Сингапуре невероятно высок. Например, по доходу на душу населения (21,0 тысячи долларов США) Сингапур занимает третье место в мире.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">С момента образования независимого Сингапура у власти находится Партия народного действия. Еще в 1959 году премьер-министром страны стал Ли Куан Ю. И по сей день он является самым популярным человеком в Сингапуре, хотя оставил высокую позицию в 1990 году и теперь занимает в правительстве пост министра-наставника. Интересно сегодня почитать книгу, написанную Ли Куан Ю, которая называется &#34;Сингапурская история: из &#34;третьего&#34; мира в &#34;первый&#34;. В ней он вспоминает, как практически из ничего создавалось его государство. Именно тогда появился достаточно жесткий кодекс законов, призванный обучить отсталую нацию новым цивилизованным порядкам.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">На меня произвел большое впечатление музей китайской истории &#34;Чайнатаун Хэритэйдж центр&#34;. В нем есть специальные выгородки, где смоделированы бытовые условия - так, мол, жили китайцы раньше. Имеется в виду до 1970 года. Закопченные стены кухонь, маленькие комнатушки с двухъярусными кроватями, больше напоминающими нары, тут же - люльки для детей и старые швейные машинки. Туалета как такового нет, никакой сантехники - дырка в деревянном полу. Скажу честно, быт во многих русских деревнях мало чем отличается. Да и сами китайцы за пределами Сингапура в мелких деревушках, наверняка, до сих пор так живут. В Сингапуре же - по-другому. Правительство переселило их всех, как и представителей других национальностей, в высотные дома, большинство из которых - кондоминиумы. И они абсолютно не похожи на московские многоэтажки.</p><blockquote style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Недавно правительство приняло закон о том, что можно жевать жвачку. Но не каждую. И продается она в аптеках, по рецепту.</blockquote><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Высотки стоят вдоль дорог. Выглядят очень ухоженно и красиво, и никакая мелочь типа цветка на балконе или развешенного белья не портит одинаковости каждого окна. Сингапурцы, конечно же, сушат белье, но делают это на кухне. А квартиры в высотках построены все по одному проекту - окна кухонь выходят во внутренний двор, который не виден с проезжей части. На дорогу же выходят только окна гостиных. Белье здесь сушат на бамбуковых палках. Никаких веревок - они просто гниют в местном влажном климате. На стене в каждой кухне есть специальные крюки. Когда идет дождь, бамбуковые палки перевешиваются извне вовнутрь. Готовят сингапурцы исключительно на газовых плитах. В квартиры привозятся баллоны. Но из-за газа запрещено делать кухню в кондиционированном помещении. Однако сингапурцы практически не готовят дома. Зачем тратить на это время и деньги, если количество ресторанов и кафе превышает все разумные пределы. Цены в них низкие. А за качество пищи хозяева отвечают буквально головой. Достаточно привести в пример воду. При том, что в Сингапуре нет своей пресной воды и покупают ее в Малайзии, очищается она так, что в любом месте можно спокойно пить воду из-под крана и ничего с вами не случится.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Возвращаюсь в кондоминиумам. Это вовсе не крохотные соты в многоэтажках, а полноценное жилье. Аренда квартиры в центре обходится 5-6 тысяч сингапурских долларов в месяц. Есть в каждом доме и детская площадка для детей, и бассейны, и спортзалы, и гаражи. В Москве дома такого типа продаются как элитные.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Частная жизнь сингапурцев тоже ограничена строгими правилами. Скажем, запрещено расхаживать дома без одежды или заниматься сексом, если окна в доме не зашторены. Стоит нарушить этот запрет, как добрые соседи тут же пожалуются, и штраф в пять тысяч сингапурских долларов обеспечен. При том, что в стране легализована проституция и есть специальные места, которые в Европе бы назвали кварталами красных фонарей, в стране строго-настрого запрещен оральный секс и порножурналы.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Узаконены и геи, и трансвеститы. В Сингапуре состоялась первая в мире операция по пересадке пола, и до сих пор считается, что их здесь делают более качественно, чем в любом другом месте. Как соотнести эту информацию с тем фактом, что когда в 90-х годах в стране упала рождаемость, то выяснилось, что приблизительно десять процентов сингапурских пар вследствие пуританского воспитания не имели детей, так как попросту не знали, откуда они берутся, - остается загадкой.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Богач платит дважды</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Когда Ли Куан Ю с соратниками строил новое государство, одним из основных принципов они посчитали то, что налоги следует брать не с доходов, а с расходов. То есть нужно сделать людей богатыми, а потом с их трат брать деньги. Это касается и жилья, и автомобилей.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Авто здесь действительно роскошь. Самая популярная машина в стране - &#34;Тойота&#34;. Все такси именно этой марки. Самая престижная - &#34;Мерседес&#34;. Машины стоят 80-100 тысяч долларов. При их ввозе в страну берется пошлина</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">170 процентов от рыночной стоимости автомобиля. Ввозят только новые машины. Те же, которым три или четыре года, вывозят из страны. Сертификат на права вождения покупается на 10 лет и стоит на рынке 25-30 тысяч сингапурских долларов.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">При такой ситуации машин на дорогах, естественно, мало. Большинство сингапурцев передвигаются на метро - здесь один из самых разветвленных метрополитенов в мире, 68 станций и длина около 200 километров. Цена за поездку варьируется от 80 центов до 1 доллара 80 центов в зависимости от расстояния. Самый дешевый билет на автобус стоит 60 центов, но при его покупке нужно заплатить еще один доллар в качестве залога. Местные жители при входе в транспорт рассчитываются карточками, откуда специальным устройством автоматически считывается нужная сумма. Это - нормально, если учесть, что билеты на самолет &#34;Сингапурских авиалиний&#34; - электронные. То есть пассажиру не выдается никакой бумажки, которую он мог бы порвать и потерять.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Рассказывая о жизни в Сингапуре, нельзя не упомянуть особый предмет гордости политического устройства этой страны - Центральный резервный фонд. Благодаря ему надежно обеспечена жизнь каждого сингапурца вплоть до самой глубокой старости. Средний уровень сингапурской зарплаты составляет эквивалент 2-3 тысяч долларов США. Двадцать процентов зарплаты каждый житель страны ежемесячно отчисляет в этот фонд. Работодатель также ежемесячно переводит на счет сотрудника эту же сумму. Накопления не облагаются никаким налогом. Более того, на них начисляются проценты. По достижении 55-летнего возраста каждый может получить всю эту сумму на руки. И становится понятным, за что они так горячо благодарят Ли Куан Ю, во времена правления которого была введена эта система.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">В августе этого года премьером страны стал Ли Сянь Лун - сын Ли Куана Ю. Ли Сянь Лун умеет говорить по-русски, в детстве он изучал его шесть лет. Отец настоял, чтобы сына научили языку прогрессивной страны СССР, откуда, кстати, он сам и позаимствовал в свое время идеи реформы жилищно-коммунального хозяйства.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Деньги льются рекой</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Внешне Сингапур поражает не только стерильным видом и количеством небоскребов. Он удивляет продуманностью архитектуры, тем, что все построено согласно законам фэн-шуй - восточного искусства расположения вещей в пространстве. Это раньше здесь мастера фэн-шуй сидели на улицах в китайском квартале. Теперь они располагаются в дорогих офисах и на прием к ним записываются за полтора месяца.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Углы у всех небоскребов закруглены. Острые, согласно фэн-шуй, символ несчастья. В самом центре Сингапура находится Фонтан богатства. По фэн-шуй, падающая сверху вода - это символ достатка и денег. У фонтана 37 струй, и его строительство обошлось в 13 миллионов сингапурских долларов. Нужно трижды объехать фонтан по часовой стрелке, и ваши материальные дела пойдут на лад. Я объехала, и, надо же, по возвращении из Сингапура дали зарплату с премией. Значит - правда.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Но есть еще и история сингапурских денег. Монетка - сингапурский доллар - желтого цвета и весьма необычной формы. Восьмиугольник внутри круга. Появились такие не случайно. Когда начали рыть тоннели для строительства метро, то мастер по фэн-шуй сказал, что через них может уйти экономическая удача страны. И тогда, чтобы уравновесить энергию, в Сингапуре отчеканили монеты, использовав для них древнекитайский знак Багуа - круг словно сглаживает углы восьмиугольника. По преданию знак приносит успех в делах.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Под знаком льва</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Сингапурцы умеют отдыхать. Пример тому - замечательное место: четырехкилометровый остров под названием Сентоза - гигантский парк развлечений. Чтобы составить общее впечатление, Сентозу можно объехать по монорельсовой дороге. А можно просто посмотреть сверху. Для этого есть вертящаяся чаша &#34;Скай тауэр&#34; - смесь обзорной площадки с аттракционом, которая поднимается на высоту 130 метров над уровнем моря. Есть еще невероятно высокая канатная дорога, поездка на которой - испытание не для слабонервных. Но самое интересное - забраться в голову гигантской статуи льва, которая стоит в центре Сентозы. Для туристов существует и такая возможность.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Огромный искусственный лев - участник любого праздника, которые на Сентозе происходят чуть ли не каждый день. Самое грандиозное представление - это шоу фонтанов. Специально для его проведения куплена специальная лазерная пушка стоимостью около четырех миллионов долларов. На водяных струях появляются герои мультфильмов, моделируется изображение подводного мира... А то вдруг возникает красивая девушка, которая настолько реальна, что в нее сложно не влюбиться. В конце, когда глаза льва начинают светиться двумя зелеными лазерными лучами, пересекающими весь остров, зрители буквально падают со скамеек. При этом лазерное шоу абсолютно бесплатное.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">В понимании сингапурцев больше всего человек отдыхает при общении с животным миром. Тут есть парк птиц, где несколько раз в день устраивается представление, и нужно видеть, с какими восторженными лицами наблюдают за полетами и трюками пернатых местные жители. Есть зоопарк, в котором самая главная приманка для туристов - завтрак с орангутангом.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Гости зоопарка ездят на ночное сафари. Бесшумный паровозик на колесах разъезжает среди зверей, которые явно чувствуют себя как дома, несмотря на искусственное освещение и реально устроенные саванну, джунгли и прерии.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">&#34;Подводный мир&#34; - так называется целый комплекс на Сентозе, представляющий собой гигантский аквариум. Каких только видов морских обитателей здесь нет. Но самое завораживающее - это дельфинья лагуна. Дельфины в ней розового цвета. Это уникальный вид, который сохранился именно здесь. Когда на голубых волнах в дельфиньей лагуне появляется взрослый розовый дельфин Джамбо - это самое необычное из того, что мне когда-либо приходилось видеть. Следом выплывают два детеныша - Инь и Ян. Дельфины этой породы рождаются серыми и розовеют по мере взросления. Так вот, спинки у детенышей серые. Но, когда они поворачиваются перед публикой, демонстрируя розовые животики, все замирают от умиления. В какой-то момент мне показалось, что основное, зачем я приехала в Сингапур, - это посмотреть на розовых дельфинов и потом всю жизнь вспоминать, что существует такое чудо.</p><h2 class="text-header" style="color: rgb(85, 85, 85);text-align: center;background-color: rgb(255, 255, 255);">Маленький, но большой</h2><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">- Сингапур - остров маленький. Но на самом деле он очень большой, - говорит посол России в Сингапуре Сергей Киселев, имея в виду значительность и мощь одного из &#34;азиатских тигров&#34;.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">Мы забрасываем посла вопросами: почему на улицах не видно полицейских, если все так строго, как проходит процедура наказаний, и успели ли здешние русские зарекомендовать себя с плохой стороны. Сергей Борисович отвечает, что все полицейские работают на улицах в штатском и им помогают видеокамеры. Что касается наказаний, они не публичны, и факты об этом редко попадают в печать. Одному из русскоязычных гидов как-то попалась информация, что за год были повешены 12 человек. Когда совершаются наказания, то за процедурой следят специальные люди, включая врача. Говорят, что 12 ударов палкой могут быть смертельными.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">А что касается русских, то и сюда уже добрались наши &#34;наташи&#34;. Правда, случаев было немного, и девушки оказывались не из России, а из других стран СНГ, в частности, из Украины и Молдавии, но выручало их все равно наше посольство. В остальном же мы можем гордиться: в Сингапуре работают наши программисты, а также бизнесмены и ученые. Отзывы об уровне специалистов очень высокие.</p><p class="text" style="color: rgb(18, 35, 51);background-color: rgb(255, 255, 255);">-Сингапурцы - большие прагматики и все делают исходя из своих собственных интересов, - завершает Сергей Борисович, - но у них своеобразная демократия, и они во всем отстаивают главное право человека - право на достойную жизнь.</p><!--EndFragment--><p><br/></p><p><br/></p>',
					tags: [
						{
							alias: '',
							name: ''
						}
					]
				},
				{
					id: 2,
					title: 'В фильме "Призрак" школьник управляет самолетом под руководством... привидения',
					date: '26.03.2015',
					text:
						'<p class="text">Фильм "Призрак", стартовавший в прокате 26 марта, острые на язык журналисты уже успели окрестить "Малыш и Карлсон".</p>' + 
						'<p class="text">И в качестве слогана к этой картине действительно вполне бы могли подойти слова "Он улетел, но обещал вернуться". На самом деле в фильме, и это уже видно по трейлеру, есть все те же составляющие, что и в сказке Астрид Линдгрен. Есть "Малыш" - школьник Ваня Кузнецов, которого играет Семен Трескунов - одинокое, никем не понимаемое существо, у которого "никого нет, даже собаки". Его мама (актриса Ксения Лаврова-Глинка) - живая иллюстрация к известному анекдоту: легче договориться с террористом, чем с ней. По-другому, можно сказать, что она в чем-то похожа на Фрекен Бок. Бальные танцы - совсем не мужское занятие Вани, воплощение мечты его мамы и предмет издевок одноклассников. Плюс затаенная любовь к однокласснице Полине, которая проявляется в том, что "Малыш" делает за нее домашние задания. Полине же нравятся парни, из серии "Я рожден волновать, а не волноваться". Именно так говорит симпатичный раздолбай из их класса, которому она адресует свои улыбки.</p>' + 
						'<p class="text">В образе "Карлсона", которого никто, кроме "Малыша" не видит, он же - привидение-призрак - другой "раздолбай" - Юрий Гордеев. Тут и пропеллер есть, но не у Юрия, а у самолета ЮГ-1, потому что главный герой по профессии - авиаконструктор. Вернее, был им до того, как по собственному "раздолбайству", пьяным попал в автоаварию и стал призраком. Роль призрака авиаконструктора Юрия Гордеева исполняет Федор Бондарчук. И, в отличие от симпатичного упитанного мужчины в расцвете лет, у его героя нет ботинок - он ходит и летает босиком.</p>' + 
						'<p class="text">Наблюдать за взаимоотношениями этой странной пары очень смешно. Настолько, что, выйдя из кинозала, зритель понимает - он посмотрел очень симпатичную современную отечественную комедию - пусть и не совсем с новым сюжетом. Впрочем, авторы и сами смеются над ходом своего фильма. Они "цитируют" в картине голливудского актера Патрика Суэйзи - но не как героя популярного фильма "Привидение", которого кроме сумасшедшей прорицательницы никто не видел, но и как потрясающего танцора из картины "Грязные танцы". Кадр именно из этого фильма стоит в рамочке в комнате у Вани Кузнецова и понимаешь, что его герой танцует ча-ча-ча и сальсу отнюдь не случайно.</p>' + 
						'<p class="text">Некоторое время назад в нашей стране появились разговоры, а потом и общая установка на то, что хорошо бы возрождать семейное и детское кино. Александр Войтинский - режиссер фильма "Призрак", он же один из продюсеров, наряду с Сергеем Сельяновым и Михаилом Врубелем, привлек к выполнению этой задачи такого "тяжеловеса" в современном отечественном кинематографе, как Федор Бондарчук. И вдруг оказалось, что легкая роль в семейной комедии - именно то, что нужно. Работа Федора Бондарчука в этой картине - несомненная удача. Хотя сам Федор Сергеевич в ответ на вопрос обозревателя "РГ" о том, не собирается ли он заняться развитием детского и семейного кино, ответил так:</p>' + 
						'<p class="text">- Заняться бы хотел, но жанр этот очень сложный. Потому что на такое кино, которое было в Советском Союзе, сейчас никто не пойдет. Подобные фильмы снимаются, но они делаются ни для кого. Соблюсти баланс тяжело, прежде всего потому, что тематически нужно хорошо сделать для семейной аудитории, но при этом и визуально снять интересно. То есть, чтобы родителям было не менее любопытно, чем детям, и наоборот.</p>' + 
						'<p class="text">- Но у вас же получилось.</p>' + 
						'<p class="text">- Да, наше кино попадает в семейную аудиторию, и это дорогого стоит, потому что за этим стоит большой зритель. Путь к этому тяжелый. Причина в том, что инструментарий изменился. Потому что юная аудитория смотрит весь тот репертуар, который идет в кинотеатрах, а с этим можно и перемудрить. Или наоборот - что-то недоделать. Поэтому разговор в нашем фильме - очень правдивый. В нем есть территория школы и взаимоотношения в ней. Я наблюдал за молодыми людьми на съемочной площадке - они разговаривали на каком-то "инопланетном" языке. Если ты его воспринимаешь, осознаешь, и можешь передать в кино, то это, конечно, попадание. Но, как я уже сказал: это - сложный жанр.</p>' + 
						'<p class="text">Авторы фильма признались, что с трудом, в долгих спорах, решали, каким именно будет их призрак. Чихает он или не чихает, садится или не садится, ест или не ест, спит или не спит, оставляет следы на мягком диване или нет. "Параметры призрака - отдельная песня, - признается Бондарчук. Мы решали так: наверное, он этого не может сделать, но нам это очень важно для кадра. Ну пусть тогда у него получится".</p>' + 
						'<p class="text">В итоге, призрак в исполнении Бондарчука не только эффектно проходит сквозь стены зданий и предметы и не мокнет по дождем, но и оказывается неплохим психологом. Он тут же выискивает слабые места своего юного друга и начинает им манипулировать. Каковы слабости Вани? Их две - мама и Полина. Подсказки призрака на тему того, как управляться с женским полом - одни из самых смешных моментов в кино. Герои так манипулируют женщинами, что за последних даже становится обидно - неужели настолько предсказуемы?</p>' + 
						'<p class="text">- Советы, которые мне давал в фильме Юра, на мой взгляд чистые клише. Все это неправда! Влияние интернета! - говорит Семен Трескунов.</p>' + 
						'<p class="text">А Бондарчук в ответ пожал плечами:</p>' + 
						'<p class="text">- Детский сад! Все будет ровно так! А в целом Юрий, конечно, хам и грубый человек, но играть его - одно удовольствие. И в первую очередь из-за партнеров.</p>' + 
						'<p class="text">Что касается партнеров, у Семена Трескунова явно есть все задатки, чтобы стать Юрием Никулиным нашего времени. 15-летний актер сыграл уже более чем в 20 фильмах: "Частное пионерское", "Мамы", "Шагал-Малевич", "МосГаз", "Стальная бабочка", "Обратная сторона Луны" и других. Очень хороша работа в фильме Яна Цапника, без которого теперь не обходится ни одна отечественная комедия, будь-то "Елки Лохматые" или "Горько!". В "Призраке" Цапник играет Геннадия - друга и компаньона Юрия. В чем успех роли, Цапник поясняет так:</p>' + 
						'<p class="text">- Открою маленький секрет. Я для себя решил, что на самом деле играю мать Юрия - такого друга, который, начиная со студенчества, терпит все его выходки. Федор - светлая голоса, а я - руки, ноги и... пятая точка.</p>' + 
						'<p class="text">На площадке происходили забавные случаи. Я повредил ногу, и по сценарию мой герой оказался в гипсе. И вот, во время перерыва, я встречаю мужчину точно в таком же гипсе, но на другой ноге и другого цвета. Я ему говорю, мол, вы что - прикалываетесь? А он мне - это вы прикалываетесь! Оказалось, это отец Семена, который сломал ногу катаясь на мотоцикле.</p>' + 
						'<p class="text">Главного злодея в картине убедительно играет Игорь Угольников. Но еще один полноправный герой фильма - самолет ЮГ-1. Сцена с его посадкой на автосалоне в Жуковском - самый напряженный момент в картине. Управляет-то "железной птицей" несовершеннолетний школьник, хотя и под руководством опытного призрака. У режиссера Александра Войтинского есть за плечами опыт работы во франшизе "Елки". Посадка самолета на запасной аэродром в "Елках" очень волнует зрителей, но в "Призраке" все сделано на несколько голов выше. Да и сам самолет таков, что, если в нашей стране такие будут конструировать не только в кино, вскоре в области самолетостроения мы оставим позади весь мир. И это вовсе не призрачное будущее.</p>'
						,
					tags: [
						{
							alias: '',
							name: ''
						}
					]
				}
			];

		self.material = {};
		console.log(materials);*/
		
		/*for(i in materials) {
			if(materials[i].id == $routeParams.id) {
				console.log(materials[i]);
				self.material = materials[i];
			}
		}*/

	}

})();
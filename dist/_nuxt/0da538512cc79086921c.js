(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{391:function(n,e,t){var content=t(427);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(31).default)("386678de",content,!0,{sourceMap:!1})},408:function(n){n.exports=JSON.parse('[{"id":"1","name":"varLet","title":"Var, let, const","explain":"Объявление через let и const имеют ограниченную блоком область видимости. Область видимости var -- в пределах функции. let не позволит объявить второй раз туже перменную. const не позволит изменить переменную. Но объявленный через const объект или массив можно извенить","example":["function myFunction() {\\n  let myVar = \\"Nick\\";\\n  if (true) {\\n    let myVar = \\"John\\";\\n    console.log(myVar); // \\"John\\"\\n    // myVar имеет блочную область видимости, поэтому мы задали новое значение\\n    // оно не доступно вне области и не зависит от предыдущего значения myVar\\n  }\\n  console.log(myVar); // команды блока if НЕ влияют на \\"Nick\\"\\n}\\n//console.log(myVar); // выведет ReferenceError, myVar не доступна вне функции","const person = {\\n  name: \'Nick\'\\n};\\nperson.name = \'John\' // будет работать, поскольку значение изменили, а не присвоили заново\\nconsole.log(person.name) // \\"John\\"\\n\\nperson.name = \'Johnina\'\\n\\nperson.name = \'Johninininina\'\\nvar result = person.name ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"переменную объявленную через <strong>var</strong>, то она изменяется повсеместно в пределах функции, елси переменная объявлена через <strong>let</strong>, то она изменится только в пределах \\"блока\\"","code":"const person = {\\n  name: \'Nick\'\\n};\\nperson.name = \'John\' // будет работать, поскольку значение изменили, а не присвоили заново\\nconsole.log(person.name) // \\"John\\"\\n\\nperson.name = \'Johnina\'\\n\\nperson.name = \'Johninininina\'\\nvar result = person.name ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"}},{"id":"2","name":"arrwfnct","title":"Стрелочные функции","explain":"Краткость, объект, отсутствие аргументов, один аргумент, this.","example":"","sprout":{"concept":"переменную объявленную через <strong>var</strong>, то она изменяется повсеместно в пределах функции, елси переменная объявлена через <strong>let</strong>, то она изменится только в пределах \\"блока\\"","code":"var myHonda = { color: \'красный\', wheels: 4, engine: { cylinders: 4, size: 2.2 } };\\nvar myCar = [myHonda, 2, \'в хорошем состоянии\', \'приобретена в 1997\'];\\nvar newCar = myCar.slice(0, 2);\\n\\n// Изменяем цвет myHonda.\\nmyHonda.color = \'багровый\';"}},{"id":"3","name":"fnctdefparam","title":"Параметры функции по умолчанию","explain":"","example":"","sprout":{"concept":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque necessitatibus aut temporibus voluptas iste numquam mollitia sint harum possimus!","code":"function myFunc(x = 10) {\\n  return x;\\n}\\nconsole.log(myFunc()) // 10 — не задано значение, поэтому значение x по умолчанию присвоено x в функции myFunc\\nconsole.log(myFunc(5)) // 5 — значение задано, поэтому x=5 в функции myFunc\\n\\nconsole.log(myFunc(undefined)) // 10 — задано значение undefined, поэтому по умолчанию равно x\\nconsole.log(myFunc(null)); // null — величина задана, продолжение ниже\\nvar result = myFunc();\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"}},{"id":"4","name":"dstrctrobjarrs","title":"Деструктурирование объектов и массивов","explain":"","example":["const person = {\\n  firstName: \\"Nick\\",\\n  lastName: \\"Anderson\\",\\n  age: 35,\\n  sex: \\"M\\"\\n};\\n\\nconst { firstName: first, age, city = \\"Paris\\" } = person; // так выглядит деструктурирование одной строкой\\n\\nvar result = first;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"5","name":"arrmthdsmapfltrrdc","title":"Методы массивов map/filter/reduce","explain":"Цель метода — сократить переменные до одной после итерации.","example":["const numbers = [0, 1, 2, 3, 4, 5, 6];\\nconst sum = numbers.reduce(\\n  function(acc, n) {\\n    return acc + n;\\n  }, 0\\n);\\nvar result =sum;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);","// friends - список из объектов(друзей) \\n// где поле \\"books\\" - список любимых книг друга \\nvar friends = [ \\n{ name: \\"Anna\\", books: [\\"Bible\\", \\"Harry Potter\\"], age: 21 }, \\n{ name: \\"Bob\\", books: [\\"War and peace\\", \\"Romeo and Juliet\\"], age: 26 },\\n{ name: \\"Alice\\", books: [\\"The Lord of the Rings\\", \\"The Shining\\"], age: 18 }\\n]\\n\\n// allbooks - список, который будет содержать все книги друзей + \\n// дополнительный список указанный в initialValue\\nvar allbooks = friends.reduce(function(prev, curr) {\\n  return [...prev, ...curr.books];\\n}, [\\"Alphabet\\"]);\\n\\nvar result = allbooks;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"Через reduce() можно разворачивать массив массивов. Но здесь я просто соеденил все имена крупиц. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quaerat provident, totam. Dolorum magnam, provident rerum veniam, voluptate similique nam enim iusto iste nostrum! Quibusdam, ut, voluptatibus. Modi, nostrum, doloribus.","code":"var allName = this.grains.reduce(function(prev, curr) {\\n  return [...prev,curr.name];\\n}, [\\"Alphabet\\"]); \\n\\nvar result = allName; \\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"}},{"id":"6","name":"sprdoprtr","title":"Оператор spread(…)","explain":"Расширение свойств объекта. Оставшиеся параметры функции. Объектные литералы.","example":["const arr1 = [\\"a\\", \\"b\\", \\"c\\"];\\nconst arr2 = [...arr1, \\"d\\", \\"e\\", \\"f\\"]; var result = arr2 ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);","const myObj = { x: 1, y: 2, a: 3, b: 4 };\\nconst { x, y, ...z } = myObj; // деструктурируем объект\\nconsole.log(x); // 1\\nconsole.log(y); // 2\\nconsole.log(z); // { a: 3, b: 4 }\\n\\n// z — оставшаяся часть деструктурированного объекта myObj после вычитания свойств x и y\\n\\nconst n = { x, y, ...z }; \\nvar result = n;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"7","name":"objprptshrthnd","title":"Сокращение свойств объекта","explain":"Переменная для свойств объекта","example":["const x = 10;\\nconst y = 20;\\n\\nconst myObj = {\\n  x,\\n  y\\n};\\nvar result = myObj.y;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"8","name":"prmssobj","title":"Объекты «промисы»","explain":"","example":["new Promise(function(resolve, reject) {\\n  console.log(\'A\');\\n  resolve();\\n}).then(function() {\\n  console.log(\'B\');\\n});\\nconsole.log(\'C\'); //Ответ: A, C, затем B.\\n var result = \'///\' ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"9","name":"tmpltltrls","title":"Шаблонные литералы","explain":"это синтаксис, допускающий использование выражений JavaScript внутри строк.","example":["const name = \\"Nick\\";\\n// Hello Nick, the following expression is equal to four: 4\\n\\nvar result =  `Hello ${ this.bla }, the following expression is equal to four : ${2+2}`;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"10","name":"tggdtmpltltrls","title":"Теговые шаблоны","explain":"Являются расширенной формой шаблонных литералов и позволяют разбирать их с помощью функции. При вызове функции первый аргумент содержит массив строковых значений между интерполированными значениями. Чтобы уместить их все, используйте оператор spread (...).","example":["function highlight(strings, ...values) {\\n  const interpolation = strings.reduce((prev, current) => {\\n    return prev + current + (values.length ? \\"\\" + values.shift() + \\"\\" : \\"\\");\\n  }, \\"\\");\\n\\n  return interpolation;\\n}\\n\\nconst condiment = \\"jam\\";\\nconst bla = \\"------uuuuuiiiii\\";\\nconst meal = \\"toast\\";\\n\\nvar result = highlight`I like ${condiment} on ${meal}.${bla}`;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);","function comma(strings, ...values) {\\n  return strings.reduce((prev, next) => {\\n    let value = values.shift() || [];\\n    value = value.join(\\", \\");\\n    return prev + next + value;\\n  }, \\"\\");\\n}\\n\\nconst snacks = [\'apples\', \'bananas\', \'cherries\'];\\nvar result = comma`I like ${snacks} to snack on.`;;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"Я не совсем понимаю, почему в функции 2 аргемента: strings и ...values. Мы как бы говорим: array[], значения array[...] ","code":""}},{"id":"11","name":"imprtexprt","title":"Инструкции импорта и экспорта","explain":"Именованные импорт/экспорт. Импорт/экспорт по умолчанию.","example":["// sum.js\\nexport default function sum(x, y) {\\n  return x + y;\\n}\\n// -------------\\n\\n// myFile.js\\nimport sum from \'./sum.js\';\\nconst result = sum(1, 2);\\nconsole.log(result) // 3\\n\\n // Don\'t press \\"Run code\\" - here no one *.js files!"],"sprout":{"concept":"","code":""}},{"id":"12","name":"cls","title":"Классы","explain":"Попробуйте посмотреть иначе: прочитайте о прототипах и их поведении в JavaScript.","example":["class Person {\\n  constructor(name, age) {\\n    this.name = name;\\n    this.age = age;\\n  }\\n\\n  stringSentence() {\\n    return `Привет, я ${this.name} и мне ${this.age}`;\\n  }\\n}\\n\\nconst myPerson = new Person(\\"Manu\\", 23);\\nconsole.log(myPerson.age) // 23\\n\\nvar result = myPerson.stringSentence();\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"13","name":"extendsuperkwrds","title":"Ключевые слова extends и super","explain":"Попробуйте посмотреть иначе: прочитайте о прототипах и их поведении в JavaScript.","example":["class Polygon {\\n  constructor(height, width) {\\n    this.name = \'Polygon\';\\n    this.height = height;\\n    this.width = width;\\n  }\\n\\n  getHelloPhrase() {\\n    return `Привет, я — ${this.name}`;\\n  }\\n}\\n\\nclass Square extends Polygon {\\n  constructor(length) {\\n    // здесь вызван конструктор родительского класса со значением lengths\\n    // использованным для значений width и height класса Polygon \\n    super(length, length);\\n    // в производных классах super() необходимо вызывать перед this\\n    // иначе будет выведено сообщение об ошибке\\n    this.name = \'Square\';\\n    this.length = length;\\n  }\\n\\n  getCustomHelloPhrase() {\\n    const polygonPhrase = super.getHelloPhrase(); // доступ к родительскому методу с синтаксисом super.X()\\n    return `${polygonPhrase} with a length of ${this.length}`;\\n  }\\n\\n  get area() {\\n    return this.height * this.width;\\n  }\\n}\\n\\nconst mySquare = new Square(10);\\nconsole.log(mySquare.area) // 100\\nconsole.log(mySquare.getHelloPhrase()) // «Привет, я Square»: Square — наследник класса Polygon с доступом к его методам\\nconsole.log(mySquare.getCustomHelloPhrase()) // Привет, я Square с длиной 10\\n\\nvar result = mySquare.getCustomHelloPhrase();\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"14","name":"asyncawait","title":"Функция async и оператор await","explain":"Для написания асинхронного кода в JavaScript появился синтаксис async/await. Цель нововведения — упростить использование промисов и расширить рамки действий с ними. Для лучшего понимания этого синтаксиса, рекомендуем сначала ознакомиться с промисами. await может использоваться только внутри асинхронной функции.","example":["async function getGithubUser(username) { // ключевое слово async позволяет использовать await в функции, которая возвращает промис\\n  const response = await fetch(`https://api.github.com/users/${username}`); // выполнение приостановлено до момента получения ответа от переданного промиса\\n  return response.json();\\n}\\n\\ngetGithubUser(\'mbeaudru\')\\n  .then(user => console.log(user)) // ответ пользователя, проходящего авторизацию: синтаксис await невозможно использовать, поскольку код не является асинхронной функцией\\n  .catch(err => console.log(err)); // в случае ошибки асинхронной функции, мы увидим её\\n\\nvar result = getGithubUser(\'mbeaudru\') ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);","async function getUser() { // возвращённый промис будет отклонён!\\n  throw \\"User not found !\\";\\n}\\n\\nasync function getAvatarByUsername(userId) {\\n  const user = await getUser(userId);\\n  return user.avatar;\\n}\\n\\nasync function getUserAvatar(username) {\\n  var avatar = await getAvatarByUsername(username);\\n  return { username, avatar };\\n}\\n\\ngetUserAvatar(\'mbeaudru\')\\n  .then(res => console.log(res))\\n  .catch(err => console.log(err)); // \\"User not found !\\"\\n\\nvar result =111 ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"15","name":"amrphcatmrph","title":"Анаморфизмы и катаморфизмы","explain":"Анаморфизмы: функции, с помощью которых объекты разворачиваются в более сложные структуры, содержащие объекты того же типа. Катаморфизмы: сворачивают объекты с более сложной структурой в простые. ","example":["function downToOne(n) {\\n  const list = [];\\n\\n  for (let i = n; i > 0; --i) {\\n    list.push(i);\\n  }\\n\\n  return list;\\n}\\n\\n\\nvar result = downToOne(5) ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);","function downToOne(n) {\\n  const list = [];\\n\\n  for (let i = n; i > 0; --i) {\\n    list.push(i);\\n  }\\n\\n  return list;\\n}\\n\\nfunction product(list) {\\n  let product = 1;\\n\\n  for (const n of list) {\\n    product = product * n;\\n  }\\n\\n  return product;\\n}\\n\\nvar result = product(downToOne(5)) ;\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"16","name":"gnrtrs","title":"Генераторы","explain":" Эти функции могут приостанавливать выполнение, вернуть промежуточный результат, а затем продолжить выполнение в любой момент. Генераторы возвращают итерируемые объекты. Функция next() выполняется до ключевого слова yield, которое возвращает значение во внешний код. Либо до функции yield *, которая передаёт её другой функции-генератору.","example":["// пример yield *\\nfunction * genB(i) {\\n  yield i + 1;\\n  yield i + 2;\\n  yield i + 3;\\n}\\n\\nfunction * genA(i) {\\n  yield i;\\n  yield* genB(i);\\n  yield i + 10;\\n}\\n\\nvar gen = genA(10);\\n\\nconsole.log(gen.next().value); \\nconsole.log(gen.next().value); \\nconsole.log(gen.next().value); \\nconsole.log(gen.next().value); \\nconsole.log(gen.next().value); \\nvar result = \'in console\';\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}},{"id":"17","name":"sttcmthds","title":"Статические методы","explain":"Статичные методы функции, принадлежащие объекту класса, но не доступные другим объектам того же класса. Вызов статического метода из нестатического метода производится двумя способами: с использованием названия класса, с помощью конструктора.","example":["class Repo {\\n  static getName() {\\n    return \\"Repo name is modern-js-cheatsheet\\"\\n  }\\n\\n  useName(){\\n    return Repo.getName() + \' and it contains some really important stuff\'\\n  }\\n}\\n\\n// для использования статических методов нам нужно создать класс\\nlet r = new Repo()\\n\\nvar result = r.useName() ; // название Repo — modern-js-cheatsheet и в нём содержатся важные данные\\n\\n\\n document.getElementById(this.name).textContent = JSON.stringify(result);"],"sprout":{"concept":"","code":""}}]')},426:function(n,e,t){"use strict";var r=t(391);t.n(r).a},427:function(n,e,t){(n.exports=t(30)(!1)).push([n.i,'@-webkit-keyframes blurshow-data-v-99698588{0%{-webkit-filter:blur(3px);filter:blur(3px);transform:skew(-15deg)}30%{-webkit-filter:blur(2px);filter:blur(2px);transform:skew(-10deg)}50%{-webkit-filter:blur(0);filter:blur(0);transform:skew(15deg)}}@keyframes blurshow-data-v-99698588{0%{-webkit-filter:blur(3px);filter:blur(3px);transform:skew(-15deg)}30%{-webkit-filter:blur(2px);filter:blur(2px);transform:skew(-10deg)}50%{-webkit-filter:blur(0);filter:blur(0);transform:skew(15deg)}}.titlePage[data-v-99698588]{text-align:center;padding-top:30px;margin-bottom:10px;text-transform:uppercase;font-style:italic;letter-spacing:2px;line-height:2}pre[data-v-99698588]{white-space:pre-wrap;word-wrap:break-word;margin-bottom:0}.hvr-underline-from-left[data-v-99698588]{display:inline-block;vertical-align:middle;transform:translateZ(0);box-shadow:0 0 1px transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;overflow:hidden}.hvr-underline-from-left[data-v-99698588]:before{content:"";position:absolute;z-index:-1;left:0;right:100%;bottom:0;background:#172b4d;height:4px;transition-property:right;transition-duration:.3s;transition-timing-function:ease-out}.hvr-underline-from-left[data-v-99698588]:active:before,.hvr-underline-from-left[data-v-99698588]:focus:before,.hvr-underline-from-left[data-v-99698588]:hover:before{right:0}.list-counter-circle[data-v-99698588]{list-style:none;counter-reset:list;margin:20px auto;padding:25px;overflow:hidden}.list-counter-circle>a[data-v-99698588]{position:relative;display:block;min-height:2rem;line-height:1.6rem;margin-left:1.75rem;margin-bottom:1.25rem;padding-left:1rem;padding-right:.5rem;color:var(--link-color-text);background:var(--link-color-bg);border-radius:.25rem;will-change:transform;transition:.4s ease-in-out;-webkit-font-smoothing:subpixel-antialiased}.list-counter-circle>a[data-v-99698588]:active,.list-counter-circle>a[data-v-99698588]:hover{-webkit-animation:blurshow-data-v-99698588 .3s ease;animation:blurshow-data-v-99698588 .3s ease;-webkit-filter:drop-shadow(2px 2px 2px #2f2f2f) saturate(-50%);filter:drop-shadow(2px 2px 2px #2F2F2F) saturate(-50%);transform:scale(1.065)}.list-counter-circle>a li[data-v-99698588]{color:var(--link-color-text);font-size:1.2rem}.list-counter-circle>a[data-v-99698588]:last-child{margin-bottom:0}.list-counter-circle>a[data-v-99698588]:before{content:counter(list);counter-increment:list;position:absolute;left:-2rem;top:-.25rem;bottom:-.25rem;width:2.5rem;line-height:2rem;border-radius:1.25rem;border:.25rem solid var(--link-color-text);text-align:center;color:var(--link-color-text);background:var(--link-color-bg)}.slideInDown-enter-active[data-v-99698588]{-webkit-animation:slideInDown-data-v-99698588 1.5s;animation:slideInDown-data-v-99698588 1.5s}.slideInDown-leave-active[data-v-99698588]{animation:slideInDown-data-v-99698588 1.5s reverse}@-webkit-keyframes slideInDown-data-v-99698588{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes slideInDown-data-v-99698588{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}@-webkit-keyframes slideOutDown-data-v-99698588{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}@keyframes slideOutDown-data-v-99698588{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}',""])},469:function(n,e,t){"use strict";t.r(e);var r=t(408),o={name:"modern-js",components:{introduction:function(){return t.e(35).then(t.bind(null,479))},convertToJson:function(){return t.e(1).then(t.bind(null,477))},grain:function(){return t.e(26).then(t.bind(null,488))}},data:function(){return{grains:r,friends:this.grains,intro:{title:"Modern JS",blockquote:"Знание без практики порождает лишь страсти",blockquoteAuthor:"Лао-Цзы",blockquoteSource:'"Дао Дэ Цзин. Книга о Пути и Силе"',subtitle:"Что здесь реализовывается",text:["Здесь будет минимум 2 компонента: на шапку страницы и на учебные пункты.",'Учебные пункты -- их названия буду брать с первоисточника. Как раз потренируюсь называть их. Еще к ним сделаю навигацию. По клику будет переход и плавное появление частей учебного пункта, как на сайте барыжных последователй Кастаньеды...(ну чего они достигли, если им приходится зарабатывать на его имени?). В общем, моя задача реализовать "спокойствие" в этой анимации.',"К данному моменту уже была внедрена подсветка синтаксиса JS, где вручную переписал стили по своей теме в Sublime. К сожалению, highlight.js имеет недостаточное количество позиций для изменения цвета. В частности имена переменных, методы и скобки имеют один цвет. Возможно, стоит попробовать взять за основу другую тему или открыть и почитать js самого highlight. Но увы, на это нету времени, я должен бежать дальше "]}}},methods:{}},l=(t(426),t(2)),component=Object(l.a)(o,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"out"},[t("div",{staticClass:"grain_wrapper"},n._l(n.grains,function(n){return t("grain",{key:n.id,attrs:{name:n.name,title:n.title,explain:n.explain,example:n.example,concept:n.sprout.concept,code:n.sprout.code}})}),1),n._v(" "),t("base-button",{attrs:{type:"success"},on:{click:function(e){return n.pageLoader(n.onPageLoadingFinished)}}},[n._v("Boom!")]),n._v(" "),t("convertToJson")],1)},[],!1,null,"99698588",null);e.default=component.exports}}]);
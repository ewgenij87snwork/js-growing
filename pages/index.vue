<template>
  <section class="container">
    <div>
      <br>
      <br>
      <a class="text-default display-3 text-center hvr-underline-from-left" href="/cheatsheet/arrayz"><i class="fa fa-angle-double-right " data-fa-transform="shrink-6" aria-hidden="true"></i> Array Methods</a>
      <p class="lead">В разделе Array законспектированы основные методы массивов. Методы предоставлены в виде: кнопки "название метода", поля вывода результата функии-примера метода, блока отображабющего текст фукнции-примера метода, кнопки отображающей/скрывающей описание метода ("show description"), кнопки отображающей/скрывающей синтаксис метода ("show syntax").</p>
      <p class="lead"> По кнопке с именем метода выполняется функция-пример, результат отображается в поле справа от кнопки. При повторном нажатии -- выполняется вторая функция-пример, если такая присутствует в json. </p>
      <p class="lead">Данные брались из документации Мозиллы. Для удобства конспектирования данных в json было создано некое подобие конвертора: в поле textarea вставляется функция, по нажатию кнопки в том же поле выводится функция в виде json-строки (метод JSON.stringify, который в последствии оказался удобным и для вывода объектов в html). К полученному вручную добавляется <span class="text-muted">document.getElementById(' название метода ').textContent = "результат выполнения функции"</span> и результат копируется в json-файл. По нажатию кнопки "название метода" данная функция-строка выполнялется через <strong><u>eval()</u></strong>, возвращающий значение выполнения кода, переданного в функцию в виде строки</p>
      	
    </div>
  </section>
</template>

<script>
export default {
	components: {
    'navigate': () => import('@/components/navigate')
	}

}
</script>
<style lang="sass">
h2
  color: #2D1DA5


</style>


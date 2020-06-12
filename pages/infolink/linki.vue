<template>
  <div>
    <div style="position: relative">
      <h4 class="text-center titlePage">
        Selected articles, which need in future:
      </h4>
      <nav class="navbar">
        <ol class="list-counter-circle">
          <a
            class="nav-link nav-link-icon"
            v-for="item in infolinks"
            v-bind:key="item.name"
            :href="item.link"
            target="_blank"
          >
            <li class="nav-item">{{ item.name }}</li>
          </a>
        </ol>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "linki",
  components: {},
  data: function() {
    return {
      infolinks: [
        {
          name: "/Надо разобраться как этой базой с Вью пользоваться",
          link: "https://nicedoc.io/vuejs/awesome-vue#user-content-community"
        },
        {
          name: "Css to SASS with variable separation",
          link: "https://beautifyconverter.com/css-to-sass-converter.php"
        },
        {
          name: "In one place methods JS",
          link: "http://overapi.com/javascripthttp://overapi.com/javascript"
        },
        {
          name: "Самый адекватный онлайн-переводчик",
          link: "https://www.deepl.com"
        },
        {
          name: "33 самые полезные регулярки для веб-разработчика",
          link: "https://proglib.io/p/33-regexp/"
        },
        {
          name: "Шаблон лендинга",
          link: "https://castaneda.com/"
        },
        {
          name: "Шпаргалка по современному JavaScript",
          link: "https://tproger.ru/translations/javascript-cheatsheet/"
        },
        {
          name: "Проверка RegExp",
          link: "https://regexr.com/"
        },
        {
          name: "Топ с Хабра",
          link: "https://habr.com/ru/top/"
        },
        {
          name: "Css-tricks",
          link: "https://css-tricks.com/"
        },
        {
          name: "CSS Wizardry Posts Archive",
          link: "https://csswizardry.com/archive/"
        },
        {
          name: "Атом IDE",
          link: "https://web.informatics.ru/edtr/atom/"
        },
        {
          name: "Гриды без медиа запросов",
          link:
            "https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/"
        },
        {
          name: "Маркер списка на псевдоэлементах",
          link:
            "https://css-tricks.com/restricting-a-pseudo-element-to-its-parents-border-box/"
        },
        {
          name: "15 полезных директив vue",
          link:
            "https://webdevblog.ru/15-obyazatelnyh-direktiv-vue-kotorye-znachitelno-uvelichat-vashu-proizvoditelnost/"
        },
        {
          name:
            "Компонент: https://optique.pl/Okulary-dla-graczy-zobacz-co-wybrac-cabout-pol-810.html)",
          link: "https://www.essilor.pl/znajdz-optyka"
        }
      ]
    };
  }
};
</script>
<style lang="sass">
.list-counter-circle
	--link-color-text: #ffffff
	--link-color-bg: #32325d
</style>

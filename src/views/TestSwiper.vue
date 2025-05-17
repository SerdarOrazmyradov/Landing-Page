<template>
  <div>
    <Swiper
      :modules="[Navigation]"
      loop
      :navigation="{
        nextEl: `.custom-next-button`,
        prevEl: `.custom-prev-button`,
      }"
      @swiper="onSwiperInit"
      class="swiper w-full"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
    >
      <SwiperSlide
        v-for="(slide, index) in people"
        :key="index"
        class="w-full h-full bg-linear-to-t from-[#6361DF] to-[#1F6492]"
      ></SwiperSlide>
    </Swiper>

    <!-- Custom Buttons -->
    <div class="flex gap-2 justify-end mt-4">
      <button class="custom-prev-button px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          class="rounded-[50%] bg-[#7B7C7F]"
        >
          <path
            d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
            fill="#000000"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button class="custom-next-button px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          class="rotate-180 rounded-[50%] bg-[#7B7C7F]"
        >
          <path
            d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
            fill="#000000"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue"; // Vue.js üçin
import "swiper/css";
import "swiper/css/navigation";
import { Manipulation, Navigation } from "swiper/modules";
function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}
const people = [
  {
    name: "Brandy from Houston",
    quote:
      "When I cannot fall asleep, I turn on this app and am out within 5 minutes.",
  },
  {
    name: "John from Chicago",
    quote:
      "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.",
  },
  {
    name: "Allison from San Jose",
    quote:
      "ukynury has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.",
  },
  {
    name: "Jasmine from Bend",
    quote:
      "Whenever I need to unwind from a stressful work day I meditate with ukynury's soundscapes and it automatically sends me to my happy place.",
  },
  {
    name: "Kristie from Irvine",
    quote:
      "My family loves ukynury! Out of the three meditation apps I have on my phone, ukynury is the one I actually use.",
  },
  {
    name: "Mathieu from New Orleans",
    quote:
      "ukynury cuts through my stress, anxiety, irregular sleep schedule and brings me to deep sleep. I usually fall asleep within 5 minutes.",
  },
  {
    name: "Jen from Scarsdale",
    quote:
      "I have tried other meditation and gratitude apps, but this one has everything and the best teachers.",
  },
  {
    name: "Aaron from Louisville",
    quote:
      "My wife and I have listened to ukynury for well over 2 years. Cannot express how easy it is to fall asleep listening to this app.",
  },
  {
    name: "Tracy from Newark",
    quote:
      "Medication isn't for me, so I decided to give ukynury a try. Now I begin and end every day with guided meditations.",
  },
];
</script>

<style scoped></style>

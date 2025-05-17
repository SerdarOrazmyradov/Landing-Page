<template>
  <div
    class="mt-10"
    style="background-color: linear-gradient(#f7f7f7, #e3ebff)"
  >
    <Swiper
      :modules="[Navigation, Manipulation]"
      loop
      :navigation="{
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      }"
      class="w-full"
      :breakpoints="{
        480: {
          slidesPerView: 1,
          spaceBetween: 5,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1536: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
    >
      <SwiperSlide
        v-for="(person, index) in people"
        :key="index"
        class="text-white py-[10px] md:px-[20px] rounded-2xl bg-gradient-to-b from-[#1f6492] to-[#6361df] flex flex-col items-start gap-[5px] md:gap-[10px] !h-[300px]"
      >
        <svg
          width="65"
          height="58"
          viewBox="0 0 65 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.8833 0L64.5426 4.38372C59.2061 8.95478 55.2038 13.5258 52.5356 18.0969C49.9436 22.593 48.6476 27.1641 48.6476 31.8101C48.6476 32.8592 48.6476 33.646 48.6476 34.1705C48.7238 34.6202 48.8001 35.1072 48.8763 35.6318C49.0288 35.6318 49.2194 35.6318 49.4481 35.6318C51.5827 35.332 53.1074 35.1822 54.0222 35.1822C57.3003 35.1822 59.9304 36.1938 61.9125 38.2171C63.9708 40.2403 65 42.938 65 46.3101C65 49.6822 63.9327 52.4922 61.7981 54.7403C59.6636 56.9134 56.9191 58 53.5648 58C49.3718 58 45.7888 56.314 42.8156 52.9419C39.8425 49.4948 38.3559 45.2984 38.3559 40.3527C38.3559 33.084 40.2618 26.0026 44.0735 19.1085C47.9615 12.1395 53.5648 5.77003 60.8833 0ZM22.2987 0L26.0723 4.38372C20.6597 8.95478 16.6192 13.5258 13.951 18.0969C11.359 22.593 10.063 27.1641 10.063 31.8101C10.063 32.8592 10.063 33.646 10.063 34.1705C10.1392 34.6202 10.2155 35.1072 10.2917 35.6318C10.4442 35.6318 10.6348 35.6318 10.8635 35.6318C12.998 35.332 14.5227 35.1822 15.4376 35.1822C18.7919 35.1822 21.4601 36.1938 23.4422 38.2171C25.5006 40.2403 26.5297 42.938 26.5297 46.3101C26.5297 49.6822 25.4243 52.4922 23.2135 54.7403C21.0789 56.9134 18.3345 58 14.9802 58C10.8635 58 7.31855 56.314 4.34539 52.9419C1.44846 49.4948 0 45.2984 0 40.3527C0 33.009 1.90587 25.8902 5.71762 18.9961C9.52936 12.1021 15.0564 5.77003 22.2987 0Z"
            fill="white"
            fill-opacity="0.2"
          ></path>
        </svg>
        <p class="text-[16px] text-left mt-2">
          {{ person.quote }}
        </p>
        <p class="text-[13px] mt-2 md:mt-4">
          {{ person.name }}
        </p>
        <svg
          width="136"
          height="24"
          viewBox="0 0 136 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Rating 5 star"
        >
          <path
            d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
            fill="#F8D22D"
          ></path>
          <path
            d="M40 0L42.6942 8.2918H51.4127L44.3593 13.4164L47.0534 21.7082L40 16.5836L32.9466 21.7082L35.6407 13.4164L28.5873 8.2918H37.3058L40 0Z"
            fill="#F8D22D"
          ></path>
          <path
            d="M68 0L70.6942 8.2918H79.4127L72.3593 13.4164L75.0534 21.7082L68 16.5836L60.9466 21.7082L63.6407 13.4164L56.5873 8.2918H65.3058L68 0Z"
            fill="#F8D22D"
          ></path>
          <path
            d="M96 0L98.6942 8.2918H107.413L100.359 13.4164L103.053 21.7082L96 16.5836L88.9466 21.7082L91.6407 13.4164L84.5873 8.2918H93.3058L96 0Z"
            fill="#F8D22D"
          ></path>
          <path
            d="M124 0L126.694 8.2918H135.413L128.359 13.4164L131.053 21.7082L124 16.5836L116.947 21.7082L119.641 13.4164L112.587 8.2918H121.306L124 0Z"
            fill="#F8D22D"
          ></path>
        </svg>
      </SwiperSlide>
    </Swiper>

    <!-- Custom Buttons -->
    <div class="flex gap-2 justify-end mt-4 mr-[20%]">
      <button class="cursor-pointer custom-prev-button py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          class="w-[40px] h-[40px] p-[5px] rounded-[50%] bg-[#7B7C7F]"
        >
          <path
            d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
            fill="#000000"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button class="cursor-pointer custom-next-button py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          class="w-[40px] h-[40px] p-[5px] rotate-180 rounded-[50%] bg-[#7B7C7F]"
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
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Manipulation, Navigation } from "swiper/modules";
defineProps({
  people: {
    type: Array,
  },
});
</script>

<style scoped></style>

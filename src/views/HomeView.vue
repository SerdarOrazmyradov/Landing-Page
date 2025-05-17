<template>
  <div>
    <!--navbar-->
    <Navbar />
    <!--2nd parent item-->
    <SecondParentItem />
    <!--3rd parent item-->
    <ThirdParentItem />
    <!--4th parent item-->
    <div
      class="w-full h-[180px] sm:h-[300px] lg:h-[500px] mt-6"
      style="
        box-shadow: inset 0 10px 90px #fff, inset 0 -10px 90px #fff;
        background-image: url('https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fcontent-tile-collage.webp&w=3840&q=75');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
      "
    ></div>
    <!--5th parent item-->
    <div class="mt-12">
      <div
        class="text-[16px] md:text-3xl text-[#34547F] font-bold flex justify-center"
      >
        2 milliondan gowrak 5 ýyldyzly baha berildi.
      </div>
      <!--1st Swiper-->
      <TestSwiper :people="peopleTM" />
    </div>
    <!--6th parent item-->
    <div
      class="w-full bg-[#d1e3fd] p-4 lg:h-[705.2px] md:h-[687.2px] sm:h-[673.2px]"
      style="
        box-shadow: inset 0 10px 10px #ffffff, inset 0 -10px 10px #ffffff;
        background-image: url('https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fblue-wave-bg.webp&w=3840&q=75');
        background-repeat: no-repeat;
      "
    >
      <h2
        class="text-[18px] md:text-[36px] text-[#34547F] mt-10 mx-auto w-fit text-center"
      >
        UkyNury Premium-yň mugt <br />
        synagyna ýazyl!
      </h2>
      <div class="flex justify-center">
        <div
          class="flex w-200 cursor-pointer hover:bg-[#D9D9D9] justify-between p-3 rounded-2xl bg border-2 mt-4 relative border-[#34547F] bg-white"
        >
          <div class="flex flex-col">
            <span class="font-bold">Ýyllyk</span>
            <span class="mt-1 font-bold">$49.99/ýyl</span>
          </div>
          <div class="flex items-center font-bold">
            <span>$4.17/aý.</span>
          </div>
          <div
            class="text-white cursor-pointer font-bold bg-linear-to-r from-[#5941C7] to-[#8345A8] rounded-2xl flex items-center px-2 text-[12px] h-6 absolute right-4 -top-3"
          >
            14 Gün Mugt Synag
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-center mt-4 p-4 w-200">
          Mugt synagyňyzdan soň, ýyllyk abuna 1,550.00 TMTbolup, ýatyrylmagyna
          çenli her ýyl awtomatiki täzelenýär.
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-linear-to-t from-[#6361DF] to-[#1F6492] rounded-2xl px-5 py-3 cursor-pointer text-white font-bold mt-2 w-200 hover:bg-linear-to-b from-[#226493] to-[#5253BC]"
        >
          Dowam et
        </button>
      </div>
    </div>
    <!--7th parent item-->
    <div class="w-full p-4">
      <h2
        class="text-[18px] md:text-[36px] text-[#34547F] mt-10 mx-auto w-fit text-center"
      >
        Meditasiýa, uky, stress we ruhy saglyk barada has köp maglumat üçin
        blogymyzy gözden geçiriň.
      </h2>
      <div
        class="mt-10"
        style="background-color: linear-gradient(#f7f7f7, #e3ebff)"
      >
        <Swiper
          :modules="[Navigation]"
          loop
          :navigation="{
            nextEl: '.custom-next-button2',
            prevEl: '.custom-prev-button2',
          }"
          @swiper="onSwiperInit"
          class="mySwiper w-full"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 1,
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
            v-for="(slide, index) in swiper2TM"
            :key="index"
            class="swiper-slide hover:text-[#34547F] w-[180px] md:w-[400px] gap-[5px] md:gap-[10px] flex flex-col items-start cursor-pointer"
          >
            <img
              :src="slide.imgUrl"
              :alt="slide.imgAlt"
              style="
                object-fit: cover;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
              "
            />
            <div class="text-[10px] text-start ml-[10px] !text-[#1A3E6F]">
              {{ slide.title }}
            </div>
            <p class="text-start ml-[10px]">{{ slide.description }}</p>
          </SwiperSlide>
        </Swiper>
        <!-- Custom Buttons -->
        <div class="flex w-full justify-between items-center">
          <span
            class="underline md:text-2xl flex-1 text-start md:text-end md:mr-40 cursor-pointer"
            >Ähli bloglary gör
          </span>
          <div class="flex gap-2 justify-end mt-4 md:mr-[20%]">
            <button class="cursor-pointer custom-prev-button2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                class="rounded-[50%] bg-[#7B7C7F] w-[40px] h-[40px] p-[5px]"
              >
                <path
                  d="M57.99975,81.99975 C57.48775,81.99975 56.97675,81.80475 56.58575,81.41375 L24.58575,49.41375 C23.80475,48.63275 23.80475,47.36675 24.58575,46.58575 L56.58575,14.58575 C57.36675,13.80475 58.63275,13.80475 59.41375,14.58575 C60.19475,15.36675 60.19475,16.63275 59.41375,17.41375 L28.82875,47.99975 L59.41375,78.58575 C60.19475,79.36675 60.19475,80.63275 59.41375,81.41375 C59.02275,81.80475 58.51175,81.99975 57.99975,81.99975"
                  fill="#000000"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button class="cursor-pointer custom-next-button2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                class="rotate-180 rounded-[50%] bg-[#7B7C7F] w-[40px] h-[40px] p-[5px]"
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
      </div>
    </div>
    <!--8th parent item-->
    <FrequentlyAskedQuestions />

    <!--Footer-->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import SecondParentItem from "../components/SecondParentItem.vue";
import ThirdParentItem from "../components/ThirdParentItem.vue";
import TestSwiper from "../components/TestSwiper.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/bundle";
import { peopleTM, swiper2TM } from "../compasable/people.js";

import FooterComponent from "../components/FooterComponent.vue";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.vue";

function onSwiperInit(swiper) {
  swiper.navigation.init();
  swiper.navigation.update();
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

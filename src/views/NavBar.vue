<template>
  <div class="relative">
    <!-- xl<...-->
    <div
      class="hidden md:flex md:justify-between"
      :class="[
        'flex justify-between p-4 fixed w-full transition-colors duration-200 z-20',
        isScrolled
          ? 'flex justify-between bg-white  text-[#000] '
          : 'bg-gradient-to-b from-blue-600 to-[#fff0] text-white',
      ]"
    >
      <!--navbar left items-->
      <div class="flex lg:gap-8 gap-4 items-center">
        <div class="rounded-[6px] p-1 mx-auto mt-0">
          <div class="cursor-pointer">
            <Transition name="fade">
              <LogoComponent :changeLogoColor="color"
            /></Transition>
          </div>
        </div>
        <buttun class="2xl:text-[18px] cursor-pointer">Uky</buttun>
        <buttun class="2xl:text-[18px] cursor-pointer">Stress & Howsala</buttun>
        <buttun class="2xl:text-[18px] cursor-pointer">Üns</buttun>
      </div>
      <!--navbar right items-->
      <div class="flex lg:gap-7 gap-5 items-center">
        <button class="cursor-pointer">UkyNury Saglyk</button>
        <button class="cursor-pointer">Log In</button>
        <a
          href="#"
          class="custom bg-[#fff] rounded-2xl text-[18px] px-3 py-1"
          :class="
            isScrolled
              ? 'bg-linear-to-t from-[#6361DF] to-[#1F6492] text-white '
              : 'bg-white text-black'
          "
          >UkyNury mugt syna!</a
        >
      </div>
    </div>

    <div
      class="flex md:hidden justify-between w-full"
      :class="[
        ' p-1 fixed  transition-colors duration-200 z-20',
        isScrolled
          ? ' flex justify-between   bg-white  text-[#000] '
          : 'bg-gradient-to-b from-[#b2d9f2] to-[#659FCC] text-white',
      ]"
    >
      <!--navbar left items-->
      <div class="flex gap-8 items-center">
        <div class="rounded-[6px] p-1 mx-auto mt-0">
          <div class="cursor-pointer">
            <LogoComponent :changeLogoColor="color" />
            <!--gaýrat et süýşme shift+alt+f basamda -->
          </div>
        </div>
      </div>
      <!--navbar right items-->
      <div class="flex gap-7 items-center">
        <a
          href="#"
          class="custom bg-[#fff] rounded-2xl text-[12px] px-3 py-1"
          :class="
            isScrolled
              ? 'bg-linear-to-t from-[#6361DF] to-[#1F6492] text-white '
              : 'bg-white text-black'
          "
          >UkyNury mugt syna!
        </a>

        <div
          @click="toggleMobileNavbar"
          class="flex md:hidden cursor-pointer top-0 right-0 z-[1100]"
        >
          <div
            class="flex flex-col justify-center items-center w-10 h-8 cursor-pointer space-y-1 z-50"
          >
            <span
              :class="[
                'w-8 h-1 bg-white rounded transition-transform duration-300',
                showMobileNavbar ? 'rotate-45 translate-y-2 bg-white' : '',
              ]"
            ></span>
            <span
              :class="[
                'w-8 h-1 bg-white rounded transition-all duration-300',
                showMobileNavbar ? 'opacity-0 bg-white' : '',
              ]"
            ></span>
            <span
              :class="[
                'w-8 h-1 bg-white rounded transition-transform duration-300',
                showMobileNavbar ? '-rotate-45 -translate-y-2 bg-white' : '',
              ]"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade"
      ><div
        v-if="showMobileNavbar"
        class="block md:hidden fixed top-12 w-screen h-screen bg-blue-300 z-40 overflow-y-auto"
      >
        <div class="h-10 w-full"></div>
        <div class="text-[27px] text-white flex flex-col gap-4 px-4 py-4">
          <div class="cursor-pointer">Sleep</div>
          <div class="cursor-pointer">Stress & Anxiety</div>
          <div class="cursor-pointer">Mindfulness</div>
          <div class="cursor-pointer">UkyNury Health</div>
          <div class="cursor-pointer">Log In</div>
        </div>
      </div></transition
    >

    <div
      alt="navbar bg img"
      class="h-[120px] md:h-[180px] lg:h-[480px] left-0 top-0 w-full absolute -z-2 custom-inset-shadow"
      style="
        background-image: url('https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Fjasper-lake-hero-banner.webp&w=3840&q=75');
        background-repeat: no-repeat;
        background-size: cover;
      "
    ></div>
    <div
      class="bg-[#ffffffc7] relative w-full h-6 sm:h-10 md:h-16 lg:h-25 top-25 sm:top-40 lg:top-100 blur-2xl left-0 right-0"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LogoComponent from "../components/logoComponent.vue";

const showMobileNavbar = ref(false);
const isScrolled = ref(false);

const color = ref("#fff");

const updateColor = () => {
  color.value = isScrolled.value ? "#4C6FFF" : "#fff";
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 5;
  updateColor();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  updateColor();
});

const toggleMobileNavbar = () => {
  showMobileNavbar.value = !showMobileNavbar.value;
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .custom-inset-shadow {
    /* box-shadow: inset 0px 100px 90px #ffffff, inset 0px -100px 90px #ffffff; */
  }
}
@media (min-width: 768px) {
  .custom-inset-shadow {
    /* box-shadow: inset 0px 50px 25px #ffffff, inset 0px -50px 25px #ffffff; */
  }
}
@media (max-width: 768px) {
  .custom-inset-shadow {
    /* box-shadow: inset 0px -20px 10px #ffffff; */
  }
}
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

.custom {
  /* @apply text-red-600; */
}
</style>

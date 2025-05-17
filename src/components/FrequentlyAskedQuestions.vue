<template>
  <div>
    <h2 class="text-[36px] text-[#34547F] mt-10 mx-auto w-fit text-center">
      Köp berilýän soraglar
    </h2>
    <div
      v-for="element in newfaqs"
      :key="element.category"
      class="flex flex-col px-4 mx-auto md:w-160"
    >
      <h3 class="text-[26px] text-[#34547F] mt-10 w-fit text-center">
        {{ element.category }}
      </h3>
      <div
        v-for="item in element.questions"
        :key="item.answer"
        class="flex flex-col"
      >
        <button
          class="flex justify-between mt-4 cursor-pointer hover:text-[#34547F]"
          @click="
            item.isOpen = !item.isOpen;
            console.log(`clicked` + item.isOpen);
          "
        >
          <span class="font-bold">{{ item.question }}</span
          ><span
            ><img
              src="../assets/images/down.png"
              alt="down"
              class="w-4 h-4 mt-1"
          /></span>
        </button>
        <Transition>
          <p v-if="item.isOpen">{{ item.answer }}</p>
        </Transition>
      </div>
    </div>
  </div>
</template>
<style>
/* FAQ's transition */
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
} */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref } from "vue";
import { faqsTM } from "../compasable/questions.js";
const newfaqs = faqsTM.value;
</script>

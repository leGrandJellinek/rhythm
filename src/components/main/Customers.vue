<template>
  <section class="main__customers">
    <div class="main__customers-container">
      <h2 class="title">What <span>our customer’s</span> say</h2>
      <div class="main__customers-block">
        <div class="main__customers-left">
          <img
            src="@/assets/images/main/customers/avatar.png"
            alt=""
            class="main__customers-img"
          />
        </div>
        <div class="main__customers-right">
          <p class="main__customers-descr">
            “The Quality and Delivery is always on time, being a professional
            guitarist myself I love the customer service the brand provides,
            highly recommend Rhythm anytime.”
          </p>
          <div class="main__customers-right-block">
            <div class="main__customers-names">
              <h3 class="main__customers-name">Ryan Wels</h3>
              <h3 class="main__customers-job">PROFESSIONAL GUITARIST</h3>
            </div>
            <div class="main__customers-dots">
              <div
                class="main__customers-dot"
                v-for="user in customersList"
                :key="user.id"
                @click="
                  activeOff();
                  user.active = !user.active;
                "
                v-bind:class="{ active: user.active }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="main__guitars">
    <div class="main__guitars-container">
      <div class="main__guitars-block">
        <div class="main__guitars-left">
          <h2 class="main__guitars-title title">
            Browse and buy your <span>favorite guitars</span> with Rhythm.
          </h2>
          <div class="main__guitars-icons">
            <button class="main__guitars-btn">
              <img src="@/assets/images/icons/google_play.svg" alt="">
              <h3 class="main__guitars-download">
                get it on <span>google play</span>
              </h3>
            </button>
            <button class="main__guitars-btn">
              <img src="@/assets/images/icons/apple_logo.svg" alt="">
              <h3 class="main__guitars-download">
                download on the <span>app store</span>
              </h3>
            </button>
          </div>
        </div>
        <div class="main__guitars-right">
            <img src="@/assets/images/main/customers/screen1.png" alt="" class="main__guitars-img">
            <img  src="@/assets/images/main/customers/screen2.png" alt="" class="main__guitars-img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customersList: [
        {
          id: 1,
          active: true,
        },
        {
          id: 2,
          active: false,
        },
        {
          id: 3,
          active: false,
        },
        {
          id: 4,
          active: false,
        },
      ],
    };
  },
  methods: {
    activeOff() {
      this.customersList.forEach((el) => (el.active = false));
    },
  },
};
</script>
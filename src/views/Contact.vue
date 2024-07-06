<template>
  <div class="jcontactview">
    <header class="jcontactview__jumbotron">
      <h1 class="jcontactview__title">Contact Us For Detail</h1>
    </header>
  </div>
  <div class="jcontactview__contact-wrapper">
    <div class="jcontactview__left-content">
      <h3 class="jcontactview__subtitle">
        Leave the message or comment
      </h3>
      <p class="jcontactview__text-body">
        Write to us, and we will make every effort to respond as quickly as possible.
      </p>
      <JEmailForm></JEmailForm>
    </div>
    <div class="jcontactview__right-content">
      <div class="jcontactview__right-top-content">
        <h3 class="jcontactview__subtitle">
          Address
        </h3>
        <p class="jcontactview__text-body">
          JL. Cempaka Putih, Desa/Keluraha Tangkerang Utara, Kec. Bukit Raya, Kota Pekanbaru, Provinsi Riau, Post Code : 28289
        </p>
      </div>
      <div class="jcontactview__right-bottom-content">
        <h3 class="jcontactview__subtitle">
          Contact
        </h3>
        <p class="jcontactview__text-body">
          Phone. 083898907789
          Email. jtg.tibar@gmail.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import JEmailForm from '@/components/EmailForm.vue'

  export default {
    name: 'ContactView',
    components: {
      JEmailForm
    }
  }
</script>

<style scoped lang="scss">
  .jcontactview {
    &__jumbotron {
      height: 500px; /* Adjust as needed */
      background-image: url('../assets/pattern1-background-1.png');
      background-size: cover;
      background-attachment: fixed;
      background-repeat: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
    &__title {
      font-size: 3rem;
      margin: 0;
      padding: 0;
    }
    &__subtitle {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }
    &__contact-wrapper {
      display: flex;
      width: 1200px;
      margin: 20px auto;
      gap: 40px;
    }
    &__text-body {
      font-size: 1.1rem;
      line-height: 28px;
      color: darkcyan;
    }
    &__left-content {
      flex: 2;
    }
    &__right-content {
      flex: 1;
    }
    @media (max-width: 768px) {
      &__text-body {
        font-size: .9rem;
        line-height: 23px;
        text-align: center;
      }
      &__text-body-3 {
        font-size: .85rem;
        margin: 0px;
      }
      &__subtitle {
        font-size: 1.5rem;
        text-align: center;
        margin: 0;
        padding: 0;
      }
      &__title {
        text-align: center;
        font-size: 2rem;
      }
      &__contact-wrapper {
        width: 85%;
        padding: 0px 16px;
        flex-direction: column;
      }
    }
  }
</style>

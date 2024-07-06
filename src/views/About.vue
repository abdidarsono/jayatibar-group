<template>
  <div class="jaboutview">
    <header class="jaboutview__jumbotron">
      <h1 class="jaboutview__title">About Us</h1>
    </header>
  </div>
  <div class="jaboutview__background-company">
    <JTabs :tabLabels="['Vision', 'Mission', 'Business Value']">
      <template v-slot:tab1>
        <div class="jaboutview__background-content">
          <div class=" jaboutview__left-content-background">
            <div class="jaboutview__img">
              <img src="../assets/vision-thumbnail.png" alt="">
            </div>
          </div>
          <div class=" jaboutview__right-content-background">
            <p class="jaboutview__text-body">
              To redefine modern living by creating innovative, sustainable, and aesthetically pleasing residential communities that enhance the quality of life for our clients and set new standards in property development.
            </p>
          </div>
        </div>
      </template>
      <template v-slot:tab2>
        <div class="jaboutview__background-content">
          <div class=" jaboutview__left-content-background">
            <div class="jaboutview__img">
              <img src="../assets/mission-thumbnail.png" alt="">
            </div>
          </div>
          <div class=" jaboutview__right-content-background">
            <p class="jaboutview__text-body">
              Our mission is to redefine modern living through the development of innovative and sustainable residential communities. We focus on delivering superior quality in interior and exterior design, as well as expert civil engineering, ensuring each project enhances the quality of life for our clients through personalized solutions and exceptional service.
            </p>
          </div>
        </div>
      </template>
      <template v-slot:tab3>
        <div class="jaboutview__background-content">
          <div class=" jaboutview__left-content-background">
            <div class="jaboutview__img">
              <img src="../assets/bussiness-thumbnail.png" alt="">
            </div>
          </div>
          <div class=" jaboutview__right-content-background">
            <p class="jaboutview__text-body">
              <strong>At Jaya Tibar</strong>, we prioritize integrity, quality excellence, innovation, and sustainability in all our endeavors. We uphold the highest ethical standards, deliver superior craftsmanship and design, embrace innovative solutions and technologies, and promote eco-friendly practices. Customer satisfaction drives us to provide personalized service, while collaboration with our team, partners, and community fosters a culture of respect, diversity, and inclusivity. Our focus extends beyond individual projects to positively impact the broader community and local economy, ensuring our developments enhance lives and neighborhoods.
            </p>
          </div>
        </div>
      </template>
    </JTabs>
    <div class="jaboutview__jumbotron-second">
      <div class="jaboutview__left-content">
        <h3 class="jaboutview__subtitle jaboutview__left-border">
          Our Company
        </h3>
      </div>
      <div class="jaboutview__right-content">
        <p class="jaboutview__text-body">
          Founded on October 20, 2023, by Tri Muara under the name PT Jaya Tibar Group, this company was initiated by "Tri," three resilient and experienced young men in the field of civil engineering. We have a grand mission to create development balance by prioritizing the motto of green city low emission.
        </p>
      </div>
    </div>
    <div class="jaboutview__jumbotron-third">
      <div class="jaboutview__usp-wrapper">
        <div class="jaboutview__usp-item">
          <div class="jaboutview__usp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#DA4132"><path d="M80-160v-400l240-240 240 240v400H80Zm80-80h120v-120h80v120h120v-287L320-687 160-527v287Zm120-200v-80h80v80h-80Zm360 280v-433L433-800h113l174 174v466h-80Zm160 0v-499L659-800h113l108 108v532h-80Zm-640-80h320-320Z"/></svg>
          </div>
          <div class="jaboutview__label-usp">
            <p class="jaboutview__text-body-1">2+</p>
            <p class="jaboutview__text-body-3">
              Project
            </p>
          </div>
        </div>
        <div class="jaboutview__usp-item">
          <div class="jaboutview__usp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#DA4132"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>
          </div>
          <div class="jaboutview__label-usp">
            <p class="jaboutview__text-body-1">1</p>
            <p class="jaboutview__text-body-3">
              City
            </p>
          </div>
        </div>
        <div class="jaboutview__usp-item">
          <div class="jaboutview__usp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#DA4132"><path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z"/></svg>
          </div>
          <div class="jaboutview__label-usp">
            <p class="jaboutview__text-body-1">3+ ha</p>
            <p class="jaboutview__text-body-3">
              Wide
            </p>
          </div>
        </div>
        <div class="jaboutview__usp-item">
          <div class="jaboutview__usp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="150px" viewBox="0 -960 960 960" width="150px" fill="#DA4132"><path d="M160-160v-280 280Zm640 0v-280 280Zm-40-480q17 0 28.5-11.5T800-680q0-17-11.5-28.5T760-720q-17 0-28.5 11.5T720-680q0 17 11.5 28.5T760-640Zm0 80q-51 0-85.5-34.5T640-680q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T760-560ZM480-680q25 0 42.5-17t17.5-43q0-25-17.5-42.5T480-800q-26 0-43 17.5T420-740q0 26 17 43t43 17Zm0 80q-59 0-99.5-40.5T340-740q0-58 40.5-99t99.5-41q58 0 99 41t41 99q0 59-41 99.5T480-600ZM320-425q0 30 32 70t128 127q94-85 127-125t33-72q0-23-15-39t-37-16q-14 0-26.5 6T541-457l-48 57h-27l-48-57q-8-11-20.5-17t-25.5-6q-23 0-37.5 16T320-425Zm-80 0q0-53 36-94t96-41q31 0 59.5 14t48.5 38q20-24 48-38t60-14q60 0 96 41.5t36 93.5q0 53-38.5 104.5T524-160l-44 40-44-40Q315-270 277.5-321T240-425Zm-40-215q17 0 28.5-11.5T240-680q0-17-11.5-28.5T200-720q-17 0-28.5 11.5T160-680q0 17 11.5 28.5T200-640ZM483-80v-80h317v-280H682v-80h118q33 0 56.5 23.5T880-440v360H483Zm-323-80h323v80H80v-360q0-33 23-56.5t57-23.5h118v80H160v280Zm40-400q-51 0-85.5-34.5T80-680q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T200-560Zm280-180Zm-280 60Zm560 0Z"/></svg>
          </div>
          <div class="jaboutview__label-usp">
            <p class="jaboutview__text-body-1">10+</p>
            <p class="jaboutview__text-body-3">
              Professional
            </p>
          </div>
        </div>
      </div>
      <div class="jaboutview__two-content-wrapper">
        <div class="jaboutview__left-content">
          <p class="jaboutview__text-body">
            To date, the Company has developed more than 2 projects encompassing industrial and residential areas, primarily focusing on one city. The total managed land area exceeds 3 hectares, supported by a team of over 10 professionals in their respective fields.
          </p>
        </div>
        <div class="jaboutview__right-content jaboutview__right-content-flx-1">
          <p class="jaboutview__text-body">
            With a diverse portfolio and extensive land ownership, the Company has successfully built a strong reputation over more than three decades and is recognized as a key player in the property industry in Indonesia.
          </p>
        </div>
      </div>
    </div>
    <div class="jaboutview__jumbotron-fourth">
      <h1 class="jaboutview__title jaboutview__title-red">Organization Structure</h1>
      <p class="jaboutview__text-body">
        The Board of overseers, consisting of experts from varied fields, guarantees the sustained operation of our enterprise in generating enduring worth for both shareholders and the corporation.
      </p>
      <JTabs :tabLabels="['Komisaris', 'Direksi']">
        <template v-slot:tab1>
          <div class="jaboutview__container-center">
            <JCard
              image="https://via.placeholder.com/600"
              title="Bismo Anggoro"
              description="Komisaris"/>
          </div>
        </template>
        <template v-slot:tab2>
          <div class="jaboutview__container-center">
            <JCard
              image="https://via.placeholder.com/600"
              title="Arief Kurnia"
              description="Direktur"/>
            <JCard
              image="https://via.placeholder.com/600"
              title="Timotius Eliezer Karundeng"
              description="Direktur Utama"/>
          </div>
        </template>
    </JTabs>
    </div>
  </div>
</template>

<script>
  import JTabs from '../components/Tabs.vue'
  import JCard from '../components/Card.vue'

  export default {
    name: 'ContactView',
    components: {
      JTabs,
      JCard
    }
  }
</script>

<style scoped lang="scss">
  .jaboutview {
    &__jumbotron {
      height: 500px;
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
      &-red {
        color: #DA4132;
        display: flex;
        justify-content: center;
      }
    }
    &__subtitle {
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
    }
    &__background-company {
      display: flex;
      width: 1200px;
      margin: 20px auto;
      gap: 40px;
      flex-direction: column;
    }
    &__background-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 40px 0;
    }
    &__text-body {
      font-size: 1.1rem;
      line-height: 28px;
      color: darkcyan;
      &-1 {
        font-size: 1.4rem;
        color: #232222;
        font-weight: 600;
        padding: 0px;
        margin: 0px;
      }
      &-3 {
        font-size: 1rem;
        color: #232222;
        text-align: center;
      }
    }
    &__left-content {
      flex: 1;
    }
    &__left-content-background {
      flex: 1;
      img {
        width: 700px;
      }
    }
    &__right-content-background {
      flex: 1;
    }
    &__right-content {
      flex: 2;
      &-flx-1 {
        flex: 1;
      }
    }
    &__jumbotron-second {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    &__left-border {
      border-right: 2px solid #DA4132;
    }
    &__usp-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    &__usp-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 200px;
    }
    &__usp-icon {
      svg {
        width: 100px;
      }
    }
    &__label-usp {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__two-content-wrapper {
      display: flex;
      gap: 60px;
      align-items: center;
      justify-content: center;
    }
    &__jumbotron-fourth {
      align-self: center;
    }
    &__container-center {
      display: flex;
      gap: 20px;
      padding: 20px 0px;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 768px) {
      &__text-body {
        font-size: .9rem;
        line-height: 23px;
        text-align: center;
      }
      &__background-company {
        width: auto;
        gap: 20px;
      }
      &__jumbotron-second {
        flex-direction: column;
        padding: 0px 16px;
        text-align: center;
        gap: 10px;
      }
      &__left-border {
        border-bottom: 1.5px solid #DA4132;;
        border-right: none;
      }
      &__usp-icon {
        display: flex;
        justify-content: center;
      }
      &__text-body-3 {
        font-size: .85rem;
        margin: 0px;
      }
      &__usp-icon {
        svg {
          width: 65%;
          height: 65%;
        }
      }
      &__title {
        font-size: 2rem;
      }
      &__background-content {
        flex-direction: column;
        gap: 0;
        text-align: center;
        padding: 20px 0px;
      }
      &__jumbotron-third,
      &__jumbotron-fourth {
        padding: 0px 16px;
      }
      &__title {
        text-align: center;
        font-size: 2rem;
      }
      &__left-content-background {
        img {
          width: 100%;
        }
      }
    }
  }
</style>

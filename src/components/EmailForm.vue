<template>
  <div class="jmail">
    <form class="jmail__content-wrapper" @submit.prevent="submitForm">
      <div class="jmail__input-wrapper">
        <label for="name">Name:</label>
        <input type="text" v-model="formData.name" id="name" required />
      </div>
      <div class="jmail__input-wrapper">
        <label for="userEmail">Email:</label>
        <input type="email" v-model="formData.userEmail" id="userEmail" required />
      </div>
      <div class="jmail__input-wrapper">
        <label for="contactNumber">Contact Number:</label>
        <input type="text" v-model="formData.contactNumber" id="contactNumber" required />
      </div>
      <div class="jmail__input-wrapper">
        <label for="comment">Comment:</label>
        <textarea v-model="formData.comment" id="comment" maxlength="1000" required></textarea>
      </div>
      <button class="jmail__button" type="submit">Submit</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        userEmail: '',
        contactNumber: '',
        comment: ''
      },
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://your-backend-api.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          this.message = 'Email sent successfully!';
          this.formData = { name: '', userEmail: '', contactNumber: '', comment: '' };
        } else {
          this.message = 'Failed to send email.';
        }
      } catch (error) {
        this.message = 'An error occurred: ' + error.message;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.jmail {
  width: 100%;
  margin: 0 auto;
  &__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__input-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    label {
      font-size: .9rem;
      line-height: 28px;
      color: darkcyan;
      width: 120px;
      color: darkcyan;
      margin: 0;
      padding: 0;
    }
    input,
    textarea {
      width: 100%;
      height: 80px; /* Reduced height for better mobile experience */
      padding: 8px 12px; /* Reduced padding for better mobile experience */
      margin: 8px 0;
      box-sizing: border-box;
      outline: none;
      border: 1px solid darkcyan;
      border-radius: 6px;
      font-size: 14px;
    }
    textarea {
      height: 100px;
      padding: 12px; /* Adjusted padding for textarea on mobile */
    }
  }
  &__button {
    align-self: flex-end;
    width: 40%; /* Adjusted width for better mobile experience */
    padding: 12px; /* Adjusted padding for better mobile experience */
    font-size: 14px;
    text-align: center;
    background-color: #DA4132;
    color: whitesmoke;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #a92b1f;
    }
  }

  @media (max-width: 768px) {
    width: 85%; /* Adjusted width for better mobile experience */
    &__input-wrapper {
      flex-direction: column;
      align-items: flex-start;
      label {
        width: 100%; /* Full width for labels on mobile */
        font-size: 0.8rem; /* Reduced font size for labels on mobile */
      }
      input {
        height: 40px;
      }
    }
    .jcontactview__contact-wrapper {
      width: 80%;
    }
    &__button {
      width: 100%; /* Full width for button on mobile */
    }
  }
}
</style>

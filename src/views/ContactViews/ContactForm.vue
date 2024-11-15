<script setup>
  import { ref } from "vue";
  const WEB3FORMS_ACCESS_KEY = "277a6ba5-4c90-4e6f-9980-9d912cc2b3ee";
  const name = ref("")
  const email = ref("")
  const phone = ref("")
  const message = ref("")
  const result = ref(null)

  const submitForm = async () => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.value,
          phone: phone.value,
          email: email.value,
          message: message.value,
        }),
      });

      result.value = await response.json();

      if (result.value.success) {
        console.log("Form submission result:", result.value);
      }
    } catch (error) {
      result.value = { success: false, message: "Form submission failed." };
      console.error("Submission error:", error);
    }
  }
</script>

<template>
  <section class="form-wrapper" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
    <form action="" id="contact-form" @submit.prevent="submitForm">
      <fieldset>
        <div v-if="result && result.success">
          <p>{{ result.message }}</p>
        </div>
        <!-- Name -->
        <div class="form-div">
          <label for="name-input"><i class="fa-solid fa-user"></i> Name</label>
          <input
            type="text"
            class="form-input" 
            name="name" 
            id="name-input"
            minlength="2"
            maxlength="80"
            placeholder="Your name here"
            v-model="name"
            autocomplete="on"
            required
          >
        </div>
        <!-- Email -->
        <div class="form-div">
          <label for="email-input"><i class="fa-solid fa-envelope"></i> Email</label>
          <input 
            type="text" 
            class="form-input" 
            name="email" 
            id="email-input"
            placeholder="Your email here"
            maxlength="120"
            v-model="email"
            autocomplete="on"
            required
          >
        </div>
        <!-- Phone -->
        <div class="form-div">
          <label for="phone-input"><i class="fa-solid fa-phone"></i> Phone</label>
          <input 
            type="text" 
            class="form-input" 
            name="phone" 
            id="phone-input"
            placeholder="Your phone here"
            maxlength="15"
            v-model="phone"
            autocomplete="on"
            required
          >
        </div>
        <!-- Message -->
        <div class="form-div">
          <label for="message-input"><i class="fa-solid fa-pen-to-square"></i> Message</label>
          <textarea 
            name="message" 
            id="message-input" 
            rows="10"
            placeholder="Your message here"
            minlength="20"
            maxlength="500"
            v-model="message"
            required
          ></textarea>
        </div>
      </fieldset>
      <!-- Buttons -->
      <div class="buttons-div">
        <button 
          type="submit" 
          class="button capital btn-first send-btn"
        ><i class="fa-solid fa-paper-plane"></i> send</button>
        <button 
          type="reset" 
          class="button capital clear-btn"
        ><i class="fa-solid fa-broom"></i> clear</button>
      </div>
    </form>
  </section>
</template>
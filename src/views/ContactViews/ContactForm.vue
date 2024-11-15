<template>
  <section class="form-wrapper" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
    <form action="" id="contact-form">
      <fieldset>
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
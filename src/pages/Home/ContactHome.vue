<template>
  <div class="contacthome">
    <!-- Black Overlay -->
    <div class="black_overlay_contact">
      <!-- Look at google maps -->
      <div class="contact_home_map">
        <span>Look at Google Maps</span>
      </div>
      <!-- Contact Title -->
      <div class="contact__title">
        <!-- About title span -->
        <span class="contact__title__span">Contact</span>
        <!-- about title logo img -->
        <img
          src="https://i.ibb.co/RDKp156/TEDx-White-Transparent-003.png"
          alt="logo_contact"
        />
        <!-- About year span -->
        <span class="contact__year__span">2021</span>
      </div>
      <!-- contact page -->
      <div class="contact__page">
        <!-- Form -->
        <form class="contact_page_form">
          <!-- Name Input -->
          <!-- <label for="name">Name</label> -->
          <input type="text" placeholder="Name" />
          <!-- Name Email -->
          <!-- <label for="email">Email</label> -->
          <input type="text" placeholder="Email" />
          <!-- Phone Number -->
          <!-- <label for="phoneNumber">Phone Number</label> -->
          <input type="text" placeholder="Phonenumber" />
          <!-- Subject -->
          <!-- <label for="subject">Subject</label> -->
          <input type="text" placeholder="Subject" />
          <!-- Message -->
          <!-- <label for="message">Message</label> -->
          <textarea cols="30" rows="1" placeholder="Message"></textarea>
          <!-- Submit Button -->
          <button class="btn_submit">Submit</button>
        </form>
      </div>
      <!-- footer -->
      <div class="contact__footer">
        <!-- Address -->
        <div class="footer__address">
          <span class="title">Address</span>
          <span class="detail"
            >Kalasalingam Academy of Research and Education, Krishnankoil,
            Srivilliputhur, Tamilnadu 626126</span
          >
        </div>
        <!-- Contacts -->
        <div class="footer__contact">
          <span class="title">Contacts</span>
          <span class="email">9918004063@klu.ac.in</span>
          <span class="phone">+91-6202286832</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
@import "./css/ContactHome/contacthome.css";
</style>
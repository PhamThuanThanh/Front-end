<template >
  <!--<div >
      <input type="file" id="file" name="myfile" ref="file" v-on:change="handleFileUpload(this)"/>
      <label for="file" class="btn-2">upload</label>
    <button v-show="showSubmit" v-on:click="submitFile()">Submit</button>
  </div>-->
  <div style="background-color: #31c1ef;height: 100vh ">
    <div class="wrapper">
      <span style="color: red" v-show="isLogin"> {{message}}</span>
      <md-field class="customer-field">
        <label>Full Name</label>
        <md-input v-model="full_name" required></md-input>
        <span class="md-error">Full Name is required!</span>
      </md-field>
      <md-field class="customer-field">
        <label>Email</label>
        <md-input v-model="email" required></md-input>
        <span class="md-error">Email is required!</span>
      </md-field>
      <md-field class="customer-field">
        <label>Phone</label>
        <md-input v-model="phone" required></md-input>
        <span class="md-error">Phone is required!</span>
      </md-field>
      <md-field class="customer-field">
        <label>Birthday</label>
        <md-input v-model="phone" required></md-input>
        <span class="md-error">Birthday is required!</span>
      </md-field>
      <div>
      <md-button class="md-raised" @click="register">Register</md-button>
      </div>
    </div>
  </div>
</template>
<script src="./Register.js"></script>
<style scoped src="./Register.css"></style>

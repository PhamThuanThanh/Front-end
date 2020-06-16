<template>
<div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <div class="container" >
    <div class="error-massage" v-if="showError">
      {{message}}
    </div>
    <md-field class="customer-field">
      <label>Customer Id</label>
      <md-input v-model="customerId" required></md-input>
      <span class="md-error">customer id is required!</span>
    </md-field>

    <div class="image-upload-box">
      <div class="image-upload-content">
        <div v-if="!imageData" class="image-upload-title">Choose an Image</div>
        <div v-else class="img-view">
          <img :src="imageData" alt="" :style="{ transform: 'rotate(' + rotate + 'deg)'}">
        </div>
        <input
          accept=".img,.svg,.png,.jpg"
          class="file-input"
          ref="fileInput"
          type="file"
          @input="onSelectFile"
        >
        <md-button class="md-dense md-primary" @click="btnSelectImage_click">Choose Image</md-button>
      </div>
    </div>
    <div class="buton-container">
      <div class="btn-rotate">
        <md-button class="md-dense md-raised md-primary" @click="rotate_left">&#8630;</md-button>
        <md-button class="md-dense md-raised md-primary" @click="rotate_right">&#8631;</md-button>
      </div>
      <md-button class="md-dense md-raised md-primary" @click="btnSubmit_click">Submit</md-button>
    </div>
    <div v-for="(value, name) in data" :key="name">
      {{ name }}: {{ value }}
    </div> 
    </div>
    </div>
    <div class="md-layout-item">
      <div style = "padding-top: 100px">
      <md-button class="md-dense md-raised md-primary" @click="gotoRegister" >Register</md-button>
    </div>
    </div>
</div>
</template>
<script src="./HomeCustomer.js"></script>
<style scoped src="./HomeCustomer.css"></style>


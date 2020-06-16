<template >
  <div>
    <div class="md-layout md-gutter" style="text-align: center; padding-top: 1%">
    </div>

    <md-toolbar class="md-transparent" :md-elevation="0">
      <div class="md-toolbar-section-start">  
        <h1 class="md-title">List Invoices</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by ID" v-model="search" @input="searchOnTable" />
      </md-field>
    </md-toolbar>

    <md-table md-card >
      <md-table-row id="headerTMS">
        <md-table-head md-sort-by="id" >STT</md-table-head>
        <md-table-head > ID Invoice</md-table-head>
        <md-table-head > ID Customer</md-table-head>
        <md-table-head > Total Invoice </md-table-head>
        <md-table-head > Date Invoice </md-table-head>

        
      </md-table-row>
      <md-table-row id ="timesheet-table" v-for="(item) in invoices" :key="item.id">
        <md-table-cell >{{item.id }}</md-table-cell>
        <md-table-cell ><span @click="a">{{item.id_customer }}</span></md-table-cell>
        <md-table-cell>{{ item.id_invoice }}</md-table-cell>
        <md-table-cell>{{ item.total_invocie }}</md-table-cell>
        <md-table-cell>{{ item.date_invoice }}</md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script src="./ShowInvoice.js"></script>
<style scoped src="./ShowInvoice.css"></style>

<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">OKONO</span>

      <div class="md-toolbar-section-end">
        <md-menu>
          <md-button md-menu-trigger>{{user}}</md-button>

          <md-menu-content>
            <md-menu-item>Profile</md-menu-item>
            <md-menu-item @click="logout">Sign Out</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">OKONO</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>receipt</md-icon>
          <router-link to="/showInvoice" class="md-list-item-text">Invoice</router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>perm_identity</md-icon>
          <router-link to="/customer" class="md-list-item-text">Customer</router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>card_giftcard</md-icon>
          <router-link to="/voucher" class="md-list-item-text">Voucher</router-link>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-drawer class="md-right" :md-active.sync="showSidepanel">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Favorites</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <router-view />
    </md-content>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";
import VueMaterial from 'vue-material';
export default {
  name: "Home",
  data () {
    return {
        showNavigation: false,
        showSidepanel: false,
        user: this.$store.getters.username
    }
  },
  methods: {
    logout() {
      const token = localStorage.getItem("user-token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
        axios
          .get("http://localhost:8000/logout")
          .then(response => {
            // handle success
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          })
          .then(function() {
            // always executed
          });
      }
      localStorage.removeItem("user-token");
      this.$router.push("login");
    }
  }
};
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
</style>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data () {
    return {
      imageData: null,
      data: '',
      file: '',
      customerId: '',
      showError: false,
      message: '',
      rotate: 0,
    }
  },
  methods: {
    btnSelectImage_click () {
      this.$refs.fileInput.click()
    },

    onSelectFile () {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader;
        reader.onload = e => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(files[0]);
      }
      this.file = this.$refs.fileInput.files[0]
    },

    btnSubmit_click () {
      let formData = new FormData;
      const me = this;
      if(this.customerId && this.file) {
        this.showError = false;
        this.message = '';
        formData.append('file',this.file);
        formData.append('rotate', this.rotate);
        formData.append('customerId', this.customerId)
        axios.post('http://127.0.0.1:8000/',
          formData,
          {
            headers: {
              'Content-Type':'multipart/form-data'
            }
          }
        )
        .then(response => {
          // handle success
          if (response.data) {
            let data = response.data.replace(/'/g, '"');
            me.data = JSON.parse(data);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          me.showError = true;
          me.message = 'Error';
        })
        .finally(function () {
          // always executed
        });
      }
      else if (!this.customerId){
        this.showError = true;
        this.message = 'Customer id is required!';
      }
      else {
        this.showError = true;
        this.message = 'Please chose a image!';
      }
    },

    rotate_left() {
      this.rotate = (this.rotate - 15) % 360;
    },

    rotate_right() {
      this.rotate = (this.rotate + 15) % 360;
    },

    gotoRegister () {
      this.$router.push('login')
    }
  }
}
<template>
  <Page class="AddProduct-modal">
    <StackLayout verticalAlignment="center" horizontalAlignment="center">
      <TextField v-model="textFieldValue" hint="Type new product..." editable="true"/> 

      <Button text="Add Product" @tap="onAddProduct" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: [ 'todos' ],
  methods: {
    onAddProduct() {
      if (this.textFieldValue === "") return;
      this.$store.commit('addProductToBuy', this.textFieldValue);
      this.textFieldValue = "";
      this.$modal.close();
    },
  },
  data() {
    return {
      textFieldValue: "",
    }
  }  
}
</script>

<style scoped>
  .AddProduct-modal {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  TextField {
    width: 80%;
    font-size: 20;
    color: #53ba82;
    background-color: white;
    margin-top: 10;
    margin-bottom: 40;
    margin-right: 5;
    margin-left: 20;
  }

  Button {
    width: 40%;
    font-size: 20; 
    font-weight: bold; 
    color: white; 
    background-color: #53ba82; 
    height: 40;
    margin-top: 10; 
    margin-bottom: 10; 
    margin-right: 10; 
    margin-left: 10; 
    border-radius: 20px; 
  }
</style>

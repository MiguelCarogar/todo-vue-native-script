<template>
  <Page class="page">
    <ActionBar title="My Products" class="action-bar">
      <ActionItem @tap="$showModal(addProduct)"
        ios.systemIcon="4" ios.position="right"
        android.systemIcon="ic_menu_add" android.position="actionBar"
      />   
    </ActionBar>

    <TabView height="100%" androidTabsPosition="bottom" selectedTabTextColor="#53ba82" tabTextFontSize="15" >
         
      <TabViewItem title="To Do" textTransform="uppercase" >
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">
          <StackLayout>
            <ActivityIndicator horizontalAlignment="center" top="50" width="10" height="50" :busy="isBusy" />
          </StackLayout>

          <ListView class="list-group" for="product, index in productsToBuy" style="height:75%" separatorColor="transparent" > 
            <v-template>
              <GridLayout columns="*, 200" rows="*">
                <Label row="0" col="0" id="active-task" :text="product" class="list-group-item-heading" textWrap="true" />
                <Button row="0" col="1" text="Mark as bought" @tap="onNormalProductTap(product, index)" />
              </GridLayout>
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed" textTransform="uppercase">
        <StackLayout orientation="vertical" width="100%" height="100%">
          <StackLayout>
            <ActivityIndicator horizontalAlignment="center" top="50" width="10" height="50" :busy="isBusy" />
          </StackLayout>
          <ListView class="list-group" for="product, index in boughtProducts" style="height:75%" separatorColor="transparent">
            <v-template>
              <GridLayout columns="*, 200" rows="*">
                <Label row="0" col="0" id="completed-task" :text="product" class="list-group-item-heading" textWrap="true" />
                <Button row="0" col="1" text="Mark as to Buy" @tap="onBoughtProductTap(product, index)" />
              </GridLayout>  
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import AddProduct from './AddProduct';

export default {
  computed: {
    productsToBuy() {
      return this.$store.state.productsToBuy;
    },

    boughtProducts() {
      return this.$store.state.boughtProducts;
    },
  },

  methods: {
    onNormalProductTap: function(product, index) {
      this.$store.commit('addBoughtProduct', product, index);
    },

    onBoughtProductTap: function(product, index) {
      this.$store.commit('addProductToBuy', product, index);
    },
  },

  data() {
    return {
      isBusy: false,
      addProduct: AddProduct
    };
  },
}
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    TextField {
      font-size: 20;
      color: #53ba82;
      margin-top: 10;
      margin-bottom: 10;
      margin-right: 5;
      margin-left: 20;
    }

    Button { 
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

    #active-task {
      font-size: 20;
      font-weight: bold;
      color: #53ba82;
      margin-left: 20;
      padding-top: 5;
      padding-bottom: 10;
    }

    #completed-task {
      font-size: 20;
      color: #d3d3d3;
      margin-left: 20;
      padding-top: 5;
      padding-bottom: 10;
      text-decoration: line-through;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .home-panel {
      vertical-align: center;
      font-size: 20;
      margin: 15;
    }

    .description-label {
      margin-bottom: 15;
    }
</style>

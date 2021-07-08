<template>
  <Page>
    <ActionBar title="Login" />
    <ScrollView>
      <StackLayout class="home-panel">
        <GridLayout columns="160, 120" rows="60, auto" width="90%"
                    height="100%">
          <Label text="Identifiant 1" row="0" col="0" />
          <TextField row="0" , col="1" v-model="usernameInput"
                     hint="Enter text..." />
          <Label text="Mot de passe" row="1" col="0" colSpan="2" />
          <TextField row="1" , col="1" v-model="passwordInput"
                     hint="Enter text..." />

        </GridLayout>
        <Button text="Login" @tap="buttonPressed" />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>

  import axios from "axios";
  import App from './App';

  export default {
    data() {
      return{
        appPage: App
      }
    },
    methods: {
      buttonPressed() {
        console.log("Button was pressed"+this.usernameInput)

        axios.post('http://91.168.173.12:58100/login', {
          'email': this.usernameInput,
          'password': this.passwordInput
        }).then(function (response) {
              if(response.status == 200){
                alert("Connexion ok");

                this.$navigateTo(appPage)
              }
            })

      },
    },
  };
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>

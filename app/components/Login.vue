<template>
  <Page>
    <ActionBar title="Login" />
    <ScrollView>
      <StackLayout class="home-panel">
        <GridLayout columns="160, 120" rows="60, auto" width="90%"
                    height="100%">
          <Label text="Identifiant 1" row="0" col="0" />
          <TextField row="0" , col="1" v-model="Username"
                     hint="Enter text..." />
          <Label text="Mot de passe" row="1" col="0" colSpan="2" />
          <TextField row="1" , col="1" v-model="Password"
                     hint="Enter text..." />

        </GridLayout>
        <Button text="Login" @tap="onButtonTap" />

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Http, HttpResponse } from '@nativescript/core';

export default {
  methods: {
    onButtonTap() {
      Http.getString('https://httpbin.org/get').then(
          (result: string) => {
            viewModel.set('getStringResult', r)
          },
          e => {}
      )
    }
  }
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

<template>
  <v-app>

    <!-- トップナビ -->
    <v-app-bar color="white" flat app>
      <v-toolbar-title>Software Club</v-toolbar-title>
      <v-tabs color="grey darken-1" v-model="tab">
        <v-tab height="100%" v-for="link in links" :key="link">{{ link }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- メイン -->
    <v-main style="background: #EEEEEE;">
      <v-container fluid>
        <v-window v-model="tab">
          <v-window-item v-for="link in links" :key="link">

            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="2">
                  <v-card flat>
                    <v-card-text v-text="link"></v-card-text>
                  </v-card>
                </v-col>
              
                <v-col cols="12" sm="8">
                  <v-sheet min-height="70vh" rounded="lg"></v-sheet>
                </v-col>
              
                <v-col cols="12" sm="2">
                  <v-sheet rounded="lg" min-height="268">
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>

          </v-window-item>
        </v-window>
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup lang="ts">
  const tab = ref(null);
  const links: string[] = [
    'Dashboard',
    'Users'
  ];
</script>

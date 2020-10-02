<template>
  <v-container>
    <v-divider />
    <v-card class="mb-4" flat>
      <v-card-text>
        <v-form ref="form">
          <v-card-subtitle>Comments</v-card-subtitle>
          <v-text-field
            counter
            v-model="name"
            label="Name"
            prepend-icon="mdi-account-circle"
            :rules="rules.name"
            style="max-width: 400px"
          ></v-text-field>
          <v-textarea
            counter
            v-model="comment"
            label="Comment"
            prepend-icon="mdi-comment"
            :rules="rules.comment"
          ></v-textarea>
          <v-btn color="primary" @click="submit" class="mt-2">
            Submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card v-for="c of comments" :key="c.id" class="mb-4" outlined flat>
      <v-card-title>{{ c.name }}</v-card-title>
      <v-card-text>{{ c.text }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'comment-section',
  data() {
    return {
      rules: {
        name: [
          v => v && v.length <= 20 || 'Write a name max 20 characters'
        ],
        comment: [
          v => v && v.length <= 500 || 'Write a comment max 500 characters'
        ],
      },
      name: '',
      comment: '',
      comments: [],
      collection: null
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (window.firestore) {
          this.collection.add({ name: this.name, text: this.comment })
            .catch(err => console.log(`error adding comment: ${err}`))
        }
        this.comments.push({ name: this.name, text: this.comment })
        this.$refs.form.reset();
      }
    }
  },
  created() {
    if (window.firestore) {
      this.collection = firestore.collection('comments95');
      this.collection.onSnapshot(snapshot => {
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.comments = posts;
      })
    }
  }
}
</script>
<template>
  <div>
    <div v-for="post in posts">
      <post
        :id="post.$id"
        :title="post.title"
        :desc="post.desc"
        :owner="post.owner"
        :createDate="post.$createdAt"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Models } from "appwrite";
import post from "../components/home/post.vue";
const { database: db } = useAppwrite();

let posts: Models.Document[];
try {
  posts = (
    await db.listDocuments("649df44a17f9aa64d617", "649e91cb0aa2504dc506", [])
  ).documents;
} catch (error) {
  console.error("error is: ", error);
}
</script>

<style scoped></style>

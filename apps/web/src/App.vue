<script setup lang="ts">
import type { User } from '@ai-workspace/shared';

const user: User = {
  id: '1',
  username: 'JohnDoe',
  email: '984387070@qq.com'
};
</script>

<template>
  <div>
    <h1>AI Workspace</h1>
    <p>Current User: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

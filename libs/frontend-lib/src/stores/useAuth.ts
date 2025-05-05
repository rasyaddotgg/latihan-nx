import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuth = defineStore('auth', () => {
  const user = ref({
    id: 1,
    username: 'fulan',
    name: 'Fulan',
    email: 'fulan@example.com',
  });

  function login() {
    user.value = {
      ...user.value,
      username: 'johndoe',
    };
    console.log('Login fhruhfur');
  }

  function logout() {
    user.value = {
      ...user.value,
      username: 'johnlogout',
    };
    console.log('Logout');
  }

  return { user, login, logout };
});

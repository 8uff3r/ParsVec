import { defineStore } from 'pinia';
import PocketBase from 'pocketbase';
export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuthed = ref(false);
    const setAuthed = (val: boolean) => (isAuthed.value = val);

    return { isAuthed, setAuthed };
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);

import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const userInfo = ref();
  const setUserInfo = (val: any) => userInfo.value = val;

  return { userInfo, setUserInfo };
}, {
  persist: {
    storage: persistedState.localStorage,
  },
});

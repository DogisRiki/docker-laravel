// import { getUser } from "@/features/auth/api/getUser";
// import { useAuthStore } from "@/features/auth/stores/authStore";

// /**
//  * 認証状態を管理するカスタムフック
//  */
// export const useAuth = () => {
//     const { setLogin, setLogout, isLoggedIn, user } = useAuthStore();

//     /**
//      * 認証状態をチェックし、ユーザー情報を設定
//      */
//     const checkAuth = async () => {
//         const authUser = await getUser();
//         if (authUser) {
//             setLogin(authUser);
//         } else {
//             setLogout();
//         }
//     };

//     return { checkAuth, isLoggedIn, user };
// };

import { ROUTES } from "@/configs/routes";
import { resetPassword } from "@/features/auth/api/resetPassword";
import { useAuthStore } from "@/features/auth/stores/authStore";
import { ResetPasswordData } from "@/features/auth/types/authTypes";
import { useNavigate } from "react-router-dom";

/**
 * パスワードリセットカスタムフック
 */
export const useResetPassword = () => {
    const navigate = useNavigate();
    const { setLogout } = useAuthStore();

    const handleResetPassword = async (data: ResetPasswordData) => {
        await resetPassword(data);
        alert("パスワードをリセットしました。ログイン画面へ遷移します。");
        setLogout();
        navigate(ROUTES.LOGIN);
    };
    return { handleResetPassword };
};

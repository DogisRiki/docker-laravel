import { ResetPasswordData } from "@/features/auth/types/authTypes";
import { apiClient } from "@/lib/apiClient";

/**
 * パスワードリセットAPI
 * @param data パスワードリセット用のトークン、パスワード、パスワード再確認
 */
export const resetPassword = async (data: ResetPasswordData): Promise<void> => {
    await apiClient.get("/sanctum/csrf-cookie");
    await apiClient.post("/reset-password", data);
};

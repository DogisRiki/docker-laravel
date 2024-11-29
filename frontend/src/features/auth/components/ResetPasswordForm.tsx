import { Button } from "@/components/Button";
import { TextField } from "@/components/TextFiled";
import { useResetPassword } from "@/features/auth/hooks/useResetPassword";
import { ResetPasswordData } from "@/features/auth/types/authTypes";
import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

/**
 * パスワードリセットフォーム
 */
export const ResetPasswordForm = () => {
    const { token } = useParams<{ token: string }>();
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const { handleResetPassword } = useResetPassword();

    /**
     * パスワードリセット処理
     */
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) {
            alert("トークンが見つかりません。パスワードリセットをやり直してください。");
            return;
        }

        const resetData: ResetPasswordData = {
            token,
            password,
            password_confirmation: passwordConfirmation,
        };

        try {
            await handleResetPassword(resetData);
        } catch {
            alert("パスワードリセットに失敗しました。もう一度お試しください。");
        }
    };

    return (
        <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 300, mx: "auto" }}>
            <TextField
                type="password"
                label="新しいパスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <TextField
                type="password"
                label="パスワード確認"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                パスワードをリセット
            </Button>
        </Box>
    );
};

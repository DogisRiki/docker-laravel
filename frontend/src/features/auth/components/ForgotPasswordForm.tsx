import { Button } from "@/components/Button";
import { TextField } from "@/components/TextFiled";
import { Typography } from "@/components/Typography";
import { useForgotPassword } from "@/features/auth/hooks/useForgotPassword";
import { Box } from "@mui/material";
import { useState } from "react";

/**
 * パスワードリセットフォーム
 */
export const ForgotPasswordForm = () => {
    const { handleForgotPassword } = useForgotPassword();
    const [email, setEmail] = useState("");

    /**
     * パスワードリセット処理
     */
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleForgotPassword({ email });
    };

    return (
        <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
            <Typography variant="h6" gutterBottom>
                パスワードリセット
            </Typography>
            <TextField
                label="メールアドレス"
                fullWidth
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                リセットリンクを送信
            </Button>
        </Box>
    );
};

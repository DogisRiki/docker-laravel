import { Button } from "@/components/Button";
import { TextField } from "@/components/TextFiled";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { Box } from "@mui/material";
import React, { useState } from "react";

/**
 * ログインフォーム
 */
export const LoginForm = () => {
    const { handleLogin } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /**
     * ログイン処理
     */
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleLogin({ email, password });
    };

    return (
        <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
            <TextField
                label="メールアドレス"
                fullWidth
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                label="パスワード"
                fullWidth
                required
                type="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                ログイン
            </Button>
        </Box>
    );
};

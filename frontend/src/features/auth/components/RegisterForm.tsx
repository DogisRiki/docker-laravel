import { Button } from "@/components/Button";
import { TextField } from "@/components/TextFiled";
import { Typography } from "@/components/Typography";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { RegisterData } from "@/features/auth/types/authTypes";
import { Box } from "@mui/material";
import React, { useState } from "react";

/**
 * ユーザー登録フォーム
 */
export const RegisterForm = () => {
    const { handleRegister } = useRegister();

    const [formData, setFormData] = useState<RegisterData>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    /**
     * 入力値の変更ハンドラー
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * ユーザー登録処理
     */
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleRegister(formData);
        setFormData({ name: "", email: "", password: "", password_confirmation: "" });
    };

    return (
        <Box component={"form"} onSubmit={onSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
            <Typography variant="h6" gutterBottom>
                新規登録
            </Typography>
            <TextField
                label="名前"
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="メールアドレス"
                fullWidth
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="パスワード"
                fullWidth
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                label="パスワード（確認用）"
                fullWidth
                required
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                登録
            </Button>
        </Box>
    );
};

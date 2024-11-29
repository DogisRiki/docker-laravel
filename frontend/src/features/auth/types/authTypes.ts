/**
 * ログイン情報
 */
export interface LoginCredentials {
    email: string;
    password: string;
}

/**
 * ユーザー登録情報
 */
export interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

/**
 * パスワード忘れ情報
 */
export interface ForgotPasswordData {
    email: string;
}

/**
 * パスワードリセット情報
 */
export interface ResetPasswordData {
    token: string;
    password: string;
    password_confirmation: string;
}

/**
 * ユーザー情報
 */
export type AuthUser = {
    id: string;
    name: string;
};

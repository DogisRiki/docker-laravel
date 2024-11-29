<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Log::info("==============bootStart==============");
        ResetPassword::createUrlUsing(function ($user, string $token) {
            Log::info("ResetPassword:",  [
                "token" => $token,
                "email" => $user->getEmailForPasswordReset(),
            ]);
            // フロントエンドのURLを取得
            $frontendUrl = config('app.frontend_url', env('FRONTEND_URL'));
            Log::info("frontendUrl", $frontendUrl);

            // フロントエンド向けのパスワードリセットリンクを生成
            return "{$frontendUrl}/reset-password?token={$token}&email={$user->getEmailForPasswordReset()}";
        });
    }
}

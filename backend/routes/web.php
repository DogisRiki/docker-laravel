<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

// Route::get('/reset-password/{token}', function ($token) {
//     return response()->json(['token' => $token]);
// })->middleware('guest')->name('password.reset');

require __DIR__ . '/auth.php';

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\RoleMiddleware;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login'])->middleware('web');
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
// Route::get('/user', fn () => auth()->user())->middleware(['auth:sanctum', RoleMiddleware::class . ':admin']);


Route::middleware('auth:sanctum')->get('/user', function () {
    return auth()->user();
});

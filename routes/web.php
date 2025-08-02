<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;



Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

Route::get('/sanctum/csrf-cookie', function () {
    return response()->json(['csrf' => csrf_token()]);
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/register', [AuthController::class, 'register']);

/* Route::get('/', function () {
    return view('welcome');
}); */

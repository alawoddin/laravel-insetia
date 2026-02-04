<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return view('app');
});


Route::get('/', function () {
    // return view('welcome');
    return Inertia::render('Home');
});

// http://localhost:8000/about
Route::get('/about', function () {
    return Inertia::render('About');
});


Route::get('/posts', [PostController::class, 'index']);

// Route::get('/posts/{id}', [PostController::class, 'show']);

Route::get('/posts/create', [PostController::class, 'create']);

Route::get('/posts/{id}', [PostController::class, 'show']);
Route::post('/posts', [PostController::class, 'store']);
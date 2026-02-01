<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{

 public function index(): Response {
        return Inertia::render('Posts/index', [
            'posts' => Post::latest()->get()
        ]);
    }

      public function show(string $id): Response {
        return Inertia::render('Posts/show', [
            'post' => Post::findOrFail($id)
        ]);
    }
}

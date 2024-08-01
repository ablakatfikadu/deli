<?php

namespace App\Http\Controllers\Post;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;

class userpostcontroller extends Controller
{
    public function create(Request $request)
    {
        $post = new Post();
        $post->title = $request->input('title');
        $post->description = $request->input('description');
        $post->save();

        return response()->json(['message' => 'Post created successfully'], 201);
    }
}
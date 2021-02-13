<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class postController extends Controller
{
    public function createPost(Request $request){
        $post = new Post;
        $post->createPost($request);
        return response()->json(['Sucesso' => $post]);
    }

    public function updatePost(Request $request, $id){
        $post = Post::find($id);
        $post->updatePost($request);
        return response()->json(['Sucesso' => $post]);
    }

    public function readPosts (Request $request){
        $post = Post::all();
        return response()->json(['Sucesso' => $post]);
    }
    public function readPost (Request $request, $id){
        $post = Post::find($id);
        return response()->json(['Sucesso' => $post]);
    }
    public function deletePost (Request $request, $id){
        post::destroy($id);
        return response()->json(['Sucesso']);
    }
}

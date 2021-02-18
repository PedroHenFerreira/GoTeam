<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Auth;

class postController extends Controller
{
    public function createPost(Request $request){
        $post = new Post;
        $post->createPost($request);
        return response()->json(['Sucesso' => $post]);
    }

    public function updatePost(Request $request, $id){
        $user = Auth::user();
        $post = Post::find($id);
        if ($post->user_id == $user->id)
        {$post->updatePost($request);
        return response()->json(['Sucesso' => $post]);}
        else {
        return response()->json('Erro', 403);
          }
        }
    public function readPosts (){
        $post = Post::all();
        return response()->json([$post]);
    }
    public function readPost (Request $request, $id){
        $post = Post::find($id);
        return response()->json(['Sucesso' => $post]);
    }
    public function deletePost ($id){
        $user = Auth::user();
        $post = Post::find($id);
        if ($post->user_id == $user->id)
        {Post::destroy($id);
        return response()->json(['Sucesso']);}
        else {
        return response()->json('Erro', 403);
        }
    }


}

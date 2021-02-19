<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Auth;

class commentController extends Controller
{
    public function createComment(Request $request, $post_id){
        $comment = new Comment;
        $comment->createComment($request, $post_id);
        return response()->json(['Sucesso' => $comment]);
    }

    
    
    public function updateComment(Request $request, $id){
        $user = Auth::user();
        $comment = Comment::find($id);
        if ($comment->user_id == $user->id)
        {$comment->updateComment($request);
        return response()->json(['Sucesso' => $comment]);}
        else {
        return response()->json('Erro', 403);
            }

    }

    
    
    public function readComments (Request $request){
        $comment = Comment::all();
        return response()->json(['Sucesso' => $comment]);
    }
    
    
    public function readComment (Request $request, $id){
        $comment = Comment::find($id);
        return response()->json(['Sucesso' => $comment]);
    }
    
    
    public function deleteComment (Request $request, $id){
        $user = Auth::user();
        $comment = Comment::find($id);
        if ($comment->user_id == $user->id)
        {Comment::destroy($id);
        return response()->json(['Sucesso']);}
        else {
        return response()->json('Erro', 403);
            }
    }
}

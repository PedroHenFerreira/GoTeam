<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class commentController extends Controller
{
    public function createComment(Request $request){
        $comment = new Comment;
        $comment->createComment($request);
        return response()->json(['Sucesso' => $comment]);
    }

    public function updateComment(Request $request, $id){
        $comment = Comment::find($id);
        $comment->updateComment($request);
        return response()->json(['Sucesso' => $comment]);
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
        Comment::destroy($id);
        return response()->json(['Sucesso']);
    }
}

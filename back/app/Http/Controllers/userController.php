<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Auth;


class userController extends Controller
{
    public function createUser(Request $request){
        $user = new User;
        $user->createUser($request);
        return response()->json(['Sucesso' => $user]);
    }
    public function updateUser(Request $request, $id){
        $user = User::find($id);
        $user->updateUser($request);
        return response()->json(['Sucesso' => $user]);
    }
    public function readUsers (Request $request){
        $user = User::all();
        return response()->json(['Sucesso' => $user]);
    }
    public function readUser (Request $request, $id){
        $user = User::find($id);
        return response()->json(['Sucesso' => $user]);
    }
    public function deleteUser (Request $request, $id){
        User::destroy($id);
        return response()->json(['Sucesso']);
    }

    public function createPost (Request $request) {
        $post = new Post;
        $post->createPost($request);
        return response()->json($post, 200);


      }

      }

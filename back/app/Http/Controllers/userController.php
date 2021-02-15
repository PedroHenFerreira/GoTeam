<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


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
    public function readUser (Request $reques, $id){
        $user = User::find($id);
        return response()->json(['Sucesso' => $user]);
    }
    public function deleteUser (Request $request, $id){
        User::destroy($id);
        return response()->json(['Sucesso']);
    }

}

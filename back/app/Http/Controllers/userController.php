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


    
    
    public function searchUser ($name){
      $user = User::where('name','=',$name)->get();
      return response()->json([$user]);
    }

  
  
  
    public function followUser ($id){
    $user = Auth::user();
    $user->userFollowing()->attach($id);
    return response()->json(['Sucesso', 200]);
  }
  
  
  
  public function unfollowUser ($id){
    $user = Auth::user();
    $user->userFollowing()->detach($id);
    return response()->json(['Sucesso', 200]);
  }


}

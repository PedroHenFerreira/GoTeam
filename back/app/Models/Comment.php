<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Comment extends Model
{
    public function createComment(Request $request){
        $this->bodyText = $request->bodyText;
        $this->media = $request->media;
        $this->save();
    }
    public function updateComment(Request $request){
        if ($request->bodyText){
            $this->bodyText = $request->bodyText;  
        }
        if ($request->media){
            $this->media = $request->media;
        }
        $this->save();
     }
     public function user(){
        return $this->belongsTo('App\Models\User');
       }
}
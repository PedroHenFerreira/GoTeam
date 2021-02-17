<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\postController;
use App\Http\Controllers\eventController;
use App\Http\Controllers\commentController;
use App\Http\Controllers\PassportController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('users', [userController::class, 'createUser']);
Route::put('users/{id}', [userController::class, 'updateUser']);
Route::get('users', [userController::class, 'readUsers']);
Route::get('users/{id}', [userController::class, 'readUser']);
Route::delete('users/{id}', [userController::class, 'deleteUser']);
Route::get('user/{name}', [userController::class, 'searchUser']);


Route::post('post', [postController::class, 'createPost']);
Route::put('post/{id}', [postController::class, 'updatePost']);
Route::get('post', [postController::class, 'readPosts']);
Route::get('post/{id}', [postController::class, 'readPost']);
Route::delete('post/{id}', [postController::class, 'deletePost']);


Route::post('event', [eventController::class, 'createEvent']);
Route::put('event/{id}', [eventController::class, 'updateEvent']);
Route::get('event', [eventController::class, 'readEvent']);
Route::get('event/{id}', [eventController::class, 'readEvent']);
Route::delete('event/{id}', [eventController::class, 'deleteEvent']);


Route::post('comment', [commentController::class, 'createComment']);
Route::put('comment/{id}', [commentController::class, 'updateComment']);
Route::get('comment', [commentController::class, 'readComment']);
Route::get('comment/{id}', [commentController::class, 'readComment']);
Route::delete('comment/{id}', [commentController::class, 'deleteComment']);


Route::post('register', [passportController::class, 'register']);
Route::post('login', [passportController::class, 'login']);


Route::group(['middleware' => 'auth:api'], function(){
    Route::get('logout', [passportController::class, 'logout']);
    Route::get('getDetails', [passportController::class, 'getDetails']);
});

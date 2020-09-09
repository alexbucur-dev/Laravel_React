<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/formN', 'FormNController@store')->name('formn.store');
Route::get('dashboard', [\App\Http\Controllers\DashboardController::class, 'routeReact']);
Route::get('/base/cards', [\App\Http\Controllers\DashboardController::class, 'routeReact']);

Route::get('/formBasic', [\App\Http\Controllers\DashboardController::class, 'routeReact']);
Route::get('/formN', [\App\Http\Controllers\DashboardController::class, 'routeReact']);
Route::get('/', function () {
    return view('index');
});

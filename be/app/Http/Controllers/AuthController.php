<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $user = User::where('email', $request->input('email'))->get();
        if (count($user)) {
            return response()->json([
                'success' => 'false',
                'message' => 'Email already exist',
            ]);
        }

        $newUser = new User;

        $newUser->name = $request->input('name');
        $newUser->email = $request->input('email');
        $newUser->password = Hash::make($request->input('password'));
        $newUser->phone = $request->input('phone');
        $newUser->address = $request->input('address');
        $newUser->role = "staff";

        $newUser->save();

        return response()->json([
            'success' => 'true',
            'message' => 'create successful',
            'user' => $newUser,
        ]);

    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => 'false',
                'message' => 'Login Failed',
            ]);
        }

        $user = Auth::user();
        return response()->json([
            'success' => 'true',
            'message' => 'Login successfully',
            'user' => $user,
        ]);
    }

    public function getUser(Request $request)
    {
        return response()->json([
            'success' => 'true',
            'user' => $request->user(),
        ]);
    }

}

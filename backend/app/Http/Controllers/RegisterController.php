<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Register;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $register = new Register();
        $register->firstname = $request->input('firstName');
        $register->lastname = $request->input('lastName');
        $register->phonenumber = $request->input('phoneNumber');
        $register->email = $request->input('email');
        $register->password = $request->input('password');
        $register->save();

        return response()->json(['message' => 'Registration successful']);
    }
}
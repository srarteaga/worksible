<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class serviceController extends Controller
{
    public function getServices(Request $request)
    {
        return  response()->json(Auth::user()->services, 200);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

         if($request->header('Authorization'))
         {
            $token = $request->header('Authorization');
            $user = User::where('token', $token)->first();
            if(isset($user))
            {
                Auth::login($user);
                return $next($request);
                
            }
         }
    
        return response()->json('Unauthorized', 401);
    }
}

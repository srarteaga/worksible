<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = collect([
            [
                'email' => 'admin@admin.com',
                'token' => base64_encode('admin@admin.com')
            ],
            [
                'email' => 'test@admin.com',
                'token' => base64_encode('test@admin.com')
            ],
            [
                'email' => 'user@admin.com',
                'token' => base64_encode('user@admin.com')
            ]
        ]);
        foreach($users as $user){

            DB::table('users')->insert($user);
        }
    }
}

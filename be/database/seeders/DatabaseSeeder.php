<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'tung1',
            'email' => 'tung1@gmail.com',
            'password' => Hash::make('tung2002'),
            'phone' => '0982989417',
            'address' => "hanoi",
            'role' => 'staff'
        ]);
    }
}

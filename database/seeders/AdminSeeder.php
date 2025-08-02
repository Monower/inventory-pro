<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\User;
use App\Models\Role;
use App\Models\Permission;

class AdminSeeder extends Seeder
{
    public function run()
    {
        // Create admin role
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
        ]);

        // Define some permissions
        $permissions = [
            'manage users',
            'manage roles',
            'manage permissions',
            // add more if you want
        ];

        // Create permissions and attach to admin role
        $permissionIds = [];
        foreach ($permissions as $permName) {
            $permission = Permission::firstOrCreate(['name' => $permName]);
            $permissionIds[] = $permission->id;
        }

        // Attach permissions to admin role
        $adminRole->permissions()->sync($permissionIds);

        // Create admin user
        $adminUser = User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('123'), // Change this password ASAP!
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
            ]
        );

        // Attach admin role to user
        $adminUser->roles()->syncWithoutDetaching([$adminRole->id]);
    }
}

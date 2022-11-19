<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(rand(1, 4), true),
            'description' => fake()->paragraph(2),
            'price' => fake()->numberBetween(100, 1000),
            'url' => fake()->url(),
            'type' => fake()->randomElement(['BD', 'desing', 'hosting', 'development']),
            'user_id' => User::all()->random()->id,
        ];
    }
}

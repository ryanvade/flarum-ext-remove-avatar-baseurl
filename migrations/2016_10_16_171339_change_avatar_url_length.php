<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        Schema::table('users', function($table) {
	$table->string('avatar_path', 160)->change();
	});
    },
    'down' => function (Builder $schema) {
        // no columns have been renamed...
    }
];

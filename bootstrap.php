<?php Namespace Ryanvade\AvatarBaseURLRemove;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;
return function (Dispatcher $events) {
	$events->subscribe(Listener\AddClientAssets::class);
};
